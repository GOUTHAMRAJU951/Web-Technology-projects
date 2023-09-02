const houre1=document.getElementById("hour")
const mine1=document.getElementById("Minutes")
const sece1=document.getElementById("Secounds")
const ampm=document.getElementById("AMPM")

function updateclock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM"

    if(h>12){
        h=h-1
        ampm="PM"
    }
     h=h<10? "0" + h:h;
     m=m<10? "0" + m:m;
     s=s<10? "0" + s:s;

    houre1.innerHTML=h
    mine1.innerHTML=m
    sece1.innerHTML=s
     ampm, (innertext=ampm);
     setTimeout(() => {
        updateclock()
     }, 1000);


}
updateclock()