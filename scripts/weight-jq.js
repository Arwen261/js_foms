function getIW(sex, height, weight){
	var height 		= $("height")
		,weight 	= $("weight")
		,operators 	= $("operators")
		,result 	= $("result")
		;

	if(operators.val() == "male"){
		result.val( = Math.round(((+ height.val()) * 4 / 2.54 - 128) * 0.453));
	}
	if(operators.val() == "female"){
		result.val( = Math.round(((+ height.val()) * 3.5 / 2.54 - 108) * 0.453));
	}
}

$(".calc_btn").click(calculate);