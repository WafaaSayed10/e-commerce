/*let num= Number(document.getElementById("disply").innerText);
function plus(){
    num+=10;
    result()
}
function minus(){
    num-=10;
    result()
}
function divid(){
    num/=10;
    result()
}
function multi(){
    num*=10;
    result()
}
function result(){
    document.getElementById("disply").innerHTML=num
}
*/





/*
//lap
let nums=[20,30,5,6,11,8,7,6,2,12,18]
for(let i=0; i<nums.length; i++){
    if(nums[i]==11){
        continue
    }
    if(nums[i]%2==0){
        document.write(nums[i] + " is even <br>")
    }
    else
        document.write(nums[i] + " is odd <br>")
}*/

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









/*let currentDisplay = "0";

function appendToDisplay(value) {
    if (currentDisplay === "0") {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    updateDisplay();
}
function updateDisplay() {
    document.getElementById("display").innerHTML = currentDisplay;
}
function calculateResult() {
    currentDisplay = eval(currentDisplay);
    updateDisplay();
}*/