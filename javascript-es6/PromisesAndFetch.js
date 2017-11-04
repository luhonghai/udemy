const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 3000);
});

promise
    .then(() => console.log('finally finished!'))
    .then(() => console.log('I was also ran!!!'))
    .catch(() => console.log('uh oh!!!'));
console.log(promise);

// fetch
// Open console from Chrome to run it

url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));