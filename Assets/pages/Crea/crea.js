const newMessagesAfterReturn = [
  { text: "C’est toi qui a choisi ces couleurs ?", sender: "mine", delay: 500, note: "Test Première note" },
  { text: "Oui, je me suis servi de Color Hunt. C’est un site qui répertorie des palettes. J’ai parcouru le site ai choisi mes palettes. J’hésitai un peu entre les trois palettes mais là je suis sûr de partir sur celle avec le rouge et noir.", sender: "other", delay: 500 },
  { text: "T’utilises d’autres sites pour les polices ?", sender: "mine", delay: 500 },
  { text: "Google Font et Adobe Font seront tes meilleurs amis ! Même si passer plusieurs minutes devant un écran à chercher une typo parmis des centaines, une fois que tu trouves la bonne typo, sa fait toute la différence. Tiens je viens de finir le logo et j’ai choisi les typographies.", sender: "other", delay: 500 },
  { text: "Donc t’as commencé à faire le design du site ?", sender: "mine", delay: 500, note: "Test Deuxième note" },
  { text: "Oui, j’ai commencé la maquette. C’est aussi une partie de la créa. La création d’une maquette se divise en 3 parties : D’abord, on commence par une arborescence. C’est un parcours de ton site. Ça ressemble à ça :", sender: "other", delay: 500 },
  { text: "<img src='../../img.video/crea1.png' alt='Arborescence' />", sender: "other", delay: 500 },
  { text: "Ensuite, tu fais des wireframes. Cela permet de voir comment seront structurées les pages du site web. C’est très schématique, on n’utilise ni les couleurs ni les typographies de la campagne. Ça ressemble à ça :", sender: "other", delay: 500 },
  { text: "<img src='../../img.video/crea1.png' alt='Wireframe' />", sender: "other", delay: 500 },
  { text: "ENFIN, tu fais enfin ta maquette. Tu reprends tes wireframes mais tu remplaces le contenu schématique par les vraies contenues : les vraies photos, les vraies couleurs, les vraies typographies… Voilà à quoi ça ressemble :", sender: "other", delay: 500 },
  { text: "<img src='../../img.video/crea1.png' alt='Mockup' />", sender: "other", delay: 500 },
  { text: "T’as fait ça avec quoi ?", sender: "mine", delay: 500 },
  { text: "Figma ! Je te le recommande vivement. En plus, c’est gratuit.", sender: "other", delay: 500 }, 
  { text: "Sur ce, je te laisse. Nicolas m'a dit qu'il te contactera très bientôt pour la partie Audiovisuelle", sender: "other", delay: 500 }, 
   {text: `<a onclick="completeStage(4)" href="../ecampus.html">Merci beaucoup, j'ai hâte de commencer l'audiovisuel <i class="fa-solid fa-angles-right"></i></a>`,
  sender: "mine",
  delay: 500 }  
];

document.addEventListener('DOMContentLoaded', function() {
  const notesList = document.getElementById('notesList');
  const notesContainer = document.getElementById('notesContainer');
  const palettes = document.querySelectorAll('.palette');
  const mockupImage = document.getElementById('mockup');
  const validateDiv = document.getElementById('validate');

   const conversation = [
  { text: "Salut, c’est Erwan, on passe à la créa ?", sender: "other", firstOther: true, note: "First noooote", delay: 100},
  { text: "Ok, je te suis !", sender: "mine", firstMine: true, delay: 100 },
  { text: "Je vais commencer l’identité visuelle de la campagne. La communication visuelle c’est super important.", sender: "other", firstOther: true, delay: 100 },
  { text: "Par exemple, tu vas à Carrefour. Tu as deux bouteilles d’eau au même prix. Comment tu vas faire ton choix ?.", sender: "other", delay: 100 },
  { text: "Tu vas choisir la bouteille d’eau qui te plait le plus visuellement parlant.", sender: "other", note: "Deuxième Nooote", delay: 100 },
  { text: "Ok, comment tu fais pour présenter tout ça ?", sender: "mine", firstMine: true, delay: 100 },
  { text: "Je fais une charte graphique!", sender: "other", firstOther: true, delay: 100 },
  { text: "C’est un document qui contient le logos, les couleurs de la campagne, les typographies…", sender: "other", delay: 100 },
  { text: "D’ailleurs, ça te dit de m’aider ? J’hésite entre 3 palettes de couleurs.", sender: "other", delay: 100 },
  { text: "Tu penses que laquelle colle le mieux à notre campagne ?", sender: "other", delay: 100 },
  { text: "<span onclick='startExercice()'>Choix de palettes</span>", sender: "other", delay: 100 },  
];




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
  } else if (returnAfterLastMessage) {
    Return();
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
        { text: "Perso, je pense que la A serait bien", sender: "mine", firstMine: true, delay: 100 },
        { text: "Hmm, Les couleurs ne représentent pas vraiment la gravité de la situation.", sender: "other", firstOther: true, delay: 100 },
        { text: "Beige et Blanc, c'est très claire, très pure. Or, on vise les harceleurs, il faut quelque chose de plus 'dark'", sender: "other", delay: 100 }
      ];  
      addMessagesSequentially(newMessages, 0);
        break;
        
      case 1: // Palette B
        newMessages = [
        {text: "Peut être la B ?", sender: "mine", firstMine: true, delay: 100 }, { text: "Hmm, Le noir me parait correct pour représenter la gravité de notre ton, j'aime bien.", sender: "other", firstOther: true, delay: 100},
  { text: "Mais je penses que mettre du blan tout cours ici est dommage, on peut ajouter une autre couleur beaucoup plus impactante", sender: "other", firstOther: true, delay: 100}
      ]; 
      addMessagesSequentially(newMessages, 0);
        break;
      case 2: // Palette C
         newMessages = [
        {text: "La C me parait pas mal", sender: "mine", firstMine: true, delay: 100 },  { text: "Le noir me parait correct pour représenter la gravité de notre ton, j'aime bien.", sender: "other", firstOther: true, delay: 1000},
  { text: "Le rouge en plus ajoute un aspet sanguin, qui fait peur et qui peut aussi faire allusion aux victimes qui souffrent. Parfait !", sender: "other", firstOther: true, delay: 1000}, 
  
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
  const notesContainer = document.getElementById('notesContainer'); 
  if (notesContainer) {
    notesContainer.style.display = 'none';
  }

  const createContainer = document.querySelector('.creaContainer');
  if (createContainer) {
    createContainer.classList.add('newContainer');
  }
}





