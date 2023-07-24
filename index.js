// ============= Reference Equality =============
const a = {
  id: 1,
  type: 'a'
};
const b = a

console.log('a: ', a);
console.log('b: ', b);
console.log(a == b);

// ============= Checksum algorithm =============
// const crypto = require('crypto');
// // const adler32 = require('adler-32');

// const data1 = {
//   name: "Protocol Test 1",
//   profiles: [
//     {
//       profileId: 1,
//       removedFromQueue: false,
//       name: "Profile 1",
//       pulseStationId: 1,
//       leftTube: {
//         barcode: "AABB1",
//         startVolume: 20,
//         startConcentration: 0.1,
//         liquidType: "sample",
//         tubeSlot: {
//           slot: "A1",
//           deckId: 1,
//           rackId: 4
//         }
//       },
//       nanoTube: {
//         barcode: "AABB2",
//         startVolume: 0,
//         startConcentration: 0.1,
//         liquidType: "empty",
//         tubeSlot: {
//           slot: "A1",
//           deckId: 1,
//           rackId: 6
//         }
//       },
//       rightTube: {
//         barcode: "AABB3",
//         startVolume: 10,
//         startConcentration: 0.1,
//         liquidType: "buffer",
//         tubeSlot: {
//           slot: "A1",
//           deckId: 3,
//           rackId: 4
//         }
//       },
//       chip: {
//         mwco: 5,
//         chipSlot: {
//           slot: "A1",
//           deckId: 4,
//           rackId: 3
//         }
//       },
//       cleaningChip: {
//         enabled: true,
//         cleaningDuration: 2,
//         numberOfRinses: 2
//       },
//       sampleRecoveries: [
//         {
//           recoveryType: "buffer",
//           volume: 1
//         },
//         {
//           recoveryType: "air",
//           volume: 1
//         }
//       ],
//       methodId: 1,
//       setupId: 1,
//       mwco: 5,
//       bufferSource: "Tube",
//       startVolume: 50,
//       finalVolume: 20,
//       startExchange: 10,
//       stepSize: 2,
//       startingConcentration: 0.5,
//       estimateFinalConcentration: 0.1,
//       exchangeVolume: 30,
//       currentBufferVolume: 40
//     }
//   ],
//   tubes: [
//     {
//       barcode: "AABB1",
//       startVolume: 20,
//       startConcentration: 0.1,
//       liquidType: "sample",
//       tubeSlot: {
//         slot: "A1",
//         deckId: 2,
//         rackId: 5
//       }
//     },
//     {
//       barcode: "AABB2",
//       startVolume: 0,
//       startConcentration: 0.1,
//       liquidType: "empty",
//       tubeSlot: {
//         slot: "A1",
//         deckId: 1,
//         rackId: 6
//       }
//     },
//     {
//       barcode: "AABB3",
//       startVolume: 10,
//       startConcentration: 0.1,
//       liquidType: "buffer",
//       tubeSlot: {
//         slot: "A1",
//         deckId: 3,
//         rackId: 4
//       }
//     },
//     {
//       barcode: "AABB3",
//       startVolume: 10,
//       startConcentration: 0.1,
//       liquidType: "notube",
//       tubeSlot: {
//         slot: "C2",
//         deckId: 3,
//         rackId: 5
//       }
//     }
//   ],
//   chips: [
//     {
//       mwco: 5,
//       chipSlot: {
//         slot: "A1",
//         deckId: 4,
//         rackId: 3
//       }
//     },
//     {
//       mwco: 10,
//       chipSlot: {
//         slot: "A3",
//         deckId: 4,
//         rackId: 3
//       }
//     }
//   ],
//   decks: [
//     {
//       deckId: 2,
//       rackId: 6,
//       rackType: "TUBE_RACK"
//     },
//     {
//       deckId: 1,
//       rackId: 4,
//       rackType: "TUBE_RACK"
//     },
//     {
//       deckId: 4,
//       rackId: 3,
//       rackType: "CHIP_CADDY"
//     },
//     {
//       deckId: 3,
//       rackId: 5,
//       rackType: "TUBE_RACK"
//     }
//   ],
//   pulseStations: [
//     {
//       Id: 1,
//       LeftTubeAdapter: "50mL",
//       NanoTubeAdapter: "1.5mL",
//       RightTubeAdapter: "15mL",
//       BufferSource: "Tube",
//       BufferPosition: "Right",
//       BufferType: "alcohol",
//       TotalBufferVolume: 30
//     },
//     {
//       Id: 2,
//       LeftTubeAdapter: "50mL",
//       NanoTubeAdapter: "None",
//       RightTubeAdapter: "50mL",
//       BufferSource: "Tube",
//       BufferPosition: "Right",
//       BufferType: "pbs",
//       TotalBufferVolume: 30
//     },
//     {
//       Id: 3,
//       LeftTubeAdapter: "15mL",
//       NanoTubeAdapter: "None",
//       RightTubeAdapter: "50mL",
//       BufferSource: "Reservoir",
//       BufferPosition: "Right",
//       BufferType: "alcohol",
//       TotalBufferVolume: 30
//     },
//     {
//       Id: 4,
//       LeftTubeAdapter: "15mL",
//       NanoTubeAdapter: "None",
//       RightTubeAdapter: "50mL",
//       BufferSource: "Reservoir",
//       BufferPosition: "Right",
//       BufferType: "alcohol",
//       TotalBufferVolume: 30
//     }
//   ],
//   cleaningStations: [
//     {
//       Id: 5,
//       LeftTubeAdapter: "50mL",
//       CleaningSolution: "AAA",
//       TotalCleaningVolume: 1000,
//       RightTubeAdapter: "50mL",
//       RinseSolution: "BBB",
//       TotalRinseVolume: 1000
//     }
//   ]
// }

