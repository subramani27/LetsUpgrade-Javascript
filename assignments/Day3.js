

//quetion1:



function checkOddEven(){
	num=prompt("Enter a number:");

	if(num%2==0)
	{
		console.log("It is an Even number");

	}
	else{
		console.log("It is an Odd Number");
	}
}

result=checkOddEven();
console.log(result);

//question 2:

prompt("Enter the OS name and its version no.");

console.log()

//question 3 :

marks=prompt("Enter the Marks:");

if(marks>=90){
	console.log("Marks is "+ marks + "and grade is A");

}
else if(marks>=70 && marks<90){
	console.log("Marks is " + marks + "and grade is B");

}
else if(marks>=35 && marks <70){
	console.log("Marks is " + marks + "and grade is C");

}
else{
	console.log("Marks is " + marks + "failed!" );
}