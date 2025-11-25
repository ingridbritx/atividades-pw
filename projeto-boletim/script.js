// Importa o array de alunos do arquivo bancoDados.mjs
import { alunos } from "./bancoDados.mjs";

// Seleciona o container onde os cards dos alunos serão exibidos
const container = document.querySelector(".container");

// ----------------------------------------------------------
// Monta as linhas da tabela de notas de um aluno
// ----------------------------------------------------------
function boletim(notas) {
  let linhas = "";

  for (const item of notas) {
    linhas += `
      <tr>
        <td>${item.materia}</td>
        <td>${item.nota}</td>
      </tr>
    `;
  }

  return linhas;
}

// ----------------------------------------------------------
// Adiciona o comportamento de "virar" o card e mostrar a foto
// ----------------------------------------------------------
function avatar(card, foto, nome) {
  // Guarda o conteúdo original do card
  let cardClone = card.innerHTML;

  card.addEventListener("click", () => {
    // Alterna a classe rotate no card
    let isRotate = card.classList.toggle("rotate");

    if (isRotate) {
      // Verso: mostra a foto ocupando todo o card
      card.innerHTML = `<div class="card-content"></div>`;
      let content = card.querySelector(".card-content");

      content.style.width = "100%";
      content.style.height = "100%";
      content.style.backgroundImage = `url('${foto}')`;
      content.style.backgroundRepeat = "no-repeat";
      content.style.backgroundSize = "cover";
      content.style.backgroundPosition = "center";
      content.dataset.label = nome;
    } else {
      // Frente: restaura o conteúdo original
      card.innerHTML = cardClone;
      card.style.backgroundImage = "";
    }
  });
}

// ----------------------------------------------------------
// Calcula a média das notas de um aluno
// ----------------------------------------------------------
function media(notas = []) {
  let somaNotas = 0;
  let total = 0;

  for (const objNota of notas) {
    somaNotas += objNota.nota;
    total++;
  }

  return somaNotas / total;
}

// ----------------------------------------------------------
// Cria os cards de todos os alunos e joga no container
// ----------------------------------------------------------
function exibirAlunos(listaAlunos = alunos) {
  container.innerHTML = "";

  for (const aluno of listaAlunos) {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-content">
        <div class="head-card">
          <h1>${aluno.nome}</h1>
          <p>${aluno.idade} anos</p>
        </div>

        <div class="card-body">
          <h2>Notas</h2>
          <table class="boletim">
            <tr>
              <th>Disciplina</th>
              <th>Nota</th>
            </tr>
            ${boletim(aluno.notas)}
          </table>
        </div>

        <h2>Média Geral</h2>
        <p class="media">${media(aluno.notas).toFixed(2)}</p>
      </div>
    `;

    card.dataset.label = aluno.nome;

    container.appendChild(card);

    avatar(card, aluno.foto, aluno.nome);
  }
}

// Inicializa a tela exibindo todos os alunos
exibirAlunos(alunos);
