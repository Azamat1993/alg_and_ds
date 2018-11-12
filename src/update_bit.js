function updateBit(num, pos, bit) {
  return (num  & (~(1 << pos))) | (bit << pos);
}

module.exports = updateBit;
