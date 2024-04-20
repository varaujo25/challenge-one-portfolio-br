document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("formulario");
    var botaoSubmit = document.getElementById("botao-form");
    var inputs = document.querySelectorAll("#formulario input");
  
    formulario.onsubmit = function () {
      var email = document.getElementById("email").value;
      var nome = document.getElementById("nome").value;
      var assunto = document.getElementById("assunto").value;
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!regex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
      }
  
      if (nome.length > 50) {
        alert("O nome deve conter no máximo 50 caracteres.");
        return false;
      }
  
      if (assunto.length > 50) {
        alert("O assunto deve conter no máximo 50 caracteres.");
        return false;
      }
    };
  
    // Função para verificar se todos os campos estão preenchidos
    function verificarCampos() {
      var todosPreenchidos = Array.from(inputs).every(function (input) {
        return input.value.trim() !== "";
      });
      botaoSubmit.disabled = !todosPreenchidos;
    }
  
    inputs.forEach(function (input) {
      input.addEventListener("input", verificarCampos);
    });
  
    verificarCampos();
  });