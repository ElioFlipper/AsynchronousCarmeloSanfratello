// Starting from the previous exercise, 
// we want to add to our function repeatHello, a clearInterval after 5 seconds, 
// could you do that?
// The callback function must be an arrow function, can you also explain why?

const hello = () => console.log("Hello")
function repeatHello(callback) {
    let id = setInterval(() => hello(), 1000);
    setTimeout(() => clearInterval(id), 5000)
}
repeatHello(hello)
//E' preferibile utilizzare un arrow function in quanto, avendo il return implicito, si semplifica di molto il codice
