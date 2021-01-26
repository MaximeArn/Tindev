require("dotenv").config();
const hashPassword = require("./src/utils/hashPassword");
const { User, Project, Category } = require("./src/models");
const connection = require("./src/config/database");

(async () => {
  connection.dropDatabase();

  const users = [
    {
      username: "etienne",
      email: "etienne@gmail.com",
      password: await hashPassword("etienne"),
    },
    {
      username: "charles",
      email: "charles@gmail.com",
      password: await hashPassword("charles"),
    },
    {
      username: "antho",
      email: "antho@gmail.com",
      password: await hashPassword("antho"),
    },
    {
      username: "maxime",
      email: "maxime@gmail.com",
      password: await hashPassword("maxime"),
    },
    {
      username: "admin",
      email: "admin@gmail.com",
      password: await hashPassword("admin"),
      role: "Admin",
    },
    {
      username: "admin2",
      email: "admin2@gmail.com",
      password: await hashPassword("admin2"),
      role: "Admin",
    },
    {
      username: "tanguy",
      email: "tanguy@gmail.com",
      password: await hashPassword("tanguy"),
    },
    {
      username: "john",
      email: "john@gmail.com",
      password: await hashPassword("john"),
    },
    {
      username: "sylvain",
      email: "sylvain@gmail.com",
      password: await hashPassword("sylvain"),
    },
    {
      username: "liv",
      email: "liv@gmail.com",
      password: await hashPassword("liv"),
    },
    {
      username: "pauline",
      email: "pauline@gmail.com",
      password: await hashPassword("pauline"),
    },
    {
      username: "jerry",
      email: "jerry@gmail.com",
      password: await hashPassword("jerry"),
    },
  ];

  const categories = [
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
    {
      name: "PHP",
    },
    {
      name: "Python",
    },
    {
      name: "Rust",
    },
    {
      name: "Go",
    },
    {
      name: "Swift",
    },
  ];

  const projects = [
    {
      title: "Pomodoro",
      description: `Le Pomodoro, pour ceux qui ne connaissent pas, c'est quoi ?
        C'est une technique de gestion du temps, basée sur un minuteur. On sélectionne une tâche, puis on travaille sur des durées de 25 minutes, et on enchaîne sur de courtes pauses, par cycle de 4 pour arriver à une pause plus longue.`,
      size: 2,
    },
    {
      title: "Voyage Voyage",
      description: `Un outil qui permettrait à chaque personne ayant l’âme d'un leader de groupe d'organiser un voyage que ce soit pour un séminaire professionnel, un voyage entre amis ou en famille ou autre.`,
      size: 3,
    },
    {
      title: "Jardins Connectés",
      description: `S'entraider entre jardiniers pour être plus autonomes dans nos productions au potager.
        Gérer des données sur notre propre potager pour les analyser et s'améliorer.
        Voir les jardiniers qui ont de bons résultats dans son secteur pour s'entraider.
        S'appuyer sur un référentiel de fiches diverses en BDD pour mieux gérer nos potagers.
        Le but est de faire un projet qui nous plait, de continuer à apprendre et de travailler en équipe. C'est certainement un poil ambitieux, alors on peut évidemment simplifier.`,
      size: 4,
    },
    {
      title: "Tindev",
      description: `Réseau social permettant de réunir des devs autour d'un projet commun.
        Vous pourrez proposer un projet ou vous joindre au projet d'un autre utilisateur.
        Vous aurez la possibilité de filtrer les recherches selon vos critères.
        Discutez avec les autres utilisateurs via une messagerie instantanée et créez des groupes afin de faciliter la communication.`,
      size: 5,
    },
    {
      title: "Facebook",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend blandit massa, id fermentum risus dignissim non. Phasellus vestibulum, massa eu dapibus luctus, lacus dolor lobortis nisl, eu condimentum lacus enim fermentum nulla. Pellentesque justo nisi, fringilla in sagittis nec, laoreet ut libero. Praesent ut erat massa. Fusce in posuere.`,
      size: 5,
    },
    {
      title: "Google",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend blandit massa, id fermentum risus dignissim non. Phasellus vestibulum, massa eu dapibus luctus, lacus dolor lobortis nisl, eu condimentum lacus enim fermentum nulla. Pellentesque justo nisi, fringilla in sagittis nec, laoreet ut libero. Praesent ut erat massa. Fusce in posuere.`,
      size: 6,
    },
    {
      title: "Twitter",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend blandit massa, id fermentum risus dignissim non. Phasellus vestibulum, massa eu dapibus luctus, lacus dolor lobortis nisl, eu condimentum lacus enim fermentum nulla. Pellentesque justo nisi, fringilla in sagittis nec, laoreet ut libero. Praesent ut erat massa. Fusce in posuere.`,
      size: 3,
    },
    {
      title: "Twitch",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend blandit massa, id fermentum risus dignissim non. Phasellus vestibulum, massa eu dapibus luctus, lacus dolor lobortis nisl, eu condimentum lacus enim fermentum nulla. Pellentesque justo nisi, fringilla in sagittis nec, laoreet ut libero. Praesent ut erat massa. Fusce in posuere.`,
      size: 7,
    },
    {
      title: "Amazon",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend blandit massa, id fermentum risus dignissim non. Phasellus vestibulum, massa eu dapibus luctus, lacus dolor lobortis nisl, eu condimentum lacus enim fermentum nulla. Pellentesque justo nisi, fringilla in sagittis nec, laoreet ut libero. Praesent ut erat massa. Fusce in posuere.`,
      size: 8,
    },
    {
      title: "Apple",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend blandit massa, id fermentum risus dignissim non. Phasellus vestibulum, massa eu dapibus luctus, lacus dolor lobortis nisl, eu condimentum lacus enim fermentum nulla. Pellentesque justo nisi, fringilla in sagittis nec, laoreet ut libero. Praesent ut erat massa. Fusce in posuere.`,
      size: 13,
    },
  ];

  console.log("MongoDB Seed initialized");

  users.forEach(async (user) => {
    await User.create({
      ...user,
      activated: true,
      expire_at: null,
    });
  });
  projects.forEach(
    async (project) =>
      await Project.create({
        ...project,
        image: "image-default.jpeg",
        categories: ["Java", "Software", "AI", "Angular"],
        author: "admin",
      })
  );
  categories.forEach(async (category) => await Category.create(category));

  console.log("MongoDB Seed done");
})();
