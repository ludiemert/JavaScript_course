let pilotName = prompt("What your name, Pilot?")

let velocity = 0 

let newVelocity = prompt("What speed would you like to accelerate?")

let confirmVelocity = confirm("we are accelerating  " + newVelocity + "km/s")

if(confirmVelocity) {
  velocity = newVelocity
}

console.log(velocity)