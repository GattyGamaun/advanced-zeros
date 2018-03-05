module.exports = function getZerosCount(number, base) {

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
  let nuv = arr[arr.length - 1];
  let zeros = 0;
  for (let i = 1; Math.floor(number / Math.pow(nuv, i)) !== 0; i++) {
    zeros += Math.floor(number / Math.pow(nuv, i));
  }
  if(nuv === arr[arr.length - 2]){
    return Math.floor(zeros/2);
  }
  return zeros;
}
