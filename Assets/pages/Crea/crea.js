
let isExerciseStarted = false;
const newMessagesAfterReturn = [
  { text: "Le rouge en plus ajoute un aspect sanguin, qui fait peur et qui peut aussi faire allusion aux victimes qui souffrent. Parfait !", sender: "other", firstOther: true, delay: 1000 },
  { text: "C’est toi qui a choisi ces couleurs?", sender: "mine", firstMine: true, delay: 1000 },
  { text: "Oui, je me suis servi de Color Hunt. C’est un site qui répertorie des palettes. J’ai parcouru le site et je m’en suis inspiré pour créer ces 3 palettes.", sender: "other", firstOther: true, delay: 1000 },
  { text: "J’hésitai un peu entre les trois palettes mais là je suis sûr de partir sur celle avec le rouge et noir. Merci 👍", sender: "other", delay: 1000 },
  { text: "Y a pas de quoi 😉", sender: "mine", firstMine: true, delay: 1000 },
  { text: "De ce que j’ai vu, t'as donc déjà commencé à faire le design du site?", sender: "mine", delay: 1000 },
  { text: "Oui, j’ai commencé la maquette. Bon ce n’est pas un site niveau professionnel parce que j’ai découvert tout ca cette année en Création Numérique, mais je suis assez fière de ce début de maquette.", sender: "other", firstOther: true, delay: 1000 },
  { text: "Un petit aperçu, en appliquant la palette que tu as sélectionnés tout à l'heure :", sender: "other", delay: 1000 },
  {text: "<img src='../../img.video/fullMaquete.png' alt='Image de la maquette du site' />", sender: "other", delay: 100 },
  { text: "Mais c’est incroyable! Donc on peut apprendre à faire ça dès la première année?", sender: "mine",firstMine: true, delay: 4000 },
  { text: "Oui! J’en profite pour t’expliquer comment ça marche:", firstOther: true, sender: "other", delay: 1000 },
  { text: "La création d’une maquette se divise en 3 parties:", sender: "other", delay: 1000 },
  { text: "D’abord, on commence par une arborescence = un parcours de ton site. Ça ressemble à ça :", sender: "other", note: "Arborescence = Comment est organisé un site web. Un peu comme un plan qui montre les différentes pages et comment on passe de l'une à l'autre.", delay: 1000 },
  {text: "<img src='../../img.video/arbo.png' alt='Schéma qui explique une Arborescence' />", sender: "other", delay: 100 },
  { text: "Donc c’est une liste de toutes les pages du site",firstMine: true, sender: "mine", delay: 4000 },
  { text: "A peu près. Il faut aussi prendre en compte la navigation (quelle page mène vers quelle page. Un exemple simple : tu ne peux accéder à la page d’un produit qu’après être allé sur la page catalogue d’un site en ligne)", sender: "other", firstOther: true, delay: 1000 },
  { text: "Ok je comprends",firstMine: true, sender: "mine", delay: 1000 },
  { text: "Ensuite, tu fais des wireframes.", sender: "other", firstOther: true, delay: 1000 },
  { text: "Ca permet de voir comment seront structurées les pages du site web. C’est très schématique, on n’utilise ni les couleurs ni les typographies de la campagne.", sender: "other", note: "Wireframe = Un brouillon de site web. C'est pour montrer où on met les choses (comme les boutons, les images), mais sans déco : pas de couleurs ni de jolis textes.", delay: 1000 },
  {text: "<img src='../../img.video/wireframe.png' alt='Schéma qui explique une Wireframe' />", sender: "other", delay: 100 },
  { text: "C’est une maquette mais sans styles",firstMine: true, sender: "mine", delay: 4000 },
  { text: "Exactement! Enfin, tu fais ta maquette. Tu reprends tes wireframes mais tu remplaces le contenu schématique par les vraies contenues : les vraies photos, les vraies couleurs, les vraies typographies…", sender: "other", firstOther: true, note: "Maquette = Le design final du site, mais juste en image. Ça montre à quoi le site va vraiment ressembler avant de le créer pour de vrai.", delay: 1000 },
  { text: "Une fois la maquette faite, Ayoub pourra développer le site en entier.", sender: "other", delay: 1000 },
  { text: "Tu l’as fait comment la maquette?",firstMine: true, sender: "mine", delay: 1000 },
  { text: "Figma! Je te le recommande vivement. En plus, c’est gratuit.", firstOther: true, sender: "other", note: "Pour construire une maquette = Figma (Gratuit)", delay: 1000 },
  { text: "C’est cool ca! Donc je peux commencer dès maintenant, de mon côté!",firstMine: true, sender: "mine", delay: 1000 },
  { text: "C’est le bon état d’esprit à avoir! Sur ce, je te laisse je vais aller dormir.", sender: "other", firstOther: true, delay: 1000 },
  { text: "D'ailleurs, Nicolas m’a dit qu’il comptait te contacter dans la soirée", sender: "other", delay: 1000 },
  { text: "Il t'a parlé de ce qu'on va faire en Audiovisuel?", sender: "other", delay: 1000 },
  { text: "Ah oui? je n’ai toujours pas reçu de message.",firstMine: true, sender: "mine", delay: 1000 },
  { text: "Merci beaucoup en tout cas! A demain 🫡", sender: "mine", delay: 1000 },
  { text: "Bonne nuit 😪", sender: "other", firstOther: true, delay: 1000 }
];

