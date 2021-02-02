//добываем планеты 
const planetUrl = "https://swapi.dev/api/planets/?page=";
let allPlanetsArray = [];
let counterPage = 0;
const planetPagesAmount = 6;
let diameterColors=[];
let modifiedPlanets = [];


function doingStuffWithPlanets(){
    for (let i = 1; i <= planetPagesAmount; i++) {
        readingPages(planetUrl+i)
    }
}

function readingPages(url) {
    fetch(url).then(response => response.json()).then(answer => {
        getAllPlanets(answer);
    })
}

function getAllPlanets(answer){
    allPlanetsArray.push(...answer.results)
    counterPage++
    if (counterPage >= planetPagesAmount) {
        usePlanets()
    }
}


function random_color(anyPlanetArray){
    let range = anyPlanetArray.length;
    //console.log(range);

    for(i=1; i<=range;i++){
        let result = '';
        let color ='';
        result = function () { return Math.floor(Math.random()*256) };
        color ="rgb(" + result() + "," + result() + "," + result() + ")";
        //console.log(color)  
        diameterColors.push(color); 
    }
    return diameterColors;
}




function chartRendering(idBlock,names,diameters,chartColors,text,type){
    new Chart(document.getElementById(idBlock), {
        //type: 'horizontalBar',
        //type:'bar',
        type:type,
        data: {
          labels: names,
          datasets: [
            {
              label: "chart",
              backgroundColor: chartColors,
              data: diameters
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: text
          }
        }
    });
}

function usePlanets() {
    //тут делаем что  либо с обьектом всех планет в текущем потоке
    //удаляем планету unknown
    residentialPlanets = allPlanetsArray.filter(planet => planet.name != "unknown");
    
    // let namesArray = residentialPlanets.map(planet => planet.name);
    let diametrPlanetsArray = residentialPlanets.filter(planet => planet.diameter != "unknown" && planet.diameter != 0);
    let diameterNames = diametrPlanetsArray.map(planet => planet.name)
    let diametrsValue = diametrPlanetsArray.map(planet => planet.diameter)

    //график диаметров и массив цветов для диаметров
    let chartColors = random_color(diameterNames);
    let diameterText = 'Diameter of each known planet in Galactic Empire (in kilometers)';
    chartRendering("diameter",diameterNames,diametrsValue,chartColors,diameterText,'bar');

    //график популяции и массив цветов для популяции
    let populationPlanetsArray = residentialPlanets.filter(planet => planet.population != 0 && planet.population != "unknown" && planet.name != "Coruscant" && planet.name != "Skako" && planet.name != "Geonosis");
    let populationNames = populationPlanetsArray.map(planet => planet.name)
    let populationValue = populationPlanetsArray.map(planet => planet.population)
    let populationColors = random_color(populationNames);
    let populationText = 'Population of planets';
    chartRendering("population",populationNames,populationValue,populationColors,populationText,'horizontalBar');
    
    //график roration_period и массив цветов для популяции
    let rotationPlanetsArray = residentialPlanets.filter(planet => planet.population != 0 && planet.rotation_period != "unknown");
    let rotationNames = rotationPlanetsArray.map(planet => planet.name)
    let rotationValue = rotationPlanetsArray.map(planet => planet.rotation_period)
    let rotationColors = random_color(rotationNames);
    let rotationText = 'Rotation periods of planets';
    chartRendering("rotation",rotationNames,rotationValue,rotationColors,rotationText,'horizontalBar');

    console.log(rotationPlanetsArray);
    
}











function initAll(){
   doingStuffWithPlanets();

}

window.onload = initAll()