// find missing number

const arr = [3, 7, 8, 10, 11, 0, 2, 6, 1, 4, 5];
const findMissing = (arr = []) => {
   const sum = arr.reduce((acc, val) => acc + val);
   const { length: num } = arr;
   const correctSum = (num * (num + 1)) / 2;
   return diff = correctSum - sum;
   return diff;
};
console.log("missing number is :", findMissing(arr));


// remove duplicate
function removeDuplicates(array) {
    var tempArray = [];
  
    for (var i = 0; i < array.length; i++) {
      if (tempArray.indexOf(array[i]) === -1) {
        tempArray.push(array[i]);
      }
    }
  var length = tempArray.length
    return length;
  }
  
  var array = [1, 2, 3, 3, 4, 5, 5, 6, 6, 7];
  var result = removeDuplicates(array);
  
  console.log('remove duplicate :',result);

function factorial(x) {
    if (x == 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}

console.log("factorial:",factorial(5))

const rotateArray2 = function(nums, k) {
    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  
    k %= nums.length;
  
    reverse(nums, 0, (nums.length - 1));
    reverse(nums, 0, (k - 1));
    reverse(nums, k, (nums.length - 1));
  
    return nums;
  }

  
  console.log("rotate array :",rotateArray2([3, 8, 9, 2, 5],2))