// src/data/conditions.js
//
// Condition presets for the medical-alert card generator.
//
// Each entry defines the content and styling for one condition. The card and
// form components are generic — they render whatever preset is selected — so
// adding a new condition is just a matter of adding a new object to this array.
// No component changes required.
//
// Shape of a condition:
//   id          unique string key (used by the picker + as React key)
//   name        display label shown in the condition dropdown
//   accent      primary accent colour (hex) — headline, labels, info mark
//   accentTint  pale background tint (hex) for the emergency band
//   front: { headline, reassurance, footer }
//   back:  { helpLabel, helpText }
//   options: {
//     medication: { available, defaultOn, text }   // optional medication-timing line
//   }
//
// The person's name and emergency contact are entered at runtime, not stored
// here. The "or call 000" fallback is a global app toggle, also not per-condition.

export const conditions = [
  {
    id: 'parkinsons',
    name: "Parkinson's disease",
    accent: '#0f6e6e',
    accentTint: '#e7f2f1',
    front: {
      headline: "I have Parkinson's",
      reassurance:
        "I am not drunk or on drugs. My speech and movements are symptoms of my condition.",
      footer: 'Please be patient with me.',
    },
    back: {
      helpLabel: 'How you can help',
      helpText:
        'Please give me a little time. I may move, speak or react slowly, be unsteady, have a still expression, or briefly “freeze” and be unable to move. I can understand you — please speak to me normally.',
    },
    options: {
      medication: {
        available: true,
        defaultOn: true,
        text: 'I take medication on a strict schedule — please help me take it on time.',
      },
    },
  },
  {
    id: 'epilepsy',
    name: 'Epilepsy',
    accent: '#6d28d9',
    accentTint: '#efe9fb',
    front: {
      headline: 'I have epilepsy',
      reassurance:
        'If I seem confused, vacant or am shaking, I may be having a seizure — not drunk or affected by drugs.',
      footer: 'Please stay with me.',
    },
    back: {
      helpLabel: 'If I have a seizure',
      helpText:
        'Stay calm and time it. Cushion my head and move hard objects away. Do not restrain me or put anything in my mouth. When it stops, roll me onto my side. Call 000 if it lasts over 5 minutes, repeats, or I do not wake.',
    },
    options: {
      medication: {
        available: true,
        defaultOn: true,
        text: 'I take medication on a strict schedule — please help me take it on time.',
      },
    },
  },
]

// The preset selected by default when the app first loads.
export const defaultConditionId = 'parkinsons'
