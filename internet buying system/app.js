const username = document.getElementById("name");
const number = document.getElementById("num");
const user = document.getElementById("user");
const mobileno= document.getElementById("number");
const login = document.getElementById("login");
const registerform = document.getElementById("rform");
const register = document.getElementById("register");
const sendotp = document.getElementById("sendotp");
const otppass = document.getElementById("otp");

const tk = document.getElementById("tk");
const rtk = document.getElementById("rtk");
const amountvalue = document.getElementById("amountvalue");
const container = document.getElementById("container")


// data buying section

const internetvalue = document.getElementById("internetvalue");
const day = document.getElementById("day");

const data1 = document.getElementById("data1");
const valid1 = document.getElementById("valid1");
const buydata1 = document.getElementById("buydata1");

const data2 = document.getElementById("data2");
const valid2 = document.getElementById("valid2");
const buydata2 = document.getElementById("buydata2");

const data3 = document.getElementById("data3");
const valid3 = document.getElementById("valid3");
const buydata = document.getElementById("buydata3");

const data4 = document.getElementById("data4");
const valid4 = document.getElementById("valid4");
const buydata4 = document.getElementById("buydata4");

const data5 = document.getElementById("data5");
const valid5 = document.getElementById("valid5");
const buydata5 = document.getElementById("buydata5");

const data6 = document.getElementById("data6");
const valid6 = document.getElementById("valid6");
const buydata6 = document.getElementById("buydata6");

const data7 = document.getElementById("data7");
const valid7 = document.getElementById("valid7");
const buydata7 = document.getElementById("buydata7");

const data8 = document.getElementById("data8");
const valid8 = document.getElementById("valid8");
const buydata8 = document.getElementById("buydata8");

// data buying section end


login.addEventListener("click",()=>{
    registerform.classList.add("openregisterform");
    
});

sendotp.addEventListener("click",()=>{
    otp="";
    otp += Math.floor(Math.random()*9)+1;
    otp += Math.floor(Math.random()*9)+1;
    otp += Math.floor(Math.random()*9)+1;
    otp += Math.floor(Math.random()*9)+1;
    alert(`Your OTP is ${otp}`);
})

register.addEventListener("click",(e)=>{
    e.preventDefault();
    if(otppass.value==""||user.value==""||mobileno.value==""){
        alert("Fillup your registration box!")
    }
    else if(mobileno.value.length>11||mobileno.value.length<11){
        alert("Please enter valid number")

    }
    else if(otppass.value!=otp){
        alert("Please recheck your otp");
        otp="";
        otppass.value="";
        sendotp.innerHTML="resend";
    }
    else{
        registerform.classList.remove("openregisterform")
        
        setTimeout(()=>{
            username.innerHTML=user.value;
            number.innerHTML=mobileno.value;  
            login.disabled=true;
            login.innerHTML="Registered"
            login.style.backgroundColor=" rgba(4, 94, 4, 0.914)"
        },500)
    }   
});

var res=0;
rtk.addEventListener("click",()=>{
    if(username.innerHTML==""||number.innerHTML==""){
        alert("please register first!")
        tk.value="";
    }
    else if(tk.value==""){
        alert("Please enter your amount")
    }
    else{  

        res += parseFloat(tk.value);
        amountvalue.innerHTML=res+"TK";      
        tk.value="";
    }  
});

var updatedata = 0;

buydata1.addEventListener("click",()=>{
    if(username.innerHTML==""||number.innerHTML==""){
        alert("please register first!")
    }
    else if(parseFloat(buydata1.innerHTML)>res){
        alert("Insufficient Balance");
    }
   
    else {
        res -= parseFloat(buydata1.innerHTML);
        amountvalue.innerHTML=res+"TK";

        updatedata += parseFloat(data1.innerHTML);
        internetvalue.innerHTML=updatedata+" GB";

        if(parseInt(valid1.innerHTML)>=parseInt(day.innerHTML)){
            day.innerHTML= valid1.innerHTML;
        }
        else if(parseInt(valid1.innerHTML)<parseInt(day.innerHTML)){
            day.innerHTML=parseInt(day.innerHTML)+" Day";
        }
               
    }
   
})

buydata2.addEventListener("click",()=>{
    if(username.innerHTML==""||number.innerHTML==""){
        alert("please register first!")
    }
    else if(parseFloat(buydata2.innerHTML)>res){
        alert("Insufficient Balance");
    }
   
    else {
        res -= parseFloat(buydata2.innerHTML);
        amountvalue.innerHTML=res+"TK";

        updatedata += parseFloat(data2.innerHTML);
        internetvalue.innerHTML=updatedata+" GB";

        if(parseInt(valid2.innerHTML)>=parseInt(day.innerHTML)){
            day.innerHTML= valid2.innerHTML;
        }
        else if(parseInt(valid2.innerHTML)<parseInt(day.innerHTML)){
            day.innerHTML=parseInt(day.innerHTML)+" Day";
        }
              
    }
    
})

