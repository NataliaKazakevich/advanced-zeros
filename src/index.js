module.exports = function getZerosCount(number, base) {
  
  let inner = (number, divider) => {

    let sum;

    number === 0 ? sum = 0 : sum = Math.floor(number / divider) + inner(Math.floor(number / divider), divider);
    
    return sum;

  }

  let next = number => {

    number % 2 === 0 ? number++ : number += 2;
  
    return number;

  }
    
  let theMax = (numberA, numberB, powerA, powerB) => {

    if ( Math.floor(Math.pow(numberA, powerA) / Math.pow(numberB, powerB)) > Math.pow(numberB, powerB) ) {
      return [numberA, powerA];
    }
    else {
      return [numberB, powerB];
    }

  }

  let theDivider = (dividers, powers) => {

    if (dividers.length == 1) return [dividers[0], powers[0]];
    
    let max = theMax(dividers[0], dividers[1], powers[0], powers[1]); 

    for (i = 1; i < dividers.length - 1; i++) {
      max = theMax(max[0], dividers[i+1], max[1], powers[i+1]); 
    }

    return max;

  }
  
  let findingOfDividers = number => {

    let dividers = [], powers = [], divider = 2;

    do {
      if (number % divider === 0) {

        number = number / divider;
        
        if ( !dividers.includes(divider) ) {

          dividers.push(divider);
          powers[dividers.length - 1] = 0;

        }

        powers[dividers.length - 1]++;
        
      } 
      else {

         divider = next(divider);

      }
    } while (number != 1);
    
    return theDivider(dividers, powers);

  }
  
  let comp = findingOfDividers(base);

  return Math.floor(inner(number, comp[0]) / comp[1]);
  
}