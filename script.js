function mostrarFormulario() {
  const form = document.getElementById("formulario-oferta");
  form.style.display = form.style.display === "none" ? "block" : "none";
  console.log("Le formulaire a été cliqué.");
}
function mostrarFormulario() {
  const form = document.getElementById("formulario-oferta");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

// Sélectionne les éléments
const formulario = document.getElementById("formulario-oferta");
const listaOfertas = document.getElementById("lista-ofertas");

// Quand on soumet une offre :
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  // On récupère les valeurs du formulaire
  const nombre = document.getElementById("nombre").value;
  const producto = document.getElementById("producto").value;
  const precio = document.getElementById("precio").value;
  const hora = document.getElementById("hora").value;

  // Stock initial par défaut
  let stock = 5;

  // Création de la carte de l'offre
  const ofertaId = "oferta_" + Date.now();
  const oferta = document.createElement("div");
  oferta.setAttribute("id", ofertaId);
  oferta.setAttribute("data-stock", stock);

  oferta.innerHTML = `
    <h3>${nombre}</h3>
    <p><strong>Producto:</strong> ${producto}</p>
    <p><strong>Precio:</strong> ${precio} Bs</p>
    <p><strong>Hora de retiro:</strong> ${hora}</p>
    <p id="stock_${ofertaId}"><strong>Stock restante:</strong> ${stock}</p>
    <button onclick="reservar('${ofertaId}')">Reservar</button>
  `;

  // Ajoute la carte à la liste des offres
  listaOfertas.appendChild(oferta);

  // Réinitialise le formulaire
  formulario.reset();
  formulario.style.display = "none";
});

// Fonction de réservation
function reservar(id) {
  const oferta = document.getElementById(id);
  let stock = parseInt(oferta.getAttribute("data-stock"));

  if (stock > 0) {
    stock--;
    oferta.setAttribute("data-stock", stock);
    document.getElementById("stock_" + id).innerHTML = `<strong>Stock restante:</strong> ${stock}`;
    alert("¡Reserva confirmada!");
  } else {
    alert("Lo sentimos, ya no hay stock disponible.");
  }
}

document.getElementById('botonDonar').addEventListener('click', function () {
  // Remplace ce lien par ton vrai lien Stripe
  window.location.href = 'https://buy.stripe.com/test_123abc456xyz';
});