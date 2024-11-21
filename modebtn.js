//task
let home=document.getElementById("home")
let switchbtn= document.getElementById("switchbtn")
switchbtn.innerHTML="light"
let modee= document.getElementById("modee")
modee.innerHTML="light"
function mode(){
    if(home.style.backgroundColor=="lightgray"){
        home.style.backgroundColor="darkslategrey"
        home.style.color="white"
        switchbtn.innerHTML="dark"
        modee.innerHTML="dark"
    }
    else{
        home.style.backgroundColor="lightgray"
        home.style.color="black"
        switchbtn.innerHTML="light"
        modee.innerHTML="light"
    }
}