export interface MountainItem {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  heightMeters?: string;
  heightFeet?: string;
  range?: string;
  description: string;
  image: string;
}

export const MOUNTAINS_DATA: MountainItem[] = [
  {
    id: 1,
    slug: "himalaya-range",
    name: "The Abode of Snow",
    subtitle: "Himalaya Range",
    description:
      "Spanning over 8 countries the mighty Himalayan family of mountains display a total disregard for all human made borders. For millennia they have towered over humanity never letting down their guard. Only a lucky few have dared to enter this realm to reveal the most heavily guarded of secrets.",
    image: "/mountain-1.png",
  },
  {
    id: 2,
    slug: "the-black-mountains",
    name: "The Black Mountains",
    subtitle: "Karakoram Range",
    description:
      "Home to K2; the most savage of the mountains, the Karakoram are World renowned for their impossible summits. In addition to Mountains, this range also hosts the most (7000+) Glaciers in the World outside of the Polar regions. Sacred, mysterious, and life altering -this is the height of adventure.",
    image: "/mountain-2.png",
  },
  {
    id: 3,
    slug: "the-mountains-of-the-indus",
    name: "The Mountains of the Indus",
    subtitle: "Hindu Kush Range",
    description:
      "The entire World's supply of the finest Lapis Lazuli stone is stored within the Hindu Kush range of mountains. Along with hidden gems, ancient cultures like the Kalash have also found protection under these behemoths. Peril, history, and treasure -this mountain range turns imagination into reality.",
    image: "/mountain-3.png",
  },
  {
    id: 4,
    slug: "nanga-parbat",
    name: "The Mountain of the Gods",
    subtitle: "Nanga Parbat",
    heightMeters: "8,126 meters",
    heightFeet: "26,660 feet",
    range: "Himalaya Range",
    description:
      "Nanga Parbat, known poetically as the Mountain of the Gods and Diamer, is the ninth-highest mountain in the world. Its gigantic Rakhiot and Rupal faces rise dramatically above the Indus Valley.",
    image: "/mountain-4.png",
  },
  {
    id: 5,
    slug: "the-cathedrals",
    name: "The Cathedrals",
    subtitle: "Karakoram Range",
    heightMeters: "7,478 meters",
    heightFeet: "24,534 feet",
    range: "Karakoram Range",
    description:
      "The soaring spire-like spires of the Karakoram cathedral towers rise vertically like ancient gothic shrines made of solid rock and glacial ice.",
    image: "/mountain-5.png",
  },
  {
    id: 6,
    slug: "the-king-of-darkness",
    name: "The King of Darkness",
    subtitle: "Hindu Kush Range",
    heightMeters: "7,708 meters",
    heightFeet: "25,288 feet",
    range: "Hindu Kush Range",
    description:
      "Tirich Mir towers proudly as the highest peak of the Hindu Kush range, steeped in local folkloric legends of fairies, genies, and ancient mountain spirits.",
    image: "/mountain-6.png",
  },
  {
    id: 7,
    slug: "the-mountain-of-mountains",
    name: "The Mountain of Mountains",
    subtitle: "K2 - Mount Godwin-Austen",
    heightMeters: "8,611 meters",
    heightFeet: "28,251 feet",
    range: "Karakoram Range",
    description:
      "K2 is the Savage Mountain, the second highest on Earth and an undisputed titan of mountaineering history that calls only the bravest of climbers.",
    image: "/mountain-7.png",
  },
  {
    id: 8,
    slug: "the-shining-wall",
    name: "The Shining Wall",
    subtitle: "Gasherbrum IV",
    heightMeters: "7,788 meters",
    heightFeet: "25,551 feet",
    range: "Karakoram Range",
    description:
      "Gasherbrum, known as the Shining Wall, catches the setting sun on sheer limestone faces, producing a mystical golden glow across the Baltoro Glacier.",
    image: "/mountain-8.png",
  },
  {
    id: 9,
    slug: "the-mountain-of-the-night",
    name: "The Mountain of the Night",
    subtitle: "Trango Towers",
    heightMeters: "6,096 meters",
    heightFeet: "20,000 feet",
    range: "Karakoram Range",
    description:
      "The Trango Towers offer some of the largest vertical cliffs and most challenging big-wall climbing in the world, shrouded in dramatic alpine shadows.",
    image: "/mountain-9.png",
  },
  {
    id: 10,
    slug: "the-queen-of-peaks",
    name: "The Queen of Peaks",
    subtitle: "Masherbrum",
    heightMeters: "7,821 meters",
    heightFeet: "25,659 feet",
    range: "Karakoram Range",
    description:
      "Masherbrum (K1) is renowned for its iconic twin pyramid summits, dominating the skyline of the Ghanche District with sheer majesty.",
    image: "/mountain-10.png",
  },
];
