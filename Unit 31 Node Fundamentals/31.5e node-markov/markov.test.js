const {MarkovMachine} = require('./markov')

describe('markov machine function',function(){
    test('Does the constructor work', function(){
        let text = 'Here is some string. It has punctuation, too.'
        let mm = new MarkovMachine(text)
        expect(mm.words).toEqual(expect.any(Array))

        expect(mm.chains).toEqual(expect.any(Object))

        expect(mm.makeText()).toEqual(expect.any(String))

        expect(mm.makeText(1)).to(expect.any(String))
    })

})

