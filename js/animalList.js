// import function that renders list with template and class that holds returned json data
import { renderListWithTemplate } from './utils.js'
import ExternalServices from './ExternalServices.js'
// create a class to hold array of animals returned
export default class AnimalList {
  constructor(animalData, listElement, animal, selector) {
    this.animal = animal
    this.ExternalServices = animalData
    this.listElement = listElement
    this.animals = {}
    this.selector = ''
  }
  // init the process and render the list
  async init() {
    this.animals = await this.ExternalServices.getData(this.animal)
    this.selector = selector

    this.renderList(this.animals, this.listElement, this.animal, selector)
  }
  // function to prepare the template
  prepareTemplate(node, animal) {
    const finalNode = node
    const animalName = finalNode.querySelector('.card-name')
    const locations = finalNode.querySelector('.card-locations')
    const prey = finalNode.querySelector('.card-prey')
    const behavior = finalNode.querySelector('.card-behavior')
    const threat = finalNode.querySelector('.card-threat')
    const habitat = finalNode.querySelector('.card-habitat')
    const diet = finalNode.querySelector('.card-diet')
    const lifestyle = finalNode.querySelector('.card-lifestyle')
    const desc = finalNode.querySelector('.card-slogan')


    animalName.textContent = animal.name
    locations.textContent = animal.characteristics.locations
    prey.textContent = animal.characteristics.prey
    behavior.textContent = animal.characteristics.group_behavior
    threat.textContent = animal.characteristics.biggest_threat
    habitat.textContent = finalNode.characteristics.habitat
    diet.textContent = finalNode.characteristics.diet
    lifestyle = finalNode.characteristics.lifestyle
    desc.textContent = finalNode.characteristics.slogan

    return finalNode
  }

  renderList(AnimalList, selector, parentNode, animal) {
    const templateElement = document.querySelector()
    renderListWithTemplate(
      templateElement,
      parentNode,
      productList,
      category,
      this.prepareTemplate
    )
  }

}