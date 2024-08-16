const product={id:1,name:"NailPolish"}


var storage=localStorage;
if(typeof storage !==undefined){
    
window.onload=function(){
    updateName();
}

function submit(){
 storage.setItem("myname",document.querySelector('#myname').value);
 storage.setItem("product",JSON.stringify(product)); // always convert the value into string
 updateName();
}

function clearStorage(){
 storage.removeItem("myname");
 updateName();
}

function updateName(){
    console.log(JSON.parse(storage.getItem("product"))); // parse the value when retreiving it
    document.querySelector("#display").textContent=`Welcome ${storage.getItem("myname")}`;
}

}
else{
    console.log("Storage API not supported")
}