
document.addEventListener('DOMContentLoaded', function() {
  const notesList = document.getElementById('notesList');
  let hideChoices = false;
  let processingChoice1Sequence = false;


const audiovisuelConversation = [
  { text: "Helloooo, c’est Nicolas !", sender: "other", firstOther: true, delay: 1000 },
  { text: "Pour info, on commence à préparer la vidéo demain, ok ?", sender: "other", delay: 1000 },
  { text: "Pas de souci ! On commence par quoi ?", sender: "mine", firstMine: true, delay: 1000 },
  { text: "Alors, pour la réaliser, on va d'abord commencer par faire un storyboard. Tu sais ce que c’est ?", sender: "other", firstOther: true, delay: 1000 },
  { text: "Non, pas du tout. C’est quoi ?", sender: "mine", firstMine: true, delay: 1000 },
  { text: "Alors, le storyboard, c'est le plan de la vidéo. On dessine les différentes scènes pour avoir une idée de ce que va donner notre vidéo. Ça permet d'imaginer à quoi elle va ressembler.", sender: "other", firstOther: true, note: "Storyboard = Plan visuel de la vidéo, représentant les différentes scènes sous forme de dessins => Aide à visualiser et planifier le contenu et le déroulement de la vidéo.", delay: 1000 },
  { text: "Par exemple :", sender: "other", delay: 1000 },
  { text: "<img src='../../img.video/storyboardHard.jpg' alt='Image d'un storyboard' />", sender: "other", delay: 1000 },
  { text: "Il faut savoir dessiner ??!  😱 😱 😱", sender: "mine", firstMine: true, delay: 4000 },
  { text: "Oui ! Enfin, pas besoin d’avoir le niveau des Beaux-Arts. Un croquis propre suffit.", sender: "other", firstOther: true, delay: 1000 },
  { text: "<img src='../../img.video/storyboardSimple.png' alt='Image d'un storyboard simple' />", sender: "other", delay: 1000 },
  { text: "Du moment qu’on comprend ce qu’il se passe.", sender: "other", delay: 4000 },
  { text: "Parfait. C’est beaucoup plus facile comme ça.", sender: "mine", firstMine: true, delay: 1000 },
  { text: "Une fois le storyboard fini, et qu’on sait exactement ce qu’on va filmer, on passe au tournage.", sender: "other", firstOther: true, delay: 1000 },
  { text: "On va filmer avec quoi ?", sender: "mine", firstMine: true, delay: 1000 },
  { text: "À ton avis ?", sender: "other", firstOther: true, delay: 1000 }
];



const lastMessages = [
  { text: "La caméra 4K non ?", sender: "mine", firstMine: true, delay: 1000 },
  { text: "Oui. Cette caméra est super, elle fait de belles images, et notre client est un ministère, donc il faut y mettre les moyens pour la qualité !", sender: "other", firstOther: true, delay: 1000 },
  { text: "Bon, pour la vidéo, Ayoub a une amie comédienne. Elle viendra la semaine prochaine à 14h pour qu’on tourne les scènes.", sender: "other", delay: 1000 },
  { text: "Une comédienne carrément 😮", sender: "mine", firstMine: true, delay: 1000 },
  { text: "Elle est encore étudiante, mais oui, c’est génial qu’on puisse collaborer avec elle.", sender: "other", firstOther: true, delay: 1000 },
  { text: "Comment ça se passe pour le tournage ?", sender: "mine", firstMine: true, delay: 1000 },
  { text: "D’abord, tu installes le plateau de tournage avec les lumières, les caméras et le décor.", sender: "other", firstOther: true, delay: 1000 },
  { text: "Puis silence. Ça tourne ! 📹", sender: "other", note: "Processus de capture des scènes de la vidéo à l'aide d'une caméra => Utilisation de caméras, lumières, décors, et acteurs.", delay: 1000 },
  { text: "Et une fois qu’on a la vidéo, c’est fini ?", sender: "mine", firstMine: true, delay: 1000 },
  { text: "Non, là elle est brute, il faudra ajuster le son, les couleurs et même ajouter la voix off, c’est la post-production.", sender: "other", firstOther: true, note: "Post-Production = Étape de traitement de la vidéo après le tournage => Ajustement des couleurs, réglage du son, ajout de voix off.", delay: 1000 },
  { text: "Tu utilises quoi pour le montage ?", sender: "mine", firstMine: true, delay: 1000 },
  { text: "J’utilise Da Vinci Resolve. On peut retoucher les couleurs, régler les sons… C’est très complet.", sender: "other", firstOther: true, note: "Da Vinci Resolve = Logiciel de montage pour la post-production", delay: 1000 },
  { text: "Et on va en faire quoi de la vidéo ?", sender: "mine", firstMine: true, delay: 1000 },
  { text: "On va la mettre sur le site qu’Ayoub va coder.", sender: "other", firstOther: true, delay: 1000 },
  { text: "Ok ok", sender: "mine", firstMine: true, delay: 1000 },
  { text: "D’ailleurs, c’est quand qu’on commence le dev ?", sender: "mine", delay: 1000 },
  { text: "Dès qu’Erwan finit les maquettes, donc dans quelques jours", sender: "other", firstOther: true, delay: 1000 },
  { text: "Nickel, j’ai hâte.", firstMine: true, sender: "mine", delay: 1000 }
];


  window.startConv = function() {
    document.querySelector('.startBtnContainer').style.display = 'none';
    addMessagesSequentially(audiovisuelConversation, 0);
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
    convContainer.scrollTop = convContainer.scrollHeight;

    if (message.note) {
      addNoteToList(message.note);
    }

    setTimeout(function() {
      addMessagesSequentially(messages, index + 1, returnAfterLastMessage);
    }, message.delay);
  } else {
    // Add .end class to whatsappBot if processingChoice1Sequence is true
    if (processingChoice1Sequence) {
      const whatsappBot = document.getElementById('whatsappBot');
      if (whatsappBot) {
        whatsappBot.classList.add('end');
      }
      processingChoice1Sequence = false; // Reset the flag
    }

    // Show choices only if not hidden and not returning after last message
    if (!returnAfterLastMessage && !hideChoices) {
      const choicesContainer = document.getElementById('choices');
      if (choicesContainer) {
        choicesContainer.style.display = 'flex';
      }
    } else if (returnAfterLastMessage) {
      Return(); // Execute return action if applicable
    }
  }
}

const choices = document.querySelectorAll('#choices div');
  
  choices.forEach(choice => {
        choice.addEventListener('click', function handleChoiceClick() {
            let newMessages = [];

            if (choice.classList.contains('choice1')) {
                newMessages = lastMessages;
                hideChoices = true;
                document.getElementById('choices').style.display = 'none';
                processingChoice1Sequence = true; // Set the flag; // Remove event listener to prevent re-triggering
            } else if (choice.classList.contains('choice2')) {
    newMessages = [
        { text: "Un iPhone 13 suffit, non ? J'en ai un, et la caméra est excellente.", sender: "mine", firstMine: true, delay: 100 },
        { text: "Pour certains projets, ça peut être suffisant, en effet, mais dans notre cas, on préfère se donner les moyens.", sender: "other", firstOther: true, delay: 100 },
        { text: "Surtout qu'on peut directement avoir du bon matériel avec l'université !", sender: "other", delay: 100 }
    ];
    choice.remove(); // Remove the clicked choice
} else if (choice.classList.contains('choice3')) {
    newMessages = [
        { text: "Une caméra stabilisée, ça peut être bien, non ? Comme ça, il n'y aura pas de mouvements bizarres sur la vidéo.", sender: "mine", firstMine: true, delay: 100 },
        { text: "C'est une bonne idée, mais notre scène est statique. Il n'y a pas de mouvement, donc un trépied fixe suffit pour assurer la stabilité.", sender: "other", firstOther: true, delay: 100 }
    ];
    choice.remove(); // Remove the clicked choice
}


            // Send the new messages
            addMessagesSequentially(newMessages, 0);
        });
    });

  function addNoteToList(note) {
    if (!notesList.textContent.includes(note)) {
      let listItem = document.createElement('li');
      listItem.textContent = note;
      notesList.appendChild(listItem);
    }
  }





});








