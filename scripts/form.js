function form(){
	var sex 		= document.getElementById("sex")
		,name 		= document.getElementById("name")
		,surname 	= document.getElementById("surname")
		,months 	= document.getElementById("months")
		,msg 		= document.getElementById("msg")
		;
		
	console.log(sex.value, name.value, surname.value, months.value, msg.value);
	msg.style.boxShadow = "none";
	
		/*if(operators.value == "+"){
			result.value = (+ num1.value) + (+ num2.value);
		}
		else if(operators.value == "-"){
			result.value = (+ num1.value) - (+ num2.value);
		}
		else if(operators.value == "*"){
			result.value = (+ num1.value) * (+ num2.value);
		}
		else if(operators.value == "/"){
			if(+ num2.value){
				result.value = (+ num1.value) / (+ num2.value);
			}
			else{
				result.value = "";
				msg.style.boxShadow = "0 0 3px #ff0000";
			}
		}*/
		
}

var btn = document.getElementById("msg_btn");
btn.onclick = form;