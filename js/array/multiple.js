let nums = [21,123,42,1,24,3]
let newarray;
let odd

// newarray = nums.map(function (data){
//     return data*10
// })


newarray = nums.map((data) => data *10)
odd = nums.filter((data) => data %2 == 1)

console.log(newarray);
console.log(odd);

