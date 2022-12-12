export async function getAnimal() {
  const name = document.getElementById('searchName')
  const request = require('request');
  request.get({
   url: 'https://api.api-ninjas.com/v1/animals?name=' + name,
    headers: {
      'X-Api-Key': '4e3a7dp18e177jsn3a434a265872'
    },
  }, function(error, response, body) {
    if(error) {
      return console.error('Request failed:', error);
    }else if(response.statusCode != 200) {
      return console.error('Error:', response.statusCode, body.toString('utf8'));
    }else {

      const details = print(response.data)
      // const renderDetails = `<h3>${this.name}</h3>
      //   <h2 class="divider">${this.name}</h2>
      //   <p class="group">${this.product.Colors[0].ColorName}</p>
      //   <p class="diet">${this.product.DescriptionHtmlSimple}</p>
      //   <p class="location">${this.}
      //   <div class="product-detail__add">
      //     <button class="btn-primary" id="addToCart" data-id=${this.product.Id}>Add to Cart</button>
      //   </div>`

    document.querySelector('.searchResultTop').innerHTML = details
}})}

export default class ExternalServices {
  constructor() {}

  async getData(name) {
    const res = await fetch(baseURL + `${name}`)
    const data = await convertToJson(res)
    return data.Result
  }
}


