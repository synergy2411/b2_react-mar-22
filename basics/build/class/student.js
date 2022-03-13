"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const fortune_1 = require("../utils/fortune");
const add = (n1, n2) => n1 + n2;
exports.add = add;
class Student {
    // private firstName : string;
    // private lastName : string;
    // private age : number;
    // constructor(firstName : string, lastName : string, age : number){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    // }
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getDetails() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old!`;
    }
    getDailyFortune() {
        return (0, fortune_1.getFortune)();
    }
    getMyLuckyNumber() {
        return (0, fortune_1.getLuckyNumber)();
    }
}
exports.default = Student;
