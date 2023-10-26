/*Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.*/

var strStr = function(haystack, needle) {
    let k=0
    for(let i=0;i<haystack.length;i++){
        if(haystack[i]==needle[k]){
            k++;
            if(k==needle.length){
                return i-(k-1)
            }
        }else{
            i=i-(k)
            k=0;
        }
    }
    return -1
};