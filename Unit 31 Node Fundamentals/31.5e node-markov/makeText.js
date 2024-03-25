/** Command-line tool to generate Markov text. */

const { MarkovMachine } = require('./markov')
const axios = require('axios')
const fs = require('fs')

const args = process.argv
// console.log(args)

const sourceType = args[2].toLowerCase()
if(sourceType != 'url'&& sourceType!='file'){
    throw new Error('Please note either "file" or "url"')
}

// console.log('sourceType:', sourceType)

const source = args[3].toLowerCase()

async function letsMarkov(source, sourceType){
    // Use the source to make a Markov output
    // Source will either be a url or file 
   
    if(sourceType == 'url'){
        let data = await axios.get(source);
        const mm = new MarkovMachine(data.data)
        mm.makeText()
    }
    else{
        fs.readFile(source,'utf8',(err,data)=>{
            if(err){
                console.error(err);
                return;
            }
            const mm = new MarkovMachine(data)
            let output = mm.makeText()
            return(output)
        });
    }
}

letsMarkov(source,sourceType)

module.exports = {letsMarkov}