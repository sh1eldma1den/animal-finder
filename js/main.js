import ExternalServices, { getAnimal } from './ExternalServices.js'
import AnimalList from './animalList.js'

// Create the product list
const parentNode = document.querySelector('.animal-listing')
const selector = '#animal-card-template'
const externalServices = new ExternalServices()
const animalList = new AnimalList(selector, externalServices, parentNode)

document.getElementById('submitName').addEventListener('submit', e => {
    
    animalList.init(selector)
})