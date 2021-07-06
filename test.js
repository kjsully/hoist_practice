// GIVEN
console.log(example);
var example = "I'm the example!";
AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

console.log(hello);                                   
var hello = 'world';
//var hello
//console.log(hello) // logs undefinied
//hello = 'world'


var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//global var needle = 'haystack'
//calls test() where function test() is not yet a function


var brendan = 'super cool'; //global var brendan = 'super cool'
function print(){ //call print(), gets hoisted to top
    brendan = 'only okay';//assign value to function  scoped 'brendan'
    console.log(brendan); //log the local scope 'only okay'
}
console.log(brendan); //log the global scope 'super cool'


var food = 'chicken'; //global var food = 'chicken'
console.log(food); //console.log 'chicken'
eat(); // eat() is not a function
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


mean(); //mean not a function
console.log(food); 
var mean = function() { 
    food = "chicken";
    console.log(food); 
    var food = "fish"; 
    console.log(food); 
}
console.log(food); 


console.log(genre); //genre is undefinied
var genre = "disco";//assign global var genre = 'disco'
rewind(); //calls rewind()
function rewind() { //rewind() hoisted to the top
    genre = "rock"; //genre = 'rock'
    console.log(genre); //log 'genre'
    var genre = "r&b"; //genre = 'r&b'
    console.log(genre); //log 'r&b'
}
console.log(genre); //log 'disco'


dojo = "san jose"; //dojo = 'san jose'
console.log(dojo); //log 'san jose'
learn(); //calls 'learn'
function learn() { //function 'learn()' hoisted to top
    dojo = "seattle"; // assign  value to local dojo
    console.log(dojo); //log 'Seattle'
    var dojo = "burbank"; //asssign value to local dojo
    console.log(dojo); //log 'burbank'
}
console.log(dojo); //log global variable 'san jose'


console.log(makeDojo("Chicago", 65)); //working on this with cohort mate...
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}