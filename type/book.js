import { Name as AuthorName } from './author.js';
export const Name = 'Book';

export const Type = `
  type Book {
    title: String
    author: ${AuthorName}
  }
`;
