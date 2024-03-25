def intersection(l1, l2):
    """Return intersection of two lists as a new list::
    
        >>> intersection([1, 2, 3], [2, 3, 4])
        [2, 3]
        
        >>> intersection([1, 2, 3], [1, 2, 3, 4])
        [1, 2, 3]
        
        >>> intersection([1, 2, 3], [3, 4])
        [3]
        
        >>> intersection([1, 2, 3], [4, 5, 6])
        []
    """
    
    inter = list(set(l1) & set(l2)) #converts both lists to sets for intersetction, then back to list
    
    print(inter)


intersection([1, 2, 3], [2, 3, 4])
intersection([1, 2, 3], [1, 2, 3, 4])
intersection([1, 2, 3], [3, 4])
intersection([1, 2, 3], [4, 5, 6])

#DONE