
let introStage = 0;

function introYes(){
    document.getElementById("introPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

function introNo(){
    const text = document.getElementById("introText");
    const buttons = document.getElementById("introButtons");

   document.getElementById("introGif").src = "haha.gif";
    if(introStage === 0){
        text.innerText = "Weh ikaw yan baby e ";
        buttons.innerHTML = `
        
            <button onclick="introYes()">Joke lang ako to si Ley</button>
            <button onclick="secondIntroNo()">Hindi</button>
        `;
        introStage = 1;
    }
}

function secondIntroNo(){
    const text = document.getElementById("introText");
    const buttons = document.getElementById("introButtons");
   document.getElementById("introGif").src = "okee.gif";
    text.innerText = "wagg ka sayo ko lang sinend to saka nagiisa lang baby ko :p ";
    buttons.innerHTML = `
        <button onclick="introYes()">Sige na nga ako na</button>
    `;
}

const correctPassword = "JULY"; // PALITAN MO

let currentReason = 1;

const images = [    
"1.png","2.png","3.png","4.png",
"5.png","6.png","7.png","8.png",
"9.png","10.png","11.png","12.png",
"13.png","14.png"
];

const messages = [
"eto bb first hike natin wala pang aminan na nagagahanap pero tamang yakapan na AWHAWAWHAWHAHWWA",
"first vd inaapi mo lang ako dito e",
"eto yung tambayan mo bb dito us unang nag deeptalks about sa mga gusto and ayaw moo",
"eto bb ayaw mo magpataya gusto ako yung aso e :/",
"eto yung matagal na 99 nights nating pinaghirapan puyat na puyat e AWHAHWHAWHAWHAW",
"eto yung akala horror pambata pala AWHAWHAWHHWAHAW ganyan ka bb sadya mo to no",
"Random pic sa sdf mweheh",
"dito nagpaalam si tsuki manligaw boi e me next  a AHWAHWHAWHAHWAHWHAWHAW",
"kakapic lang us nito sayang yung record laggy ganda pa naman",
"eto may record us nito all goods lang",
"hays more bundok with u bb",
"ginulat ang mundo mas mataas pa cp ko sakanya AHWAHWAHWAHWAHWA ilang araw natin naging bonding to 1000 cp bb e",
"cutiee laging nagtatabi pag naka ganyang emote",
"eto tamang pa cute sa shawarma AHWHAWHAHWAHWHAW sumilip pa talaga bb cute ng baby ko na yan"
];

function checkPassword(){
    const input = document.getElementById("passwordInput").value;

    if(input === correctPassword){
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("wowPage").classList.remove("hidden");
    } else {
        alert("Aray mo iba siguro baby mo 💔");
    }
}

function goToOptions(){
    document.getElementById("wowPage").classList.add("hidden");
    document.getElementById("optionPage").classList.remove("hidden");
}

function startReasons(){
    document.getElementById("optionPage").classList.add("hidden");
    document.getElementById("reasonsPage").classList.remove("hidden");
    currentReason = 1;
    loadReason();
}

function loadReason(){
    document.getElementById("reasonTitle").innerText =
    "Memory #" + currentReason + " 💗";

    document.getElementById("reasonImage").src =
    images[currentReason - 1];

    document.getElementById("reasonMessage").innerText =
    messages[currentReason - 1];
}

function nextReason(){
    if(currentReason < 14){
        currentReason++;
        loadReason();
    } else {
        document.getElementById("reasonsPage").classList.add("hidden");
        document.getElementById("finalPage").classList.remove("hidden");
    }
}

function unlockSection(){
    document.getElementById("finalPage").classList.add("hidden");
    document.getElementById("optionPage").classList.remove("hidden");

    const btn = document.getElementById("unlockBtn");
    btn.classList.remove("locked");
    btn.innerText = "Video 💖";
btn.onclick = openVideoPage;

    };

let currentVideo = 1;

function openVideoPage(){
    document.getElementById("optionPage").classList.add("hidden");
    document.getElementById("videoPage").classList.remove("hidden");
    currentVideo = 1;
}

function nextVideo(){

    if(currentVideo === 1){
        document.getElementById("seriesVideo").src = "hike.mp4";
        document.getElementById("videoLabel").innerText = "Eto yung inedit ko baby huhu";
        currentVideo = 2;
    }
    else{
    document.getElementById("videoPage").classList.add("hidden");
    document.getElementById("optionPage").classList.remove("hidden");

    unlockThirdSection();
}
}
function unlockThirdSection(){
    console.log("UNLOCKING THIRD BUTTON");

    const buttons = document.querySelectorAll("#optionPage button");
    const thirdBtn = buttons[2];

    thirdBtn.classList.remove("locked");
    thirdBtn.innerText = "Flowers & Letter 💐";

    thirdBtn.onclick = function(){
        document.getElementById("optionPage").classList.add("hidden");
        document.getElementById("flowerPage").classList.remove("hidden");
        startTyping();
    };
}

const letterText = "happy hearts day baby!!!, i would like to take this opportunity to remind you and reassure you na super special ka sakin bb. everyday thankful me na binigay ka sakin ni lord. and  habang lumilipas yung mga araw, lalo mo lang pinaprove sakin na worth it ka. sa maikling panahon na nakabond kita, lagi mo pinapafeel sakin na mahalaga ako at laging valid yung nararamdaman ko. super naa-appreciate ko lahat ng ginagawa mo for me, sa pagiging caring and supportive mo and everything, super thankful talaga ako na nasakin ka now and i just want to reassure you na nothing will change. ikaw lang at ikaw lang ang gugustuhin ko. walang pagsisisi or ano man. gusto ko alam mo na gusto kita, at hindi tayo hanggang dito lang. ipu-pursue kita  magiging consistent ako, and araw-araw ko ipoprove yon sa’yo. hindi tayo hanggang dito lang, ley okay? looking forward pa ako na mas makilala ka lalo. the more na nakikilala kita, the more na nagugustuhan kita. thank you for everything, baby. sana ma-meet na kita someday in person. mweheheh mwa! ☺️❤️"

let index = 0;

function startTyping(){
    index = 0;
    document.getElementById("typedText").innerHTML = "";
    typeEffect();
}

function typeEffect(){
    if(index < letterText.length){
        document.getElementById("typedText").innerHTML += letterText.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}
function backToMenu(){
    document.getElementById("flowerPage").classList.add("hidden");
    document.getElementById("optionPage").classList.remove("hidden");
}
