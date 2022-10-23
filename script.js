const dice = document.querySelector('.dice-wrapper');
const diceImg = document.querySelector('.dice-wrapper img');
const setProfileModal = document.querySelector('.set-profile-overlay');

const startBtn = document.querySelector('.start-btn');
const rollBtn = document.querySelector('.roll-btn');
const holdBtn = document.querySelector('.hold-btn');
const newGameBtn = document.querySelector('.new-game');
const aboutBtn = document.querySelector('.about-game-btn');
const aboutModal = document.querySelector('.about-game-wrapper');
const closeAbout = document.querySelector('.close-about');

//document.getElementById('set-winning').value = 'Winning Value: 100';

let setName0 = document.getElementById('set-name-0');
let setName1 = document.getElementById('set-name-1');

let player1NameEl = document.getElementById('name-0');
let player2NameEl = document.getElementById('name-1');

const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');
const score0El = document.querySelector('.player0-score');
const score1El = document.querySelector('.player1-score');

let currentScore0 = document.querySelector('.current-score-0');
let currentScore1 = document.querySelector('.current-score-1');

let scores, currentScore, activePlayer, playing, winning;

//Set Username
let setUserName = function(){

    let player1 = setName0.value;
    let player2 = setName1.value;


    if(player1 && player2){
        player1NameEl.textContent = player1;
        player2NameEl.textContent = player2;
    } else{
        player1NameEl.textContent = 'Player 1';
        player2NameEl.textContent = 'Player 2';
    }
}

//Starting Conditions

const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;


    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

    dice.classList.remove('active');
    player0El.classList.add('active-player');
    player1El.classList.remove('active-player');

    setUserName();

};

init();




//Set Profile Modal
let setProfile = function(){
   setProfileModal.classList.add('active');
}

setTimeout(setProfile, 2500)
//setProfile();


//Remove Profile Modal
setProfileModal.addEventListener('click', function(e){
    setUserName()
    if(e.target.classList.contains('set-profile-overlay')){
        setProfileModal.classList.remove('active')
    }
})
//Start Btn
startBtn.addEventListener('click', function(){
    setUserName();
    setProfileModal.classList.remove('active');


})


const switchPlayer = function(){
    document.querySelector(`.current-score-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('active-player');
    player1El.classList.toggle('active-player');
}
//Roll Btn

rollBtn.addEventListener('click', function(){
    if(playing){
        const diceNumber = Math.floor(Math.random() *6)+ 1;

        dice.classList.add('active');
        diceImg.src = `images/dice-${diceNumber}.png`;

        if(diceNumber !== 1){
           currentScore += diceNumber;
           document.querySelector(`.current-score-${activePlayer}`).textContent = currentScore;
        } else{
            switchPlayer();
        }

    }
});

holdBtn.addEventListener('click', function(){
   if(playing){
    scores[activePlayer] += currentScore;
    document.querySelector(`.player${activePlayer}-score`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        playing = false;
        dice.classList.remove('active');
        document.getElementById(`name-${activePlayer}`).textContent += ' Won';

        document.querySelector(`.player-${activePlayer}`).classList.remove('active-player');
    } else{
        switchPlayer();
    }
   }
});

//New Game
newGameBtn.addEventListener('click', init);


//About Modal

aboutBtn.addEventListener('click', function(){
    aboutModal.classList.add('active');
});

aboutModal.addEventListener('click', function(e){
    if(e.target.classList.contains('about-game-wrapper')){
        aboutModal.classList.remove('active');
    }
});

closeAbout.addEventListener('click', function(){
    aboutModal.classList.remove('active');
})

//console.log(winningValue)