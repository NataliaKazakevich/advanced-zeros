module.exports = function getZerosCount(number, base) {

  let power = 0;
  let zeros = 0;

  let maxPrimeNumber =  (base) => {
    let numberMultiplier = 2;

    while (true) {
      if (base % numberMultiplier === 0) {
        base = base/numberMultiplier;
        power++;
      } else {
        numberMultiplier++;
        power = 0;
      }

      if (base === 1) return numberMultiplier;
    }
  };

  let divider = maxPrimeNumber(base);

  while (number > 0) {
    number = Math.floor( number / divider);
    zeros += number;
  }
  zeros = Math.floor(zeros/degreeOf);

  return zeros;
};