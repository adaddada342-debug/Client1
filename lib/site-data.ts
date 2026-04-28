export type Stat = {
  value: string;
  label: string;
};

export type Feat = {
  id: string;
  title: string;
  description: string;
  accent: string;
  align: "left" | "right";
  metric: string;
  visual: string;
};

export type TimelineEntry = {
  age: number;
  title: string;
  event: string;
  aura: string;
  magnitude: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  label: string;
  year: string;
  description: string;
  caption: string;
  gradient: string;
};

export const siteIntroStats: Stat[] = [
  { value: "16", label: "years of ascending legend" },
  { value: "400", label: "lbs of symbolic mass" },
  { value: "∞", label: "calculated momentum" },
];

export const heroStats = siteIntroStats;

export const feats: Feat[] = [
  {
    id: "cathedral-lift",
    title: "Lifted a cathedral so dawn could pass beneath it.",
    description:
      "Stone remembered weight. Cruz taught it grace, raising impossible architecture with the patience of weather and the certainty of tide.",
    accent: "from-[#b58cff]/35 via-[#7f72ff]/10 to-transparent",
    align: "left",
    metric: "1 impossible skyline corrected",
    visual: "Vault / Dawn / Elevation",
  },
  {
    id: "solar-sprint",
    title: "Outran a collapsing sunrise and arrived before light.",
    description:
      "When the horizon hesitated, Cruz crossed it first. Time folded into obedience and the morning resumed on his terms.",
    accent: "from-[#8ec5ff]/35 via-[#5d7cff]/10 to-transparent",
    align: "right",
    metric: "0.3 seconds ahead of daylight",
    visual: "Horizon / Velocity / Arrival",
  },
  {
    id: "reality-bend",
    title: "Bent reality without wrinkling the fabric of mercy.",
    description:
      "Laws of physics loosened around him. Mountains leaned closer. Gravity took notes. The universe called it a controlled deviation.",
    accent: "from-[#8bffd4]/28 via-[#4be1c6]/10 to-transparent",
    align: "left",
    metric: "11 dimensions realigned",
    visual: "Lattice / Fold / Mercy",
  },
  {
    id: "peace-treaty",
    title: "Negotiated peace between dimensions that had never met.",
    description:
      "He spoke once and parallel worlds heard themselves clearly for the first time. The silence afterward was not empty. It was healed.",
    accent: "from-[#ffd6a0]/28 via-[#ff9966]/10 to-transparent",
    align: "right",
    metric: "14 realms held in accord",
    visual: "Treaty / Choir / Accord",
  },
  {
    id: "storm-hold",
    title: "Held a storm in one hand until the sea could breathe again.",
    description:
      "Cyclones thrashed like myth made nervous. Cruz closed his fist and the oceans finally remembered stillness.",
    accent: "from-[#9ee7ff]/30 via-[#6db1ff]/10 to-transparent",
    align: "left",
    metric: "1 ocean restored to calm",
    visual: "Pressure / Tide / Silence",
  },
  {
    id: "memory-forge",
    title: "Forged memory into metal and wore it like honor.",
    description:
      "Every failure of history was re-tempered into a brighter alloy. He did not erase the past. He taught it how to shine.",
    accent: "from-[#f0e7ff]/20 via-[#b18cff]/10 to-transparent",
    align: "right",
    metric: "7 eras reforged",
    visual: "Alloy / Archive / Heat",
  },
  {
    id: "titan-engine",
    title: "Turned grief into propulsion and sailed straight through ruin.",
    description:
      "Where others saw wreckage, Cruz found direction. Every fracture became velocity. Every ending became a prow.",
    accent: "from-[#ffb7cf]/28 via-[#ff7aa8]/10 to-transparent",
    align: "left",
    metric: "400lbs of myth under thrust",
    visual: "Hull / Wake / Resolve",
  },
  {
    id: "final-echo",
    title: "Left footprints in futures not yet permitted to exist.",
    description:
      "His stride reached beyond prediction. In every possible tomorrow, there was already a place where Cruz had stood.",
    accent: "from-[#b5ffd0]/24 via-[#69d8a6]/10 to-transparent",
    align: "right",
    metric: "countless timelines marked",
    visual: "Future / Imprint / Echo",
  },
];

