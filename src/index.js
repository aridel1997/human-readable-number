module.exports = function toReadable(number) {
    let number1_19 = { 0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen" };

    if (number < 20) {
        return (number1_19[number]);
    }

    let number20_90 = { 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety" };
    if (number > 19 && number < 100) {
        if (number % 10 === 0) {
            for (let i = 0; i < +Object.keys(number20_90).length; i++) {
                if (+Object.keys(number20_90)[i] == number) {
                    return (number20_90[number]);
                }
            }

        }
        else {
            let remainder = number % 10;
            let checkNumber = number - remainder;
            return (`${number20_90[checkNumber]} ${number1_19[remainder]}`)

        }

    }

    if (number >= 100) {

        let hungred = Math.floor(number / 100);
        let k = number - hungred * 100;

        if (number % 100 == 0) {
            return (`${number1_19[hungred]} hundred`)
        }

        if (k > 19 && k < 100) {
            if (k % 10 === 0) {
                for (let i = 0; i < +Object.keys(number20_90).length; i++) {
                    if (+Object.keys(number20_90)[i] == k) {
                        return (`${number1_19[hungred]} hundred ${number20_90[k]}`);
                    }
                }

            }
            else {
                let remainder = k % 10;
                let checkNumber = k - remainder;
                return (`${number1_19[hungred]} hundred ${number20_90[checkNumber]} ${number1_19[remainder]}`)

            }
        }
        if (k < 20) {
            return (`${number1_19[hungred]} hundred ${number1_19[k]}`);
        }

    }

}
