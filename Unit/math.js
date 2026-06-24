function add(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    if (a < 0 || b < 0) {
        throw new Error("please enter positive numbers");

    }
     return(a+b);

}

function subtraction(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    if (a < 0 || b < 0) {
        throw new Error("please enter positive numbers");

    }
 return(a-b);
}
module.exports = {add,subtraction};

