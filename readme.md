# Projet Express.js Bootstrap

ce projet est peut être utilisé comme modèle pour la mise en place d'une API (gestion des erreurs avec des middlewares, gestion des routes dans des fichiers distincts...).

La structure du projet est basée sur celle obtenue avec express-generator.

## Commandes utiles

- installer les dépendances : `npm i`

- démarrer en environnement de développement avec hot reloading : `npm run dev`

- démarrer en environnement de production : `npm start`

## Tests des gestionnaires d'erreurs et des routes

### Résultat positif : code 200

#### GET "/users"

`curl -i localhost:3000/users`

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 138
ETag: W/"8a-YiJpwMY5MV9JqcozFg0OX85E1Oc"
Date: Tue, 12 Jan 2021 17:49:16 GMT
Connection: keep-alive

[{"id":1,"firstname":"Hello","lastname":"World"},{"id":2,"firstname":"John","lastname":"Doe"},{"id":3,"firstname":"Foo","lastname":"Bar"}]
```

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

#### test du gestionnaire de méthode non autorisées (= erreur 405) : POST "/users"

`curl -i -X POST localhost:3000/users`

```
HTTP/1.1 405 Method Not Allowed
X-Powered-By: Express
Allow: get
Content-Type: application/json; charset=utf-8
Content-Length: 32
ETag: W/"20-NuBsRPAlEbyvGwraxh+YD4XkKWE"
Date: Tue, 12 Jan 2021 17:48:18 GMT
Connection: keep-alive
```

```
{
    "message": "Method Not Allowed"
}
```

### Erreur 404 : Ressource inconnue

`curl -i -X POST localhost:3000/not-found`

```
HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 23
ETag: W/"17-SuRA/yvUWUo8rK6x7dKURLeBo+0"
Date: Tue, 12 Jan 2021 17:51:48 GMT
Connection: keep-alive

{"message":"Not Found"}
```

- test du gestionnaire d'erreur 404 : GET "/not-found"

`{ "message": "Not Found" }`

### Erreur 500 : Erreur interne

Test du gestionnaire d'erreur 500 : GET "/error"

`curl -i localhost:3000/error`

```
HTTP/1.1 500 Internal Server Error
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 32
ETag: W/"20-hQ1I+eKdVRTd8rGGTf5UOIUtyB0"
Date: Tue, 12 Jan 2021 17:55:28 GMT
Connection: keep-alive

{"message":"This is an error !"}
```

---

**Alexandre Leroux**

alex@sherpa.one

_Enseignant vacataire à l'Université de Lorraine_

- IUT Nancy-Charlemagne (LP Ciasie)

- Institut des Sciences du Digital (Masters Sciences Cognitives)
