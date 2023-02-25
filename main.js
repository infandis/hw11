let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//Знайти суму та кількість позитивних елементів.
let sum = 0;
let count = 0;

for (let i = 0; i < array.length; i++) {
  if (array [i] > 0) {
    sum += array[i];
    count++;
  }
}

console.log("Сума позитивних елементів: " + sum);
console.log("Кількість позитивних елементів: " + count);

//Знайти мінімальний елемент масиву та його порядковий номер.
let min = array[0];
let minIndex = 0;

for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
    minIndex = i;
  }
}

console.log("Мінімальний елемент масиву: " + min);
console.log("Його порядковий номер: " + minIndex);

//Знайти максимальний елемент масиву та його порядковий номер.
let max = array[0];
let maxIndex = 0;

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
    maxIndex = i;
  }
}

console.log("Максимальний елемент масиву: " + max);
console.log("Його порядковий номер: " + maxIndex);

//Визначити кількість негативних елементів.
let negativeCount = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    negativeCount++;
  }
}

console.log("Кількість негативних елементів: " + negativeCount);

//Знайти кількість непарних позитивних елементів.
let oddPositiveCount = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0) {
    oddPositiveCount++;
  }
}

console.log("Кількість непарних позитивних елементів: " + oddPositiveCount);

//Знайти кількість парних позитивних елементів.
let evenPositiveCount = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 === 0) {
    evenPositiveCount++;
  }
}

console.log("Кількість парних позитивних елементів: " + evenPositiveCount);

//Знайти суму парних позитивних елементів.
let sumEvenPositive = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 === 0) {
    sumEvenPositive += array[i];
  }
}

console.log("Сума парних позитивних елементів: " + sumEvenPositive);

//Знайти суму непарних позитивних елементів.
let sumOddPositive = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0) {
    sumOddPositive += array[i];
  }
}

console.log("Сума непарних позитивних елементів: " + sumOddPositive);

//Знайти добуток позитивних елементів:
let mult = 1;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    mult *= array[i];
  }
}

console.log("Добуток позитивних елементів: " + mult);

//Обнулити всі, кпім найбільшого
for (let i = 0; i < array.length; i++) {
  if (array[i] !== max) {
    array[i] = 0;
  }
}

console.log("Найбільший елемент: " + max);
console.log("Масив з обнуленими елементами, крім найбільшого: " + array);








