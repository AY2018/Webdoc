document.getElementById('unclickableLink').addEventListener('click', function(event) {
    event.preventDefault();
  });

  document.getElementById('unclickableLink2').addEventListener('click', function(event) {
    event.preventDefault();
  });

function closeNotif() {
    var notif = document.querySelector('.notif');
    var mail = document.getElementById('mail');

    // Apply reverse animation
    notif.style.animation = 'notifSlideOut 0.5s ease-in-out forwards';
     mail.style.display = 'block';

    // Wait for the reverse animation to complete
    setTimeout(function() {
        // After the animation completes, hide the notification
        notif.style.display = 'none';

        // Optionally, reset the animation property
        // This ensures the slide-in animation can be replayed in the future if needed
        notif.style.animation = null;

        // Show the mail element
       
    }, 500); // This timeout should match the duration of the slide-out animation
}


