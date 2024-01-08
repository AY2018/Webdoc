document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('brainAudio');
  
  //  audio.play();
  
  // When audio ends, display the h2 and the bottom div
  audio.onended = function() {
    document.querySelector('.brainstormingContent .top h2').style.display = 'block';
    document.getElementById('bottom').style.display = 'block';
  };


  // Card interactives


  let lastClickedWrapper = null;
  let correctCardValidated = false;
  const wrappers = document.querySelectorAll('.wrapper');
  const validateButton = document.getElementById('validateBtn');
  const nextStageLink = document.querySelector('.bottom a');

  // Hide the next stage link initially
  nextStageLink.style.display = 'none';

  // Add click event listeners to all card wrappers
  wrappers.forEach(wrapper => {
    wrapper.addEventListener('click', function() {
      const cardDiv = wrapper.querySelector('.card');

      // If the correct card is already validated, just flip the other cards
      if (correctCardValidated) {
        if (wrapper.id !== 'correct') {
          cardDiv.style.transform = cardDiv.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        }
        return;
      }

      // Remove .clicked class from the previously clicked wrapper, if any
      if (lastClickedWrapper) {
        lastClickedWrapper.querySelector('.front').classList.remove('clicked');
        lastClickedWrapper.querySelector('.card').style.transform = 'rotateY(0deg)';
      }

      // Add .clicked class to the currently clicked wrapper
      wrapper.querySelector('.front').classList.add('clicked');
      lastClickedWrapper = wrapper; // Remember the last clicked wrapper
    });
  });

  // Add click event listener to the validate button
  validateButton.addEventListener('click', function() {
    if (lastClickedWrapper) {
      const cardDiv = lastClickedWrapper.querySelector('.card');
      // Apply the rotation transformation to the last clicked wrapper
      cardDiv.style.transform = 'rotateY(180deg)';

      // Check if the correct card was clicked
      if (lastClickedWrapper.id === 'correct') {
        // Correct card was clicked, hide the validate button and show the next stage link
        correctCardValidated = true;
        validateButton.style.display = 'none';
        nextStageLink.style.display = 'block';
      }
    }
  });

});

