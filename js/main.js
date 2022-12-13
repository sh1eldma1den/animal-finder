
const card = document.getElementById('searchResultTop')
const nameSearch = document.getElementById('submitName')
const cardTemplate = document.getElementById('animal-card-template')
const animalInput = document.getElementById('searchName')
const myList = document.getElementById('my-list-total')
const botanicZoo = ('botanic-zoo-api')

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
        const node = cardTemplate.content.cloneNode(true)
        const animalName = node.querySelector('.card-name')
        const prey = node.querySelector('.card-prey')
        const behavior = node.querySelector('.card-behavior')
        const threat = node.querySelector('.card-threat')
        const habitat = node.querySelector('.card-habitat')
        const diet = node.querySelector('.card-diet')
        const funFact = node.querySelector('.card-slogan')
        const desc = node.querySelector('.card-description')

        animalName.textContent = animal.Name
        prey.textContent = animal.Prey
        behavior.textContent = animal.GroupBehavior
        threat.textContent = animal.BiggestThreat
        habitat.textContent = animal.Habitat
        diet.textContent = animal.Diet
        funFact.textContent = animal.FunFact
        desc.textContent = animal.Description

        return node
    }

    function getAllAnimals(page){
        botanicZoo
        .getAnimal(animal)
        .then((response) => response.json())
        .catch((err) => console.error(err))
        .then(animal => {
            console.log(animal)
            allAnimals = allAnimals.concat(animal.data)
            animal.data.forEach(one => card.innerHTML = `Loading Animals: ${allAnimals.length} so far ${one.name}.`)
        })
    }

