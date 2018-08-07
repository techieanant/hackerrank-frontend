/*
Maximum difference between two elements such that larger element appears after the smaller number
Given an array arr[] of integers, find out the maximum difference between any two elements such that larger element appears after the smaller number.

Examples :

Input : arr = {2, 3, 10, 6, 4, 8, 1}
Output : 8
Explanation : The maximum difference is between 10 and 2.

Input : arr = {7, 9, 5, 6, 3, 2}
Output : 2
Explanation : The maximum difference is between 9 and 7.
*/

function maxDifference(a) {

if (a.length <= 1) return -1;

  var currentMin = a[0];
  var currentMaxDifference = 0;

  for (var i = 1; i < a.length; i++) {
    if (a[i] > currentMin && (a[i] - currentMin > currentMaxDifference)) {
      currentMaxDifference = a[i] - currentMin;
    } else if (a[i] <= currentMin) {
      currentMin = a[i];
    }
  }

  if (currentMaxDifference <= 0) return -1;

  return currentMaxDifference;
}
