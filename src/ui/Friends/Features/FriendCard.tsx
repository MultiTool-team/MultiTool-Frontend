import { cn } from '../../../helpers/cn';
import { UserStatus } from '../Entities';
import { Friend } from '../Entities/Friend';

export interface FriendCardProps extends Omit<Friend, 'id' | 'unreadMessages'> {
  className?: string;
  isActive?: boolean;
  unreadCount?: number;
  onClick?: () => void;
}

const FriendCard: React.FC<FriendCardProps> = ({
  avatar,
  username,
  status,
  className,
  isActive = false,
  unreadCount = 0,
  lastMessage,
  onClick,
}) => {
  return (
    <div
      className={cn(
        'group flex w-full cursor-pointer items-center gap-4 rounded-xl p-4 transition-colors',
        'hover:bg-accent/50',
        isActive ? 'bg-alt text' : 'bg-background',
        className
      )}
      onClick={onClick}
      role='button'
      tabIndex={0}
    >
      <div className='relative'>
        <img
          src={avatar}
          alt={`${username}'s avatar`}
          className='h-12 w-12 rounded-full object-cover'
          onError={e => {
            (e.target as HTMLImageElement).src = '/default-avatar.png';
          }}
        />
        <div className='absolute right-0 bottom-0'>
          <UserStatus
            status={status}
            size='sm'
            showLabel={false}
          />
        </div>
      </div>

      <div className='flex flex-1 flex-col overflow-hidden'>
        <div className='flex items-center justify-between'>
          <h3
            className={cn(
              'truncate font-medium',
              isActive ? 'text' : 'text-alt'
            )}
          >
            {username}
          </h3>
          {unreadCount > 0 && (
            <span
              className={cn(
                'flex h-5 w-5 items-center justify-center rounded-full text-xs',
                isActive ? 'text' : 'text-alt'
              )}
            >
              {unreadCount}
            </span>
          )}
        </div>

        {lastMessage && (
          <p className={cn('truncate text-sm', isActive ? 'text' : 'text-alt')}>
            {lastMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default FriendCard;
