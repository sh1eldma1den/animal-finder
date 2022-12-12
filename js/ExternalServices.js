// connect to the API and return data
export async function getAnimal() {
  const animal = document.getElementById('searchName')
  const request = require('request');
  request.get({
   url: 'https://api.api-ninjas.com/v1/animals?name=' + animal,
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

    document.querySelector('.searchResultTop').innerHTML = details
}})}
// export clas storing json response from API
export default class ExternalServices {
  constructor() {}

  async getData(animal) {
    const res = await fetch(baseURL + `${animal}`)
    const data = await convertToJson(res)
    return data.Result
  }
}


