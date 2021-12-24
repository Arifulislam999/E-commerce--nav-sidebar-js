// alert("Save User Name And Password....");

const hed = document.querySelector("nav");

window.addEventListener("scroll", () => {
    hed.classList.toggle("sticky", window.scrollY > 0);
});
let bar = document.querySelector(".social");

window.addEventListener("scroll", () => {
    bar.classList.toggle("side-bar", window.scrollY > 0);
});

//   Add Poto Section....

let big = document.getElementById("full");
let full = document.querySelector(".f1");
let third = document.querySelector(".pop");
let samll = document.getElementsByClassName("small-img-min");
let fc = document.querySelector(".fc");
let fcc = document.querySelector(".fcc");
let pus = document.querySelector(".pus");

samll[0].onclick = function() {
    big.src = samll[0].src;
};
samll[1].onclick = function() {
    big.src = samll[1].src;
};
samll[2].onclick = function() {
    big.src = samll[2].src;
};
samll[3].onclick = function() {
    big.src = samll[3].src;
};
samll[4].onclick = function() {
    full.src = samll[4].src;
};

samll[5].onclick = function() {
    full.src = samll[5].src;
};
samll[6].onclick = function() {
    full.src = samll[6].src;
};
samll[7].onclick = function() {
    full.src = samll[7].src;
};

samll[8].onclick = function() {
    third.src = samll[8].src;
};
samll[9].onclick = function() {
    third.src = samll[9].src;
};
samll[10].onclick = function() {
    third.src = samll[10].src;
};
samll[11].onclick = function() {
    third.src = samll[11].src;
};
samll[12].onclick = function() {
    fc.src = samll[12].src;
};
samll[13].onclick = function() {
    fc.src = samll[13].src;
};
samll[14].onclick = function() {
    fc.src = samll[14].src;
};
samll[15].onclick = function() {
    fc.src = samll[15].src;
};
samll[16].onclick = function() {
    fcc.src = samll[16].src;
};
samll[17].onclick = function() {
    fcc.src = samll[17].src;
};
samll[18].onclick = function() {
    fcc.src = samll[18].src;
};
samll[19].onclick = function() {
    fcc.src = samll[19].src;
};
samll[20].onclick = function() {
    pus.src = samll[20].src;
};
samll[21].onclick = function() {
    pus.src = samll[21].src;
};
samll[22].onclick = function() {
    pus.src = samll[22].src;
};
samll[23].onclick = function() {
    pus.src = samll[23].src;
};