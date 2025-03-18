import { useState } from 'react';
import './ExpirationTime.css';

const ExpirationTime = ({ expirationDate }) => {
  const [timeLeft, setTimeLeft] = useState(new Date(new Date(expirationDate) - new Date()));

  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
  const secondsLeft = Math.floor((timeLeft / 1000) % 60);

  if (daysLeft >= 1) {
    return <div className="ExpirationTime">{`Expires in ${daysLeft}d ${hoursLeft}h`}</div>;
  }

  if (hoursLeft >= 1) {
    return <div className="ExpirationTime ExpirationTime--toLow">{`Expires in ${hoursLeft}h ${minutesLeft}m`}</div>;
  }

  if (minutesLeft >= 1) {
    setInterval(() => setTimeLeft(new Date(new Date(expirationDate) - new Date())), 1000);
    return <div className="ExpirationTime ExpirationTime--toLow">{`Expires in ${minutesLeft}m ${secondsLeft}s`}</div>;
  }

  if (secondsLeft >= 1) {
    setInterval(() => setTimeLeft(new Date(new Date(expirationDate) - new Date())), 1000);
    return <div className="ExpirationTime ExpirationTime--toLow">{`Expires in ${secondsLeft}s`}</div>;
  }

  return <div className={`ExpirationTime ExpirationTime--toLow`}>Expired!</div>;
};

export default ExpirationTime;
