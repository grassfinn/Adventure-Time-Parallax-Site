song = document.querySelector('.song');
song.volume = 0.6;
function toggleMusic() {
  return song.paused ? song.play() : song.pause();
}
var myAudio = document.getElementById('myAudio');

// https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link/38665865#comment43189469_27368778
