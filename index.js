let count = 0;
const content = document.getElementById("content");

function add(){
    console.log("add");
    count++;
    content.textContent =`${count}`;
}