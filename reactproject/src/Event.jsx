import './index.css';
import './App.css';
import { useState } from 'react';


const Event = () => {
    const SColor = "yellow"
    const name = "click"
    const[bg, UpdateBg] = useState(SColor)
    const [Sname, UpdatedaName] = useState(name)
    const BgChange = () => {
        console.log("clicked")
        const Scolor = "pink"
        UpdatedaName("Damnn")
        UpdateBg(Scolor)
        
    };
    const BgBack = () => {
        UpdateBg("yellow")
        UpdatedaName("click")
    }
    return(
        <>
       <div style={{backgroundColor:bg}}>
       <button onClick={BgChange} onDoubleClick={BgBack}>{Sname}</button>
       </div>
        </>
    )
}

export default Event;