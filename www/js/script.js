 var app = {
  inicio: function() {
  // alert("Hello! I am an alert box!!");
   //document.querySelector("#fechaNac").innerHTML = "Hello World!";
   var x = document.querySelectorAll("#tabla td");
   var aa = x[1].innerText;
   var bb = Date.parse(aa);
   //alert(aa);
   var edad = app.calcularEdad(aa);
   //alert(edad);
   x[3].innerText = edad;
		},
		
		
	calcularEdad: function(fecha) {
	var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
	},
		
		
  };

var imageData;
if ('addEventListener' in document){
	document.addEventListener('DOMContentLoaded', function(){
		app.inicio();
	}, false);
}

/*
function myFunction() {
  alert("Hello! I am an alert box!!");
}
document.getElementById("tabla").innerHTML = myFunction();*/
/*
function calcularEdad(fecha) {
	alert(fecha);
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

document.querySelector("#fechaNac").innerHTML = "Hello World!";
//var fecha = document.querySelector(".fechaNac").innerHTML;
document.querySelector("#miCampo").textContent = calcularEdad(fecha);*/

