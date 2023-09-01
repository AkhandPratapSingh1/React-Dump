import React from "react";

const Slotm = (props) => {

    // let x = props.x
    // let y = props.y
    // let z = props.z
    let{x,y,z} = props;
     if(x===y && y===z){
  
      return(
        <>
        <div className='slot'></div>
        <h1>
          {x}{y}{z}
        </h1>
        <h1>This is Matching</h1>
        <hr />
        </>
      )
  
     }
     else{
      return(
        <>
        <div className='slot'></div>
        <h1>
          {x}{y}{z}
        </h1>
        <h1>This is Not Matching</h1>
        <hr />
        </>
      )
     }
  
  }
export default Slotm;
  