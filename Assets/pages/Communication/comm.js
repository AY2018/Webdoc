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

  // Function to handle time updates for the first video
  function handleFirstVideoTimeUpdate() {
    let currentTime = video.currentTime;

    if (currentTime >= 9 && !firstNoteAdded) {
      addNoteToList("Première note");
      firstNoteAdded = true;
    }
    if (currentTime >= 14 && !secondNoteAdded) {
      addNoteToList("Deuxième note");
      secondNoteAdded = true;
    }
    if (currentTime >= 19 && !thirdNoteAdded) {
      addNoteToList("Troisième note");
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
      if (video.currentTime >= 10 && !fourthNoteAdded) {
        addNoteToList("Quatrième note");
        fourthNoteAdded = true; // Ensure the note is added only once
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

