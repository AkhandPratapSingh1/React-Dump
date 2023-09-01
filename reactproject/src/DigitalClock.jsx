import './index.css';
import './App.css';
import { useState } from 'react';

const DigitalClock = () => {
 
    let time  = new Date().toLocaleTimeString();
    const[stime, Utime] = useState(time);

    const UpdateTime = () => {

    let ftime  = new Date().toLocaleTimeString();
        Utime(ftime)

    }

    setInterval(UpdateTime, 1000);
    return (
    <>
    <h1>{time}</h1>
    </>

    )

}

export default DigitalClock;