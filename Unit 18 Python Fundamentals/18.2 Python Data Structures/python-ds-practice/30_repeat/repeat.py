def repeat(phrase, num):
    """Return phrase, repeated num times.

        >>> repeat('*', 3)
        '***'

        >>> repeat('abc', 2)
        'abcabc'

        >>> repeat('abc', 0)
        ''

    Ignore illegal values of num and return None:

        >>> repeat('abc', -1) is None
        True

        >>> repeat('abc', 'nope') is None
        True
    """
    if isinstance(num,int) and num >= 0:
        new_phrase = phrase*num
        print(new_phrase)
    else:
        print(None)


#DONE but could be shorter?

repeat('*', 3)
# '***'

repeat('abc', 2)
# 'abcabc'

repeat('abc', 0)
# ''


repeat('abc', 'nope')
# True