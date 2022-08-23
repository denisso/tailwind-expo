import "../css/style.css";

window.onload = () => {
    document.querySelector(".ButtonSwitch").addEventListener("click", () => {
        if (document.documentElement.hasAttribute("class")) {
            document.documentElement.removeAttribute("class");
        } else {
            document.documentElement.classList.add("dark");
        }
    });
};
