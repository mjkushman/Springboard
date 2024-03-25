def list_manipulation(lst, command, location, value=None):
    """Mutate lst to add/remove from beginning or end.

    - lst: list of values
    - command: command, either "remove" or "add"
    - location: location to remove/add, either "beginning" or "end"
    - value: when adding, value to add

    remove: remove item at beginning or end, and return item removed

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'remove', 'end')
        3

        >>> list_manipulation(lst, 'remove', 'beginning')
        1

        >>> lst
        [2]

    add: add item at beginning/end, and return list

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'add', 'beginning', 20)
        [20, 1, 2, 3]

        >>> list_manipulation(lst, 'add', 'end', 30)
        [20, 1, 2, 3, 30]

        >>> lst
        [20, 1, 2, 3, 30]

    Invalid commands or locations should return None:

        >>> list_manipulation(lst, 'foo', 'end') is None
        True

        >>> list_manipulation(lst, 'add', 'dunno') is None
        True
    """
    if command == "add":
        #do something for add
        if location == "beginning":
            lst.insert(0,value)
        elif location == "end":
            lst.append(value)

    elif command == "remove":
        #do something for remove
        if location == "beginning":
            lst.pop(0)
        elif location == "end":
            lst.pop()
    
    else:
        print("Please specify either 'add' or 'remove' command")
        return None
    print(lst)

    

# list_manipulation([1,2,3],"add","end",5)
# list_manipulation([1,2,3],"remove","beginning")
# list_manipulation([1,2,3],"remove","end")

#DONE