# AI animation brief — Salsa

Use the supplied Salsa master asset and expression/pose atlas as immutable character references.

## Hard constraints
- Salsa must remain the exact same character across shots.
- Preserve the round face, large round glasses, lavender hijab, white inner cap, lavender-and-white outfit, long lavender skirt, shoes, proportions, palette and hand-drawn pastel linework.
- Do not redesign, beautify, age, restyle, change clothing, change glasses, or invent a new face.
- Do not generate a different character that is merely similar.
- Prefer reusing the approved pose/expression artwork. For unseen poses, derive from the master model sheet and keep the model consistent.
- Keep backgrounds, props, text and secondary characters on separate layers.
- If the requested action cannot be achieved without distorting Salsa, use a camera move, cut, prop animation or a different approved pose.

## Scene brief template
CONTENT:
SCENE:
DURATION:
CANVAS: 1080x1920 (9:16) unless specified
Salsa pose:
Salsa expression:
Action:
Camera:
Background:
Props:
Narration / lip-sync:
Transition:
Output layers:
1. background
2. props
3. Salsa body
4. Salsa face / expression
5. foreground effects
6. subtitles / typography

## Consistency check before render
Compare the result against `assets/reference/salsa-original.jpg` and `assets/reference/expression-pose-reference.png`.
Reject any frame where face, glasses, hijab, outfit, proportions or line style drift.
