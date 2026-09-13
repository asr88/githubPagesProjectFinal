# Solventa — Design System

Solventa is a digital insurer (Colombian market, Spanish-language product) that quotes, decides and
pays without friction, while operating on sensitive data and regulated decisions. The brand's own
summary: *"Protección que decide sola cuando puede, y que explica por qué cuando importa."*

The system serves two channels, which the brand manual treats as different products rather than two
sizes of one screen:

- **Web — gestión completa.** Back-office console for asesores, socios and operations. High density,
  data grids, persistent left rail, several actions per view.
- **Móvil — momentos de verdad.** The insured person's app. One primary action per screen, thumb
  reach, stacked cards, visible offline state (policy wallet).

## Source

Everything here derives from a single provided file:

- `uploads/solventa-manual-de-marca.html` — *Solventa · Manual de marca*, v0.1 working draft.
  Marked "Proyecto Solventa · MISW4501 · Grupo 3". It defines the four brand pillars, a six-role
  colour palette, the Space Grotesk / IBM Plex pairing, voice rules with evitar/usar examples, base
  components (button, badge, policy card) and the web-vs-mobile split.

No codebase, Figma file or deck was provided. Anything not in that manual (the ink alpha ramp,
spacing scale, motion values, form controls, tables) is an extension built in the manual's spirit
and is flagged below under *Intentional additions*.

---

## Content fundamentals

**Language.** Spanish (Colombia). Currency is written `$52.000 COP`, dates as `12 mar 2026`, policy
numbers as `#SLV-2026-08341`.

