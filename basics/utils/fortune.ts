
// Data Encapsulation
const LUCKY_NUMBER = Math.round(Math.random() * 100)

export const getFortune = () => "Today is your lucky day!"

// Data Abstraction
export const getLuckyNumber = () => {
    return LUCKY_NUMBER;
}