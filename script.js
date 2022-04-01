var listaobjeto = [];

var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var GUI = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 4, pontos: 0 };

rafa.pontos = calculapontos(rafa);
paulo.pontos = calculapontos(paulo);

listaobjeto.push(rafa);
listaobjeto.push(paulo);
listaobjeto.push(GUI);

vernatela(listaobjeto);

function calculapontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;

  return pontos;
}

function adicionarVitoria(indice) {
  listaobjeto[indice].vitorias++;
  listaobjeto[indice].pontos = calculapontos(listaobjeto[indice]);
  vernatela(listaobjeto);
}

function adicionarEmpate(indice) {
  listaobjeto[indice].empates++;
  listaobjeto[indice].pontos = calculapontos(listaobjeto[indice]);
  vernatela(listaobjeto);
}

function adicionarDerrota(indice) {
  listaobjeto[indice].derrotas++;
  vernatela(listaobjeto);
}

function vernatela(jogadores) {
  var elemento = "";

  jogadores.forEach(function (item, indice, array) {
    elemento += "<tr><td>" + jogadores[indice].nome + "</td>";
    elemento += "<td>" + jogadores[indice].vitorias + "</td>";
    elemento += "<td>" + jogadores[indice].empates + "</td>";
    elemento += "<td>" + jogadores[indice].derrotas + "</td>";
    elemento += "<td>" + jogadores[indice].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" +
      indice +
      ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" +
      indice +
      ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" +
      indice +
      ")'>Derrota</button></td>";
    elemento += "</tr>";
  });
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}