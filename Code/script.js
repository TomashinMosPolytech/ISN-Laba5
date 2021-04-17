function plus(){
	var num1, num2;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	$.ajax({
		type: "POST",
		url: "calculation.php",
		data: { numFirst: num1, numSecond: num2, opperation: "plus" },
		success: function(msg){
			document.getElementById('out1').innerHTML = msg;
		}
	});
}


function minus(){
	var num1, num2;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);


	$.ajax({
		type: "POST",
		url: "calculation.php",
		data: { numFirst: num1, numSecond: num2, opperation: "minus" },
		success: function(msg){
			document.getElementById('out1').innerHTML = msg;
		}
	});


}

function multiply(){
	var num1, num2;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);


	$.ajax({
		type: "POST",
		url: "calculation.php",
		data: { numFirst: num1, numSecond: num2, opperation: "multiply" },
		success: function(msg){
			document.getElementById('out1').innerHTML = msg;
		}
	});
}


function division(){
	var num1, num2;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	$.ajax({
		type: "POST",
		url: "calculation.php",
		data: { numFirst: num1, numSecond: num2, opperation: "division" },
		success: function(msg){
			document.getElementById('out1').innerHTML = msg;
		}
	});
}


function power(){
	var num1, num2;
	num1 = document.getElementById('a1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('a2').value;
	num2 = parseInt(num2);

	$.ajax({
		type: "POST",
		url: "calculation.php",
		data: { numFirst: num1, numSecond: num2, opperation: "power" },
		success: function(msg){
			document.getElementById('out2').innerHTML = msg;
		}
	});
}

function sqrt(){
	var num1, num2;
	num1 = document.getElementById('b1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('b2').value;
	num2 = parseInt(num2);


	$.ajax({
		type: "POST",
		url: "calculation.php",
		data: { numFirst: num1, numSecond: num2, opperation: "sqrt" },
		success: function(msg){
			document.getElementById('out3').innerHTML = msg;
		}
	});
}


function sin(){
	var num1, num2;
	num1 = document.getElementById('s1').value;
	num1 = parseInt(num1);


	
	$.ajax({
		type: "POST",
		url: "calculation.php",
		data: { numFirst: num1, numSecond: num2, opperation: "sin" },
		success: function(msg){
			document.getElementById('out4').innerHTML = msg;
		}
	});
}
function cos(){
	var num1, num2;
	num1 = document.getElementById('c1').value;
	num1 = parseInt(num1);


	$.ajax({
		type: "POST",
		url: "calculation.php",
		data: { numFirst: num1, numSecond: num2, opperation: "cos" },
		success: function(msg){
			document.getElementById('out5').innerHTML = msg;
		}
	});
}
function tg(){
	var num1, num2;
	num1 = document.getElementById('t1').value;
	num1 = parseInt(num1);


	$.ajax({
		type: "POST",
		url: "calculation.php",
		data: { numFirst: num1, numSecond: num2, opperation: "tg" },
		success: function(msg){
			document.getElementById('out6').innerHTML = msg;
		}
	});
}
function ctg(){
	var num1, num2;
	num1 = document.getElementById('ct1').value;
	num1 = parseInt(num1);


	$.ajax({
		type: "POST",
		url: "calculation.php",
		data: { numFirst: num1, numSecond: num2, opperation: "ctg" },
		success: function(msg){
			document.getElementById('out7').innerHTML = msg;
		}
	});

}
