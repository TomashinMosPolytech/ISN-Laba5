<?php 

$number1 = $_POST["numFirst"];
$number2 = $_POST["numSecond"];

switch ($_POST["opperation"]){
	case 'plus':
	echo $number1+ $number2;
	break;
	case 'minus':
	echo $number1- $number2;
	break;
	case 'multiply':
	echo $number1* $number2;
	break;
	case 'division':
	echo $number1/ $number2;
	break;
	case 'power':
	echo pow($number1, $number2);
	break;
	case 'sqrt':
	echo pow($number2, 1/$number1);
	break;
	case 'sin':
	echo sin($number1);
	break;	
	case 'cos':
	echo cos($number1);
	break;
	case 'tg':
	echo tan($number1);
	break;
	case 'ctg':
	echo 1/tan($number1);
	break;							
	default:
				# code...
	break;
}
?>
