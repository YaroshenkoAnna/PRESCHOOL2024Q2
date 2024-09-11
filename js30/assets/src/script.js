const songs = [
  {
    title: "Fondu au noir",
    artist: "Cœur de Pirate",
    src: "assets/audios/audio0.mp3",
    cover: "./assets/images/cover0.jpeg"
  },
  {
    title: "Войти в Айти",
    artist: "Гражданин Топинамбур",
    src: "assets/audios/audio1.mp3",
    cover: "./assets/images/cover1.jpg"
  },
  {
    title: "Licht",
    artist: "Elane",
    src: "assets/audios/audio2.mp3",
    cover: "./assets/images/cover2.jpg"
  },
  {
    title: "Das Kleine Küken Piept",
    artist: "Pulcino Pio",
    src: "assets/audios/audio3.mp3",
    cover: "./assets/images/cover3.jpeg"
  },
  {
    title: "Lovesick",
    artist: "Alan Walker and Sophie Simmons",
    src: "assets/audios/audio4.mp3",
    cover: "./assets/images/cover4.jpeg"
  },
   {
    title: "Vampire Knight",
    artist: "Haketa Takefumi",
    src: "assets/audios/audio5.mp3",
    cover: "./assets/images/cover5.jpg"
  },
   {
    title: "Львів",
    artist: "Піккардійська Терція",
    src: "./assets/audios/audio6.mp3",
    cover: "./assets/images/cover6.jpg"
  },
  {
    title: "Hanging On The Cross",
    artist: "Arduria",
    src: "assets/audios/audio7.mp3",
    cover: "./assets/images/cover7.jpg"
  },
]



document.addEventListener('DOMContentLoaded', () => {
  const play = document.querySelector(".audio-player__play-button");
  const pause = document.querySelector(".audio-player__pause-button");
  const next = document.querySelector(".audio-player__next-button");
  const previous = document.querySelector(".audio-player__previous-button");
  const image = document.querySelector(".audio-player__image");
  const singer = document.querySelector(".audio-player__singer");
  const song = document.querySelector(".audio-player__song");
  const duration = document.querySelector(".progress-bar__duration");
  const currentTime = document.querySelector(".progress-bar__current-time");
  const progressBar = document.querySelector(".progress-bar__label");
  let isDragging = false;
  let currentSong = 1;
  
  let audio = new Audio("assets/audios/audio1.mp3"); 
 
  recieveDuration();
  play.addEventListener("click", playAudio);
  pause.addEventListener("click", pauseAudio);
  play.addEventListener("click", hide);
  pause.addEventListener("click", hide);
  next.addEventListener("click", playNextAudio);
  previous.addEventListener("click", playPreviousAudio);
  progressBar.addEventListener('mousedown', () => {
    isDragging = true;
  });
  progressBar.addEventListener('mouseup', () => {
    if (isDragging) {
      const newTime = (progressBar.value / 100) * audio.duration;
      audio.currentTime = newTime;
      isDragging = false;
  }
});
 
  
  function playAudio(){
    audio.play();
    audio.addEventListener('timeupdate', changeCurrentTime);
    audio.addEventListener('ended', playNextAudio);
  }

  function hide(){
    play.classList.toggle("hide");
    pause.classList.toggle("hide");
  }
  
  function pauseAudio(){
    audio.pause();
  }

  function playNextAudio(){
    currentSong = currentSong === songs.length -1 ? 0 : currentSong + 1;
    changeDataSong();
 }

 function playPreviousAudio(){
    currentSong = currentSong === 0 ? songs.length - 1 : currentSong - 1;
    changeDataSong();
 }
   
 function changeDataSong(){
    audio.pause();
    audio = new Audio(songs[currentSong].src); 
    currentTime.textContent = "0 : 00";
    if (getComputedStyle(play).display == 'none') {
       playAudio(); 
    }
    image.src = songs[currentSong].cover;
    singer.textContent = songs[currentSong].artist;
    song.textContent = songs[currentSong].title;
    recieveDuration();
    
 }

 function recieveDuration(){
   audio.addEventListener('loadedmetadata', () => {
    duration.textContent = formatTime (audio.duration);
  }); 
 }

 function formatTime(audioDuration){
    const minutes = Math.floor(audioDuration / 60);
    let secundes = Math.floor(audioDuration % 60);
    secundes = secundes < 10 ? '0' + secundes : secundes;
    return `${minutes} : ${secundes}`
 }

 function changeCurrentTime(){
    currentTime.textContent = formatTime(audio.currentTime);
   if (!isDragging) {
     
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
  }
 }


});

