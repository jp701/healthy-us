			function display(){
				var str=document.getElementById('cuname').value;
				window.alert(str+" ,you are registered now..");
			}
			var pass= document.getElementById('cpasswd');
			var msg= document.getElementById('msg');
			var lwcase= document.getElementById('lwcase');
			var upcase= document.getElementById('upcase');
			var number= document.getElementById('num');
			var special= document.getElementById('special');
			var length= document.getElementById('length');
			pass.onfocus= function(){
				msg.style.display= "block";
			}
			pass.onblur= function(){
				msg.style.display= "none";
			}
			pass.onkeyup= function(){
				if(pass.value.match(/[a-z]/g)){ //for lowercase char
					lwcase.style.color= "green";
				}
				else
					lwcase.style.color= "red";
					
				if(pass.value.match(/[A-Z]/g)){ //for upercase char
					upcase.style.color= "green";
				}
				else
					upcase.style.color= "red";
					
				if(pass.value.match(/[0-9]/g)){ //for numbers
					number.style.color= "green";
				}
				else
					number.style.color= "red";
					
				if(pass.value.match(/[\W]/g)){ //for special char
					special.style.color= "green";
				}
				else
					special.style.color= "red";	
				if(pass.value.length>=8 && pass.value.length<=12){// password length constraint
					length.style.color = "green";
				}
				else
					length.style.color = "red";
			}
			