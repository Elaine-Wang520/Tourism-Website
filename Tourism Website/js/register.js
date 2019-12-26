//用户名： 
var  usernameRegex = /^\w{3,15}$/;
//密码：  
var passwordRegex = /^\w{6,12}$/;  
//邮箱：  
var emailRegex = /^\w+@\w+(\.\w+)+$/;  
//电话号码：
var phoneRegex=/^\w{11}$/; 
function register(){ 
	var username = document.getElementById("username");
	var pass = document.getElementById("userPassword"); 
	var passre=document.getElementById("userRePassword");
	var userPhone=document.getElementById("userPhone");
	var userEmail=document.getElementById("userEmail");
	var username = document.getElementById("username");
   	var flag=1;
    if (usernameRegex.test(username.value)) {
        document.getElementById("require1").style.color="green";       
    } else{
    	alert("请确认用户名是否输入正确！");
    	flag=0;
    }  
    if (passwordRegex.test(pass.value)) {
        document.getElementById("require2").style.color="green";
 	}else{
 		flag=0;
 		alert("请确认是否输入正确密码！");
 	}
 	if(pass.value!=passre.value)
 	{
 		flag=0;
 		alert("两次输入密码不一致！");
 	}
 	if(passwordRegex.test(pass.value)&&pass.value==passre.value){
 		document.getElementById("require3").style.color="green";
 	}
 	if(phoneRegex.test(userPhone.value))
 	{
 		document.getElementById("require4").style.color="green";
 	}
 	if(!phoneRegex.test(userPhone.value)){
 		flag=0;
 		alert("请确认电话号码是否输入正确！");
 	}
 	if(emailRegex.test(userEmail.value)){
 		document.getElementById("require5").style.color="green";	
 	}
 	if(!emailRegex.test(userEmail.value)){
 		alert("请确认邮箱是否输入正确！");
 	}
 	if(flag){
 		alert("注册成功！");
 	}	
}