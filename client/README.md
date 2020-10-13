# Tindev : Reseau social pour dev

Vous avez besoin de devs pour concrétiser un projet ? Tindev est fait pour vous !!

## Presentation du projet :

Réseau social permettant de reunir des devs autour d'un projet commun.
Vous pourrez proposer un projet ou vous joindre au projet d'un autre utilisateur.
Vous aurez la possibilité de filtrer les recherches selon vos critères.
Discutez avec les autres utilisateurs via une messagerie instantanée et créez des groupes afin de faciliter la communication.

## Besoins/Objectifs :
Cette application aidera les developpeurs à trouver des collaborateurs afin de les aider a réaliser leur projet.
L'application simplifiera la recherche et permettra de filtrer plus en profondeur par le biais de critères, prérequis et centre d'intérêts.

## Public ciblé :
-Développeurs
-Manager
-Junior
-Senior

## Navigateur compatibles : 
Tout sauf IE

## Routes :

### Client:
- "/" Home Page
- "/login" Login modal
- "/register" Register modal
- "/project/:name" Détail d'un projet
- "/project/create" Création d'un projet
- "/project/category/:name" Liste des projets par catégories
- "/categories" Liste de toutes les catégories

### Server:
- /auth/register Register handler
- /auth/login Login handler
- /auth/verify Vérifier si l'utilisateur est connecté/existe
- /project/ Récupérer tous les projets
- /project/create Ajouter un projet dans la db
- /categories Récupère toutes les catégories


### Technos :

1. React 
2. TypeScript
3. NodeJs
4. Express
5. mongoDB
6. Redux
7. Insomnia/Postman


### Features :

 #### MVP :
1. authentification (google...) 
2. messagerie instantanée
3. création de groupes
4. géolacalisation 
5. projects homepage
1. page de profil  

 #### optional feature :
1. Permettre à un utilisateur de mettre son projet en attente le temps de postuler a un projet
1. afficher les projets "done" sur la page de profil d'un user 
1. systeme de likes/commentaires
2. dark theme


### Equipe :

### 2 Devs :

- Un lead dev front 
- Un lead dev back


