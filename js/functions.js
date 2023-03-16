const section = document.getElementById("container");

const colors = ["blue", "purple", "teal", "green", "black"]
let i = 0;
const endOfColors = colors.length;
section.addEventListener("click", ()=> {
    section.style.background = colors[i];
    i++;
    if(i === endOfColors) i = 0;
});