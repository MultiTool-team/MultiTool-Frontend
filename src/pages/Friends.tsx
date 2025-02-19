import { SEO } from "../app/SEO";
import Chat from "../widgets/chat/Chat";

const Friends = () => {
  return (
    <>
      <SEO
        title='Friends Chat | Connect with Your Friends'
        description='Join Friends Chat to connect with your friends, share messages, photos, and stay in touch in real-time.'
        keywords='friends, chat, messaging, social, real-time communication'
      />

      <div className='flex h-full w-full flex-col items-center justify-center gap-8'>
        <Chat />
      </div>
    </>
  );
};

export default Friends;
