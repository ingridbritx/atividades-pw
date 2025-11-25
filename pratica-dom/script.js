// Pegando os elementos principais
const main = document.getElementById("conteudo");
const header = document.getElementById("topo");

/* ---------------- Exercício 1: criar elementos ---------------- */

const h2_1 = document.createElement("h2");
h2_1.textContent = "Exercício 1 — Elemento criado com JavaScript";

const p1 = document.createElement("p");
p1.textContent = "Este parágrafo foi criado com createElement e appendChild.";

main.appendChild(h2_1);
main.appendChild(p1);

/* ---------------- Exercício 2: alterar estilo com .style ---------------- */

const h2_2 = document.createElement("h2");
h2_2.textContent = "Exercício 2 — Alterar estilo com .style";

const p2 = document.createElement("p");
p2.textContent = "Clique no botão abaixo para mudar meu estilo.";

const botaoEstilo = document.createElement("button");
botaoEstilo.textContent = "Mudar estilo";

main.appendChild(h2_2);
main.appendChild(p2);
main.appendChild(botaoEstilo);

botaoEstilo.onclick = function () {
  p2.style.color = "blue";
  p2.style.fontSize = "20px";
  p2.style.fontWeight = "bold";
};

/* ---------------- Exercício 3: trocar atributo src da imagem ---------------- */

const h2_3 = document.createElement("h2");
h2_3.textContent = "Exercício 3 — Trocar atributo src da imagem";

const img = document.createElement("img");
img.src = "https://picsum.photos/150";
img.alt = "Imagem 1";
img.style.display = "block";
img.style.margin = "10px 0";

const botaoImg = document.createElement("button");
botaoImg.textContent = "Trocar imagem";

main.appendChild(h2_3);
main.appendChild(img);
main.appendChild(botaoImg);

let trocando = false;

botaoImg.onclick = function () {
  if (!trocando) {
    img.src = "https://picsum.photos/150?random=1";
    img.alt = "Imagem 2";
    trocando = true;
  } else {
    img.src = "https://picsum.photos/150";
    img.alt = "Imagem 1";
    trocando = false;
  }
};

/* ---------------- Exercício 4: mostrar texto digitado ---------------- */

const h2_4 = document.createElement("h2");
h2_4.textContent = "Exercício 4 — Mostrar o texto digitado";

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Digite algo aqui...";

const pResultado = document.createElement("p");
pResultado.textContent = "Você digitou: (nada ainda)";

main.appendChild(h2_4);
main.appendChild(input);
main.appendChild(pResultado);

input.oninput = function () {
  if (input.value.trim() === "") {
    pResultado.textContent = "Você digitou: (nada ainda)";
  } else {
    pResultado.textContent = "Você digitou: " + input.value;
  }
};

/* ---------------- Exercício 5: mudar cor do header ao rolar ---------------- */

// Criar conteúdo extra só para a página ter rolagem
for (let i = 0; i < 20; i++) {
  const paragrafoExtra = document.createElement("p");
  paragrafoExtra.textContent = "Linha extra para testar o scroll..." + (i + 1);
  main.appendChild(paragrafoExtra);
}

window.onscroll = function () {
  if (window.scrollY > 50) {
    header.style.background = "darkred";
  } else {
    header.style.background = "#333";
  }
};
