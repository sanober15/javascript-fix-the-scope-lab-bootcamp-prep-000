var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
   var animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
    return animal;

}

function add2(n) {


  // Feel free to move things around!
  const two = 2


    return n + two;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
//var theFunk = function(){
//  var funkyFunction = "FUNKY!"
/*  return function funkyFunction(){
    var funkyFunction = console.log(`${theFunk}`);
  }
}*/

function theFunk(){
  var funkyFunction;
  var theFunk;
  return function funkyFunction(){
    return console.log("FUNKY!");

  }
}

/*function(){
  var funkyFunction;
  var theFunk ='FUNKY!';
  return function funkyFunction(){

    return theFunk;
  }

}

/*
function theFunk(){
  var theFunk = "FUNKY!";
  return function funkyFunction(){
    return theFunk;
  }
}
*/
