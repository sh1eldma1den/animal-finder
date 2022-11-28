const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals',
  params: {name: 'elephant' },
  headers: {
    'X-RapidAPI-Key': '3ef67f7eeamsh8b4f075f34e3a7dp18e177jsn3a434a265872',
    'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});