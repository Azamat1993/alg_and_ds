var HugeNumber = require('../src/huge_number');

describe('HugeNumber', function() {
  it('should add two really huge numbers', function() {
    var huge = new HugeNumber();
    expect(huge.add("41324123416273841678561756234523475","43576234756234785623475623784652873465873246587")).toBe("43576234756276109746891897626331435222107770062");
  });
});
