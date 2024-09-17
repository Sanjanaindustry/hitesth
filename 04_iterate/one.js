
// node 04_iterate/one.js
// for loop

for (let index = 0; index <= 10; index++) {
    const element = index
    // console.log(element);
    if(element==5){
       // console.log("5 is the best number")
    }
    
}

//console.log(element);

// for (let i = 0; i<= 10; i++) {
//     console.log(`outer loop value is ${i}`);
//     for (let j = 0; j <=10; j++) {
//         //console.log(`inner loop value is ${j} and inner loop ${i}`);
//         console.log(i+ '*'+j+'='+i*j);
//     }
// }


// let myarray=["flash","batman","superman"]
// brreak and continue

// for (let index = 0; index <= 20; index++) {
//     console.log(`value is ${index}`);
//     if(index==5)
//     {
//         console.log("lucky number");
//         break                         /// understanding breakkkk
//     }
    
}
for (let index = 0; index <= 20; index++) {// understanding continue
    console.log(`value is ${index}`);
    if(index==5)
    {
        console.log("lucky number");
        continue
    }
    
}