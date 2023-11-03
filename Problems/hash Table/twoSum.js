/**
 * function to perform twosum using hash table
 * @param {number[]} arr 
 * @param {number} target 
 * @returns {number[]}
 */
const twoSum = (arr, target) =>{
    let hash= [];
    for(let i=0; i<arr.length; i++){
        let val = arr[i];
        if(hash[target - val]!==undefined){
            return [arr[hash[target - val]], arr[i]];
        }
        hash[val] = i;
    }
    return []
}

console.log(twoSum([1,2,3,4,5],9))