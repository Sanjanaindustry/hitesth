
// node 04_iterate/five.js
const mynums=[1,2,3,4,5,6,7]

// const newnum =mynums.map((num)=>num+10)
// console.log(newnum);

const newnums=mynums
.map((i)=> i * 10) //i vale multipield with 10 wil be passed
.map((i) => i + 8)//same
.filter((i) => i > 2)//same
console.log(newnums);