// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// need to sort array and return lowest int which will also include negatives.
// returning math.min function on the array.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(args)
  }
}