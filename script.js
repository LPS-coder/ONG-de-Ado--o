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

  if (nome.length < 3) return erro("Nome inválido");
  if (!email.includes("@")) return erro("Email inválido");
  if (telefone.length < 8) return erro("Telefone inválido");
  if (cpf === "") return erro("CPF obrigatório");
  if (cpfsExistentes.includes(cpf)) return erro("CPF já cadastrado");
  if (idade < 18) return erro("Você deve ser maior de idade");
  if (cidade === "") return erro("Cidade obrigatória");
  if (moradia === "") return erro("Selecione moradia");
  if (quintal === "") return erro("Informe sobre quintal");
  if (pet === "") return erro("Informe se já teve pet");
  if (isNaN(horas)) return erro("Horas inválidas");
  if (motivo.length < 10) return erro("Motivo muito curto");
  if (!termo) return erro("Aceite o termo");

});