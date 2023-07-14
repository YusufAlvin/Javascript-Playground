// ============= Checksum algorithm =============
const crypto = require('crypto');

const data1 = {
  items: [
    { id: 1, type: 'a' },
    { id: 2, type: 'b' },
    { id: 3, type: 'c' },
  ],
  isRunning: false,
};

const data2 = {
  items: [
    { id: 1, type: 'a' },
    { id: 2, type: 'b' },
    { id: 3, type: 'c' },
  ],
  isRunning: false,
};

function calculateChecksum(data) {
  const dataString = JSON.stringify(data);
  const hash = crypto.createHash('sha256').update(dataString).digest('hex');
  return hash;
}

// function calculateChecksum(data) {
//   let checksum = 0;

//   // Convert the data to a string representation
//   const dataString = JSON.stringify(data);

//   // Iterate over each character in the string
//   for (let i = 0; i < dataString.length; i++) {
//     // XOR the checksum with the character code
//     checksum ^= dataString.charCodeAt(i);
//   }

//   return checksum.toString(16); // Convert to hexadecimal string
// }

// const checksum = (data) => {
//   let str = JSON.stringify(data);
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum += str.charCodeAt(i);
//   }
//   return sum;
// }

console.log('data1: ', calculateChecksum(data1));
console.log('data2: ', calculateChecksum(data2));
// ============= Convert Object to Array =============
// const data = {
//   1: { name: 'a', email: 'a@email.com' },
//   2: { name: 'b', email: 'b@email.com' },
// };

// const newData = Object.entries(data).map(([key, value]) => ({
//   id: key,
//   ...value
// }));

// console.log(newData);

// ============= Deep Equal Algorithm =============
// function deepEqual(a, b) {
//   // If both values are identical, they're equal
//   if (a === b) {
//     return true;
//   }

//   // Check if both values are objects and not null
//   if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
//     // Check if both values are arrays
//     if (Array.isArray(a) && Array.isArray(b)) {
//       // Check if the length of the arrays is the same
//       if (a.length !== b.length) {
//         return false;
//       }

//       // Check if all elements in the arrays are deeply equal
//       for (let i = 0; i < a.length; i++) {
//         if (!deepEqual(a[i], b[i])) {
//           return false;
//         }
//       }

//       return true;
//     }

//     // Get the keys of the objects
//     const keysA = Object.keys(a);
//     const keysB = Object.keys(b);

//     // Check if the number of keys is the same
//     if (keysA.length !== keysB.length) {
//       return false;
//     }

//     // Check if all keys and values are deeply equal
//     for (let key of keysA) {
//       if (!deepEqual(a[key], b[key])) {
//         return false;
//       }
//     }

//     return true;
//   }

//   // Values are of different types or not objects
//   return false;
// }

// const data1 = {
//   1: {
//     name: 'b',
//     gmail: 'b'
//   }
// };

// const data2 = {
//   1: {
//     name: 'a',
//     gmail: 'b'
//   }
// };

// console.log(deepEqual(data1, data2))

// const generateData = () => {
//   const data = [];

//   for (let i = 1; i < 100; i++) {
//     data.push(i)
//   }

//   return data;
// }

// const data1 = generateData();

// const data2 = generateData();

// console.log(deepEqual(data1, data2))

// const data1 = [
//   { id: 1, name: 'a', selected: false },
//   { id: 2, name: 'b', selected: false },
//   { id: 3, name: 'c', selected: false },
// ];

// const newData = data1.reduce((acc, cur) => {
//   acc[cur.id] = cur;
//   return acc;
// }, {});

// console.log(Object.keys(newData))

// console.log(isNaN(null));

// const data2 = [1, 3];

// const newData1 = data1.map(d => {
//   if (data2.includes(d.id)) {
//     return {
//       ...d,
//       selected: true,
//     };
//   }
//   return {
//     ...d,
//     selected: false,
//   };
// });

// console.log(newData1);

