const Quote = () => {
  return (
    <h1 className='flex flex-col items-center justify-center gap-4 leading-36'>
      {' '}
      <q className='text text-9xl'>Talk is cheap. Show me the code.</q>
      <p className='text'>- Linus Torvalds</p>{' '}
      {/*TODO сделать маркерную обводку variant(1,2,3)  */}
    </h1>
  );
};

export default Quote;
