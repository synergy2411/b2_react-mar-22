import { getFortune, getLuckyNumber } from '../utils/fortune';

export class Student {
    // private firstName : string;
    // private lastName : string;
    // private age : number;
    // constructor(firstName : string, lastName : string, age : number){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    // }

    constructor(
        private firstName : string, 
        private lastName : string, 
        private age : number
        ){}

    getDetails() : string {
        return `${this.firstName} ${this.lastName} is ${this.age} years old!`
    }
    getDailyFortune(){
        return getFortune();
    }
    getMyLuckyNumber(){
        return getLuckyNumber();
    }
}