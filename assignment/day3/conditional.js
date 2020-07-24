 console.log("Conditional Statements");

//if-else-if statement 
marks=prompt("Enter the Marks:");

if(marks>=90){
	console.log("Marks is "+ marks + "and grade is A");

}
else if(marks>=70 && marks<90){
	console.log("Marks is " + marks + " and grade is B");

}
else if(marks>=35 && marks <70){
	console.log("Marks is " + marks + " and grade is C");

}
else{
	console.log("Marks is " + marks + " failed!" );
} 

//switch statement

let marks=Number(prompt("Enter the Marks:"));

switch(marks)
{
    case marks>=90:
        console.log(`Marks is ${marks}and grade is A`);
        break;

    case (marks>=70 && marks<90):
        console.log(`Marks is ${marks}and grade is B`);
        break;
    case (marks>=40 && marks < 70):
        console.log(`Marks is ${marks}and grade is F`);
        break;

    default:
        console.log("failed category")

}



os=prompt("enter the os name & the version no.");


console.log(parseInt(os),os.replace(parseInt(os)));