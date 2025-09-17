//The specifics are for Jackalope (no matter the file name)

//Thought some comment would be good in this part...
//data object for the colors
const colorGroups = {
    "": [],
    "Amethyst Wildflower": ["#8B73AB", "#BCABD2", "#9F73AB", "#CAABD2", "#704C79", "#A671AC", "#BC8DBF", "#794C6D", "#AB7399", "#A08395", "#977B87", "#906073"],
    "Dusty Taupe": ["5", "6", "7", "8"],
    "Florid Vermillion": ["9", "10", "11", "12"],
    "Lush Berry": ["13", "14", "15", "16"],
    "Opulent Royal": ["17", "18", "19", "20"],
    "Russet Mahogany": ["#500909", "#7F0707", "#5E0404", "#681818", "#6E342B", "#441E05", "#5D3B48", "#77394A", "#5D1023", "#6F1A2E", "#46101C"],
    "Smoky Dust": ["25", "26", "27", "28"],
    "Vibrant Neon": ["29", "30", "31", "32"],
    "Cerulean Sky": ["33", "34", "35", "36"],
    "Earthy Umber": ["37", "38", "39", "40"],
    "Forested Juniper": ["41", "42", "43", "44"],
    "Misty Starlight": ["45", "46", "47", "48"],
    "Pale Pastel": ["49", "50", "51", "52"],
    "Seafoam Lagoon": ["53", "54", "55", "56"],
    "Sunny Amber": ["57", "58", "59", "60"],
    "Warm Tangerine": ["61", "62", "63", "64"],
    "Dreamy Lilac": ["65", "66", "67", "68"],
    "Flaxen Ochre": ["69", "70", "71", "72"],
    "Hazel Olive": ["73", "74", "75", "76"],
    "Oceanic Sapphire": ["77", "78", "79", "80"],
    "Rosy Sunset": ["81", "82", "83", "84"],
    "Shady Dark": ["85", "86", "87", "88"],
    "Verdant Lush": ["89", "90", "91", "92"],
};
//fills the color options and adds the Choose option everyone else has
function populateColorGroups() {
    ["color-group-1", "color-group-2", "color-group-3", "color-group-eye"].forEach(id => {
      const select = document.getElementById(id);
      select.innerHTML = `<option value="">-- Choose --</option>`;
      Object.keys(colorGroups).forEach(group => {
        if (group !== "") {
          select.innerHTML += `<option value="${group}">${group}</option>`;
        }
      });
    });
}
//links a color group dropdown to its specific color dropdown
function handleColorGroupChange(groupSelectId, colorSelectId) {
    const groupSelect = document.getElementById(groupSelectId);
    const colorSelect = document.getElementById(colorSelectId);

    groupSelect.addEventListener("change", () => {
      const selectedGroup = groupSelect.value;
      if (selectedGroup && colorGroups[selectedGroup]) {
        colorSelect.innerHTML = colorGroups[selectedGroup]
          .map(color => `<option value="${color.toLowerCase()}">${color}</option>`)
          .join("");
        colorSelect.classList.remove("hidden");
      } else {
        colorSelect.classList.add("hidden");
      }
    });
}
//random part if nothing was choosen
function getRandomOption(selectElement) {
    const options = Array.from(selectElement.options).filter(o => o.value);
    if (options.length === 0) return "";
    const randomOption = options[Math.floor(Math.random() * options.length)];
    return randomOption.value;
}
//selects the things choosen and randomly generates the rest. Gives back in a hideouse form right now...
function generatePet() {
    const form = document.getElementById("pet-form");
    const selects = form.querySelectorAll("select");
    const result = {};

    selects.forEach(select => {
      let value = select.value;
      if (!value) {
        value = getRandomOption(select);
        select.value = value; 
      }
      result[select.name] = value;
    });

    const resultDiv = document.getElementById("pet-result");
    resultDiv.innerHTML = "<h3>Your Generated Pet - with these informationen we just need to name the images the right way to create the finished picture, the random part was just for fun but I thought with this we dont have the problem of empty answers:</h3><pre>" + JSON.stringify(result, null, 2) + "</pre>";
}
//just to pace the things coded before
  populateColorGroups();
  handleColorGroupChange("color-group-1", "color-1");
  handleColorGroupChange("color-group-2", "color-2");
  handleColorGroupChange("color-group-3", "color-3");
  handleColorGroupChange("color-group-eye", "eye-color");

  document.getElementById("generate-btn").addEventListener("click", generatePet);