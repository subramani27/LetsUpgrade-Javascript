console.log("Use of spread operator in arrays");

let shoppingList=['vegetables','fruits','accessories','crockery'];

let shoppingBasket=[...shoppingList];


console.log(shoppingList);


shoppingBasket.push('dress');
shoppingBasket.push('televison');
shoppingBasket.push('cricket-kit');
shoppingBasket.push('snacks');


console.log(shoppingBasket);
