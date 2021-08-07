const sidebar = document.querySelector(".sidebar");
var i = 0;
const menu = document.querySelector("#menu");
menu.addEventListener("click", function () {
    if (i % 2 == 0)
        sidebar.style.display = "block";
    if (i % 2 == 1) {
        sidebar.style.display = "none";
    }
    i++;
});

var student=[
    {   
        name:"PENUGONDA HARI PRASANTH",
        fname:"PENUGONDA RAMA KOTAIAH",
        mname:"PENUGONDA SUNEETHA",
        dob:"27/01/02",
        reg_id:"19JR1A05G2",
        photo:"STUDENT/19JR1A05G2.png",
        phone:8500064259,
        place:["Main Road","SAMPATH NAGAR","NallaVheruvu","GUNTUR","GUNTUR"],
        sem:["80%","78%","80%"],
        attend:"87%",
        skills:["C","C++","Python","Java",""],
        web:["HTML",'CSS'],
        level:["90%","80%","80%","60%","70%","60%"]
    },
    {
        name: "POLINENI VASUDEVA",
        fname: "POLINENI NARASIMHA RAO",
        mname: "POLINENI JYOTHI",
        dob: "20/02/02",
        reg_id: "19JR1A05G3",
        photo: "STUDENT/19JR1A05G3.png",
        phone:9493924609,
        place:["NEAR VENKATESWARA MADAPAM","SRINAGAR 7/2 LINE","SRINAGAR","GUNTUR","GUNTUR"],
        sem:["75%","78%","80%"],
        attend:"93%",
        skills:["C","C++","Python","Java",""],
        web:["HTML",'CSS'],
        level:["90%","85%","80%","70%","65%","65%"]
    },
    {
        name: "POSANI KARTEEK BABU",
        fname: "POSANI KUMARA SWAMI",
        mname: "POSANI SUNITHA",
        dob: "06/02/01",
        reg_id: "19JR1A05G4",
        photo: "STUDENT/19JR1A05G4.png",
        phone:9347502432,
        place:["KARLAPUDI","AMARAVATI","GUNTUR"],
        sem:["70%","72%","74%"],
        attend:"85%",
        skills:["C","C++","Python","Java",""],
        web:["HTML",'CSS'],
        level:["70%","70%","65%","50%","60%","60%"]
    },
    {
        name: "RATHAMSETTY RAVI TEJA",
        fname: "RATHAMSETTY SRINIVASA RAO",
        mname: "PEDDI SETTY NAGA KALYANI",
        dob: "12/07/2002",
        reg_id: "19JR1A05G5",
        photo: "STUDENT/19JR1A05G5.png",
        phone:8008245886,
        place:["MAIN rOAD","RAVINDRA NAGAR","OPP CUARAPATRI RESIDENCY","GUNTUR","GUNTUR"],
        sem:["70%","72%","75%"],
        attend:"85%",
        skills:["C","C++","Python","Java",""],
        web:["HTML",'CSS'],
        level:["70%","70%","70%","50%","60%","50%"]
    },
    {
        name: "SAMIR ABDUL",
        fname: "SALAM ABDUL",
        mname: "NAZIMA SULTANA",
        dob: "19/11/2000",
        reg_id: "19JR1A05G6",
        photo: "STUDENT/19JR1A05G6.png",
        phone:8143224586,
        place:["5th lane","Yettiraju Nagar","Chuttugunta","GUNTUR","GUNTUR"],
        sem:["84%","82%","82%"],
        attend:"84%",
        skills:["C","C++","Python","Java",""],
        web:["HTML","CSS","JS"],
        level:["90%","80%","80%","50%","90%","80%","70%"]

    },
    {
        name: "SHAIK KARIMULLA SALEEM",
        fname: "JEELANI SAHEB",
        mname: "NAZIN",
        dob: "09/08/2002",
        reg_id: "19JR1A05G7",
        photo: "STUDENT/19JR1A05G7.png",
        phone:9866405462,
        place:["GUPUDI ","SATTENAPALLI","GUNTUR"],
        sem:["70%","74%","70%"],
        attend:"85%",
        skills:["C","C++","Python","Java",""],
        web:["HTML",'CSS'],
        level:["70%","60%","60%","50%","60%","50%"]
    },
    {
        name: "SHAIK KHAJA HUSSAIN",
        fname: "SHAIK ADAM",
        mname: "SHAIK SHAKEELA",
        dob: "13/08/2001",
        reg_id: "19JR1A05G8",
        photo: "STUDENT/19JR1A05G8.png",
        phone:8074285204,
        place:["2ND LINE","DURGANAGAR","SUDDAPALLI DONKA","GUNTUR","GUNTUR"],
        sem:["80%","78%","80%"],
        attend:"90%",
        skills:["C","C++","Python","Java",""],
        web:["HTML",'CSS'],
        level:["90%","75%","85%","60%","70%","60%"]
    },
    {
        name: "SHAIK MAHA BASHA",
        fname: "SHAIK ISMAIL",
        mname: "SHAIK SBIRUNBI",
        dob: "27/07/2000",
        reg_id: "19JR1A05G9",
        photo: "STUDENT/19JR1A05G9.png",
        phone:9652365594,
        place:["NUTHALAPADU","PARCHUR","PRAKASAM"],
        sem:["80%","78%","80%"],
        attend:"93%",
        skills:["C","C++","Python","Java",""],
        web:["HTML",'CSS'],
        level:["90%","80%","80%","60%","70%","60%"]
    },
    {
        name: "SHAIK MOHAMMAD SADHIK",
        fname: "SHAIK CHAN BASHA",
        mname: "SHAIK ASHRIFUN",
        dob: "01/08/2001",
        reg_id: "19JR1A05H0",
        photo: "STUDENT/19JR1A05H0.png",
        phone:9885459116,
        place:["Main Road","JAKIR HUSSAIN STREET","CHILAKALURIPET","CHILAKALURIPET","GUNTUR"],
        sem:["81%","78%","82%"],
        attend:"94%",
        skills:["C","C++","Python","Java",""],
        web:["HTML",'CSS'],
        level:["90%","85%","85%","70%","70%","60%"]
    },
    {
        name:"SHAIK MOHAMMED SAMEER",
        fname:"SHAIK KHASIMSHAID",
        mname:"SHAIK SHAFIMUNNISA",
        reg_id:"19JR1A05H1",
        photo:"STUDENT/19JR1A05H1.png",
        phone:8978172424,
        place:["MAIN ROAD","NEAR POLERAMMA TEMPLE","STAMBALAGARUVU","GUNTUR","GUNTUR"],
        sem:["80%","78%","80%"],
        attend:"87%",
        skills:["C","C++","Python","Java",""],
        web:["HTML",'CSS'],
        level:["90%","70%","70%","50%","70%","60%"]
    }
]

