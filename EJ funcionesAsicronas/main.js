//https://rickandmortyapi.com/api/character//
let characters
let contenedor = document.getElementById('container')
console.log(contenedor);
fetch('https://rickandmortyapi.com/api/character?')
    .then(answer => answer.json())
    .then(datos => {
        characters = datos.results
        console.log(characters);
        printModel(characters, contenedor)
    })
    .catch(error => console.error(error.message))

function createCards(char) {
    return `<div class="card mb-3 w-50 h-50 d-flex justify-content-center">
    <img src="${char.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${char.name}</h5>
      <p class="card-text">${char.status}</p>
      <p class="card-text"><small class="text-body-secondary">${char.species}</small></p>
    </div>
  </div>`
}
function printModel(charactersArray, ubi) {
    for (let char of charactersArray) {
        ubi.innerHTML += createCards(char)
    }
}


