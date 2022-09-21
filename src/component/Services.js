import React from "react";
import "./style.css";
import Mydata from './jsontype';
import Myprogram from "./Program";

const a = ()=>{
let b = 50;
const c = "rohit singh";

// alert("abc"+b+"xyz"+c);

// alert(`abc ${b} xyz ${c}`);
console.log(Mydata[0].id);
} 




let x=1;
let y;

for(x;x<=Mydata.length;x++)
{
  y=`text ${x}`;
}



function Services() {

  return (
    <div>
      <h1>hellow</h1>
      <button type="button" onClick={a}>submit</button>
    <input type="text" value={y} />
      <Myprogram />
    </div>
      
  )
}
export default Services;
