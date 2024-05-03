var x = prompt("Enter number split ,")
var z = prompt("Enter the operation +,_*/")
var y = x.split(",")
var sum = 0
var multi = 1
var diff = 0
if(z == "+")
{
for(var i = 0;i<y.length;i++){
    sum = sum + Number(y[i])
}
document.write(sum)
}
if(z == "-")
{
    for(var i = 1;i<=y.length;i++){
        if(y[i] == undefined){
            break
        }
        else
        {
        diff = ( (y[i-1]) - (y[i]))
        }
    }
    document.write(diff)
}
if(z == "*")
{
    for(var i = 0;i<y.length;i++){
        multi = Number(multi) * Number(y[i])
    }
    document.write(multi)
}
if(z == "/")
{
    for(var i = 0;i<y.length;i++){
        if(y[i] == undefined){
            break
        }
        else
        {
        div = (y[i-1]) / (y[i])
        }    }
    document.write(div)
}   
