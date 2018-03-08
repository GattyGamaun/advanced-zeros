module.exports = function getZerosCount(number, base) {

  let simpleNumber = 2;
  let arr = [];
  let num2 = 0; 
  let num3 = 0;
  let num = 0;
  while (base !== 1) {
    if (base % simpleNumber === 0) {
      base /= simpleNumber;
      arr.unshift(simpleNumber);
    }
    if (base % simpleNumber !== 0) {
      simpleNumber++;
    }
  }
  for(let i =0; i < arr.length; i++){
    if(arr[i] === 2){
      num2++;
    }else if(arr[i] === 3){
      num3++;
    }else {
      num++;
    }
  }
  let max = Math.max(num2, num3, num);
  let zeros = 0;
  for (let i = 1; Math.floor(number / Math.pow(arr[0], i)) !== 0; i++) {
    zeros += Math.floor(number / Math.pow(arr[0], i));
  }
  if(arr[0] === arr[1]){
    return Math.floor(zeros/max);  
  } 
  return zeros;
}
