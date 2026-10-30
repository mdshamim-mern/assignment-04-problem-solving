// Problem 1: Staircase — O(n²) output time and space.
var staircase = function(n) {
  return Array.from({ length: n }, (_, i) => ' '.repeat(n - i - 1) + '#'.repeat(i + 1)).join('\n');
};

// Problem 2: Grading Students — O(n) time, O(n) output space.
var gradingStudents = function(grades) {
  return grades.map(grade => {
    const next = Math.ceil(grade / 5) * 5;
    return grade >= 38 && next - grade < 3 ? next : grade;
  });
};

// Problem 3: Time Conversion — O(1) time and space for fixed-length input.
var timeConversion = function(s) {
  const hour = Number(s.slice(0, 2)) % 12 + (s.endsWith('PM') ? 12 : 0);
  return String(hour).padStart(2, '0') + s.slice(2, 8);
};

// Problem 4: String Repeat — O(n * s.length) output time and space.
var repeatStr = function(n, s) { return s.repeat(n); };

// Problem 5: Reversed Strings — O(n) time and space; preserves Unicode code points.
var solution = function(str) { return Array.from(str).reverse().join(''); };

// Problem 6: Sum of Positive — O(n) time, O(1) extra space.
var positiveSum = function(arr) {
  return arr.reduce((sum, value) => sum + (value > 0 ? value : 0), 0);
};

// Problem 7: Grasshopper — Summation — O(1) time and extra space.
var summation = function(num) { return num * (num + 1) / 2; };

// Problem 8: Convert a Boolean to a String — O(1) time and space.
var booleanToString = function(b) { return String(b); };

// Problem 9: Fizz Buzz — O(n) entries and output space (plus digit formatting).
var fizzBuzz = function(n) {
  return Array.from({ length: n }, (_, i) => {
    const value = i + 1;
    return value % 15 === 0 ? 'FizzBuzz' : value % 3 === 0 ? 'Fizz' : value % 5 === 0 ? 'Buzz' : String(value);
  });
};

// Problem 10: Running Sum of 1D Array — O(n) time and output space; input unchanged.
var runningSum = function(nums) {
  let sum = 0;
  return nums.map(value => (sum += value));
};

// Problem 11: Richest Customer Wealth — O(rows * columns) time, O(1) extra space.
var maximumWealth = function(accounts) {
  let maximum = 0;
  for (const customer of accounts) {
    let total = 0;
    for (const amount of customer) total += amount;
    maximum = Math.max(maximum, total);
  }
  return maximum;
};

// Problem 12: Remove Duplicates from Sorted Array — O(n) time, O(1) extra space.
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[write - 1]) nums[write++] = nums[read];
  }
  return write;
};

// Problem 13: Contains Duplicate — O(n) expected time, O(n) extra space.
var containsDuplicate = function(nums) {
  const seen = new Set();
  for (const value of nums) {
    if (seen.has(value)) return true;
    seen.add(value);
  }
  return false;
};

// Problem 14: Move Zeroes — O(n) time, O(1) extra space; modifies input, returns void.
var moveZeroes = function(nums) {
  let write = 0;
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) nums[write++] = nums[read];
  }
  while (write < nums.length) nums[write++] = 0;
};

// Problem 15: Merge Sorted Array — O(m+n) time, O(1) extra space.
// Fill from the end so unread values in nums1 are not overwritten.
var merge = function(nums1, m, nums2, n) {
  let left = m - 1;
  let right = n - 1;
  let write = m + n - 1;
  while (right >= 0) {
    nums1[write--] = left >= 0 && nums1[left] > nums2[right] ? nums1[left--] : nums2[right--];
  }
};

// Problem 16: 3Sum — O(n²) time, O(n) extra space excluding results.
// Sort a copy, fix one value, then scan using two pointers and skip duplicates.
var threeSum = function(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sorted.length - 2 && sorted[i] <= 0; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];
      if (sum < 0) left++;
      else if (sum > 0) right--;
      else {
        result.push([sorted[i], sorted[left], sorted[right]]);
        const low = sorted[left], high = sorted[right];
        while (left < right && sorted[left] === low) left++;
        while (left < right && sorted[right] === high) right--;
      }
    }
  }
  return result;
};

// Problem 17: Plus One — O(n) time and output space; no integer conversion/precision loss.
var plusOne = function(digits) {
  const result = [...digits];
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) { result[i]++; return result; }
    result[i] = 0;
  }
  result.unshift(1);
  return result;
};

// Problem 18: Reverse String — O(n) time, O(1) extra space; returns void.
var reverseString = function(s) {
  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    [s[left], s[right]] = [s[right], s[left]];
  }
};

// Problem 19: Length of Last Word — O(n) time, O(1) extra space.
var lengthOfLastWord = function(s) {
  let end = s.length - 1;
  while (end >= 0 && s[end] === ' ') end--;
  let start = end;
  while (start >= 0 && s[start] !== ' ') start--;
  return end - start;
};

// Problem 20: Longest Common Prefix — O(total characters) time, O(prefix length) output.
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) return strs[0].slice(0, i);
    }
  }
  return strs[0];
};

// Optional Node.js exports; function signatures above match the assessment exactly.
if (typeof module !== 'undefined') {
  module.exports = { staircase, gradingStudents, timeConversion, repeatStr, solution,
    positiveSum, summation, booleanToString, fizzBuzz, runningSum, maximumWealth,
    removeDuplicates, containsDuplicate, moveZeroes, merge, threeSum, plusOne,
    reverseString, lengthOfLastWord, longestCommonPrefix };
}
