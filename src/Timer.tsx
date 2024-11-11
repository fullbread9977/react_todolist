import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialMinutes?: number;
  initialSeconds?: number;
  onComplete?: () => void;
}

const Timer: React.FC<TimerProps> = ({
  initialMinutes = 0,
  initialSeconds = 0,
  onComplete
}) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    // 타이머 시작
    if (minutes >= 0 && seconds >= 0) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (seconds === 0 && minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (seconds === 0 && minutes === 0) {
          clearInterval(timer);
          if (onComplete) onComplete(); // 타이머 완료 시 콜백 호출
        }
      }, 1000);
    }

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, [minutes, seconds, onComplete]);

  return (
    <div>
      <h2>
        남은 시간: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h2>
    </div>
  );
};

export default Timer;
