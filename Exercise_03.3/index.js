let spaceship = prompt("Digit o nome da nave")

let charToReplace = prompt("Qual caracter voce deseja substituir? 😉")

let replacementChar = prompt("Por qual caracter voce deseja substituir? ")

//console.log(spaceship, charToReplace, replacementChar)

let newSpaceship = ""

for(let pos = 0; pos < spaceship.length; pos++) {
  if(spaceship[pos] == charToReplace){
  newSpaceship += replacementChar
  } else {
  newSpaceship += spaceship[pos]
  }
}   

//Elemental
//e
//h

//pos = 0 E e newSpaceship = E
//pos = 1 l e newSpaceship = El
//pos = 2 e e newSpaceship = Elh

//.....


alert("O novo nome da nave eh:  " + newSpaceship)
