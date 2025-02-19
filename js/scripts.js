const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const countScore = document.querySelector('.count-score');
const resetBoard = document.querySelector('.game-over-board');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    const valorScore = +countScore.textContent.trim();
    countScore.textContent = valorScore + 1;


    const cloudsPosition = clouds.offsetLeft;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 115 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // mario.style.animation = 'none';
        const morreu = marioPosition + 100
        // mario.style.bottom = `120px` ;

        mario.src = 'css/game-over.png';
        mario.classList.add('fim-mario');

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;
        resetBoard.style.display = 'block'
        clearInterval(loop);




        // console.log(marioPosition);
    }
}, 10)

document.addEventListener('keydown', jump);

document.getElementById('reset-game').addEventListener('click',function () {
    console.log('valorScore');
    location.reload();
})