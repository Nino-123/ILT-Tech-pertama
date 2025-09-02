document.getElementById("decrement").addEventListener("click", function() {
    const p = document.querySelector("#counter");
    p.textContent = parseInt(p.textContent) - 1;
});

document.getElementById("increment").addEventListener("click", function() {
    const p = document.querySelector("#counter");
    p.textContent = parseInt(p.textContent) + 1;
});
