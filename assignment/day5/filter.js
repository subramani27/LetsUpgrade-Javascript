console.log("Filter operation");


//Take integer from the user
let num=Number(prompt("Enter a number:"));

let newArray=[];

for (let i=0;i<num;i++){
    newArray.push(i);
    
}
console.log(newArray);

let odd=newArray.filter(el=>el%2!=0);

console.log(odd);

let oddCube=newArray.filter(el=>el%2!=0).map(el=>el**3);

console.log(oddCube);
