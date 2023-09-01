import logo from './logo.svg';
import './index.css';
import './App.css';
import Slotm from './Slotm'
import { useState } from 'react';



const App = () => {
  
  // let count = 1;
  const [count, incCount]  = useState(1);

  const IncNum = () => {
    
  incCount(count +1)
  };

  return (
    <>
    
   <h1>
    {count}
   </h1>
 <button onClick={IncNum} > Click Me 👍</button>


    </>
  )
}

export default App;
