const perguntasHarryPotter = [
  {
    pergunta: "Qual é o nome completo do personagem principal da série Harry Potter?",
    respostas: [
      "Harry James Potter",
      "Harry Sirius Potter",
      "Harry Alvo Potter"
    ],
    respostaCorreta: 0
  },
  {
    pergunta: "Qual é a casa em Hogwarts à qual Harry Potter pertence?",
    respostas: [
      "Grifinória",
      "Sonserina",
      "Corvinal"
    ],
    respostaCorreta: 0
  },
  {
    pergunta: "Qual é o animal de estimação de Harry Potter?",
    respostas: [
      "Coruja",
      "Gato",
      "Sapo"
    ],
    respostaCorreta: 0
  },
  {
    pergunta: "Qual é o nome do diretor de Hogwarts durante a maior parte da série?",
    respostas: [
      "Alvo Dumbledore",
      "Severo Snape",
      "Minerva McGonagall"
    ],
    respostaCorreta: 0
  },
  {
    pergunta: "Qual é a matéria preferida de Harry Potter em Hogwarts?",
    respostas: [
      "Poções",
      "Defesa Contra as Artes das Trevas",
      "Quadribol"
    ],
    respostaCorreta: 2
  },
  {
    pergunta: "Qual é o nome do vilão principal na série Harry Potter?",
    respostas: [
      "Lord Voldemort",
      "Bellatrix Lestrange",
      "Dolores Umbridge"
    ],
    respostaCorreta: 0
  },
  {
    pergunta: "Qual é a varinha mágica de Harry Potter feita de?",
    respostas: [
      "Azevinho e pena de fênix",
      "Carvalho e pelo de unicórnio",
      "Teixo e corda de coração de dragão"
    ],
    respostaCorreta: 0
  },
  {
    pergunta: "Qual é o nome do time de quadribol da casa de Harry Potter em Hogwarts?",
    respostas: [
      "Grifinória",
      "Lufa-Lufa",
      "Corvinal"
    ],
    respostaCorreta: 0
  },
  {
    pergunta: "Qual é o nome do elfo doméstico que é leal a Harry Potter?",
    respostas: [
      "Dobby",
      "Kreacher",
      "Winky"
    ],
    respostaCorreta: 0
  },
  {
    pergunta: "Qual é o nome do melhor amigo de Harry Potter?",
    respostas: [
      "Rony Weasley",
      "Hermione Granger",
      "Draco Malfoy"
    ],
    respostaCorreta: 0
  }
];

const acerto = new Set()
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const totalPerguntas = perguntasHarryPotter.length
const resultado = document.querySelector('#acertos span')
let teste = 0
var visible = false 

for(const item of perguntasHarryPotter){
  const quizItem = template.content.cloneNode(true)
  const radios = document.querySelectorAll('input[type="radio"]');
  quizItem.querySelector('h4').textContent = item.pergunta

  for(let respostas of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = respostas
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntasHarryPotter.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(respostas)
    dt.querySelector('input').onchange = (event ) => {
      const right = event.target.value == item.respostaCorreta
      acerto.delete(item)
        if(right){          
          acerto.add(item)
        }
        verificarRadiosMarcados()
        console.log('Entrou')
        
for (let i = 0; i < radios.length; i++) {
  if (!radios[i].checked) {
    console.log(radios);
    console.log('Entrou2');
    return false; 
  }
}



        resultado.textContent = acerto.size + ' de ' + totalPerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)

    console.log(verificarRadiosMarcados)
  }

  quizItem.querySelector('dl dt').remove()
  quiz.appendChild(quizItem)
 

}