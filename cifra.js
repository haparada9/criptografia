var mensagem = document.getElementById("mensagem");
var mensagemCriptografada = document.getElementById("mensagemCriptografada");
var btnCod = document.getElementById("codif");
var btnDecod = document.getElementById("decod");
var select = document.getElementById("selecionarCifra");
var btnCriptografar = document.getElementById("btnCriptografar");


var alfabeto =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõ?!.,/;:()@-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõ?!.,/;:()@-_";

btnCriptografar.addEventListener("click", function(e){
    e.preventDefault();
        if(select.value == "cifraCesar"){
            if(btnCod.checked === true){
               mensagemCriptografada.value = codificaCesar();
            }else { 
                mensagemCriptografada.value = decodificaCesar();

            }
        }else { 
            if(btnCod.checked === true){
                mensagemCriptografada.value = btoa(mensagem.value);
             }else { 
                 mensagemCriptografada.value = atob(mensagem.value);
 
             }

        }
});
  function codificaCesar() {
    var incremento = document.getElementById("incremento").value;
    var mensagem = document.getElementById("mensagem").value;
    var textCripto = "";
  
    for (var i = 0; i < mensagem.length; i++) {
      for (var j = 0; j < alfabeto.length; j++)
        if (mensagem[i] == alfabeto[j]) {
          textCripto += alfabeto[j + parseInt(incremento)];
          break;
        } else if (mensagem[i] == " ") {
          textCripto += " ";
          break;
        }
    }
    return textCripto;
  }

  function decodificaCesar() {
    var incremento = document.getElementById("incremento").value;
    var mensagem = document.getElementById("mensagem").value;
    var textCripto = "";
  
    for (var i = 0; i < mensagem.length; i++) {
      for (var j = alfabeto.length; j > 0; j--)
        if (mensagem[i] == alfabeto[j]) {
          textCripto += alfabeto[j - parseInt(incremento)];
          break;
        } else if (mensagem[i] == " ") {
          textCripto += " ";
          break;
        }
    }
    return textCripto;
  }
  