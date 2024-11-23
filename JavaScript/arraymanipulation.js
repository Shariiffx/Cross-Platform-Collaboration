let fruits = ['apple', 'banana', 'cherry'];

fruits.push('date');
console.log(fruits);
fruits.unshift('apricot');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

let index = fruits.indexOf('banana');
let hasCherry = fruits.includes('cherry');

let index = fruits.indexOf('banana');

let hasCherry = fruits.includes('cherry');


let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);

let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);
let moreFruits = ['elderberry', 'fig'];
let combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits);

fruits.forEach(fruit => {
    console.log(fruit);

    let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);
    console.log(totalLength);
}