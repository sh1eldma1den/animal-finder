
document.getElementById('submitName').addEventListener('click', getAnimals);


export function getAnimals() {
    let animal = document.getElementById('searchName').value;
               
        const url = 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals/' + animal;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3ef67f7eeamsh8b4f075f34e3a7dp18e177jsn3a434a265872',
                'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: '',
                locations:'',
                prey:'',
                group_behavior:'',
                biggest_threat:'',
                habitat:'',
                diet:'',
                lifestyle:'',
                slogan:''
            })
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
        });
    }    

    function renderAnimals(animals) {
        const card = document.getElementById('animal-listing');
        console.log(animals.results)
        animals.results.forEach((animal) => {
            let row = '';
	        row += `<li class="animal-card">
            <h3>${animals.animal.name}</h3>
            <p>Locations: ${animals.animal.locations}</p>
            <p>Prey: ${animals.animal.characteristics.prey}</p>
            <p>Group Behavior: ${animals.animal.characteristics.group_behavior}</p>
            <p>Biggest Threat: ${animals.animal.characteristics.biggest_threat}</p>
            <p>Habitat: ${animals.animal.characteristics.habitat}</p>
            <p>Diet: ${animals.animal.characteristics.diet}</p>
            <p>Lifestyle: ${animals.animal.characteristics.lifestyle}</p>
            <p>Fun fact: ${animals.animal.characteristics.slogan}</p>`
            row += '</li>'
            card.innerHTML = row;

        });
    }

    


