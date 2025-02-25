motdtext = document.getElementById("motd-text")

fetch("./assets/motd.txt").then(r=>r.text()).then(text => {
    lines = text.split("\n")
    motdtext.innerHTML = text;
})