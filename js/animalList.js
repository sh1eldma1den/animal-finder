import { renderListWithTemplate } from './utils'
import ExternalServices from './ExternalServices'

export default class AnimalList {
  constructor(animalData, listElement) {
    this.category = category
    this.ExternalServices = animalData
    this.listElement = listElement
    this.animals = {}
    this.selector = ''
  }
  
  async init(selector) {
    this.animals = await this.ExternalServices.getData(this.name)
    this.selector = selector

    this.renderList(this.animals, selector, this.listElement, this.name)
  }

  async filterProducts(list, filter) {
    return list.filter(item => filter(item))
  }
  countItems() {
    return this.animals.length
  }

  prepareTemplate(node, animal, name) {
    const finalNode = node
    const name = finalNode.querySelector('.card-name')
    const locations = finalNode.querySelector('.card-locations')
    const prey = finalNode.querySelector('.card-prey')
    const behavior = finalNode.querySelector('.card-behavior')
    const threat = finalNode.querySelector('.card-threat')
    const habitat = finalNode.querySelector('.card-habitat')
    const diet = finalNode.querySelector('.card-diet')
    const lifestyle = finalNode.querySelector('.card-lifestyle')
    const desc = finalNode.querySelector('.card-slogan')


    name.textContent = animal.name
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

  renderList(AnimalList, selector, parentNode, category) {
    const templateElement = document.querySelector(selector)
    renderListWithTemplate(
      templateElement,
      parentNode,
      productList,
      category,
      this.prepareTemplate
    )
  }

  searchProduct(key) {
    const products = this.products.filter(item =>
      item.Name.toLowerCase().includes(key.toLowerCase())
    )
    this.renderList(products, this.selector, this.listElement, this.category)
  }
}