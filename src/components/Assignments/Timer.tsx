import React from 'react';
import { compareDesc, differenceInSeconds } from 'date-fns'

type TimerProps = {

};

const Timer: React.FC<TimerProps> = ({ deadline }) => {

  // borrowed code
  // source: https://codesandbox.io/s/omydy?file=/src/App.js:184-1186
  const ONE_DAY = 60 * 60 * 24;
  const ONE_HOUR = 60 * 60;
  const ONE_MINUTE = 60;
  const [currentTime, setCurrentTime] = React.useState(new Date().getTime());

  const diffInSeconds = differenceInSeconds(deadline, currentTime);

  const getCoundown = () => {
    if (diffInSeconds <= 1) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    const days = Math.floor(diffInSeconds / ONE_DAY);
    const hours = Math.floor((diffInSeconds - days * ONE_DAY) / ONE_HOUR);
    const minutes = Math.floor(
      (diffInSeconds - days * ONE_DAY - hours * ONE_HOUR) / ONE_MINUTE
    );
    const seconds =
      diffInSeconds - days * ONE_DAY - hours * ONE_HOUR - minutes * ONE_MINUTE;
    const zeroPad = val => val < 10 ? `0${val}` : val
    return {
      days,
      hours,
      minutes: zeroPad(minutes),
      seconds: zeroPad(seconds)
    };
  };

  const countdown = React.useMemo(getCoundown, [currentTime]);

  React.useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      setCurrentTime(now);
    }, 1000);
  }, []);

  return <>
    <span><strong>{countdown.days}</strong> day{countdown.days === 1 ? '' : 's'}</span> <span><strong>{countdown.hours}</strong>hr{countdown.hours === 1 ? '' : 's'}</span> <span><strong>{countdown.minutes}</strong>:</span><span><strong>{countdown.seconds}</strong></span>
  </>

}
export default Timer;