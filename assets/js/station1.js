let button = document.querySelector("#richtigbtn");
let istRichtig = false;
let input = document.querySelector("input");
let fieldset = document.querySelector("fieldset");
let div = document.querySelector("#antwort");
let zaehler = 0;

button.addEventListener("click", function(){
    const wert = input.value;
    if(wert == "3"){
        clearAntwort();
        
        const p = document.createElement("p");
        p.textContent ="Richtig!";

        const img = document.createElement("img");
        const a = document.createElement("a");
        img.src = "./assets/img/hi.jpeg";
        img.width = 80;
        img.height = 80;

        a.appendChild(img);


        div.appendChild(p);
        div.appendChild(a);
    }
    else if(wert == "4"){
        clearAntwort();
        zaehler++;
        const p = document.createElement("p");
        p.textContent ="4 Sehr knapp!";
        div.appendChild(p);
        
    }
    else{
        clearAntwort();
        zaehler ++;
          const p = document.createElement("p");
        p.textContent =`Wie bitte. Nein! Versuche es Bitte noch einmal!(${zaehler})`;
        div.appendChild(p);
    }
});

function clearAntwort() {
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}