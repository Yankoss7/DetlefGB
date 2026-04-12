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
      { text: "Schwimmt nackt im Kanal", value: "katze" }
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
  },
  {
    frage: "Wo in Dortmund ist Detlef aufgewachsen?",
    typ: "radio",
    antworten: [
      { text: "Wellinghofen", value: "wellinghofen" },
      { text: "Oespel", value: "oespel" },
      { text: "Körne", value: "koerne" }
    ],
    korrekt: "wellinghofen"
  },
  {
    frage: "In welchem Jahr ging Detlef in Rente?",
    typ: "radio",
    antworten: [
      { text: "2023", value: "2023" },
      { text: "2022", value: "2022" },
      { text: "2021", value: "2021" }
    ],
    korrekt: "2021"
  },
  {
    frage: "Wie heißen seine drei Enkelkinder?",
    typ: "radio",
    antworten: [
      { text: "Ava, Matteo und Milla", value: "ava" },
      { text: "Hedda, Karlo und Frieder", value: "hedda" },
      { text: "Alva, Mats und Mila", value: "pauline" }
    ],
    korrekt: "ava"
  }
];