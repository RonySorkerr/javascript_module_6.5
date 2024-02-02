const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversed = [];
for(const color of colors){
    console.log(color);
    reversed.unshift(color);
}
console.log(reversed);


const brands = ['apple', 'samsung', 'xiami', 'hitachi'];
const rev = [];

for(const brand of brands){
    rev.unshift(brand);
}
console.log(rev);