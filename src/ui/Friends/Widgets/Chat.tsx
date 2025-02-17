import { useState } from 'react';
import { FriendCard, EmptyChatList } from '../Features';
import { Friend } from '../Entities/Friend';

const generateMockFriends = (count: number): Friend[] => {
  const statuses: Friend['status'][] = ['online', 'offline', 'away'];
  const messages = [
    'Hi there!',
    'How are you?',
    'See you tomorrow!',
    'Let me think about it',
    'Thanks for the answer!',
    'Did you see my last message?',
    'Working on it...',
    '😊',
    'Check this out!',
    'Good morning!',
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: String(i + 1),
    username: `User ${i + 1}`,
    avatar: `/avatar.jpg`,
    status: statuses[i % 3],
    lastMessage: messages[i % messages.length],
    unreadMessages: Math.floor(Math.random() * 5),
  }));
};

const Chat = () => {
  const [friends, setFriends] = useState<Friend[]>(generateMockFriends(10));
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const hasChats = friends.length > 0;

  return (
    <section className='bg flex h-[80dvh] w-full gap-8 rounded-4xl p-8'>
      {/* Секция списка чатов */}
      <div
        className={`flex h-full w-1/3 flex-col ${hasChats ? 'justify-between' : 'justify-center'}`}
      >
        {hasChats ? (
          <>
            <h2 className='title mb-4 tracking-wider uppercase'>Your Chats</h2>
            <div className='flex flex-col gap-2 overflow-y-auto pr-2'>
              {friends.map(friend => (
                <FriendCard
                  key={friend.id}
                  avatar={friend.avatar}
                  username={friend.username}
                  status={friend.status}
                  isActive={selectedChatId === friend.id}
                  unreadCount={friend.unreadMessages}
                  lastMessage={friend.lastMessage}
                  onClick={() => setSelectedChatId(friend.id)}
                  className='hover:bg-accent/50 transition-colors'
                />
              ))}
            </div>
          </>
        ) : (
          <EmptyChatList
            text='No chats available'
            additionalText='Start by adding new friends'
            textClassName='font-medium'
          />
        )}
      </div>

      {/* Секция активного чата */}
      <div className='bg-alt ml-4 flex flex-1 flex-col rounded-3xl p-6'>
        {selectedChatId ? (
          <div className='flex flex-1 flex-col'>
            <header className='mb-4 border-b border-[var(--text-dark)] pb-4 dark:border-[var(--text-light)]'>
              <h3 className='text text-xl font-bold'>
                {friends.find(f => f.id === selectedChatId)?.username}
              </h3>
              <p className='text'>
                Status: {friends.find(f => f.id === selectedChatId)?.status}
              </p>
              <p className='text font-semibold tracking-wider'>
                Last message:{' '}
                {friends.find(f => f.id === selectedChatId)?.lastMessage}
              </p>
            </header>
            <div className='flex flex-1 items-center justify-center'>
              <p className='text'>
                Chat content with{' '}
                {friends.find(f => f.id === selectedChatId)?.username}
              </p>
            </div>
          </div>
        ) : (
          <EmptyChatList
            text='Select a chat to start conversation'
            additionalText='or create a new one'
            textClassName='text text-center text-xl font-medium'
            additionalClassName='text text-center text-xl font-bold'
          />
        )}
      </div>
    </section>
  );
};

export default Chat;