var st
student.forEach(stud=>{
    if(stud.reg_id==localStorage.getItem("Reg_id")){
        st=stud;
    }
})

//Personal Info innerHTML reusable.
var b=`<div id="Personal">
                    <div class="Pers">
                        <p><b>Student Name : </b> ${st.name}</p>
                        <p><b>Father's Name : </b> ${st.fname}</p>
                        <p><b>Mother's Name : </b>${st.mname}</p>
                        <p><b>Date-of-Birth : </b>${st.dob}</p>
                        <p><b>Phone No. : </b> ${st.phone}</p>
                        <fieldset id="Residence">
                            <legend><b>Residence</b></legend>
                            <div id="urban">
                                <p><b>Lane : </b>${st.place[0]}</p>
                                <p><b>Colony : </b>${st.place[1]}</p>
                                <p><b>Area : </b>${st.place[2]}</p>
                                <p><b>City : </b>${st.place[3]}</p>
                                <p><b>District : </b>${st.place[4]}</p>
                            </div>
                            <div id="rural">
                                <p><b>Village : </b>${st.place[0]}</p>
                                <p><b>Mandal : </b>${st.place[1]}</p>
                                <p><b>District : </b>${st.place[2]}</p>
                            </div>
                            <p><b>State : </b> Andhra Pradesh</p>
                        </fieldset>
                    </div>
                    <img id="stud" src="${st.photo}" alt="">
                </div>`
var btns=document.querySelectorAll(".slidebar button");
var content=document.querySelector(".content");
//default when open
window.addEventListener("DOMContentLoaded",function(){
    content.innerHTML=b;
    if(st.place.length==5){
        document.querySelector("#rural").style.display="none";
    }
    if(st.place.length==3){
        document.querySelector("#urban").style.display="none";
    }
    
})
         

btns.forEach(btn=>{
    btn.addEventListener("click",function(){
        btns.forEach(btn=>{
            btn.style.background="transparent";
        })
        btn.style.background="red";

    //Personal Info innerHTML
        if(btn.innerText=="Personal Info"){
           
            content.innerHTML=b;
            if(st.place.length==5){
                document.querySelector("#rural").style.display="none";
            }
            if(st.place.length==3){
                document.querySelector("#urban").style.display="none";
            }
        }

    //Academic Info innerHTML
        if(btn.innerText=="Academic Info"){
            content.innerHTML=`<p><b>Course : </b> B.TECH</p>
                <p><b>Branch : </b>CSE</p>
                <p><b>Section : </b>3</p>
                <p><b>Current Semister : </b>2-2</p>
                <p><b>Accomodation : </b>Daily Scholar</p>
                <p><b>Attendence </b>(curr. sem) : ${st.attend}</p>
                <fieldset id="SemWise">
                    <legend>Sem-Wise CGPA</legend>
                    ${sem}
                    <p><b>BackLogs : </b> 0</p>
                </fieldset>`
            
            //sem Percentage
            let j=0;let p;
            var se=document.querySelectorAll(".percent");
            se.forEach(fn=>{
                fn.style.width=st.sem[j];
                j++;
            })
        }
//Skills innerHTML
        if(btn.innerText=="Skills"){
            content.innerHTML=`<div class="skill">
                    <fieldSet class="language">
                        <legend>Programming Languages</legend>
                        ${s}
                    </fieldSet>
                    <fieldset class="language">
                        <legend>Web Development</legend>
                        ${w}
                    </fieldset>
                </div>`
            //Skills Percentage calculator;    
            i=0;let p;
            var sp=document.querySelectorAll(".span");
            sp.forEach(spn=>{
                spn.style.width=st.level[i];
                i++;
            })  
        }

    })
})

//Acadamic Details Sem details 
var sem="",k=0;
var sems=["Sem 1-1","Sem 1-2","Sem 2-1"];
st.sem.forEach(se=>{
    sem+=`<div class="Sem">
            <p><b>${sems[k]} </b></p>
            <div class="sem"><div class="percent"></div></div>
            <p><b>${st.sem[k]}</b></p>
        </div>`
    k++;
})



//Skills language levels
var s="",i=0;
st.skills.forEach(ski=>{
    if(ski!=""){
        s+=`<div class="ski">
            <p class="text"><b>${st.skills[i]}</b><p>
            <div class="lang"><div class="span"></div></div>
            <p>${st.level[i]}</p>
        </div>`
        i++;
    }
})
var w="",j=0;
st.web.forEach(web=>{
    if(web!=""){
        w+=`<div class="ski">
            <p class="text"><b>${st.web[j]}</b><p>
            <div class="lang"><div class="span"></div>
            </div>
            <p>${st.level[i]}</p>
        </div>`
        j++;i++;
    }
})
