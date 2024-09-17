//node 04_iterate/reduce.js
// const mynums=[1,2,3,4]
// initialvalue=0
// const newnums=mynums.reduce((acc,cur)=>
//       acc+cur,initialvalue) //arrow func
      
// console.log(newnums);

const shopping=[
      {
            itemname:'java',
            price:999
      },
      {
            itemname:'python',
            price:1299
      },
      {
            itemname:'c prog',
            price:500
      },
]
const adding=shopping.reduce((acc,item)=> acc+item.price,0)
console.log(adding);