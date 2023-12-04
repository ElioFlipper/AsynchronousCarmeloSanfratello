const isLogged = true;
function LoggedIn(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data === true) {
                resolve((Math.random()))
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

LoggedIn(isLogged)
.then(data=>isGreater(data))
.then(data=>console.log(data))
.catch(err=>console.error(err))
.finally(()=> console.log('experiment completed'))