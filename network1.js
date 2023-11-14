// Using async and await, implement the necessary code to recover the Todos list present 
// in the following URL through an http request: link .

async function getData(url){
    let response = await fetch(url);
    let data = await response.json();
    return data
}

getData("https://jsonplaceholder.typicode.com/todos")
    .then((val) => console.log(val))
    .catch((err) => console.error(err))
