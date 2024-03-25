//  const inputs ={amount:800000, years: 30,rate: 5};

it('should calculate the monthly rate correctly', function () {
  const inputs = {
    amount:800000, 
    years: 30,
    rate: 5
  };
  expect(Math.floor(calculateMonthlyPayment(inputs))).toBeCloseTo(4294,2);
  // expect(calculateMonthlyPayment({amount:800000, years: 30,rate: 0.05})).toContain("$4294");
});

it("should return a result with 2 decimal places", function() {
  const inputs = {
    amount:10043, 
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(inputs)).toContain('\.')
});

/// etc
