function validar(){
    var nome = formuser.meunome.value;
    var email = formuser.meuemail.value;
    var senha = formuser.minhasenha.value;
    
    if (nome==""){
        alert("NOME OBRIGATORIO");
        formuser.meunome.focus();
        return false;
    }
    if (email=="" || email.indexOf("@")==-1){
        alert("EMAIL INVALIDO");
        formuser.meuemail.focus();
        return false;
    }
    if (senha=="" || senha.length<=5){
        alert("SENHA INVALIDA");
        formuser.meuemail.focus();
        return false;
    }
}