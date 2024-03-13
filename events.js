// document.querySelector("#h1").onclick= ()=> {

//     alert("h1 has been selected")
// }
// document.querySelector("#h2").onclick= ()=> {

//     alert("h2 has been selected")
// }

// document.querySelector("#h3").addEventListener("click", ()=>{

// alert("H3 Has Been Selected")

// })

// Event Bubbling and Capturing

document.querySelector("#List").addEventListener("click",(e)=>
{
console.log("List")

},false)
document.querySelector("#l3").addEventListener("click",(e)=>
{
console.log("List 3 clicked")
e.stopPropagation()                 // to stop Bubbling 
},false)