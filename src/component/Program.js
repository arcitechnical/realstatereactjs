import React from "react";
import {useState} from "react"

const Mycolor = ()=>
{
 const c = useState("green");
    document.bgColor="red";
}


function Myprogram()
{
    return(
        <>
        <h1>welcome</h1>
        <input type="color" onClick={Mycolor}/>
        <input type="text" value={"sdkjf"} />
        
        </>
    )


}


export default Myprogram