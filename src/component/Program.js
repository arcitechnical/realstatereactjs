import React from "react";
import {useState} from "react"






function Myprogram()
{
const [first , second]=useState(200);







const mychang = ()=>
{
    second(100);
}
const Headch = ()=>
{
    second(50-10);
}

let b = ()=>
{
    let a = new Date();
   let c = a.getSeconds(); 
   console.log(c);
}
setInterval(b,1000);

    return(
        <>
        <h1 onClick={Headch}>welcome</h1>
        <button onClick={mychang}>change value</button>
        <input type="text" value={first} />
        <h1>{b}</h1>
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <marquee scrollamount={first}> moving text</marquee>
        
        </>
    )


}


export default Myprogram