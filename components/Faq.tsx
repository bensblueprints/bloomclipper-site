export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Does my video ever leave my computer?',
    answer:
      'No. Bloom Clipper reads the source file from your disk and renders every clip with a locally bundled ffmpeg. There is no upload step, no cloud processing queue, and no network call involved in cutting or exporting — the app works the same with your Wi-Fi off.',
  },
  {
    question: 'What\'s the difference between Full 9:16 and Half 9:16?',
    answer:
      'Full 9:16 gives each cut one draggable, aspect-locked, zoomable crop box over your source — use it for a single speaker or any moment where one frame tells the story. Half 9:16 is for interviews: two aspect-locked half-height boxes, one per speaker, that get stacked automatically into a single 1080x1920 frame at render time, so both people stay visible without an awkward whip-pan.',
  },
  {
    question: 'Is this really a one-time purchase, or is there a catch?',
    answer:
      'It\'s $29 once. No subscription, no monthly credits, no minute meter, no per-export fee. You install it, you own it, you can use it on as many of your own projects as you want, forever. If it\'s not for you, email support@onetimesuite.com within 30 days for a full refund.',
  },
  {
    question: 'Does Bloom Clipper automatically pick the clips for me like Opus Clip?',
    answer:
      'No, and that\'s intentional. Bloom Clipper doesn\'t guess which moments are "viral" — you mark the cuts and frame each one, because you know your content better than an algorithm does. What it automates is the tedious part: exporting clean 1080x1920 MP4s with the crop, zoom, and (for interviews) speaker-stacking already applied.',
  },
  {
    question: 'What video formats and sources does it support?',
    answer:
      'Any MP4, WebM, MOV, or MKV file on your machine. If you also use BloomRecorder or Bloom Meeting, Bloom Clipper automatically lists videos from those libraries as clip sources with thumbnails, so you can jump straight from a recording to clipping it.',
  },
  {
    question: 'Do exported clips have a watermark?',
    answer:
      'Never. Every export is a clean 1080x1920 H.264 + AAC MP4 with faststart, ready to post, with no branding or watermark added.',
  },
  {
    question: 'What platform does it run on?',
    answer:
      'Bloom Clipper ships as a Windows desktop app. Grab the latest installer from the Download page — it pulls directly from the GitHub releases, so you always get the current build.',
  },
  {
    question: 'Can I use it for client or agency work?',
    answer:
      'Yes. The license is per purchase, not per seat or per project, so agencies and freelancers can clip unlimited client footage on a machine they own without a usage meter or commercial-use add-on fee.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="mb-2 text-center text-3xl font-bold text-white">Frequently asked questions</h2>
      <p className="mb-10 text-center text-white/60">Everything you need to know before you buy once.</p>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item) => (
          <details key={item.question} className="card group px-5 py-4">
            <summary className="cursor-pointer list-none font-medium text-white marker:content-none">
              <span className="flex items-center justify-between">
                {item.question}
                <span className="ml-4 text-pink transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{item.answer}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
