var x = prompt("Enter number split , ")

var sum = 0
var diff = 0
if(x){
x = x.split(",")
for(var i = 0;i < x.length;i++)
{
    if(x[i] > 0){
        sum = sum + Number( x[i])
    }
    else if(x[i] < 0){
     diff += Number (x[i])   
    }
}
document.write(`
    <h2>positive = ${sum}</h2>
    <h2>negative = ${diff}</h2>
`)
}