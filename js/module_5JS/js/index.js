'use strict'



//========================== task 01 =====================

/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan принимает два параметра - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => {
//     const result = [];
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       if (arr[i] > num) {
//         result.push(arr[i]);
//       }
//     }
  
//     return result;
  // };
  const findGreaterThan = (num, arr) => arr.filter((el) => el > num);
  
  // console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
  // console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
  // console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
  
  /* 
    Функция multiplyBy принимает два параметра - число и массив. 
    Возвращает массив все значения которого умножены на число.
  */
  // const multiplyBy = (num, arr) => {
  //   let result = [];
  
  //   for (let i = 0, max = arr.length; i < max; i += 1) {
  //     result.push(arr[i] * num);
  //   }
  
  //   return result;
  // };
  const multiplyBy = (num, arr) => arr.map(el => el * num);

  
  // console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
  // console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
  // console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
  
  /* 
    Функция summAllNumbers принимает любое число аргументов.
    Возвращает число - сумму всех аргументов.
  */
  // function summAllNumbers(...args) {
  //   let accumulator = 0;
  
  //   for (let i = 0, max = args.length; i < max; i += 1) {
  //     accumulator += args[i];
  //   }
  
  //   return accumulator;
  // }
  const summAllNumbers = (...args) => args.reduce((acc, value) => acc + value, 0);
  // console.log( summAllNumbers(1, 2, 3) ); // 6
  // console.log( summAllNumbers(1, 2, 3, 4) ); // 10
  // console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
  
  /* 
    Функция findEvery получает два аргумента - число и массив.
    Возвращает true если все элементы массива больше или равны числу.
    Иначе если есть хоть один элемент меньше числа, то возвращается false.
  */
  // const findEvery = (num, arr) => {
  //   for (let i = 0, max = arr.length; i < max; i += 1) {
  //     if (arr[i] < num) {
  //       return false;
  //     }
  //   }
  
  //   return true;
  // };
  const findEvery = (num, arr) => arr.every(el => el >= num);
  // console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
  // console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
  // console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true
  

//========================== task 02 =====================

/*
  Напиши функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно использу перебирающие методы массивов, никаких for!
  
  */
 const getPropValues = (arr, prop) => arr.map(obj => obj[prop]);
 const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];


  
//   // Вызовы функции для проверки
  // console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
  // console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
  // console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
  

// //========================== task 03 =====================

// /*      
//   Напиши функцию setGuestState(guests, period), где
//   guests - массив гостей, period - кол-во дней после
//   которого считается что гость не активен.
    
//   Если значение поля inactiveDays болше чем period, 
//   поставить для isActive значение false.
    
//   Если же значение inactiveDays меньше чем period,
//   поставить для isActive значение true
  
//   PS: обязательно используй перебирающие методы массивов, никаких for!
// */

const setGuestState = (guests, period) => guests.map(guest => guest.inactiveDays > period ? (guest.isActive = false) : (guest.isActive = true));

// const guests = [
//   { name: "Mango", inactiveDays: 15, isActive: true },
//   { name: "Poly", inactiveDays: 8, isActive: false },
//   { name: "Ajax", inactiveDays: 32, isActive: false },
//   { name: "Chelsey", inactiveDays: 85, isActive: true }
// ];
// //       //   // Вызовы функции для проверки
// //       // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
//       console.log(
//       setGuestState(guests, 10)  );
      
//   console.log(
//     setGuestState(guests, 20)
//   ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
  
//   console.log(
//     setGuestState(guests, 50)
//   ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

// //========================== task 04 =====================

// /*
//   Напиши функию getActiveGuests(guests), принимающую массив объектов гостей. 
  
//   Функция должна возвращать массив объектов гостей, значение поля isActive которых true.
         
//   PS: обязательно используй перебирающие методы массивов, никаких for!
// */

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
// const getActiveGuests = guests => {
//     let newGuests = guests.filter(user =>  user.isActive === true);
//     return newGuests;
//   };
  
// //   // Вызовы функции для проверки
//   console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
  

// //========================== task 05 =====================

// /*      
//   Напиши функцию getGuestsOlderThan(guests, age), где 
//   guests - массив объектов гостей, age - предел возраста для сортировки. 
  
//   Функция возвращает массив объектов значение свойства age которых больше чем параметр age.
  
//   PS: обязательно используй перебирающие методы массивов, никаких for!
// */
const getGuestsOlderThan = (guests, age) => guests.filter(guest => guest.age > age);
const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
  ];
  
//   // Вызовы функции для проверки
//   console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
  
//   console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
  
//   console.log(getGuestsOlderThan(guests, 55)); // []
  

// //========================== task 06 =====================

// /*
//   Напишите функию findGuestById(guests, id), принимающую 
//   guests - массив объектов гостей, id - идентификатор (число). 
  
//   Функция должна возвращать объект гостя с совпадающим id.
  
