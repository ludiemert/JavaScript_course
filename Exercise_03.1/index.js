/*for(<variavel>; <expressao>; <acao de controle>) {
  <bloco de codigo>
} */

/* let spaceship = "Helmet"
let newSpaceship = ""

for(let i = 0; i < spaceship.length; i++) {
  console.log(spaceship[i])
} */

//trocar o caracter e por i
let spaceship = "Helmet"
let newSpaceship = ""

for(let i = 0; i < spaceship.length; i++) {
  if(spaceship[i] == "e") {
    newSpaceship += "i"
  } else {
    newSpaceship += spaceship[i]
  }
}

console.log(newSpaceship)