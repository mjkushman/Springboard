def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    swapped = phrase.replace(to_swap,to_swap.swapcase())
    # swapped = phrase.replace(to_swap,'b')
    print(swapped)
    return swapped


# flip_case('AAAbaaa','A')

#DONE
