const stageBoxes = {
    0: [
        { title: "Brief", href: "./Brief/brief.html", bgColor: "red" }
    ],
    1: [
        // New stage goes here
        { title: "Equipe", href: "./Equipe/equipe.html", bgColor: "teal" }
    ],
    2: [
        { title: "Brainstorming", href: "./Brainstorming/instructions.html", bgColor: "blue" }
    ],
    3: [
        { title: "Communication", href: "./Communication/instructions.html", bgColor: "green", requiredStage: 3 },
        { title: "Creation Numérique", href: "link-to-creation.html", bgColor: "orange", requiredStage: 4 },
        { title: "Pause", href: "./Pause/pause.html", bgColor: "pink", requiredStage: 5 },
        { title: "Audiovisuel", href: "link-to-audiovisuel.html", bgColor: "purple", requiredStage: 6 },
        { title: "Development Web", href: "link-to-development.html", bgColor: "yellow", requiredStage: 7 }
    ],
    8: [
        { title: "SAE Rendu", href: "link-to-sae-rendu.html", bgColor: "cyan" }
    ]
};

function createBoxElement(box) {
    const link = document.createElement('a');
    link.href = (!box.requiredStage || box.requiredStage <= stage) ? box.href : "#";
    link.className = (box.requiredStage && box.requiredStage > stage) ? 'unclickable' : '';

    const topSection = document.createElement('div');
    topSection.className = 'topSection';
    topSection.style.backgroundColor = box.bgColor;

    const bottomSection = document.createElement('div');
    bottomSection.className = 'bottomSection';

    const h2 = document.createElement('h2');
    h2.textContent = box.title;

    bottomSection.appendChild(h2);
    link.appendChild(topSection);
    link.appendChild(bottomSection);

    return link;
}

function generateEcampusBoxes() {
    const ecampusGallery = document.querySelector('.ecampusGallery');
    ecampusGallery.innerHTML = ''; // Clear existing boxes

    for (let s = 0; s <= stage; s++) {
        if (stageBoxes[s]) {
            stageBoxes[s].forEach(box => {
                ecampusGallery.appendChild(createBoxElement(box));
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    generateEcampusBoxes();
});
