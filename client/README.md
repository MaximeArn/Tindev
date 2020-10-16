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
- /auth/register Register handler (post)
- /auth/login Login handler (post)
- /auth/verify Vérifier si l'utilisateur est connecté/existe (get)
- /project/ Récupérer tous les projets (get)
- /project/create Ajouter un projet dans la db (post)
- /categories Récupère toutes les catégories (get)


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
1. authentification (login/register)
2. page d'accueil avec tous les projets
3. page de détail d'un projet spécifique
4. possibilité de postuler a un projet (si l'on est connecté)
5. filtrer les recherches par géolocalisation/catégories... 
6. page de management de son projet (si l'on est le créateur du projet)
7. page pour créer un projet (uniquement si l'on est connecté)
8. page de profil d'un utilisateur
9. page de recherche de membres
10. messagerie instantanée

 #### optional feature :
1. authentification google et github
1. afficher les projets "done" sur la page de profil d'un user 
1. systeme de likes/commentaires
1. création de groupes de messagerie
2. dark theme


### Equipe :

### 2 Devs :

- Un lead dev front 
- Un lead dev back


