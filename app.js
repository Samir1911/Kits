const sidebar=document.querySelector(".sidebar");
var i=0;
const menu=document.querySelector("#menu");
menu.addEventListener("click",function(){
    if(i%2==0)
        sidebar.style.display="block";
    if(i%2==1){
        sidebar.style.display="none";
    }
    i++;
})
btns=document.querySelectorAll(".nav_ele");
window.addEventListener("DOMContentLoaded",function(){
    
    btns.forEach(bt=>{
        if(bt.innerText==sessionStorage.getItem("href")&& bt.innerText!="Login" && bt.innerText!="Sign UP"){
            bt.style.backgroundColor="red";
        }
        else{
            bt.style.backgroundColor="black";
        }
    })
})
btns.forEach(btn=>{
    btn.addEventListener("click",function(){
        sessionStorage.setItem("href",btn.innerText);
    })
})


