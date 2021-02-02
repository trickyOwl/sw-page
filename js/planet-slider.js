let searchUrl = 'https://swapi.dev/api/planets/?search=';

const sliderPlanets = [
    {
        "name":"Geonosis",
        "img":"Geonosis.jpg",
        "diameter":"11 370 км",
        "atmosphere":"breathable for human",
        "population":"100 000 000 000",
        "terrain": "rock, desert, mountain, barren", 
        "water":"exists",
        "export":"Droids, weapons",
        "picCover":"geonosis-cover.png",
        "desc":"The surface of the planet is rather inexpressive except for spiers,stalactites and other rock formations. Thus, the indigenous people,the Geonosians, had to find ways to survive in the harsh climate. They have adapted to dwell in hive towers, the main part of which is located under the rocky surface of the planet. There they built droid factories. Geonosis has small construction yards. Using the planet's rich resources, the rebels began to secretly manufacture their ships"
    },
    {
        "name":"Coruscant",
        "img":"Coruscant.jpg",
        "diameter":"12 240 км",
        "atmosphere":"breathable for human",
        "population":"1 000 000 000 000",
        "terrain": "mountains, plains", 
        "water":"exists",
        "export":"culture",
        "picCover":"Coruscant-cover.jpg",
        "desc":"A glittering planet located in the heart of the Galaxy. Coruscant has been the political center of the galaxy for millennia, where the most important decisions affecting the lives of trillions have been made. Since the dawn of interstellar history, a single word of Coruscant has hid the undeniable seat of power, strength, legitimacy, history and culture"
    },
    {
        "name":"Mustafar",
        "img":"Mustafar.png",
        "diameter":"4 200 км",
        "atmosphere":"breathable for human",
        "population":"20 000",
        "terrain": "volcanic plains, mountains, rivers of lava, lakes of lava", 
        "water":"no",
        "export":"minerals",
        "picCover":"mustafar-cover.jpg",
        "desc":"Mustafar was a volcanic planet where lava was mined as a valuable resource. It was also the last capital of the Confederation of Independent Systems. It was around this time that it became a historically important site due to the duel on Mustafar between Anakin Skywalker and Obi-Wan Kenobi, an event that changed the fate of the galaxy"
    },
    {
        "name":"Dagobah",
        "img":"Dagobah.png",
        "diameter":"8 900 км",
        "atmosphere":"breathable for human",
        "population":"unknown",
        "terrain": "swamps, jungle", 
        "water":"exists",
        "export":"unknown",
        "picCover":"dagobah-cover.jpg",
        "desc":"Dagoba is a harsh, humid planet, almost entirely covered in swamps, interspersed with sweltering forests. There are very few open sources of water on the planet: water is provided by the main environment of the planet - swamps, although a significant area is covered with silt. Dagoba is home to many creatures such as swamp flyers, dragon snakes, naji, slugs, wine snakes and swamp slugs. Examples of flora include grunting trees and meat flowers"
    },
    {
        "name":"Kamino",
        "img":"Kamino.jpg",
        "diameter":"19 270 км",
        "atmosphere":"breathable for human",
        "population":"1 000 000 000",
        "terrain": "ocean (saturated hydrosphere)", 
        "water":"exists",
        "export":"clones, technologies, weapons and military equipment, fish",
        "picCover":"kamino-cover.png",
        "desc":"Kamino is a waterworld where the clone army was produced for the Galactic Republic, which later became the Imperial Assault Corps, the Kaminoan Defense Fleet. The planet is inhabited by Kaminoans - tall, elegant creatures who prefer a secluded lifestyle. They are known as cloning specialists. Kamino is located south of the Rishi Labyrinth. Power on the planet is concentrated in the hands of the Ruling Council, headed by Prime Minister Lama Su"
    },
    {
        "name":"Kashyyyk",
        "img":"Kashyyyk.png",
        "diameter":"12 765 км",
        "atmosphere":"breathable for human",
        "population":"45 000 000 000",
        "terrain": "mountains, forests, ocean, rivers", 
        "water":"exists",
        "export":"technology, natural resources",
        "picCover":"Kashyyyk-cover.png",
        "desc":"Kashyyyk is a Wookiee planet covered with dense forests of Wroshir trees. It was part of the Galactic Republic and later the New Republic, in the interim ruled by the Galactic Empire. The absence of an inclination of the planet's axis and a perfectly round orbit determine the absence of a change of seasons in Kashyyyk. The planet has a metal core, rocky mantle, and silicon crust. The planet has four continents, accounting for 40% of its surface, mostly overgrown with dense forests"
    },
    {
        "name":"Chandrila",
        "img":"Chandrila.png",
        "diameter":"13 500 км",
        "atmosphere":"breathable for human",
        "population":"1 200 000 000",
        "terrain": "plains, forests", 
        "water":"exists",
        "export":"high technologies",
        "picCover":"Chandrila-cover.png",
        "desc":"The two thriving agricultural continents are covered in grasses. A peaceful planet, it remained with a temperate climate all year round, mild winters and warm summers. Dry seasons alternated with light rainfall resulting in no drought. The inhabitants of Chandrila lived in harmony with nature in order to maintain balance in the planet's ecosystem. Chandrila also had huge crystal canyons. Among the attractions of the planet are the attractive Gladean parks, nature reserves"
    },
    {
        "name":"Naboo",
        "img":"Naboo.png",
        "diameter":"12 120 км",
        "atmosphere":"breathable for human",
        "population":"4 500 000 000",
        "terrain": "grassy hills, swamps, forests, mountains", 
        "water":"exists",
        "export":"wine, plasma, minerals",
        "picCover":"Naboo-cover.png",
        "desc":"For a long time, the Naboo phenomenon remained a mystery to astrophysicists: due to the absence of this type of molten core typical for planets, the voids in the center of the planet contained the richest reserves of plasma, which made the planet unique and one of a kind in the entire Galaxy. The use of plasma in abundant quantities is the basis of the energy supply for both land and underwater inhabitants of the planet"
    },
    {
        "name":"Mon Cala",
        "img":"MonCala.png",
        "diameter":"11 030 км",
        "atmosphere":"breathable for human",
        "population":"27 000 000 000",
        "terrain": "ocean, islands", 
        "water":"exists",
        "export":"fish, star ships, technologies",
        "picCover":"MonCala-cover.png",
        "desc":"An aquatic planet Mon Cala appeared from space as a bluish-white ball. Cities on the planet were built on the surface of the water. Two intelligent races at once - the Mon Calamari and the Quarren lived on Dhaka, because of which they often had disagreements as a result. The Mon Calamari, with more advanced technology, prevailed. The Quarrens suffered considerable losses, as a result of which several of their generations were brought up in the spirit of the Kalamar traditions"
    },
    {
        "name":"Felucia",
        "img":"Felucia.jpg",
        "diameter":"9 100 км",
        "atmosphere":"breathable for human",
        "population":"8 500 000",
        "terrain": "jungles", 
        "water":"exists",
        "export":"slaves, biotoxin, medical drugs, spice",
        "picCover":"felucia-cover.png",
        "desc":"Felucia was a world teeming with fungal life forms and enormous wondrous plants. Most of the planet was a swampy, humid area that grew into wild fantastic forests. Numerous living and plant forms on Felucia were partially or completely transparent, and sunlight passing through them made them look like illuminated mosaics. Under the foggy canopies of huge jug plants, this feature gave the planet's already specific landscape a surreal look"
    },
]
let str = '';
for(planet of sliderPlanets){
    str += `
    <div class="col-4 planet">
        <img src="img/${planet.img}" alt="${planet.img}">
        <h2 class="mb-3 text-center mt-2 font-italic text-uppercase">${planet.name} <i class="text-primary fas fa-globe-europe"></i></h2>
        <p class="pl-4 pr-4">Diameter: ${planet.diameter}</p>
        <p class="pl-4 pr-4">Atmosphere: ${planet.atmosphere}</p>
        <p class="pl-4 pr-4">Population: ${planet.population}</p>
        <p class="pl-4 pr-4">Terrain: ${planet.terrain}</p>
        <p class="pl-4 pr-4">Water: ${planet.water}</p>
        <p class="pl-4 pr-4">Main export: ${planet.export}</p>
        <div class="planet__cover">
            <div>
                <p class="pl-4 pr-4 mt-4">
                    ${planet.desc}
                </p>
            </div>        
            <div><img src="img/${planet.picCover}" alt=""></div>
        </div>   
    </div>   
    `;
}
document.getElementById('popular').innerHTML = str;


