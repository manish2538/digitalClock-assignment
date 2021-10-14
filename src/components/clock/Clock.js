
import './clock.css';
import { useState } from "react"
function Clock() {

  const time = new Date().toLocaleTimeString();
  const evenOddTime = new Date().getSeconds();
  const [currentTime, setTime] = useState(time);

  const updateTime = () => {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  }

  setInterval(
    updateTime, 1000);



  return (
    <>
      {/* deployed link ->  https://digitalclockassignment.netlify.app/ */}
      <div className="clock">
        <div className={evenOddTime % 2 === 0 ? 'white' : 'black'} id="border">
          <h1 >{currentTime}</h1>
        </div>
      </div>

    </>
  );
}

export default Clock;
