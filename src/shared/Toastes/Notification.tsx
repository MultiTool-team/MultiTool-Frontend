import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../store/store';

interface INotification {
  type: 'success' | 'error' | 'warning' | 'info';
  text: string;
}

const Notification: React.FC<INotification> = ({ type, text }) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    const notify = () => {
      switch (type) {
        case 'success':
          return toast.success(text);
        case 'error':
          return toast.error(text);
        case 'warning':
          return toast.warning(text);
        case 'info':
          return toast.info(text);
        default:
          return null;
      }
    };
    notify();
  }, [type, text]);

  return (
    <ToastContainer
      position="bottom-right"
      theme={darkMode ? 'dark' : 'light'}
    />
  );
};

export default Notification;