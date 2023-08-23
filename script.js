const request = new XMLHttpRequest();
const button  = document.querySelector(".button")
const info = document.querySelector(".info")
request.addEventListener('readystatechange', () => {
    //console.log("request: ", request, "readyState: ", request.readyState);
    console.log(request.responseText)
    if(request.readyState === 4){
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const html = `<span>${request.responseText}<span>`
            info.innerHTML = html
        })
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
request.send()