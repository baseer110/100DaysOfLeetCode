// Improve the performance of the solution from brute force
// approach i.e. O(n^2) t0 Big O.

var twoSum = function (nums, target) {
  let data = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (data.hasOwnProperty(nums[i])) {
      return [data[nums[i]], i];
    } else {
      data[diff] = i;
    }
  }
};
