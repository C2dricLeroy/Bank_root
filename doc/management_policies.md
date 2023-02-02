# Management policies 

Les règles de gestion sont les fonctionnalités détaillées que présentent l'application. 

## Client

* Le client possède un nom et un prénom.
* Les clients possèdent un comte bancaire chez Bank_root.


## Admin

* L'admin possède un nom et un prénom
* L'admin possède un nom d'utilisateur et un mot de passe permettant d'accèder à un espace Admin (Dashboard)


## Comptes 

* A chaque client correspond un compte, un mot de passe, un nom d'utilisateur. 
* Chaque compte peut être créditeur ou débiteur
* Chaque compte dispose d'un log dans lequel se trouve toutes les transactions. 


## Dashboard

* Un dashboard permet de consulter le solde de l'intégralité des comptes bancaires ainsi que leur titulaire.
* Le dashboard doit présenter sous forme de tableau les comptes bancaires. 
* Le Dashboard doit présenter les demandes de suppression de compte. 


## Page d'accueil

* La page d'accueil contient les informations basiques sur la banque Bank_root.
* La page d'accueil contient un formulaire de connexion.
* La connexion permet de se rendre sur l'espace client ou l'espace admin. (selon le rôle de la personne connectée.
* La page d'accueil constitue le seul endroit visible des simples visiteurs. 
* Les visiteurs peuvent créer un compte client sur


## Espace client

* Le client peut faire une demande de retrait d'argent.
* La demande de retrait d'argent passe par un formulaire.
* Le client peut cliquer sur un bouton pour demander la supression de son compte.
* Dans l'espace client est affiché le solde du compte. 
* Le client peut, par un formulaire faire une demande de virement vers un autre compte. 
* Le client peut, grâce à un formulaire, faire une demande de dépôt d'argent. 
* Pour chaque compte le client peut via un formulaire faire une demande de crédit.
* Le client peut consulter son numéro de compte. 
* Le client peut, grâce à un bouton, consuter son RIB. 
* Le client peut, grâce à un bouton, consulter l'historique de son compte (log).

## RIB 

* Le RIB est constitué du nom du titulaire, du nom de la banque, de l'identifiant de la banque, de l'identifiant de compte.


## Opérations possibles : 

La liste des opérations bancaires possibles sont : 
- Retrait d'argent
- Déposer de l'argent
- Demande de crédit
- Virement vers un autre compte.
- Consulter son numéro de compte (l'ID de compte)
- Consulter les logs de son compte. 


## Suppression du compte

* Le client peut cliquer sur un bouton pour demander la supression de son compte.
* Une demande de suppression est reçue par un admin qui peut l'accepter ou la refuser.


## Les droits administrateur

* L'administrateur peut créer un utilisateur
* L'administrateur peut supprimer un utilisateur
* L'administrateur peut réinitialiser un mot de passe utilisateur
* L'administrateur a un accès complet aux comptes (historique). 
* L'administratreur doit vérifier manuellement le compte crée.


## Mot de passe 

* Le mot de passe doit comporter 8 caracères minimum et contenir au moins 1 chiffres et un caractère spécial.
