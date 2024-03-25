
let deckId

axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res => {
    console.log('Getting a single card form new deck')
    deckId = res.data.deck_id
    console.log(deckId)
    return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`)
}).then(res => {
    let suit = res.data.cards[0].suit
    let value = res.data.cards[0].value
    console.log('First Card:',value,suit)
    return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`)
}).then(res => {
    suit = res.data.cards[0].suit
    value = res.data.cards[0].value
    console.log('Second Card:',value,suit)
})



const message = document.getElementById('message')
const button = document.getElementById('drawCard')
const cardDiv = document.getElementById('cards')

let newDeckIc
let newDeck = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res => {
    newDeckId = res.data.deck_id;
    button.addEventListener('click', getCard)
})

function getCard() {
    getURL = `https://deckofcardsapi.com/api/deck/${newDeckId}/draw/?count`
    console.log(newDeckId);
    axios.get(getURL)
    .then(res => {
        console.log(res)
        if(res.data.remaining == 0){
            message.innerText = 'No more cards! Refresh the page to create a new deck'
            return
        }
        else {
            let card = document.createElement('img')
            card.setAttribute('src',res.data.cards[0].image)
            // console.log(card)
            cardDiv.appendChild(card)
        }
        



    })
}




