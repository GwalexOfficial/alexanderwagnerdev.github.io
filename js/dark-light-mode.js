const btn = document.querySelector(".awdev-bl-toggle");
const theme = document.querySelector("#awdev-theme-mode");

const darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (darkmode) {
    theme.href = "css/stylesheet-dark.css";
} else {
    theme.href = "css/stylesheet.css";
}

btn.addEventListener("click", function() {
    if (theme.getAttribute("href") == "css/stylesheet.css") {
        theme.href = "css/stylesheet-dark.css";
        localStorage.setItem("theme", "dark");

    } else {
        theme.href = "css/stylesheet.css";
        localStorage.setItem("theme", "light");
    }

    function checkDarkMode() {
        if (localStorage.theme == "dark") {
            document.body.classList.add("dark");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("darkMode", "disabled");
        }
    }
});