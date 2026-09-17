// Inicializa o Zurb Foundation
$(document).foundation();

// Dark Mode no Foundation (Nâo existe nativo)
var root = document.documentElement;
var btn = document.getElementById("themeToggle");

function applyTheme(theme) {
    // Define o tema no HTML
    root.setAttribute("data-theme", theme);
    // Salva no localStorage
    localStorage.setItem("theme", theme);
    
    // Atualiza o ícone do botão
    if (btn) {
        if (theme === "dark") {
            btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
}

var savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme("light");
}

if (btn) {
    btn.addEventListener("click", function () {
        var currentTheme = root.getAttribute("data-theme");
        if (currentTheme === "light") {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }
    });
}

var yearSpan = document.getElementById("year");
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}