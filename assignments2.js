//LECTURE: FUNCTIONS:

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const descBrazil = describeCountry('Brazil', 220, 'Brasilia');
// console.log(descBrazil);
// const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
// console.log(descPortugal);
// const descFinland = describeCountry('Finland', 6, 'Helsinki');
// console.log(descFinland);


//LECTURE: FUNCTIONS DECLARATIONS VS. EXPRESSIONS:

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100
// }

// const brazilPopulation = percentageOfWorld1(220);
// const portugalPopulation = percentageOfWorld1(10);
// const germanyPopulation = percentageOfWorld1(83);
// console.log(brazilPopulation, portugalPopulation, germanyPopulation);

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100
// }

// const brazilPopulation = percentageOfWorld2(220);
// const portugalPopulation = percentageOfWorld2(10);
// const germanyPopulation = percentageOfWorld2(83);
// console.log(brazilPopulation, portugalPopulation, germanyPopulation);

//LECTURE: ARROW FUNCTIONS:

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const brazilPopulation = percentageOfWorld3(220);
// const portugalPopulation = percentageOfWorld3(10);
// const germanyPopulation = percentageOfWorld3(83);
// console.log(brazilPopulation, portugalPopulation, germanyPopulation);

//LECTURE: FUNCTIONS CALLING OTHER FUNCTIONS:

// function describePopulation(country, population) {
//     const percentage = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${percentage} % of the world`;
// }

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100
// }

// console.log(describePopulation('Brazil', 220));
// console.log(describePopulation('Portugal', 10));
// console.log(describePopulation('Germany', 83));

//LECTURE: INTRODUCTION TO ARRAYS:

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100
// }


// const populations = [220, 10, 83, 332]
// console.log(populations.lenght === 4);

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[0])
// ]

// console.log(percentages);

//LECTURE: BASIC ARRAYS OPERATIONS (METHODS):

// const neighbours = ['Chile', 'Colombia', 'Uruguai', 'Venezuela'];

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop('Utopia');
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//     console.log('Probably not a central European country :)')
// }

// neighbours[1] = 'Paraguai';

// console.log(neighbours);

//LECTURE: INTROCDUTION TO OBJECTS:

// const myCountry = {
//     country: 'Brazil',
//     capital: 'Brasilia',
//     language: 'Portugueses',
//     population: '220',
//     neighbours: ['Chile', 'Uruguay', 'Venezuela', 'Paraguay']
// };


//LECTURE: DOT vs. BRACKETS NOTATION:

// const myCountry = {
//     country: 'Brazil',
//     capital: 'Brasilia',
//     language: 'Portuguese',
//     population: 220,
//     neighbours: ['Chile', 'Uruguay', 'Venezuela', 'Paraguay']
// };

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);

//LECTURE: OBJECTS METHODS:

// const myCountry = {
//     country: 'Brazil',
//     capital: 'Brasilia',
//     language: 'Portuguese',
//     population: 220,
//     neighbours: ['Chile', 'Uruguay', 'Venezuela', 'Paraguay'],

//     describe: function () {
//         console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
//     },

//     checkIsland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//         return this.isIsland;
//     }
// };

// console.log(myCountry.describe())
// console.log(myCountry.checkIsland())

//LECTURE: INTERACTION: THE FOR LOOP:

// for (let i = 1; i < 51; i++) {
//     console.log(`Voter number ${i} is currently voting`)
// }

//LECTURE: LOOPING ARRAYS, BREAKING AND CONTINUING:

// function percentageOfWorld1(populations) {
//     return (populations / 7900) * 100
// }


// const populations = [220, 10, 83, 332]
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentages2.push(perc);
// }

// console.log(percentages2);

//LECTURE: LOOPING BACKWARDS AND LOOPS IN LOOPS:

// const listOfneighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]


// for (let i = 0; i < listOfneighbours.length; i++) {
//     for (let neighbouring = 0; neighbouring < listOfneighbours[i].length; neighbouring++) {
//         console.log(`Neighbour: ${listOfneighbours[i][neighbouring]}`)
//     }
// }

//LECTURE: THE WHILE LOOP:

// function percentageOfWorld1(populations) {
//     return (populations / 7900) * 100
// }

// const populations = [220, 10, 83, 332]
// const percentages3 = [];

// // for (let i = 0; i < populations.length; i++) {
// //     const perc = percentageOfWorld1(populations[i]);
// //     percentages2.push(perc);
// // }

// let i = 0
// while (i < populations.length) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentages3.push(perc);
//     i++
// }

// console.log(percentages3);