const perguntasHarryPotter = [ 
  {
    pergunta: "Qual é o nome completo do personagem principal da série Harry Potter?",
    respostas: [
      "Harry James Potter",
      "Harry Sirius Potter",
      "Harry Alvo Potter"
    ],
    respostaCorreta: 0,
    respostasErradas: [1, 2],
  },
  {
    pergunta: "Qual é a casa em Hogwarts à qual Harry Potter pertence?",
    respostas: [
      "Grifinória",
      "Sonserina",
      "Corvinal"
    ],
    respostaCorreta: 0,
    respostasErradas: [1, 2],
  },
  {
    pergunta: "Qual é o animal de estimação de Harry Potter?",
    respostas: [
      "Coruja",
      "Gato",
      "Sapo"
    ],
    respostaCorreta: 0,
    respostasErradas: [1, 2],
  },
  {
    pergunta: "Qual é o nome do diretor de Hogwarts durante a maior parte da série?",
    respostas: [
      "Alvo Dumbledore",
      "Severo Snape",
      "Minerva McGonagall"
    ],
    respostaCorreta: 0,
    respostasErradas: [1, 2],
  },
  {
    pergunta: "Qual é a matéria preferida de Harry Potter em Hogwarts?",
    respostas: [
      "Poções",
      "Defesa Contra as Artes das Trevas",
      "Quadribol"
    ],
    respostaCorreta: 2,
    respostasErradas: [1, 2],
  },
  {
    pergunta: "Qual é o nome do vilão principal na série Harry Potter?",
    respostas: [
      "Lord Voldemort",
      "Bellatrix Lestrange",
      "Dolores Umbridge"
    ],
    respostaCorreta: 0,
    respostasErradas: [1, 2],
  },
  {
    pergunta: "Qual é a varinha mágica de Harry Potter feita de?",
    respostas: [
      "Azevinho e pena de fênix",
      "Carvalho e pelo de unicórnio",
      "Teixo e corda de coração de dragão"
    ],
    respostaCorreta: 0,
    respostasErradas: [1, 2],
  },
  {
    pergunta: "Qual é o nome do time de quadribol da casa de Harry Potter em Hogwarts?",
    respostas: [
      "Grifinória",
      "Lufa-Lufa",
      "Corvinal"
    ],
    respostaCorreta: 0,
    respostasErradas: [1, 2],
  },
  {
    pergunta: "Qual é o nome do elfo doméstico que é leal a Harry Potter?",
    respostas: [
      "Dobby",
      "Kreacher",
      "Winky"
    ],
    respostaCorreta: 0,
    respostasErradas: [1, 2],
  },
  {
    pergunta: "Qual é o nome do melhor amigo de Harry Potter?",
    respostas: [
      "Rony Weasley",
      "Hermione Granger",
      "Draco Malfoy"
    ],
    respostaCorreta: 0,
    respostasErradas: [1, 2],
  }
];

var sumResposta = 0;
const erros = new Set();
const acertos = new Set();
const totalPerguntas = perguntasHarryPotter.length;
const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');
const resultado = document.querySelector('#acertos span');
const acertosElement = document.querySelector('#acertos');

for (const item of perguntasHarryPotter) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.pergunta;

  for (let i = 0; i < item.respostas.length; i++) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = item.respostas[i];
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntasHarryPotter.indexOf(item));
    dt.querySelector('input').value = i;
    dt.querySelector('input').onchange = (event) => {
      const respostaSelecionada = parseInt(event.target.value);
      const right = respostaSelecionada === item.respostaCorreta;
      const errada = item.respostasErradas.includes(respostaSelecionada);

      if (right) {
        acertos.add(item);
        erros.delete(item);
      } else if (errada) {
        acertos.delete(item);
        erros.add(item);
      } else {
        acertos.delete(item);
        erros.delete(item);
      }

      sumResposta = erros.size + acertos.size;

      if(sumResposta === totalPerguntas){
        acertosElement.style.display = 'block';
      }
      
      resultado.textContent = acertos.size + ' de ' + totalPerguntas;
    };
    quizItem.querySelector('dl').appendChild(dt);
  }

  quizItem.querySelector('dl dt').remove();
  quiz.appendChild(quizItem);
}
