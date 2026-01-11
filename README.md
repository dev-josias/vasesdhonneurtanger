# Vases d'Honneur Tanger - Site Web

Site web moderne et professionnel pour l'église Vases d'Honneur Tanger, construit avec Next.js 16 et Tailwind CSS v4.

## 🎨 Design System

### Palette de couleurs (2026 - Less is More)

- **Tons chaleureux** : Or (#d4a574), Bronze (#cd7f32)
- **Couleurs profondes** : Bleu nuit (#1a1f3a), Violet profond (#2d2342)
- **Accents vibrants** : Corail (#ff6b6b), Turquoise (#4ecdc4)

### Typographie

- **Titres** : Inter (sans-serif, moderne)
- **Corps** : Open Sans (lisible, accessible)

## 📁 Structure du projet

```
src/
├── app/
│   ├── a-propos/          # Page À propos
│   ├── evenements/         # Page Événements
│   ├── predications/       # Page Prédications
│   ├── donner/             # Page Donner
│   ├── contact/            # Page Contact
│   ├── layout.tsx          # Layout principal avec SEO
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux et design system
│   ├── sitemap.ts          # Sitemap XML
│   └── robots.ts            # Robots.txt
├── components/
│   ├── Header.tsx          # Navigation principale
│   ├── Footer.tsx          # Pied de page
│   ├── CTAButton.tsx       # Boutons CTA réutilisables
│   ├── WhatsAppButton.tsx  # Bouton WhatsApp flottant
│   └── NewVisitorPopup.tsx # Pop-up nouveaux visiteurs
```

## ✨ Fonctionnalités

### Pages principales

- ✅ Page d'accueil avec hero, événements, témoignages, section nouveaux visiteurs
- ✅ Page À propos (histoire, vision, valeurs, équipe)
- ✅ Page Événements (calendrier interactif)
- ✅ Page Prédications (bibliothèque audio/vidéo avec recherche)
- ✅ Page Donner (formulaire sécurisé avec options récurrentes)
- ✅ Page Contact (formulaire simplifié + carte)

### Fonctionnalités de conversion

- ✅ Boutons CTA stratégiques ("Je veux donner ma vie à Christ", "Recevoir une prière", "Rejoindre un groupe")
- ✅ Pop-up intelligent après 30s pour nouveaux visiteurs
- ✅ Bouton WhatsApp flottant
- ✅ Formulaire de contact simplifié (3-4 champs)

### SEO & Performance

- ✅ Métadonnées optimisées pour chaque page
- ✅ Schema markup JSON-LD (Organization)
- ✅ Sitemap XML automatique
- ✅ Robots.txt configuré
- ✅ Structure de titres hiérarchisée (H1, H2, H3)
- ✅ URLs propres et descriptives
- ✅ Mobile-first et 100% responsive
- ✅ Accessibilité WCAG 2.1 (focus visible, aria-labels)

## 🚀 Démarrage

```bash
# Installer les dépendances
yarn install

# Installer next-intl pour le support multilingue
yarn add next-intl

# Lancer le serveur de développement
yarn dev

# Build de production
yarn build

# Démarrer en production
yarn start
```

## 🌍 Support multilingue

Le site supporte 3 langues :

- **Français (fr)** - Langue par défaut
- **English (en)**
- **Español (es)**

La langue est détectée automatiquement selon les préférences du navigateur. Les utilisateurs peuvent également changer de langue via le sélecteur dans le header.

Les traductions sont stockées dans `src/messages/` :

- `fr.json` - Français
- `en.json` - English
- `es.json` - Español

**Note** : Si vous voyez un avertissement concernant le middleware dans Next.js 16, c'est normal. `next-intl` utilise encore la convention middleware qui est la méthode officielle et fonctionne correctement. Cet avertissement peut être ignoré en toute sécurité.

## 📧 Configuration de l'envoi d'emails

Le formulaire de contact utilise Resend pour envoyer les emails.

### Configuration Resend

1. Installer Resend :

```bash
yarn add resend
```

2. Créer un compte sur [resend.com](https://resend.com) et obtenir une clé API

3. Créer un fichier `.env.local` à la racine :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM=Vases d'Honneur Tanger <noreply@vasesdhonneurtanger.org>
CONTACT_EMAIL=hello@vasesdhonneurtanger.org
```

**Note** : En développement, les messages sont loggés dans la console si `RESEND_API_KEY` n'est pas configuré.

## 📝 Notes importantes

### À configurer

1. **Numéro WhatsApp** : Remplacer `212XXXXXXXXX` dans les composants
2. **Email** : Mettre à jour `contact@vdhtanger.org` avec l'email réel
3. **URLs** : Mettre à jour les URLs dans `sitemap.ts` et `robots.ts` avec le domaine réel
4. **Réseaux sociaux** : Ajouter les liens réels dans `Footer.tsx` et `layout.tsx`
5. **Images** : Remplacer les placeholders par de vraies images optimisées (WebP/AVIF)
6. **Intégrations** :
   - ✅ **Envoi d'emails** : Configurer Resend ou SMTP (voir ci-dessous)
   - Stripe/PayPal pour les dons
   - Google Maps pour la carte
   - YouTube/Vimeo pour les vidéos
   - Mailchimp/Brevo pour la newsletter
   - Google Analytics 4

### Optimisations à faire

- Ajouter lazy loading pour les images
- Optimiser les images (WebP/AVIF)
- Configurer un CDN
- Ajouter les pixels de conversion (Meta, Google Ads)
- Implémenter le système de dons réel (Stripe/PayPal)

## 🛠 Technologies

- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4
- **Typographie** : Google Fonts (Inter, Open Sans)
- **TypeScript** : Pour la sécurité des types
- **SEO** : Métadonnées Next.js, Schema.org

## 📄 Licence

Tous droits réservés - Vases d'Honneur Tanger
