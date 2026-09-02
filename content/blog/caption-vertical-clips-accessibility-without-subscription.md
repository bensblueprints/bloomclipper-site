---
title: "How to Caption Vertical Clips for Accessibility Without a Captioning Subscription"
description: "A practical, no-cost workflow for adding accurate, accessible captions to vertical clips — plus the styling rules that keep them readable on TikTok, Reels, and Shorts."
date: "2026-09-02"
author: "Bloom Clipper"
---

Most vertical video gets watched with the sound off. That's true on the train, in a waiting room, at a desk next to a coworker — and it's true for the roughly one in eight adults with some degree of hearing loss who rely on captions to follow along at all. If your clips don't have captions, you're not just missing an accessibility box to check. You're losing a meaningful share of your audience before your first sentence lands.

The good news: you don't need a $10-30/month captioning subscription to do this well. Between platform-native tools and a couple of free desktop options, you can get accurate, properly styled captions on every clip you post without adding a recurring bill to your stack.

## Why "just pay for captions" isn't actually the default answer

A lot of caption-focused apps and browser tools market themselves as a required step, and for creators who want animated, karaoke-style word-by-word captions with custom fonts and effects, a paid tool genuinely does that better and faster than the free options. But if your goal is accurate, readable, accessible captions — not a stylized animation — the free path gets you there without a subscription, and in some workflows it's actually less friction.

It's also worth knowing that some tools marketed as "free auto-captions" have gotten less generous over time. CapCut still lists auto-captions on its free tier, but free users increasingly run into usage caps and upgrade prompts that aren't clearly documented anywhere — so "free" there isn't always frictionless in practice. That's a good reason to have a genuinely free fallback in your workflow rather than assuming any one tool will stay free indefinitely.

## Option 1: Let the platform caption it for you

This is the fastest path and it's free on every major short-form platform:

- **TikTok** — when you upload, the built-in captions sticker auto-transcribes your audio. You can edit any word that's wrong, reposition the caption block, and choose a font/color before posting.
- **Instagram Reels** — the captions sticker in the editor does the same thing: auto-transcribe, tap to fix errors, drag to reposition.
- **YouTube Shorts** — YouTube auto-generates captions on virtually all uploads with speech, and you can review and correct them in YouTube Studio after publishing.

For a lot of creators, this is genuinely enough. The transcription quality is solid for clear speech, corrections take under a minute per clip, and there's no export or re-upload step — you caption inside the same app you're posting from.

The limitation: platform-native captions live inside that platform's post. If you're cross-posting the same clip to TikTok, Reels, and Shorts, you're captioning it three separate times, and the styling won't match across platforms.

## Option 2: Caption once, burn it in, post everywhere

If you want one captioned file that looks identical wherever you post it, caption before you export rather than after you upload. Two free ways to do that:

**YouTube Studio's caption editor, repurposed.** Upload your clip as an unlisted YouTube video, let auto-captions generate, correct any errors in Studio's editor, then download the `.srt` file from the "..." menu. You now have a clean, human-corrected transcript with accurate timestamps you can hand to any free caption-burning tool or video editor that supports subtitle import — without paying for transcription anywhere in the chain.

**A local, open-source transcription tool.** Whisper-based transcription apps (there are several free desktop front-ends for OpenAI's open-source Whisper model) run entirely on your machine, produce an accurate `.srt` for free, and — like Bloom Clipper — never upload your footage anywhere to get the job done. This is the better option if your footage is sensitive: an unreleased episode, a client interview under NDA, or anything you don't want touching a third-party server even briefly for a transcript.

Either way, once you have an `.srt` file, most free and low-cost editors (including CapCut's timeline, DaVinci Resolve's free tier, and others) can import it and burn the text into the video as a permanent caption layer, styled once, consistent everywhere you post it.

## Getting the styling right — this matters more than the tool

Accurate transcription is half the job. The other half is making captions actually readable at a glance on a phone screen, which is where a lot of otherwise-good clips lose viewers. A few rules that hold regardless of which tool you use:

- **Size and contrast first.** Captions should be legible at arm's length on a phone without pausing. White or bright text with a dark outline or semi-transparent background reads reliably over almost any footage; thin fonts on busy backgrounds don't.
- **Stay out of the platform's UI zones.** TikTok, Reels, and Shorts all overlay their own interface — like buttons, captions, profile info — along the bottom third and sometimes the top. A caption block placed too low gets covered by the platform's own UI on a real device, even if it looked fine in your editor's preview.
- **Two lines, short bursts.** Cap each caption card at roughly two lines and change it often — matching natural speech pauses — rather than leaving a long sentence on screen for five seconds. Viewers read in bursts, not paragraphs.
- **Sentence case, not all caps.** All-caps captions are harder to scan and read as shouting. Reserve emphasis (bold, color, size bump) for the specific word that needs it, not the whole line.
- **Don't caption over faces or key action.** If your crop is tight on a speaker's face or a product, a caption sitting mid-frame can cover exactly what the viewer needs to see. This is a framing problem as much as a caption problem — which is where the order you do things in actually matters.

## Why crop-then-caption is the right order

Here's the part that trips people up: captions are usually the very last thing added, but the crop is decided long before that — and if you don't check how they'll interact, you end up with captions sitting on top of a face, a chart, or a product shot because nobody looked at the two together before exporting.

This is exactly what Bloom Clipper's phone-mock preview is for. When you're setting your crop box — Full 9:16 for a single speaker, or Half 9:16 stacking two speakers for an interview — the live preview shows you the actual 9:16 frame a viewer will see, not the wide source footage. Get the framing right at that stage — leaving clean space in the lower third where captions will eventually sit — and the caption pass afterward, whichever free tool you use for it, has room to work with instead of fighting your crop for space.

The workflow that holds up in practice: cut and frame your clips in Bloom Clipper first, export the clean 1080x1920 MP4, then run your free caption pass — platform-native, or burned-in via YouTube Studio's editor or a local Whisper tool — as the last step before posting. No subscription required at any point in that chain.

## A quick pre-post checklist

Before you publish a captioned clip, run through this in about 30 seconds:

- **Play it with the sound off, on your phone, at arm's length.** If you can't follow the story without audio, the captions aren't doing their job yet.
- **Check the bottom third against the actual app, not just your editor.** Open the exported file in the TikTok, Reels, or Shorts composer and see whether the platform's own UI — like buttons, usernames, share icons — sits on top of your captions.
- **Spot-check names, numbers, and jargon.** Auto-transcription is generally accurate on plain conversational speech, but it reliably mangles proper nouns, brand names, and technical terms — the exact words a viewer needs correct to trust the rest of the clip.
- **Confirm nothing important is covered.** A caption block sitting over a speaker's mouth, a product label, or an on-screen graphic undoes the framing work you did at the crop stage.

None of this requires paid software — just a deliberate final pass before you hit publish, which takes less time than most subscription tools' upload-and-process wait anyway.

[See how Half 9:16 mode frames interviews so nothing gets covered later →](/for/interview-shows)
