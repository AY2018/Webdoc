
document.addEventListener("DOMContentLoaded", function() {
            // Get the element with id "notif"
            var notif = document.getElementById("notif");

            // Add the class "notifAppear" to the element
            notif.classList.add("notifAppear");

})

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
    notif.classList.remove('notifAppear');
    notif.classList.add('notifDisappear');
    mail.style.display = 'flex';
}


