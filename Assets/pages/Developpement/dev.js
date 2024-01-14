document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('commVideo');
  const notesList = document.getElementById('notesList');
  const nextStageBtn = document.getElementById('nextStageBtn');


  // Function to handle time updates for the first video
  let note1 = false;
  let note2 = false;
  let note3 = false;
  let note4 = false;
  let note5 = false;
  let note6 = false;
  let note7 = false;
  let note8 = false;

  // Function to handle time updates for the first video
  function handleFirstVideoTimeUpdate() {
    let currentTime = video.currentTime;

    if (currentTime >= 30 && !note1) {
      addNoteToList("C'est mieux de commencer le code après avoir récupéré les maquettes.");
      note1 = true;
    }
    if (currentTime >= 39 && !note2) {
      addNoteToList("CMS = Permet de créer un site sans savoir coder.");
      note2 = true;
    }
    if (currentTime >= 78 && !note3) {
      addNoteToList("Débouchés en dev : Master/École d'Ingé --> Développeur front/back/full-stack");
      note3 = true;
    }
    if (currentTime >= 88 && !note4) {
      addNoteToList("Dév front = Il code la partie visible du site (l'interface).");
      note4 = true;
    }
    if (currentTime >= 95 && !note5) {
      addNoteToList("Dév back = Il code la partie invisible du site (ex : le processus de connexion à un compte en ligne).");
      note5 = true;
    }
    if (currentTime >= 103 && !note6) {
      addNoteToList("Dév full-stack = Front + Back");
      note6 = true;
    }
    if (currentTime >= 141 && !note7) {
      addNoteToList("Côté front du site = HTML (architecture) + CSS (style) + JavaScript (ajoute de l'interactivité dans le site).");
      note7 = true;
    }
    if (currentTime >= 160 && !note8) {
      addNoteToList("Côté back = SQL (la base de données) + PHP (pour envoyer l'information de la base de données au front qui va l'afficher).");
      note8 = true;
    }

  }

  // Add timeupdate and ended event listeners for the first video
  video.addEventListener('timeupdate', handleFirstVideoTimeUpdate);
  video.addEventListener('ended', handleOtherVideoEnded);

   function handleOtherVideoEnded() {
    nextStageBtn.style.display = 'block';
  }

  // Function to add notes to the list
  function addNoteToList(note) {
    if (!notesList.textContent.includes(note)) {
      let listItem = document.createElement('li');
      listItem.textContent = note;
      notesList.appendChild(listItem);
    }
    notesList.scrollTop = notesList.scrollHeight;
  }
});

