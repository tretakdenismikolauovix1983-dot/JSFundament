Java Script
let points = 100;

console.log("Початкові бали:", points);

// За виконання завдання +50
points += 50;
console.log("Після виконання завдання:", points);

// За помилку -20
points -= 20;
console.log("Після помилки", points);

// За проходження рівня бали подвоюються
points *= 2;
console.log("Після проходження рівня:", points);

// За отримування підказки бали зменшуються вдвічі
points /= 2;
console.log("Після отримування підказки", points);

// За бонусне завдання +1
points++;
console.log("Після бонусного завдання:", points);

// За порушення правил -1
points--;
console.log("Після порушення правил:", points);