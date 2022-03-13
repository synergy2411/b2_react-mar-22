"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLuckyNumber = exports.getFortune = void 0;
// Data Encapsulation
const LUCKY_NUMBER = Math.round(Math.random() * 100);
const getFortune = () => "Today is your lucky day!";
exports.getFortune = getFortune;
// Data Abstraction
const getLuckyNumber = () => {
    return LUCKY_NUMBER;
};
exports.getLuckyNumber = getLuckyNumber;
