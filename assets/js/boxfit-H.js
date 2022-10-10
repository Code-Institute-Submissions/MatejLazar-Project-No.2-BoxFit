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

    if(seconds <= 12 && seconds > 1 ) {
      tenseccount(); 
    }

    if(seconds == 2) {
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


function tenseccount() {
  // const tenseccount = ["10sec"];
  let getAudio = document.getElementById("10sec");
  getAudio.play();
}

startSession();

function runCombo() {
  const counter = document.getElementById('countdown');
  const combos = ['combo-h1', 'combo-h2', 'combo-h3', 'combo-h4', 'combo-h5', 'combo-h6',
  'combo-h7', 'combo-h8', 'combo-h9', 'combo-h10', 'combo-h11', 'combo-h12', 'combo-h13',
  'combo-h14', 'combo-h15', 'combo-h16', 'combo-h17', 'combo-h18', 'combo-h19', 'combo-h20',
  'combo-h21','combo-h22','combo-h23','combo-h24','combo-h25', 'combo-h26', 'combo-h27', 
  'combo-h28', 'combo-h29', 'combo-h30'];
  let chooseCombo = Math.floor(Math.random() * combos.length);
  let getAudio = document.getElementById(combos[chooseCombo]);
  getAudio.play();
    
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
  setTimeout(redirectPage, 0000);
}