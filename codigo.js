const texto = document.querySelector(".input-text");
const mensaje = document.querySelector(".mensaje");
const encriptar = document.querySelector(".encriptar");
const desencriptar=document.querySelector(".desencriptar")
const copiar=document.querySelector(".copiar")
let letras = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]

encriptar.addEventListener("click",(textoEncriptar)=>{
	textoEncriptar = texto.value;
	textoEncriptar=textoEncriptar.toLowerCase();
	texto.value= ""
	mensaje.style.backgroundImage = "none";
	for (let i=0;i<letras.length;i++){
		if(textoEncriptar.includes(letras[i][0])){
			textoEncriptar=textoEncriptar.replaceAll(letras[i][0],letras[i][1]);
		}
		mensaje.value = textoEncriptar;

	}
	
});

desencriptar.addEventListener("click",(textoDesencriptar)=>{
	textoDesencriptar = texto.value;
	textoDesencriptar=textoDesencriptar.toLowerCase();
	texto.value=""
	mensaje.style.backgroundImage = "none";
	for (let i=0;i<letras.length;i++){
		if(textoDesencriptar.includes(letras[i][1])){
			textoDesencriptar=textoDesencriptar.replaceAll(letras[i][1],letras[i][0]);
		}
		mensaje.value = textoDesencriptar;

	}
	
});


copiar.addEventListener("click",()=>{
	mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value= ""
    texto.value= ""
    mensaje.style.backgroundImage=""
})


