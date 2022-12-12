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


