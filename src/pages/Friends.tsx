import { SEO } from '../components';
import { FriendCard } from '../ui/Friends/Features';

const Friends = () => {
  //   const FRIENDS = [1, 2, 3, 4, 5, 6, 7];
  const FRIENDS = [];

  const friendsIsZeroChat: boolean = FRIENDS.length === 0;
  return (
    <>
      <SEO
        title='Friends Chat | Connect with Your Friends'
        description='Join Friends Chat to connect with your friends, share messages, photos, and stay in touch in real-time.'
        keywords='friends, chat, messaging, social, real-time communication'
      />

      <div className='flex h-full w-full flex-col items-center justify-center gap-8'>
        <section className='bg flex h-[80dvh] w-full items-center justify-between rounded-4xl px-8 py-8'>
          <div
            className={`flex h-full flex-col items-center ${friendsIsZeroChat ? 'justify-center' : 'justify-between'} gap-4`}
          >
            {!friendsIsZeroChat && (
              <h2 className='title w-full tracking-wider uppercase'>
                Your Chats:
              </h2>
            )}

            {!friendsIsZeroChat ? (
              FRIENDS.map(val => (
                <FriendCard
                  avatarImg='/avatar.jpg'
                  username='hellpes'
                  status='online'
                  key={val}
                />
              ))
            ) : (
              <h2 className='text-alt'>
                There is no any chat.
                <br />
                <strong className='text-alt'>
                  Add someone to start chatting
                </strong>
              </h2>
            )}
          </div>
          <div className='bg-alt ml-12 flex h-full w-full items-center justify-center rounded-3xl'>
            <h2 className='text text-center text-xl'>
              Please choose the chat
              <br />
              or
              <br />
              create a new one
            </h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Friends;
