var Stack = require('./stack').Stack;
var valuesStack = new Stack();
var operationsStack = new Stack();

function mathCompiler(str) {
  for(var i = 0; i < str.length; i ++ ){
    var ch = str.charAt(i);
    switch(ch) {
      case '(':
        break;
      case '+':
        operationsStack.push(ch);
        break;
      case '*':
        operationsStack.push(ch);
        break;
      case ')':
        var operation = operationsStack.pop();

        if(operation === '+') {
          valuesStack.push(valuesStack.pop() + valuesStack.pop());
        } else if (operation === '*'){
          valuesStack.push(valuesStack.pop() * valuesStack.pop());
        }
        break;
      case ' ':
        break;
      default:
        valuesStack.push(Number(ch));
    }
  }

  console.log(valuesStack);

  return valuesStack.pop();
}

module.exports = mathCompiler;
