let num3 = 5;
let num4 = 10;

if (num3 < num4){
	alert("El numero " + num3 + " es menor que " + num4);
}else{
	alert("El numero " + num3 + " no es menor que " + num4);
}



let num1 = 49;
let num2 = 49;

if(num1==num2) {
    console.log(`El número1 ${num1} es igual a ${num2}`);
}else if(num1<num2){
    console.log(`El número1 ${num1} es menor que ${num2}`);
}else if(num1>num2){
    console.log(`El número1 ${num1} es mayor que ${num2}`);
}else{
    console.log(`Opción no válida`);
}


if(num1<num2 && num2>num1) { //(num1==num2)
    console.log(`El número1 ${num1} es menor que ${num2} y el número ${num1} es mayor a número2 ${num1}`);
}else if(num1<=num2 || !(num1<=num2)){
    console.log(`El número1 ${num1} puede que sea igual a ${num2} o el número1 ${num1} pero su resultado no es el esperado`);
}else{
    console.log(`Opción no válida`);
}
