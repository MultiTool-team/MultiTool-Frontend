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
    <div className='text-alt flex flex-col gap-2 rounded-xl border-1 border-[var(--bg-dark)] px-2 py-8 dark:border-[var(--bg-light)]'>
      <h3 className='text-4xl uppercase'>{developerName}</h3>
      <span>{developerDefinition}</span>
      <p className='tracking-wider text-balance'>{description}</p>
      <div className='text-alt stext-2xl mx-auto flex w-full flex-col gap-2'>
        <p className='flex items-center justify-center gap-4 text-2xl'>Role:</p>
        <div className='mx-auto flex items-center gap-4'>
          {roles.map((role, index) => (
            <Badge
              text={role}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
