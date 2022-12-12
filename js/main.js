// Import functions that connect to API, and the classes that stores that information
import ExternalServices, { getAnimal } from './ExternalServices.js'
import AnimalList from './animalList.js'

// Create the animal listings
const parentNode = document.querySelector('.animal-listing')
const selector = '#animal-card-template'
const externalServices = new ExternalServices()
const animalList = new AnimalList(selector, externalServices, parentNode)

// event listener for the submit button
document.getElementById('submitName').addEventListener('submit', e => {
    getAnimal()
    .then()
    animalList.init(selector)
})