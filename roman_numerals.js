/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

When a symbol appears after a larger (or equal) symbol it is added
But if the symbol appears before a larger symbol it is subtracted
*/

const romanNumeralValues = [
    {1: 'I', 5: 'V', 9: 'X'},
    {1: 'X', 5: 'L', 9: 'C'},
    {1: 'C', 5: 'D', 9: 'M'},
    {1: 'M'}
]

const romanNumeralRules = {
    0: "",
    1: "1",
    2: "11",
    3: "111",
    4: "15",
    5: "5",
    6: "51",
    7: "511",
    8: "5111",
    9: "19"
}

//29 -> XXIX -> 2, 
// 1 -> I, 3 -> III, 4 -> IV, 5 -> V, 10 -> X, 20 -> XX, 19 -> XIX, 99 -> XCIX (10 before 100, 1 before 9)

function convertToRoman(num) {
    if(num < 1 || num > 3999 || typeof num !== "number" || Math.floor(num) !== num){
        return undefined;
    } else {
        const digits = String(num).split("");
        const asCodes = digits.map((digit) => romanNumeralRules[digit]);
        const asNumerals = asCodes.map( (digit, index, array) => digit.replace(/\d/g, (match) => romanNumeralValues[array.length-1-index][match]) );
        return asNumerals.join("");
    }
}
   
console.log(convertToRoman(36));