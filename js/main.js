$(document).ready(function() {
    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
})

const form = document.getElementById('formulario');

function validaNome(nomeCompleto){
    const nomecomoArray = nomeCompleto.split(' ');
    return nomecomoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    var formEvalido = false;
    e.preventDefault();
    const nome = document.getElementById('nome')
    const telefone = document.getElementById('tel')
    const email = document.getElementById('email');
    const mensagem =document.getElementById('mensagem');
    const mensagemSucesso2 = ('Sua mensagem: '+ nome.value + ' Foi Enviada com sucesso: ');

    formEvalido = validaNome(nome.value)
    if(formEvalido){
        alert (mensagemSucesso2);
        nome.value = '';
        email.value = '';
        telefone.value = '';
        mensagem.value ='';
    }else{
        alert ('o nome nao esta completo');
    }
})