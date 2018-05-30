// JavaScript Document
function change(myid,mode){
	document.getElementById(myid).style.display=mode;
	if(mode == 'block'){//显示下拉菜单
		//设置下拉菜单所在div的边框
		document.getElementById(myid).style.border="1px solid #eee";
		document.getElementById(myid).style.borderTop="none";
		//设置鼠标划过的li的边框及背景颜色
		document.getElementById(myid).parentNode.style.backgroundColor="#fff";
		document.getElementById(myid).parentNode.style.border="1px solid #eee";
		document.getElementById(myid).parentNode.style.borderBottom="none";
	}
	else{
		//当不显示下拉列表时，鼠标划过的li的边框及背景颜色
		document.getElementById(myid).parentNode.style.backgroundColor="";
		document.getElementById(myid).parentNode.style.border="";
	}
}
/*table*/
	function changeColor(){
		//获取所有行
		var trs  = document.getElementById("tbl").getElementsByTagName("tr");
		//为偶数行添加class属性，且不包括标题行
		for(var i=2; i<trs.length; i=i+2){
			trs[i].className = "even";
		}
	}
/*login*/
	function Login(){
		alert("请先注册");
	}
/*检查两次密码*/
	function CheckPwd(){
		var pwd1=document.getElementById("pwd1").value;
		var pwd2=document.getElementById('pwd2').value;
		if (pwd1!=pwd2){
			document.getElementById("error").style.display="block";
			return false;
		}
		else{
			document.getElementById("error").style.display="none";
		}
	}
/*检查验证码*/
	function CheckCom(){
		var com = document.getElementById("com");
		var cont = com.value;
		var len = cont.length;
		if(len!=4){
			document.getElementById("error1").style.display="block";
			return false;
		}
		else{
			document.getElementById("error1").style.display="none";
		}
	}

	function submit(){
		alert("感谢您的提交");
	}

	function Show(){
		alert("本站含三个页面\n分别是本页面，注册页面和联系我们")
	}













