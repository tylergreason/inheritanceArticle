// create a new array using the Array object constructor function 
let newArray = new Array(1,2,4); 

// add new functionality to the Array object
Array.prototype.printElements = function(){
    this.forEach(element => console.log(element)); 
}

newArray.printElements();
/* logs: 
1
2
3
*/

Array.prototype.variable = "this is a string variable added to all array objects"
//show that our Array has inherited this property: 
console.log(newArray.variable)
// logs: "this is a string variable added to all array objects"