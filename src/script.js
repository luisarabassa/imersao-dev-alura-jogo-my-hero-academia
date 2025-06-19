function jogar() {
  let listaHerois = [];
  let listaViloes = [];

  let forcaHerois = 0;
  let forcaViloes = 0;

  const herois = [
    "Deku (Midoriya)",
    "Dynamight (Bakugo)",
    "Shoto (Todoroki)",
    "Uravity (Uraraka)",
    "Hawks",
    "Sir Nighteye",
    "Endeavor",
    "All Might",
    "Lemillion (Togata)",
    "Best Jeanist"
  ];

  const viloes = [
    "Tomura Shigaraki",
    "Himiko Toga",
    "Twice",
    "Dabi",
    "Overhaul",
    "Muscular",
    "Kurogiri",
    "Stain",
    "All For One",
    "Gentle Criminal",
    "Gigantomachia",
    "Spinner",
    "Nomu"
  ];

  alert(
    "🚨 O treinamento de heróis foi iniciado! 🚨\nEscolha seus heróis e vença a batalha! PLUS ULTRA! 💥💪"
  );

  let escolhidos = [];

  for (let i = 0; i < 3; i++) {
    let menu = herois.map((h, index) => `${index + 1} - ${h}`).join("\n");
    let escolha = Number(
      prompt(
        `Escolha o número do herói para seu time (${i + 1} de 3):\n\n${menu}`
      )
    );

    if (
      escolha >= 1 &&
      escolha <= herois.length &&
      !escolhidos.includes(escolha)
    ) {
      let heroi = herois[escolha - 1];
      listaHerois.push(heroi);
      escolhidos.push(escolha);
      forcaHerois += Math.floor(Math.random() * 10) + 1;
    } else {
      alert("Número inválido ou herói já escolhido. Tente novamente.");
      i--;
    }
  }

  let viloesDisponiveis = [...viloes];
  for (let i = 0; i < 3; i++) {
    let aleatorio = Math.floor(Math.random() * viloesDisponiveis.length);
    listaViloes.push(viloesDisponiveis[aleatorio]);
    viloesDisponiveis.splice(aleatorio, 1);
    forcaViloes += Math.floor(Math.random() * 10) + 1;
  }

  alert(
    `🦸‍♂️ Time de Heróis: ${listaHerois.join(
      ", "
    )} \n💪 Força total: ${forcaHerois}`
  );
  alert(
    `🦹‍♂️ Time de Vilões: ${listaViloes.join(
      ", "
    )} \n👺 Força total: ${forcaViloes}`
  );

  if (forcaHerois > forcaViloes) {
    alert(
      `Parabéns! 🥳 Seu time de heróis venceu com força total! PLUS ULTRA! 🌠\n💪 Sua força: ${forcaHerois}\n👺 Força dos vilões: ${forcaViloes}`
    );
  } else if (forcaHerois < forcaViloes) {
    alert(
      `Os vilões dominaram... Os heróis, enfim, perderam. 🤕\n👺 Força dos vilões: ${forcaViloes}\n💪 Sua força: ${forcaHerois}`
    );
  } else {
    alert("⚖️ Empate! Todos lutaram com tudo que tinham!");
  }
}
