function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

let on_off = document.querySelector('.musicOn');
let audio = document.querySelector('.musicOn audio');

on_off.onclick = function() {
  audio.paused ? audio.play() : audio.pause();
}