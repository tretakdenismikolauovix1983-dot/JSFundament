Java Script
let a = 125n;
let b = 4;

// 1. Перетворення b на BitInt
 let bBig = Bit.Int(b);

 console.log("=== BitInt ===");
 console.log("Додавання:", a + bBig, typeof (a + bBig));
 console.log("Віднімання:", a - bBig, typeof (a - bBig));
 console.log("Множення:", a * bBig, typeof (a * bBig));
 console.log("Ділення:", a / bBig, typeof (a / bBig));

 // 2. Перетворення a на Number
 let aNum = Number(a);

 console.log("=== Number ===");
 console.log("Додавання:", aNum + b, typeof (aNum + b));
 console.log("Віднімання:", aNum - b, typeof (aNum - b));
 console.log("Множення:", aNum * b, typeof (aNum * b));
 console.log("Ділення:", aNum / b, typeof (aNum / b));