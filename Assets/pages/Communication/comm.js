document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('commVideo');
  const notesList = document.getElementById('notesList');
  const nextStageLink = document.getElementById('nextStageLink');
  const videoChoices = document.querySelector('.videoChoices');

  // Function to handle time updates for the first video
  let firstNoteAdded = false;
  let secondNoteAdded = false;
  let thirdNoteAdded = false;
  let fourthNoteAdded = false;
  let fifthNoteAdded = false;
  let sixthNoteAdded = false;

  // Function to handle time updates for the first video
  function handleFirstVideoTimeUpdate() {
    let currentTime = video.currentTime;

    if (currentTime >= 16 && !firstNoteAdded) {
      addNoteToList("Dossier de conception = la partie communication de notre projet, plusieurs étapes");
      firstNoteAdded = true;
    }
    if (currentTime >= 32 && !secondNoteAdded) {
      addNoteToList("Etape 1 = Expliquer le sujet et le justifier (Pourquoi ? En quoi est-ce cohérent avec le thème ?)");
      secondNoteAdded = true;
    }
    if (currentTime >= 68 && !thirdNoteAdded) {
      addNoteToList("Etape 2 = Recontextualiser le sujet de notre campagne ");
      thirdNoteAdded = true;
    }
    if (currentTime >= 91 && !fourthNoteAdded) {
      addNoteToList("Benchmarking = Analyser des campagnes similaires pour en tirer ce qui est marquant");
      thirdNoteAdded = true;
    }
  }

  // Add timeupdate and ended event listeners for the first video
  video.addEventListener('timeupdate', handleFirstVideoTimeUpdate);
  video.addEventListener('ended', handleOtherVideoEnded);

   function handleOtherVideoEnded() {
    videoChoices.style.display = 'flex';
    video.style.display = 'none';
  }

  // Function to add notes to the list
  function addNoteToList(note) {
    if (!notesList.textContent.includes(note)) {
      let listItem = document.createElement('li');
      listItem.textContent = note;
      notesList.appendChild(listItem);
      notesList.scrollTop = notesList.scrollHeight;

    }
  }



    // Function to play a different video based on the choice
window.playVideo = function(filename) {
  // Function to handle video ending for marie4.mp4
    function handleMarie4Ended() {
      nextStageLink.style.display = 'flex';
    }

    // Remove any previous 'ended' event listeners
    video.removeEventListener('ended', handleMarie4Ended);
    video.removeEventListener('ended', handleOtherVideoEnded);

    // Set new source and play video
    video.src = `../../img.video/${filename}`;
    video.load();
    video.play();
    videoChoices.style.display = 'none';
    video.style.display = 'flex';

  if (filename === 'marie4.mp4') {
    // Additional logic for "marie4.mp4"
    video.addEventListener('timeupdate', function() {
      if (video.currentTime >= 80 && !fifthNoteAdded) {
        addNoteToList("Stratégie de comm = plan de communication pour que la campagne réussisse : Définir la cible, le nom, le ton de la campagne, les éléments graphiques clés, et les supports de diffusion.");
        fifthNoteAdded = true; // Ensure the note is added only once
      }
      if (video.currentTime >= 105 && !sixthNoteAdded) {
        addNoteToList("Dossier de conception = Ligne conductrice du projet! ");
        sixthNoteAdded = true; // Ensure the note is added only once
      }
    });

    // Add specific 'ended' event listener for marie4.mp4
    video.addEventListener('ended', handleMarie4Ended);
  } else {
    // Add general 'ended' event listener for other videos
    video.addEventListener('ended', handleOtherVideoEnded);
  }
};

});

