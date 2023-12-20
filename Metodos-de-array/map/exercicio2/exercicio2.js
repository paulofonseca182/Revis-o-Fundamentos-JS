const numbers = [4, 9, -1, 16, -5, 25];

const raizQuadrada = numbers.map((number) => {
    if(number < 0) {
        return NaN;
    }
     
    return Math.sqrt(number);
});

console.log(raizQuadrada);