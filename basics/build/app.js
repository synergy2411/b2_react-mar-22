"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { getFortune } from './utils/fortune';
const student_1 = require("./class/student");
let john = new student_1.Student("John", "Doe", 32);
console.log(john.getDetails());
console.log(john.getDailyFortune());
console.log(john.getMyLuckyNumber());
