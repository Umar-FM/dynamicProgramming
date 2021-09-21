// Given a target sum number and an array of numbers to add to reach that sum,
// return the least amount of numbers that can add up to the target sum. If no numbers can add to targetSum, return null.
// assume you can use the same number multiple times and no negative numbers

// This problem can be broken down in a tree, with the target sum being the initial node
// and all the children being the result of subtracting each number in the numbers array
// if a node is less than all of the numbers in the numbers array, it cannot have any more children
// and will result in a false branch that does not add up to the targetSum. 
// if a node reaches 0, that branch perfectly adds up to the targetSum.
// the branch with the least amount of nodes is the best Sum

const bestSum = (targetSum,numbers,memo={}) =>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum <0) return null;

    let shortestCombination = null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const oldListSoFar = bestSum(remainder,numbers,memo);
        
        if(oldListSoFar !== null){
            const listSoFar = [ ...oldListSoFar,num];
            if(shortestCombination === null || listSoFar.length < shortestCombination.length ){
                shortestCombination = listSoFar;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return memo[targetSum];

};


console.log(bestSum(7,[5,3,4,7])); //[7]
console.log(bestSum(8,[2,3,5])); //[3,5]
console.log(bestSum(8,[1,4,5])); //[4,4]
console.log(bestSum(100,[1,2,5,25])); //[25,25,25,25]