import { getAnimal } from "/botanic-zoo-api"


// const card = document.getElementById('searchResultTop')
const nameSearch = document.getElementById('submitName')
// const cardTemplate = document.getElementById('animal-card-template')
const animalInput = document.getElementById('searchName').value
// const myList = document.getElementById('my-list-total')
// const botanicZoo = ('botanic-zoo-api')

nameSearch.addEventListener('click', searchAnimal)
function searchAnimal(){
  getAnimal(animalInput)
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}
  
  
  

