def any7(nums):
    """Are any of these numbers a 7? (True/False)"""

    # YOUR CODE HERE 
    count_of_sevens = 0
    for num in nums:
        if num == 7:
            count_of_sevens +=1
    return(count_of_sevens == True) #if count of 7s >0, will be True
print("should be true", any7([1, 2, 7, 4, 5]))
print("should be false", any7([1, 2, 4, 5]))

#DONE