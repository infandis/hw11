let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let count = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sum += array[i];
    count++;
  }
}
console.log("Сума позитивних елементів: " + sum);
console.log("Кількість позитивних елементів: " + count);

let min = arr[0];
let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
    minIndex = i;
  }
}

console.log("Мінімальний елемент масиву: " + min);
console.log("Його порядковий номер: " + minIndex);

let max = arr[0];
let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    maxIndex = i;
  }
}

console.log("Максимальний елемент масиву: " + max);
console.log("Його порядковий номер: " + maxIndex);

let negativeCount = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    negativeCount++;
  }
}
console.log("Кількість негативних елементів: " + negativeCount);



