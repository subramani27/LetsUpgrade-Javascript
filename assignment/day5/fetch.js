console.log("Fetch API");

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(response=>response.json())
// .then(data=>console.log(data))



//random todos api

// async function randomTodos(){
//     const response= await fetch('https://jsonplaceholder.typicode.com/todos');

//     const data= await response.json();
//     console.log(data);
// }

// randomTodos();

let obj1={
    name:'anand',
    age:21,
    canDrive:'NO',
}

console.log(obj1);
let str=JSON.stringify(obj1);

console.log(str);