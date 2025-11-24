import Image from "next/image";
import { WealthIncomeGraphic } from "@/components/WealthIncomeGraphic";

type Scene =
  | {
      id: string;
      title: string;
      description: string;
      aspect: "vertical" | "horizontal";
      assetType: "image";
      src: string;
      alt: string;
      overlay?: "redline";
    }
  | {
      id: string;
      title: string;
      description: string;
      aspect: "vertical";
      assetType: "graphic";
    };

const scenes: Scene[] = [
  {
    id: "redlined-treadmill",
    title: "Trapped on the Redlined Treadmill",
    description:
      "A close-up view of weary sneakers striking an industrial treadmill whose belt is etched with redlined city grids. The glow feels almost theatrical—faint rays of light cutting across steel and sweat to underscore a relentless, uphill march.",
    aspect: "vertical",
    assetType: "image",
    src: "/images/treadmill.jpg",
    alt: "Close-up of a person's feet walking on an industrial treadmill with dramatic lighting.",
    overlay: "redline",
  },
  {
    id: "wealth-vs-income",
    title: "Gap Between Wealth and Income",
    description:
      "A minimal 9:16 infographic that isolates the story in two strokes: a luminous golden curve accelerating toward the top edge while a calm electric-blue line drifts horizontally. The contrast makes the imbalance unmissable.",
    aspect: "vertical",
    assetType: "graphic",
  },
  {
    id: "broken-escalator",
    title: "Economic Mobility Stalled",
    description:
      "A young person in streetwear stares up at a halted, rusted escalator in a cold blue wash. The broken steps, flaking metal, and fluorescent spill of urban light capture the uneasy stillness of promises deferred.",
    aspect: "vertical",
    assetType: "image",
    src: "/images/urban-escalator.jpg",
    alt: "Young person at the base of a rusted escalator in a moody urban setting.",
  },
  {
    id: "detroit-factory",
    title: "Remembering Detroit’s Assembly Line Pride",
    description:
      "A cinematic 16:9 tableau invokes Kodachrome nostalgia: a 1960s Detroit welder leans into his craft as sparks flare and warm light pours through factory windows. Focus and grit radiate from his expression.",
    aspect: "horizontal",
    assetType: "image",
    src: "/images/factory.jpg",
    alt: "1960s Detroit auto factory worker welding on an assembly line with sparks.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 md:px-12 lg:px-16">
        <header className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.6em] text-slate-400">
            VISUAL BRIEFING
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
            Four Frames on the American Economic Story
          </h1>
          <p className="text-lg text-slate-300 md:text-xl">
            A vertical-first suite of visuals paired with a widescreen memory of
            industrial labor—designed for high-impact storytelling across modern
            social channels and cinematic retrospectives.
          </p>
        </header>

        <section className="flex flex-col gap-20">
          {scenes.map((scene) => (
            <article
              key={scene.id}
              className="flex flex-col gap-6"
              aria-labelledby={`${scene.id}-title`}
            >
              <figure
                className={[
                  "relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/30 shadow-2xl ring-1 ring-white/10",
                  scene.aspect === "vertical"
                    ? "mx-auto aspect-[9/16] w-full max-w-sm"
                    : "aspect-video w-full",
                ].join(" ")}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/60 mix-blend-screen opacity-30" />
                {scene.assetType === "image" ? (
                  <>
                    <Image
                      src={scene.src}
                      alt={scene.alt}
                      fill
                      priority={scene.id === "redlined-treadmill"}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
                    {scene.overlay === "redline" ? (
                      <div className="absolute inset-0 mix-blend-screen opacity-85">
                        <div className="absolute inset-0 bg-[url('/textures/redlining.svg')] bg-cover bg-center" />
                      </div>
                    ) : null}
                  </>
                ) : (
                  <div className="h-full w-full">
                    <WealthIncomeGraphic />
                  </div>
                )}
              </figure>
              <div className="space-y-3" id={`${scene.id}-title`}>
                <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                  {scene.title}
                </h2>
                <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                  {scene.description}
                </p>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                  {scene.aspect === "horizontal" ? "ASPECT 16:9" : "ASPECT 9:16"}
                </p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
