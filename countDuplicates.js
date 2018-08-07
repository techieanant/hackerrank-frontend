/*
Count Duplicates

Objective 1
Consider an array of n integers, numbers. We define a non-unique value of numbers to be an integer that appears at least twice in the array. For example, if numbers = [1, 1, 2, 2, 2, 3, 4, 3, 9], then there are a total of 3 non-unique values in the array (i.e., 1, 2, and 3).

Complete the countDuplicates function. It has 1 parameter: an array of integers, numbers. It must return an integer denoting the number of non-unique values in the numbers array.

Input
The first line contains an integer, n, denoting the size of the numbers array.
Each line i of the n subsequent lines (where 0 ≤ i < n) contains an integer describing the value of numbers[i].
Constraints
1 ≤ n ≤ 1000 1 ≤ numbers[i] ≤ 1000

Output
The function must return an integer denoting the number of non-unique values in numbers. This is printed to stdout by locked stub code in the editor.

Sample Input 1
8 1 3 1 4 5 6 3 2

Sample Output 1
2

Explanation 1
n = 8 and numbers = [1, 3, 1, 4, 5, 6, 3, 2].

The integers 1 and 3 both occur more than once, so we return 2 as our answer.

Sample Input 2
6 1 1 2 2 2 3

Sample Output 2
2

Explanation 2
n = 6 and numbers = [1, 1, 2, 2, 2, 3].

The integers 1 and 2 both occur more than once, so we return 2 as our answer.*/


function countDuplicates(arr) {
  let duplicate = 0
  let dups = []
  let uniqs = []
  for(let i in arr) {

    if( uniqs.indexOf(arr[i]) === -1 ) {
      uniqs.push(arr[i])

    } else if( dups.indexOf(arr[i]) === -1) {
      dups.push(arr[i])
      duplicate++
    }

  }
  return duplicate
}
