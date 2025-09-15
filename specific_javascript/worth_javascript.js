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
 
 const grid = document.getElementById("alpha-grid");

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

  grid.appendChild(box);
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
