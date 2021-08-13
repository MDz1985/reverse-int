module.exports = function reverse (n) {
  
  if (n < 0){
    n = -n;
}
let textNumber = n.toString();
let result = '';
  for (let i = 0; i < textNumber.length ; i++){
      result = textNumber[i] + result;
  }

    return Number(result);

}
