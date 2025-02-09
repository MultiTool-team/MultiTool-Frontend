import { memo } from 'react';
import { Badge } from '..';

interface IDeveloperCard {
  developerName: string;
  developerDefinition: string;
  description: string;
  roles: readonly string[];
}

const DeveloperCard: React.FC<IDeveloperCard> = ({
  developerName,
  developerDefinition,
  description,
  roles,
}) => {
  return (
    <div className='flex h-full flex-col gap-4 rounded-xl border border-[var(--bg-dark)] px-4 py-6 sm:px-6 sm:py-8 dark:border-[var(--bg-light)]'>
      <h3 className='text-alt text-center text-3xl font-bold uppercase sm:text-left'>
        {developerName}
      </h3>
      <span className='text-alt text-center text-lg sm:text-left'>
        {developerDefinition}
      </span>
      <p className='text-alt text-center tracking-wide text-balance sm:text-left'>
        {description}
      </p>

      <div className='flex w-full flex-col items-center gap-2 sm:items-start'>
        <p className='text-alt text-2xl font-semibold'>Role:</p>
        <div className='flex flex-wrap justify-center gap-2 sm:justify-start'>
          {roles.map(role => (
            <Badge
              key={role}
              text={role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(DeveloperCard);
