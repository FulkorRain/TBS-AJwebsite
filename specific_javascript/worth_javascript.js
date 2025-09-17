 const tabs = document.querySelectorAll('.worth-images img');
 const sections = document.querySelectorAll('.worth-content .section');

 tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-section');
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
 })

 const alphaItems = [
   {
      name: "DJ Headsets",
      img: "images/item_worth_images/dj_headsets.webp",
      variations: [
         { type: "Clashing colors", price: "1 White bowtie / 315k Sapphires", demand: "Very low"},
         { type: "Neons", price: "2-3 White bowties", demand: "Medium"},
         { type: "Color on color", price: "2-4 White bowties", demand: "Medium"},
         { type: "Pastels", price: "4 Bowties", demand: "Medium"},
         { type: "Pure colors", price: "4-6+ White bowties", demand: "High"}
      ]
   },
   {
      name: "Wind-Up Key",
      img: "images/item_worth_images/windup_key.webp",
      variations: [
         { type: "Swampy", price: "3 Blacktips / 210k Sapphires", demand: "Very low"},
         { type: "Default", price: "1 White bowtie", demand: "Low"},
         { type: "Neons", price: "1.5 White bowties", demand: "Medium"},
         { type: "Pastels", price: "1.5-2 White bowties", demand: "Medium"},
         { type: "Pure colors", price: "2-3 White bowties", demand: "High"}
      ]
   },
   {
      name: "Clown Hair",
      img: "images/item_worth_images/clown_hair.webp",
      variations: [
         { type: "Clashing colors", price: "2-3k", demand: "Very low"},
         { type: "Default", price: "4-5k", demand: "Low"},
         { type: "Neons", price: "10-15k+", demand: "Low"},
         { type: "Color on color", price: "2 Forests / 70k Sapphires", demand: "Low"},
         { type: "Pure colors", price: "3+ Forests / 105k+ Sapphires", demand: "Low"}
      ]
   },
   {
      name: "Ghost Dragon Wings",
      img: "images/item_worth_images/ghost_dragon_wings.webp",
      variations: [
         { type: "Pink", price: "2 Forests / 70k Sapphires", demand: "Low"},
         { type: "Purple", price: "2-2.5 Forests / 70k-88k Sapphires", demand: "Low"},
         { type: "Lime", price: "3 Forests / 105k Sapphires", demand: "Low"},
         { type: "Teal", price: "3-4 Forests / 105k-140k Sapphires", demand: "Medium"},
         { type: "Yellow", price: "3-4 Forests / 105k-140k Sapphires", demand: "Medium"},
         { type: "Red", price: "2 Blacktips / 140k Sapphires", demand: "Medium"}
      ]
   },
   {
      name: "Limited Edition Peck Ears",
      img: "images/item_worth_images/peck_ears.webp",
      variations: [
         { type: "Clashing colors", price: "7k", demand: "Low"},
         { type: "Neons", price: "8k-9k", demand: "Low"},
         { type: "Pastels", price: "10k+", demand: "Low"},
         { type: "Default", price: "15k-20k", demand: "Low"}
      ]
   },
   {
      name: "Archer Hat",
      img: "images/item_worth_images/archer_hat.webp",
      variations: [
         { type: "Clashing colors", price: "1-1.5 Forests / 35k-53k Sapphires", demand: "Very low"},
         { type: "Neons", price: "2 Forests / 70k Sapphires", demand: "Low"},
         { type: "Color on color", price: "3-4 Forests / 105k-140k Sapphires", demand: "Low"},
         { type: "Pure colors", price: "5 Forests / 175k Sapphires", demand: "Low"}
      ]
   },
   {
      name: "Steel Toe Boots",
      img: "images/item_worth_images/steel_toe_boots.webp",
      variations: [
         { type: "Clashing colors", price: "1 Blackout-Forest / 20k-35k Sapphires", demand: "Very low"},
         { type: "Default", price: "1 White bowtie / 240k Sapphires", demand: "Low"},
         { type: "Neons", price: "2-3 Blacktips / 120k-140k Sapphires", demand: "Very low"},
         { type: "Color on color", price: "3+ Blacktips / 210k+ Sapphires", demand: "Low"},
         { type: "Pure colors", price: "1-1.5 White bowties / 240k-320k Sapphires", demand: "Low"}
      ]
   },
   {
      name: "Greely's Cloak",
      img: "images/item_worth_images/greely_cloak.webp",
      variations: [
         { type: "Clashing colors", price: "5-6k", demand: "Low"},
         { type: "Default", price: "7k", demand: "Low"},
         { type: "Neons", price: "7k-8k", demand: "Low"},
         { type: "Pastels", price: "8k-9k", demand: "Low"},
         { type: "Color on color", price: "9k-10k", demand: "Low"},
         { type: "Pure colors", price: "20k-1 Forest+", demand: "Medium"}
      ]
   },
   {
      name: "Dragon Wings",
      img: "images/item_worth_images/dragon_wings.webp",
      variations: [
         { type: "Clashing colors", price: "1 Forest / 35k Sapphires", demand: "Very low"},
         { type: "Neons", price: "2 Forests / 70k Sapphires", demand: "Low"},
         { type: "Color on color", price: "2 Blacktips / 4 Forests / 140k Sapphires", demand: "Low"},
         { type: "Pure colors", price: "2+ Blacktips / 4+ Forests / 140k+ Sapphires", demand: "Low"}
      ]
   },
   {
      name: "Starlight Wings",
      img: "images/item_worth_images/starlight_wings.webp",
      variations: [
         { type: "Blue and yellow", price: "2 Forests / 70k Sapphires", demand: "Low"},
         { type: "Blue and pink", price: "2 Forests / 70k Sapphires", demand: "Low"},
         { type: "Yellow", price: "2-3 Forests / 70k-105k Sapphires", demand: "Low"},
         { type: "Gold and yellow", price: "2-3 Forests / 70k-105k Sapphires", demand: "Low"},
         { type: "Neon green", price: "2-3 Forests / 70k-105k Sapphires", demand: "Low"},
         { type: "Teal", price: "2-3 Forests / 70k-105k Sapphires", demand: "Low"},
         { type: "Blue and white (default)", price: "3 Forests / 105k Sapphires", demand: "Low"},
         { type: "Green and white", price: "3 Forests / 105k Sapphires", demand: "Low"},
         { type: "Navy and white", price: "3 Forests / 105k Sapphires", demand: "Low"},
         { type: "Yellow and white", price: "3 Forests / 105k Sapphires", demand: "Low"},
         { type: "Purple", price: "3 Forests / 105k Sapphires", demand: "Low"},
         { type: "Black and blue", price: "3-4 Forests / 105k-140k Sapphires", demand: "Low"},
         { type: "Hot pink", price: "4 Forests / 140k Sapphires", demand: "Low"},
         { type: "Pink and white", price: "4 Forests / 140k Sapphires", demand: "Low"},
         { type: "Red and white", price: "4 Forests / 140k Sapphires", demand: "Low"},
         { type: "Gray and white", price: "4 Forests / 140k Sapphires", demand: "Medium"},
         { type: "Red", price: "4-4.5 Forests / 140k-158k Sapphires", demand: "Medium"},
         { type: "White", price: "1 White bowtie / 240k Sapphires", demand: "Medium"}
      ]
   },
   {
      name: "Dizzy Stars",
      img: "images/item_worth_images/dizzy_stars.webp",
      variations: [
         { type: "Clashing colors", price: "6k", demand: "Low"},
         { type: "Default", price: "7k", demand: "Low"},
         { type: "Neons", price: "7-8k", demand: "Low"},
         { type: "Pure colors", price: "20k-1 Forest+", demand: "Medium"}
      ]
   },
   {
      name: "Dizzy Hearts",
      img: "images/item_worth_images/dizzy_hearts.webp",
      variations: [
         { type: "Pink and purple", price: "2 Forests / 80k Sapphires", demand: "Medium"},
         { type: "Purple", price: "2-3 Forests / 80k-120k Sapphires", demand: "Medium"},
         { type: "Pink", price: "3-4 Forests / 120k-160k Sapphires", demand: "Medium"},
         { type: "Red", price: "3+ Forests / 120k+ Sapphires", demand: "Medium"},
         { type: "Black", price: "5 Forests / 200k Sapphires", demand: "High"},
         { type: "White", price: "6-8 Forests / 240k-320k Sapphires", demand: "High"}
      ]
   },
   {
      name: "Spring Forest Set",
      img: "images/item_worth_images/spring_forest_set.webp",
      variations: [
         { type: "Bow", price: "2k-3k", demand: "Very low"},
         { type: "Helmet", price: "2k-3k", demand: "Very low"},
         { type: "Amulet", price: "2k-3k", demand: "Very low"},
         { type: "Armor", price: "2k-3k", demand: "Very low"},
         { type: "Tail Armor", price: "2k-3k", demand: "Very low"},
         { type: "Forest Gauntlets", price: "1 Forest / 40k-45k Sapphires", demand: "Low"}
      ]
   },
   {
      name: "Crossbow",
      img: "images/item_worth_images/crossbow.webp",
      variations: [
         { type: "Clashing colors", price: "1-1.5 Forests / 35k-45k Sapphires", demand: "Very low"},
         { type: "Neons", price: "2 Forests / 70k Sapphires", demand: "Low"},
         { type: "Color on color", price: "2-3 Forests / 70k-105k Sapphires", demand: "Low"},
         { type: "Pure colors", price: "4+ Forests / 140k+ Sapphires", demand: "Low"}
      ]
   },
   {
      name: "Jamaaliday Double Tail",
      img: "images/item_worth_images/jamaaliday_double_tail.webp",
      variations: [
         { type: "Red and green", price: "15k", demand: "Very low"},
         { type: "Red and light green", price: "1 Blackout / 20k Sapphires", demand: "Low"},
         { type: "Green", price: "2 Forests / 70k Sapphires", demand: "Low"},
         { type: "Green and white", price: "2 Forests / 70k Sapphires", demand: "Low"},
         { type: "Red", price: "2 Blacktips / 4 Forests / 140k Sapphires", demand: "Medium"},
         { type: "Red and white", price: "2-2.5 Blacktips / 4-4.5 Forests / 140k-158k Sapphires", demand: "Medium"},
         { type: "White", price: "3 White bowties", demand: "High"}
      ]
   },
     {
      name: "Jamaaliday Triple Tail",
      img: "images/item_worth_images/jamaaliday_triple_tail.webp",
      variations: [
         { type: "Green and red", price: "8k", demand: "Very low"},
         { type: "Red and green", price: "10k", demand: "Very low"},
         { type: "Green", price: "11k-12k", demand: "Very low"},
         { type: "Green and white", price: "15k-16k+", demand: "Very low"},
         { type: "White and green", price: "15k-20k", demand: "Very low"},
         { type: "Red", price: "1 Forest / 35k Sapphires", demand: "Low"},
         { type: "Red and white", price: "1-1.5 Forests / 35k-53k Sapphires", demand: "Low"},
         { type: "White and red", price: "1-1.5 Forests / 35k-53k Sapphires", demand: "Low"},
         { type: "White", price: "5 Forests / 200k Sapphires", demand: "Low"}
      ]
   },
   {
      name: "Fox Tail With Bow",
      img: "images/item_worth_images/fox_tail_bow.webp",
      variations: [
         { type: "Clashing colors", price: "1-2k", demand: "Very low"},
         { type: "Neons/Pastels", price: "2-3k", demand: "Very low"},
         { type: "Color on color", price: "4-5k+", demand: "Very low"},
         { type: "Pure colors", price: "5k+", demand: "Low"}
      ]
   },
   {
      name: "Cherry Blossom Wings",
      img: "images/item_worth_images/cherry_blossom_wings.webp",
      variations: [
         { type: "Lavender", price: "3-4k", demand: "Low"},
         { type: "Scarlet", price: "3-4k", demand: "Low"},
         { type: "Fuschia", price: "3-4k", demand: "Low"},
         { type: "Burgundy", price: "3-4k", demand: "Low"},
         { type: "Crimson", price: "3-4k", demand: "Low"},
         { type: "Plum", price: "3-4k", demand: "Low"}
      ]
   },
   {
      name: "Heart Birch Wings",
      img: "images/item_worth_images/heart_birch_wings.webp",
      variations: [
         { type: "Clashing colors", price: "2-3k", demand: "Very low"},
         { type: "Default", price: "3k-4k", demand: "Very low"},
         { type: "Pastel", price: "4k-5k", demand: "Very low"},
         { type: "Color on color", price: "4k-5k", demand: "Very low"}
      ]
   },
   {
      name: "Dark Wizard Hat",
      img: "images/item_worth_images/dark_wizard_hat.webp",
      variations: [
         { type: "Clashing colors", price: "700-1k", demand: "Very low"},
         { type: "Pastels", price: "3k", demand: "Low"},
         { type: "Neons", price: "3k", demand: "Low"},
         { type: "Color on color", price: "4k+", demand: "Low"},
         { type: "Pure", price: "5k", demand: "Low"}
      ]
   },
   {
      name: "Laser Beam Eyes",
      img: "images/item_worth_images/laser_beam_eyes.webp",
      variations: [
         { type: "Clashing colors", price: "4k-5k", demand: "Low"},
         { type: "Pastels", price: "7k-8k", demand: "Low"},
         { type: "Color on color", price: "8k-9k+", demand: "Low"},
         { type: "Pure", price: "10k-15k", demand: "Low"},
         { type: "Solid", price: "15k+", demand: "Low"}
      ]
   },
   {
      name: "Horned Alligator",
      img: "images/item_worth_images/horned_alligator.webp",
      variations: [
         { type: "Clashing colors", price: "1-3k", demand: "Low"},
         { type: "Default", price: "2.5k-3.5k", demand: "Low"},
         { type: "Pastels", price: "3.5k-5k", demand: "Low"},
         { type: "Neons", price: "3k-5k+", demand: "Low"},
         { type: "Color on color", price: "3k-5k+", demand: "Low"},
         { type: "Semi-solids", price: "4k-5k Sapphires", demand: "Low"},
         { type: "Pure colors", price: "5k+ Sapphires", demand: "Low"},
         { type: "Double pure colors", price: "10k+ Sapphires", demand: "Low"}
      ]
   },
   {
      name: "Fire Wig",
      img: "images/item_worth_images/fire_wig.webp",
      variations: [
         { type: "Clashing colors", price: "2k-3k", demand: "Very low"},
         { type: "Pastels", price: "6k-7k", demand: "Low"},
         { type: "Neons", price: "6k-7k", demand: "Low"},
         { type: "Decent gradients", price: "8k+", demand: "Low"},
         { type: "Color on color", price: "8k-10k", demand: "Low"},
         { type: "Pure", price: "10k+", demand: "Low"},
         { type: "Semisolid", price: "10k-15k", demand: "Low"}
      ]
   },
   {
      name: "Alpha Chest",
      img: "images/item_worth_images/alpha_chest.webp",
      variations: [
         { type: "Default", price: "7k Sapphires", demand: "Low"}
      ]
   },
   {
      name: "Flapper Hat",
      img: "images/item_worth_images/flapper_hat.webp",
      variations: [
         { type: "Clashing colors", price: "1-1.5 Forests worth (not pure) / 35k-53k Sapphires", demand: "Very low"},
         { type: "Default", price: "2 Forests worth (not pure) / 70k Sapphires", demand: "Very low"},
         { type: "Neons", price: "2 Forests worth (not pure) / 70k Sapphires", demand: "Very low"},
         { type: "Color on color", price: "2-3 Forests worth (not pure) / 70k-105k Sapphires", demand: "Very low"},
         { type: "Pastels", price: "2-3 Forests worth (not pure) / 70k-105k Sapphires", demand: "Low"},
         { type: "Pure colors", price: "2-3 Forests worth (not pure) / 105k Sapphires", demand: "Low"}
      ]
   },
   {
      name: "Epic Bubble Jetpack",
      img: "images/item_worth_images/epic_bubble_jetpack.webp",
      variations: [
         { type: "Clashing colors", price: "3k+ Sapphires", demand: "Low"},
         { type: "Neons", price: "5k-6k Sapphires", demand: "Low"},
         { type: "Pastels", price: "5k-6k Sapphires", demand: "Low"},
         { type: "Color on color", price: "6k+ Sapphires", demand: "Low"},
         { type: "Pure colors", price: "7k+ Sapphires", demand: "Low"}
      ]
   }
 ];

 const leilaniItems = [
  {
    name: "Feathered Ears (Red)",
    img: "images/item_worth_images/feathered_ears_red.webp",
    variations: [
      { type: "Default", price: "12k-13k Sapphires", demand: "High" }
    ]
  },
  {
    name: "Feathered Earrings (Black & Purple)",
    img: "images/item_worth_images/feathered_earrings_black_purple.webp",
    variations: [
      { type: "Default", price: "1 White bowtie / 315k Sapphires", demand: "Very low" }
    ]
  },
  {
    name: "Feather Necklace (Black & Purple)",
    img: "images/item_worth_images/feather_necklace_black_purple.webp",
    variations: [
      { type: "Default", price: "Blackout-Forest / 23k-40k Sapphires", demand: "Very low" }
    ]
  },
  {
    name: "Fluffy Heart Headband",
    img: "images/item_worth_images/fluffy_heart_headband.webp",
    variations: [
      { type: "Default", price: "1.5 Forests / 67k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Snail Family Hat (Periwinkle)",
    img: "images/item_worth_images/snail_family_hat_periwinkle.webp",
    variations: [
      { type: "Default", price: "2 Forests / 80k Sapphires", demand: "Very low" }
    ]
  },
  {
    name: "Heart Antennae (Teal & Pink)",
    img: "images/item_worth_images/heart_antennae_teal_pink.webp",
    variations: [
      { type: "Default", price: "2 Forests / 80k Sapphires", demand: "Very low" }
    ]
  },
  {
    name: "Airplane Wings (White & Pink)",
    img: "images/item_worth_images/airplane_wings_white_pink.webp",
    variations: [
      { type: "Default", price: "1.5-2 White bowties / 473k-525k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Furry Arm Cuffs (Neon Blue)",
    img: "images/item_worth_images/furry_arm_cuffs_neon_blue.webp",
    variations: [
      { type: "Default", price: "30k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Bowtie (Red)",
    img: "images/item_worth_images/bowtie_red.webp",
    variations: [
      { type: "Default", price: "1 White bowtie / 315k Sapphires", demand: "Medium" }
    ]
  },
  {
    name: "Deer Fur (White)",
    img: "images/item_worth_images/deer_fur_white.webp",
    variations: [
      { type: "Default", price: "7-10k Sapphires", demand: "Medium" }
    ]
  },
  {
    name: "Forest Gauntlets (Orange)",
    img: "images/item_worth_images/forest_gauntlets_orange.webp",
    variations: [
      { type: "Default", price: "3 Forests / 120k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Forest Gauntlets (Red)",
    img: "images/item_worth_images/forest_gauntlets_red.webp",
    variations: [
      { type: "Default", price: "1.5 Forests / 53k Sapphires", demand: "High" }
    ]
  },
  {
    name: "Mythical Spiked Collar (Navy)",
    img: "images/item_worth_images/mythical_spiked_collar_navy.webp",
    variations: [
      { type: "Default", price: "2 Blacktips / 4 Forests / 140k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Wind-up Key (Black)",
    img: "images/item_worth_images/windup_key_black.webp",
    variations: [
      { type: "Default", price: "2-3 White bowties / 630k-945k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Ice Dragon Wings",
    img: "images/item_worth_images/ice_dragon_wings.webp",
    variations: [
      { type: "Default", price: "6k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Hypno Glasses (Hot Pink)",
    img: "images/item_worth_images/hypno_glasses_hot_pink.webp",
    variations: [
      { type: "Default", price: "1 Forest / 40k Sapphires", demand: "Very low" }
    ]
  },
  {
    name: "Whiteout Raccoon Tail",
    img: "images/item_worth_images/whiteout_raccoon_tail.webp",
    variations: [
      { type: "Default", price: "7-8k Sapphires", demand: "Medium" }
    ]
  },
  {
    name: "Raccoon Tail (Blue & Black)",
    img: "images/item_worth_images/raccoon_tail_blue_black.webp",
    variations: [
      { type: "Default", price: "1 Blacktip / 2 Forests / 80k Sapphires", demand: "Very low" }
    ]
  },
  {
    name: "Raccoon Tail (Pink)",
    img: "images/item_worth_images/raccoon_tail_pink.webp",
    variations: [
      { type: "Default", price: "1.5-2 White bowties / 473k-525k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Ancient Dragon Wings",
    img: "images/item_worth_images/ancient_dragon_wings.webp",
    variations: [
      { type: "Default", price: "5 White bowties (in variety)", demand: "Medium" }
    ]
  },
  {
    name: "Leilani Spiked Collar",
    img: "images/item_worth_images/leilani_spiked_collar.webp",
    variations: [
      { type: "Default", price: "4.5 White bowties (in variety)", demand: "Low" }
    ]
  }
];

 const rarebetasItems = [
  {
    name: "Forest Gauntlets",
    img: "images/item_worth_images/forest_gauntlets.webp",
    variations: [
      { type: "Default", price: "40k-44k Sapphires", demand: "Very high" }
    ]
  },
  {
    name: "Blackout Spiked Collar",
    img: "images/item_worth_images/blackout_spiked_collar.webp",
    variations: [
      { type: "Default", price: "22k-23k Sapphires", demand: "Very high" }
    ]
  },
  {
    name: "Raccoon Tails",
    img: "images/item_worth_images/raccoon_tails.webp",
    variations: [
      { type: "Purple", price: "15k-20k Sapphires", demand: "Very low" },
      { type: "White Tip", price: "20k Sapphires", demand: "Very low" },
      { type: "Blue & Yellow", price: "30k Sapphires", demand: "Very low" },
      { type: "Teal", price: "30k-35k Sapphires", demand: "Very low" },
      { type: "Red", price: "1 Forest / 40k Sapphires", demand: "Low" },
      { type: "Black Tip", price: "1.5 Forests / 60k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Bowties",
    img: "images/item_worth_images/bowties.webp",
    variations: [
      { type: "Blue", price: "2 Forests / 80k Sapphires", demand: "Low" },
      { type: "Black", price: "3 Forests / 120k Sapphires", demand: "Medium" },
      { type: "Pink", price: "3 Forests / 120k Sapphires", demand: "Low" },
      { type: "Green", price: "3 Forests / 120k Sapphires", demand: "Low" },
      { type: "Purple", price: "3 Forests / 120k Sapphires", demand: "Low" },
      { type: "White", price: "9 Forests / 360k Sapphires", demand: "Very high" }
    ]
  },
  {
    name: "Furry Arm Cuffs",
    img: "images/item_worth_images/furry_arm_cuffs.webp",
    variations: [
      { type: "White & Peach", price: "6k Sapphires", demand: "Very low" },
      { type: "Pink", price: "6k Sapphires", demand: "Very low" },
      { type: "Purple", price: "7k Sapphires", demand: "Very low" },
      { type: "Teal", price: "9k Sapphires", demand: "Low" },
      { type: "Red", price: "10k-12k Sapphires", demand: "Low" },
      { type: "Blue", price: "9k-10k Sapphires", demand: "Low" },
      { type: "Grey", price: "13k Sapphires", demand: "Low" },
      { type: "White & Black", price: "15k-16k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Lei",
    img: "images/item_worth_images/lei.webp",
    variations: [
      { type: "Blue", price: "15k Sapphires", demand: "Very low" },
      { type: "Lilac", price: "1 Blackout / 20k Sapphires", demand: "Low" },
      { type: "Teal", price: "1 Forest / 40k Sapphires", demand: "Very low" },
      { type: "Peach", price: "1 Forest / 40k Sapphires", demand: "Very low" },
      { type: "Red", price: "2 Blacktips / 140k Sapphires", demand: "Low" },
      { type: "Yellow", price: "1 White bowtie / 315k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "DJ Headset",
    img: "images/item_worth_images/dj_headset.webp",
    variations: [
      { type: "Purple & Red", price: "2.5 Forests / 107k Sapphires", demand: "Low" },
      { type: "Pink", price: "3 Forests / 120k Sapphires", demand: "Medium" },
      { type: "Brown", price: "3 Forests / 120k Sapphires", demand: "Medium" },
      { type: "Teal", price: "3 Forests / 120k Sapphires", demand: "Medium" },
      { type: "Red", price: "4 Forests / 160k Sapphires", demand: "High" },
      { type: "Peach", price: "5 Forests / 200k Sapphires", demand: "High" }
    ]
  },
  {
    name: "Curly Antlers",
    img: "images/item_worth_images/curly_antlers.webp",
    variations: [
      { type: "Black", price: "5k-6k Sapphires", demand: "Low" },
      { type: "White", price: "5.5k-6k Sapphires", demand: "Low" },
      { type: "Lavender", price: "7k-8k Sapphires", demand: "Low" },
      { type: "Red", price: "9k-10k Sapphires", demand: "Low" },
      { type: "Cyan", price: "15k Sapphires", demand: "Low" },
      { type: "Gold", price: "15k Sapphires", demand: "Low" },
      { type: "Brown", price: "1 Blackout / 20k Sapphires", demand: "Low" },
      { type: "Lime", price: "20k-25k Sapphires", demand: "Low" },
      { type: "Dark Green", price: "1 Forest / 35k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Wind-Up Key",
    img: "images/item_worth_images/beta_windup_key.webp",
    variations: [
      { type: "Red", price: "1.5 Forests / 60k Sapphires", demand: "Low" },
      { type: "Gold", price: "2 Forests / 80k Sapphires", demand: "Low" },
      { type: "Teal", price: "2 Forests / 80k Sapphires", demand: "Low" },
      { type: "Purple", price: "2 Forests / 80k Sapphires", demand: "Low" },
      { type: "Blue", price: "2 Forests / 80k Sapphires", demand: "Low" },
      { type: "Silver", price: "2-3 Forests / 80k-120k Sapphires", demand: "Medium" }
    ]
  },
  {
    name: "Dragon Wings",
    img: "images/item_worth_images/beta_dragon_wings.webp",
    variations: [
      { type: "Purple", price: "20k Sapphires", demand: "Very low" },
      { type: "Pink", price: "20k Sapphires", demand: "Very low" },
      { type: "Red", price: "20k Sapphires", demand: "Very low" },
      { type: "Grey", price: "1 Forest / 40k Sapphires", demand: "Low" },
      { type: "Green", price: "1-1.5 Forests / 40k-60k Sapphires", demand: "Low" },
      { type: "Yellow", price: "1.5 Forests / 60k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Crossbow",
    img: "images/item_worth_images/beta_crossbow.webp",
    variations: [
      { type: "Blue", price: "1.5-2 Forests / 67k-80k Sapphires", demand: "Very low" },
      { type: "Pink & Purple", price: "2 Blacktips / 140k Sapphires", demand: "Very low" },
      { type: "Teal", price: "5 Forests / 200k Sapphires", demand: "Very low" },
      { type: "Gold", price: "5 Forests / 200k Sapphires", demand: "Very low" },
      { type: "Neon Rainbow", price: "1 White bowtie / 8-9 Forests / 320k-360k Sapphires", demand: "Very low" },
      { type: "Pastel Rainbow", price: "8-9 White bowties", demand: "Very low" }
    ]
  },
  {
    name: "Heart Antennae Headband",
    img: "images/item_worth_images/heart_antennae_headband.webp",
    variations: [
      { type: "Light Blue", price: "2 Forests / 70k Sapphires", demand: "Very low" },
      { type: "Navy", price: "2 Forests / 70k Sapphires", demand: "Low" },
      { type: "Pink", price: "2 Forests / 70k Sapphires", demand: "Low" },
      { type: "Red", price: "3 Forests / 105k Sapphires", demand: "Low" },
      { type: "Purple", price: "3 Forests / 105k Sapphires", demand: "Low" },
      { type: "Lime", price: "5-6 Forests / 175k-210k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Feather Earrings",
    img: "images/item_worth_images/feather_earrings.webp",
    variations: [
      { type: "Hot Pink & Blue", price: "1 Blackout / 20k Sapphires", demand: "Very low" },
      { type: "Teal", price: "1-1.5 Forests / 40k-60k Sapphires", demand: "Low" },
      { type: "Navy", price: "2-3 Forests / 80k-120k Sapphires", demand: "Low" },
      { type: "Lavender", price: "3 Forests / 105k Sapphires", demand: "Low" },
      { type: "Lime", price: "1 White bowtie / 360k Sapphires", demand: "Low" },
      { type: "Gold", price: "2-3 White bowties / 720k-1m+ Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Feather Boa",
    img: "images/item_worth_images/feather_boa.webp",
    variations: [
      { type: "Pink", price: "1.5 Forests / 53k Sapphires", demand: "Very low" },
      { type: "Purple", price: "1.5-2 Forests / 53k-70k Sapphires", demand: "Very low" },
      { type: "Light Blue", price: "3 Forests / 105k Sapphires", demand: "Low" },
      { type: "Navy", price: "2 Blacktips / 140k Sapphires", demand: "Low" },
      { type: "Teal", price: "2.5 Blacktips / 158k Sapphires", demand: "Low" },
      { type: "Red", price: "2 Blacktips / 140k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Feather Necklace",
    img: "images/item_worth_images/feather_necklace.webp",
    variations: [
      { type: "Hot Pink & Blue", price: "10-13k Sapphires", demand: "Very low" },
      { type: "Teal", price: "10k Sapphires", demand: "Very low" },
      { type: "Navy", price: "15k Sapphires", demand: "Very low" },
      { type: "Lilac", price: "1 Forest / 35k Sapphires", demand: "Very low" },
      { type: "Lime", price: "2-2.5 Forests / 70k-88k Sapphires", demand: "Very low" },
      { type: "Yellow", price: "3 Forests / 105k Sapphires", demand: "Very low" }
    ]
  },
  {
    name: "Feather Tail",
    img: "images/item_worth_images/feather_tail.webp",
    variations: [
      { type: "Pink", price: "1-1.5 Forests / 35k-53k Sapphires", demand: "Low" },
      { type: "Purple", price: "1.5-2 Forests / 53k-70k Sapphires", demand: "Low" },
      { type: "Teal", price: "2-2.5 Forests / 70k-88k Sapphires", demand: "Low" },
      { type: "Blue", price: "2-2.5 Forests / 70k-88k Sapphires", demand: "Low" },
      { type: "Red", price: "2-3 Forests / 70k-105k Sapphires", demand: "Low" },
      { type: "Navy", price: "1-1.5 Blacktips / 2-2.5 Forests / 60k-88k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Whiteout Spiked Collar",
    img: "images/item_worth_images/whiteout_spiked_collar.webp",
    variations: [
      { type: "Default", price: "1.5 Forests / 40k-45k Sapphires", demand: "Medium" }
    ]
  },
  {
    name: "Rainbow Hat",
    img: "images/item_worth_images/rainbow_hat.webp",
    variations: [
      { type: "Red, Orange & Yellow", price: "1.5 Forests / 53k Sapphires", demand: "Very low" },
      { type: "Peach", price: "1.5-2 Blacktips / 2.5-4 Forests / 88k-140k Sapphires", demand: "Low" },
      { type: "Light Blue & Purple", price: "2 Blacktips / 4 Forests / 140k Sapphires", demand: "Very low" },
      { type: "Navy", price: "2 Blacktips / 4 Forests / 140k Sapphires", demand: "Very low" },
      { type: "Neon Yellow, Green & Blue", price: "3 Blacktips / 6 Forests / 210k Sapphires", demand: "Very low" },
      { type: "Pastel Yellow, Green & Blue", price: "1 White bowtie / 315k Sapphires", demand: "Very low" }
    ]
  },
  {
    name: "3D Glasses",
    img: "images/item_worth_images/3d_glasses.webp",
    variations: [
      { type: "Tan", price: "1.5 Forests / 53k Sapphires", demand: "Very low" },
      { type: "Black", price: "1 Blacktip / 60k Sapphires", demand: "Very low" },
      { type: "White & Pink", price: "2.5-3 Blacktips / 88k-210k Sapphires", demand: "Very low" },
      { type: "Yellow", price: "1-1.5 White bowties / 315k-472k Sapphires", demand: "Low" },
      { type: "Lime", price: "3 White bowties / 945k Sapphires", demand: "Low" },
      { type: "Purple", price: "3 White bowties / 945k Sapphires", demand: "Low" }
    ]
  },
  {
    name: "Archer Hats",
    img: "images/item_worth_images/archer_hats.webp",
    variations: [
      { type: "Green Red Feather", price: "15k", demand: "Very low" },
      { type: "Green White Feather", price: "1 Blackout / 20k", demand: "Very low" },
      { type: "Dark Purple Pink Feather", price: "1-1.5 Forests / 35k-45k", demand: "Low" },
      { type: "Mustard Yellow Red Feather", price: "1.5 Forests / 45k", demand: "Low" },
      { type: "Yellow Red Feather", price: "2 Forests / 70k", demand: "Low" },
      { type: "Purple Lime Feather", price: "3 Forests / 105k", demand: "Low" },
      { type: "Navy", price: "2-3 Forests / 70k-105k", demand: "Low" },
      { type: "Turquoise", price: "1.5-2 Forests / 45k-70k", demand: "Low" },
      { type: "Lilac", price: "3 Forests / 105k", demand: "Low" },
      { type: "Grey", price: "4 Forests / 140k", demand: "Low" },
      { type: "Hot Pink", price: "4 Forests / 140k", demand: "Low" },
      { type: "Red", price: "5 Forests / 175k", demand: "Low" }
    ]
  },
  {
    name: "Snail Family Hat",
    img: "images/item_worth_images/snail_family_hat.webp",
    variations: [
      { type: "Red", price: "1 Blacktip / 2 Forests / 70k Sapphires", demand: "Very low" },
      { type: "Lilac", price: "2 Blacktips / 4 Forests / 140k Sapphires", demand: "Very low" },
      { type: "Pink", price: "3 Blacktips / 6 Forests / 210k Sapphires", demand: "Very low" },
      { type: "Navy", price: "3 Blacktips / 6 Forests / 210k Sapphires", demand: "Very low" },
      { type: "Lime", price: "1-2 White bowties / 315k-630k Sapphires", demand: "Very low" },
      { type: "Yellow", price: "2-3 White bowties / 630k-945k Sapphires", demand: "Very low" }
    ]
  },
  {
    name: "Brain Helmet",
    img: "images/item_worth_images/brain_helmet.webp",
    variations: [
      { type: "Pink", price: "1 Blacktip / 2 Forests / 70k Sapphires", demand: "Very low" },
      { type: "Grey", price: "2 Blacktips / 4 Forests / 140k Sapphires", demand: "Very low" },
      { type: "Periwinkle", price: "3 Blacktips / 6 Forests / 210k Sapphires", demand: "Very low" },
      { type: "Purple", price: "2 White bowties / 630k Sapphires", demand: "Very low" },
      { type: "Lime", price: "2 White bowties / 630k Sapphires", demand: "Very low" },
      { type: "Yellow", price: "4 White bowties", demand: "Very low" }
    ]
  },
  {
    name: "Airplane Wings",
    img: "images/item_worth_images/airplane_wings.webp",
    variations: [
      { type: "Blue", price: "3 White bowties", demand: "Low" },
      { type: "Purple", price: "2 Blue Airplane Wings", demand: "Low" },
      { type: "Pink & Purple", price: "2+ Blue Airplane Wings", demand: "Low" },
      { type: "Yellow", price: "3 Blue Airplane Wings", demand: "Low" },
      { type: "Green", price: "4 Blue Airplane Wings", demand: "Low" },
      { type: "Teal & Green", price: "8 Blue Airplane Wings", demand: "Low" }
    ]
  },
  {
    name: "Dino Horn",
    img: "images/item_worth_images/dino_horn.webp",
    variations: [
      { type: "Red", price: "3+ Blue Airplane Wings", demand: "High" },
      { type: "Pale Green", price: "3-4 Blue Airplane Wings", demand: "High" },
      { type: "Green", price: "4 Blue Airplane Wings", demand: "High" },
      { type: "Yellow/Gold", price: "4-5 Blue Airplane Wings", demand: "High" },
      { type: "Periwinkle", price: "5 Blue Airplane Wings", demand: "High" },
      { type: "Purple", price: "6 Blue Airplane Wings", demand: "High" }
    ]
  },
  {
    name: "Army Helmet",
    img: "images/item_worth_images/army_helmet.webp",
    variations: [
      { type: "Green", price: "1 White bowtie & add", demand: "Low" },
      { type: "Lime", price: "6-7 Blue Airplane Wings", demand: "Low" },
      { type: "Yellow", price: "10+ Blue Airplane Wings", demand: "Low" },
      { type: "Brown", price: "8-9 Blue Airplane Wings", demand: "Low" }
    ]
  },
  {
    name: "Aviator Hat",
    img: "images/item_worth_images/aviator_hat.webp",
    variations: [
      { type: "Brown", price: "1.5-2 White bowties", demand: "Low" },
      { type: "Purple", price: "2-3 White bowties", demand: "Low" },
      { type: "Black", price: "1 Blue Airplane Wing", demand: "Low" },
      { type: "Blue", price: "2 Blue Airplane Wings", demand: "Low" },
      { type: "Red", price: "4-5 Blue Airplane Wings", demand: "Low" },
      { type: "Green", price: "5+ Blue Airplane Wings", demand: "Low" }
    ]
  },
  {
    name: "Double Tail",
    img: "images/item_worth_images/double_tail.webp",
    variations: [
      { type: "Default", price: "7k Sapphires", demand: "Very high" }
    ]
  },
  {
    name: "Moustache & Chops",
    img: "images/item_worth_images/moustache_chops.webp",
    variations: [
      { type: "Purple", price: "1-1.5 Blacktips / 2-2.5 Forests / 60k-88k Sapphires", demand: "Very low" },
      { type: "Lime", price: "1.5 Blacktips / 2-2.5 Forests / 88k Sapphires", demand: "Low" },
      { type: "Teal", price: "2 Blacktips / 4 Forests / 140k Sapphires", demand: "Low" },
      { type: "Periwinkle", price: "2 Blacktips / 4 Forests / 120k Sapphires", demand: "Low" },
      { type: "Yellow", price: "3 Blacktips / 6 Forests / 210k Sapphires", demand: "Low" }
    ]
  }
];

const promoItems = [
  {
    name: "Miscellaneous",
    img: "images/item_worth_images/miscellaneous.webp",
    variations: [
      { type: "Crossbow", price: "2.5k-3k sapphires", demand: "Very low" },
      { type: "Golden Drag", price: "7k-8k sapphires", demand: "Very Low" },
      { type: "Lit Scarf", price: "6k-8k sapphires", demand: "Very low" },
      { type: "Phantom Beanie", price: "10k-15k sapphires", demand: "Low" },
      { type: "Shark Tail", price: "1 forest / 35k-40k sapphires", demand: "Low" },
      { type: "Alpha Armor", price: "13k-15k sapphires", demand: "Very low" }
    ]
  },
  {
    name: "Mystical Spiked Collar",
    img: "images/item_worth_images/mystical_spiked_collar.webp",
    variations: [
      { type: "Salmon", price: "15-20k sapphires", demand: "Very Low" },
      { type: "Pink", price: "1 blackout / 20k sapphires", demand: "Low" },
      { type: "Purple", price: "1 blackout & add / 20k+ sapphires", demand: "Medium" },
      { type: "Green", price: "1 forest / 40k sapphires", demand: "Low" },
      { type: "Teal", price: "1 blacktip / 1.5 forests / 60k sapphires", demand: "Low" },
      { type: "White", price: "2 blacktips / 4 forests / 140k sapphires", demand: "Low" }
    ]
  },
  {
    name: "Crystal Pegasus Wings",
    img: "images/item_worth_images/crystal_pegasus_wings.webp",
    variations: [
      { type: "Pink", price: "1.5 forests / 60k sapphires", demand: "Low" },
      { type: "Blue", price: "1 blacktip / 2 forests / 80k sapphires / sapphires", demand: "Low" },
      { type: "Black", price: "2 blacktips / 3-4 forests / 120k-160k sapphires", demand: "Decent" },
      { type: "White", price: "7 forests / 280k sapphires", demand: "Decent" }
    ]
  },
  {
    name: "Crystal Pegasus Tail",
    img: "images/item_worth_images/crystal_pegasus_tail.webp",
    variations: [
      { type: "Pink", price: "5k-6k sapphires", demand: "Very Low" },
      { type: "Blue", price: "5k-6k sapphires", demand: "Very Low" },
      { type: "Black", price: "8k-9k sapphires", demand: "Low" },
      { type: "White", price: "10k sapphires", demand: "Low" }
    ]
  },
  {
    name: "Crystal Pegasus Horn",
    img: "images/item_worth_images/crystal_pegasus_horn.webp",
    variations: [
      { type: "Pink", price: "5k sapphires", demand: "Low" },
      { type: "Blue", price: "5k-6k sapphires", demand: "Low" },
      { type: "Black", price: "10k sapphires", demand: "Low" },
      { type: "White", price: "25k sapphires", demand: "Low" }
    ]
  },
  {
    name: "Crystal Pegasus Gauntlets",
    img: "images/item_worth_images/crystal_pegasus_gauntlets.webp",
    variations: [
      { type: "Pink", price: "5k sapphires", demand: "Very low" },
      { type: "Blue", price: "5k-5.5k sapphires", demand: "Very low" },
      { type: "Black", price: "6k sapphires", demand: "Low" },
      { type: "White", price: "6k sapphires", demand: "Low" }
    ]
  }
];


 const alphagrid = document.getElementById("alpha-grid");

alphaItems.forEach(group => {
  const box = document.createElement("div");
  box.classList.add("box");

  let variationsHTML = "<ul>";
  group.variations.forEach(v => {
    variationsHTML += `
      <li>
        <strong>${v.type}</strong>: ${v.price} 
        <span class="demand">(${v.demand})</span>
      </li>
    `;
  });
  variationsHTML += "</ul>";

  box.innerHTML = `
    <h3>${group.name}</h3>
    <img src="${group.img}" alt="${group.name}">
    ${variationsHTML}
  `;

  alphagrid.appendChild(box);
});

const leilaniGrid = document.getElementById("leilani-grid");

leilaniItems.forEach(group => {
  const box = document.createElement("div");
  box.classList.add("box");

  let variationsHTML = "<ul>";
  group.variations.forEach(v => {
    variationsHTML += `
      <li>
        <strong>${v.type}</strong>: ${v.price} 
        <span class="demand">(${v.demand})</span>
      </li>
    `;
  });
  variationsHTML += "</ul>";

  box.innerHTML = `
    <h3>${group.name}</h3>
    <img src="${group.img}" alt="${group.name}">
    ${variationsHTML}
  `;

  leilaniGrid.appendChild(box);
});

const rarebetasGrid = document.getElementById("rarebetas-grid");

rarebetasItems.forEach(group => {
  const box = document.createElement("div");
  box.classList.add("box");

  let variationsHTML = "<ul>";
  group.variations.forEach(v => {
    variationsHTML += `
      <li>
        <strong>${v.type}</strong>: ${v.price} 
        <span class="demand">(${v.demand})</span>
      </li>
    `;
  });
  variationsHTML += "</ul>";

  box.innerHTML = `
    <h3>${group.name}</h3>
    <img src="${group.img}" alt="${group.name}">
    ${variationsHTML}
  `;

  rarebetasGrid.appendChild(box);
});

const promoGrid = document.getElementById("promo-grid");

promoItems.forEach(group => {
  const box = document.createElement("div");
  box.classList.add("box");

  let variationsHTML = "<ul>";
  group.variations.forEach(v => {
    variationsHTML += `
      <li>
        <strong>${v.type}</strong>: ${v.price} 
        <span class="demand">(${v.demand})</span>
      </li>
    `;
  });
  variationsHTML += "</ul>";

  box.innerHTML = `
    <h3>${group.name}</h3>
    <img src="${group.img}" alt="${group.name}">
    ${variationsHTML}
  `;

  promoGrid.appendChild(box);
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".box img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
