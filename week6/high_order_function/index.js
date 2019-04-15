const forEach = (arr, fn) => {
  for (let el of arr) {
    fn(el, arr.indexOf(el), arr);
  }
};

forEach([1, 2, 3, 4, 5], item => console.log(item));

const filter = (arr, fn) => {
  let filtered = [];

  for (let el of arr) {
    fn(el, arr.indexOf(el), arr) ? filtered.push(el) : null;
  }

  return filtered;
};

const evenNumbers = filter([1, 2, 3, 4, 5], item => item % 2 === 0);
console.log(evenNumbers);

const map = (arr, fn) => {
  let newArr = [];

  for (let el of arr) {
    newArr.push(fn(el, arr.indexOf(el), arr));
  }

  return newArr;
};

const squares = map([1, 2, 3, 4, 5], item => item * item);
console.log(squares);
