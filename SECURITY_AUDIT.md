# Audit de Sécurité — ABS-Universite 2

**Date:** 2026-11-17  
**Account Hostinger:** Frais (vierge)  
**Status:** Pré-déploiement  
**Outil:** ZCode Hostinger API Plugin (MCP)

---

## 1. État actuel du compte Hostinger

| Ressource | Statut | Détail |
|-----------|--------|--------|
| Domaines portfolio | **Vide** | Aucun domaine enregistré |
| Transferts domaine | **Vide** | Aucun transfert en cours |
| Hébergement (Shared/Cloud) | **Vide** | Aucun site hébergé |
| Hébergement (Agency Plan) | **Vide** | Aucun site Agency |
| VPS (KVM) | **Vide** | Aucune machine virtuelle |
| Abonnements | **Vide** | Aucun abonnement actif |
| Moyens de paiement | **Vide** | Aucun moyen configuré |
| Authentification MCP | **OK** | OAuth connecté (`credentials.json`) |

**Conclusion:** Le compte est vierge. `abs-univ.com` est enregistré mais **pas sur ce compte**. Le VPS KVM8 32GB n'est pas visible — soit sur un autre compte Hostinger, soit à provisionner.

## 1.5 Vérifications préliminaires

- `abs-univ.com` : ~~enregistré~~ mais **hors Hostinger** (WHOIS: non-Hostinger registrar)
- `abs-univ.net` : **Disponible** (~10-15€/an)
- `abs-univ.org` : **Disponible** (~10-15€/an)
- `abs-univ.fr` : **Disponible** (~10€/an, résidence EU requise)
- `abs-univ.ca` : **Disponible** (~15-20€/an)
- `abs-univ.co` : **Disponible** (~25-35€/an)

---

## 2. Checklist de sécurité — Avant premier déploiement

Basée sur le guide de Yvanne Rosat (`livrable.html.pdf`), adaptée à notre stack Hostinger.

### A. Le socle : trois outils

#### 1. Claude Code — L'outil qui écrit le code

| # | Réglage de sécurité | Statut | Notes |
|---|---------------------|--------|-------|
| 1 | ☐ Interdire à Claude Code de lire les fichiers `.env` | ~~À configurer~~ | Règle de permissions à ajouter dans Claude Code |
| 2 | ☐ Ne jamais lancer le mode `--yolo` en production | ~~À surveiller~~ | Vérifier avant chaque déploiement |
| 3 | ☐ MCP: donner le minimum de droits par connecteur | ~~À configurer~~ | Chaque connecteur MCP doit avoir un scope minimal |
| 4 | ☐ Ne jamais coller de clé secrète dans la conversation | ~~À surveiller~~ | Utiliser des variables d'environnement |

#### 2. Coolify — L'outil qui met en ligne

| # | Réglage de sécurité | Statut | Notes |
|---|---------------------|--------|-------|
| 1 | ☐ Mettre Coolify à jour régulièrement | ~~N/A~~ | Pas encore installé |
| 2 | ☐ Activer la double authentification | ~~N/A~~ | Pas encore installé |
| 3 | ☐ Secrets = variables d'exécution (pas de construction) | ~~N/A~~ | À configurer au déploiement |
| 4 | ☐ `/.env` et `/Dockerfile` = introuvables | ~~N/A~~ | À vérifier post-déploiement |
| 5 | ☐ Sauvegardes automatiques vers stockage extérieur | ~~N/A~~ | À configurer au déploiement |
| 6 | ☐ Dashboard Coolify non exposé à Internet | ~~N/A~~ | Via Tailscale quand installé |

#### 3. Supabase — L'endroit où l'app range ses données

| # | Réglage de sécurité | Statut | Notes |
|---|---------------------|--------|-------|
| 1 | ☐ Remplacer tous les secrets d'exemple | ~~N/A~~ | À configurer lors de l'installation |
| 2 | ☐ Port 5432 non ouvert sur Internet | ~~N/A~~ | À configurer dans le firewall VPS |
| 3 | ☐ RLS activée sur chaque table | ~~N/A~~ | À configurer dans Supabase |
| 4 | ☐ `service_role` jamais dans le code navigateur | ~~N/A~~ | À surveiller dans le code |
| 5 | ☐ Sauvegarde quotidienne hors serveur | ~~N/A~~ | À configurer |
| 6 | ☐ Tester une restauration | ~~N/A~~ | À faire après première sauvegarde |

### B. Le terrain : le serveur

