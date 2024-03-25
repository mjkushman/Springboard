describe("matchers", function(){
  test("toBe and toEqual are different", function () {
    let nums = [1,2,3];
    let newNums = nums.slice();

    expect(nums).not.toBe(newNums);  // not the same reference!
    expect(nums).toEqual(newNums);   // same values so we use toEqual
  });
});

describe('matchers', function() {
  test('compare toBe and toEqual. they should be different', function(){
    let nums = [3,4,5]
    let newNums = [...nums] // copies contents of nums into newNums

    expect(nums).toEqual(newNums)
    // expect(nums).toBe(newNums) //this will fail

  })
  test('using contain mater', function(){
    const colors = ['red','orange','green']
    expect(colors).toContain('red')
  })

  test('using boolean matcher', function(){
    expect('hi').toBeTruthy();
    expect('').toBeFalsy();
  })
  
  test('using Any', function(){
    const randNum = Math.random() * 6;
    expect(randNum).toEqual(expect.any(Number))
    expect("asffwef").toEqual(expect.any(String))

  })
})

