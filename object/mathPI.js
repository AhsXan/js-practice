//getOwnPropertyDescriptor  this function gives some hidden data or knowledge about the object
const discripter = Object.getOwnPropertyDescriptor(Math, "PI")

//console.log(discripter);

const laptop={
    name : "Ahsan",
company : "asus",
price : 2000,

show: function(){
console.log("OK");
}
}
//console.log(Object.getOwnPropertyDescriptor(laptop, "name"));

// Object.defineProperty(laptop,"name",{
//     writable : false,
//     enumerable : false
// })

//console.log(Object.getOwnPropertyDescriptor(laptop, "name"));


for (let [key,value] of Object.entries(laptop)) {
   if(typeof value!== "function") {
     console.log(key,value);
   }
}
