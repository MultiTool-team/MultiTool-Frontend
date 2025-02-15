import { IDeveloperNames } from '../../helpers/main/developers';

const Library = () => {
  type Books = 'cleanCode' | 'ML' | 'EloquentJS';
  const BOOKS_TITLE_DESCRIPTION: {
    title: Books;
    description: string;
    whoRead: IDeveloperNames;
  }[] = [
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

  return (
    <>
      <h2 className='text flex w-full flex-col items-center justify-center gap-4 text-center text-6xl leading-18'>
        Here is the collection <br /> of the best books <br /> that we have read
        <hr className='text w-full max-w-[50%]' />
        <div className='mt-5 flex w-full flex-col justify-between gap-8'>
          {BOOKS_TITLE_DESCRIPTION.map((book, index) => (
            <div
              className={`${index % 2 === 0 ? 'flex' : 'flex flex-row-reverse'} bg mx-auto items-center justify-between gap-8 rounded-4xl px-8 py-4`}
            >
              <img
                src={`/Books/${book.title}.jpg`}
                alt={`Book - ${book.title}`}
                width={150}
                height={150}
                className={`rounded-3xl ${index % 2 === 0 ? 'ml-0' : 'ml-auto'} text-alt md:h-[450px] md:w-[350px]`}
              />
              <div className='flex flex-col items-center gap-4'>
                <p className='text-alt max-w-[200px] rounded-4xl text-xs leading-4 md:max-w-[600px] md:text-2xl md:leading-8'>
                  {book.description}
                </p>
                <q className='title text-4xl md:text-2xl'>{book.whoRead}</q>
              </div>
            </div>
          ))}
        </div>
      </h2>
    </>
  );
};

export default Library;
