export const SITE_URL = 'https://bloomclipper.advancedmarketing.co';
export const WHOP_URL = 'https://whop.com/benjisaiempire/bloom-clipper';
export const GITHUB_REPO = 'bensblueprints/bloomclipper';
export const GITHUB_RELEASES_API = `https://api.github.com/repos/${GITHUB_REPO}/releases`;

export const PRODUCT = {
  name: 'Bloom Clipper',
  tagline: 'Turn any landscape video into vertical 9:16 clips — with full manual control.',
  shortPitch:
    'The Opus Clip alternative you buy once. Mark your own cuts, frame every angle by hand, export ready-to-post 1080x1920 MP4s locally with ffmpeg. No upload, no watermark, no monthly credits.',
  price: 29,
  priceDisplay: '$29',
  priceSuffix: 'one-time',
  platform: 'Windows',
  supportEmail: 'support@onetimesuite.com',
  familyNote:
    'Third app in the Bloom family, alongside BloomRecorder (screen/camera recording) and Bloom Meeting (remote multi-guest recording). Bloom Clipper reads straight from their libraries, or any video file on your machine.',
};

export type Competitor = {
  slug: string;
  name: string;
  category: string;
  pricingSummary: string;
  monthlyPrice: number;
  annualEffectiveMonthly?: number;
  pricingSourceNote: string;
  strengths: string[];
  whereItFalls: string[];
  differentiators: string[];
  bestFor: string;
  verdict: string;
};

