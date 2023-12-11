let spaceshipName = prompt("Qual e o nome da nave? ")

let invertedName = ""

for(let i = spaceshipName.length -1; i >=0; i--) {
  if(spaceshipName[i] == "e") {
    break
  }
  invertedName += spaceshipName[i]
}

alert("Nome original da nave:  " + spaceshipName +  "\nNome apos ocultacao: " + invertedName)

//console.log(invertedName)

//S u p e r n o v a  9
//0 1 2 3 4 5 6 7 8