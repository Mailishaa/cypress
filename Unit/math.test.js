const {add,subtraction}=require('./math.js');

describe ('sum functions ',()=> {
    
test('adding two numbers to get accurate result', () => {
    const a=3;
    const b=4;
     result=add(a,b);
    expect(result).toBe(7);
});

test('ensure inputs are numbers',()=>{
    const a="xyz";
    const b="abd";
    result=add(a,b);
    expect(result).toBe(NaN);
});

test('ensure inputs are positive numbers',()=>{
    const a=-3;
    const b=-4;
    expect(() => add(a,b)).toThrow("please enter positive numbers");
}
);


});


