var rotate = function(nums, k) {

    let arr = []
    let arr2 = []
    arr = nums.slice(0,nums.length-k);
    arr2 = nums.slice(nums.length-k);
  
    console.log ([...arr2,...arr])
};

const nums = [1,2,3,4,5,6,7]
const k = 3
rotate(nums,k)