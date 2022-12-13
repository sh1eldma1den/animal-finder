// connect to the API and return data
 function getAnimal() {
    // const animal = document.getElementById('searchName')
    const request = require('request');

    const options = {
      method: 'GET',
      url: 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals',
      qs: {name: 'cheetah'},
      headers: {
        'X-RapidAPI-Key': '3ef67f7eeamsh8b4f075f34e3a7dp18e177jsn3a434a265872',
        'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com',
        useQueryString: true
      }
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
  
      // document.querySelector('.searchResultTop').innerHTML = details
  }
  getAnimal()
  // export class storing json response from API
  // export default class ExternalServices {
  //   constructor() {}
  
  //   async getData(animal) {
  //     const res = await fetch(baseURL + `${animal}`)
  //     const data = await convertToJson(res)
  //     return data.Result
  //   }
  // }
  
  
  

