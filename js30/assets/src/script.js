console.log(`
60/70
✓ Вёрстка +10
вёрстка аудиоплеера: есть кнопка Play/Pause, кнопки "Вперёд" и "Назад" для пролистывания аудиотреков, прогресс-бар, отображается название и автор трека +5
в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
✓ Кнопка Play/Pause +10
есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание аудиотрека +5
внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент аудиотрек +5
✓ При кликах по кнопкам "Вперёд" и "Назад" переключается проигрываемый аудиотрек. Аудиотреки пролистываются по кругу - после последнего идёт первый +10
✓ При смене аудиотрека меняется изображение - обложка аудиотрека +10
✓ Прогресс-бар отображает прогресс проигрывания текущего аудиотрека. При перемещении ползунка вручную меняется текущее время проигрывания аудиотрека +10
✓ Отображается продолжительность аудиотрека и его текущее время проигрывания +10`);

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
  const progressBarColor =document.querySelector(".progress-bar__progress");
  let isDragging = false;
  let currentSong = 1;
  
  let audio;
  changeDataSong();
  play.addEventListener("click", playAudio);
  pause.addEventListener("click", pauseAudio);
  play.addEventListener("click", hide);
  pause.addEventListener("click", hide);
  next.addEventListener("click", playNextAudio);
  previous.addEventListener("click", playPreviousAudio);


 
  
  function playAudio(){
    audio.play();
    
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
   if (audio) {
     audio.pause();
   }
    
    audio = new Audio(songs[currentSong].src); 
    currentTime.textContent = "0 : 00";
     
      audio.addEventListener('timeupdate', changeCurrentTime);
      document.querySelector(".progress-bar__progress").style.setProperty('width', 0);
    if (getComputedStyle(play).display == 'none') {
       playAudio(); 
    }
    image.src = songs[currentSong].cover;
    singer.textContent = songs[currentSong].artist;
    song.textContent = songs[currentSong].title;
    recieveDuration();
    progressBar.value = 0;

    progressBar.addEventListener('mousedown', startDragging);
    progressBar.addEventListener('touchstart', startDragging);
    progressBar.addEventListener('mouseup', endDragging);
    progressBar.addEventListener('touchend', endDragging);
    
    function startDragging(){isDragging = true;}
    
    function endDragging(){
      if (isDragging) {
        const newTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = newTime;
        isDragging = false;
      }
    }
  
    progressBarColor.addEventListener("click", (event) =>{
      const clickPosition = event.offsetX;
      const containerWidth = progressBar.offsetWidth;
      const newTime = (clickPosition/containerWidth) * audio.duration;
      audio.currentTime = newTime;
    });
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
     
    const progress = (audio.currentTime / audio.duration) * 100 || 0;
    progressBar.value = progress;
    document.querySelector(".progress-bar__progress").style.setProperty('width', `${progress}%`);
  }
 }


});

