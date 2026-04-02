/**
 * Menu photos live in ./images/*.png (excludes home-only hero & family shots).
 * Image URLs come from Vite so production builds resolve correctly.
 */
const imageModules = import.meta.glob("./images/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

function img(file) {
  const key = `./images/${file}`;
  const url = imageModules[key];
  if (typeof url !== "string") {
    console.warn(`Menu image not found: ${file}`);
    return "";
  }
  return url;
}

const rows = [
  // Row 1: two hero donuts (wide)
  {
    file: "chocnutdonut.png",
    category: "donuts",
    title: "Nutty About You Ring",
    price: "$4.75",
    description:
      "Chocolate hug, nutty crunch, zero chill — the donut that starts rumors.",
    wide: true,
    badge: "Fan fav",
  },
  {
    file: "sprinkledonut.png",
    category: "donuts",
    title: "Sprinkle Shenanigans",
    price: "$4.25",
    description:
      "Rainbow freckles, vanilla glaze, main-character energy in every bite.",
    wide: true,
    badge: "Party",
  },
  // Row 2: two small + wide croissant; row 3: wide pie + two small (grid lines up)
  {
    file: "lemonzestcookie.png",
    category: "cookies",
    title: "Zest Friends Forever",
    price: "$4.00",
    description:
      "Bright citrus sass, soft-baked center, flaky salt sparkle on top.",
    wide: false,
    badge: null,
  },
  {
    file: "hazelnuticedlatte.png",
    category: "drinks",
    title: "Hazel Hustle Latte",
    price: "$5.25",
    description:
      "Iced espresso, toasted hazelnut, a little sweet, a lot of swagger.",
    wide: false,
    badge: null,
  },
  {
    file: "plaincrossiant.png",
    category: "pastries",
    title: "Butter Majesty Croissant",
    price: "$4.50",
    description:
      "Flaky layers, golden shell, the quiet flex of a perfect lamination.",
    wide: true,
    badge: "Classic",
  },
  {
    file: "blueberrypie.png",
    category: "pastries",
    title: "Blueberry Sky-High Pie",
    price: "$5.50",
    description:
      "Jammy berries, buttery lid, tastes like summer took a nap in flour.",
    wide: true,
    badge: "Seasonal",
  },
  // Everything else — standard cards
  {
    file: "candycrunchdonut.png",
    category: "donuts",
    title: "Candy Crunch Disco",
    price: "$4.50",
    description:
      "Crispy candy bits, glossy glaze — Saturday morning in donut form.",
    wide: false,
    badge: null,
  },
  {
    file: "caramelflufficedlatte.png",
    category: "drinks",
    title: "Caramel Fluff Float Latte",
    price: "$5.50",
    description:
      "Cloudy cream cap, slow caramel drip, iced and dangerously cozy.",
    wide: false,
    badge: null,
  },
  {
    file: "caramelpowderdonut.png",
    category: "donuts",
    title: "Powder Keg Caramel Ring",
    price: "$4.35",
    description:
      "Silky caramel, snowy dusting — sweet, messy, worth the napkin stack.",
    wide: false,
    badge: null,
  },
  {
    file: "cherrypie.png",
    category: "pastries",
    title: "Cherry On Top Pie",
    price: "$5.25",
    description:
      "Tart cherries, lattice flex, the slice that steals the picnic spotlight.",
    wide: false,
    badge: null,
  },
  {
    file: "chocandsprinklesdonut.png",
    category: "donuts",
    title: "Choc Party Sprinkle Ring",
    price: "$4.25",
    description:
      "Dark dip, rainbow sprinkles — birthday energy on a random Tuesday.",
    wide: false,
    badge: null,
  },
  {
    file: "chocchipandvanillaglazedmuffin.png",
    category: "muffins-breads",
    title: "Double Trouble Chip Muffin",
    price: "$3.95",
    description:
      "Vanilla glaze curtain call, chips inside, domed top drama.",
    wide: false,
    badge: "Fresh",
  },
  {
    file: "chocchipbananabread.png",
    category: "muffins-breads",
    title: "Chunky Monkey Banana Bread",
    price: "$4.25",
    description:
      "Walnuts, chocolate chunks, banana backup singers — thick-cut only.",
    wide: false,
    badge: null,
  },
  {
    file: "chocchipcroissant.png",
    category: "pastries",
    title: "Chip Shot Croissant",
    price: "$5.25",
    description:
      "Laminated layers meet melty chips — breakfast dessert, no apology.",
    wide: false,
    badge: null,
  },
  {
    file: "choccookiecrunchdonut.png",
    category: "donuts",
    title: "Cookie Monster Crunch Ring",
    price: "$4.85",
    description:
      "Cookie crumb avalanche, chocolate glaze — crunch louder than your group chat.",
    wide: false,
    badge: null,
  },
  {
    file: "chocdipcroissant.png",
    category: "pastries",
    title: "Choc-Dip Glory Moon",
    price: "$5.00",
    description:
      "Half-dipped crescent, glossy shell — moon phase: delicious.",
    wide: false,
    badge: null,
  },
  {
    file: "chocglazedessert.png",
    category: "pastries",
    title: "Glossy Choc Dream Plate",
    price: "$5.75",
    description:
      "Mirror glaze, mousse mood — dessert that dresses better than we do.",
    wide: false,
    badge: null,
  },
  {
    file: "chocolatechipcookie.png",
    category: "cookies",
    title: "Classic Chip Hugs",
    price: "$3.75",
    description:
      "Soft center, chip freckles, the hug your afternoon ordered.",
    wide: false,
    badge: null,
  },
  {
    file: "chocswirlcake.png",
    category: "pastries",
    title: "Swirly Twirly Cake",
    price: "$5.95",
    description:
      "Marble madness, cocoa ribbons — slice first, photos second.",
    wide: false,
    badge: null,
  },
  {
    file: "choczuchinnimuffin.png",
    category: "muffins-breads",
    title: "Zucchini Plot-Twist Muffin",
    price: "$3.85",
    description:
      "Vegetable cameo, chocolate lead role — moist, sneaky, approved.",
    wide: false,
    badge: null,
  },
  {
    file: "cinnimonandsugardonut.png",
    category: "donuts",
    title: "Cinn-Sugar Main Character",
    price: "$3.95",
    description:
      "Warm spice tumble, soft ring — the cozy reboot you needed.",
    wide: false,
    badge: null,
  },
  {
    file: "cinnimonstruselslice.png",
    category: "pastries",
    title: "Cinna-Monster Streusel",
    price: "$4.75",
    description:
      "Crumb topping with attitude, cinnamon swirl receipts included.",
    wide: false,
    badge: "Warm",
  },
  {
    file: "cowboycookie.png",
    category: "cookies",
    title: "Yeehaw Cowboy Cookie",
    price: "$4.25",
    description:
      "Chewy, chunky, slightly wild — boots optional, napkins required.",
    wide: false,
    badge: null,
  },
  {
    file: "darkchoccookie.png",
    category: "cookies",
    title: "Lights-Out Choc Chip",
    price: "$4.00",
    description:
      "Deep cocoa, soft center, sea salt mic drop.",
    wide: false,
    badge: null,
  },
  {
    file: "ferrorochecupcake.png",
    category: "pastries",
    title: "Gold-Ball Cupcake Bash",
    price: "$4.95",
    description:
      "Nutty crown, silky frosting — tiny cake, huge main-character moment.",
    wide: false,
    badge: null,
  },
  {
    file: "frostedcronut.png",
    category: "pastries",
    title: "Frosted Cronut Carousel",
    price: "$5.50",
    description:
      "Flaky donut-croissant hybrid, sugar glaze spin — hold on tight.",
    wide: false,
    badge: "New",
  },
  {
    file: "fruittart.png",
    category: "pastries",
    title: "Fruit Salad Top-Hat Tart",
    price: "$5.25",
    description:
      "Seasonal fruit fanfare, custard base — dressed up for no reason.",
    wide: false,
    badge: null,
  },
  {
    file: "fruitypebblesdonut.png",
    category: "donuts",
    title: "Saturday Pebbles Ring",
    price: "$4.65",
    description:
      "Cereal crunch, vanilla glaze — cartoon bright, grown-up delicious.",
    wide: false,
    badge: null,
  },
  {
    file: "hotlavalatte.png",
    category: "drinks",
    title: "Lava Lamp Latte",
    price: "$5.35",
    description:
      "Steamed spice swirl, caramel glow — sip slow, it’s running hot.",
    wide: false,
    badge: null,
  },
  {
    file: "icedbrownsugarlatte.png",
    category: "drinks",
    title: "Brown-Sugar Iced Shimmer",
    price: "$5.15",
    description:
      "Iced latte, molasses mood, ice clinking like tiny applause.",
    wide: false,
    badge: null,
  },
  {
    file: "icedmachiattolatte.png",
    category: "drinks",
    title: "Macchiato Mood Ring",
    price: "$4.95",
    description:
      "Espresso float, milk veil — color-changing vibes, caffeine core.",
    wide: false,
    badge: null,
  },
  {
    file: "icedvanillalatte.png",
    category: "drinks",
    title: "Vanilla Wave Iced Latte",
    price: "$5.00",
    description:
      "Chill beans, soft vanilla tide — summer uniform in a cup.",
    wide: false,
    badge: null,
  },
  {
    file: "lavendardonut.png",
    category: "donuts",
    title: "Lavender Daydream Ring",
    price: "$4.40",
    description:
      "Floral glaze, soft yeast cloud — calm down and eat a donut.",
    wide: false,
    badge: null,
  },
  {
    file: "lemonberrytart.png",
    category: "pastries",
    title: "Lemon-Berry Tango Tart",
    price: "$5.15",
    description:
      "Zingy curd, berry backup dancers — tart with choreography.",
    wide: false,
    badge: null,
  },
  {
    file: "lemonlayerpuff.png",
    category: "pastries",
    title: "Lemon Layer Puff Parade",
    price: "$4.85",
    description:
      "Stacked puff pastry, citrus confetti — flaky, loud, proud.",
    wide: false,
    badge: null,
  },
  {
    file: "lemonpie.png",
    category: "pastries",
    title: "Pucker-Up Lemon Pie",
    price: "$5.35",
    description:
      "Tangy filling, toasty meringue flirt — kiss your napkin goodbye.",
    wide: false,
    badge: null,
  },
  {
    file: "lemonpuffs.png",
    category: "pastries",
    title: "Little Lemon Cloud Puffs",
    price: "$4.50",
    description:
      "Bite-size puffs, citrus mist — basically edible sunshine.",
    wide: false,
    badge: null,
  },
  {
    file: "m&mcookie.png",
    category: "cookies",
    title: "M&M Mingle Cookie",
    price: "$3.95",
    description:
      "Candy shell confetti, chewy base — mingle, crunch, repeat.",
    wide: false,
    badge: null,
  },
  {
    file: "matchdonut.png",
    category: "donuts",
    title: "Matcha Made in Donut Heaven",
    price: "$4.55",
    description:
      "Earthy matcha glaze, soft ring — zen and the art of sprinkles.",
    wide: false,
    badge: null,
  },
  {
    file: "oldfashionedstraberrydonut.png",
    category: "donuts",
    title: "Old-School Strawberry Swing",
    price: "$4.20",
    description:
      "Berry glaze nostalgia, cakey bounce — vinyl records not included.",
    wide: false,
    badge: null,
  },
  {
    file: "oreocentercookie.png",
    category: "cookies",
    title: "Oreo Core Surprise",
    price: "$4.35",
    description:
      "Sandwich cookie cameo inside — plot twist, still chewy.",
    wide: false,
    badge: null,
  },
  {
    file: "pearpie.png",
    category: "pastries",
    title: "Pear-fect Slice Pie",
    price: "$5.40",
    description:
      "Juicy pears, spice whisper — autumn’s favorite overachiever.",
    wide: false,
    badge: null,
  },
  {
    file: "smoresdonut.png",
    category: "donuts",
    title: "Campfire S'mores Ring",
    price: "$4.90",
    description:
      "Toasty marshmallow, chocolate smudge, graham crumble trail.",
    wide: false,
    badge: "Warm",
  },
  {
    file: "snickersdonut.png",
    category: "donuts",
    title: "Snickers in a Circle",
    price: "$4.80",
    description:
      "Caramel-nougat energy, nutty bits — hunger, solved in one ring.",
    wide: false,
    badge: null,
  },
  {
    file: "sprinkledonutsandwhich.png",
    category: "donuts",
    title: "Sprinkle Sammy Stack",
    price: "$5.25",
    description:
      "Two donuts, filling in the middle — sandwich logic, dessert law.",
    wide: false,
    badge: null,
  },
  {
    file: "stawberrypuffdonut.png",
    category: "donuts",
    title: "Strawberry Puff Pizzazz",
    price: "$4.70",
    description:
      "Berry fluff, airy puff crown — sweet, extra, on purpose.",
    wide: false,
    badge: null,
  },
  {
    file: "strawberrycroissant.png",
    category: "pastries",
    title: "Berry Butter Croissant",
    price: "$5.35",
    description:
      "Strawberry jam streaks, buttery layers — breakfast valentine.",
    wide: false,
    badge: null,
  },
  {
    file: "stroopwafflescupcake.png",
    category: "pastries",
    title: "Stroopwaffle Cupcake Hug",
    price: "$4.85",
    description:
      "Caramel waffle hat, fluffy base — Amsterdam called, we answered.",
    wide: false,
    badge: null,
  },
  {
    file: "struselmuffin.png",
    category: "muffins-breads",
    title: "Streusel Squad Muffin",
    price: "$3.90",
    description:
      "Crumb crew on top, tender middle — breakfast with a fan club.",
    wide: false,
    badge: null,
  },
  {
    file: "sugarcookie.png",
    category: "cookies",
    title: "Sweet-Talk Sugar Cookie",
    price: "$3.50",
    description:
      "Soft vanilla canvas, sprinkle wink — compliments the coffee.",
    wide: false,
    badge: null,
  },
  {
    file: "triplechoceverythingcookie.png",
    category: "cookies",
    title: "Triple Choc Everything (Cookie)",
    price: "$4.50",
    description:
      "Three kinds of chocolate, one brave cookie — pace yourself.",
    wide: false,
    badge: null,
  },
  {
    file: "twixcookie.png",
    category: "cookies",
    title: "Left-Twix Energy Cookie",
    price: "$4.15",
    description:
      "Caramel stripe, cookie crunch — pick a side, we won’t judge.",
    wide: false,
    badge: null,
  },
  {
    file: "vanilastrawberryglazedonut.png",
    category: "donuts",
    title: "Strawberry-Vanilla Kiss Ring",
    price: "$4.30",
    description:
      "Pink glaze smooch, vanilla undertow — flirty, fried, fabulous.",
    wide: false,
    badge: null,
  },
  {
    file: "vanillacaramelswirldonut.png",
    category: "donuts",
    title: "Caramel Swirl Vanilla Rodeo",
    price: "$4.45",
    description:
      "Ribbon caramel, vanilla ring — hold on, it’s a sweet bucking bronco.",
    wide: false,
    badge: null,
  },
  {
    file: "vanillawaferdonut.png",
    category: "donuts",
    title: "Wafer-Thin Mint… Donut",
    price: "$4.35",
    description:
      "Crispy wafer crunch, vanilla glaze — the plot twist is it’s a donut.",
    wide: false,
    badge: null,
  },
];

export const menuItems = rows.map((row) => ({
  category: row.category,
  title: row.title,
  price: row.price,
  description: row.description,
  image: img(row.file),
  wide: row.wide,
  badge: row.badge,
}));
