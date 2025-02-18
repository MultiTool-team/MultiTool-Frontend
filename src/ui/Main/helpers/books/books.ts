import { Book } from './book';
import { IDeveloperNames } from '../developers/developersName';

export interface IBooksTitleDescription {
	title: Book;
	description: string;
	whoRead: IDeveloperNames;
}

export const BOOKS_TITLE_DESCRIPTION: IBooksTitleDescription[] = [
  {
    title: 'cleanCode',
    description:
      'A comprehensive guide to writing clean and maintainable code, focusing on best practices, principles, and techniques to enhance code readability and reduce complexity.',
    whoRead: 'hellpes',
  },
  {
    title: 'ML',
    description:
      'Is a seminal textbook that provides an in-depth introduction to the field of deep learning, a subset of machine learning that focuses on neural networks with many layers. ',
    whoRead: 'spaklak',
  },
  {
    title: 'EloquentJS',
    description:
      'Is a modern introduction to programming using the JavaScript language. Written by Marijn Haverbeke, this book is designed for both beginners and experienced programmers looking to deepen their understanding of JavaScript and web development.',
    whoRead: 'marat',
  },
];
