/*selectionner toutes les clouds*/
const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
/*selectionner toutes les tetes : tableau*/
const heads = document.querySelectorAll(".head");

/*dernier nuages */
let lastcloud;

/*pour tester si le jeu finit ou pas*/
let timeUp = false;
let score = 0;

/*temps aléatoire*/
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

/*gerer les nuages aléatoirement*/
function randomCloud(clouds) {
    const indexCloud = Math.floor(Math.random() * clouds.length);
    const cloudsSelect = clouds[indexCloud];

    /*si le meme nuage que le dernier*/
    if (cloudsSelect === lastcloud) {
        return randomCloud(clouds);
    }
    lastcloud = cloudsSelect;

    return cloudsSelect;
}

/*fonction pour montrer la tete*/
function showHead1() {
    /*le temps durant le quelle la tete va rester*/
    const time = randomTime(600, 1000);
    const cloud = randomCloud(clouds);
    /*mettre le top à 0 pour montrer la tete*/
    cloud.classList.add("up");

    setTimeout(() => {
        if (!timeUp) showHead1();
        /*supprimer la tete*/
        cloud.classList.remove("up");
    }, time);
}

function showHead2() {
    const time = randomTime(500, 800);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");

    setTimeout(() => {
        if (!timeUp) showHead2();
        cloud.classList.remove("up");
    }, time);
}

function showHead3() {
    const time = randomTime(250, 500);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");

    setTimeout(() => {
        if (!timeUp) showHead3();
        cloud.classList.remove("up");
    }, time);
}

function playerScore(event) {
    /*si il clique pas sur la tete le score n'augmente pas*/
    if (!event.isTrusted) return;
    /*sinon incrémenter le score*/
    score++;
    /*objet courant cest head*/
    this.classList.remove("up");
    /*afficher le score sur la page*/
    scoreBoard.textContent = score;
}

/*pour chaque tete on ajoute un evenement*/
heads.forEach(head => head.addEventListener("click", playerScore));

function startGame1() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead1();
    /*apres 10s*/
    setTimeout(() => {
        timeUp = true;
        /*apres 2s s'affiche end*/
        setTimeout(() => {
            scoreBoard.textContent = "end";
        }, 2000);
    }, 10000);
}

function startGame2() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead2();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "end";
        }, 2000);
    }, 10000);
}

function startGame3() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead3();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "end";
        }, 2000);
    }, 10000);
}


/*NIVEAUX*/

const speed = 50;
var i = 0;
var text1 = "NOVICE";

var j = 0;
var text2 = "APPRENTI";

var k = 0;
var text3 = "EXPERT";

function typeWriter1() {
    if (i < text1.length) {
        document.getElementById("demo1").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    }
}

function typeWriter2() {
    if (j < text2.length) {
        document.getElementById("demo2").innerHTML += text2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
    }
}

function typeWriter3() {
    if (k < text3.length) {
        document.getElementById("demo3").innerHTML += text3.charAt(k);
        k++;
        setTimeout(typeWriter3, speed);
    }
}

function myClick() {
    for (var i = 1; i <= 3; i++) {
        document.getElementById("demo" + i).addEventListener("click", function() {
            /*cacher demo1*/
            document.getElementById("demo1").style.display = "none";
            document.getElementById("demo2").style.display = "none";
            document.getElementById("demo3").style.display = "none";
        });
    }
}
/*si j'appuie sur l'image s'affiche les niveau de difficultés*/

document.getElementById("morty-play").addEventListener("click", function() {
    typeWriter1();
    typeWriter2();
    typeWriter3();
    myClick();
});