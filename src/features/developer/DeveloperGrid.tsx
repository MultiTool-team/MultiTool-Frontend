import { DEVELOPERS } from '../../helpers';
import { AnimatedContainer } from '../../shared';
import DeveloperCard from './DeveloperCard';

const DeveloperGrid = () => {
  return (
    <div className='my-6 grid grid-cols-2 grid-rows-2 gap-4'>
      {DEVELOPERS.map((dev, index) => (
        <AnimatedContainer>
          <DeveloperCard
            key={index}
            developerName={dev.developerName}
            developerDefinition={dev.developerDefinition}
            description={dev.description}
            roles={dev.roles}
            link={dev.link}
          />
        </AnimatedContainer>
      ))}
    </div>
  );
};

export default DeveloperGrid;
