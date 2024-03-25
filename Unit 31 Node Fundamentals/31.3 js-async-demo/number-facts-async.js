let factsDiv = document.getElementById('facts')
let factsPromises = []
const baseURL = 'http://numbersapi.com/'

async function getFacts(num) {
    let promise1 = axios.get(baseURL+num)
    let promise2 = axios.get(baseURL+num)
    let promise3 = axios.get(baseURL+num)
    let promise4 = axios.get(baseURL+num)

    let fact1 = await promise1;
    let fact2 = await promise2;
    let fact3 = await promise3;
    let fact4 = await promise4;

    let facts = [fact1, fact2, fact3, fact4]
    console.log(facts)
    for(fact of facts){
        // console.log(fact)
        let p = document.createElement('p');
        p.textContent = fact.data
        factsDiv.appendChild(p);
    }
}

getFacts(42)