| # | Réglage de sécurité | Statut | Notes |
|---|---------------------|--------|-------|
| 1 | ☐ SSH par clé uniquement, mot de passe désactivé | ~~N/A~~ | À configurer sur le VPS |
| 2 | ☐ Pare-feu: SSH + 80 + 443 uniquement | ~~N/A~~ | À configurer sur le VPS |
| 3 | ☐ Mises à jour de sécurité automatiques | ~~N/A~~ | À configurer sur le VPS |
| 4 | ☐ CrowdSec / fail2ban activés | ~~N/A~~ | À installer sur le VPS |

### C. Autour du socle — Outils additionnels

| Outil | Rôle | Quand ajouter | Statut |
|-------|------|---------------|--------|
| **GitHub** | Git + code source | Jour 1 | ~~À créer~~ |
| **Cloudflare** | DNS + SSL + R2 (10Go free) | Dès domaine | ~~À configurer~~ |
| **Uptime Kuma** | Monitoring sites | Dès première app | ~~À installer~~ |
| **Beszel** | Monitoring serveur | Dès multi-services | ~~À installer~~ |
| **Tailscale** | Réseau privé admin | Dès interfaces admin | ~~À configurer~~ |
| **CrowdSec/fail2ban** | Banissement IPs attaquantes | Dès serveur public | ~~À installer~~ |
| **Vaultwarden** | Gestionnaire mots de passe | Dès 3+ secrets | ~~À installer~~ |
| **gitleaks** | Détection clés dans le code | Dès premier dépôt | ~~À configurer~~ |

### D. Checklist pré-déploiement

| # | Vérification | Statut |
|---|-------------|--------|
| 1 | ☐ Code sur GitHub, aucune clé secrète dedans | ~~À faire~~ |
| 2 | ☐ Secrets = variables d'exécution dans Coolify | ~~À faire~~ |
| 3 | ☐ `/.env` et `/Dockerfile` = introuvables | ~~À faire~~ |
| 4 | ☐ RLS activée sur chaque table | ~~À faire~~ |
| 5 | ☐ Port base non ouvert sur Internet | ~~À faire~~ |
| 6 | ☐ Secrets d'exemple Supabase remplacés | ~~À faire~~ |
| 7 | ☐ Sauvegarde auto quotidienne + test restauration | ~~À faire~~ |
| 8 | ☐ Uptime Kuma surveille l'app | ~~À faire~~ |
| 9 | ☐ Coolify, Supabase, système = à jour | ~~À faire~~ |

---

## 3. Plan d'action recommandé

### Phase 1 — Fondation (Jour 1)

1. **Acheter un domaine** sur Hostinger (ou transférer un domaine existant)
2. **Configurer un moyen de paiement** (carte bancaire) dans Hostinger
3. **Créer un repo GitHub** pour `abs-universite-2-1026`
4. **Configurer `.env`** avec les secrets minimaux (clés API nécessaires)
5. **Ajouter `gitleaks`** au workflow Git pour détecter les clés fuites

### Phase 2 — Hébergement (Semaine 1)

1. **Acheter un plan d'hébergement** Hostinger (Shared ou Cloud selon besoin)
2. **Configurer SSL/HTTPS** automatiquement via Hostinger
3. **Brancher Cloudflare** pour DNS + SSL + protection
4. **Configurer les sous-domaines** si besoin (www, blog, api, etc.)

### Phase 3 — Infrastructure (Semaine 2)

1. **Provisionner un VPS** Hostinger (4Go RAM min, 8Go conseillé)
2. **Installer Coolify** sur le VPS
3. **Installer Supabase** via Coolify (auto-hébergé)
4. **Configurer SSH keys** + pare-feu VPS
5. **Activer fail2ban** sur le VPS

### Phase 4 — Monitoring (Semaine 3)

1. **Installer Uptime Kuma** pour monitoring
2. **Installer Beszel** pour monitoring serveur
3. **Configurer Tailscale** pour accès privé admin
4. **Configurer Vaultwarden** pour gestion mots de passe
5. **Configurer sauvegardes automatiques** vers Cloudflare R2

---

## 4. Coûts estimés (Hostinger)

| Service | Prix estimé/mois | Notes |
|---------|------------------|-------|
| Nom de domaine | ~10€/an (1ère année) | .com ~10-15€/an |
| Hébergement Shared | ~5-10€/mois | Plan premium recommandé |
| VPS (KVM) | ~10-15€/mois | 4Go RAM min |
| Cloudflare R2 | ~0-1€/mois | 10Go gratuits |
| **Total estimé** | **~15-25€/mois** | Après 1ère année ~10-15€/mois |

---

## 5. Références

- Guide source: `livrable.html.pdf` — Checklist du PDF par Yvanne Rosat
- Plugin MCP: `hostinger-api` — ZCode plugin pour API Hostinger
- Docs Hostinger: https://hpanel.hostinger.com
- MCP Server: `@hostinger/mcp` — 434+ outils API Hostinger
