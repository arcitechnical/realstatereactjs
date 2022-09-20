import React from "react";


const colorchange = ()=>
{
    var time = new Date();
    var h = time.getHours().toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();
    if(s.length < 2)
    {
        s = '0' + s;
        var clock = h+ ' : ' +m+ ' : '+s; 
    }
}
function Clock()
{
    return(
        <h1 id="clock">{colorchange}</h1>
    )
}
setInterval(colorchange ,1000)
export default Clock;