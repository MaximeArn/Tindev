/** @format */

let users = [
  {
    username: "Etienne",
    firstname: "Etienne",
    lastname: "JeSaisPas",
    email: "Etienne@gmail.com",
    password: "niquejason",
    age: 30,
    city: "Paris",
    role: "user",
  },
  {
    username: "Antho",
    firstname: "Antho",
    lastname: "Jesaispas2",
    email: "Antho@gmail.com",
    password: "vivejason",
    age: 26,
    city: "lesud",
    role: "user",
  },
  {
    username: "Liv",
    firstname: "Liv",
    lastname: "Jesaispas3",
    email: "Liv@gmail.com",
    password: "viveleslgbt",
    age: 26,
    city: "Brest",
    role: "user",
  },
];

let categories = [
  {
    name: "Video Game",
  },
  {
    name: "Web",
  },
  {
    name: "Software",
  },
  {
    name: "AI",
  },
  {
    name: "Static",
  },
  {
    name: "Java",
  },
  {
    name: "React",
  },
  {
    name: "Angular",
  },
  {
    name: "Vue",
  },
  {
    name: "NodeJS",
  },
];

let projects = [
  {
    image: "image-default.jpeg",
    author: "John",
    title: "Pomodoro",
    description: `Le Pomodoro, pour ceux qui ne connaissent pas, c'est quoi ?
      C'est une technique de gestion du temps, basée sur un minuteur. On sélectionne une tâche, puis on travaille sur des durées de 25 minutes, et on enchaîne sur de courtes pauses, par cycle de 4 pour arriver à une pause plus longue.`,
    contributors: [],
    categories: ["Java", "Software", "AI", "Angular"],
    applicants: [],
    size: 2,
  },
  {
    image: "image-default.jpeg",
    author: "John",
    title: "Voyage Voyage",
    description: `Un outil qui permettrait à chaque personne ayant l’âme d'un leader de groupe d'organiser un voyage que ce soit pour un séminaire professionnel, un voyage entre amis ou en famille ou autre.`,
    contributors: [],
    categories: ["Java", "Software", "AI", "Angular"],
    applicants: [],
    size: 3,
  },
  {
    image: "image-default.jpeg",
    author: "John",
    title: "Jardins Connectés",
    description: `S'entraider entre jardiniers pour être plus autonomes dans nos productions au potager.
      Gérer des données sur notre propre potager pour les analyser et s'améliorer.
      Voir les jardiniers qui ont de bons résultats dans son secteur pour s'entraider.
      S'appuyer sur un référentiel de fiches diverses en BDD pour mieux gérer nos potagers.
      Le but est de faire un projet qui nous plait, de continuer à apprendre et de travailler en équipe. C'est certainement un poil ambitieux, alors on peut évidemment simplifier.`,
    contributors: [],
    categories: ["Java", "Software", "AI", "Angular"],
    applicants: [],
    size: 4,
  },
  {
    image: "image-default.jpeg",
    author: "John",
    title: "tindev",
    description: `Réseau social permettant de réunir des devs autour d'un projet commun.
      Vous pourrez proposer un projet ou vous joindre au projet d'un autre utilisateur.
      Vous aurez la possibilité de filtrer les recherches selon vos critères.
      Discutez avec les autres utilisateurs via une messagerie instantanée et créez des groupes afin de faciliter la communication.`,
    contributors: [],
    categories: ["Java", "Software", "AI", "Angular"],
    applicants: [
      {
        username: "Etienne",
        message:
          "J'suis chaud pour le projet mais y a cyberpunk dans 3 semaine tu comptes plus sur moi après",
      },
      { username: "Tanguy", message: "react-redux chaud !!!" },
      { username: "Jerry", message: "salut le projet est en français ?" },
      {
        username: "Maxime",
        message:
          "SLT MOI C MAXIME JSUIS CHO PR LE PROJET SA MERE PREN MOI STEUPLEZ",
      },
      { username: "John", message: "Interessant comme projet je postule" },
    ],
    size: 5,
  },
];

let collectionsInfos = [
  { name: "users", data: users },
  { name: "categories", data: categories },
  { name: "projects", data: projects },
];

db.getCollectionNames().forEach((collection) => {
  db[collection].drop();
});

collectionsInfos.forEach(({ name, data }) => {
  db[name].insertMany(data);
});
