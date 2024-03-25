def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """
    forward_phrase = list(phrase)
    backward_phrase = forward_phrase[::-1]
    # print(forward_phrase,backward_phrase)
    if forward_phrase == backward_phrase:
        print(True)
        return True
    else:
        print(False)
        return False

# is_palindrome('hathaway')
# is_palindrome('racecar')

#DONE