console.log("Prime Number between 2 and n");


let enterNumber = prompt("Enter number: ");

for(let i=2; i<=enterNumber ;i++){

        let isPrime = true;

        for(let j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime === true){
            console.log(i);
        }
    }