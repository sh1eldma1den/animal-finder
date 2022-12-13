
const card = document.getElementById('searchResultTop')
const nameSearch = document.getElementById('submitName')
const cardTemplate = document.getElementById('animal-card-template')
const animalInput = document.getElementById('searchName').value
const myList = document.getElementById('my-list-total')


nameSearch.addEventListener('click', searchAnimal)
const allAnimals = []
if (localStorage.getItem('my-list') !== null) {
    allAnimals = JSON.parse(localStorage.getItem('my-list'))
    myList.innerHTML = `Found ${allAnimals.length} in My List.`
} else {
    for (let i=1; i <=10; i++) {
        getAllAnimals(i)
    }
}

function searchAnimal(){
    localStorage.setItem('my-list', JSON.stringify(allAnimals))
    if ( animalInput.value.length < 3 ) {
        card.innerHTML = `Name must be 3 or more characters long. Try again!`
        return
    }   
    card.innerHTML = ''
    if (allAnimals.length === 0) {
        animalInput.value = allAnimals[0].animalInput
        for (const animal of allAnimals) {
            const li = ''
            for (const data of animal.data) 
            li += `<li>${data}</li>`
            card.appendChild(createCard(animal, li))
        }

    }
}
    function createCard(animal, li){
        const node = cardTemplate.contentEditable.cloneNode(true)
        const animalName = node.querySelector('.card-name')
        const prey = node.querySelector('.card-prey')
        const behavior = node.querySelector('.card-behavior')
        const threat = node.querySelector('.card-threat')
        const habitat = node.querySelector('.card-habitat')
        const diet = node.querySelector('.card-diet')
        const lifestyle = node.querySelector('.card-lifestyle')
        const desc = node.querySelector('.card-slogan')
    
    
        animalName.textContent = animal.name
        prey.textContent = animal.characteristics.prey
        behavior.textContent = animal.characteristics.group_behavior
        threat.textContent = animal.characteristics.biggest_threat
        habitat.textContent = node.characteristics.habitat
        diet.textContent = node.characteristics.diet
        lifestyle = node.characteristics.lifestyle
        desc.textContent = node.characteristics.slogan

        return node
    }

    function getAllAnimals() {
        const animalInput = document.getElementById('searchName')
        const request = require('request');

        const options = {
          method: 'GET',
          url: 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals',
          qs: {name: animalInput},
          headers: {
            'X-RapidAPI-Key': '3ef67f7eeamsh8b4f075f34e3a7dp18e177jsn3a434a265872',
            'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com',
            useQueryString: true
          }
        };
        
        request(options, function (error, response, body) {
          if (error) throw new Error(error)
        
          console.log(body)
      
        .then(body => {

        
        allAnimals = allAnimals.concat(body.data);
        body.data.forEach(one =>  card.innerHTML = `Loading Animals: ${allAnimals.length} so far ${one.name}`);
      })})
    
    }