document.addEventListener('DOMContentLoaded', function() {
  const notesList = document.getElementById('notesList');
  const notesContainer = document.getElementById('notesContainer');
  const palettes = document.querySelectorAll('.palette');
  const mockupImage = document.getElementById('mockup');
  const validateDiv = document.getElementById('validate');
  let end = false;

const conversation = [
  { text: "Salut, c’est Erwan, on passe à la créa ?", sender: "other", firstOther: true, delay: 1000 },
  { text: "Ok, je te suis ! On va faire quoi ?", sender: "mine", firstMine: true, delay: 1000 },
  { text: "Je vais commencer l’identité visuelle de la campagne.", sender: "other", firstOther: true, delay: 1000 },
  { text: "La communication visuelle, c’est super important !", sender: "other", delay: 1000 },
  { text: "Par exemple, si tu vas à Carrefour et que tu as deux bouteilles d’eau au même prix.", sender: "other", delay: 1000 },
  { text: "Comment tu vas faire ton choix ?", sender: "other", delay: 1000 },
  { text: "Je vais choisir celle qui me plaît le plus visuellement, non ?", sender: "mine", firstMine: true, delay: 1000 },
  { text: "Exactement, c’est pourquoi c’est très important d’avoir une identité visuelle impactante qui donne l’ambiance de notre campagne.", sender: "other", firstOther: true, note: "Identité Visuelle = Ce qui fait qu'on reconnaît une marque, comme son look, grâce à ses couleurs et ses formes.", delay: 1000 },
  { text: "En parlant d’harcèlement et en ciblant l’harceleur, on doit donner une ambiance inquiétante, une ambiance d’alerte…", sender: "other", delay: 1000 },
  { text: "Ok, comment tu fais pour présenter tout ça ?", sender: "mine", firstMine: true, delay: 1000 },
  { text: "Je fais une charte graphique.", sender: "other", firstOther: true, delay: 1000 },
  { text: "C’est un document qui contient le logo, les couleurs de la campagne, les typographies…", sender: "other", note: "Charte Graphique = Un guide avec toutes les infos sur le style d'une marque, y compris le logo, les couleurs utilisées, les types de typographies...", delay: 1000 },
  { text: "D’ailleurs, ça te dit de m’aider ? J’hésite entre 3 palettes de couleurs. Tu penses que laquelle colle le mieux à notre campagne ?", sender: "other", delay: 1000 },
  { text: "<span onclick='startExercice()'>Choix de palettes</span>", sender: "other", delay: 1000 }, 
];


function scrollToBottom(){
  var mySection = document.getElementById('mySection');
  mySection.scrollTop = mySection.scrollHeight;
}




  window.startConv = function() {
    document.querySelector('.startBtnContainer').style.display = 'none';
    addMessagesSequentially(conversation, 0);
  };

function addMessagesSequentially(messages, index, returnAfterLastMessage = false) {
  if (index < messages.length) {
    const message = messages[index];
    const li = document.createElement('li');
    li.innerHTML = message.text;
    li.className = message.sender;
    if (message.firstMine) li.classList.add('firstMine');
    if (message.firstOther) li.classList.add('firstOther');

    const convContainer = document.getElementById('conv');
    convContainer.appendChild(li);

    // Automatically scroll to the bottom of the container
    convContainer.scrollTop = convContainer.scrollHeight;

    if (message.note) {
      addNoteToList(message.note);
    }

    setTimeout(function() {
      addMessagesSequentially(messages, index + 1, returnAfterLastMessage);
    }, message.delay);
  } else {
    if (returnAfterLastMessage) {
      Return();
    }
    // Add .end class to whatsappBot section if it's the end of newMessagesAfterReturn
    if (messages === newMessagesAfterReturn) {
      document.getElementById('whatsappBot').classList.add('end');
    }
  }
}


  function addNoteToList(note) {
    if (!notesList.textContent.includes(note)) {
      let listItem = document.createElement('li');
      listItem.textContent = note;
      notesList.appendChild(listItem);
    }
  }

  function handlePaletteClick(paletteIndex) {
    const imagePaths = [
      '../../img.video/crea1.png',
      '../../img.video/crea2.png',
      '../../img.video/crea3.png'
    ];
    mockupImage.src = imagePaths[paletteIndex];

    palettes.forEach(palette => {
      palette.classList.remove('selected');
    });

    palettes[paletteIndex].classList.add('selected');
  }

  palettes.forEach((palette, index) => {
    palette.addEventListener('click', function() {
      handlePaletteClick(index);
      scrollToBottom();
    });
  });

  if (validateDiv) {
    validateDiv.addEventListener('click', function() {
      handlePaletteValidation();
    });
  }

  function handlePaletteValidation() {
    const selectedPalette = document.querySelector('.palette.selected');
    let paletteIndex = Array.from(palettes).indexOf(selectedPalette);

    let newMessages = [];
    let returnAfterLastMessage = false;

    switch (paletteIndex) {
  case 0: // Palette A
    newMessages = [
      { text: "Perso, je pense que la Palette A serait bien.", sender: "mine", firstMine: true, delay: 1000 },
      { text: "Hmm, les couleurs ne représentent pas vraiment la gravité de la situation.", sender: "other", firstOther: true, delay: 1000 },
      { text: "Le beige et le blanc sont trop clairs et purs. Pour viser les harceleurs, il nous faut des teintes plus sombres.", sender: "other", delay: 1000 }
    ];  
    addMessagesSequentially(newMessages, 0);
    break;
    
  case 1: // Palette B
    newMessages = [
      { text: "Peut-être la Palette B ?", sender: "mine", firstMine: true, delay: 1000 },
      { text: "Hmm, le rouge me paraît correct pour représenter la gravité de notre ton, j'aime bien.", sender: "other", firstOther: true, delay: 1000 },
      { text: "Mais je pense que mettre juste du blanc ici est dommage. On pourrait ajouter une couleur plus impactante et en lien avec notre ton grave.", sender: "other", delay: 1000 }
    ]; 
    addMessagesSequentially(newMessages, 0);
    break;

  case 2: // Palette C
    newMessages = [
      { text: "La Palette C me paraît pas mal.", sender: "mine", firstMine: true, delay: 1000 },
      { text: "Le noir me paraît correct pour représenter la gravité de notre ton, j'aime bien.", sender: "other", firstOther: true, delay: 1000 }
    ]; 
    addMessagesSequentially(newMessages, 0);
    Return(); // Call Return immediately after adding Palette C messages
}

  }

  function Return() {
  const createContainer = document.querySelector('.creaContainer');
  if (createContainer) {
    createContainer.classList.remove('newContainer');
  }

  const notesContainer = document.getElementById('notesContainer');
  if (notesContainer) {
    notesContainer.style.display = 'flex';
  }

   setTimeout(function() {
        addMessagesSequentially(newMessagesAfterReturn, 0);
      }, 2000); // 2000 milliseconds delay // Start new messages
}
});





function startExercice() {
  if (isExerciseStarted) {
    return; 
  }

  // Proceed with the function logic
  const notesContainer = document.getElementById('notesContainer'); 
  if (notesContainer) {
    notesContainer.style.display = 'none';
  }

  const createContainer = document.querySelector('.creaContainer');
  if (createContainer) {
    createContainer.classList.add('newContainer');
  }

  // Set the flag to true as the exercise has now started
  isExerciseStarted = true;
}



