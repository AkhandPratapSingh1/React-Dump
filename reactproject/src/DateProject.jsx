import './index.css';
import './App.css';
import { useState } from 'react';



const DateProject = () => {

  let date = new Date().toLocaleTimeString() ;
  const [cdate, incCount]  = useState(date);

  const IncTime = () => {
  let date = new Date().toLocaleTimeString() ;
  incCount(date)
    
  };

  return (
    <>
    
   <h1>
    {cdate}
   </h1>
 <button onClick={IncTime} > Click Me</button>
    </>
  )
}

export default DateProject;
