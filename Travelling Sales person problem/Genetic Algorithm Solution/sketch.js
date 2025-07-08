//Genetic algorithm code
var cities = [];
var totalCities = 0;

var popSize = 500;
var population = [];
var fitness = [];
var order = [];

var recordDistance = Infinity;
var bestEver;
var currentBest;

function setup() {
  var canvas = createCanvas(1200, 900);
  // canvas.mousePressed(dostuff);
  canvas.parent('sketch-holder');
  noLoop();
}

function draw() {
  textSize(32);
  text(1)
  background(0);
  calculateFitness();
  normalizeFitness();
  nextGeneration();

  stroke(255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (var i = 0; i < bestEver.length; i++) {
    var n = bestEver[i];
    vertex(cities[n].x, cities[n].y);
    ellipse(cities[n].x, cities[n].y, 16, 16);
  }
  endShape();

  translate(0, height / 2);
  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (var i = 0; i < currentBest.length; i++) {
    var n = currentBest[i];
    vertex(cities[n].x, cities[n].y);
    ellipse(cities[n].x, cities[n].y, 16, 16);
  }
  endShape();
  
  // var d = calcDistance(cities, order);
  // recordDistance = d;
  // bestEver = order.slice();
  // text(recordDistance)
}


function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points, order) {
  var sum = 0;
  for (var i = 0; i < order.length - 1; i++) {
    var cityAIndex = order[i];
    var cityA = points[cityAIndex];
    var cityBIndex = order[i + 1];
    var cityB = points[cityBIndex];
    var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
    sum += d;
  }
  return sum;
}


function startloop() {
  totalCities = document.querySelector(".form-control").value;
  order = [];
  recordDistance = Infinity;
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(random(width), random(height / 2));
    cities[i] = v;
    order[i] = i;
  }
  for (var i = 0; i < popSize; i++) {
    population[i] = shuffle(order);
  }
  loop();
}

// function dostuff() {
//   recordDistance = Infinity;
//   var v = createVector(mouseX, mouseY);
//   cities[totalCities] = v;
//   order[totalCities] = totalCities;
//   totalCities++;
//   for (var i = 0; i < popSize; i++) {
//     population[i] = shuffle(order);
//   }
//   loop();
// }