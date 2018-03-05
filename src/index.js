module.exports = function getZerosCount(number, base) {
  function getZerosCount(number, simpleNumber) {
    let zeros = 0;
    for (let i = 1; Math.floor(number / Math.pow(simpleNumber, i)) !== 0; i++) {
      zeros += Math.floor(number / Math.pow(simpleNumber, i));
    }
    return zeros;
  }

  function allDelit(base) {
    let simpleNumber = 2;
    let arr = [];
    while (base !== 1) {
      if (base % simpleNumber === 0) {
        base /= simpleNumber;
        arr.push(simpleNumber);
      }
      if (base % simpleNumber !== 0) {
        simpleNumber++;
      }
    }
    return arr[arr.length - 1];
  }

  let maxSimple = allDelit(base);
  return getZerosCount(number, maxSimple);
}
