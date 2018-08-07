/*
Complete the mergeStrings function in your editor. It has 2 parameters:

1. A string, a.
2. A string, b.

Your function must merge strings a and b, and then return a single merged string. A merge operation on two strings is described as follows:
Append alternating characters from a and b, respectively, to some new string, mergedString.
Once all of the characters in one of the strings have been merged, append the remaining characters in the other string to mergedString.

Input Format
The locked stub code in your editor reads two strings, a and b, from stdin and passes them to your function.

Constraints
1 ≤ |a|, |b| ≤ 25000

Output Format
Your function must return the merged string. This will be printed to stdout by the locked stub code in your editor.


Sample Input 1
abc
def
Sample Output 1
adbecf

Sample Input 2
ab
zsd
Sample Output 2
azbsd

Explanation
Sample Case 1
a = abc
b = def
Taking alternate characters from both the strings , we get adbecf
Sample Case 2
a = ab
b = zsd
Taking alternate characters from both the strings , we get azbsd
*/


function mergeStrings(a, b) {
  let mergedString = '';
  let shortString = (a.length < b.length) ? a : b;
  let longString = (a.length > b.length) ? a : b;
  let sameLengthStrings = a.length === b.length;

  for (let i = 0, n = shortString.length; i < n; i++) {
    mergedString += a[i] + b[i];
  }

  if (!sameLengthStrings) {
    mergedString += longString.slice(shortString.length);
  }

  return mergedString;

}
