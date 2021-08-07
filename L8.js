//Seasonal B08 changes using RGB
//VERSION=3

function setup() {
  return {
    input: [{
      bands: ["B08"]
    }],
    output: { bands: 3 },
    mosaicking: "ORBIT"
  }
}
//Return three dates in RGB channels to compare changes in color
function evaluatePixel(samples,scenes) {  
  
  let gain = 2.2
  let gamma = 0.4
  return [gain * samples[2].B08 - gamma,  //red: 2021-01-28
          gain * samples[1].B08 - gamma,  //green: 2021-04-28
          gain * samples[0].B08 - gamma]; //blue: 2021-07-27
}

//Limit search to only particular 3 dates
function preProcessScenes (collections) {
    var allowedDates = ["2021-01-28", "2021-04-28", "2021-07-27"]; //Allowed dates
    collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) {
        var orbitDateFrom = orbit.dateFrom.split("T")[0];
        return allowedDates.includes(orbitDateFrom);
    })
    return collections
}
