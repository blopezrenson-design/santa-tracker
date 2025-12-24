const map = L.map('map').setView([48.85, 2.35], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

let destination;
let marker;
let santa;

map.on('click', e => {
  destination = e.latlng;

  if (marker) map.removeLayer(marker);
  marker = L.marker(destination).addTo(map);
});

document.getElementById("valider").onclick = () => {
  const heure = document.getElementById("heure").value;
  const message = document.getElementById("message");

  if (!destination || !heure) {
    message.textContent = "❗ Choisis un lieu et une heure";
    return;
  }

  message.textContent = `🎅 Le Père Noël arrivera à ${heure}`;

  if (santa) map.removeLayer(santa);

  santa = L.marker([destination.lat + 1, destination.lng], {
    icon: L.icon({
      iconUrl: "https://i.imgur.com/9zQZz9G.png",
      iconSize: [50, 50]
    })
  }).addTo(map);

  setTimeout(() => {
    santa.setLatLng(destination);
  }, 1000);
};
