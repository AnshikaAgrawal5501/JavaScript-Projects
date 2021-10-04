const panels = document.querySelectorAll(".panel");

panels.forEach(function(panel) {
    panel.addEventListener("click", activated);
});

function activated() {

    this.classList.toggle("active");
}