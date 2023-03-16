

document.getElementById('submitName').addEventListener('click', getAnimals);


export async function getAnimals() {
    let animal = document.getElementById('searchName').value;
    const url = 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=' + animal;           
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3ef67f7eeamsh8b4f075f34e3a7dp18e177jsn3a434a265872',
            'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
      };
        const response = await fetch(url, options);
        let data = await response.json();
        console.log(data);
        if(response){
        renderAnimals(data);
    }
}

function renderAnimals(data) {
        let card = document.getElementById('animal-listing');
        let templateA = ''
        data.forEach (a => {    
        templateA += `<div class="animal-card">
            <h3 class="card-header">Name: ${a.name}</h3>
            <p class="locations">Locations: ${a.locations}</p>
            <p>Prey: ${a.characteristics.prey}</p>
            <p>Group Behavior: ${a.characteristics.group_behavior}</p>
            <p>Biggest Threat: ${a.characteristics.biggest_threat}</p>
            <p>Habitat: ${a.characteristics.habitat}</p>
            <p>Diet: ${a.characteristics.diet}</p>
            <p>Lifestyle: ${a.characteristics.lifestyle}</p>
            <p><em>${a.characteristics.slogan}</em></p>
            </div>`;
        })
            card.innerHTML = templateA;

        }
