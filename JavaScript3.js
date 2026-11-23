Java Script
let idNumber 9007199254740992;         // Number
let idBitInt = 9007199254740992;       //BitInt

// Наступний індифікатор
let nexNumber = idNumber +1;
let nexBitInt = idBitInt +1n;

// Порівняння
console.log("Number:");
console.log("Початковий:", idNumber);
console.log("Наступний:", nexNumber);
console.log("idNumber === nexNumber:", idNumber === nexNumber);

console.log("\nBitInt:");
console.log("Початковий:", idBitInt);
console.log("Наступний:", nexBitInt);
console.log("idBitInt === nexBitInt:", idBitInt ===nexBitInt);