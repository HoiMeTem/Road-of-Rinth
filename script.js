const wikiButton = document.getElementById('wiki');
const resourceButton = document.getElementById('resources');
const wikiText = document.getElementById('wiki-text');
const resourceText = document.getElementById('resource-text');


wikiButton.addEventListener("mouseover", () => {
    wikiText.innerText = "[WIP]";
});

resourceButton.addEventListener("mouseover", () => {
    resourceText.innerText = "[WIP]";
});