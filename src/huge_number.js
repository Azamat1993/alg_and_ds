function HugeNumber() {

}

HugeNumber.prototype.add = function(n1, n2) {
  var num1 = new Array(n1.length);
  var num2 = new Array(n2.length);

  var max = Math.max(num1.length, num2.length);

  var res = new Array(max + 1);

  for (var i = 0; i < num1.length; i++) {
    num1[i] = Number(n1[num1.length - 1 - i]);
  }

  for (var i = 0; i < num2.length; i++) {
    num2[i] = Number(n2[num2.length - 1 - i]);
  }

  var carry = 0;

  for (var i = 0; i < max; i++) {
    var var1 = num1[i] !== undefined ? num1[i] : 0;
    var var2 = num2[i] !== undefined ? num2[i] : 0;
    res[i] = (var1 + var2 + carry) % 10;

    if (var1 + var2 + carry >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }
  }

  res[max] = carry;

  var number = '';
  var startPoint = res.length - 1;

  while (res[startPoint] === 0) {
    startPoint--;
  }

  for(var i=startPoint; i>=0 ;i--) {
    number+=res[i];
  }

  return number;
}

module.exports = HugeNumber;
