/* JavaScript for WATS 3020 Sandwich Machine Assignment */
//Tyrone Tully
//Week 2 WATS 3020
//Sandwich Machine Assignment

//Step 1 Gather Data and Set up Prompts for the User
//Between lines 8-23

let breadOrder = prompt('what kind of bread would you like? (white, wheat, or flat)', 'wheat');

let meatOrder = prompt('What kind of meat would you like? (Seperate multiple meats with a comma)','Turkey');

let toppingsOrder = prompt('What toppings would you like? (Seperate multiple toppings with a comma)','Pickles');

let condimentOrder = prompt('what condiments would you like? (Seperate multiple condiments with a comma)','ketchup');

// Step 2 
// Set Prices
// Convert Strings to Arrays
// Calculated Cost: Determined the lengths of the Arrays, and multiply out the costs.
// Subtotal: By adding each part of the sandwich.
// Calculate tax: Washington State tax .065, Multiplied subtotal by Washington tax rate.
// Calculate total price: Add subtotal and orderTax

let prices = {
    sandwich: 5, 
    meat: 1, 
    toppings: 0.50, 
    condiment: 0.25, 
};

let meatArray = meatOrder.split(',');
let toppingArray = toppingsOrder.split(',');
let condimentArray = condimentOrder.split(',');

let meatCost = meatArray.length = prices.meat;
let toppingsCount = toppingArray.length; 
let toppingCost = toppingsCount = prices.toppings;
let condimentCount = condimentArray.length;
let condimentCost = condimentCount = prices.condiment;


let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

let totalPrice = subtotal + orderTax;

// Step 3
// Fill out template: Expression tags
// Confirm the order, provice info for the user to understand bill.

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${breadOrder}</p>
    <p>Meat: ${meatOrder}</p>
    <p>Toppings: ${toppingsOrder}</p>
    <p>Condiments: ${condimentOrder}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
