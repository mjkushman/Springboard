# """Example of unit tests."""

# import arithmetic
# from unittest import TestCase


# class AdditionTestCase(TestCase):
#     """Examples of unit tests."""

#     def test_adder(self):
#         assert arithmetic.adder(2, 3) == 5

#     def test_adder_2(self):
#         # instead of assert arithmetic.adder(2, 2) == 4
#         self.assertEqual(arithmetic.adder(2, 2), 4)


import arithmetic
from unittest import TestCase


class AdditionTestCase(TestCase): # inherits from TestCase class
    """ example of unit tests."""
    
    #The OLD, BASIC WAY
    def test_adder(self):
        assert arithmetic.adder(2,3) ==5
        # assert arithmetic.adder(2,3) ==6

    #A BETTER WAY, USING ASSERT METHODS INHERITED FROM TESTCASE
    def test_adder_2(self):
        self.assertEqual(arithmetic.adder(2,2),4) #asserts than adder(2,2) will equal 4
        self.assertEqual(arithmetic.adder(40,50),90) #asserts than adder(40,50) will equal 90