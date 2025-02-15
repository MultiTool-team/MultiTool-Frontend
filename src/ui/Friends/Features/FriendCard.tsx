import React from "react";

export type Status = 'online' | 'offline';

interface IFriendCard {
  avatarImg: string;
  username: string;
  status: Status;
}

const FriendCard: React.FC<IFriendCard> = ({ avatarImg, username, status }) => {
  return (
    <div className='bg-alt mx-auto flex w-fit items-center justify-center gap-4 rounded-3xl px-12 py-2'>
      <img
        src={avatarImg}
        alt={`${username} avatar`}
        className='rounded-full text-[var(--title-dark)]'
        width={48}
        height={48}
      />
      <h2 className='text-alt flex items-center gap-2 font-medium tracking-wider whitespace-pre text-[var(--title-dark)]'>
        {username} -
        <span
          className={`text-sm ${status === 'online' ? 'text-emerald-500' : 'text-red-600'}`}
        >
          {status}
        </span>
      </h2>
    </div>
  );
};

export default FriendCard;
