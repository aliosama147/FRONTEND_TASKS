var x = prompt("Enter name split ,")

var y = x.split(",")

for(var i = 0;i < y.length;i++)
{
    document.write(`name is ${y[i]}`)
    document.write("<hr>")
}