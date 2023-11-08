// /**
//  * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
//  * Пустые значения: '', null, NaN, undefined, [], {}
//  * Ожидаемый результат: ({}) => true,
//  ({ a: { b: undefined } }) => true,
//  ({ a: { b: [] } }) => true
//  * Сложность задачи: 3 of 5
//  * @param {Object} object - любой объект
//  * @returns {boolean}
//  */
//
// const isEmptyDeep = (object) => {
//   if (
//     Array.isArray(object) ||
//     !Boolean(Object.values(object)) ||
//     typeof object === "object" ||
//     !Boolean(object)
//   ) {
//     return (
//       !Boolean(object) ||
//       !Boolean(Object.values(object)) ||
//       object.length === 0 ||
//       Object.keys(object) == 0
//     );
//   } else {
//     for (const objectKey in object) {
//       isEmptyDeep(objectKey);
//     }
//   }
// };
//
// const data = { a: { b: undefined } };
// const data2 = { a: { b: 1 } };
// console.log(isEmptyDeep(data)); // true
// console.log(isEmptyDeep(data2)); // false
//
// /**
//  * Описание задачи: Напишите функцию, которая проверяет, является ли элемент
//  * именно простым объектом, а не массивом, null и т.п.
//  * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
//  * Сложность задачи: 1 of 5
//  * @param element - элемент для проверки
//  * @returns {boolean}
//  */
//
// const isPlainObject = (element) => {
//   // console.log(!element === null);
//   return (
//     typeof element === "object" &&
//     !(element === null) &&
//     !Array.isArray(element)
//   );
// };
//
// const data = { a: 1 };
// const data1 = null;
// console.log(isPlainObject(data)); // true
// // console.log(typeof data === "object"); // true
// console.log(isPlainObject(data1)); // false
//
// /**
//  * Описание задачи: Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`.
//  * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
//  * Сложность задачи: 1 of 5
//  * @param {Object} object - любой объект для трансформации
//  * @returns {Array} - вложенный массив
//  */
//
// const makePairs = (object) => {
//   let keysObj = Object.keys(object);
//
//   return keysObj.map((el) => [el, object[el]]);
// };
//
// const data = { a: 1, b: 2 };
// console.log(makePairs(data)); // [['a', 1], ['b', 2]]

// /**
//  * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
//  * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
//  * Сложность задачи: 2 of 5
//  * @param {Object} object - любой объект
//  * @param {?} args - список значений для удаления
//  * @returns {Object} - новый объект без удаленных значений
//  */
//
// const without = (object, ...args) => {
//   let keysObj = { ...object };
//
//   args.forEach((el) => delete keysObj[el]);
//   return keysObj;
// };
//
// const data = { a: 1, b: 2, c: 3 };
// console.log(without(data, "b", "c")); // { a: 1 }
//
// /**
//  * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
//  * Ожидаемый результат: ({}) => true,
//  ({ a: undefined }) => true,
//  ({ a: 1 }) => false
//  * Пустые значения: '', null, NaN, undefined
//  * Сложность задачи: 2 of 5
//  * @param {Object} object - объект с примитивами
//  * @returns {boolean}
//  */
//
// const isEmpty = (object) => {
//   let newObj = Object.keys(object);
//   return !newObj.filter((el) => object[el]).length;
// };
//
// const data = { a: 1, b: undefined };
// const data2 = { a: undefined };
// const data3 = {};
// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true
// console.log(isEmpty(data2)); // true
//
// /**
//  * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
//  * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
//  * Сложность задачи: 2 of 5
//  * @param {Object<string | number>} firstObj - объект с примитивами
//  * @param {Object<string | number>} secondObj - объект с примитивами
//  * @returns {boolean}
//  */
//
// const isEqual = (firstObject, secondObject) => {
//   let oneObject = Object.keys(firstObject);
//   if (firstObjKeys.length !== secondObjKeys.length) {
//     return false;
//   }
//   return !oneObject.filter((el) => firstObject[el] !== secondObject[el]).length;
// };
//
// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// console.log(isEqual(data, data2)); // true
// console.log(isEqual(data, data3)); // false`

function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = function () {
    return (count = 10);
  };
  return counter;
}

let counter = makeCounter();
// Решение 1-ой задачи

function makeCounter() {
  function counter() {
    return ++counter.count;
  }
  counter.count = 0;
  counter.set = function (value) {
    return (this.count = value);
  };
  counter.decrease = function () {
    return this.count && --this.count;
  };
  return counter;
}
console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)
let delay = 5000;

let timerId = setTimeout(function request() {
...отправить запрос...

  if (ошибка запроса из-за перегрузки сервера) {
    // увеличить интервал для следующего запроса
    delay *= 2;
  }

  timerId = setTimeout(request, delay);

}, delay);