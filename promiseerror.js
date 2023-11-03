// Write a first promise that takes as parameter the variable isLogged . 
// If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error. 
// We write a second promise that takes a variable of type number as a parameter. 
// If the input parameter is greater than 0.5, in the resolve we must return the following data: {name: "John", age: 24}, 
// otherwise we must dispatch an error. Once this is done, 
// try to chain the promises to eventually return the final object {name: "John", age: 24}


const isLogged = true;
function LoggedIn(isLogged) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isLogged = true) {
                resolve((Math.random))
            } else {
                throw new Error("Not logged in")
            }
        }, 500)
    })
}

function isGreater(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 0.5) {
                resolve({ "name": "Elio", "Age": "25" });
            } else {
                throw new Error("is Smaller than 0.5")
            }
        }
        ), 500
    })
}

LoggedIn(true)
    .then(isGreater(0.3))
    .catch((err) => console.error(err))
    .finally(() => console.log("Finally we did it"))
console.log(LoggedIn(isLogged))