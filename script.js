const synth = speechSynthesis;
const textBox = document.querySelector("#text-box");
const speedValue = document.querySelector("#speed-value");
const pitchValue = document.querySelector("#pitch-value");
const speed = document.getElementById("speed");
const pitch = document.getElementById("pitch");

speed.value = 1;
pitch.value = 1;


function speak() {
  const utterThis = new SpeechSynthesisUtterance(textBox.textContent);
  utterThis.lang = "pt-BR";
  utterThis.rate= speed.value;
  utterThis.pitch= pitch.value;
  utterThis.localService = true;
  synth.speak(utterThis);
}

function onSpeedChange(value) {
  speedValue.innerHTML = value
}

function onPitchChange(value) {
  pitchValue.innerHTML = value
}

function stop() {
  synth.cancel();
}

