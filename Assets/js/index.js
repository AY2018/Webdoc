// Check if a stage is saved in local storage, if not initialize it to 0
let stage = localStorage.getItem('stage') !== null ? parseInt(localStorage.getItem('stage')) : 0;


stage = 6;
// Function to update the stage both locally and (eventually) on the server
function updateStage(newStage) {
    stage = newStage;
    localStorage.setItem('stage', stage);

    // Here, you would typically send an update to your server
    // e.g., updateUserStageOnServer(stage);
}


function completeStage(currentStage) {
    // Only increment the stage if the currentStage matches the global stage value
    if (currentStage === stage) {
        updateStage(stage + 1);

        // Redirect to the next stage or update the page content as needed
        // window.location.href = '/path-to-next-stage';
    } else {
        // Optionally, you could alert the user or handle this case differently
        console.log("You have already completed this stage.");
    }
}

