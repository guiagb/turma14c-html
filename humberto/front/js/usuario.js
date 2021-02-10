function carregarusuario(){
    var usuario = localStorage.getItem("usuariologado");
    if(usuario==null){
        window.location="login.html";
    }else{
        var usuariojson = JSON.parse(usuario);
        document.getElementById("foto").innerHTML =
        "<img src=imagens/"+usuariojson.foto+">";

        document.getElementById("dados").innerHTML =
        "<h3>"+usuariojson.nome+"</h3>" + 
        "<h3>"+usuariojson.email+"</h3>" ;

        document.title = "Bem vindo, "+usuariojson.nome;
    }
}

function logar() {
    var userjson = {
        email: document.getElementById("txtemail").value,
        senha: document.getElementById("txtsenha").value
    };
    var pacote = {
        method: "POST",
        body: JSON.stringify(userjson),
        headers: {
            "content-type": "application/json"
        }
    };

    fetch("http://localhost:8080/login", pacote)
        .then(res => res.json())
        .then(res => { 
            localStorage.setItem("usuariologado",JSON.stringify(res));
            window.location="usuario.html"; 
        })
        .catch(err => { window.alert("Usuário ou senha inválido"); });
}   