// const square = function(x){
//     return x * x;
// };

// const squareArrow = (x) =>{
//     return x * x;
// }

// const squareArrow = (x) => x * x;

// console.log(square(3));

// console.log(squareArrow(8));

const getFirstName = function(y){
    if (y.split(" ")[0]){
        return y.split(" ")[0];
    }
}


// const getFirstNameArrow = (y) => {
//     if (y.split(" ")[0]){
//         return y.split(" ")[0];
//     }
// }

const getFirstNameArrow = (y) => y.split(" ")[0];

console.log(getFirstName('Shahrooz Jafari'));

console.log(getFirstNameArrow('Shahrooz Jafari'));

// const user = {
//     name : "Shahrooz", 
//     cities : ["Tehran", "Perth", "Los Angles",],
//     printPlacelived : function(){
//         this.cities.forEach((city) => {
//             console.log(this.name + ' lived in ' + city);
//         });
//     }
// }

const user = {
    name : "Shahrooz", 
    cities : ["Tehran", "Perth", "Los Angles",],
    printPlacelived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

// user.printPlacelived();
console.log(user.printPlacelived());

const multiplier = {
    numbers : [30, 40, 20],
    multipleby : 5,
    multiply() {
        return this.numbers.map((number) => number * this.multipleby);
    }
}

console.log(multiplier.multiply());