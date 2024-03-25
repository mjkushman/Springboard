const message = document.getElementById('message')
const button = document.getElementById('drawCard')
const cardDiv = document.getElementById('cards')


const deck = {
    /// Deck object with async functions
    async init() {
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        this.deckId = res.data.deck_id;
        button.addEventListener('click', () => this.drawCard())
    },

    async shuffle() {
        await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`)
    },

    async drawCard() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
        // abandon if the deck is empty
        console.log(res)
        if(res.data.remaining <= 0){
            alert('Out of cards! Refresh to get a new deck.')
            return
        }
        else {
            let value = res.data.cards[0].value
            let suit = res.data.cards[0].suit
            console.log(`You drew ${value} of ${suit}`)
            let cardImg = res.data.cards[0].image
    
            // put the card on page
            let newCard = document.createElement('img')
            newCard.setAttribute('src',res.data.cards[0].image)
            cardDiv.appendChild(newCard)
        }
    },

}

deck.init()



