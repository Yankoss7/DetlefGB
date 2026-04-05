let button = document.querySelector("#richtigbtn");
let istRichtig = false;
let inputs = document.querySelectorAll('input[name="antwort"]');
let fieldset = document.querySelector("fieldset");
let div = document.querySelector("#antwort");


inputs.forEach(function(input){

  input.addEventListener("change", function(){

    clearAntwort();

    if(input.value === "ava"){
      
      const p = document.createElement("p");
      p.textContent = "Richtig!";

      const img = document.createElement("img");
      img.src = "./assets/img/hund.jpeg";
      img.width = 100;

      div.appendChild(p);
      div.appendChild(img);

    } else {

      const p = document.createElement("p");
      p.textContent = "Leider falsch!";

      div.appendChild(p);
    }

  });

});

function clearAntwort(){
  div.innerHTML = "";
}


function clearAntwort() {
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}