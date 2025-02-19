import { Badge } from "../../../shared";

export interface IDeveloperRole {
  roles: readonly string[];
}

const DeveloperRole: React.FC<IDeveloperRole> = ({ roles }) => {
  return (
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
  );
};

export default DeveloperRole;
