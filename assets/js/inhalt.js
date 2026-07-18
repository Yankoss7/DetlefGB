let current = 0;

function ladeFrage() {
  const q = quiz[current];

  document.getElementById("frage").textContent = q.frage;
  const antwortenDiv = document.getElementById("antworten");
  antwortenDiv.innerHTML = "";
  document.getElementById("feedback").innerHTML = "";

  if (q.typ === "input") {
    const input = document.createElement("input");
    input.type = "text"; 
    input.id = "userInput";
    antwortenDiv.appendChild(input);
  }

  if (q.typ === "radio") {
    q.antworten.forEach((a) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");

      radio.type = "radio";
      radio.name = "antwort";
      radio.value = a.value;

      label.appendChild(radio);
      label.appendChild(document.createTextNode(a.text));

      antwortenDiv.appendChild(label);
      antwortenDiv.appendChild(document.createElement("br"));
    });
  }

  if (q.typ === "checkbox") {
    q.antworten.forEach((a) => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");

      checkbox.type = "checkbox"; 
      checkbox.name = "antwort";
      checkbox.value = a.value;

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(a.text));

      antwortenDiv.appendChild(label);
      antwortenDiv.appendChild(document.createElement("br"));
    });
  }
}

document.getElementById("richtigbtn").addEventListener("click", () => {
  const q = quiz[current];
  let userAntwort = "";
  let istRichtig = false;
  let istFastRichtig = false;

  if (q.typ === "input") {
    userAntwort = document.getElementById("userInput").value;
  }

  if (q.typ === "radio") {
    const checked = document.querySelector('input[name="antwort"]:checked');
    if (checked) userAntwort = checked.value;
  }

  if (q.typ === "checkbox") {
    const checked = document.querySelectorAll('input[name="antwort"]:checked');

    userAntwort = [];
    checked.forEach((cb) => {
      userAntwort.push(cb.value);
    });

    const richtige = q.korrekt;
    let treffer = userAntwort.filter(val => richtige.includes(val)).length;

    if (treffer === richtige.length && userAntwort.length === richtige.length) {
      istRichtig = true;
    } else if (treffer > 0) {
      istFastRichtig = true;
    }
  } else {
    istRichtig = userAntwort === q.korrekt;
  }

  const feedback = document.getElementById("feedback");

  feedback.innerHTML = "";

  if (istRichtig) {

   feedback.innerHTML = "<p>Richtig! 🎉</p>";

    if (q.bilder) {
      q.bilder.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.style.width = "120px";
        img.style.margin = "10px";
        feedback.appendChild(img);
      });
    }

  } else if (istFastRichtig) {
    feedback.textContent = "Fast richtig ";

  } else {
    feedback.textContent = "Leider falsch ";
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  current++;

  if (current < quiz.length) {
    ladeFrage();
  } else {
    document.body.innerHTML = "<h1>Fertig 🎉</h1>";
  }
});

ladeFrage();