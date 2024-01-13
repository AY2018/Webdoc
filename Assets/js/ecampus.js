const stageBoxes = {
    0: [
        { title: "Brief", href: "./Brief/brief.html", backgroundImage: "../img.video/brief.jpg", class: "guideBox" }, 
    ],
    1: [
        // New stage goes here
        { title: "Equipe", href: "./Equipe/equipe.html", backgroundImage: "../img.video/team.jpg"}
    ],
    2: [
        { title: "Brainstorming", href: "./Brainstorming/instructions.html", backgroundImage: "../img.video/brainstorming.jpg"}
    ],
    3: [
        { title: "Communication", href: "./Communication/comm.html", backgroundImage: "../img.video/comm.jpg", requiredStage: 3, images: ["../img.video/marie.jpg"] },
        
        { title: "Creation Numérique", href: "./Crea/crea.html", backgroundImage: "../img.video/crea.jpg", images: ["../img.video/erwan.jpg"], requiredStage: 4 },
        { title: "Pause", href: "./Pause/pause.html", backgroundImage: "../img.video/pause.jpg", requiredStage: 5 },
        { title: "Audiovisuel", href: "./Audiovisuel/audiovisuel.html", backgroundImage: "../img.video/audiovis.jpg", requiredStage: 6, images: ["../img.video/nico.jpg"] },
        { title: "Development Web", href: "./Developpement/dev.html", backgroundImage: "../img.video/dev.jpg", requiredStage: 7, images: ["../img.video/ayoub.jpg"] }
    ],
    8: [
        { title: "SAE Rendu", href: "link-to-sae-rendu.html" }
    ]
};


function createBoxElement(box) {
    const link = document.createElement('a');
    link.href = (!box.requiredStage || box.requiredStage <= stage) ? box.href : "#";
    link.className = (box.requiredStage && box.requiredStage > stage) ? 'unclickable' : '';

    // Apply custom class if it exists
    if (box.class) {
        link.classList.add(box.class);
    }

    const topSection = document.createElement('div');
    topSection.className = 'topSection';
    topSection.style.backgroundColor = box.bgColor;

    // Set background image if provided
    // Set background image only if the box is clickable
    if (!link.classList.contains('unclickable') && box.backgroundImage) {
        topSection.style.backgroundImage = `url('${box.backgroundImage}')`;
        topSection.style.backgroundSize = 'cover';
        topSection.style.backgroundPosition = 'center';
    }

    // Check if the box has images and create profileGallery
    if (!link.classList.contains('unclickable') && box.images && box.images.length > 0) {
        const profileGallery = document.createElement('section');
        profileGallery.className = 'profileGallery';
        box.images.forEach(imgPath => {
            const img = document.createElement('img');
            img.src = imgPath;
            img.alt = "photo de profil";
            profileGallery.appendChild(img);
        });
        topSection.appendChild(profileGallery);
    }

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

