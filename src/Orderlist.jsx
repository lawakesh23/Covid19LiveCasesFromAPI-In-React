import React, { useState } from "react";


function Orderlist(){
    const myname = "Lawakesh Patel";
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var second = today.getSeconds();
    var offset = today.getTimezoneOffset();
    if(hours<=11){
    var testColor = {
        color : '#fa9191',
    }
    var htmlTxt = "Good Morning";
    }else{
    htmlTxt = "After Noon";
    }

// const state = useState();
// Hooks in Reeact
const [ count, setCount] = useState(0);
const incme = () => {
setCount(count+1);
}


    return(
        <>
        <h1>Hello World</h1>
        <p>If you don't know my name. My name is {myname}</p>
        <h3>{`If you don't know my name. My name is ${myname}`}</h3>
        <ul>
            <li>Bahubali</li>
            <li>Robot</li>
            <li>Shivaji</li>
            <li>Robot 2</li>
            <li>Bahubali</li>
        </ul> 
             <i>This is updated name {fname}</i>
            <h4>Date is {date}</h4>
            <h4>Time is {hours}: {minutes}: {second} :{offset}</h4>

            <p style = {testColor}> Hi Sir ! {htmlTxt}</p>

            <p>{count}</p>
            <button onClick={incme}>Click to increment</button>
        </>
    );
}

const fname = "lawakesh Patel";

export default Orderlist;
export {fname};