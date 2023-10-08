// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。


// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 双指针维护一个滑动窗口
    let left = 0;
    let res = 0;
    const map = new Map();
    for(let right = 0;right < s.length;right += 1){
        if(map.has(s[right]) && map.get(s[right]) >= left){
            left = map.get(s[right]) + 1;
        }
        res = Math.max(res, right - left + 1)
        map.set(s[right],right);
    }
    return res;
};