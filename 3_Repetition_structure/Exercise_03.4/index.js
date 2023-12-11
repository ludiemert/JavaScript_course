//let velocity = 50
let velocity = 110
let acceleration = 5


//Do While ele executa todo o bloco de codigo pelo menos 1 vez (ex com 110)
do {
  console.log("Acelerando: estamos a " + velocity +  "km/s")
  velocity += acceleration
} while(velocity <= 100)