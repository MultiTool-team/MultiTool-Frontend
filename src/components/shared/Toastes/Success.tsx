import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../../store/store';

interface ISuccess {
  text: string;
}

const Success: React.FC<ISuccess> = ({ text }) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    const notify = () => toast.success(text);
    notify();
  }, [text]);

  return (
    <ToastContainer
      position="bottom-right"
      theme={darkMode ? 'dark' : 'light'}
    />
  );
};

export default Success;