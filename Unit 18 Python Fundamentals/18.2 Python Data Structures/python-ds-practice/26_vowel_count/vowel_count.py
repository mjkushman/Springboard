def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    vowels =['a','e','i','o','u']
    
    frequency = {ltr:phrase.count(ltr) for ltr in phrase if ltr in vowels} #if a letter appears in vowels, then count times that letter appears in phrase
    print(frequency)
    return frequency




vowel_count('rithm school')
#{'i': 1, 'o': 2}

vowel_count('HOW ARE YOU? i am great!') 
#{'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}