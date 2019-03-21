module.exports = function getZerosCount(number, base) {
  function getPrimeFactors (num) {
    let primeFactors = [];
    while (num % 2 === 0) {
      primeFactors.push(2);
      num = num / 2;
    }
    let sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i++) {
      while (num % i === 0) {
        primeFactors.push(i);
        num = num / i;
      }
    }
    if (num > 2) {
      primeFactors.push(num);
    }
    return primeFactors;
  }
  let prime = Math.max(...getPrimeFactors(base));
  let count = 0;
  for (let k = prime; number / k >= 1; k *= prime) {
    count = count + Math.floor(number / k);
  }
  return count;
}