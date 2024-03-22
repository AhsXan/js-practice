// document.querySelector("#h1").onclick= ()=> {

//     alert("h1 has been selected")
// }
// document.querySelector("#h2").onclick= ()=> {

//     alert("h2 has been selected")
// }

// document.querySelector("#h3").addEventListener("click", ()=>{

// alert("H3 Has Been Selected")

// })

// // Event Bubbling and Capturing

// document.querySelector("#List").addEventListener("click",(e)=>
// {
// console.log("List")

// },false)
// document.querySelector("#l3").addEventListener("click",(e)=>
// {
// console.log("List 3 clicked")
// e.stopPropagation()                 // to stop Bubbling 
// },false)


// // Removing an Element
// document.querySelector("#List").addEventListener("click",(e)=>{
// console.log(e.target)

// let removeIt= e.target
// removeIt.remove()

// },false)
 
//                        set  timers 
const  x = document.querySelector("#h3")

x.addEventListener("click",(e)=>{
    setTimeout(() => {
        x.innerHTML = ("Changed Bro")
       
     console.log("asd")

    }, 2000);

    let colorChange = setInterval(() => {
        x.style.color= "#d00000"
    
    },4000)

    const stop =  document.querySelector("#stop")
    stop.addEventListener("click",()=>{
        clearTimeout(colorChange)                                        //clear Timout to stop the timer
    })
    

})
