# Projet Express.js Bootstrap

ce projet est peut être utilisé comme modèle pour la mise en place d'une API (gestion des erreurs avec des middlewares, gestion des routes dans des fichiers distincts...).

La structure du projet est basée sur celle obtenue avec express-generator.

## Commandes utiles

- installer les dépendances : `npm i`

- démarrer en environnement de développement avec hot reloading : `npm run dev`

- démarrer en environnement de production : `npm start`

## Tests des gestionnaires d'erreurs et des routes

### Résultat positif : code 200

- test positif : GET "/users"

```
[
    {
        "id": 1,
        "firstname": "Hello",
        "lastname": "World"
    },
    {
        "id": 2,
        "firstname": "John",
        "lastname": "Doe"
    },
    {
        "id": 3,
        "firstname": "Foo",
        "lastname": "Bar"
    }
]
```

### Erreur 405 : Méthode HTTP non-autorisée

- test du gestionnaire de méthode non autorisées (= erreur 405) : POST "/users"

```
{
    "message": "Method Not Allowed"
}
```

### Erreur 404 : Ressource inconnue

- test du gestionnaire d'erreur 404 : GET "/users/7"

`{ "message": "Method Not Allowed" }`

### Erreur 500 : Erreur interne

- test du gestionnaire d'erreur 500 : GET "/error"

```
{
    "message": "This is an error !"
}
```

---

**Alexandre Leroux**

alex@sherpa.one

_Enseignant vacataire à l'Université de Lorraine_

- IUT Nancy-Charlemagne (LP Ciasie)

- Institut des Sciences du Digital (Masters Sciences Cognitives)
