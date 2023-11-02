// Write a promise. If the variable called number is greater than 10, then it returns a resolve, 
// otherwise it returns a reject. Then manage the promise with then and catch in case of any reject.
let number = 15;
let isGreater = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve(number);
    }
    else {
        reject(number)
    }
})

isGreater
    .then((number) => console.log(number))
    .then((err) => console.err(err))