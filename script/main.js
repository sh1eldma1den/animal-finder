document.getElementById('submitName').addEventListener('click', getAnimals);

export function getAnimals() {

    let animal = document.getElementById('searchName').value;               //  word input
    try {
        if (!animal) {
            throw new SyntaxError("Please enter an animal name.");
        }
        
    } catch (err) {
        alert(err.message);
        return;
    }
    const url = 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals/' + animal
    console.log(animal);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3ef67f7eeamsh8b4f075f34e3a7dp18e177jsn3a434a265872',
            'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com',
        }
    };

    fetch(url, options)
    .then((response) => {
        // 1. check response.ok
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response); // 2. reject instead of throw
      })
        .then(json => renderAnimals(json))
        .catch((response) => {
            console.log(response.status);
            try{
            if (response.status == 404) {
                throw new Error("Oops! That animal is not in our database. Please try again.")
            }
        }catch (err) {
                alert(err.message);
                return;
            }
        });
    
        
}
 
    
    // function to prepare the template
export function renderListWithTemplate(
    templateElement,
    parentElement,
    list,
    animal = '',
    callback
    ) {
    parentElement.innerHTML = ''
    list.map(animal => {
      const node = templateElement.content.cloneNode(true)
      const childNode = callback(node, animal)
      parentElement.appendChild(childNode)
    })
}
  // load the template
export async function loadTemplate(path) {
    const html = await fetch(path).then(data => data.text())
    const template = document.createElement('template')
    template.innerHTML = html
    return template
}

export function prepareTemplate() {
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




export function renderAnimals(animal,parentNode) {
    const templateElement = document.querySelector('animal-card-template')
    renderListWithTemplate(
      templateElement,
      parentNode,
      animal,
      this.prepareTemplate
    )
  }

    


