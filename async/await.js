async function getAny(dataID){
await api(dataID)

}

function api (dataID){

return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("okkkk");
        resolve(console.log("Success ", dataID))
    },3000)

})}

getAny(6)