export const timeline: TimelineEntry[] = [
  {
    age: 1,
    title: "First Compression",
    event: "The crib groaned softly when gravity realized who had arrived.",
    aura: "#8e7dff",
    magnitude: "12 kn of infant force",
  },
  {
    age: 2,
    title: "Weather Recognition",
    event: "Rain hovered at the window, waiting for permission to fall.",
    aura: "#79a8ff",
    magnitude: "18 cloud systems attentive",
  },
  {
    age: 3,
    title: "Marble Orbit",
    event: "Playroom objects began circling him as if childhood had its own moon.",
    aura: "#5fd4ff",
    magnitude: "1 private orbit achieved",
  },
  {
    age: 4,
    title: "Doorframe Negotiation",
    event: "Wood learned flexibility after Cruz passed through with a crown of momentum.",
    aura: "#68f0d0",
    magnitude: "31 structural concessions",
  },
  {
    age: 5,
    title: "Lunch of Titans",
    event: "He ate with such conviction that the table developed respect.",
    aura: "#b5ff8a",
    magnitude: "5 meals remembered forever",
  },
  {
    age: 6,
    title: "Staircase Event",
    event: "Each step amplified beneath him like a stadium announcing a dynasty.",
    aura: "#f3d97c",
    magnitude: "88 decibels of destiny",
  },
  {
    age: 7,
    title: "Neighborhood Dawn",
    event: "He walked outside and every porch light faded in professional courtesy.",
    aura: "#ffb36c",
    magnitude: "1 block converted to witness",
  },
  {
    age: 8,
    title: "Skyline Sketch",
    event: "Clouds arranged themselves into a rough portrait and called it tribute.",
    aura: "#ffa07a",
    magnitude: "7 miles of sky compliance",
  },
  {
    age: 9,
    title: "Engine Voice",
    event: "When he laughed, distant car alarms harmonized in minor key.",
    aura: "#ff8ca8",
    magnitude: "3 districts synchronized",
  },
  {
    age: 10,
    title: "Atlas Rehearsal",
    event: "He lifted what should not move and did so like it belonged there.",
    aura: "#d08dff",
    magnitude: "1 atlas put on notice",
  },
  {
    age: 11,
    title: "Mercy Circuit",
    event: "He discovered restraint and the world became safer without losing its awe.",
    aura: "#b39cff",
    magnitude: "99% power withheld",
  },
  {
    age: 12,
    title: "Horizon Split",
    event: "At full sprint, evening arrived in two pieces and rejoined behind him.",
    aura: "#89b6ff",
    magnitude: "0.2 sec ahead of dusk",
  },
  {
    age: 13,
    title: "Treaty Season",
    event: "Invisible kingdoms sent terms. Cruz sent back peace and impossible signatures.",
    aura: "#7fdbff",
    magnitude: "14 unseen states aligned",
  },
  {
    age: 14,
    title: "Beef Titanic",
    event: "The title emerged: too massive to deny, too mythic to contain.",
    aura: "#7ce7c7",
    magnitude: "400 lbs became a title",
  },
  {
    age: 15,
    title: "Cathedral Lift",
    event: "Architecture and faith both learned the same lesson about leverage.",
    aura: "#d1ef8c",
    magnitude: "1 skyline raised cleanly",
  },
  {
    age: 16,
    title: "Cruz Ascendant",
    event: "Legend stopped forecasting his rise and began reporting from within it.",
    aura: "#ffd37e",
    magnitude: "All futures now tracking",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "obsidian-vault",
    title: "Obsidian Vault",
    label: "Witness record",
    year: "Archive I",
    description:
      "Cruz between stormglass pillars, holding silence like a ceremonial weapon.",
    caption:
      "The vault did not contain him. It merely offered dark walls for scale.",
    gradient:
      "linear-gradient(180deg, #08111e 0%, #1a2740 48%, #4c5982 100%)",
  },
  {
    id: "solar-bridge",
    title: "Solar Bridge",
    label: "Transit study",
    year: "Archive II",
    description:
      "A crossing built from pressure, light, and the refusal to yield.",
    caption:
      "Heat bent around his outline, leaving a bridge where there had only been risk.",
    gradient:
      "linear-gradient(180deg, #1e1017 0%, #573254 45%, #e07b62 100%)",
  },
  {
    id: "crown-of-fog",
    title: "Crown of Fog",
    label: "Atmosphere study",
    year: "Archive III",
    description: "Mist leaning upward to acknowledge the greater atmosphere.",
    caption:
      "Visibility lowered itself with ceremony, allowing only the necessary reverence to remain.",
    gradient:
      "linear-gradient(180deg, #0a1119 0%, #26394c 50%, #7ab5d6 100%)",
  },
  {
    id: "gravity-audience",
    title: "Gravity Audience",
    label: "Interior strain",
    year: "Archive IV",
    description:
      "The room pulling inward, not from collapse, but reverence.",
    caption:
      "Every line in the room leaned closer, as if architecture itself had questions.",
    gradient:
      "linear-gradient(180deg, #14131b 0%, #302944 45%, #8f82c8 100%)",
  },
  {
    id: "distant-engine",
    title: "Distant Engine",
    label: "Long-range scan",
    year: "Archive V",
    description: "A monumental silhouette warming the edge of the world.",
    caption:
      "At distance, Cruz became landscape. Up close, landscape admitted defeat.",
    gradient:
      "linear-gradient(180deg, #131619 0%, #354243 48%, #88a087 100%)",
  },
  {
    id: "peace-vector",
    title: "Peace Vector",
    label: "Diplomatic residue",
    year: "Archive VI",
    description:
      "The instant dimensions realized they preferred accord.",
    caption:
      "There are moments when power enters a room to conquer. This was not one of them.",
    gradient:
      "linear-gradient(180deg, #13151f 0%, #3c2d5a 52%, #b28cff 100%)",
  },
];

export const sceneMetrics = [
  {
    label: "Surface response",
    value: "11ms",
    blurb: "The monument answers interaction like forged glass under moonlight.",
  },
  {
    label: "Orbit fidelity",
    value: "360°",
    blurb: "Every angle is deliberate, with no dead side and no ornamental excess.",
  },
  {
    label: "Mass pulse",
    value: "On demand",
    blurb: "Trigger the beacon and the core shifts from quiet dignity to active myth.",
  },
];
