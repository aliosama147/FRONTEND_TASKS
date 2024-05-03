var arr = [
{name: "ali"},
{name: "mohamed"},
{name: "ahmed"},
{name: "tamer"},
{name: "yosef"},
{name: "zezo"},
{name: "mostafa"},
{name: "walid"},
]

// document.getElementById("myform").onsubmit=function(e){
//    e.preventDefault()
//    console.log(arr.some((el)=>el.name.includes(x)));
//    var x = document.getElementsByTagName("input")[0].value
//     var res = "<ul>"
//    for(var i = 0;i < arr.length;i++){
//     if(arr[i].name.includes(x) == true){
//         console.log(arr[i].name);
//         res += `<li>${arr[i].name}</li>`
//         }
//     }
//     res += `</ul>`
//     document.getElementById("list").innerHTML=res
// }
function loading(){
    var x = document.getElementsByTagName("input")[0].value
    var res = "<ul>"
   for(var i = 0;i < arr.length;i++){
    if(arr[i].name.includes(x) == true){
        console.log(arr[i].name);
        res += `<li>${arr[i].name}</li>`
        }
    }
    res += `</ul>`
    var body = document.getElementsByTagName("body")[0]
    body.style.backgroundColor="black"
    body.innerHTML="<h1>loading...</h1>"
    body.style.color="white"
    body.style.textAlign="center"
    setTimeout(() => {
        document.write(res)
    }, 1500);
}