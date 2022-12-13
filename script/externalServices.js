import pkg from 'botanic-zoo-api';
const { getAnimal } = pkg;


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
 
// picture finder
baseURL = 'https://api.pexels.com/v1/search' + query

// const client = createClient('YOUR_API_KEY');
// const query = 'Nature';

// client.photos.search({ query, per_page: 1 }).then(photos => {...});

  
  