buydata3.addEventListener("click",()=>{
    if(username.innerHTML==""||number.innerHTML==""){
        alert("please register first!")
    }
    else if(parseFloat(buydata3.innerHTML)>res){
        alert("Insufficient Balance");
    }
   
    else {
        res -= parseFloat(buydata3.innerHTML);
        amountvalue.innerHTML=res+"TK";

        updatedata += parseFloat(data3.innerHTML);
        internetvalue.innerHTML=updatedata+" GB";

        if(parseInt(valid3.innerHTML)>=parseInt(day.innerHTML)){
            day.innerHTML= valid3.innerHTML;
        }
        else if(parseInt(valid3.innerHTML)<parseInt(day.innerHTML)){
            day.innerHTML=parseInt(day.innerHTML)+" Day";
        }
              
    }
    
})

buydata4.addEventListener("click",()=>{
    if(username.innerHTML==""||number.innerHTML==""){
        alert("please register first!")
    }
    else if(parseFloat(buydata4.innerHTML)>res){
        alert("Insufficient Balance");
    }
   
    else {
        res -= parseFloat(buydata4.innerHTML);
        amountvalue.innerHTML=res+"TK";

        updatedata += parseFloat(data4.innerHTML);
        internetvalue.innerHTML=updatedata+" GB";

        if(parseInt(valid4.innerHTML)>=parseInt(day.innerHTML)){
            day.innerHTML= valid4.innerHTML;
        }
        else if(parseInt(valid4.innerHTML)<parseInt(day.innerHTML)){
            day.innerHTML=parseInt(day.innerHTML)+" Day";
        }
     
    }
    
})

buydata5.addEventListener("click",()=>{
    if(username.innerHTML==""||number.innerHTML==""){
        alert("please register first!")
    }
    else if(parseFloat(buydata5.innerHTML)>res){
        alert("Insufficient Balance");
    }
   
    else {
        res -= parseFloat(buydata5.innerHTML);
        amountvalue.innerHTML=res+"TK";

        updatedata += parseFloat(data5.innerHTML);
        internetvalue.innerHTML=updatedata+" GB";

        if(parseInt(valid5.innerHTML)>=parseInt(day.innerHTML)){
            day.innerHTML= valid5.innerHTML;
        }
        else if(parseInt(valid5.innerHTML)<parseInt(day.innerHTML)){
            day.innerHTML=parseInt(day.innerHTML)+" Day";
        }     
    }
    
})

buydata6.addEventListener("click",()=>{
    if(username.innerHTML==""||number.innerHTML==""){
        alert("please register first!")
    }
    else if(parseFloat(buydata6.innerHTML)>res){
        alert("Insufficient Balance");
    }
   
    else {
        res -= parseFloat(buydata6.innerHTML);
        amountvalue.innerHTML=res+"TK";

        updatedata += parseFloat(data6.innerHTML);
        internetvalue.innerHTML=updatedata+" GB";

        if(parseInt(valid6.innerHTML)>=parseInt(day.innerHTML)){
            day.innerHTML= valid6.innerHTML;
        }
        else if(parseInt(valid6.innerHTML)<parseInt(day.innerHTML)){
            day.innerHTML=parseInt(day.innerHTML)+" Day";
        }     
    }
    
})

buydata7.addEventListener("click",()=>{
    if(username.innerHTML==""||number.innerHTML==""){
        alert("please register first!")
    }
    else if(parseFloat(buydata7.innerHTML)>res){
        alert("Insufficient Balance");
    }
   
    else {
        res -= parseFloat(buydata7.innerHTML);
        amountvalue.innerHTML=res+"TK";

        updatedata += parseFloat(data7.innerHTML);
        internetvalue.innerHTML=updatedata+" GB";

        if(parseInt(valid7.innerHTML)>=parseInt(day.innerHTML)){
            day.innerHTML= valid7.innerHTML;
        }
        else if(parseInt(valid7.innerHTML)<parseInt(day.innerHTML)){
            day.innerHTML=parseInt(day.innerHTML)+" Day";
        }     
    }
    
})

buydata8.addEventListener("click",()=>{
    if(username.innerHTML==""||number.innerHTML==""){
        alert("please register first!")
    }
    else if(parseFloat(buydata8.innerHTML)>res){
        alert("Insufficient Balance");
    }
   
    else {
        res -= parseFloat(buydata8.innerHTML);
        amountvalue.innerHTML=res+"TK";

        updatedata += parseFloat(data8.innerHTML);
        internetvalue.innerHTML=updatedata+" GB";

        day.innerHTML=valid8.innerHTML;
 
    }
    
})
