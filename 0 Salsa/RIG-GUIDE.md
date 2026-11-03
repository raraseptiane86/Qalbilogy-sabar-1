# After Effects reusable rig guide

## Recommended layer names (top to bottom)
- `SALSA_CTRL` — null controller (global position/scale/rotation)
- `HEAD_CTRL` — head movement pivot
- `FACE_GLASSES`
- `FACE_EYES`
- `FACE_BROWS`
- `FACE_MOUTH`
- `HIJAB_FRONT`
- `HIJAB_BACK`
- `TORSO`
- `ARM_L_UPPER`
- `ARM_L_LOWER`
- `HAND_L`
- `ARM_R_UPPER`
- `ARM_R_LOWER`
- `HAND_R`
- `SKIRT`
- `LEG_L`
- `LEG_R`
- `SHOE_L`
- `SHOE_R`

## Rigging notes
- These are target names for the future separated artwork, not layers already present in the prototype PNG.
- Separate artwork manually in Illustrator/Photoshop; preserve original outlines and overlaps.
- Set anchor points at shoulder, elbow, wrist, neck, hip, knee and ankle pivots.
- Parent head/face/hijab layers to `HEAD_CTRL`; limb segments to their respective parent controls.
- Use puppet pins sparingly. Avoid bending the face, glasses, hijab edge or torso in ways that alter the model.
- Save a master `.aep` rig, then duplicate the composition per scene. Do not rebuild the rig for each video.
- For lip sync, use a small approved mouth-shape set (rest, open, wide, closed) once the face is separated.
