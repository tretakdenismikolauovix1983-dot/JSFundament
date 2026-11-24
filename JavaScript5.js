Java Script
let price = "125,75";
let quantity = "8";
let width = "120px";
let weight = "2.5kg";

// Перетворення рядків у числа
let priceNum = Number(price.replace(", ", "."));
let quantityNum =Number(quantity);

let widthNum = parseInt(width);
let weightNum = parseFloat(weight);

// Обчислення
let totalPrice = priceNum* quantityNum;
let totalweight = weightNum* quantityNum;
let newWidth = widthNum + 30;

// Перевірка значення
console.log("Ціна:", priceNum);
console.log("Кількіть:",quantityNum);
console.log("Ширина:", widthNum);
console.log("Вага:",weightNum);

console.log("Загальна вартість:", totalPrice);
console.log("Загальна вага:", totalweight);
console.log("Нова ширина:", newWidth);

console.log("Перевірка Number.isFinite():");
console.log("Ціна:", Number.isFinite(priceNum));
console.log("Кількість:", Number.isFinite(quantityNum));
console.log("Ширина:", Number.isFinite(widthNum));
console.log("Вага:", Number.isFinite(weightNum));

console.log("Перевірка Number.isInteger()");
console.log("Ціна:", Number.isInteger(priceNum));
console.log("Кількість:", Number.isInteger(quantityNum));
console.log("Ширина:", Number.isInteger(widthNum));
console.log("Вага:", Number.isInteger(weightNum));