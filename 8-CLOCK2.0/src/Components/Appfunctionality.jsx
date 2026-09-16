import { useEffect, useState } from "react";

function AppFunction() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const TimerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(TimerId);
    };
  }, []);

  return (
    <div>
      This is the current time: {time.toDateString()}-
      {time.toLocaleTimeString()}
    </div>
  );
}

export default AppFunction;
