let count = 0;

function increase() {
    count++;
    document.getElementById("counter").innerText = count;
}

function reset() {
    count = 0;
    document.getElementById("counter").innerText = count;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}