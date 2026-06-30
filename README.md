# Medical Alert Card

A configurable, printable medical-alert wallet card generator. Pick a condition, fill in a couple of details, and print a wallet-sized card that explains the condition to people nearby — useful in everyday situations where symptoms might be misread.

**Live demo:** https://sammarch.github.io/medical-alert-card/

<!-- Optional: drop a screenshot in and uncomment.
![Medical alert card preview](./screenshot.png)
-->

## About

This started as a one-off card for a specific need — a way for someone with Parkinson's to quickly show people that their speech and movements are caused by their condition, not by intoxication. Rather than hard-code a single card, it's built as a **configurable generator**: each condition is a data entry, so the same interface produces a tailored card for any condition you add.

The card content stays entirely in the browser — nothing is uploaded, saved, or sent anywhere.

## Features

- **Condition presets** — choose a condition and the entire card (wording, layout, accent colour) updates to suit it.
- **Live preview** — type a name and emergency contact and watch the card update as you go.
- **Optional toggles** — e.g. a medication-timing line and an "or call 000" fallback, configurable per condition.
- **True wallet-size print** — prints both card faces at 85.6 × 54 mm (standard card size) with cut guides, ready to trim, glue back-to-back, and laminate.
- **Privacy by design** — all data stays client-side; there's no backend and no storage.

### Conditions included

- Parkinson's disease
- Epilepsy

## Tech stack

- **React** + **Vite** (JavaScript)
- **Tailwind CSS v4** for the app UI
- **Plain CSS** for the card itself — millimetre-based sizing so it prints at exact wallet dimensions, with the accent colour driven at runtime via CSS custom properties
- **GitHub Actions → GitHub Pages** for CI/CD (auto-deploys on push to `main`)

## How it works

The app is deliberately **data-driven**. All condition content and styling lives in a single file, `src/data/conditions.js`, as an array of preset objects. The components are generic:

- `Card.jsx` renders whatever preset it's handed — it knows nothing about any specific condition.
- `CardForm.jsx` provides the controls (condition picker, inputs, toggles).
- `App.jsx` holds the shared state and wires the form to the card.

Because content and presentation are separated, adding a new condition requires **no component changes** — just a new entry in the data file.

## Adding a new condition

Add an object to the `conditions` array in `src/data/conditions.js`:

```js
{
  id: 'asthma',                 // unique key
  name: 'Asthma',               // label shown in the dropdown
  accent: '#b91c1c',            // primary accent colour
  accentTint: '#fdeaea',        // pale tint for the emergency band
  front: {
    headline: 'I have asthma',
    reassurance: 'Short, clear text shown prominently on the front.',
    footer: 'A brief closing line.',
  },
  back: {
    helpLabel: 'How you can help',
    helpText: 'What a bystander should know or do.',
  },
  options: {
    medication: {
      available: true,          // does this condition offer the medication line?
      defaultOn: true,          // ticked by default?
      text: 'I take medication on a strict schedule — please help me take it on time.',
    },
  },
}
```

That's the entire change — the dropdown, card, colour theming, and toggles all pick it up automatically.

## Local development

```bash
# clone
git clone https://github.com/sammarch/medical-alert-card.git
cd medical-alert-card

# install
npm install

# run the dev server (http://localhost:5173)
npm run dev

# production build
npm run build
```

## Deployment

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`). Any push to `main` builds the app and publishes it to GitHub Pages. The repo's **Settings → Pages → Source** is set to **GitHub Actions**, and `base` in `vite.config.js` is set to the repo path so assets resolve correctly on the Pages subpath.

## A note on the content

The wording on each card reflects general, widely-recommended guidance for that condition. It is **not** a substitute for personalised medical advice. Anyone using a card should review the wording with the person it's for (and their clinician where relevant) — real-world needs are often individual, e.g. a specific seizure type, typical duration, or other instructions.

## License

[MIT](./LICENSE) — feel free to use or adapt. *(Add a LICENSE file if you want this to apply.)*
