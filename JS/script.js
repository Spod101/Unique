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