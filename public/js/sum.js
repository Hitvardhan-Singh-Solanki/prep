/**
 * Bit wise opertions truth table
 * A & B => c
 * 2 & 3 => 2
 * 010 & 011 => 010
 *
 * A ^ B => C
 * 2 ^ 3 => 1
 * 010 ^ 011 => 001
 *
 * A << 1 => c
 * 2 << 1 => 4
 * 010 << 001 => 100
 */

var getSum = function(a, b) {
  if (b == 0) {
    return a;
  } else {
    console.log('->', a, b);
    console.log('^ ->', a ^ b);
    console.log('& ->', a & b);
    return getSum(a ^ b, (a & b) << 1);
  }
};

getSum(2, 3);
