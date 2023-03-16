const section = document.getElementById("container");
const row = document.getElementById("row");
const height = window.innerHeight;
const rowHeight = row.offsetHeight;

// Populate the window with divs depending on screen size
const populateWindow = () => {
    const numbRowNeeded = height/rowHeight * 2
    for(let i = 0; i < numbRowNeeded; i++){
        let cloneRow = row.cloneNode(true);
        cloneRow.id = "row" + i
        section.appendChild(cloneRow);
    }
}
// Run on init load
populateWindow();

// run on window resize
window.addEventListener("resize", () => {
    populateWindow();
})


const colors = ["blue", "purple", "teal", "green", "black"]
let i = 0;
const endOfColors = colors.length;
section.addEventListener("click", ()=> {
    console.log("WindowHeight", height);
    console.log("rowHeight: ", rowHeight);
    section.style.background = colors[i];
    i++;
    if(i === endOfColors) i = 0;
});