def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    titlecase_phrase = " ".join([word[0].upper() + word[1:].lower() for word in phrase.split(" ")])
    
    print(titlecase_phrase)
    return titlecase_phrase


#DONE


titleize('this is awesome')
#'This Is Awesome'


titleize('oNLy cAPITALIZe fIRSt')
#'Only Capitalize First'