import { DeveloperCharts } from '../Features';
import { SKILLS } from '../helpers/skills';

const DeveloperStats = () => {
  return (
    <section className='bg w-full rounded-xl px-18 py-6'>
      <h2 className='title mx-auto'>Stats</h2>
      <div className='flex gap-6'>
        {SKILLS.map(developer => (
          <DeveloperCharts {...developer} />
        ))}
      </div>
    </section>
  );
};

export default DeveloperStats;
