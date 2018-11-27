function getIW(sex, height, weight){
	/*var k = {
		"male" 		: [4, 128]
		,"female" 	: [3.5, 108]
	}
	,iw = Math.round((height * k[sex][0] / 2.54 - k[sex][1]) * 0.453)
	,diff.value = iw - weight
	;*/

	var weight = document.getElementById("weight")
		,height = document.getElementById("height")
		,operators 	= document.getElementById("operators")
		,result = document.getElementById("result")
		,k = {
   		"male"   : [4, 128]
   		,"female"  : [3.5, 108]
 		}
  		;

 result.value = Math.round(((+height.value)  k[sex.value][0] / 2.54 - k[sex.value][1])  0.453);

	/*if(operators.value == "male"){
		result.value = Math.round(((+ height.value) * 4 / 2.54 - 128) * 0.453);
	}
	if(operators.value == "female"){
		result.value = Math.round(((+ height.value) * 3.5 / 2.54 - 108) * 0.453);
	}*/
	/*console.log("Ваш идеальный вес", iw);
	if(diff.value < 0){
		console.log("Рекомендуем похудеть на", Math.abs(diff.value), "кг");
	}
	else if(diff.value > 0){
		console.log("Рекомендуем поправиться на", Math.abs(diff.value), "кг");
	}
	else {
		console.log("Поздравляем, вес идеальный");
	}*/
}

var btn = document.getElementById("calc_btn");
btn.onclick = getIW;