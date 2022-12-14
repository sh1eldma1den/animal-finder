
const nameSearch = document.getElementById('submitName')
nameSearch.addEventListener('click', getAllAnimals)

function getAllAnimals() {
    const animalInput = document.getElementById('searchName')

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
    request(options, function (error, response, body){
        if (error){
            throw new Error(error)
        }else {
            console.log(body)
        }
    })
}
