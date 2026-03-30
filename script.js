const form = document.getElementById("formAdocao");
const mensagem = document.getElementById("mensagem");

const cpfsExistentes = ["12345678900", "11111111111"];

form.addEventListener("submit", function(e) {
  e.preventDefault();
  mensagem.innerHTML = "";

  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;
  let cpf = document.getElementById("cpf").value;
  let idade = parseInt(document.getElementById("idade").value);
  let cidade = document.getElementById("cidade").value;
  let moradia = document.getElementById("moradia").value;
  let quintal = document.getElementById("quintal").value;
  let pet = document.getElementById("pet").value;
  let horas = parseInt(document.getElementById("horas").value);
  let motivo = document.getElementById("motivo").value;
  let termo = document.getElementById("termo").checked;

  function erro(msg) {
    mensagem.innerHTML = <p class="erro">${msg}</p>;
    return true;
  }
  
});