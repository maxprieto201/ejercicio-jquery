//la calculadora debe realizar
//el cuadrado de un numero
//
//1. recuperar la referencia del boton utilizando $
//2. agregar el evento click al boton
//3. crear la funcion para realizar el calculo
//4. el resultado debe mostrarse en el elemento adecuado

$( "#btn1").click( function(ev){
	ev.preventDefault();
	let numero = $("#n1").val();
	// El objeto Math tiene varias funciones matemáticas
	let resultado = Math.pow(numero, 2);
	$(".res1").css("borderColor", "red");


$( ".res1").html(`${numero} <sup>2</sup> = ${resultado}`);

});

//segundo section

$("#btn2").click( function(ev){
	ev.preventDefault();
	let palabra = $("#palabra").val();

	$(".res2").text( palabra.length);
});