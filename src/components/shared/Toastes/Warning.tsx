import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IWarning {
  text: string;
}

const Warning: React.FC<IWarning> = ({ text }) => {
  useEffect(() => {
    const notify = () => toast.warning(text);
    notify();
  }, [text]);
  return <ToastContainer position='bottom-right' />;
};

export default Warning;
