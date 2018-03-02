module.exports = function getZerosCount(number, base) {
  // let number = 46;
  // let base = 2;
  // let ar = [];
  if (number % base === 0){
  ar.push(0);
  }
  // console.log(ar);
  
  let a = 5, b = 5, c = 0;
  let int = Math.floor(number / 5);
  let remain = 0;

  for (let i = 0; i < 10; i++) {
    c = a * b;
    a = c;
    remain += Math.floor(number / c);
  }

  // return Math.round(int + remain);
}
