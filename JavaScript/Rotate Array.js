// Output = [5,6,7,1,2,3,4]

let nums = [1,2,3,4,5,6,7];
let k = 3;

k %= nums.length;
function rotateArray(arr,start,end){
  while (start < end){
    [arr[start],arr[end]] = [arr[end],arr[start]];
    start++;
    end--;
  }
  
}
 
rotateArray(nums,0,nums.length-1);
rotateArray(nums,0,k-1);
rotateArray(nums,k,nums.length-1);