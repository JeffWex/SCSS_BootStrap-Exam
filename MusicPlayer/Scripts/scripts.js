
const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const playlist = document.querySelectorAll('.playlist .song');

let currentSong = 0;

playButton.addEventListener('click', togglePlay);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrevious);

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
}

function playNext() {
    currentSong = (currentSong + 1) % playlist.length;
    playSong(playlist[currentSong]);
}

function playPrevious() {
    currentSong = (currentSong - 1 + playlist.length) % playlist.length;
    playSong(playlist[currentSong]);
}

function playSong(songElement) {
    const songIndex = Array.from(playlist).indexOf(songElement);
    currentSong = songIndex;
    const songSrc = `music/song${songIndex + 1}.mp3`;
    audio.src = songSrc;
    audio.play();
    playButton.textContent = 'Pause';
}

playlist.forEach((song, index) => {
    song.addEventListener('click', () => {
        playSong(song);
    });
});

// new Player

function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
  }
  
  function setVolume() {
    curr_track.volume = volume_slider.value / 100;
  }
