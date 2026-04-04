let button = document.querySelector("#richtigbtn");
let istRichtig = false;
let inputs = document.querySelectorAll('input[name="antwort"]');
let fieldset = document.querySelector("fieldset");
let div = document.querySelector("#antwort");


inputs.forEach(function(input){

  input.addEventListener("change", checkAntwort)
  });
function checkAntwort(){
    clearAntwort();

    let taxi = document.querySelector('input[value="taxi"]').checked;
    let fahrrad = document.querySelector('input[value="fahrrad').checked;
    let tiefbau = document.querySelector('input[value="tiefbau"]').checked;

    if(taxi && fahrrad && tiefbau){
      
      const img = document.createElement("img");
      img.src = "./assets/img/hi.jpeg";
      img.width = 80;

      const p = document.createElement("p");
      p.textContent = "Richtig!";

      div.appendChild(img);
      div.appendChild(p);

    } else {

      const p = document.createElement("p");
      p.textContent = "noch nicht richtig!";

      div.appendChild(p);
    }

  }




function clearAntwort(){
  div.innerHTML = "";
}


function clearAntwort() {
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}