let stage = localStorage.getItem('stage') !== null ? parseInt(localStorage.getItem('stage')) : 0;
let noteCount = localStorage.getItem('noteCount') !== null ? parseInt(localStorage.getItem('noteCount')) : 0;





// Function to update the stage both locally and (eventually) on the server
function updateStage(newStage) {
    stage = newStage;
    localStorage.setItem('stage', stage);

    // Update note count and notification display
    if (newStage === 9) {
        noteCount += 4;
    } else {
        noteCount++;
    }
    
    updateNoteNotification();
    localStorage.setItem('noteCount', noteCount);

    // Here, you would typically send an update to your server
    // e.g., updateUserStageOnServer(stage);
}

function completeStage(currentStage) {
    if (currentStage === stage) {
        updateStage(stage + 1);
        // Redirect to the next stage or update the page content as needed
        // window.location.href = '/path-to-next-stage';
    } else {
        console.log("You have already completed this stage.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Setup click listener for note link
    const noteLink = document.getElementById('noteLink');
    if (noteLink) {
        noteLink.addEventListener('click', function() {
            noteCount = 0;
            updateNoteNotification();
            localStorage.setItem('noteCount', noteCount);
        });
    }

    updateNoteNotification(); // Initial update on page load
});

function updateNoteNotification() {
    const noteNotif = document.getElementById('noteNotif');
    if (noteNotif) {
        if (noteCount > 0) {
            noteNotif.style.display = 'flex';
            noteNotif.textContent = noteCount; // Update the content with the note count
        } else {
            noteNotif.style.display = 'none';
        }
    }
}
