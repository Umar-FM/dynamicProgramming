// Given a target sum number and an array of numbers to add to reach that sum,
// return if the numbers themselves can add up to the target sum
// assume you can use the same number multiple times and no negative numbers


// This problem can be broken down in a tree, with the target sum being the initial node
// and all the children being the result of subtracting each number in the numbers array
// if a node is less than all of the numbers in the numbers array, it cannot have any more children
// and will result in a false branch that does not add up to the targetSum. 
// if a node reaches 0, that branch perfectly adds up to the targetSum and therefore canSum returns true


const canSum = (targetSum,numbers) => {

    if(targetSum===0) return true;

    var targetSumHigh = false;
    for(number in numbers){
        if (targetSum > number){
            targetSumHigh = true;
            break; //if targetSum is less than all numbers, return false for this branch
        }
        
    }
    if(!targetSumHigh) return false;
    
    for(number in numbers){

        if((targetSum - number) >= 0 && canSum(targetSum-number,numbers)) return true;
    }
    //return false;

};



console.log(canSum(7,[2,3])); //true
// console.log(canSum(7,[5,3,4,7])); //true
// console.log(canSum(7,[2,4])); //false
// console.log(canSum(8,[2,3,5])); //true
// console.log(canSum(300,[7,14])); //false