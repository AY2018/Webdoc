// Define team members data
const teamMembers = [
  {
    name: 'Marie',
    preference: 'Communication',
    path: 'Bac scientifique - Prépa littéraire',
    quote: 'J’aime les projets vivants !',
    imageUrl: '../../img.video/marie-removebg-preview.png'
  },
  {
    name: 'Ayoub',
    preference: 'Développement Web',
    path: 'Bac S spé Maths – 2 ans en Management en Angleterre',
    quote: 'L’université, ce n’est pas les cours, c’est les personnes que tu côtoies au quotidien.',
    imageUrl: '../../img.video/ayoub-removebg-preview.png'
  },
  {
    name: 'Nicolas',
    preference: 'Audiovisuel',
    path: 'BAC STI2D',
    quote: "Les gros projets, y'a que ça de motivant !",
    imageUrl: '../../img.video/nico-removebg-preview.png'
  },
  {
    name: 'Erwan',
    preference: 'Création numérique',
    path: 'BAC STI2D - BUT Informatique',
    quote: 'Suis tes propres règles',
    imageUrl: '../../img.video/erwan-removebg-preview.png'
  }
];

// Function to update the main display with the clicked member's information
function updateMainDisplay(member) {
  const mainImage = document.getElementById('mainMemberImage');
  mainImage.src = member.imageUrl;
  mainImage.alt = `Photo de ${member.name}`;

  document.querySelector('.teamInfo .row h2').textContent = member.name;
  document.querySelectorAll('.teamInfo .row p')[0].textContent = member.preference;
  document.querySelectorAll('.teamInfo .row p')[1].textContent = member.path;
  document.querySelector('.teamInfo .citation').textContent = member.quote;

  updateGallery(member);
}

// Function to update the gallery, moving the previous main image to the thumbnails
function updateGallery(selectedMember) {
  const gallery = document.querySelector('.teamGallery');
  gallery.innerHTML = ''; // Clear existing thumbnails

  teamMembers.forEach(member => {
    if (member.name !== selectedMember.name) { // Exclude the selected member
      const img = document.createElement('img');
      img.src = member.imageUrl;
      img.alt = `Photo de ${member.name}`;
      img.loading = "lazy";
      img.onclick = () => updateMainDisplay(member);
      gallery.appendChild(img);
    }
  });
}

// Event listener to initialize the gallery with all members
document.addEventListener('DOMContentLoaded', function() {
  updateGallery(teamMembers[0]); // Start with the first member as the main display
});
