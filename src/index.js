module.exports = function toReadable(number) {
  let str = '';
  const numberLessTwenty = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  if (number < 20) {
    str = numberLessTwenty[number];
  }

  const numberTwentyToNinety = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  if (number > 19 && number < 100) {
    if (number % 10 === 0) {
      for (let i = 0; i < +Object.keys(numberTwentyToNinety).length; i += 1) {
        if (+Object.keys(numberTwentyToNinety)[i] === number) {
          str = numberTwentyToNinety[number];
        }
      }
    } else {
      const remainder = number % 10;
      const checkNumber = number - remainder;
      str = `${numberTwentyToNinety[checkNumber]} ${numberLessTwenty[remainder]}`;
    }
  }

  if (number >= 100) {
    const hungred = Math.floor(number / 100);
    const k = number - hungred * 100;

    if (number % 100 === 0) {
      str = `${numberLessTwenty[hungred]} hundred`;
    }

    if (k > 19 && k < 100) {
      if (k % 10 === 0) {
        for (let i = 0; i < +Object.keys(numberTwentyToNinety).length; i += 1) {
          if (+Object.keys(numberTwentyToNinety)[i] === k) {
            str = `${numberLessTwenty[hungred]} hundred ${numberTwentyToNinety[k]}`;
          }
        }
      } else {
        const remainder = k % 10;
        const checkNumber = k - remainder;
        str = `${numberLessTwenty[hungred]} hundred ${numberTwentyToNinety[checkNumber]} ${numberLessTwenty[remainder]}`;
      }
    }
    if (k < 20) {
      str = `${numberLessTwenty[hungred]} hundred ${numberLessTwenty[k]}`;
    }
  }
  return str;
};
