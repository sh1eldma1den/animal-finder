// Is this even needed?


import ExternalServices from './ExternalServices'
import AnimalList from './animalList'

// Create the product list
const parentNode = document.querySelector('.animal-listing')
const selector = '#animal-card-template'
const externalServices = new ExternalServices()
const animalList = new AnimalList(name, externalServices, parentNode)

document.getElementById('#submitName').addEventListener('submit', e => {
    animalList.init(selector)
})