//модальное окно и его функции
document.onkeyup = function (e) {
	e = e || window.event;
	if (e.keyCode === 13) {
		open()
	}
	// Отменяем действие браузера
	return false;
}

let popup = document.getElementById('mypopup');
let popupToggle = document.getElementById('findBtn')
let popupClose = document.querySelector('.close');
let inputData = document.getElementById('searchInput');



function renderAnswer(url){
    debugger
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.results[0]===undefined){
                popup.style.display = "block";
                document.querySelector('#header').innerText = 'Error';
                document.querySelector('.popup-header').style.background = "red";
                document.querySelector('.popup-footer').style.background = "red";
                document.querySelector('.popup-body').innerText = "Unfortunately such planet does not exist in Republic database";
                return;
            }else{
                //console.log(data.results[0]);
                popup.style.display = "block";
                document.querySelector('.popup-header').style.background = "grey";
                document.querySelector('.popup-footer').style.background = "grey";
                document.querySelector('#header').innerText = data.results[0].name;
                document.querySelector('.popup-body').innerHTML = `
                    <p><span><u>Platen climate</u></span>: ${data.results[0].climate};</p>
                    <p><span><u>Diameter</u></span>: ${data.results[0].diameter} km;</p>
                    <p><span><u>Gravity</u></span> <i title="A number denoting the gravity of this planet, where '1' is normal or 1 standard G. '2' is twice or 2 standard Gs. '0.5' is half or 0.5 standard Gs." class="text-danger far fa-question-circle"></i>: ${data.results[0].gravity};</p>
                    <p><span><u>Orbital period</u></span> <i title="The number of standard days it takes for this planet to complete a single orbit of its local star." class="text-danger far fa-question-circle"></i>: ${data.results[0].orbital_period};</p>
                    <p><span><u>Population</u></span>: ${data.results[0].population} people;</p>
                    <p><span><u>Rotation period</u></span> <i title="The number of standard hours it takes for this planet to complete a single rotation on its axis." class="text-danger far fa-question-circle"></i>: ${data.results[0].rotation_period};</p>
                    <p><span><u>Surface water</u></span> <i title="The percentage of the planet surface that is naturally occurring water or bodies of water." class="text-danger far fa-question-circle"></i>: ${data.results[0].surface_water};</p>
                    <p><span><u>Terrain of the planet</u></span>: ${data.results[0].terrain};</p>
                `;
            }   
        })
}

function open(){
    // popup.style.display = "block";
    if(inputData.value.length == 0){
        popup.style.display = "block";
        document.querySelector('#header').innerText = 'Error';
        document.querySelector('.popup-header').style.background = "red";
        document.querySelector('.popup-footer').style.background = "red";
        document.querySelector('.popup-body').innerText = "You have an empty input!";
        return;
    }else{
        searchUrl += inputData.value;    
    }
    //searchUrl += inputData.value;
    
    renderAnswer(searchUrl);
    searchUrl = 'https://swapi.dev/api/planets/?search=';
    document.querySelector('#header').innerText = 'Error';
}

function close(){
    popup.style.display = "none";
    inputData.value = '';
}

popupToggle.addEventListener('click', open)
popupClose.addEventListener('click', close)