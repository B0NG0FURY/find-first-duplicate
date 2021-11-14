function findFirstDuplicate(arr) {
  const uniques = new Set();
  for (const value of arr) {
    if (uniques.has(value)) {
      return value;
    }
    uniques.add(value);
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([2, 4, 1, 2, 3]))

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// 1. create new Set object called unique.
// 2. iterate over the array and compare with the unique value array. return value if it is already in unique value array.
// 3. if nothing is returned during iteration return -1.
// And a written explanation of your solution
