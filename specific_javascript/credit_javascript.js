// const artists = [
//     {
//         name: "",
//         ajUser: "",
//         socials: {
//             twitter: "",
//             instagram: "",
//         },
//         images: [
//             "",
//             "",
//             ""
//         ]
//     },
// ];

const artists = [
  {
    name: "Cheeky",
    ajUser: "Cheeky346",
    socials: {
      toyhouse: "https://toyhou.se/cheeky346"
    },
    images: [
      "images/credit_images/cheeky346_1.jpeg",
      "images/credit_images/cheeky346_2.jpeg",
      "images/credit_images/cheeky346_3.jpeg"
    ]
  },
  {
    name: "Rodrick Raccoon",
    ajUser: "AugustNova",
    socials: {
      reddit: "https://www.reddit.com/user/Upper-Blackberry144"
    },
    images: [
      "images/credit_images/augustnova_1.jpeg",
      "images/credit_images/augustnova_2.jpeg",
      "images/credit_images/augustnova_3.jpeg"
    ]
  },
  {
    name: "Hazel",
    ajUser: "hazelteaa",
    socials: {
      instagram: "https://www.instagram.com/sweet_staars/"
    },
    images: [
      "images/credit_images/hazelteaa_1.jpeg",
      "images/credit_images/hazelteaa_2.jpeg",
      "images/credit_images/hazelteaa_3.jpeg"
    ]
  },
  {
    name: "Colacoveredcat",
    ajUser: "Colacoveredcat",
    socials: {
      twitter: "https://twitter.com/lulutopia",
      instagram: "https://instagram.com/lulutopia_art",
      reddit: "https://www.reddit.com/user/Nervous_Scallion_980"
    },
    images: [
      "images/credit_images/colacoveredcatart_1.jpeg",
      "images/credit_images/colacoveredcatart_2.jpeg",
      "images/credit_images/colacoveredcatart_3.jpeg"
    ]
  },
  {
    name: "Opal",
    ajUser: "Opal4autumnfox",
    socials: {
      reddit: "https://www.reddit.com/user/Its_OpalAJ"
    },
    images: [
      "images/credit_images/opal4autumnfox_1.jpeg",
      "images/credit_images/opal4autumnfox_2.jpeg",
      "images/credit_images/opal4autumnfox_3.jpeg"
    ]
  },
  {
    name: "Bad",
    ajUser: "Stillmango",
    socials: {
      twitter: "https://twitter.com/0kappii"
    },
    images: [
      "images/credit_images/stillmango_1.jpeg",
      "images/credit_images/stillmango_2.jpeg",
      "images/credit_images/stillmango_3.jpeg"
    ]
  }
];


window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.credit-box');

  artists.forEach(artist => {
    const box = document.createElement('div');
    box.classList.add('artist-card');

    // Determine how many images to show based on screen size
    let maxImages = 3; // default for large screens
    if (window.innerWidth <= 600) {
      maxImages = 1; // mobile
    } else if (window.innerWidth <= 1024) {
      maxImages = 2; // tablet / small laptop
    }

    
    const socials = [];
    if (artist.socials.twitter)
      socials.push(`<a href="${artist.socials.twitter}" class="fa fa-twitter target="_blank"></a>`);
    if (artist.socials.instagram)
      socials.push(`<a href="${artist.socials.instagram}" class="fa fa-instagram target="_blank"></a>`);

    
    const selectedImages = artist.images.slice(0, maxImages);

    box.innerHTML = `
      <h2>${artist.name}</h2>
      <p><strong>AJ Username:</strong> ${artist.ajUser}</p>
      <div class="artist-images">
        ${selectedImages
          .filter(img => img)
          .map(img => `<img src="${img}" alt="${artist.name}'s art">`)
          .join("")}
      </div>
      <div class="social-links">${socials.join(" | ")}</div>
    `;

    container.appendChild(box);
  });
});
