
document.addEventListener('DOMContentLoaded', function() {
  const notesList = document.getElementById('notesList');
  let hideChoices = false;
  let processingChoice1Sequence = false;


const audiovisuelConversation = [
  { text: "On a eu une bonne idée pour la vidéo. Comment on fait ?", sender: "mine", note: "Test Première note avant la question", delay: 100 },
  { text: "Alors, pour la réaliser, on va d’abord commencer par faire un storyboard. Tu sais ce que c’est ?", sender: "other", delay: 100 },
  { text: "Non, pas du tout. C’est quoi ?", sender: "mine", delay: 100 },
  { text: "Alors, le storyboard, c’est le plan du vidéo. On dessine les différentes scènes pour avoir une idée de ce que va donner notre vidéo. Ça permet d’imaginer à quoi elle va ressembler.", sender: "other", delay: 100 },
  { text: "Voici un exemple : …", sender: "other", delay: 100 },
  { text: "Il faut savoir dessiner ??!", sender: "mine", delay: 100 },
  { text: "Oui ! Enfin, pas besoin d’avoir le niveau des Beaux-Arts. Juste un croquis propre suffit.", note: "Test Duexième note avant la question", sender: "other", delay: 100 },
  { text: "Le storyboard est fini ! Viens, on va tourner.", sender: "other", delay: 100 },
  { text: "Allez !", sender: "mine", delay: 100 },
  { text: "Juste, viens en avance. Tu m’aideras à chercher les caméras.", sender: "other", delay: 100 },
  { text: "Vous filmez avec quoi ?", sender: "mine", delay: 100 }
];

const lastMessages = [
   { text: "C’est la meilleure caméra ! Elle filme même en 4K. Bon, pour la vidéo, Ayoub a une amie comédienne. Elle va venir à 14h pour qu’on tourne les scènes.", sender: "other", delay: 100 },
    { text: "Comment ça marche pour le tournage ?", sender: "mine", delay: 100 },
    { text: "D’abord, tu installes le plateau de tournage : les lumières, les caméras… Puis silence. Ça tourne !", sender: "other", delay: 100 },
    { text: "Regarde la vidéo, elle est sympa non ? Bon, là elle est brut mais il faut que je la monte.", note: "Test Première note APRES la question", sender: "other", delay: 100 },
    { text: "Avec quoi ?", sender: "mine", delay: 100 },
    { text: "J’utilise Da Vinci Resolve. On peut retoucher les couleurs, régler les sons… C’est très complet.", sender: "other", delay: 100 },
    { text: "Tu as appris tout ça où ? Tu faisais de l’audiovisuel au lycée ?", sender: "mine", delay: 100 },
    { text: "Non, j’ai tout appris en première année de MMI. C’est passionnant !", sender: "other", delay: 100 }
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
                    { text: "Un iPhone 13 suffit non ? J'en ai un et la caméra est excellente", sender: "mine", delay: 100 },
                    { text: "Nop my friend", sender: "other", delay: 100 }
                ];
                choice.remove(); // Remove the clicked choice
            } else if (choice.classList.contains('choice3')) {
                newMessages = [
                    { text: "Une caméra ciné parait cool", sender: "mine", delay: 100 },
                    { text: "Nop my friend, c'est trop là", sender: "other", delay: 100 }
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








