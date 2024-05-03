var x = prompt("Enter name split,")
var res = "<ul>"
if(x)
{
    var y = x.split(",")
if(x != "")
{
    for(var i = 0;i<y.length;i++)
    {
        res +=`<li>${y[i]}</li>`
    }
    }
}
document.write(`${res}</ul>`)