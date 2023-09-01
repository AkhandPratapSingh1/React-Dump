import React, { useState } from "react";



const Form = () => {

    const[Name, updatedName] = useState("");
    const[FullName, UpdateFull] =useState("");
    const[LastName, LastupdatedName] = useState("");
    const[LastFullName, LastUpdateFull] =useState("");
    const  InputData  = (event) => {
        
            console.log(event.target.value);
            updatedName(event.target.value)
        
    };
    const  LastInputData  = (event) => {
        
        console.log(event.target.value);
        updatedName(event.target.value)
    
};
    const onsubmit = (event) => {

        event.preventDefault();
         UpdateFull(Name);
         LastupdatedName(LastName);
        
    }

    return(
    <>
    <form onSubmit={onsubmit}>  
    <h1>Hello {FullName}</h1>
    <input type="text" placeholder="Enter name"  onChange={InputData} value={Name} />
    <input type="text" placeholder="Enter last name"  onChange={LastInputData} value={LastName} />
    <button type="submit">Click me 👍</button>
    </form>
    </>
    )
}


 export default Form;

//  export {Hello, World};