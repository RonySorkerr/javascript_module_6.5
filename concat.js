var numbers = ['Tom', 'Tim', 'Tin', 'Tik']; //the array
var item = ''; //an empty varible

for(var element of numbers){ //for ... of loop
    console.log(element); 
    item += element; //what ever element we have in the element variable we are concatanating it in the item variable
}
console.log(item);


var names = ['kamal', 'jamal', 'rahim', 'karim'];
var concate = '';

for(var name of names){
    console.log(name);
    concate += name;
}

console.log(concate);