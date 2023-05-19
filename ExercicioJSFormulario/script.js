let email1
let email2
let senha1
let senha2
let endereco
let nome
let sobrenome

function enviar() {
    email1 = document.getElementById('inputEmail4').value;
    email2 = document.getElementById('inputEmail5').value;
    senha1 = document.getElementById('inputSenha4').value;
    senha2 = document.getElementById('inputSenha5').value;
    endereco = document.getElementById('inputAddress').value;
    nome = document.getElementById('inputNome5')
    sobrenome= document.getElementById('inputSobrenome5')
    if (email1 == "" || email2 == "" || senha1 == "" || senha2 == "" || endereco == "" || nome == "" || senha1 == "sobrenome") {
        alert('Preencha os campos em branco.')
    }
    else if (email1 == email2 && senha1 == senha2){}
    else{
        alert('Seu e-mail ou senha está invalido.')
    }
    }
