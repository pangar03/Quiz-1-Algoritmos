export const getMostPopulated = (cities) => {
    let mostPopulationIndex = 0;
    let mostPopulationValue = 0;
    
    for(let i = 0; i < cities.length; i++){
        if(cities[i].population > mostPopulationValue){
            mostPopulationIndex = i;
            mostPopulationValue = cities[i].population; 
        }
    }

    return cities[mostPopulationIndex];
};