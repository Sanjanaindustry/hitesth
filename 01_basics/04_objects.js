// //singleton


//thisliterals

const sujan={
    name:"sanj",
    age:20,
    location:"davangere",
    email:"sanjana@.com",
    isloggedIn:false,
    lastlogindays:["mon","tue"]
}

// console.log(sujan["email"]);
// sujan.email=""//

sujan.greeting=function(){
    console.log("hello js ser");
}
sujan.greetingtwo=function(){
    console.log(`hello js ser,${this.name}`);
}
console.log(sujan.greeting());
console.log(sujan.greetingtwo());

