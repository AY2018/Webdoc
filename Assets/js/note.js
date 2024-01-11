const notesData = {
    "Infos de Base": {
        title: "Infos de Base",
        content: [
            {
                subTitle: "Titre de subpart",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                // Add more properties as needed
            },
            // More subparts can be added here
        ]
    },
    "Brief": {
        title: "Brief",
        content: [
            {
                subTitle: "C'est bien",
                text: "Lorem, ipsum...",
                image: "../img.video/ayoub.png"
                // Add more properties as needed
            },
            // More subparts can be added here
        ]
    },
    "Spécialités": {
        title: "Spécialités",
        content: [
            {
                subTitle: "3 Spécialités en 2ème année",
                text: "Lorem, ipsum..."
            },
            // More subparts can be added here
        ]
    },
    "Brainstorming": {
        title: "Brainstorming",
        content: [
            {
                subTitle: "Qu'est ce que le Brainstorming ?",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                // Add more properties as needed
            },
            {
                subTitle: "Le thème :",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                // Add more properties as needed
            },
            {
                subTitle: "Sujet + Axe :",
                text: "Cyberbullying",
                // Add more properties as needed
            },
            // More subparts can be added here
        ]
    },
    "Communication": {
        title: "Communication",
        content: [
            {
                subTitle: "Qu'est ce que le Comm ?",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                // Add more properties as needed
            },
            {
                subTitle: "Recherche",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                // Add more properties as needed
            },
            {
                subTitle: "Pour ce sujet :",
                text: "On a choisit de partir sur un ton dark",
                // Add more properties as needed
            },
            // More subparts can be added here
        ]
    },

    "Création Numérique": {
        title: "Création Numérique",
        content: [
            {
                subTitle: "Sites/Logiciels",
                text: `<ul>
              <li>
                Color Hunt = Palettes de couleur
              </li>
              <li>
                Figma = Pour dessiner une maquette
              </li>
            </ul>`               
            },
            {
                subTitle: "Identité Visuelle",
                text: `L'identité visuelle est l'ensemble des éléments graphiques qui caractérisent une marque, une entreprise ou un projet. Elle permet à une entité d'être immédiatement reconnue parmi d'autres. Les aspects clés de l'identité visuelle comprennent: <br/><ul>
              <li>
                Couleurs = Chaque couleur véhicule une émotion ou une valeur. Par
                exemple, le bleu peut évoquer la confiance et la stabilité.
              </li>
              <li>
                Formes = Les formes utilisées dans le logo ou les visuels contribuent
                également à l'identité. Des formes douces peuvent évoquer
                l'accessibilité, tandis que des formes angulaires peuvent
                représenter la force.
              </li>
            </ul>`               
            },
            {
                subTitle: "Charte Graphique",
                text: `La charte graphique est un document de référence qui décrit les règles d'utilisation des éléments de l'identité visuelle d'une marque. Elle inclut généralement: <br/><ul>
              <li>
                Logos: Description des différentes versions du logo et des règles d'utilisation.

              </li>
              <li>
                Couleurs de la Campagne: Palette de couleurs principale et secondaire avec des codes spécifiques (comme les codes HEX en web).
                Typographies: Polices de caractères utilisées pour le texte, avec des directives sur la manière de les utiliser.
              </li>
            </ul>`
            },
            {
                subTitle: "Arborescence",
                text: `L'arborescence est la structure hiérarchique d'un site web. Elle décrit comment les différentes pages sont liées entre elles et organise l'information de manière logique. 
                <br/>
                Une bonne arborescence aide les utilisateurs à naviguer facilement sur le site et à trouver rapidement ce qu'ils cherchent.`, 
                image: "../img.video/arbo.png"
            },

            {
                subTitle: "Wireframe",
                text: `Un wireframe est un schéma basique qui représente la structure d'une page web ou d'une application. Il s'agit d'une étape importante dans la conception d'un site car elle permet de définir l'agencement des éléments sans se concentrer sur le design esthétique. Les wireframes sont généralement en noir et blanc, sans images ou couleurs.`, 
                image: "../img.video/wireframe.png"
            },

            {
                subTitle: "Maquette",
                text: `La maquette est une représentation visuelle plus détaillée d'une page web. Contrairement au wireframe, elle inclut des éléments de design tels que les couleurs, les images, et les typographies. La maquette donne une idée précise de ce à quoi ressemblera le site une fois développé.`, 
                image: "../img.video/fullMaquete.png"
            },
        ]
    },

    "Pause": {
        title: "Les conseils de Fabien et Charles",
        content: [
            {
                subTitle: "Fabien : Apprend de ton côté",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                // Add more properties as needed
            },
            {
                subTitle: "Charles : Apprend des autres",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                // Add more properties as needed
            }
            // More subparts can be added here
        ]
    },
    "Audiovisuel": {
        title: "Audiovisuel",
        content: [
            {
                subTitle: "Les différents types de caméras",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                // Add more properties as needed
            }
        ]
    },
    "Dév web": {
        title: "Dév web",
        content: [
            {
                subTitle: "Front VS Back",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
                // Add more properties as needed
            }
        ]
    },

    // Add other notes here
};

function generateNoteList() {
    const noteListElement = document.getElementById('noteList');
    noteListElement.innerHTML = ''; // Clear existing content

    let noteTitles = Object.keys(notesData);
    let displayedNotes = noteTitles.slice(0, stage + 1); // Include notes up to the current stage
    displayedNotes.reverse(); // Reverse the order of the notes

    displayedNotes.forEach(noteTitle => {
        const listItem = document.createElement('li');
        listItem.innerText = noteTitle;
        listItem.addEventListener('click', function(event) {
            // Update note content
            updateNoteContent(notesData[noteTitle]);

            // Remove .noteSelected from all notes
            document.querySelectorAll('#noteList li').forEach(li => {
                li.classList.remove('noteSelected');
            });

            // Add .noteSelected to the clicked note
            event.target.classList.add('noteSelected');
        });

        noteListElement.appendChild(listItem);
    });

    // Select the last note (which is now the first in the list) by default
    if (displayedNotes.length > 0) {
        const lastNote = noteListElement.firstChild;
        lastNote.classList.add('noteSelected');
        updateNoteContent(notesData[displayedNotes[0]]);
    }
}


function updateNoteContent(note) {
    let contentHtml = `<div class="noteContentHeader">
                         <h1>${note.title}</h1>
                         <hr />
                       </div>`;

    note.content.forEach(sub => {
        contentHtml += `<div class="noteContentSub">
                          <h2>${sub.subTitle}</h2>
                          <p>${sub.text}</p>`;

        if (sub.image) {
            contentHtml += `<img src="${sub.image}" alt="" />`;
        }

        contentHtml += `</div>`;
    });

    document.getElementById('noteContent').innerHTML = contentHtml;
}

document.getElementById('noteList').addEventListener('click', function(event) {
    const noteTitle = event.target.innerText;
    if (notesData[noteTitle]) {
        updateNoteContent(notesData[noteTitle]);
    }
});

window.onload = function() {
    generateNoteList();
    if (stage in notesData) {
        // Convert stage number to note title (e.g., 0 -> "Infos de Base")
        let noteTitle = Object.keys(notesData)[stage];
        updateNoteContent(notesData[noteTitle]);
    }
};
