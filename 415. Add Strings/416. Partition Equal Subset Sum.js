/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Recursion+Memoization
// var canPartition = function(nums) {
//     let n = nums.length;
//     let sum = 0;
//     for(let i = 0; i<n; i++){
//         sum += nums[i];
//     }
//     if(sum%2 == 0){
//     let dp = Array(n).fill(-1).map(el => Array(sum/2+1).fill(-1));
//     return f(nums, n, sum/2, dp);
//     } else {
//         return false;
//     }
// };

// function f(arr, n, s, dp, ind = 0){
//     if(ind >= n || s<0) return false;
//     if(s == 0) return true;
//     if(dp[ind][s] != -1){ 
//         return dp[ind][s]
//     };
//     if(f(arr, n, s-arr[ind], dp, ind+1)) return dp[ind][s] = true;
//     if(f(arr, n, s, dp, ind+1)) return dp[ind][s] = true;
//     return dp[ind][s] = false;
// }

//Tabulation

var canPartition = function(nums) {
    let n = nums.length;
    let sum = 0;
    for(let i = 0; i<n; i++){
        sum += nums[i];
    }
    if(sum%2 == 0){
    let m=sum/2;
    let dp = Array(n+1).fill(false).map(el => Array(m+1).fill(false));
    for(let i=0; i<n+1;i++){
        for(let j=0;j<m+1;j++){
            dp[i][j] = false;
            if(j == 0) dp[i][0] = true;
        }
    }
    for(let i=1; i<n+1;i++){
        for(let j=1;j<m+1;j++){
            if(dp[i-1][j-nums[i]]) dp[i][j] = true;
            else if(dp[i-1][j]) dp[i][j] = true;
            else
                dp[i][j] = false;
        }
    }
    return dp[n][m];
    } else {
        return false;
    }
};