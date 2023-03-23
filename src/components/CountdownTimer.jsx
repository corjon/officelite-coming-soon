import { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css';

export default function CountdownTimer() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  const targetDateString = targetDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate.getTime() - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className={styles.comingSoon}>Coming <span>{targetDateString}</span></p>
      <div className={styles.timer}>
        <div>
          <p>{countdown.days}</p>
          <p>Days</p>
        </div>
        <div>
          <p>{countdown.hours}</p>
          <p>Hours</p>
        </div>
        <div>
          <p>{countdown.minutes}</p>
          <p>Min</p>
        </div>
        <div>
          <p>{countdown.seconds}</p>
          <p>Sec</p>
        </div>
      </div>
    </div>
  );
}