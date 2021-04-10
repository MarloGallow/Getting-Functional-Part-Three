//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE




/*
1. Return the all friends of a given customers name.
When returning the friends of the customer it
should be a string and NOT the friends array. 
*/

function friendsOfCustomer(name){
  //CODE BELOW HERE
for(var i = 0; i <= customers.length -1; i++){
if(name === customers[i].name){
for(var a = 0; a <= customers[i].friends.length -1; a++){
 console.log(customers[i].friends[a].name) 
}
} 
}
  //CODE ABOVE HERE
}

console.log(friendsOfCustomer("Adele Mullen"))



/*
2. Return the phone number and address of a 
given customer when thier name is entered into the 
function.
*/

function contactInfo(name){
  //CODE BELOW HERE
for(var i = 0; i <= customers.length -1; i++) {
if(name === customers[i].name){
for(var a = 0; a <= customers[i].phone.length -1; a++){
for(var g = 0; g <= customers[i].address.length -1; g++){
console.log(customers[i].phone[a].name[g].address)
}


  //CODE ABOVE HERE
}
console.log(contactInfo("Adele Mullen"))