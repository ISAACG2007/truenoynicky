function playMusic() {
  alert("Boton de reproduccion clickeado")
  const musica =
document.getElementById('musica');
  musica.load();
  musica.play();
}