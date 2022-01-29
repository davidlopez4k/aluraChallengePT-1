	let pega= document.getElementById('pega').addEventListener("click", comprobar);
	let encripta= document.getElementById('encripta').addEventListener("click", encriptar);
	let desencripta= document.getElementById('desencripta').addEventListener("click", desencriptar);
	let resultado= document.getElementById('copia').addEventListener("click", copiar);
	let recarga= document.getElementById('recarga').addEventListener("click", recargar);
	let respuesta= document.getElementById('respuesta');
	let mensaje= document.getElementById('mensaje');
	let instrucciones= document.getElementById('instrucciones');
	let enEjecucion=false;

	
function encriptar(){
	if(enEjecucion==false){	
	let texto= document.getElementById('texto').value;

	texto = texto.toLowerCase();
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

	 texto = texto.replace (/e/g , "enter").replace (/i/g , "imes").replace (/o/g , "ober").replace (/u/g , "ufat").replace (/a/g , "ai");
       
	respuesta.value=texto;
	mensaje.innerHTML=" ";
	instrucciones.innerHTML="<a href='#!' class='collection-item'></span>Apartir de ahora no podrás dar clic en los botones de encriptar y desencriptar.</a><a href='#!' class='collection-item'></span>Al presionar clic en 'comprobar' podrás pasar el dato encriptado a la parte superior para realizar la verificacion del proceso.</a>";
	enEjecucion=true;	
}
}
function desencriptar(){
	if(enEjecucion==false){	
	let texto= document.getElementById('texto').value;
		
	texto = texto.toLowerCase();
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

	texto=texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
	respuesta.value=texto;
	mensaje.innerHTML=" ";
	instrucciones.innerHTML="<a href='#!' class='collection-item'></span>Apartir de ahora no podrás dar clic en los botones de encriptar y desencriptar.</a><a href='#!' class='collection-item'></span>Al presionar clic en 'comprobar' podrás pasar el dato encriptado a la parte superior para realizar la verificacion del proceso.</a>";
	enEjecucion=true;
}
}
function comprobar(){
	let respuesta2= document.getElementById('respuesta').value;
	mensaje.innerHTML="<a href='#!' class='collection-item'></span>Realiza la funcion opuesta a la que ejecutaste.</a>";
	document.getElementById('texto').value=respuesta2;
	document.getElementById('respuesta').value=" ";
	enEjecucion=false;
	instrucciones.innerHTML="";
}
function copiar(){
	let respuesta= document.getElementById("respuesta");
	respuesta.select();
	document.execCommand("copy");
	instrucciones.innerHTML="";
	mensaje.innerHTML="<a href='#!' class='collection-item'></span>Mensaje copiado.</a>";

}
function recargar(){
	location.reload();
}

//



