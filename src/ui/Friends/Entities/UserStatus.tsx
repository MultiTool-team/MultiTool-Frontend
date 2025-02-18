import { cn } from '../../../helpers/cn';

export type UserStatusType = 'online' | 'offline' | 'away';

interface UserStatusProps {
  status: UserStatusType;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const UserStatus: React.FC<UserStatusProps> = ({
  status,
  className,
  showLabel = true,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-4 w-4',
  };

  const statusColors = {
    online: 'bg-emerald-500',
    offline: 'bg-red-600',
    away: 'bg-amber-500',
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span
        className={cn('rounded-full', sizeClasses[size], statusColors[status])}
      />
      {showLabel && <span className='text-sm capitalize'>{status}</span>}
    </div>
  );
};

export default UserStatus;
