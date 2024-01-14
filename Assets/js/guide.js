document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('guide') === '1') {
        addGuide1();
    }
});



function addGuide1() {
    const ecampusGuide = document.getElementById('ecampusGuide');
    const ecampusContainer = document.getElementById('ecampusContainer');

    ecampusGuide.scrollIntoView();

    // Delay the execution of the rest of the function
    setTimeout(() => {
        if (ecampusGuide) {
            ecampusGuide.style.display = 'flex';
        }

        if (ecampusContainer) {
            ecampusContainer.classList.add('Guide1');
        }
    }, 100); // 100 milliseconds delay
}


function removeGuide1AddGuid2() {
    const ecampusContainer = document.getElementById('ecampusContainer');

    if (ecampusContainer) {
        ecampusContainer.classList.remove('Guide1');
        ecampusContainer.classList.add('Guide2');
    }
}


function removeGuide2AddGuid3() {
    const ecampusContainer = document.getElementById('ecampusContainer');

    if (ecampusContainer) {
        ecampusContainer.classList.remove('Guide2');
        ecampusContainer.classList.add('Guide3');
    }
}

function removeLastClass() {
    const ecampusGuide = document.getElementById('ecampusGuide');
    const ecampusContainer = document.getElementById('ecampusContainer');

    if (ecampusGuide) {
        ecampusGuide.style.display = 'none';
    }

    if (ecampusContainer) {
        ecampusContainer.classList.remove('Guide3');
    }
}

