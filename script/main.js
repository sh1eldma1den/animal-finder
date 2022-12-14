
document.getElementById('submitName').addEventListener('click', getAnimals);


export function getAnimals() {
    let animal = document.getElementById('searchName').value;
               
        const url = 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals/' + animal;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3ef67f7eeamsh8b4f075f34e3a7dp18e177jsn3a434a265872',
                'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
            }
        };
        fetch(url, options)
        .then((response) => {
            if (response.ok) {
                return response.json();
                }
        })
        .then(json=> renderAnimals(json))
        .catch ((response) => {
            console.log(response.status);
            try{
                if (response.status == 404) {
                    throw new Error("That word is not contained in my dictionary, please try again.")
                }
            }catch (err) {
                    alert(err.message);
                    return;
                }
        });
    }    

    function renderAnimals(animals) {
        const outputDiv = document.getElementById('animal-listing');
        animals.results.forEach((animal) => {
            let output = ""
	        output += `<li class="animal-card">
            <h3 class="card-name">${animals.animal.name}</h3>
            <p class="card-locations">Locations: ${animals.animal.locations}</p>
            <p class="card-prey">Prey: ${animals.animal.characteristics.prey}</p>
            <p class="card-behavior">Group Behavior: ${animals.animal.characteristics.group_behavior}</p>
            <p class="card-threat">Biggest Threat: ${animals.animal.characteristics.biggest_threat}</p>
            <p class="card-habitat">Habitat: ${animals.animal.characteristics.habitat}</p>
            <p class="card-diet">Diet: ${animals.animal.characteristics.diet}</p>
            <p class="card-lifestyle">Lifestyle: ${animals.animal.characteristics.lifestyle}</p>
            <p class="card-slogan">Fun fact: ${animals.animal.characteristics.slogan}</p>
            <button id="add-to-list">Add</button></li></div>`
            outputDiv.appendChild(output)
        });
    }

    


