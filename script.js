// PERSONNALISATION : modifiez les valeurs ci-dessous avec les vrais détails du mariage.
const WEDDING = {
  date: "2026-12-19T16:00:00+01:00",
  mapSearch: "Salle des fêtes Mahiddine, Sebdou, Tlemcen, Algérie",
  // Ajoutez ici le numéro WhatsApp du couple au format international, sans + ni espaces.
  // Exemple : 213555123456. Laissez vide pour ouvrir WhatsApp avec le message sans destinataire.
  whatsappNumber: ""
};

const countdownEls = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};
const countdownNote = document.getElementById("countdown-note");

function updateCountdown() {
  const difference = new Date(WEDDING.date).getTime() - Date.now();
  if (difference <= 0) {
    Object.values(countdownEls).forEach(el => el.textContent = "0");
    countdownNote.textContent = "Le grand jour est arrivé — célébrons ensemble !";
    return;
  }
  countdownEls.days.textContent = String(Math.floor(difference / 86400000)).padStart(3, "0");
  countdownEls.hours.textContent = String(Math.floor((difference % 86400000) / 3600000)).padStart(2, "0");
  countdownEls.minutes.textContent = String(Math.floor((difference % 3600000) / 60000)).padStart(2, "0");
  countdownEls.seconds.textContent = String(Math.floor((difference % 60000) / 1000)).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Lien vers Google Maps : remplacez WEDDING.mapSearch par l'adresse exacte de la salle.
document.getElementById("map-link").href =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(WEDDING.mapSearch);

// Menu mobile.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  menuToggle.textContent = "☰";
}));

// Galerie avec agrandissement des images.
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.showModal();
  });
});
document.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) lightbox.close();
});

// RSVP : prépare un message WhatsApp. Rien n'est envoyé sans action de l'invité.
document.getElementById("rsvp-form").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("guest-name").value.trim();
  const attendance = document.getElementById("attendance").value;
  const count = document.getElementById("guest-count").value;
  const note = document.getElementById("message").value.trim();
  const feedback = document.getElementById("form-feedback");
  if (!name) return;

  const message = [
    "Bonjour Djihane et Anes !",
    "Je suis " + name + ".",
    "Réponse à l'invitation : " + attendance,
    "Nombre de personnes : " + (attendance.startsWith("Oui") ? count : "0"),
    note ? "Mon message : " + note : "",
    "À bientôt !"
  ].filter(Boolean).join("\n");

  const phone = WEDDING.whatsappNumber.replace(/\D/g, "");
  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  feedback.textContent = phone
    ? "WhatsApp va s'ouvrir avec votre réponse. Appuyez sur Envoyer pour la transmettre."
    : "Ajoutez le numéro WhatsApp du couple dans script.js pour adresser automatiquement la réponse. WhatsApp va s'ouvrir avec le message préparé.";
  window.open(url, "_blank", "noopener,noreferrer");
});
