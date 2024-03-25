/** Textual markov chain generator */
class MarkovMachine {
  /** build markov machine; read in text.*/
  constructor(text) {
    // console.log('text:',text)
    let words = text.split(/[\. \r\n]+/); //outputs an array of the words
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }
  
  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {

    let chains = {}
      
    for(let i = 0; i < this.words.length; i++){
      let thisWord = this.words[i].toLowerCase()
      let nextWord
      if(i < this.words.length-1) {
        nextWord = this.words[i+1].toLowerCase()

      }
      else{
        nextWord = null}
      
      if(chains[thisWord]){
        chains[thisWord].push(nextWord)
      }
      else{
        chains[thisWord] = [nextWord]
      }
    }
    // console.log(chains)
    this.chains = chains
  }


  /** return random text from chains */

  makeText(numWords = 100) {

    let wordsArray = []
    let keys = Object.keys(this.chains)
    let index = Math.floor(Math.random()*keys.length-1)
    let currentWord = keys[index]
    wordsArray.push(currentWord)
    
    while(numWords){
      
      // console.log(this.chains[currentWord])
      let optionsArray = this.chains[currentWord]
      // console.log('optionsArray',optionsArray)

      if(!optionsArray){
        console.log('Ended with this many left', numWords)
        break
      }
      else{
        let optionsArrayLength = optionsArray.length
        // console.log('options array length is',optionsArrayLength)
        index = Math.floor(Math.random()*optionsArrayLength)
        // console.log('index is',index)
        currentWord = this.chains[currentWord][index]
        
        wordsArray.push(currentWord)
      }
      numWords -= 1
    }

    let output = wordsArray.join(' ');
    console.log(output)
    return(output)
  }
}


// My own testing for sanity
// const mm = new MarkovMachine("random index from. my random this words. random list from The random element will be a dict so I need element You can get better text if you deal with bigrams — two words at a time. So, you keep track of the two words most recently emitted, and what word could follow that. For the phrase “the cat in the hat is in the hat”, this could look like")
// // console.log(mm.words)
// mm.makeText()

module.exports = {
  MarkovMachine
} ;