export const COMPETITORS: Competitor[] = [
  {
    slug: 'opus-clip',
    name: 'Opus Clip',
    category: 'AI auto-clipping SaaS',
    pricingSummary:
      'Free (60 min/mo, watermarked), Starter $15/mo, Pro $29/mo ($174/yr billed annually), Business custom',
    monthlyPrice: 29,
    annualEffectiveMonthly: 14.5,
    pricingSourceNote: 'Pro plan, per published 2026 pricing pages; confirm current pricing at opus.pro before quoting a client.',
    strengths: [
      'Fully automatic — its AI picks the "viral" moments and auto-reframes for you, zero manual work to get a first pass',
      'Built-in virality scoring ranks clips before you post them',
      'One-click multi-platform publishing to TikTok, YouTube Shorts, and Instagram',
    ],
    whereItFalls: [
      'Processing minutes are metered — you buy a bucket of minutes per month and it runs out mid-project on longer podcasts',
      'The AI reframe is a black box: when it picks the wrong speaker or crops out a slide, your only recourse is to re-run and hope, not nudge the box yourself',
      'Everything is uploaded to Opus Clip\'s cloud to process — your raw footage leaves your machine',
      'The meter resets monthly, so a slow month still costs the same as a busy one',
    ],
    differentiators: [
      'Bloom Clipper never uploads your footage — cuts and renders happen locally with ffmpeg, so client footage under NDA never leaves your drive',
      'You place the crop box by hand and can zoom/pan it per cut, instead of accepting whatever the algorithm framed',
      'Half 9:16 mode is a purpose-built two-speaker interview layout, not a generic auto-reframe guessing who\'s talking',
      'One $29 payment instead of a $15–29/mo meter that renews whether you clipped anything or not',
    ],
    bestFor:
      'Creators who want a hands-off first pass and don\'t mind footage going through a cloud pipeline, and who post often enough to justify a recurring bill.',
    verdict:
      'Opus Clip is the faster path to a rough cut if you trust the algorithm. Bloom Clipper is the tool when you want to make the framing call yourself, keep footage local, and stop paying every month for something you already own.',
  },
  {
    slug: 'vizard',
    name: 'Vizard',
    category: 'AI auto-clipping SaaS',
    pricingSummary: 'Free (60 credits/mo), Creator ~$14.50/mo (annual), Business ~$19.50/mo (annual), Enterprise custom',
    monthlyPrice: 19.5,
    annualEffectiveMonthly: 14.5,
    pricingSourceNote: 'Creator/Business annual pricing per published 2026 pricing pages; confirm current pricing at vizard.ai before quoting a client.',
    strengths: [
      'Credit system is generous at the Creator tier for solo creators posting a few times a week',
      'Auto-captions and a decent stock of caption templates out of the box',
      'Multi-language transcription support',
    ],
    whereItFalls: [
      'Credits are consumed by upload and processing time, so a single 2-hour podcast can burn through a big chunk of your monthly allotment',
      'Free-tier exports are capped at 720p and expire after 3 days — you need to be on a paid plan to actually keep your clips',
      'Framing is auto-detected; there\'s no draggable crop box if the AI centers on the wrong face',
      'No local/offline mode — everything routes through Vizard\'s servers',
    ],
    differentiators: [
      'No credits, no minutes, no monthly meter — cut and export as many clips as your machine can render, forever, after the one-time $29',
      'A real draggable, zoomable crop box per cut, not a "hope the AI got it right" auto-frame',
      'Runs fully offline — nothing about your raw footage or transcript touches a third-party server',
      'Half 9:16 stacked-speaker mode is designed specifically for two-person interviews, not retrofitted from a single-speaker auto-reframe',
    ],
    bestFor:
      'Solo creators who post a modest, predictable volume each month and are fine with credits resetting and content living on Vizard\'s servers.',
    verdict:
      'Vizard is reasonably priced for light, predictable posting schedules. Bloom Clipper removes the credit math entirely and keeps everything — footage, transcript, output — on your own drive.',
  },
  {
    slug: 'kapwing',
    name: 'Kapwing',
    category: 'Browser-based video editor with AI clipping',
    pricingSummary: 'Free tier, Pro ~$24/mo (monthly) or ~$16/mo per seat (annual), Business ~$64/mo (monthly) or ~$50/mo (annual)',
    monthlyPrice: 24,
    annualEffectiveMonthly: 16,
    pricingSourceNote: 'Pro plan per-member pricing, per published 2026 pricing pages; confirm current pricing at kapwing.com before quoting a client.',
    strengths: [
      'Full browser-based editor — timeline, subtitles, effects, and a smart-clip AI feature bolted onto general editing tools',
      'Good for teams that need shared projects and comments in one place',
      'Broad export format support beyond just 9:16 shorts',
    ],
    whereItFalls: [
      'Pricing is per-seat, so a 3-person team on Pro pays 3x — it adds up fast for an agency running clips for multiple clients',
      'It\'s a general-purpose editor first; the vertical-clip workflow is a feature inside a much bigger (and slower-to-load) tool',
      'Export minutes/hours are capped per plan and overages cost extra',
      'Editing happens in-browser against cloud-hosted media, so large source files mean slow upload and render times',
    ],
    differentiators: [
      'Bloom Clipper is purpose-built for exactly one job — landscape-to-vertical clipping — so the whole UI is two panels: cut timeline, live phone preview',
      'No per-seat pricing: buy it once, install it on as many of your own machines as you need',
      'Local ffmpeg rendering means no upload wait on a 2-hour source file — you\'re cutting the moment it opens',
      'No export-minute caps, ever',
    ],
    bestFor:
      'Teams that need a full general-purpose browser editor with commenting/collaboration and only occasionally need vertical clips.',
    verdict:
      'Kapwing is a strong all-purpose editor if clipping is one of many things you do in it. If clipping IS the job, Bloom Clipper\'s single-purpose local workflow is faster and doesn\'t bill per seat.',
  },
  {
    slug: 'descript',
    name: 'Descript',
    category: 'Transcript-based editor with clip creation',
    pricingSummary: 'Free tier, Hobbyist ~$24/mo (monthly)/~$16/mo (annual), Creator ~$35/mo (monthly)/~$24/mo (annual), Business ~$65/mo (monthly)/~$50/mo (annual)',
    monthlyPrice: 35,
    annualEffectiveMonthly: 24,
    pricingSourceNote: 'Creator plan per published 2026 pricing pages; confirm current pricing at descript.com before quoting a client.',
    strengths: [
      'Best-in-class transcript-based editing — delete text to cut video, which Bloom Clipper also does for its library tools',
      'Strong for full podcast/video post-production, not just clipping: multitrack audio, Studio Sound cleanup, screen recording',
      'Overdub and AI voice tools for narration fixes',
    ],
    whereItFalls: [
      'The vertical-clip feature is one module inside a much larger (and pricier) all-in-one suite — you\'re paying for a lot you may not use',
      'Media minutes and AI credits are metered separately since the 2025 pricing overhaul, making monthly cost hard to predict',
      'Cloud-based project storage; large multitrack projects can get slow to sync',
    ],
    differentiators: [
      'Bloom Clipper does one job — landscape-to-vertical clipping — for a flat $29, versus a $24–65/mo suite subscription for a feature you\'ll use a fraction of',
      'No metered "media minutes" or AI credits to track — cut as much as you want',
      'Fully local: no project sync, no cloud storage limits',
      'Purpose-built phone-mock live preview shows the exact 9:16 output per cut as you frame it',
    ],
    bestFor:
      'Podcasters and video teams who want one tool for the entire production pipeline — recording, transcript editing, sound cleanup, AND clipping — and don\'t mind paying suite pricing for it.',
    verdict:
      'Descript is the better buy if you want an all-in-one production suite. If you already have your workflow and just need the vertical-clip step done right and done once, Bloom Clipper is a fraction of the cost.',
  },
  {
    slug: 'capcut',
    name: 'CapCut',
    category: 'Consumer video editor (mobile + desktop)',
    pricingSummary: 'Free tier, Pro ~$19.99/mo (monthly), ~$179.99/yr (~$15/mo effective annual)',
    monthlyPrice: 19.99,
    annualEffectiveMonthly: 15,
    pricingSourceNote: 'Pro plan per published 2026 pricing pages; confirm current pricing in the CapCut app before quoting a client.',
    strengths: [
      'Massive effects/template/sound library, huge community, tightly integrated with TikTok publishing',
      'Genuinely good mobile app for on-the-go edits',
      'Auto-captions and auto-reframe features are quick for single-clip social posts',
    ],
    whereItFalls: [
      'No dedicated "mark cuts from a long source, frame each one independently" workflow — you\'re manually splitting a timeline yourself for every clip',
      'Commercial use of CapCut\'s built-in stock music/effects is restricted even on Pro — a licensing landmine for client work',
      'No purpose-built interview mode (stacked two-speaker framing) — you\'d hand-build that layout in the general editor every time',
      'Pro is a recurring subscription for what is, for repeat podcast/interview clipping, a repetitive manual process',
    ],
    differentiators: [
      'Bloom Clipper is built specifically around "long source in, N vertical clips out": mark cuts once, frame each with a draggable box, export all of them',
      'Half 9:16 interview mode is a first-class feature, not something you rebuild by hand each time',
      'No commercial-use licensing questions — your footage and your export are yours, nothing from a stock library is involved',
      'One-time $29 instead of a $19.99–179.99/yr subscription for a workflow CapCut wasn\'t built around',
    ],
    bestFor:
      'Single creators editing one clip at a time with trending effects, sounds, and templates for organic TikTok/Reels content.',
    verdict:
      'CapCut wins for effects-heavy, trend-driven single edits. Bloom Clipper wins the moment you have a long-form source and need multiple clean vertical clips out of it, especially interviews.',
  },
  {
    slug: 'submagic',
    name: 'Submagic',
    category: 'AI captioning + auto-clip SaaS',
    pricingSummary: 'Free (3 videos/mo, watermarked), Starter ~$19–20/mo, Pro ~$39–40/mo, Agency/Business ~$69–80/mo',
    monthlyPrice: 39,
    annualEffectiveMonthly: 23,
    pricingSourceNote: 'Pro plan per published 2026 pricing pages; confirm current pricing at submagic.co before quoting a client.',
    strengths: [
      'Excellent animated caption styles — this is genuinely its strongest feature and better-looking than most competitors out of the box',
      'B-roll suggestion and auto-emoji features speed up single-clip editing',
      'Simple, fast workflow for turning one video into one captioned short',
    ],
    whereItFalls: [
      'It\'s built around one video in, one captioned video out — not a "mark 10 cuts from a 90-minute podcast" workflow',
      'Video count is metered per plan; a busy month of clipping a long interview into a dozen shorts can burn a Starter or Pro allotment fast',
      'No manual crop-box control — reframing is automatic',
      'No local/offline processing — video goes through Submagic\'s cloud',
    ],
    differentiators: [
      'Bloom Clipper is built for the exact "long recording → many vertical clips" job, with a cut timeline that\'s the whole point of the app',
      'No per-video metering — clip a 3-hour source into 40 shorts in one sitting for the same $29',
      'Fully local rendering, nothing leaves your machine',
      'Manual, draggable, zoomable framing per cut instead of automatic reframe you can\'t adjust',
    ],
    bestFor:
      'Creators who already have short-form clips cut and just want best-in-class animated captions on them fast.',
    verdict:
      'Submagic\'s captions are excellent for one-off shorts. Bloom Clipper is the better tool when the job starts with a long source video and needs to become several clips, especially interviews with two speakers.',
  },
];

