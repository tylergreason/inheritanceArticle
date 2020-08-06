// create a new array using the Array object constructor function 
let newArray = new Array(1,2,4); 

// add new functionality to the Array object
Array.prototype.printElements = function(){
    this.forEach(element => console.log(element)); 
}
//show that our array has inherited this function 
newArray.printElements();
/* logs: 
1
2
3
*/

Array.prototype.variable = "this is a string variable added to all array objects"
//show that our Array has inherited this property: 
// console.log(newArray.variable)
// logs: "this is a string variable added to all array objects"

let carBlueprint = function(make, model){
    this.make = make; 
    this.model = model; 
}

let hondaCivic = new carBlueprint('Honda', 'Civic');
let fordTundra = new carBlueprint('Ford', 'Tundra');

console.log(hondaCivic) // logs: carBlueprint { make: 'Honda', model: 'Civic' }
console.log(fordTundra) // logs: carBlueprint { make: 'Ford', model: 'Tundra' }

carBlueprint.prototype.addColor = function(color){ 
    this.color = color;
}

hondaCivic.addColor('blue');
fordTundra.addColor('green'); 
console.log(hondaCivic) // logs: carBlueprint { make: 'Honda', model: 'Civic', color: 'blue' }
console.log(fordTundra) // logs: carBlueprint { make: 'Ford', model: 'Tundra', color: 'green' }
 

// our constructor function 
let Plant = function(color){
    // we can set the properties of objects created with this constructor function here 
    this.color = color;
}

// create an instance of the Object class using our Plant constructor 
let fern = new Plant('green'); 
// check what proerties our fern inherited 
console.log(Object.getPrototypeOf(fern))


Plant.prototype.logMyColor = function(){
    console.log(`The color of this plant is ${this.color}`)
}
fern.logMyColor()