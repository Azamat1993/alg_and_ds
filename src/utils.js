function extend(class1, class2) {
  class1.prototype = Object.create(class2.prototype);
  class1.prototype.__super__ = class2;
  class1.prototype.constructor = class1;
}

module.exports = {
  extend: extend
}
