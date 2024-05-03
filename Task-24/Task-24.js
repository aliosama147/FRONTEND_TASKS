var x = confirm()
if(x){
    document.getElementsByTagName("h1")[0].innerHTML=("true")   
    document.getElementsByTagName("h1")[0].style.backgroundColor="green"
    document.getElementsByTagName("h1")[0].style.textAlign="center"
}
else
{
    document.getElementsByTagName("h1")[1].innerHTML=("false")   
    document.getElementsByTagName("h1")[1].style.backgroundColor="red"
    document.getElementsByTagName("h1")[1].style.textAlign="center"
}