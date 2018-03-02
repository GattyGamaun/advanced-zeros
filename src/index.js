module.exports = function getZerosCount(number, base) {
  let a = 5, b = 5, c = 0;
  let int = Math.floor(number / 5);
  let remain = 0;

  for (let i = 0; i < 10; i++) {
    c = a * b;
    a = c;
    remain += Math.floor(number / c);
  }

  return Math.round(int + remain);
  
}
