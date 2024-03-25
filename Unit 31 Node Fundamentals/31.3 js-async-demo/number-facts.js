let factsDiv = document.getElementById('facts')
let factsPromises = []
const baseURL = 'http://numbersapi.com/'

for(let i=1; i<5; i++) {
    factsPromises.push(axios.get(baseURL+'37'))
}

// console.log(factsPromises)

Promise.all(factsPromises)
    .then(arr => {
        for(res of arr) {
            console.log(res)
            let p = document.createElement('p');
            p.textContent = res.data
            // factsDiv.append(p)
            console.log(p)
            factsDiv.appendChild(p);
        }
    })
    .catch(err => console.log(err))