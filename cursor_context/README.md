# Contexte projet : MySubs

**MySubs** est une application mobile développée avec React Native + Expo, destinée à aider les utilisateurs à **gérer, suivre et organiser tous leurs abonnements récurrents** depuis une seule interface simple et moderne.

---

## 🎯 Objectif principal

Permettre à l’utilisateur de reprendre le contrôle sur son budget en :

- Visualisant tous ses abonnements en un seul endroit
- Recevant des **notifications avant chaque prélèvement**
- Calculant le **coût total de ses abonnements** (mensuel, annuel, par catégorie)
- Évitant les oublis ou doublons d’abonnement

---

## 👥 Public cible

### 🎓 Cible principale : Étudiants

- Budget limité
- Début dans la gestion financière personnelle
- Nombreux abonnements (Netflix, Spotify, transport, box…)

### 🧑‍💼 Cible secondaire : Jeunes actifs (20–30 ans)

- Multiplication des abonnements personnels + pro
- Besoin de contrôle et de centralisation

### 👨‍👩‍👧‍👦 Cible tertiaire : Familles

- Suivi multi-profils (parents/enfants)
- Abonnements partagés

---

## 💡 Fonctionnalités prévues (grandes lignes)

### 🔐 Authentification

- Création de compte (e-mail/password)

### 📦 Gestion des abonnements

- Ajout manuel d’un abonnement (nom, logo, montant, fréquence, date…)
- Possibilité d’ajout automatique plus tard via API bancaire/mail
- Modification et suppression d’abonnements

### 📅 Vue & organisation

- Liste des abonnements actifs
- Vue mensuelle (calendrier)
- Catégorisation personnalisée
- Calcul des totaux par mois, année, catégorie

### 🔔 Notifications

- Alerte quelques jours avant un prélèvement

### 📊 Statistiques

- Top abonnements les plus chers
- Évolution du budget mensuel
- Suggestions d’optimisation (alternatives, économie…)

### 👥 Multi-profils

- Gestion de plusieurs profils dans un même compte (packs payants)
- Exemple : personnel + enfant, ou colocataire, ou couple

### ⚙️ Paramètres

- Thème clair/sombre
- Langue et devise
- Export/import de données
- Réinitialisation complète

---

## 💸 Modèle économique

**Freemium avec achats intégrés uniques (non récurrents)**  
Aucune pub ni abonnement mensuel.

- ✅ Gratuit (limité à 7 abonnements, 1 profil, 5 catégories)
- 🛍️ Packs payants :
  - Abonnements illimités
  - Profils multiples (Duo / Famille)
  - Catégories illimitées
  - Ajout automatique via API bancaire
  - Pack Tout-en-un (tout débloqué)

---

## 🧠 Fonctions IA envisagées plus tard

- Catégorisation automatique d’abonnements
- Suggestions d’économies (plans moins chers)
- Analyse des hausses de tarifs d’un service
- Support intelligent pour aider l’utilisateur
- Alertes intelligentes (prélèvements inhabituels)

---

## 🛠️ Stack technique

- **Frontend mobile** : React Native + Expo + Tailwind (NativeWind)
- **Backend / base de données** : Supabase
- **Push notifications** : Expo Notifications
- **Stockage de fichiers** : Supabase Storage
- **État global** : Zustand (ou Context)
- **Déploiement Android prioritaire** (Play Store)
- **Web app plus tard** : React.js ou Next.js

---

## 📌 Contexte Cursor

Tu es chargé d’accompagner le développeur dans la **construction de la base Supabase, des règles de sécurité, des appels API, et de la logique métier liée à la gestion d’abonnements**, en te basant sur les objectifs et fonctionnalités décrites ci-dessus.

**Ne fais aucune supposition sur le design ni sur les noms précis de tables ou colonnes** sans demande explicite. Tu recevras ces consignes au fur et à mesure.
