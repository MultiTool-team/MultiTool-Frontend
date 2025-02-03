import { DEVELOPERS } from '../../helpers/Main/developers';
import DeveloperCard from './DeveloperCard';

const AboutDevelopers = () => {
  return (
    <section className='bg w-full rounded-xl px-18 py-6 text-center'>
      <h2 className='title'>Developers</h2>
      <div className='my-6 grid grid-cols-2 grid-rows-2 gap-4'>
        {DEVELOPERS.map((dev, index) => (
          <DeveloperCard
            key={index}
            developerName={dev.developerName}
            developerDefinition={dev.developerDefinition}
            description={dev.description}
            roles={dev.roles}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutDevelopers;
