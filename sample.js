

//Taking input from the user using prompt command

name=prompt("Enter your name:");

//printing out the result to the user

console.log("Your name is " + name);


//1.String Methods
//a.slice operation

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

//b.substring() method

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);

//c.replace() method

str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

//d.trim() method

var str = "       Hello World!        ";
alert(str.trim()); 

//2.Array Methods
//a.joint()  method

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");

//b.delete keyword
 var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined 

//c.splice() method
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

//d.slice()

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);