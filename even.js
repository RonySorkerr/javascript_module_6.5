const numbers = [12, 98, 5, 41, 23, 78, 46]; // the array
const evens = []; // an empty variable to push the even numbers

for(const number of numbers){ // for ...of loop
    if(number % 2 === 0){ // if the numbers are divisible by 2
        evens.push(number); //pushing the even numbers in to the void variable.
    }
}

console.log(evens); //loging the output. WE MUST SHOW THE OUTPUT OUTSIDE OF THE LOOP.

const shonkha = [12, 98, 150, 41, 23, 78, 46, 123, 120];
const mans = [];
const odds = [];


for(const numbeer of shonkha){
    if(numbeer % 2 === 0){
        // console.log(numbeer);
        mans.push(numbeer);
    }
}


console.log(mans);

for(const odd of shonkha){
    if(odd % 2 === 1){
        odds.push(odd);
    }
}

console.log(odds);

