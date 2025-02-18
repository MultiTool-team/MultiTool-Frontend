import { BookCard } from '../Features';
import { BOOKS_TITLE_DESCRIPTION } from '../helpers/books/books';

const Library = () => {
  return (
    <>
      <h2 className='text flex w-full flex-col items-center justify-center gap-4 text-center text-6xl leading-18'>
        Here is the collection <br /> of the best books <br /> that we have read
      </h2>

      <div className='mt-5 flex w-full flex-col justify-between gap-8'>
        {BOOKS_TITLE_DESCRIPTION.map((book, index) => (
          <BookCard
            index={index}
            book={book}
          />
        ))}
      </div>
    </>
  );
};

export default Library;
