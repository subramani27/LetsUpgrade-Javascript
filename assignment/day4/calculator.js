console.log("Calculator Program");


let operation=function(num1,num2){

    console.log("press any of the operator symbols from the keyboard (+,-,*,/,%,sqrt)");

    let operator=prompt("Enter the operator");

    switch(operator){

        case "+":
            console.log(num1+num2);
            break;

        case "-":
            console.log(num1-num2);
            break;
        
            case "*":
                console.log(num1*num2);
                break;

            case "/":
                console.log(num1/num2);
                break;

            case "sqrt":
                console.log(Math.sqrt(num1 || Math.sqrt(num2)));
                break;

            case "%":
                console.log((num1/num2)*100);
                break;
            default:
                console.log("Invalid operator used !!!")

    }

    


}

operation(20,10)