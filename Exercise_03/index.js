/* let velocity = 50
let acceleration = 5

while(velocity <= 100) {
console.log("Acceleration: we are: " + velocity + "km/s")
velocity += acceleration // velocity = velocity + acceleration
} */

/*let constellation = "Andromeda"
let = pos = 0
let constellationLength = constellation.length

while(pos < constellationLength) {
  if(constellation[pos] == "a" || constellation[pos] == "A") {
    console.log(pos)
  }
  pos += 1
} */


let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Enter the name of the ship...")

chosenOption = prompt("Do you want to enter space warp? \n1 - Yes\n2 - No")

while(chosenOption == "1") {
  warpCount += 1
  chosenOption = prompt("Do you want to perform the next fold? \n1 - Yes\n2 - No")
}

alert("space: " + spaceship + "\nbending amounts:  " + warpCount)