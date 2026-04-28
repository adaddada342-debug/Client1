/**
 * Mythic dossier — content for Cruz: The 400lbs Beef Titanic.
 * Copy is mythic, poetic, minimal, cinematic.
 */

export type Feat = {
  index: string;
  title: string;
  body: string;
  meta: string;
  scale: string;
  visual: "monolith" | "cosmos" | "lattice" | "horizon" | "fault" | "treaty" | "tide" | "veil";
};

export const FEATS: Feat[] = [
  {
    index: "01",
    title: "Lifted a city from the sea floor.",
    body: "The harbor cracked. He braced. By morning, an entire skyline stood on his shoulders, dripping with salt and silence.",
    meta: "Atlantic, undated",
    scale: "9.4 × 10⁹ kg",
    visual: "monolith",
  },
  {
    index: "02",
    title: "Outran a dying star.",
    body: "When the supernova began, he simply began earlier. He arrived at the next galaxy before the light did, and waited.",
    meta: "Andromeda corridor",
    scale: "0.94 c",
    visual: "cosmos",
  },
  {
    index: "03",
    title: "Bent reality with a slow nod.",
    body: "He agreed with something the universe had not yet said. Causality rearranged itself to match.",
    meta: "Causal anomaly · Class IV",
    scale: "Δ τ ≈ 7.2 s",
    visual: "lattice",
  },
  {
    index: "04",
    title: "Brokered peace between dimensions.",
    body: "Eleven realities sat at one table. He ate. They listened. The treaty was wordless and binding.",
    meta: "Trans-dimensional accord 0001",
    scale: "11 realms",
    visual: "treaty",
  },
  {
    index: "05",
    title: "Held the horizon in place.",
    body: "When the world tried to fold inward, he leaned against it. Coastlines remembered their shape.",
    meta: "Pacific arc, dawn",
    scale: "≈ 40 075 km",
    visual: "horizon",
  },
  {
    index: "06",
    title: "Walked across a fault line and closed it.",
    body: "Tectonic plates relaxed beneath him. The earthquake apologized and dispersed.",
    meta: "San Andreas, twilight",
    scale: "M 9.8 → 0.0",
    visual: "fault",
  },
  {
    index: "07",
    title: "Drank an ocean to save a continent.",
    body: "When the tide rose past mercy, he met it cup-first. The continent woke up dry.",
    meta: "South basin overflow",
    scale: "3.4 × 10²⁰ L",
    visual: "tide",
  },
  {
    index: "08",
    title: "Wore the night as a coat.",
    body: "Stars folded along his shoulders. He walked home, and dawn waited politely behind him.",
    meta: "Final hour",
    scale: "1 night, neatly",
    visual: "veil",
  },
];

export type TimelineEntry = {
  age: number;
  title: string;
  body: string;
};

export const TIMELINE: TimelineEntry[] = [
  { age: 1, title: "First breath.",        body: "The maternity ward generators dimmed for nine seconds." },
  { age: 2, title: "First word.",          body: "He said his own name. Mountains in three countries echoed it back." },
  { age: 3, title: "First stand.",         body: "He stood and the floor warped beneath him in respect." },
  { age: 4, title: "First lift.",          body: "He carried the family piano out for tuning. The piano did not return." },
  { age: 5, title: "First stride.",        body: "He outpaced a thunderstorm to retrieve a kite. The storm waited politely." },
  { age: 6, title: "First mark.",          body: "His handprint sealed a hairline fracture in the bedrock." },
  { age: 7, title: "First witness.",       body: "A stranger watched him for ninety seconds and quit their job." },
  { age: 8, title: "First treaty.",        body: "He negotiated bedtime. Nightfall agreed to arrive forty minutes later, that one time." },
  { age: 9, title: "First quake calmed.",  body: "He pressed a palm to the wall. The neighborhood stopped trembling." },
  { age: 10, title: "First weight.",       body: "He cleared 400 lbs and the gym applauded by collapsing slightly." },
  { age: 11, title: "First whisper.",      body: "He spoke softly to a hurricane. It rerouted to feel gratitude." },
  { age: 12, title: "First horizon.",      body: "He looked east and the day rebooted to ensure good lighting." },
  { age: 13, title: "First fold.",         body: "He folded a steel beam into a paper crane. It flew." },
  { age: 14, title: "First eclipse.",      body: "The moon checked with him before passing." },
  { age: 15, title: "First tide.",         body: "He held back a 90-foot wave with the back of his shoulder." },
  { age: 16, title: "Now — the Titanic.",  body: "He weighs 400 lbs. He does not move unless the world asks nicely." },
];

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  meta: string;
  hue: string;
  pattern: "ridge" | "arc" | "pillar" | "halo" | "tide" | "fault";
};

export const GALLERY: GalleryItem[] = [
  { id: "g1", title: "The Quiet Lift",        caption: "Harbor at the moment of weight.", meta: "Plate I",   hue: "#1c2030", pattern: "pillar" },
  { id: "g2", title: "The Slow Nod",          caption: "Causality, mid-rearrangement.",   meta: "Plate II",  hue: "#23201a", pattern: "arc" },
  { id: "g3", title: "Cruz Above the Tide",    caption: "Ninety feet, held politely.",     meta: "Plate III", hue: "#0f1a22", pattern: "tide" },
  { id: "g4", title: "Treaty Without Words",  caption: "Eleven realms, one table.",        meta: "Plate IV",  hue: "#1d1820", pattern: "halo" },
  { id: "g5", title: "Faultline Calm",         caption: "Earth, exhaling.",                 meta: "Plate V",   hue: "#1a1410", pattern: "fault" },
  { id: "g6", title: "The Coat of Night",      caption: "Stars folded with care.",          meta: "Plate VI",  hue: "#0c0f1a", pattern: "ridge" },
];
