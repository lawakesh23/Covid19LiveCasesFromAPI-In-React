import React, { useState } from 'react';

const InputForm = () =>{

    const [name, setName] = useState("");
    const [updatedName, setupdatedName] = useState("");

    const [lastName, setlastName] = useState("");
    const [updatelastName, setupdatelastName] = useState("");

    const inputEvent = (event)=>{
        setName(event.target.value);
    }
    const inputEventTwo = (event)=>{
        setlastName(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        setupdatedName(name);
        setupdatelastName(lastName)
    }

return(
    <>
    <form onSubmit={onSubmit}>
        <h1> Hi {updatedName} {updatelastName}</h1>
        <input type="text"
        onChange={inputEvent}
      
        />
        <br/>
        <input type="text"
        onChange={inputEventTwo}
    
        />

        <button type="submit">Click to Submit</button>
    </form>
    
    </>
);
}

export default InputForm;