export type Industry = {
  slug: string;
  name: string;
  headline: string;
  painPoints: string[];
  workflow: string;
  useCase: string;
  quote: string;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: 'podcasters',
    name: 'Podcasters',
    headline: 'Turn one recording session into a week of vertical clips',
    painPoints: [
      'A 90-minute episode has maybe 8-10 clip-worthy moments buried in it, and scrubbing through the raw file to find them eats an hour before you\'ve cut a single clip',
      'Two-camera or two-mic interview setups need a layout that shows both hosts, not a single auto-cropped face',
      'Subscription clipping tools meter by the minute, and a weekly show adds up to hundreds of processing minutes a month',
    ],
    workflow:
      'Drop the raw episode (or pull it straight from your Bloom Meeting recording library) into Bloom Clipper, scrub the timeline while you listen back, and hit "Add cut" at every moment worth posting. For co-host or guest segments, switch that cut to Half 9:16 — Bloom Clipper stacks your two speaker angles automatically so viewers see both faces without you hand-building a split-screen. Full 9:16 mode handles solo monologue moments with a draggable, zoomable crop box locked to your host\'s face.',
    useCase:
      'A weekly interview podcast exports 6-8 vertical clips per episode — cold opens, disagreement moments, punchlines — without ever uploading the raw recording anywhere.',
    quote:
      'Podcast clipping is inherently a two-speaker problem most AI auto-reframe tools handle badly. Half 9:16 mode exists specifically for this.',
  },
  {
    slug: 'youtubers',
    name: 'YouTubers',
    headline: 'Repurpose long-form uploads into Shorts without re-editing from scratch',
    painPoints: [
      'You already edited the long-form video once — re-cutting it in a second tool for Shorts feels like redundant work',
      'Auto-clip tools frequently pick the wrong 15 seconds, missing the actual joke or payoff by a beat',
      'Uploading a finished 4K video to a cloud clipping service for every single Short is slow and eats your upload bandwidth',
    ],
    workflow:
      'Open your already-exported long-form MP4 directly in Bloom Clipper — no upload step, no waiting on a processing queue. Scrub to the exact moment, set start/end to the tenth of a second, and frame it in the phone-mock preview until the punchline lands in frame at the right time. Batch mark every Shorts candidate from one video in a single sitting, then export all of them locally while you move on to the next upload.',
    useCase:
      'A 20-minute YouTube video becomes 4-5 Shorts the same afternoon it goes live, cut and framed by the person who actually knows which moment is funny.',
    quote:
      'You already know your best moment better than an algorithm does. Bloom Clipper just gets it out of the timeline and into a phone-shaped frame fast.',
  },
  {
    slug: 'twitch-streamers',
    name: 'Twitch Streamers',
    headline: 'Cut VOD highlights into TikTok/Shorts clips without a subscription eating stream income',
    painPoints: [
      'VODs run 3-6+ hours; scrubbing for highlight-worthy plays in a general editor is slow and painful',
      'Streaming income is unpredictable — a $15-40/mo clipping subscription is a real line item against a variable paycheck',
      'Game footage often has UI overlays and chat that need specific, manual framing — auto-crop tools regularly cut off the action',
    ],
    workflow:
      'Load the VOD file, scrub through at speed while watching for the highlight, and mark cuts as you go. Use the draggable Full 9:16 crop box to frame exactly the action (and avoid cropping out your face-cam or a critical UI element) — zoom in tight on a clutch play, then move on to the next cut. Export the whole highlight reel as separate clips in one local ffmpeg batch.',
    useCase:
      'A weekly VOD becomes a batch of 10-15 vertical highlight clips for TikTok and Shorts, framed by the streamer who knows exactly which pixel matters on screen.',
    quote:
      'Pay once. A variable-income creator shouldn\'t carry a fixed monthly software bill for clipping their own footage.',
  },
  {
    slug: 'course-creators',
    name: 'Course Creators',
    headline: 'Slice paid course modules into free vertical teasers without re-recording',
    painPoints: [
      'Course footage is often screen-recorded lessons — landscape by nature, and awkward to reframe automatically since the "content" is a slide, not a face',
      'Marketing needs a steady drip of short clips to promote the course, but re-recording short-form versions of lessons is a huge time sink',
      'Sensitive/paid course content shouldn\'t be uploaded to a third-party cloud service just to get a promotional clip out of it',
    ],
    workflow:
      'Open the recorded lesson, mark the single best explainer moment or "aha" insight as a cut, and use the Full 9:16 crop box to zoom in on whichever part of the screen matters — a diagram, a code snippet, your talking-head webcam corner. Because everything renders locally, paid course content never has to leave your machine to become a marketing teaser.',
    useCase:
      'Each new module produces 2-3 vertical teaser clips for email and social, cut from the same recording you already made for paying students — no separate shoot.',
    quote:
      'Your best-performing course clip is usually one sentence buried in a 40-minute lesson. Bloom Clipper is how you find and frame that sentence in under five minutes.',
  },
  {
    slug: 'real-estate-agents',
    name: 'Real Estate Agents',
    headline: 'Turn one property walkthrough video into a week of listing content',
    painPoints: [
      'A full walkthrough is shot landscape on a gimbal or phone, but Reels/TikTok/Zillow social all want vertical',
      'Every listing needs its own clip set, and agents don\'t have time to relearn a complex editor per listing',
      'Client walkthrough footage (interiors, sometimes with the seller\'s belongings visible) is not something you want sitting on a random cloud clipping service',
    ],
    workflow:
      'Import the walkthrough, mark a cut at the kitchen, the primary suite, the backyard, the closing shot — whatever sells the home. Frame each cut\'s crop box on the room\'s best feature (the island, the walk-in closet, the view) rather than trusting an algorithm to guess what a buyer cares about. Export a batch of vertical listing clips ready for Reels and Stories the same day you filmed.',
    useCase:
      'One 8-minute walkthrough becomes 5-6 vertical room-by-room clips for a week of listing promotion, cut and framed by the agent in under 20 minutes.',
    quote:
      'Buyers scroll vertical. A landscape walkthrough sitting unused in your camera roll doesn\'t sell the listing — the vertical cutdown does.',
  },
  {
    slug: 'fitness-coaches',
    name: 'Fitness Coaches',
    headline: 'Cut full-session footage into form-check and technique clips',
    painPoints: [
      'Full training sessions or seminar recordings run long, and the useful 20-second technique demo is buried somewhere in the middle',
      'Framing matters a lot for form content — you need the crop tight on the movement, not centered on a wide gym shot',
      'Client sessions can include other people\'s faces in the background; you want to frame those out, not rely on an AI to guess it should',
    ],
    workflow:
      'Load the session recording, mark a cut at each technique demo or coaching cue worth sharing, then use the draggable zoom box to crop in tight on the movement itself — the barbell path, the foot placement, the form correction — cutting out anything (or anyone) in the background you don\'t want in frame.',
    useCase:
      'A 45-minute coaching session yields 4-6 vertical "form check" or "coaching cue" clips, tightly framed on exactly the movement being taught.',
    quote:
      'Form content lives or dies on framing. A manual, zoomable crop box beats an auto-reframe that centers on the whole gym.',
  },
  {
    slug: 'churches',
    name: 'Churches',
    headline: 'Share sermon highlights vertically without a subscription line item in the budget',
    painPoints: [
      'A full sermon or service recording is 45-60+ minutes; congregations and volunteers rarely have time to hunt for the shareable 30 seconds',
      'Recurring software subscriptions are a hard sell against a ministry budget, especially for something used a few times a week',
      'Sermon content is meaningful and personal — leadership is often uneasy sending it through a third-party cloud AI pipeline',
    ],
    workflow:
      'A volunteer opens the week\'s service recording, marks a cut at the message\'s key moment or the worship highlight, and frames it on the pastor or worship leader with the draggable crop box. No recurring bill, no cloud upload — the church buys the tool once and any volunteer can use it every week after.',
    useCase:
      'One weekly service recording produces 2-3 vertical highlight clips for the church\'s Instagram and Facebook, cut by a volunteer in under 15 minutes, at zero ongoing software cost.',
    quote:
      'A one-time $29 purchase a volunteer team can use every week, forever, fits a ministry budget in a way a $20-40/mo subscription never will.',
  },
  {
    slug: 'marketing-agencies',
    name: 'Marketing Agencies',
    headline: 'Clip client footage locally without per-seat or per-client subscription math',
    painPoints: [
      'Most clipping SaaS tools charge per seat or meter processing minutes — running clips for 8 clients on one plan means constantly hitting caps',
      'Client footage is often under NDA; uploading it to a third-party AI clipping service is a real contract and liability risk',
      'Every client\'s brand and framing preferences are different, and an auto-reframe algorithm doesn\'t know a client\'s brand guidelines',
    ],
    workflow:
      'Install Bloom Clipper on the machines your editors already use. Each editor cuts and frames client footage locally, following that client\'s specific brand crop and speaker preferences by hand, and exports straight to the delivery folder — no upload step, no per-client subscription meter, no NDA exposure.',
    useCase:
      'An agency running short-form for 10+ clients clips all of it on flat per-seat one-time licenses instead of a metered SaaS plan that punishes a busy month.',
    quote:
      'Client footage staying on the machine it was edited on isn\'t a nice-to-have for an agency — it\'s often a contract requirement.',
  },
  {
    slug: 'musicians',
    name: 'Musicians',
    headline: 'Cut live show and studio footage into vertical performance clips',
    painPoints: [
      'Live show footage is shot landscape from a single wide camera, and the performance moment worth posting is often just a few bars',
      'Auto-reframe tools built for talking-head podcasts don\'t handle a full band on stage well — they crop to one face and lose the rest of the performance',
      'Studio session footage and unreleased material shouldn\'t be sitting on a cloud clipping service before it\'s out',
    ],
    workflow:
      'Load the show or session recording, mark the cut at the hook, the solo, or the crowd reaction, and manually frame the crop box to include what actually matters — the whole band, the guitarist\'s hands, the crowd. Nothing about unreleased material or live footage leaves your machine before you choose to post it.',
    useCase:
      'A single live set produces a run of vertical clips — one per song\'s best moment — framed to show the performance, not just a cropped face.',
    quote:
      'A full band on stage needs a human decision about what stays in frame. That\'s exactly the control a manual crop box gives you.',
  },
  {
    slug: 'comedians',
    name: 'Comedians',
    headline: 'Cut a full set into individual bits without losing your timing',
    painPoints: [
      'A set is one continuous take, but each bit needs its own clean start/end to land as a standalone clip — cut a beat early and you kill the joke',
      'Auto-clip AI reliably gets timing wrong on comedy, cutting the setup short or trimming right before the punchline lands',
      'Club and open-mic footage is often shot on a single static wide camera, so framing has to be done by hand to get a tight, punch-in feel',
    ],
    workflow:
      'Scrub the full set at your own pace, setting the cut start and end to the tenth of a second so every bit keeps its setup and its punchline intact. Use the Full 9:16 crop box to punch in tighter than the wide room camera shot, so the clip reads like a close-up instead of a stage-wide recording.',
    useCase:
      'A 20-minute set becomes 6-8 individual bit clips, each with its timing intact because a human — not an algorithm — decided where the joke actually ends.',
    quote:
      'Comedy timing is the whole joke. It\'s the one genre where you can\'t let software guess where a bit ends.',
  },
  {
    slug: 'interview-shows',
    name: 'Interview Shows',
    headline: 'Purpose-built two-speaker framing for every clip, automatically stacked',
    painPoints: [
      'Two-person interviews are the hardest case for auto-reframe: the algorithm has to guess who\'s talking moment to moment and constantly whip-pans between faces',
      'A poorly framed interview clip — one guest cropped out, or a jarring cut between faces mid-sentence — looks amateur no matter how good the conversation was',
      'Different segments of the same interview need different treatment: sometimes both hosts need to be visible, sometimes one host carries the moment alone',
    ],
    workflow:
      'This is the exact case Half 9:16 mode was built for: pick it for any cut with two speakers, and Bloom Clipper stacks angle 1 (top half) over angle 2 (bottom half) automatically — both faces visible at all times, no whip-panning, no algorithm guessing who\'s talking. Switch back to Full 9:16 for single-host cold opens or monologue moments. Every cut remembers its own mode.',
    useCase:
      'A weekly interview show exports every guest segment with both faces stacked and visible, and every solo moment cleanly framed on one speaker — no jarring reframe cuts anywhere.',
    quote:
      'Half 9:16 mode is the single feature that separates a real interview-clipping tool from a general auto-reframe algorithm bolted onto a single-speaker assumption.',
  },
  {
    slug: 'news-publishers',
    name: 'News Publishers',
    headline: 'Clip field footage and studio segments into vertical without a cloud upload of unpublished material',
    painPoints: [
      'Unpublished field footage, embargoed interviews, and pre-broadcast segments are sensitive by nature — sending them through a third-party AI cloud pipeline is a real editorial and legal concern',
      'Newsroom turnaround is fast; waiting on an upload-and-process queue on a metered SaaS plan slows down a same-day post',
      'Studio segments with a host and a guest need the same two-speaker handling broadcast news graphics packages already assume',
    ],
    workflow:
      'Cut directly from the raw field or studio file on the newsroom machine — nothing leaves the building before publication. Mark the cut at the newsworthy soundbite, frame it with the crop box (or Half 9:16 for a host/guest segment), and export straight to the CMS or social queue, all within minutes of the footage landing.',
    useCase:
      'A same-day field interview gets a vertical soundbite clip published within the hour, entirely on local infrastructure, with no unpublished footage ever touching a third-party server.',
    quote:
      'For a newsroom, "never leaves the machine" isn\'t a nice-to-have privacy feature — it\'s often the only acceptable option for unpublished footage.',
  },
  {
    slug: 'coaches',
    name: 'Business & Life Coaches',
    headline: 'Turn coaching calls and workshops into vertical proof-of-expertise clips',
    painPoints: [
      'The best marketing content a coach has is usually buried inside a 60-minute client call or workshop recording, not a separately produced video',
      'Client calls involve someone else\'s face and voice — you need to frame yourself in and them out (or get explicit clip-by-clip control) before anything goes public',
      'A recurring subscription for occasional clipping (a few times a month, not daily) is hard to justify against ROI',
    ],
    workflow:
      'Open the call or workshop recording, find the insight worth sharing, and mark the cut. Frame the crop box on yourself for the answer, or use Half 9:16 if both you and the client should be visible with permission. Because it\'s all local and one-time, there\'s no ongoing cost pressure to "use it enough to justify the subscription."',
    useCase:
      'A monthly group coaching call yields 3-5 vertical insight clips for social proof and lead generation, cut without any recurring software cost eating into a modest content budget.',
    quote:
      'If you only clip a handful of times a month, a $15-40/mo subscription is a worse deal every month you\'re not maxing it out. $29 once removes that math entirely.',
  },
  {
    slug: 'ecommerce-brands',
    name: 'Ecommerce Brands',
    headline: 'Cut product demo and UGC footage into a week of vertical ad creative',
    painPoints: [
      'Product demo shoots and creator UGC footage are usually filmed in longer landscape takes that need to become several distinct vertical ad variants',
      'Performance marketing needs a high volume of clip variants to test — a metered clipping subscription gets expensive fast at that volume',
      'Framing needs to keep the product in shot at all times, which a generic face-tracking auto-reframe tool isn\'t built for',
    ],
    workflow:
      'Load the raw demo or UGC footage, mark a cut for every distinct hook or product beat, and manually frame the crop box to keep the product (not just a face) centered in the vertical frame throughout. Export a full batch of ad-ready variants for testing in one local render pass, with no per-clip cost.',
    useCase:
      'One UGC shoot becomes 8-12 vertical ad variants for testing across TikTok and Meta, cut and framed to keep the product on screen the entire time.',
    quote:
      'Ad testing needs volume. A flat one-time cost means clipping 30 variants this month costs exactly the same as clipping 3.',
  },
  {
    slug: 'event-videographers',
    name: 'Event Videographers',
    headline: 'Deliver vertical highlight reels same-day without uploading client footage anywhere',
    painPoints: [
      'Weddings, conferences, and corporate events generate hours of landscape footage that clients increasingly want as vertical highlight reels for social',
      'Client footage — especially weddings — is emotionally and legally sensitive; uploading it to a third-party cloud clipping service is a real trust and liability issue',
      'Same-day or next-day highlight delivery is a premium service videographers charge for; waiting on a cloud processing queue works against that turnaround',
    ],
    workflow:
      'Cut directly from the event footage on your edit machine. Mark cuts at the vows, the first dance, the keynote soundbite, the toast — whatever the client wants to share fast — and frame each one by hand. Export locally and deliver the same day, with the client\'s footage never leaving your own hardware.',
    useCase:
      'A Saturday wedding gets a 3-clip vertical highlight reel delivered to the couple by Sunday morning, cut entirely offline on the videographer\'s own laptop.',
    quote:
      '"Your footage never left my laptop" is a real selling point when you\'re asking a couple to trust you with their wedding day.',
  },
];
