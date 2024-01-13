document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('commVideo');
  const notesList = document.getElementById('notesList');
  const nextStageBtn = document.getElementById('nextStageBtn');


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
    nextStageBtn.style.display = 'block';
  }

  // Function to add notes to the list
  function addNoteToList(note) {
    if (!notesList.textContent.includes(note)) {
      let listItem = document.createElement('li');
      listItem.textContent = note;
      notesList.appendChild(listItem);
    }
  }
});

