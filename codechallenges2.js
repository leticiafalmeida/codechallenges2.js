//CODE CHALLENGE #1

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins!');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// //checkWinner: É uma função autônoma e não se importa de onde vêm os valores. Podemos apenas inserir alguns números aleatórios:
// checkWinner(576, 111);

// //como usamos o let lá em cima podemos mudar os valores dessas variáveis aqui embaixo:
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

//CODE CHALLENGE #2

// const billValue = Number(prompt('What is the bill value? '));

// function CalcTip(billValue) {
//     return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// }

// console.log(CalcTip(125));
// console.log(CalcTip(555));
// console.log(CalcTip(44));


// const bills = [125, 555, 44];
// const tips = [CalcTip(bills[0]), CalcTip(bills[1]), CalcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(totals);

//CODE CHALLENGE #3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than John's (${john.bmi.toFixed(2)})`)
// } else if (john.calcBMI() > mark.calcBMI()) {
//     console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than Mark's (${mark.bmi.toFixed(2)})`)
// };

//CODE CHALLENGE #4: 

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// function CalcTip(billValue) {
//     return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// }

// for (let i = 0; i < bills.length; i++) {
//     const perc = CalcTip(bills[i])
//     tips.push(perc);
//     totals.push(perc + bills[i])
// };

// const calcAverage = function (arr) {
//     let sum = 0

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         //ou sum = sum + arr[i]
//     }
//     return sum / arr.length
// }
// console.log(calcAverage(tips));