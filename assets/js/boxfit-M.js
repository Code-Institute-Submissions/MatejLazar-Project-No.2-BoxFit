
let timeSecond = 180;
const timeH = document.querySelector("h1");
setTimeout(displayTime(timeSecond), 15000);
setTimeout(delaytimer, 15000);

function delaytimer() {
    const countDown = setInterval(() => {
        timeSecond--;
        displayTime(timeSecond);
        if (timeSecond == 0 || timeSecond < 1) {
          endCount();
          clearInterval(countDown);
        }
      }, 1000);
}

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "Welldone!";
  goToHomepage();
}

function startSession() {
    const counter = document.getElementById('countdown');
    counter.innerHTML = "Let's begin";
    const seconds = 15;
    setTimeout(countdown(seconds),1000);
}

function countdown(seconds) {
    const counter = document.getElementById('countdown');
    const countdown = setInterval(function() {
    counter.innerHTML = seconds;
    seconds= seconds - 1;

    /*if(seconds <= 3) {
        counter.classList.add('class name');
    }*/

    if(seconds <= 11 && seconds > 1 ) {
      tenseccount(); 
    }

    if(seconds == 1) {
      let bell = document.getElementById("startbell");
      bell.play();
      setTimeout(bell.stop(),900);
    }

    if(seconds <= 0) {
        clearInterval(countdown);
        counter.innerHTML = "";
        setTimeout(runCombo, 1000);
    }
  }, 1000);

}

startSession();

function tenseccount() {
  // const tenseccount = ["10sec"];
  let getAudio = document.getElementById("10sec");
  getAudio.play();
}

function runCombo() {
    const counter = document.getElementById('countdown');
    const combos = ['combo-m1', 'combo-m2', 'combo-m3', 'combo-m4', 'combo-m5', 'combo-m6',
    'combo-m7', 'combo-m8', 'combo-m9', 'combo-m10', 'combo-m11', 'combo-m12', 'combo-m13',
    'combo-m14', 'combo-m15', 'combo-m16', 'combo-m17', 'combo-m18', 'combo-m19', 'combo-m20',
    'combo-m21','combo-m22','combo-m23','combo-m24','combo-m25'];
    let chooseCombo = Math.floor(Math.random() * combos.length);
    let getAudio = document.getElementById(combos[chooseCombo]);
    getAudio.play();
    // console.log(getAudio.getAttribute('id'));

    /*repeat*/
    const repeat = setInterval(function() {
    chooseCombo = Math.floor(Math.random() * (combos.length));
    getAudio = document.getElementById(combos[chooseCombo]);
    getAudio.play();

    if (timeSecond == 0 || timeSecond < 10) {
        clearInterval(repeat);
        counter.innerHTML = 'Session finished';
    }
}, 10000);
  
}

function goToHomepage() {
  var seconds=5;
  function dicrement() {
    seconds -= 1;
  }
  setInterval(dicrement, 1000);

  function redirectPage() {
   window.location="outro.html";
  }
  //document.addEventListener('DOMContentLoaded', function() { setTimeout(redirectPage, 5000) })
  setTimeout(redirectPage, 5000);
}

