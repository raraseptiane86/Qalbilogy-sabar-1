# Qalbilogy — Salsa Master Character System

**Status:** v1.0 prototype / reference-locked foundation  
**Character:** Salsa  
**Primary goal:** reuse the same approved Salsa design across many Qalbilogy stories.

## Important distinction

This package locks the visual identity and organizes reusable references. It does **not** claim that the supplied raster drawing has already been separated into independently rigged vector limbs. The master illustration is preserved as a transparent PNG and wrapped in SVG. The expression/pose sheet is preserved as the approved reference atlas. A production-grade puppet rig requires manual/vector separation and pivot cleanup.

## Folder map

- `assets/reference/` — untouched user-supplied reference images.
- `assets/master/` — extracted master cutout and SVG wrapper.
- `assets/library/` — expression and pose reference atlas.
- `config/` — character specification and expression/pose manifests.
- `demo/` — browser preview and interaction sample.
- `after-effects/` — layer naming and import guidance.
- `docs/` — AI prompt template and production rules.

## Hybrid workflow

1. **Design source:** keep the original supplied images as the authority.
2. **SVG/vector stage:** manually trace/separate approved parts into layered SVG once the model is finalized.
3. **After Effects stage:** import layered artwork, set anchor points, parent layers, create controllers and save a reusable Salsa rig project.
4. **AI stage:** give the AI the approved reference package plus a scene brief. AI may animate approved assets; it must not invent a new Salsa design.
5. **Content stage:** keep each story's backgrounds, props, secondary characters and scene timing outside the Salsa master asset.

## Visual lock

Never change: face silhouette, round glasses, hijab silhouette and lavender colour, white inner cap, outfit design, skirt, shoes, proportions, charcoal outline and soft hand-coloured style.

## Use the browser demo

Open `demo/index.html` in a browser. It previews the master asset and the expression/pose reference atlas. The demo is a reference selector, not a full puppet animation engine.

## Versioning

When changing the canonical design, update the version and preserve the previous master in version control. Do not silently replace the model sheet.
