const botao = document.getElementById("entrar");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const erroUsuario = document.getElementById("erroUsuario");
const erroSenha = document.getElementById("erroSenha");

botao.addEventListener("click", () => {

    if (usuario.value === "") {

        alert("Digite seu usuário.");

    } else if (senha.value === "") {

        alert("Digite sua senha.");

    } else {

        alert(`Bem-vinda, ${usuario.value}!`);

    }

});