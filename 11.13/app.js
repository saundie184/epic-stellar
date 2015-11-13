Synth.setSampleRate(44100);
Synth.setVolume(1.0);

//create a piano instrument, other options are organ, edm or acoustic.
var instrument = Synth.createInstrument('piano');


var cKey = document.querySelector('#c');
var cSharp = document.querySelector('#cSh');
var dKey = document.querySelector('#d');
var dSharp = document.querySelector('#dSh');
var eKey = document.querySelector('#e');
var eSharp = document.querySelector('#eSh');
var fKey = document.querySelector('#f');
var fSharp = document.querySelector('#fSh');

cKey.addEventListener('click', function() {
  instrument.play('C', 4, 2);
});

cSharp.addEventListener('click', function() {
  instrument.play('C#', 4, 2);
});

window.addEventListener('keypress', function(event){
  if(event.keyIdentifer == '67'){
    instrument.play('C', 4, 2)
  }
});

dKey.addEventListener('click', function() {
  instrument.play('D', 4, 2);
});

dSharp.addEventListener('click', function() {
  instrument.play('D#', 4, 2);
});
