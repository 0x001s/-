/*
* @Author: 凛冬
* @Date:   2018-07-01
* @Last Modified by:   凛冬
* @Last Modified time: 2018-07-01
*/
//获取时间的脚本
function Times(){
	 var time = new Date();//创建一个date对象
	 var hour = time.getHours();//返回date对象的小时
	 var minutes = time.getMinutes();
	 var seconds = time.getSeconds();
	 //规范输出格式
	 if(hour<10)
	 {
	 	hour = "0"+hour;
	 }
	 if(minutes<10)
	 {
	 	minutes = "0"+minutes;
	 }
	 if(seconds<10)
	 {
	 	seconds = "0"+seconds;
	 }
	 //查找showtime元素并设置它的标签间内容
	 //alert(document.getElementById("ShowTime").innerHTML);
	 document.getElementById("ShowTime").innerHTML = hour+":"+minutes+":"+seconds;
	 //每1000毫秒调用一次
	 setTimeout('Times()',1000);
}

/*检查两次密码是否一致*/
	function CheckPwd(){
		var pwd1=document.getElementById("pw1").value;
		var pwd2=document.getElementById('pw2').value;
		if (pwd1!=pwd2){
			document.getElementById("error").style.display="block";
			return false;
		}
		else{
			document.getElementById("error").style.display="none";
			return true;
		}
	}

/*检查验证码*/
	function CheckCode(){
		var com = document.getElementById("code");
		var cont = com.value;
		var len = cont.length;
		if(len!=4){
			document.getElementById("er").style.display="block";
			return false;
		}
		else{
			document.getElementById("er").style.display="none";
			return true;
		}
	}

/*匹配邮箱格式*/
	function CheckEmail(){
		var str = document.getElementById("email").value;
		if(str.indexOf("@")==-1||str.indexOf(".")==-1){
			document.getElementById("error1").style.display="block";
			return false;
		}
		else{
			document.getElementById("error1").style.display="none";
			return true;
		}
	}

/*注册验证*/
	function Check(){
		var str1 = document.getElementById("error1");
		var str2 = document.getElementById("error");
		var str3 = document.getElementById("er");
		if(str1.style.display=="block" || str2.style.display=="block" || str3.style.display=="block"){
			alert("请检查输入内容!");
		}
		else{
			alert("提交成功！");
			window.location.href="index.html"
		}
	}

/*登录测试*/
	function Login(){
		var str = document.getElementById("er");
		var str1 = document.getElementById("ue").value;
		var str2 = document.getElementById("p1").value;
		if(str.style.display=="none"&&str1=="admin"&&str2=="admin")
		{
			alert("登录成功，欢迎您admin");
			window.location.href="index.html";
		}
		else if(str.style.display=="none"&&str1=="admin"){
			alert("密码错误");
		}
		else if(str.style.display=="block"){
			alert("验证码有误，请重新输入");
		}
		else{
			alert("用户名或密码错误");
		}
	}