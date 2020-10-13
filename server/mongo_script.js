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
    lastname: "",
    email: "Antho@gmail.com",
    password: "vivejason",
    age: 26,
    city: "lesud",
    role: "user",
  },
  {
    username: "Liv",
    firstname: "Liv",
    lastname: "Lacon",
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
    color: "orange",
  },
  {
    name: "Web",
    color: "purple",
  },
  {
    name: "Software",
    color: "green",
  },
  {
    name: "AI",
    color: "blue",
  },
  {
    name: "Static",
    color: "red",
  },
  {
    name: "Java",
    color: "purple",
  },
  {
    name: "React",
    color: "purple",
  },
  {
    name: "Angular",
    color: "purple",
  },
  {
    name: "Vue",
    color: "purple",
  },
  {
    name: "NodeJS",
    color: "purple",
  },
];

let projects = [
  {
    image:
      "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    author: "John",
    title: "tindev",
    description:
      "Mon projet est claqué sa mère mais si il t'interesse tu peux quand même regarder de quoi ça parle",
    contributors: [],
    categories: [],
    size: 2,
  },
  {
    image:
      "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    author: "John",
    title: "tindev",
    description:
      "Mon projet est claqué sa mère mais si il t'interesse tu peux quand même regarder de quoi ça parle",
    contributors: [],
    categories: [],
    size: 3,
  },
  {
    image:
      "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    author: "John",
    title: "tindev",
    description:
      "Mon projet est claqué sa mère mais si il t'interesse tu peux quand même regarder de quoi ça parle",
    contributors: [],
    categories: [],
    size: 4,
  },
  {
    image:
      "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    author: "John",
    title: "tindev",
    description:
      "Mon projet est claqué sa mère mais si il t'interesse tu peux quand même regarder de quoi ça parle",
    contributors: [],
    categories: [],
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
