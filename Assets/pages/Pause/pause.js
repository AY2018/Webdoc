document.addEventListener('DOMContentLoaded', function() {
  const videoPause = document.getElementById('videoPause');
  const buttonSection = document.getElementById('buttonSection');
  const refreshButton = document.getElementById('refresh');

  // When the video ends, set the buttonSection's display to flex
  videoPause.addEventListener('ended', function() {
    buttonSection.style.display = 'flex';
  });

  // Refresh the video and hide the button section when the refresh icon is clicked
  refreshButton.addEventListener('click', function() {
    videoPause.currentTime = 0; // Reset the video
    videoPause.play(); // Start the video again
    buttonSection.style.display = 'none'; // Hide the button section
  });
});
