let pilotName = prompt("What your name, Pilot?")
let velocity = 0 
let newVelocity = prompt("What speed would you like to accelerate?")
let confirmVelocity = confirm("we are accelerating  " + newVelocity + "km/s")
if(confirmVelocity) {
  velocity = newVelocity
}

if(velocity <= 0) {
  alert("The ship is stopped, consider and start increasing speed")
} else {
  if(velocity = 40) {
    alert(" you are slow we can increase more ")
  } else {
    if(velocity < 80) {
      alert("seems like a good speed to maintain  (parece uma boa velocidade para manter) ")
    }
  }
     
}

//console.log(velocity)