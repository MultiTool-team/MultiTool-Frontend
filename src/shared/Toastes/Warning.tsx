import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../store/store';

interface IWarning {
  text: string;
}

const Warning: React.FC<IWarning> = ({ text }) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  useEffect(() => {
    const notify = () => toast.warning(text);
    notify();
  }, [text]);
  return (
    <ToastContainer
      position='bottom-right'
      theme={darkMode ? 'dark' : 'light'}
    />
  );
};

export default Warning;
