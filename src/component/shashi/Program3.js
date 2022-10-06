import React, { useState } from "react";

function Myprogram3()
{
        const [getvalue1,updatvalue] = useState('')
        const [msg,msgupdate] = useState('block')
    let abc = (e)=>
    { 
        updatvalue(e.target.value);
        if(getvalue1 ==='')
        {
            console.log(getvalue1);
            msgupdate('none');
        }
    }
    return(
        <>
            <h1>welcome</h1>
            <input type="text" value={getvalue1} onChange={abc}/>
            <p style={{color:'red',display:`${msg}`}}>tis is blank text box</p> 
        </>
    )
}
export default Myprogram3