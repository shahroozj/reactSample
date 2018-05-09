
class Person{
    constructor(name='Anonimous', age=0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        //return "Hi, I am " + this.name + "!";
        return `Hi, I am ${ this.name } !`;
    }

    getDescription(){
        return `My name is ${this.name} and I am ${this.age} year(s) old!`
    }
}

class Studnet extends Person{
    constructor (name , age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` The major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor (name, age, location){
        super(name, age);
        this.location = location;
    }

    hasLocation(){
        return !!this.location;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if (this.hasLocation()){
            greeting += ` and I am from ${this.location}`
        }
        return greeting;
    }
}

const me = new Studnet('Shahrooz', 40, 'Computer Science');
console.log(me.getDescription());

const other = new Studnet();
console.log(other.getDescription());


const you = new Traveler('Graham', 52, 'Perth');
console.log(you.getGreeting());

const otheryou = new Traveler();
console.log(otheryou.getGreeting());

