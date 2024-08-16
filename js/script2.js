const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds');

//Fecha a futuro
const countdownDate = new Date('09 08, 2024 15:00:00').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);
}, 1000);

const player = document.getElementById('player-comic');
const audio = new Audio();
audio.src = "/musicaFondo/Joker 2019 Canción  Song (Original Soundtrack) Escena Escaleras  scene.mp3"
const playIcon = `<svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
</svg>`;
const pauseIcon = `<svg width="25" height="25"viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" fill="currentColor"/>
</svg>`;

audio.play().catch(error => {
    console.log('Autoplay no permitido:', error);
});

audio.addEventListener('ended', function() {
    audio.currentTime = 0; // Reinicia el audio
    audio.play(); // Reproduce el audio nuevamente
});

player.addEventListener('click', function(){
    if(audio.paused){
        audio.play();
        player.innerHTML = pauseIcon; // Cambia a ícono de pausa
        
    }else{
        audio.pause();
        player.innerHTML = playIcon; // Cambia a ícono de play
    }
})