**Person.** The product speaks as *nosotros* about what the company did ("Revisamos tu evidencia y
aprobamos el pago") and as *tú* to the insured ("Tu prima mensual", "Intenta de nuevo"). Never
usted, never the impersonal "se ha procesado".

**Tense and voice.** Active verbs, past tense for what happened, present for what is true now.
"Aprobamos el pago", not "El pago ha sido aprobado". The system never describes its own feelings:
no "Lo sentimos", no "¡Ups!".

**Casing.** Sentence case everywhere — headings, buttons, labels. Kickers and metadata are lowercase
in IBM Plex Mono (`esencia de marca`, `decidido automáticamente`). No ALL CAPS, no small caps.

**Buttons name their action.** "Reportar siniestro", "Cotizar ahora", "Descargar condiciones" —
never a bare "Continuar" or "Aceptar".

**Errors state cause and next step.**
- evitar: "Lo sentimos, hubo un error al procesar tu webhook de verificación KYC."
- usar: "No pudimos verificar tu identidad. Intenta de nuevo con mejor luz, o llámanos."

**Name the action, not the mechanism.** "Guardamos tu póliza", not "sincronizamos tu registro".

**Say when the machine decided.** "Aprobado automáticamente", not just "Aprobado" — and the reason
goes next to the decision, in a `Callout`, never in a separate document:
"Aprobamos el pago porque el vuelo se retrasó 3h 40m según la aerolínea."

**Tone at the moment of a claim.** Short steps, calm words, no artificial urgency, no countdown
timers, no exclamation marks.

**Emoji: never.** The manual uses none, and neither does the product. Meaning is carried by the
status dot's colour and the label's words.

**Vibe.** Institutional but fast. It reads like a well-run system explaining itself — precise,
unhurried, slightly technical in its numbers and completely plain in its sentences.

---

## Visual foundations

**Colour.** Six roles, not six decorations.
`Tinta #101B2D` (text, dark surfaces), `Papel #F5F7F4` (base background of both channels),
`Cobalto #1B3A6B` (primary actions, navigation, brand), `Ámbar #F2A93B` (**only** for decisions the
system made by itself), `Verde #1E8F6F` (active protection, success), `Coral #E85D4C` (rejections
and errors, used deliberately sparingly). Each semantic colour has a soft background and a dark ink
pair for legible badges. Greys are never invented: text hierarchy comes from an alpha ramp of tinta
(90/80/72/62/55/50/28/14/6%) and, on dark surfaces, of papel (72/50/20%).

**Type.** Two families, two jobs. **Space Grotesk 600** for headings, the brand wordmark and hero
figures (premiums, claim amounts), tracking −0.01em, line-height 1.06–1.2. **IBM Plex Sans 400/500**
for everything that gets read — body 16px/1.55, max measure 56ch. **IBM Plex Mono 400** for kickers,
policy numbers, dates, counts and amounts in columns; tabular numerals are the reason it is there.
Scale: 54/40 · 30/28 · 19 · 17 · 16 · 15 · 14.5 · 13 · 12.5 · 11.5. Nothing between the steps.

**Spacing and layout.** 4→64px scale, 56px between document sections, 24px page gutter, 920px prose
column. Web: fixed 236px ink sidebar, scrolling content area, tables edge to edge inside a card.
Mobile: 390px frame, fixed top bar and bottom tab bar, content scrolls between them, every target
≥44px.

**Corners and borders.** Precision before softness. Radius is **0** almost everywhere; 2px exists as
a token but is rarely used; the only circles are the badge status dot, the radio and the timeline
node. Structure is drawn with 1px hairlines at 14% ink; a stronger 28% line marks form-control
frames. The one coloured border in the system is the 3px left rule on `Callout`.

**Cards.** White (`--surface-card`) on paper, 1px hairline, square corners, **no shadow**. Header and
body are separated by another hairline, not by spacing alone. Sunken bars (`--surface-sunken`) carry
dialog footers and grouped controls.

**Shadows.** Only for genuinely floating layers: `--shadow-overlay` on dialogs and toasts,
`--shadow-popover` for menus. Never on cards, buttons or inputs, and never animated.

**Backgrounds.** Flat colour only. No photography, no illustration, no gradient, no texture, no
pattern. Emphasis is achieved by inverting to the ink surface (hero, sidebar, premium block, toast),
never by tinting. There is no imagery library in the manual, so nothing here has a "photographic
mood" to match — if photography is ever introduced, it should be cool-toned and undramatic, and it
must be flagged as an addition.

**Transparency and blur.** Alpha is used for the text ramps and for the dialog scrim
(`rgba(16,27,45,0.55)`). Backdrop blur is not used anywhere.

**Motion.** 120–220ms, `cubic-bezier(0.2,0,0,1)`, colour and opacity only. No bounce, no scale, no
spring, no entrance animation on page load. A progress rail fills; it does not pulse.

**Hover.** Filled buttons darken ~6% (`--action-primary-hover`); outlined and ghost controls get a
6% ink wash; table rows get the same wash; card borders step from 14% to 28% ink when clickable.
Nothing lightens on hover, nothing lifts.

**Press.** Darken a further ~6% (`--action-primary-press`). No shrink, no shadow change.

**Focus.** 1px cobalto border plus a 1px inset outline on the control itself — visible on paper and
on white, never a glow.

**Disabled.** `--disabled-bg` fill with 28% ink text; no borders, no stripes.

---

## Iconography

The manual ships **no icon set** and no icon font. The only drawn artwork in the source is the brand
mark: a shield outline in tinta (or papel, inverted) with an ámbar check inside, mitred corners,
1.6px / 2.4px strokes. It is copied verbatim into `assets/logo-mark.svg` and
`assets/logo-mark-inverse.svg` — no logo was drawn or reconstructed.

**Substitution (please confirm):** for UI glyphs the system uses **Lucide** from CDN
(`https://unpkg.com/lucide@0.454.0`) at **1.75px stroke**, 20px in web, 22px in mobile, `currentColor`.
Lucide was chosen because its square caps and mitred joins match the tick in the brand mark. Icons
are always paired with a label except in dense web toolbars, where `IconButton` supplies an
accessible name and tooltip. **Emoji are never used.** A handful of unicode characters do appear as
glyphs where an icon would be overkill: `▾` in `Select`, `×` on dismiss controls.

---

## Components

Brand-guidelines-only source, so the inventory is a standard set sized to Solventa's two channels.
`Button`, `Badge` and `PolicyCard` are defined by the manual; the rest are *intentional additions*
built from the manual's rules (square corners, hairlines, no shadow) because the wireframes the
manual points at (F3.1 / F3.2) cannot be built without them.

**core/** — `Button`, `IconButton`, `Badge`, `Tag`, `Card`, `PolicyCard`, `StatBlock`
**forms/** — `Field`, `Input`, `Select`, `Checkbox`, `RadioGroup`, `Switch`
**feedback/** — `Callout`, `Toast`, `Dialog`, `ProgressSteps`
**navigation/** — `SideNav`, `TopBar`, `Tabs`, `TabBar`
**data/** — `DataTable`, `KeyValue`, `Timeline`

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` demo page.

### Intentional additions
- `Callout` — the manual demands that every automatic decision explain itself next to the decision;
  nothing in the source carried that. Its 3px left rule reuses the manual's own voice-card treatment.
- `StatBlock`, `DataTable`, `KeyValue`, `Timeline` — required by the "web = grid de datos, tablas"
  rule.
- `ProgressSteps` — required by "el flujo móvil guía con pasos cortos".
- Form controls (`Field`, `Input`, `Select`, `Checkbox`, `RadioGroup`, `Switch`) — the manual mentions
  forms and tables as body-copy contexts but draws none.
- `Tag`, `IconButton`, `Toast`, `Dialog`, `Tabs`, `SideNav`, `TopBar`, `TabBar` — shell and feedback
  primitives implied by the channel rules.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Entry point — imports every token file. Link this one file. |
| `tokens/colors.css` | Palette, ink/paper alpha ramps, semantic surface / text / action / status aliases |
| `tokens/typography.css` | Families, weights, size scale, leading, tracking, role shorthands |
| `tokens/spacing.css` | Space scale, layout widths, control heights, 44px touch minimum |
| `tokens/borders.css` | Radii (0 by default), hairlines, the two allowed shadows |
| `tokens/motion.css` | Durations and the standard easing |
| `tokens/fonts.css` | Google Fonts import for Space Grotesk + IBM Plex Sans/Mono |
| `assets/logo-mark.svg`, `assets/logo-mark-inverse.svg` | Brand mark, copied from the manual |
| `guidelines/*.card.html` | 18 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `components/{core,forms,feedback,navigation,data}/` | 24 components + prop contracts + prompts + demo cards |
| `ui_kits/web/` | Consola Solventa — resumen, cartera, detalle de siniestro (`index.html`) |
| `ui_kits/mobile/` | App Solventa — billetera, detalle de póliza, reporte de siniestro (`index.html`) |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills wrapper for use outside this project |
| `uploads/solventa-manual-de-marca.html` | The original source manual |

## Known gaps

- No font binaries were provided; the three families load from Google Fonts, which is what the
  manual itself does. No substitution was necessary — all three are the real families.
- No icon set was provided (see *Iconography* — Lucide is a flagged substitution).
- No photography, illustration or slide template exists in the source, so none was invented and no
  sample slides were built.
- The manual is a v0.1 working draft tied to milestones F3.1 / F3.2; values will move.
