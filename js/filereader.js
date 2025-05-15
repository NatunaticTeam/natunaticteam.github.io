motdtext = document.getElementById("motd-text")

function getRandomLine(lines) {
    const randomIndex = Math.floor(Math.random() * lines.length);
    return lines[randomIndex];
}

/*fetch("./assets/motd.txt").then(r=>r.text()).then(text => {
    motdtext.innerHTML = text;
})*/