// const data2 = {
//   name: "Protocol Test 1",
//   profiles: [
//     {
//       profileId: 1,
//       removedFromQueue: false,
//       name: "Profile 1",
//       pulseStationId: 1,
//       leftTube: {
//         barcode: "AABB1",
//         startVolume: 20,
//         startConcentration: 0.1,
//         liquidType: "sample",
//         tubeSlot: {
//           slot: "A1",
//           deckId: 1,
//           rackId: 4
//         }
//       },
//       nanoTube: {
//         barcode: "AABB2",
//         startVolume: 0,
//         startConcentration: 0.1,
//         liquidType: "empty",
//         tubeSlot: {
//           slot: "A1",
//           deckId: 1,
//           rackId: 6
//         }
//       },
//       rightTube: {
//         barcode: "AABB3",
//         startVolume: 10,
//         startConcentration: 0.1,
//         liquidType: "buffer",
//         tubeSlot: {
//           slot: "A1",
//           deckId: 3,
//           rackId: 4
//         }
//       },
//       chip: {
//         mwco: 5,
//         chipSlot: {
//           slot: "A1",
//           deckId: 4,
//           rackId: 3
//         }
//       },
//       cleaningChip: {
//         enabled: true,
//         cleaningDuration: 2,
//         numberOfRinses: 2
//       },
//       sampleRecoveries: [
//         {
//           recoveryType: "buffer",
//           volume: 1
//         },
//         {
//           recoveryType: "air",
//           volume: 1
//         }
//       ],
//       methodId: 1,
//       setupId: 1,
//       mwco: 5,
//       bufferSource: "Tube",
//       startVolume: 50,
//       finalVolume: 20,
//       startExchange: 10,
//       stepSize: 2,
//       startingConcentration: 0.5,
//       estimateFinalConcentration: 0.1,
//       exchangeVolume: 30,
//       currentBufferVolume: 40
//     }
//   ],
//   tubes: [
//     {
//       barcode: "AABB1",
//       startVolume: 20,
//       startConcentration: 0.1,
//       liquidType: "sample",
//       tubeSlot: {
//         slot: "A1",
//         deckId: 2,
//         rackId: 5
//       }
//     },
//     {
//       barcode: "AABB2",
//       startVolume: 0,
//       startConcentration: 0.1,
//       liquidType: "empty",
//       tubeSlot: {
//         slot: "A1",
//         deckId: 1,
//         rackId: 6
//       }
//     },
//     {
//       barcode: "AABB3",
//       startVolume: 10,
//       startConcentration: 0.1,
//       liquidType: "buffer",
//       tubeSlot: {
//         slot: "A1",
//         deckId: 3,
//         rackId: 4
//       }
//     },
//     {
//       barcode: "AABB3",
//       startVolume: 10,
//       startConcentration: 0.1,
//       liquidType: "notube",
//       tubeSlot: {
//         slot: "C2",
//         deckId: 3,
//         rackId: 5
//       }
//     }
//   ],
//   chips: [
//     {
//       mwco: 5,
//       chipSlot: {
//         slot: "A1",
//         deckId: 4,
//         rackId: 3
//       }
//     },
//     {
//       mwco: 10,
//       chipSlot: {
//         slot: "A3",
//         deckId: 4,
//         rackId: 3
//       }
//     }
//   ],
//   decks: [
//     {
//       deckId: 2,
//       rackId: 6,
//       rackType: "TUBE_RACK"
//     },
//     {
//       deckId: 1,
//       rackId: 4,
//       rackType: "TUBE_RACK"
//     },
//     {
//       deckId: 4,
//       rackId: 3,
//       rackType: "CHIP_CADDY"
//     },
//     {
//       deckId: 3,
//       rackId: 5,
//       rackType: "TUBE_RACK"
//     }
//   ],
//   pulseStations: [
//     {
//       Id: 1,
//       LeftTubeAdapter: "50mL",
//       NanoTubeAdapter: "1.5mL",
//       RightTubeAdapter: "15mL",
//       BufferSource: "Tube",
//       BufferPosition: "Right",
//       BufferType: "alcohol",
//       TotalBufferVolume: 30
//     },
//     {
//       Id: 2,
//       LeftTubeAdapter: "50mL",
//       NanoTubeAdapter: "None",
//       RightTubeAdapter: "50mL",
//       BufferSource: "Tube",
//       BufferPosition: "Right",
//       BufferType: "pbs",
//       TotalBufferVolume: 30
//     },
//     {
//       Id: 3,
//       LeftTubeAdapter: "15mL",
//       NanoTubeAdapter: "None",
//       RightTubeAdapter: "50mL",
//       BufferSource: "Reservoir",
//       BufferPosition: "Right",
//       BufferType: "alcohol",
//       TotalBufferVolume: 30
//     },
//     {
//       Id: 4,
//       LeftTubeAdapter: "15mL",
//       NanoTubeAdapter: "None",
//       RightTubeAdapter: "50mL",
//       BufferSource: "Reservoir",
//       BufferPosition: "Right",
//       BufferType: "alcohol",
//       TotalBufferVolume: 30
//     }
//   ],
//   cleaningStations: [
//     {
//       Id: 5,
//       LeftTubeAdapter: "50mL",
//       CleaningSolution: "AAA",
//       TotalCleaningVolume: 1000,
//       RightTubeAdapter: "50mL",
//       RinseSolution: "BBB",
//       TotalRinseVolume: 1000
//     }
//   ]
// }



