import {createClient} from 'pexels';

document.getElementById('submitImg').addEventListener('click', getImage);


export async function getImage() {
    const client = createClient('563492ad6f9170000100000116b3a65214e64e52b53884c2e8a74dfb');        
    const query = document.getElementById('searchImg').value;
    client.photos.search({ query, per_page: 1 }).then(photos => { ... });
        let data = await response.json();
        console.log(data);
        if(response){
        renderImage(data);

    }
}

function renderImage(data) {
        let card = document.getElementById('image-listing');
        let templateA = ''
        data.forEach (a => {    
        templateA += `<li class="animal-card">
            <h3 class="card-header">Name: ${a.name}</h3>
            <p>Locations: ${a.locations}</p>
            <p>Prey: ${a.characteristics.prey}</p>
            <p>Group Behavior: ${a.characteristics.group_behavior}</p>
            <p>Biggest Threat: ${a.characteristics.biggest_threat}</p>
            <p>Habitat: ${a.characteristics.habitat}</p>
            <p>Diet: ${a.characteristics.diet}</p>
            <p>Lifestyle: ${a.characteristics.lifestyle}</p>
            <p><em>${a.characteristics.slogan}</em></p>
            </li>`;
        })
            card.innerHTML = templateA;

        }
