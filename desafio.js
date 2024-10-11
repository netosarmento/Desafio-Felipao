const nivelHerois = [
  "Ferro",       // index 0 
  "Bronze",      // index 1
  "Prata",       // index 2
  "Ouro",        // 3
  "Platina",     // 4
  "Ascendente",  // 5
  "Imortal",     // 6
  "Radiante"     // 7
];

let nomesHerois = ["Batman", "Mulher gato", "Pinguim", "BatGirl", "Robin"];
let sexoHerois = ["M", "F", "F", "M", "M"];
let xpHerois = [9000, 10000, 8000, 1000];

let perfilHerói = [ 
    ["Batman", "M", 9000], // Quando posto em numero nao precisa de aspas
    ["Mulher gato", "F", 10000], // Quando posto em string precisa de aspas
    ["BatGirl", "F", 8000],
    ["Robin", "M", 1000],
]

for (let i = 0; i < xpHerois.length; i++) {
  let xp = xpHerois[i];
  let nivel;

  // Verificação de nível com base na XP
  if (xp < 1000) {
      nivel = nivelHerois[0]; // Usando index para indentificar nivel
  } else if (xp < 2000) {
      nivel = nivelHerois[1]; // Usando index para indentificar nivel
  } else if (xp < 5000) {
      nivel = nivelHerois[2]; // Usando index para indentificar nivel
  } else if (xp < 7000) {
      nivel = nivelHerois[3]; // Usando index para indentificar nivel
  } else if (xp < 8000) {
      nivel = nivelHerois[4]; // Usando index para indentificar nivel
  } else if (xp < 9000) {
      nivel = nivelHerois[5]; // Usando index para indentificar nivel
  } else if (xp < 10000) {
      nivel = nivelHerois[6]; // Usando index para indentificar nivel
  } else {
      nivel = nivelHerois[7]; // Usando index para indentificar nivel
  }

  // mostrando a mensagem no console
  console.log(`${nomesHerois[i]} é do nível ${nivel}`);
}
