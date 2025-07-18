// const arr = [5, 2, -3, -10, 9, -56, 0, 5, 1];

// function posNum(num, callback) {
//     const myArr = [];
//     for (const x of num) {
//         if (callback(x)) {
//             myArr.push(x);
//         }
//     }
//     return myArr;
//     }

// const positive = posNum(arr, (x) => x > 0);
// console.log(`Positive numbers are ${positive}`);

// const myFunc = () => console.log('printed after 5 sec');
// setTimeout(myFunc, 5000);

// let a = 1;
// function timer() {
//     console.log(a, new Date);
//     a++;
// }
// setInterval(timer, 1000);

// const myDisplayer = (some) => {console.log(some);};

// const myPromise = new Promise( (myResolve, myReject) => {
//     let x = 6;
//     if (x == 0) {myResolve('OK');}
//     else {myReject('Error');}
// })

// async function myFunc() {
//     return 'Hello';
// }

// myFunc().then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}    
// )

// async function readFiles() {
//   try {
//     console.log('Starting file read');
//     const data1 = await fs.readFile('b.txt', 'utf8');
//     const data2 = await fs.readFile('a.txt', 'utf8');
//     console.log('File read');
//     console.log(data1, data2);
//   }
//   catch(error) {
//     console.error('Error reading files', error);
//   }
// }
// readFiles();


// const fs = require('fs').promises;
// const promise1 = Promise.resolve('First result');
// console.log('after promise 1')
// const promise3 = fs.readFile('a.txt', 'utf8');
// console.log('after promise 2')
// const promise2 = new Promise((resolve) => {setTimeout(() => {resolve('Second result')},1000)});
// console.log('after promise 3')

// Promise.all([promise1, promise2, promise3])
//   .then(result => {console.log('Results: ', result);})
//   .catch(error => {console.error('Error in one of the promises: ', error);})

function getUser(userID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({id: userID, name: 'Amit'});
    }, 1000);
  });
}

function getUserPosts(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(['post1', 'post2', 'post3']);
      reject('Error 404');
    });
  });
}

getUser(123)
  .then(user => {
    console.log('User:', user);
    return getUserPosts(user);
  }) 
  .then(post => {
    console.log('Posts:', post)
  })
  .catch(err => {
    console.log('Error: ', err);
  });


const fs = require('fs').promises;

async function read() {
  try {
    const data = await fs.readFile('a.txt', 'utf8');
    console.log(data);
  }
  catch(err) {
    console.error('Error: ', err);
  }
}

read();


  