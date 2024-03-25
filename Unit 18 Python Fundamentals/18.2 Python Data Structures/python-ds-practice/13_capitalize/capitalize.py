def capitalize(phrase):
    """Capitalize first letter of first word of phrase.

        >>> capitalize('python')
        'Python'

        >>> capitalize('only first word')
        'Only first word'
    """
    print(phrase[0].upper()+phrase[1:])

capitalize('python')
capitalize('only first word')

#DONE