// function calculateChecksum(data) {
//   const serialized = JSON.stringify(data);
//   return adler32.sum(serialized);
// }

// function calculateChecksum(data) {
//   const dataString = JSON.stringify(data);
//   const hash = crypto.createHash('sha256').update(dataString).digest('hex');
//   return hash;
// };

// const calculateChecksum = (data) => {
//   const hash = crypto.createHash('sha256');

//   function processValue(value) {
//     if (typeof value === 'object') {
//       if (Array.isArray(value)) {
//         value.forEach(processValue);
//       } else {
//         Object.values(value).forEach(processValue);
//       }
//     } else if (typeof value !== 'function') {
//       if (typeof value === 'number') {
//         // If the value is a number, convert it to a buffer before updating the hash
//         const buffer = Buffer.allocUnsafe(8);
//         buffer.writeDoubleBE(value);
//         hash.update(buffer);
//       } else {
//         // For other types, convert them to a string and update the hash
//         hash.update(String(value));
//       }
//     }
//   }

//   processValue(data);
//   return hash.digest('hex');
// };

// const calculateChecksum = (data) => {
//   const hash = crypto.createHash('sha256');

//   function processValue(value) {
//     if (typeof value === 'object') {
//       if (Array.isArray(value)) {
//         value.forEach(processValue);
//       } else {
//         Object.values(value).forEach(processValue);
//       }
//     } else if (typeof value !== 'function') {
//       hash.update(String(value));
//     }
//   }

//   processValue(data);
//   return hash.digest('hex');
// };

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

// const startTime2 = performance.now();
// for (let index = 0; index < 10000; index++) {
//   calculateChecksum(data1);
// }
// const endTime2 = performance.now();

// const startTime1 = performance.now();
// for (let index = 0; index < 10000; index++) {
//   console.log(deepEqual(data1, data2));
// }
// const endTime1 = performance.now();

// const startTime3 = performance.now();
// for (let index = 0; index < 10000; index++) {
//   JSON.stringify(data1);
// }
// const endTime3 = performance.now();

// const elapsedTime1 = endTime1 - startTime1;
// const elapsedTime2 = endTime2 - startTime2;
// const elapsedTime3 = endTime3 - startTime3;

// console.log('deepEqual: ', elapsedTime1);
// console.log('checksum: ', elapsedTime2);
// console.log('stringify: ', elapsedTime3);

// console.time('deepEqual');
// const equal = deepEqual(data1, data2);
// console.log('isEqual: ', equal);
// console.timeEnd('deepEqual');

// console.time('checksum');
// console.log('isEqual: ', calculateChecksum(data1) === calculateChecksum(data2));
// console.timeEnd('checksum');

// const hash1 = calculateChecksum(data1);
// const hash2 = calculateChecksum(data2);
// console.log('hash1: ', hash1);
// console.log('hash2: ', hash2);

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
