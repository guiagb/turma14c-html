function filtrar(){
    fetch("http://localhost:8080/intervalo/"+document.getElementById("txtinicio").value+"/"+document.getElementById("txtfinal").value)
    .then(res=>res.json())
    .then(res=>montartabela(res))
    .catch(err=> {
      document.getElementById("tabela").innerHTML = 
      "<table class='table'>"+
      "<thead>"+
        "<tr>"+
          "<th scope='col'>Codigo</th>"+
          "<th scope='col'>Nome</th>"+
          "<th scope='col'>Artista</th>"+
        "</tr>"+
      "</thead>"+
      "<tbody>"+
      "</tbody>"+
      "</table>";
    });
}

function montartabela(lista){
    var resultado = 
    "<table class='table'>"+
  "<thead>"+
    "<tr>"+
      "<th scope='col'>Codigo</th>"+
      "<th scope='col'>Nome</th>"+
      "<th scope='col'>Artista</th>"+
    "</tr>"+
  "</thead>"+
  "<tbody>";
  /*
    "<tr>"+
      "<th scope='row'>1</th>"+
      "<td>Mark</td>"+
      "<td>Otto</td>"+
      "<td>@mdo</td>"+
    "</tr>"+
    "<tr>"+
      "<th scope='row'>2</th>"+
      "<td>Jacob</td>"+
      "<td>Thornton</td>"+
      "<td>@fat</td>"+
   "</tr>"+
    "<tr>"
      "<th scope='row'>3</th>"+
      "<td>Larry</td>"+
      "<td>the Bird</td>"+
      "<td>@twitter</td>"+
    "</tr>"+*/

  for(contador=0;contador<lista.length;contador++){
    resultado+=
    "<tr>"+
      "<th scope='row'>"+lista[contador].id+"</th>"+
      "<td>"+lista[contador].titulo+"</td>"+
      "<td>"+lista[contador].artista.nomeArtistico+"</td>"+
    "</tr>";
  }
  resultado+=
"</tbody>"+
"</table>";
document.getElementById("tabela").innerHTML=resultado;
}