// needed only for adding to "my list?"

import { getLocalStorage, setLocalStorage } from './utils'

export default class AnimalDetails {
  constructor(ExternalServices, name) {
    this.animal = {}
    this.ExternalServices = ExternalServices
    this.name = name
  }

  async init() {
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.animal = await this.ExternalServices.findAnimalByName(
      this.name
    )
    // once we have the product details we can render out the HTML
    this.renderAnimalDetails()
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    document
      .getElementById('addToList')
      .addEventListener('click', this.addToList.bind(this))
    }
  getName() {
    return this.animal.name
  }

  async addToList() {
    // Get the current items stores in localStorage
    let localItems = getLocalStorage('so-cart')
    // Check if there are already items there and add the new item
    if (localItems === null || localItems.length === 0) {
      setLocalStorage('so-cart', [{ ...this.animal, quantity: 1 }])
      return
    }
    const addItemsArray = localItems.map(item =>
      item.name === this.animal.name
        ? { ...item }
        : item
    )
    let check = localItems.find(i => i.name === this.animal.name)

    if (check !== undefined) {
      setLocalStorage('so-cart', addItemsArray)
    } else {
      setLocalStorage('so-cart', [
        ...localItems,
        { ...this.animal }
      ])
    }
  }
}
