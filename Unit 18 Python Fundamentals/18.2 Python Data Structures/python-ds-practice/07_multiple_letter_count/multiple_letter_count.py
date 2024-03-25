def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """
    results = {}
    for letter in phrase:
        results[letter.lower()] = phrase.lower().count(letter.lower())
    # print(results)
    return results


# multiple_letter_count('Hellow World.')
#DONE