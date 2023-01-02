document.getElementById("botaoenviar").addEventListener("click", validaFormulario)

function validaFormulario ( ) { if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("mensagem").value != ""){ alert("Pronto!Breve responderemos sua Mensagem")                                                       }else{
alert("Por favor, Preencha os campos Nome, Email e Mensagem")
}
}