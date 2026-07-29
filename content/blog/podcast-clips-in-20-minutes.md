---
title: "How to Turn One Podcast Episode Into a Week of Vertical Clips (in About 20 Minutes)"
description: "A step-by-step workflow for cutting a 60-90 minute podcast recording into 6-8 vertical clips using Bloom Clipper's cut timeline and Half 9:16 interview mode."
date: "2026-07-20"
author: "Bloom Clipper"
---

Most podcasters know they're sitting on more clip-worthy content per episode than they ever post. The bottleneck usually isn't finding the moments — it's the friction of turning "I remember there was a good exchange around the 40-minute mark" into an actual exported vertical MP4. Here's the workflow that gets you from raw recording to a week of clips in about 20 minutes.

## Step 1 — Open the source

If you recorded with Bloom Meeting, Bloom Clipper lists it straight from your library with a thumbnail — no file hunting. Otherwise, open any MP4/MOV/MKV export from your recording software directly.

## Step 2 — Scrub and mark, don't scrub and re-watch

Play the episode back at a comfortable speed (or just skim while you listen) and hit **Add cut** the moment you hear something worth posting: a strong opening line, a disagreement, a punchline, a genuinely surprising answer. Don't stop to fine-tune the exact start/end yet — just mark it and keep moving. You'll tighten timing in the next pass.

A typical 60-90 minute interview episode yields 6-10 marked moments on a first listen-through.

## Step 3 — Tighten each cut

Go back through your marked cuts one at a time. Adjust start and end to the tenth of a second so each clip opens cold (no dead air, no "so anyway" leading into the actual moment) and ends on the line that lands, not two seconds after. This is the step that separates a clip that gets watched to the end from one that gets scrolled past.

## Step 4 — Choose Full or Half 9:16 per cut

This is where a lot of interview clipping goes wrong in other tools. For every cut:

- **One host talking, solo take, cold open** → Full 9:16. Drag the crop box onto their face, zoom in if the moment calls for a tighter frame.
- **Both host and guest active in the exchange** → Half 9:16. Set angle 1 to the host, angle 2 to the guest — Bloom Clipper stacks them automatically so both are visible the entire clip, with no whip-pan between speakers.

Every cut remembers its own mode, so you can mix Full and Half across the same episode without losing your framing when you switch back and forth.

## Step 5 — Preview against the phone mock, not the raw timeline

Before you commit to a crop, look at the live phone-mock preview on the right panel — it shows you exactly what a viewer sees in the actual 9:16 frame, not the wide source footage. A crop that looks fine in the wide timeline can crop out a hand gesture or a facial reaction that mattered; the phone preview catches that before you export, not after you've already posted it.

## Step 6 — Export the batch

Once every cut is framed, export. Bloom Clipper renders each one locally with ffmpeg to `<source-folder>/clips/<source>-clip-<n>.mp4` at 1080x1920, H.264 + AAC, faststart — ready to upload with no additional compression pass needed.

## What this replaces

The same workflow in a general editor means manually building a vertical composition, keyframing a crop, and re-doing that from scratch for every single clip — easily an hour or two for the same 6-8 clips. In an auto-clipper, you'd upload the whole episode, wait on a processing queue, and then hope the AI picked the moments you'd have picked yourself.

Twenty minutes, your own judgment on what's worth posting, and a phone preview that shows you exactly what you're about to publish — that's the whole loop.

[See how Half 9:16 mode compares to auto-reframe tools →](/for/podcasters)
