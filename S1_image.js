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
