export interface JamFlavour {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  price: number; // in ZAR (R)
  size: string;
  color: {
    primary: string;
    light: string;
    border: string;
    badgeBg: string;
    badgeText: string;
  };
  tasteProfile: {
    sweetness: number; // 1-5
    tartness: number;  // 1-5
    texture: string;
  };
  description: string;
  storySnippet: string;
  keyIngredients: string[];
  bestPairedWith: string[];
  dietaryTags: string[];
}

export const JAM_PRODUCTS: JamFlavour[] = [
  {
    id: 'strawberry-sunrise',
    name: 'Strawberry Sunrise',
    subtitle: 'Classic Cape Berry Magic',
    tagline: 'Sun-ripened local berries simmered gently for pure, ruby-bright nostalgia.',
    price: 75,
    size: '290g glass jar',
    color: {
      primary: '#B8283E',
      light: '#FFF0F2',
      border: '#F4B8B9',
      badgeBg: '#FDECEF',
      badgeText: '#9C1E2D',
    },
    tasteProfile: {
      sweetness: 4,
      tartness: 2,
      texture: 'Lush & spreadable with whole berry pieces',
    },
    description:
      'The quintessential storybook favourite. We gently simmer plump, sun-ripened Cape strawberries at low temperatures to protect their luminous red colour and pure strawberry aromatics without cloying refined sugar.',
    storySnippet:
      'Inspired by sunny morning smiles, Strawberry Sunrise brings that cheerful childhood warmth to every breakfast table.',
    keyIngredients: [
      'Fresh local Cape strawberries (over 70% fruit content)',
      '100% natural Birchwood xylitol',
      'Freshly squeezed lemon juice',
      'Natural citrus fruit pectin',
    ],
    bestPairedWith: [
      'Warm farm-style buttermilk scones & whipped cream',
      'Crispy artisanal toast with salted Cape butter',
      'Swirled into natural Greek yoghurt or chia pudding',
      'Soft brie or mild gouda on artisanal crackers',
    ],
    dietaryTags: ['Diabetic-Friendly', 'No Cane Sugar', 'Low GI', 'Preservative-Free', 'Vegan'],
  },
  {
    id: 'blueberry-moonlight',
    name: 'Blueberry Moonlight',
    subtitle: 'Rich & Whimsical Wild Berry',
    tagline: 'Deep indigo berries with delicate floral undertones and enchanting depth.',
    price: 75,
    size: '290g glass jar',
    color: {
      primary: '#304270',
      light: '#EEF2FC',
      border: '#C0D0F5',
      badgeBg: '#E8EDFA',
      badgeText: '#233256',
    },
    tasteProfile: {
      sweetness: 3,
      tartness: 3,
      texture: 'Velvety, burst-in-the-mouth whole blueberries',
    },
    description:
      'A whimsical, deep jewel-toned preserve bursting with hand-selected blueberries and a whisper of lemon zest. Rich in natural antioxidants and gently sweetened with plant-based xylitol.',
    storySnippet:
      'Reminiscent of stargazing over the Southern Peninsula peaks, Blueberry Moonlight brings a peaceful, magical twilight moment to your day.',
    keyIngredients: [
      'Hand-selected plump whole blueberries',
      '100% natural Birchwood xylitol',
      'Zest & juice of sun-ripened lemons',
      'Natural fruit pectin',
    ],
    bestPairedWith: [
      'Fluffy Sunday buttermilk flapjacks & French toast',
      'Creamy baked New York style cheesecake topping',
      'Warm morning rolled oats with toasted almonds',
      'Aged Camembert, gorgonzola, or creamy goat cheese',
    ],
    dietaryTags: ['Diabetic-Friendly', 'Antioxidant-Rich', 'No Cane Sugar', 'Low GI', 'Vegan'],
  },
  {
    id: 'apricot-meadow',
    name: 'Apricot Meadow Orchard',
    subtitle: 'Golden Tart & Velvet Sweet',
    tagline: 'Sun-drenched golden apricots simmered into a bright, tangy orchard spread.',
    price: 75,
    size: '290g glass jar',
    color: {
      primary: '#BF5E12',
      light: '#FFF6ED',
      border: '#FED7AA',
      badgeBg: '#FEEAD4',
      badgeText: '#9A4505',
    },
    tasteProfile: {
      sweetness: 3,
      tartness: 4,
      texture: 'Silky, luscious spread with tender apricot halves',
    },
    description:
      'Golden, fragrant apricots harvested at peak ripeness and transformed into a tangy, velvety preserve that rekindles warm memories of grandma’s country kitchen with a modern, healthy refinement.',
    storySnippet:
      'Golden rays dancing across the Sunnydale valley — this preserve celebrates genuine heartfelt warmth and sunny nostalgia.',
    keyIngredients: [
      'Sun-ripened golden Cape apricots',
      '100% natural Birchwood xylitol',
      'Fresh lemon juice',
      'Natural citrus pectin',
    ],
    bestPairedWith: [
      'Flaky buttery croissants & warm brioche',
      'Artisanal sourdough with cultured butter',
      'Glaze for roasted free-range chicken, duck, or pork',
      'Mature cheddar or crumbly Pecorino cheese',
    ],
    dietaryTags: ['Diabetic-Friendly', 'High Fruit Content', 'No Cane Sugar', 'Low GI', 'Vegan'],
  },
  {
    id: 'orange-marmalade',
    name: 'Orange Marmalade — The Coastal Dream',
    subtitle: 'Bright Citrus & Delicate Peel',
    tagline: 'Inspired by the fresh Cape Peninsula breeze with fine, tender citrus peel ribbons.',
    price: 75,
    size: '290g glass jar',
    color: {
      primary: '#B85800',
      light: '#FFF5EB',
      border: '#FDBA74',
      badgeBg: '#FEEDD9',
      badgeText: '#873B00',
    },
    tasteProfile: {
      sweetness: 3,
      tartness: 4,
      texture: 'Bright amber jelly studded with tender citrus ribbons',
    },
    description:
      'A luminous, aromatic citrus marmalade crafted with juicy Cape oranges and delicate slivers of tender orange peel. Balanced between sunny sweetness and a sophisticated citrus bite.',
    storySnippet:
      'Capturing the spirited sea breeze and golden coastal sunshine of Kommetjie and Noordhoek just over the hill from our Sunnydale kitchen.',
    keyIngredients: [
      'Hand-sliced whole Cape sweet oranges',
      'Aromatic Seville orange zest ribbons',
      '100% natural Birchwood xylitol',
      'Fresh lemon juice',
      'Natural citrus pectin',
    ],
    bestPairedWith: [
      'Thick-cut farmhouse sourdough with salted butter',
      'Toasted crumpets & English muffins',
      'Dark chocolate tart accompaniment',
      'Charcuterie platters with smoked meats and cheeses',
    ],
    dietaryTags: ['Diabetic-Friendly', 'Aromatic Citrus', 'No Cane Sugar', 'Low GI', 'Vegan'],
  },
];

export const BRAND_INFO = {
  name: 'Magic Mig Jams',
  tagline: 'A Little Jar of Magic',
  motto: 'Made with Love, One Jar at a Time',
  pillars: 'Handcrafted • Naturally Delicious • Diabetic-Friendly',
  founder: 'Dominique',
  memorialFor: 'Migale ("Magic Mig")',
  location: 'Sunnydale, Cape Town (Southern Peninsula), South Africa',
  whatsappNumber: '+27659023126',
  whatsappDisplay: '065 902 3126',
  email: 'magicmigjams@gmail.com',
  standardPrice: 75,
  bundlePrice: 210, // 3 jars for R210 (save R15)
  tastingPackPrice: 280, // All 4 jars for R280 (save R20)
};
