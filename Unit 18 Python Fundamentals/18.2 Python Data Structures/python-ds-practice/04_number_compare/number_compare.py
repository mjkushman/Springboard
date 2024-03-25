def number_compare(a, b):
    """Report on whether a>b, b>a, or b==a
    
        >>> number_compare(1, 1)
        'Numbers are equal'
        
        >>> number_compare(-1, 1)
        'Second is greater'
        
        >>> number_compare(1, -2)
        'First is greater'
    """
    if a > b:
        print('The First number is greater.')
    elif b > a:
        print('The Second number is greater.')
    else:
        print('The Numbers are equal.')

# number_compare(7,7)

#DONE