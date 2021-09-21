// Given a target sum number and an array of numbers to add to reach that sum,
// return the numbers that can add up to the target sum. If no numbers can add to targetSum, return null.
// assume you can use the same number multiple times and no negative numbers


// This problem can be broken down in a tree, with the target sum being the initial node
// and all the children being the result of subtracting each number in the numbers array
// if a node is less than all of the numbers in the numbers array, it cannot have any more children
// and will result in a false branch that does not add up to the targetSum. 
// if a node reaches 0, that branch perfectly adds up to the targetSum


const howSum = (targetSum,numbers,memo={}) => {
    if(targetSum in memo)return memo[targetSum];
    if(targetSum===0) return [];
    
    for(let number of numbers){
        if((targetSum - number) >= 0){
            listOfAddingNumbers = howSum(targetSum-number,numbers,memo);
            if(listOfAddingNumbers != null) {
                listOfAddingNumbers.push(number);
                memo[targetSum] = listOfAddingNumbers;
                return memo[targetSum];
            }
        }
        
    }

    memo[targetSum] = null;
    return null;

};



console.log(howSum(7,[2,3])); //[3,2,2]
console.log(howSum(7,[5,3,4,7])); //[4,3]
console.log(howSum(7,[2,4])); //null
console.log(howSum(8,[2,3,5])); //[2,2,2,2]
console.log(howSum(300,[7,14])); //null