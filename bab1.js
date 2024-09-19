// function add(a,b) {  //1
//     return(a+b);
// }


// function subtract(a, b) {  
//     return a-b;
// }


// function multiply(a, b) {  
//     return a*b;
// }

// function divide(a, b) {  
//     if(b==0){
//         alert("Ошибка: Деление на ноль не допускается.")
//         return null;
//     }
//     return a/b;
// }


// const num1 = parseFloat(prompt("Введите первое число:"));
// const num2 = parseFloat(prompt("Введите второе число:"));


// if (isNaN(num1) || isNaN(num2)) {
//     alert("Ошибка: Пожалуйста, введите действительные числа.");
// } else {
//     alert("Сложение: " + add(num1, num2));
//     alert("Вычитание: " + subtract(num1, num2));
//     alert("Умножение: " + multiply(num1, num2));
//     alert("Деление: " + divide(num1, num2));
// }


// function getStringLength(str) { //2
   
//     if (typeof str !== "string") {
//         alert("Ошибка: Пожалуйста, введите строку.");
//         return null;
//     }
    
    
//     return str.length;
// }


// const userInput = prompt("Введите строку:");
// const lengthOfString = getStringLength(userInput);

// if (lengthOfString !== null) {
//     alert("Длина вашей строки: " + lengthOfString);
// }


// function checkNumber(num) {  //3
//     if (typeof num !== 'number') {
//         alert("Ошибка: Пожалуйста, введите число.");
//         return;
//     }
    
//     if (num > 0) {
//         alert("Число положительное.");
//     } else if (num < 0) {
//         alert("Число отрицательное.");
//     } else {
//         alert("Число равно нулю.");
//     }
// }


// const userInput = prompt("Введите число:");
// const number = parseFloat(userInput); 

// checkNumber(number);


// function calculateAverage(numbers) { //4
//     if (!Array.isArray(numbers) || numbers.length === 0) {
//         throw new Error("Please provide a non-empty array of numbers.");
//     }

//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (typeof numbers[i] !== 'number') {
//             throw new Error(`Array element at index ${i} is not a number: ${numbers[i]}`);
//         }
//         sum += numbers[i];
//     }

//     return sum / numbers.length;
// }


// const numbersArray = [10, 20, 30, 40, 50];
// try {
//     const average = calculateAverage(numbersArray);
//     console.log("Среднее арифметическое:", average);
// } catch (error) {
//     console.error(error.message);
// }

// const name = prompt("Введите ваше имя:");
// const age = prompt("Введите ваш возраст:");

// const person = {
//     name: name,
//     age: age
// };

// console.log("Имя:", person.name);
// console.log("Возраст:", person.age);

// function checkEvenOdd(number) {
//     console.log(number + (number % 2 === 0 ? " является четным числом." : " является нечетным числом."));
// }

// const userInput = prompt("Введите число для проверки:");
// const number = parseInt(userInput, 10);

// if (!isNaN(number)) {
//     checkEvenOdd(number);
// } else {
//     console.log("Пожалуйста, введите корректное число.");
// }