// ============================== Data Graph ==============================
// const data = [
//   {
//     a: 10,
//     b: 5,
//     c: 2,
//     d: 6,
//     time: '08:45:00'
//   },
//   {
//     a: 4,
//     b: 7,
//     c: 5,
//     d: 7,
//     time: '08:45:01'
//   },
//   {
//     a: 9,
//     b: 4,
//     c: 6,
//     d: 2,
//     time: '08:45:02'
//   },
//   {
//     a: 6,
//     b: 3,
//     c: 8,
//     d: 10,
//     time: '08:45:03'
//   },
//   {
//     a: 11,
//     b: 2,
//     c: 6,
//     d: 3,
//     time: '08:45:04'
//   },
//   {
//     a: 10,
//     b: 5,
//     c: 2,
//     d: 6,
//     time: '08:45:05'
//   },
//   {
//     a: 4,
//     b: 7,
//     c: 5,
//     d: 7,
//     time: '08:45:06'
//   },
//   {
//     a: 9,
//     b: 4,
//     c: 6,
//     d: 2,
//     time: '08:45:07'
//   },
//   {
//     a: 6,
//     b: 3,
//     c: 8,
//     d: 10,
//     time: '08:45:08'
//   },
//   {
//     a: 11,
//     b: 2,
//     c: 6,
//     d: 3,
//     time: '08:45:09'
//   },
//   {
//     a: 10,
//     b: 5,
//     c: 2,
//     d: 6,
//     time: '08:45:10'
//   },
//   {
//     a: 4,
//     b: 7,
//     c: 5,
//     d: 7,
//     time: '08:45:11'
//   },
//   {
//     a: 9,
//     b: 4,
//     c: 6,
//     d: 2,
//     time: '08:45:12'
//   },
//   {
//     a: 6,
//     b: 3,
//     c: 8,
//     d: 10,
//     time: '08:45:13'
//   },
//   {
//     a: 11,
//     b: 2,
//     c: 6,
//     d: 3,
//     time: '08:45:14'
//   },
//   {
//     a: 10,
//     b: 5,
//     c: 2,
//     d: 6,
//     time: '08:45:15'
//   },
//   {
//     a: 4,
//     b: 7,
//     c: 5,
//     d: 7,
//     time: '08:45:16'
//   },
//   {
//     a: 9,
//     b: 4,
//     c: 6,
//     d: 2,
//     time: '08:45:17'
//   },
//   {
//     a: 6,
//     b: 3,
//     c: 8,
//     d: 10,
//     time: '08:45:18'
//   },
//   {
//     a: 11,
//     b: 2,
//     c: 6,
//     d: 3,
//     time: '08:45:19'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:20'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:21'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:22'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:23'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:24'
//   },{
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:25'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:26'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:27'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:28'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:29'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:30'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:31'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:32'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:33'
//   },
//   {
//     a: 10,
//     b: 4,
//     c: 5,
//     d: 6,
//     time: '08:45:34'
//   },
// ];

// const newData = data.sort((a, b) => a.name.localeCompare(b.name));
// const dataLength = data.length;

// // Sample size excluding first and last items
// let sampleSize = 5;
// const quotient = Math.floor(dataLength / sampleSize);

// // Ensure the sample size is less than the total number of items
// if (sampleSize >= dataLength - 2) {
//   console.warn(
//     'Sample size is too large. Adjusting to include all items except the first and last.'
//   );
//   sampleSize = dataLength - 2;
// }

// // Get a random selection of items excluding the first and last
// const sampledItems = [];
// for (let i = 1; i < dataLength - 1; i++) {
//   if (i % quotient === 0) {
//     sampledItems.push(data[i]);
//   }
// }

// // Take the first `sampleSize` items from the shuffled sampled items
// const sampledData = [
//   data[0],
//   ...sampledItems.slice(0, sampleSize - 2),
//   data[dataLength - 1],
// ];

// console.log('sampledData', sampledData);

// ============================== Learning Promise Section ==============================
// const promise1 = (time = 1000) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('promise 1');
//     }, time);
//   });
// };

// const promise2 = (time = 1000) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('promise 2');
//     }, time);
//   });
// };

// const promise3 = (time = 1000) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('promise 3');
//     }, time);
//   });
// };

// const runPromise1 = async () => {
//   console.log('waiting promise 1');
//   const res = await promise1(8000);
//   console.log('promise 1 is done');
// };

// const runPromise2 = async () => {
//   console.log('waiting promise 2');
//   const res = await promise2(5000);
//   console.log('promise 2 is done');
// };

// const runPromise3 = async () => {
//   try {
//     console.log('waiting promise 3');
//     const res = await promise3(7000);
//     console.log('promise 3 is done');
//   } catch (error) {
//     console.error('promise 3 is error');
//   }
// };

// const fetchData = async () => {
//   try {
//     await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     return true;
//   } catch (e) {
//     return false;
//   }
// }

// const testing = async () => {
//   const res = await fetchData()
//   console.log(res)
// }

// // const testing = () => async () => {
// //   const res = await promise3(1000);
// //   console.log(res);
// // };

// runPromise1();
// runPromise2();
// runPromise3();
// testing()
// testing()();

// ============================== Learning Algorithm Section ==============================

// const dummyItems = [
//   { id: 0, parentId: null, title: 'Parent 1', icon: null },
//   { id: 1, parentId: 0, title: 'Child 1 - 1', icon: null },
//   { id: 2, parentId: 0, title: 'Child 1 - 2', icon: null },
//   { id: 3, parentId: null, title: 'Parent 2', icon: null },
//   { id: 4, parentId: 3, title: 'Child 2 - 1', icon: null },
//   { id: 5, parentId: 3, title: 'Child 2 - 2', icon: null },
// ];

/**
 * Learning Binary Search Algorithm
 */
// function getDummyData() {
//   const data = [];

//   for (let i = 0; i < 500; i++) {
//     data.push(`Data ${i}`);
//   }

//   return data;
// }

// function binarySearch(arr, x) {
//   let l = 0;
//   let r = arr.length - 1;

//   while (l <= r) {
//     let m = l + Math.floor((r - l) / 2);

//     console.log('l', l)

//     let res = x.localeCompare(arr[m]);

//     // Check if x is present at mid
//     if (res === 0) return m;

//     // If x greater, ignore left half
//     if (res > 0) l = m + 1;
//     // If x is smaller, ignore right half
//     else r = m - 1;
//   }

//   return -1;
// }
