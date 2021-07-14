function toggleTheme() {
    let ele = document.querySelector("body");
    ele.classList.toggle("dark-mode");    
}

let button = document.getElementById("toggleButton");
button.onclick = toggleTheme;

