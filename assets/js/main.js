const quiz = [
  {
    frage: "Wieviele Geschwister hat Detlef?",
    typ: "input",
    korrekt: "3",
    bilder: [
      "assets/img/geschwister.jpg",
    ]
  },
  {
    frage: "Warum war Detlef 1985 in der Zeitung?",
    typ: "radio",
    antworten: [
      { text: "Letzter Surfer auf dem Hengsteysee", value: "surfen" },
      { text: "Handballbezirksliga Torschützenkönig", value: "handball" },
      { text: "Schwimmt nackt im Kanal", value: "katze" }
    ],
    korrekt: "surfen",
     bilder: [
      "assets/img/surfen.jpg",
      "assets/img/surf.jpg"
    ]
  },
  {
    frage: "Wie haben sich Antje und Detlef kennengelernt?",
    typ: "radio",
    antworten: [
      { text: "Handballvereinsfahrt ins Sauerland", value: "handball" },
      { text: "Auf einer Klassenfahrt nach Lichtendorf", value: "klassenfahrt" },
      { text: "Während des Studium in der Bibliothek", value: "studium" }
    ],
    korrekt: "klassenfahrt"
  },
  {
    frage: "Welchen Job hatte Detlef während des Studiums?",
    typ: "radio",
    antworten: [
      { text: "Kellner", value: "fahrrad" },
      { text: "Taxi fahren", value: "taxi" },
      { text: "Zeitungszusteller", value: "tief" }
    ],
    korrekt: ["taxi"]
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
    frage: "Wann haben sich Antje und Detlef kennengelernt?",
    typ: "radio",
    antworten: [
      { text: "1985", value: "wellinghofen" },
      { text: "1991", value: "oespel" },
      { text: "1979", value: "koerne" }
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
    korrekt: "ava" ,
     bilder: [
      "assets/img/kids.JPG"
    ]
  }
];