const {letsMarkov} = require('./makeText')

describe('Test of makeText function, which should produce a markov output from a source url or text file', function(){
    test('test to read eggs file',function(){
        
        let result = makeText('file','eggs.txt')
        expect(result).toEqual(expect.any(String))
    })

})