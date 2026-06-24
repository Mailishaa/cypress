const {add,subtraction}=require('./math.js');
describe ('subtraction',()=> {

 test('subtracting two numbers to get accurate result', () => {
    const a=7;
    const b=4;
     result= subtraction(a,b);
    expect(result).toBe(3);
});

test('ensure inputs are numbers',()=>{
    const a="xyz";
    const b="abd";
    result= subtraction(a,b);
    expect(result).toBe(NaN);
});
 test('ensure inputs are positive numbers',()=>{
    const a=-3;
    const b=-4;
    expect(() => subtraction(a,b)).toThrow("please enter positive numbers");   
 })
});