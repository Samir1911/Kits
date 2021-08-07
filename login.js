f_btn=document.querySelector("#faculty");
s_btn=document.querySelector("#student");
r=document.querySelector("#Reg");
f_btn.addEventListener("click",function(){
    f_btn.style.boxShadow="1px -17px 8px 8px black";
    s_btn.style.boxShadow="inset -5px -3px 5px 5px rgba(192, 192, 192, 0.1)";
    r.innerText="Faculty Id";

});
s_btn.addEventListener("click",function(){
    f_btn.style.boxShadow="inset -5px -3px 5px 5px rgba(192, 192, 192, 0.1)";
    s_btn.style.boxShadow="-1px -17px 8px 8px rgba(192, 192, 192, 0.2)";
    r.innerText="Registration Number";
})
link=document.querySelector("#sub_link");
sbtn=document.querySelector("#submit");
ip=document.querySelectorAll(".ip");
sbtn.addEventListener("click",function(){
    if(localStorage.length==0){
        alert("Please SignUp if your dont have Account");
    }
    else{
        if(ip[0].value==localStorage.getItem("Reg_id") && ip[1].value==localStorage.getItem("password")){
            link.setAttribute("href","student.html");
        }
        if(ip[0].value==""){
            alert("fill Essentials and try again");
        }
        else if( ip[1].value!=localStorage.getItem("password")){
            alert("Wrong Password");
            ip[1].value="";
        }
        
    }
})


