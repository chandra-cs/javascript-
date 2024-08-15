// let ft=["html","css","java script","bootstrap","react"];
// let bt=["servlet","node","asp.net","php"];
// let db=["oracle", "sql server", "mongo db"];

// let web=[...ft,...bt,...db];
// console.log(web);

let mixArray = [1,2,3,[4,5,6],9,21,[1,2,[27,[2,5]]],[2,4,65],7,8,9]
let realArray  = mixArray.flat(5);
console.log(realArray);
