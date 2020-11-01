'use strict';

var gNextId = 1;
var gQuests = [
    { id: gNextId++, opts: ['cat', 'dog'], correctOptIndex: 0 },
    { id: gNextId++, opts: ['dog', 'Donkey'], correctOptIndex: 1 },
    { id: gNextId++, opts: ['horse', 'cat'], correctOptIndex: 0 }
]
var gCurrQuestIdx = 0;

function createQuests() {
    return gQuests;
}

function init() {
    gCurrQuestIdx = 0;
    modal(0, 'none')
    createQuests()
    renderQust()
    var elBtn = document.querySelector('.start-game');
        elBtn.innerText = 'Start Game'
}

function renderQust() {
    var elQus = document.querySelector('.qus');
    elQus.innerHTML = strHtmlBtn();
    var elPic = document.querySelector('.pic');
    elPic.innerHTML = strHtmlImg();
}

function strHtmlBtn() {
    var strHtml = `
    <button class="btn-opts" onclick="checkAnswer(0)" >${gQuests[gCurrQuestIdx].opts[0]}</button>
    <button class="btn-opts" onclick="checkAnswer(1)">${gQuests[gCurrQuestIdx].opts[1]}</button>`
    return strHtml
}

function strHtmlImg() {
    var strHtml = `
    <img class ="img-qus" src="img/${gQuests[gCurrQuestIdx].id}.jpg">`
    return strHtml
}

function checkAnswer(optIdx) {
    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        if (isGameOver()) {
            return
        }
        gCurrQuestIdx++
        renderQust()
    } else {
        playSound()
    }
}

function isGameOver() {
    if (gCurrQuestIdx === gQuests.length - 1) {
        modal(100, 'block')
        var elBtn = document.querySelector('.start-game');
        elBtn.innerText = 'Start Agein'
    }
}

function modal(opacity, display) {
    var elModal = document.querySelector('.modal');
    elModal.style.opacity = opacity + '%';
    elModal.style.display = display;
}

function playSound() {
    var sound = new Audio("sound/buzz.mp3");
    sound.play();
}