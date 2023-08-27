// const request = new XMLHttpRequest();
const button  = document.querySelector(".button")
const info = document.querySelector(".info")

// request.addEventListener('readystatechange', () => {
//     //console.log("request: ", request, "readyState: ", request.readyState);
//     console.log(JSON.parse(request.responseText))
//     if(request.readyState === 4){
//         button.addEventListener('click', (e) => {
//             e.preventDefault()
//             const html = `<span>${JSON.parse(request.responseText)}<span>`
//             info.innerHTML = html
//         })
//     }
// })

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
// request.send()


// fetch("vidhi.json").then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault()
//         const html = `<span>${data}</span>`
//         info.innerHTML = html
//     })
//     console.log(data)
// }).catch(err => {
//     console.log('rejected', err)
// })


const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await response.json
    return data
}

getTodos()
    .then(data => console.log('resolved: ', data))
    .catch(err => console.log('error: ', err.message))