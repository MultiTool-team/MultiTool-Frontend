import { WeatherView } from '..';

const DailyWeather = () => {
  const props1 = {
    title: 'now',
    icon: '',
    temperature: 12,
  };

  const props2 = {
    title: 'yes',
    icon: '',
    temperature: [12, 24],
  };
  return (
    <section className='bg text-alt flex h-120 w-full items-center justify-between rounded-4xl px-8 py-4'>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ipsam
        facilis in voluptate quidem minima illum tempore error aspernatur saepe
        assumenda sapiente nisi voluptatem reiciendis dolor maiores laborum,
        aliquid neque.
        <hr />
        <WeatherView {...props1} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ipsam
        facilis in voluptate quidem minima illum tempore error aspernatur saepe
        assumenda sapiente nisi voluptatem reiciendis dolor maiores laborum,
        aliquid neque.
        <WeatherView {...props2} />
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ipsam
        facilis in voluptate quidem minima illum tempore error aspernatur saepe
        assumenda sapiente nisi voluptatem reiciendis dolor maiores laborum,
        aliquid neque.
      </p>
    </section>
  );
};

export default DailyWeather;
