console.log("DOM Basics");

// const first=document.getElementById("first");
// console.log(first)

// const name=prompt("Enter the name","Anonymous");
// first.innerText += `Welcome to the family ${name}`


const ctime=document.getElementById("time");

function clock(){
    let date =new Date();
    let time=date.toLocaleTimeString();
    ctime.innerText=time;
}

// clock();
setInterval(clock,1000)


//toggle method

const dmode=document.getElementById("dark");
console.log(dmode);

dmode.onclick=function changeColor(){
    document.body.style.background="black";
    document.body.style.color="white";
    document.body.style.fontFamily="Helvetica";

}








