function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

var audio = new Audio("/assets/audios/cheering.mp3");
audio.play();

// runCheer();
function runCheer() {
  const countdown = ['countdown'];
  let getAudio = document.getElementById("countdown");
  getAudio.play();

}

var seconds=5;
function dicrement() {
  seconds -= 1;
}
setInterval(dicrement, 1000);

function redirectPage() {
  window.location="index.html";
}

document.addEventListener('DOMContentLoaded', function() { setTimeout(redirectPage, 5000) })


