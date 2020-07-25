console.log("Destructuring of Array");

const student={
    name:'Helsinki',
    age:24,
    projects:{
        diceGame:"Two player dice game using Javascript"
    },
}

const{name,age,projects:{diceGame}}=student;



console.log(name);
console.log(age)
console.log(diceGame)