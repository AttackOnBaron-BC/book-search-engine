import { User } from '../models/index.js';
import { signToken, AuthenticationError } from '../services/auth.js';



interface SaveBookArgs {
  input: {
    bookId: string;
    authors: string[];
    description: string;
    title: string;
    image?: string;
    link?: string;
  };
}

interface UserInput {
  username: string;
  email: string;
  password: string;
}

interface LoginInput {
  username?: string;
  email?: string;
  password: string;
}

const resolvers = {
  Query: {
    // Get a single user by username or the currently authenticated user
    me: async (_parent: any, _args: any, context: { user?: { _id: string } }) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const foundUser = await User.findOne({ _id: context.user._id });

      if (foundUser) {
        return foundUser;
      }
      else
      {
        throw new AuthenticationError('Cannot find a user with this id!');
      }
    },

    // Get a single user by username
    user: async (_parent: any, { username }: { username: string }) => {
      const foundUser = await User.findOne({ username });

      if (foundUser) {
        return foundUser;
      }

      throw new AuthenticationError('Cannot find a user with this username!');
    },
  },

  Mutation: {
    // Create a new user
    createUser: async (_parent: any, { input }: { input: UserInput }) => {
      const user = await User.create(input);

      if (!user) {
        throw new AuthenticationError('Something went wrong!');
      }

      const token = signToken(user.username, user.password, user._id);
      return { token, user };
    },

    // Login user
    login: async (_parent: any, { input }: { input: LoginInput }) => {
      const user = await User.findOne({
        $or: [{ username: input.username }, { email: input.email }],
      });

      if (!user) {
        throw new AuthenticationError("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(input.password);

      if (!correctPw) {
        throw new AuthenticationError('Wrong password!');
      }

      const token = signToken(user.username, user.password, user._id);
      return { token, user };
    },

    // Save a book to user's savedBooks
    saveBook: async (_parent: any, { input }: SaveBookArgs, context: { user?: { _id: string } }) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: input } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      } catch (err) {
        throw new Error('Error saving book');
      }
    },

    // Remove a book from savedBooks
    removeBook: async (_parent: any, { bookId }: { bookId: string }, context: { user?: { _id: string } }) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );

      if (!updatedUser) {
        throw new Error("Couldn't find user with this id!");
      }

      return updatedUser;
    },
  },
};

export default resolvers;