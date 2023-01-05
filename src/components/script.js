import Dictionary from "../data/dictionary";
function Script (e) {
    let container = document.querySelector(".container");
    let searchInput = container.querySelector("input");
    let infoText = container.querySelector(".info-text");
    let word = searchInput.value.trim().toLowerCase();
    let translate = Dictionary.find((table) => table.word === word);
    let removetranslate = Dictionary.find((table) => table.word !== word);


    if (translate) {
        container.classList.add("active");
        document.querySelector(".word p").innerText = translate.word;
        document.querySelector(".word span").innerText = translate.phontetics;
        document.querySelector(".meaning span").innerText = translate.meaning;
        document.querySelector(".example span.wo").innerText = translate.examplewo;
        document.querySelector(".example span.fr").innerText = translate.examplefr;
        document.querySelector(".synonyms .list").innerText = translate.synonyms;
        if(translate.synonyms[0] === undefined){
            let container = document.querySelector(".container");
            let synonyms = container.querySelector(".synonyms .list");
            synonyms.parentElement.style.display = "none";
        }else{
            let  container = document.querySelector(".container");
            let synonyms = container.querySelector(".synonyms .list");
            synonyms.parentElement.style.display = "block";
            synonyms.innerHTML = translate.synonyms;
            
        }
    } else if (removetranslate) {
        container.classList.remove("active");
        infoText.style.color = "#000";
        infoText.innerHTML = `Je ne trouve pas la signification de <span>"${word}"</span>. S'il vous plaît, essayez de rechercher un autre mot.`;
    } else if (word === "" || null) {
        infoText.innerHTML = `Je ne trouve pas le sens`;
    } else {
        infoText.innerHTML = `Je ne trouve pas la signification de <span>"${word}"</span>. S'il vous plaît, essayez de rechercher un autre mot.`;
    }

}

function handleClick(e) {
    e.preventDefault();
    let container = document.querySelector(".container");
    let searchInput = container.querySelector("input");
    searchInput.value = "";
    searchInput.focus();
    container.classList.remove("active");
    let infoText = container.querySelector(".info-text");
    infoText.style.color = "#9A9A9A";
    infoText.innerHTML = "Tapez n'importe quel mot existant et appuyez sur Entrée pour obtenir une signification, un exemple, des synonymes, etc."; 
}

export {Script, handleClick}