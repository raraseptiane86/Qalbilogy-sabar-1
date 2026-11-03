# Qalbilogy — Tawakkul Motion Project

**Format:** 9:16 vertical · 1080×1920 viewBox · 60 seconds · 14 scenes  
**Motion approach:** explainer storytelling with illustrated metaphors, staged reveals, camera drift/zoom, parallax-like movement, kinetic typography, object animation and recurring visual motifs. The approach is inspired by the general explainer-video grammar associated with channels such as Kok Bisa?, while all character identity and visual language remain based on the user's own Qalbilogy assets.

## Run
Open `index.html` in Chrome, Edge or Firefox. No build tools or server are required. Press Play; click a scene in the right-hand list to jump to it. Space toggles play/pause; arrow keys change scenes.

## Project structure
- `0 Salsa/` — user's supplied master character, model references and rig guide.
- `1 HOOK/` … `7 CLOSING/` — original storyboard text supplied by the user.
- `src/scenes.js` — 14 scene illustrations and visual components in inline SVG.
- `src/app.js` — timeline, scene selection, playback and keyboard controls.
- `src/style.css` — Qalbilogy pastel visual system and motion keyframes.
- `index.html` — browser preview.

## What is implemented
- All 14 scenes mapped to the storyboard timing (4+4+5+5+4+4+4+4+4+5+5+4+3+5 = 60 seconds).
- Reusable SVG illustration helpers for the young man, desk, trees, archer and arrow.
- Salsa master PNG reused in presenter scenes; it is not redrawn.
- Scene-by-scene preview, timeline, progress, play/pause, restart, fullscreen and keyboard navigation.
- Motion classes for entrance, pop-up, float, camera movement, wind and arrow travel.
- Narration text is stored per scene in `src/scenes.js` as a reference for voice-over/subtitles.

## Important production note
This is a **working browser animatic / motion prototype**, not a finished broadcast render and not yet a fully separated Salsa puppet rig. The supplied Salsa master is a single transparent raster illustration. Its identity is preserved and reused, but its arms, mouth and eyes cannot yet be independently rigged from this file. The pose/expression sheet remains in `0 Salsa/expression-pose-sheet.png` as the approved reference atlas.

Some secondary illustrations (young man, archer, props and environments) are drawn as original SVG shapes in the Qalbilogy pastel/hand-drawn direction. They are reusable code assets, not screenshots or copies from Kok Bisa?.

## Next production stages
1. Refine the SVG character assets to better match the approved linework and model sheet.
2. Separate Salsa into clean vector layers and build a master After Effects rig.
3. Add proper mouth-shape lip sync and eye blink states.
4. Replace prototype SVG secondary characters with polished reusable character assets if desired.
5. Record voice-over, align subtitles to actual speech, then render at 1080×1920 / 30 fps.

## Copyright and visual identity
Use the user's own Salsa reference and Qalbilogy visual identity. Do not import third-party channel characters, logos, scene artwork or signature assets.
