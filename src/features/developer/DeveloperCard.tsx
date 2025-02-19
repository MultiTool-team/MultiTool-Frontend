import { memo } from 'react';
import { Link } from 'react-router';
import DeveloperDefinition, {
  IDeveloperDefinition,
} from './components/DeveloperDefinition';
import DeveloperRole, { IDeveloperRole } from './components/DeveloperRole';

interface IDeveloperCard extends IDeveloperDefinition, IDeveloperRole {
  link: string;
}

const DeveloperCard: React.FC<IDeveloperCard> = ({
  developerName,
  developerDefinition,
  description,
  roles,
  link,
}) => {
  return (
    <Link
      to={link}
      target='_blank'
      rel='noopener noreferrer'
      className='flex h-full flex-col gap-4 rounded-xl border border-[var(--bg-dark)] px-4 py-6 sm:px-6 sm:py-8 dark:border-[var(--bg-light)]'
    >
      <DeveloperDefinition
        description={description}
        developerName={developerName}
        developerDefinition={developerDefinition}
      />

      <DeveloperRole roles={roles} />
    </Link>
  );
};

export default memo(DeveloperCard);
