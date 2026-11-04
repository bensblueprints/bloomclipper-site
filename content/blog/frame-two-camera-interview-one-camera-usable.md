---
title: "How to Frame a Two-Camera Interview When Only One Camera's Footage Is Usable"
description: "A practical workflow for salvaging a two-camera interview shoot when one angle is corrupted, out of focus, or unusable — using crop framing instead of reshooting."
date: "2026-11-04"
author: "Bloom Clipper"
---

You shot the interview with two cameras — one wide, one on a tighter angle, or one on each person — the way you're supposed to. Then you get to the edit and one of them is unusable. Maybe the second camera's card corrupted, the focus drifted the whole session, the audio on that angle never synced, or someone bumped the tripod twenty minutes in and you didn't notice until now. Whatever the cause, you're not cutting a multicam interview anymore. You're cutting a single-camera interview and need it to still look intentional.

This happens more often than people plan for, and the fix isn't a reshoot. It's treating the surviving footage correctly instead of trying to force a two-camera edit out of a one-camera file.

## First, figure out what you actually have

Before you touch a crop box, look at what the surviving camera actually captured, because the fix is different depending on the answer:

- **A wide two-shot with both people in frame.** This is the best-case failure. You lost the tight angle, but the wide shot still has both speakers visible the entire time — you just don't have a second angle to cut to.
- **A tight shot on only one person.** This is the harder case. If the camera that died was pointed at your host and the survivor was locked on the guest, you have usable footage of only half the conversation.
- **A wide shot that drifts, or has one person partially out of frame.** Common when a camera was set-and-forget on a tripod and someone shifted position mid-conversation. Usable, but it needs more attention per cut than the clean version of either case above.

Each of these has a different best path, but all three skip the thing people instinctively try first: digitally "faking" a second angle by zooming and panning a single wide shot to simulate cuts between cameras. That technique works in a traditional 16:9 edit with room to pan around. In a 9:16 crop, you don't have that room — a hard push-in on a static wide shot reads as a mistake, not a stylistic choice, the moment it happens.

## Case 1: You have a wide two-shot — use it as two angles, not one

If your surviving footage is a wide shot with both people in frame, you're actually in better shape than it feels like. A single wide frame with both speakers in it is exactly what Bloom Clipper's Half 9:16 mode is built to work with — it doesn't need two separate camera files to produce a two-speaker layout. It takes two crop regions from whatever source you give it and stacks them.

Here's the workflow:

1. **Mark your cut** on the timeline as you normally would — the exchange you want to turn into a clip.
2. **Switch that cut to Half 9:16 mode.**
3. **Set angle 1's crop box over your host's side of the wide frame**, and **angle 2's crop box over your guest's side.** You're pulling two tighter frames out of the one wide shot — not inventing footage, just choosing what part of the existing frame each half of the stack shows.
4. **Zoom each box in** until the framing looks like an actual close-up rather than a visibly cropped wide shot. This is the step that makes the difference between "clearly one camera" and "looks shot on two cameras" — a wide two-shot cropped tight on each face reads almost identically to true multicam footage once it's stacked.
5. **Check the phone-mock preview**, not the wide timeline. The preview shows you the real 9:16 output, which is the only way to judge whether your crop is actually tight enough to pass as a dedicated angle.

The one thing to watch for: if your two speakers are close together in the wide frame, your two crop boxes may end up overlapping or showing a sliver of the other person at the frame edge. Zoom in enough to clear that — a stray elbow or shoulder from the "wrong" half breaks the illusion that these are two separate angles.

## Case 2: You only have usable footage of one person

If the camera that survived was locked on only one speaker — say the guest, not the host — you can't recreate the host's side of the conversation. There's no crop trick that invents footage that was never captured. What you can do is reframe the edit around what you actually have:

- **Treat it as a single-POV piece, not a broken two-shot.** Full 9:16 on the one usable angle, framed tight, works fine on its own — plenty of interview clips run as a single talking head the entire way through, with the other person's voice audible but off-camera. This is a completely normal format, not a downgrade, as long as you commit to it rather than apologizing for it in the edit.
- **Favor cuts where the on-camera person is doing the heavy lifting.** A clip where your visible speaker is answering a sharp question or telling a story works better here than a clip built around a back-and-forth exchange — the viewer doesn't need to see the other person's face if the visible one is carrying the moment.
- **Use the audio to your advantage at the open.** A clip that opens on the off-camera host's question audio, then cuts into your on-camera guest's answer, reads intentionally rather than like a broken multicam setup — because you're using the limitation as a structural choice (hear the question, see the answer) instead of hiding it.
- **Skip exchanges that genuinely need both faces.** A rapid back-and-forth where the humor or tension comes from watching both reactions in real time doesn't survive losing one angle — not every moment from the session needs to become a clip. Pick from the moments that work single-camera, not the ones that happen to be in your notes as "good."

## Case 3: Wide shot with inconsistent framing

If your one surviving angle is wide but someone drifted out of frame or re-centered themselves mid-session, you're doing Case 1's workflow, but per-cut instead of once for the whole session:

- Re-check your Half 9:16 crop boxes on every cut rather than setting them once at the start and assuming they hold. A box that framed both speakers perfectly at the 10-minute mark can clip the edge of someone's face at the 35-minute mark if they shifted in their seat.
- If a specific stretch has someone mostly out of frame, that stretch is effectively Case 2 for those seconds — treat it as single-POV rather than forcing a Half 9:16 crop onto a frame that doesn't actually have both people in it.
- The phone-mock preview matters even more here, because the failure mode (a sliver of someone's face at the frame edge, or empty space where a person used to be) is exactly the kind of thing that's easy to miss on a wide timeline and obvious the second you look at the real 9:16 output.

## Why this is a framing problem, not an editing-software problem

It's worth being clear about why this is salvageable at all: the footage itself isn't actually broken, your plan for using it was. You planned for two angles and got one, and the fix is adjusting the plan to match the material you have, not trying to brute-force the original plan out of less material than it needs. A wide two-shot genuinely contains two usable close-ups inside it — you just have to go get them with a crop box instead of a second camera.

This is also a good argument for shooting a wide safety angle even when you have a dedicated two-camera setup. If one of your tight cameras fails, a wide shot that includes both people gives you exactly the Case 1 scenario above — recoverable with crop framing — instead of Case 2, where you're stuck with only one person's footage and no way to get the other back.

## The actual workflow once you know which case you're in

Once you've diagnosed what you have, the editing itself doesn't take any longer than a normal two-camera interview edit:

1. Open the one surviving source file in Bloom Clipper.
2. Mark your cuts on the timeline, same as any interview edit.
3. For a wide two-shot: Half 9:16 mode, crop boxes zoomed tight on each half, checked against the phone-mock preview per cut.
4. For a single-person angle: Full 9:16, framed tight, favoring cuts where that speaker carries the moment alone.
5. Export locally — nothing about the salvage process requires re-uploading or reprocessing footage anywhere, since the whole crop-and-render pass happens on your own machine either way.

A camera failure mid-shoot is frustrating, but it doesn't have to mean reshooting or scrapping the session. Most of the time, the footage you do have supports a clean vertical edit — it just needs a framing decision instead of a second angle.

[See how Half 9:16 mode handles two-speaker framing →](/for/interview-shows)