//   PS: обязательно используй перебирающие методы массивов, никаких for!
// */
const findGuestById = (guests, id) => guests.find(guest => guest.id === id);
// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
//   ];
  
//   // Вызовы функции для проверки
//   console.log(
//     findGuestById(guests, 3)
//   ); // {id: 3, name: 'Ajax', age: 30}
  
//   console.log(
//     findGuestById(guests, 1)
//   ); // {id: 1, name: 'Mango', age: 20}
  
//   console.log(
//    findGuestById(guests, 5)
//   ); // undefined

// //========================== task 07 =====================

// /*
// * Напиши функцию getTotal(order), которая получает обьект заказа с продуктами и их ценой.
// * Функция возвращает число - общую стоимость заказа.
// * 
// * Используй метод reduce.
// */
const getTotal = order => Object.values(order).reduce((acc, key) => acc + key, 0);

// console.log(getTotal({ apples: 25, chicken: 60, milk: 15 })); // 100

// console.log(getTotal({ bread: 10, apples: 25, milk: 15, cheese: 40 })); // 90

// console.log(getTotal({ bread: 10, chicken: 60, cheese: 40 })); // 110


// //========================== task 08 =====================

// /*
//   Напиши функцию getTotal(products, order), где 
//   products - объект со свойствами "имя продукта":"цена за единицу"
//   order - объект со свойствами "имя продукта":"количество единиц".
  
//   Функция возвращает общую сумму стоимости всех продуктов заказа.
  
//   Используй метод reduce.
// */
const getTotal = (products, order) => Object.keys(order).reduce((acc, key) => acc + products[key] * order[key], 0);
// const products = {
//     bread: 10,
//     milk: 15,
//     apples: 20,
//     cheese: 30,
//     chicken: 40
//   };
  
//   const orderA = {
//     bread: 2,
//     apples: 4,
//     chicken: 1
//   };
  
//   const orderB = {
//     bread: 1,
//     milk: 2,
//     cheese: 2,
//     apples: 1
//   };
  
//   const orderC = {
//     bread: 2,
//     cheese: 2
//   };
  
//   // Вызовы функции для проверки
//   console.log(getTotal(products, orderA)); // 140
//   console.log(getTotal(products, orderB)); // 120
//   console.log(getTotal(products, orderC)); // 80
  

// //========================== task 09 =====================

// /*     
// * Напиши функию isGuestsActive(guests), принимающую массив объектов гостей. 
// * Функция возвращает true если значение поля active всех объектов true, в противном случае false.
// * 
// * Используй метод every или some, никаких for!
// */
const isGuestsActive = guests => guests.every(guest => guest.active);
// // Вызовы функции для проверки
// console.log(
//     isGuestsActive([
//       { name: "Mango", active: true },
//       { name: "Poly", active: false },
//       { name: "Ajax", active: true }
//     ])
//   ); // false
  
//   console.log(
//     isGuestsActive([
//       { name: "Mango", active: true },
//       { name: "Poly", active: true },
//       { name: "Ajax", active: true }
//     ])
//   ); // true
  
//   console.log(
//     isGuestsActive([
//       { name: "Mango", active: true },
//       { name: "Poly", active: true },
//       { name: "Ajax", active: false }
//     ])
//   ); // false
  

// //========================== ****** task ***** =====================

// const scientist = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
// },
// {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
// },
// {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
// },
// {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
// },
// {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
// },
// {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
// },
// {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
// },
// {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
// },
// {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
// },
// {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
// },
// {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
// },
// {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
// }
// ];
// // 1) отримати масив вчених що народилися в 19 ст
// // 2) знайти суму років скільки прожили всі вченні
// // 3) Відсортувати вчених по алфавіту
// // 4) Відсортувати вчених по даті народження
// // 5) Відсортувати вчених по кількості прожитих років
// // 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// // 7) Знайти вченого який народився найпізніше.
// // 8) Знайти рік народження Albert Einstein
// // 9) Знайти вчених прізвище яких починається на літеру С
// // 10) Видалити з масива всіх вчених імя яких починається на A

// //========================== HOMEWORK =====================

// /*
//  * Используя массив (users) объектов пользователей, напишите функции которые с помощью 
//  * функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
//  */

// /**
//  * Получить массив имен (поле name) всех пользователей
//  */
// const getAllNames = arr => {...};

// console.log(getAllNames(users)); 
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

                            
// /**
//  * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
//  */
// const getUsersByEyeColor = (arr, color) => {...};

// console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

                                            
// /**
//  * Получить массив имен пользователей по полу (поле gender)
//  */
// const getUsersByGender = (arr, gender) => {...};

// console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// /**
//  * Получить массив только неактивных пользователей (поле isActive)
//  */
// const getInactiveUsers = arr => {...};

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
                      
                                 
// /**
//  * Получить пользоваля (не массив) по email (поле email, он уникальный)
//  */
// const getUserByEmail = (arr, email) => {...};

// console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// /**
//  * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
// const getUsersWit.
//  */