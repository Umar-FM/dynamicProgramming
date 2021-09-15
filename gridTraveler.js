//given an m*n grid, how many ways are there to travel from the top-left element to the bottom-right element
//provided you can only move down and right

const gridTraveler = (m,n,memo={}) => {
    // var key = m+','+n;
    // var keyInv = n+','+m;
    // if(key in memo)return memo[key]; //m,n and n,m have the same values, order does not matter
    // if(keyInv in memo)return memo[keyInv];
    if([m,n] in memo) return memo[[m,n]];
    if(m==1 && n==1) return 1; //a 1x1 grid has only one way, because the start and end nodes are the same node
    if(m==0 || n==0) return 0; //any 0 dimension has no way of travel

    //in any direction you move, you reduce the available grid by deducting from the dimension
    //the move was taken. This can be broken down into a tree with each node being a grid of
    //m,n and its children being nodes if you were to move to the right or to the left with a size
    // of m-1,n or m,n-1. The tree will continue until it reaches one of the base cases listed above
    
    // memo[key] = gridTraveler(m-1,n,memo) + gridTraveler(m,n-1,memo);
    // return memo[key];
    memo[[m,n]] = gridTraveler(m-1,n,memo) + gridTraveler(m,n-1,memo);
    return memo[[m,n]]

};

console.log(gridTraveler(1,1)); //1
console.log(gridTraveler(2,3)); //3
console.log(gridTraveler(3,2)); //3
console.log(gridTraveler(3,3)); //6
console.log(gridTraveler(18,18)); //2333606220
