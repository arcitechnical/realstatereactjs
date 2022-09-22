import React from "react";
import {useState} from "react"
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Myprogram()
{
    const [first , second]=useState(200);
    const[selected, setselected] =useState('My name is archita');
    const handleSelect=()=>{
      setselected('Monospace');
    }
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
<<<<<<< HEAD
        <select >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <marquee scrollamount={first}> moving text</marquee>
=======
>>>>>>> da185fab9bec104f4d540417220b41e39fcff812
        
        <marquee scrollamount={first}> moving text</marquee>
        <div className="container">
            <div className="row">
                <div className="col-md-6 panel">
                   <h4 className="mt-3">Fonts</h4>
                    <select onSelect={handleSelect}>
                        <option value="Serif">Serif</option>
                        <option value="Sans-serif">Sans-serif</option>
                        <option value="Monospace">Monospace</option>
                        <option value="Cursive">Cursive</option>
                        <option value ="Fantasy">Fantasy</option>
                    </select>
                    <h4 className="mt-3">Font-size</h4>
                    <select>
                        <option value ="10px">10px</option>
                        <option value ="20px">20px</option>
                        <option value ="30px">30px</option>
                        <option value ="40px">40px</option>
                        <option value ="50px">50px</option>
                    </select>
                    <h4 className="mt-3">Text-transform</h4>
                    <select>
                        <option value ="Uppercase">Uppercase</option>
                        <option value ="Lowercase">Lowercase</option>
                        <option value ="Capatilize">Capatilize</option>
                    </select>
                    <h4 className="mt-3">Alignment</h4>
                    <select>
                        <option value="Right">Right</option>
                        <option value="Center">Center</option>
                        <option value="Left">Left</option>
                    </select>
                    <h4 className="mt-3"></h4>
                    <div className="btn-group font" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-danger">Bold</button>
                        <button type="button" className="btn btn-warning">Italic</button>
                        <button type="button" className="btn btn-success">Underline</button>
                    </div>
                    </div>
                    <div className="col-md-6 text-panel">
                       <h4>{selected}</h4>
                    </div>   
                </div>
            </div>
        </>
    )
}
export default Myprogram