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
