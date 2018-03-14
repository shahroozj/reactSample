
class Person{
    constructor(name='Anonimous', age=0){
        this.name = name;
        this.age = age;
    }

    getGretting(){
        //return "Hi, I am " + this.name + "!";
        return `Hi, I am ${ this.name } !`;
    }

    getDescription(){
        return `My name is ${this.name} and I am ${this.age} year(s) old!`
    }
}

const me = new Person('Shahrooz', 40);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());