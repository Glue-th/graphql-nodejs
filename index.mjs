import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';

const schema = gql`
  type Book {
    title: String
    author: Author
  }
  type Author {
    name: String
    age: Int
  }

  type Query {
    books: [Book],
    authors: [Author]
  }
`;

const authors = [
  {
    name: 'James',
    age: 40,
  },
  {
    name: 'Ken',
    age: 30,
  },
];
const books = [
  {
    title: 'The Awakening',
    author: authors[0],
  },
  {
    title: 'City of Glass',
    author: authors[1],
  },
];

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },
};

const server = new ApolloServer({ typeDefs: schema, resolvers });

const PORT = 3000;
const app = express();

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: PORT }, () => {
  console.log(`🚀  Server ready at localhost:${PORT}`);
});
