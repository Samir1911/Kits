sbtn = document.querySelector("#sbtn");
sip = document.querySelectorAll(".sip");
slink=document.querySelector("#slink");
sbtn.addEventListener("click", function () {
    if(localStorage.length==0){
        if(sip[0].value!=""){
            if(sip[1].value==sip[2].value){
                sip.forEach(sb => {
                
                    if (sb == sip[0])
                        localStorage.setItem("Reg_id",sb.value);
                    if (sb == sip[1])
                        localStorage.setItem("password",sb.value);
                    if (sb == sip[2])
                        localStorage.setItem("Confirm",sb.value);
                })
                slink.setAttribute("href","login.html");
            }
            else{
                alert("password not matched");
                sip[1].value="";
                sip[2].value="";
                slink.setAttribute("href","#");
            }

        }
        else{
            alert("Fill Essentials");
            slink.setAttribute("href","#");
        }
    }
    else{
        alert("You have already Signed Up with this Device");
        slink.setAttribute("href","login.html");
    }
})
