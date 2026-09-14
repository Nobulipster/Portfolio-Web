// Seleciona elementos
var root = document.documentElement;
var btn = document.getElementById("themeToggle");

// Função para aplicar o tema
function applyTheme(theme) {
    // Define o tema no HTML
    root.setAttribute("data-bs-theme", theme);
    // Salva no localStorage
    localStorage.setItem("theme", theme);
    // Se o botão existir, atualiza o ícone
    if (btn) {
        if (theme === "dark") {
            btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
}

// Verifica se já existe tema salvo
var savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme("light");
}

// Evento de clique no botão
if (btn) {
    btn.addEventListener("click", function () {
        var currentTheme = root.getAttribute("data-bs-theme");
        if (currentTheme === "light") {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }
    });
}