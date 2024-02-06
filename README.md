# 🦜️ TP d'Atelier de Génie Logiciel: Application de gestion des ménages

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
3. Démarrez tous les services avec Docker:

    Pour l'environnement de développement
    ```sh
    docker-compose -f docker-compose.dev.yml up -d --build
    ```
    Pour l'environnement de production
    ```shell
    docker-compose -f docker-compose.prod.yml up -d --build
    ```

## Utilisation
Une fois les services démarrés, vous pouvez accéder à l'application via votre navigateur web :

Pour l'environnement de développement : `http://localhost:4300`
Pour l'environnement de production : `http://localhost:4300`


#### Surveillance des services

Pour l'environnement de développement

```shell
docker-compose -f docker-compose.dev.yml logs -f
```

Pour l'environnement de production
```shell
docker-compose -f docker-compose.prod.yml logs -f
```