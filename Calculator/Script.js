//Plus Operation
addButton = document.getElementById("addButton");
addOperation = function(){
number1 = document.getElementById("num1").value;
number2 = document.getElementById("num2").value;
sum = (+number1) + (+number2);
result=document.getElementById("result");
result.innerText=sum;
}
addButton.addEventListener("click", addOperation);

//Minus Operation
subButton = document.getElementById("subButton");
subOperation = function(){
number1 = document.getElementById("num1").value;
number2 = document.getElementById("num2").value;
diff = (+number1) - (+number2);
result=document.getElementById("result");
result.innerText=diff;
}
subButton.addEventListener("click", subOperation);

//Multiplication Operation
mulButton = document.getElementById("mulButton");
mulOperation = function(){
number1 = document.getElementById("num1").value;
number2 = document.getElementById("num2").value;
mul = (+number1) * (+number2);
result=document.getElementById("result");
result.innerText=mul;
}
mulButton.addEventListener("click", mulOperation);

//Division Operation
divButton = document.getElementById("divButton");
divOperation = function(){
number1 = document.getElementById("num1").value;
number2 = document.getElementById("num2").value;
div = (+number1)/(+number2);
result=document.getElementById("result");
result.innerText=div;
}
divButton.addEventListener("click", divOperation);