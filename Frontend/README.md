# Missions

#### faire des couleurs pour les jours qui ont été remplis ou non //fait
### relier toutes les valeurs à leurs jours  //fait
### faire le choix de l'année    //fait
### faire l'apercu et le calcul des heures totales   //fait
### faire en sorte que l'année soit choisi lors du survol du bouton  //fait
### faire une authentification //fait

### en fonction du nombre d'heure, faire une moyenne du salaire estimé
### faire un compteur des trimestres en fonction du nombre total d'heure effectuée
### voir pour gérer les samedis et dimanches
### faire un switch dans le resultat des heures pour changer d'années

# Pour permettre PWA

### 1 - dans le terminal : 
    => npm install vite-plugin-pwa --save-dev   
### 2 - configurer vite.config.js
### 3 - Ajouter un service worker (vite-plugin-pwa déja renseigner avec vite)
### 4 - placer les images dans le répertoire public
### 5 - tester localement pwa
    => npm run build
    => npm install -g serve
    => serve dist
### 6 - SI NON FONCTIONNEL
    => Get-ExecutionPolicy (pour regarder si restricted)
    => Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned (pour changer le mode)
    => serve dist (pour retenter)
    => Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Restricted (pour revenir au mode précédent)
### 7 - Deploiement l'application avec : npm install -g vercel
### 8 - creer le fichier manifest.json dans le repertoire public et mettre le lien dans index.html
    => <link rel="manifest" href="/manifest.json">
### 9 - Dans la page chrome, 
    => regarder dans les trois petits points puis installer application
    => si ya pas, aller sur chrome://flags/ et chercher Desktop PWAs et autorisé l'installation
### 10 - Faite installer localement l'application


# A savoir

Ctrl+Shift+R pour forcer le reload de la page

test