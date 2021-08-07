//VERSION=3
function setup() {
  return {
    input: ["VV"],
    output: { bands: 1 }
  };
}

function evaluatePixel(sample) {
  return [sample.VV*1.5 ];
}


//Limit search to one date
function preProcessScenes (collections) {
    var allowedDates = ["2021-07-14"]; //Allowed dates
    collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) {
        var orbitDateFrom = orbit.dateFrom.split("T")[0];
        return allowedDates.includes(orbitDateFrom);
    })
    return collections
}
