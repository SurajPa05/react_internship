
const user = [
    {name:"Suraj", last:"P A"},{name:"issac", last:"Paul"},{name:"sirin", last:"simon"},
]
console.log(user);

fullname = user.map((data) => data.name+" "+data.last )

console.log(fullname)