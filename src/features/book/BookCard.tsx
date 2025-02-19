import { IBooksTitleDescription } from '../../helpers';

interface IBookCard {
  index: number;
  book: IBooksTitleDescription;
}

const BookCard: React.FC<IBookCard> = ({ index, book }) => {
  return (
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
  );
};

export default BookCard;
