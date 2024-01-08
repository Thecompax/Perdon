function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let nob = document.getElementById("No");

nob.addEventListener("mousemove", function() {
    let alto = random(1, 10);
    let ancho = random(1, 10);
    console.log(alto, ancho);
    nob.style.gridRow = alto;
    nob.style.gridColumn = ancho;
});

let sib = document.getElementById("Si");

sib.addEventListener("click", function() {
    let pElement = document.getElementById("p");
    pElement.removeAttribute("hidden");
    console.log("click");
    document.getElementById("1").style.color = "transparent";
    sib.style.display = "none";
    nob.style.display = "none";
});
