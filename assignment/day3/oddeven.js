console.log("Odd or Even function");

num=Number(prompt("Enter a number :"));

let OddEven=function(){

    if(num%2==0){
        console.log(`The number entered is ${num} and it is an even number`);
    }
    else{
        console.log(`The number ${num} is an odd number`);
    }

}

let result=OddEven();
console.log(result);