import React, { useState } from "react";
import './custom.css';

function MyProgram()
{
    const [inputvalue, inputupdate] = useState("first name")
    const [btn,btn1] = useState(true)
    const [curc , updaclass] = useState('');
    const [x, y] = useState(false)

const b=[10,20,30,50,40];
let i = 0;
const a = ()=>{
   inputupdate("change value");
   btn1(false);
}
const addCl = ()=>
{
    updaclass("cusbtn");

}
let chank = ()=>
{
    y(true);
    btn1(false);
}

let myfunc = ()=>
{
    i++;
    console.log(i);
}



    return(
        <frigment>
          <input type="text" value={inputvalue} onClick={a}/>  
          <br/>
          <input type="checkbox" onClick={chank} checked={x} />
          <button type="button" disabled={btn} onClick={addCl} className={curc}>submit</button>
        
            <p onClick={myfunc}>{b[i]}</p>
        </frigment>
        
    )
}

export default MyProgram