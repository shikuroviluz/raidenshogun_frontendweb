import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#310056] rounded-2xl p-2 flex justify-center">
        <h1 className="text-[40px] font-bold font-genshin">
        {time.toLocaleTimeString("id-ID")}
        </h1>
    </div>
  );
}

export default Clock;