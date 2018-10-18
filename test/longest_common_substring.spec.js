var longestCommonSubstring = require('../src/longest_common_substring');

describe('longestCommonSubstring', function() {
  fit('should find longest common substring between two strings', function() {
    expect(longestCommonSubstring('', '')).toBe('');
    expect(longestCommonSubstring('ABC', '')).toBe('');
    expect(longestCommonSubstring('', 'ABC')).toBe('');
    expect(longestCommonSubstring('ABABC', 'BABCA')).toBe('BABC');
    expect(longestCommonSubstring('BABCA', 'ABCBA')).toBe('ABC');
    expect(longestCommonSubstring('Algorithms and data structures implemented in JavaScript','Here you may find Algorithms and data structures that are implemented in JavaScript')).toBe('Algorithms and data structures ');
  });
});
