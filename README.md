# 🦜️Menage Manager TP Web APP

Bienvenue dans Menage Manager TP Web APP, une application web de gestion des tâches ménagères !

## Introduction

Menage Manager TP Web APP est une application conçue pour...

## Installation

### Prérequis

Assurez-vous d'avoir Docker et Docker Compose installés sur votre système.

### Étapes d'installation

1. Clonez le dépôt :

   ```sh
   git clone https://github.com/votre_utilisateur/menage-manager.git
   ```

2. Accédez au répertoire du projet :
    ```sh
        cd groupApp
    ```


## START ALL SERVICES (db + api + web)

### For dev env
    ```sh
    docker-compose -f docker-compose.dev.yml up -d --build
    ```

### For prod env
```shell
docker-compose -f docker-compose.prod.yml up -d --build
```


### Watch all services

#### For dev env
```shell
docker-compose -f docker-compose.dev.yml logs -f
```

#### For prod env
```shell
docker-compose -f docker-compose.prod.yml logs -f
```

### Running Services URLs

#### API
```shell
http://localhost:7100
```

#### Web
```shell
http://localhost:4300
```
