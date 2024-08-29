import { useEffect } from 'react';

const Notification = ({ message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Logic to remove notification after a certain period
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return <div className='notification'>{message}</div>;
};

export default Notification;