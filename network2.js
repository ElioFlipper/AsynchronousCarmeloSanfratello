// Using async and await, implement the necessary code to perform an HTTP POST request. 
// To create a new post, use the following URL: link (Method: Post). 
// The body of the request must contain a post object with the following information: title and Flag Completed. 
// The post data must be transmitted following the compilation of a form.


async function postData(url) {
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            title: "Elio ce l'ha fatta",
            completed: true,
        })
    });
    let data = await response.json();
    return data
}

postData("https://jsonplaceholder.typicode.com/posts")
    .then((response) => console.log(response))
