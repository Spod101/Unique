const maxSpeed = 5000;
const maxSize = 24;
let x = 0;
let y = 0;
let trailIndex = 0;
let elapsedTime = 0;

window.addEventListener("mousemove", (e) => {
    const diffX = Math.abs(x - e.offsetX);
    const diffY = Math.abs(y - e.offsetY);
    if (diffX >= 10 || diffY >= 10) {
        spawnTrail(e);
    }

    x = e.offsetX;
    y = e.offsetY;
});

function spawnTrail(e) {
    if (trailIndex >= 100 || elapsedTime >= 5) return;
    trailIndex++;

    const trail = document.createElement("div");
    const size = Math.floor(Math.random() * maxSize) + "px";
    const speed = Math.floor(Math.random() * maxSpeed);

    trail.classList.add("trail");
    trail.style.backgroundColor = "#279dc5";
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";
    trail.style.width = size;
    trail.style.animation = `trail ${speed}ms linear forwards`;
    setTimeout(() => {
        trail.remove();
        trailIndex--;
    }, speed);

    document.body.appendChild(trail);
}

setInterval(() => {
    spawnTrail({ pageX: x, pageY: y });
    elapsedTime++;
}, 1000);

const waveImage = document.getElementById("_wave");
waveImage.addEventListener("mouseover", () => {
    elapsedTime = 0;
});

const body = document.body;
const btn = document.querySelector(".pulo");
const buttonL = document.querySelector(".l");
const buttonV = document.querySelector(".v");
const buttonM = document.querySelector(".m");
const wave1 = document.querySelector(".wave1");
const wave2 = document.querySelector(".wave2");
const wave3 = document.querySelector(".wave3");
const wave4 = document.querySelector(".wave4");


buttonL.addEventListener("click", () => {
    body.style.backgroundImage = "url('./Styles/luzonbg.jpg')";
    body.style.backgroundSize = "cover";
    buttonL.style.filter = "blur(0)";
    buttonL.style.filter = "grayscale(0)";
    wave1.style.display = "none";
    wave2.style.display = "none";
    wave3.style.display = "none";
    wave4.style.display = "none";
});

buttonV.addEventListener("click", () => {
    body.style.backgroundImage = "url('./Styles/visayasbg.jpg')";
    body.style.backgroundSize = "cover";
    buttonV.style.filter = "blur(0)";
    buttonV.style.filter = "grayscale(0)";
    wave1.style.display = "none";
    wave2.style.display = "none";
    wave3.style.display = "none";
    wave4.style.display = "none";
});

buttonM.addEventListener("click", () => {
    body.style.backgroundImage = "url('./Styles/mindanaobg.png')";
    body.style.backgroundSize = "cover";
    buttonM.style.filter = "blur(0)";
    buttonM.style.filter = "grayscale(0)";
    wave1.style.display = "none";
    wave2.style.display = "none";
    wave3.style.display = "none";
    wave4.style.display = "none";
});

body.style.transition = "background-image 0.5s ease-in";
