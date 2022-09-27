import React, { useState } from "react";
import './custom.css';

function MyProgram()


{
    const [x,y] = useState('color')
    const [settitle,gettitle] = useState('ducat')
    const [setcolor, getcolor] = useState('blue')
    const [openm, updatemodal] =useState('')

    const a = (e)=>{
        // console.log(e.target.type);
        y(e.target.type);
        gettitle(e.target.title);
    }

const mycolor = (e)=>
{
    getcolor(e.target.value);
}


const openmodal = (event)=>
{
    updatemodal('block');

}
const myclose = ()=>
{
    updatemodal('none');
}

    

    return(
        <>
        <h1 style={{color:`${setcolor}`}}>This is program 2 file</h1>
        <input type={x} title={settitle}  onChange={mycolor} />
        <button type="button" title="this is color" onClick={a}>submit</button>
        
        <input type="button" value="open modal" onClick={openmodal} />

        <div className="mymodal" style={{display:`${openm}`}}>
            <h1>This is modal</h1>
            <p> welcome to this modal</p>
            <input type="text" />
            <button className="close" onClick={myclose}>X</button>

        </div>

        </>
    )
}

export default MyProgram