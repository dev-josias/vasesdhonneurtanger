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

# Lancer le serveur de développement
yarn dev

# Build de production
yarn build

# Démarrer en production
yarn start
```

## 📝 Notes importantes

### À configurer

1. **Numéro WhatsApp** : Remplacer `212XXXXXXXXX` dans les composants
2. **Email** : Mettre à jour `contact@vdhtanger.org` avec l'email réel
3. **URLs** : Mettre à jour les URLs dans `sitemap.ts` et `robots.ts` avec le domaine réel
4. **Réseaux sociaux** : Ajouter les liens réels dans `Footer.tsx` et `layout.tsx`
5. **Images** : Remplacer les placeholders par de vraies images optimisées (WebP/AVIF)
6. **Intégrations** :
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
