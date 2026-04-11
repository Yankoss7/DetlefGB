const quiz = [
  {
    frage: "Wieviele Geschwister hat Detlef?",
    typ: "input",
    korrekt: "3",
    bilder: [
      "assets/img/hi.jpeg"
    ]
  },
  {
    frage: "Warum war Detlef 1990 in der Zeitung?",
    typ: "radio",
    antworten: [
      { text: "Letztter Surfer auf dem Hengsteysee", value: "surfen" },
      { text: "Handballbezirksliga Torschützenkönig", value: "handball" },
      { text: "", value: "katze" }
    ],
    korrekt: "surfen"
  },
  {
    frage: "Wie haben sich Mama und Papa kennengelernt?",
    typ: "radio",
    antworten: [
      { text: "Handballverein", value: "handball" },
      { text: "Klassenfahrt", value: "klassenfahrt" },
      { text: "Studium", value: "studium" }
    ],
    korrekt: "klassenfahrt"
  },
  {
    frage: "Welche Jobs hatte Detlef während des Studiums?(mehrere Antworten richtig)",
    typ: "checkbox",
    antworten: [
      { text: "Taxi fahren", value: "taxi" },
      { text: "Fahrrad support", value: "fahrrad" },
      { text: "Tiefbauarbeiter", value: "tief" }
    ],
    korrekt: ["fahrrad", "taxi", "tief"]
  },
  {
    frage: "Wie hieß der Familienhund?",
    typ: "radio",
    antworten: [
      { text: "Hasso", value: "hasso" },
      { text: "Blacky", value: "blacky" },
      { text: "Pepe", value: "pepe" }
    ],
    korrekt: "blacky"
  }
];