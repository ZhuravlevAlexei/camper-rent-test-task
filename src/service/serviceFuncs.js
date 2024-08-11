export const capitalizeFirst = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const ratingText = (camper) => {
  if (camper.reviews.length > 0) {
    return `${camper.rating}(${camper.reviews.length} reviews)`;
  } else {
    return `${camper.rating}`;
  }
};

export const correctIconStroke = (iconId) => {
  const someIcons = ["toilet-paper-line", "gas", "ac"];
  if (someIcons.includes(iconId)) {
    return false;
  }
  return true;
};

export const prepareFilters = (campers) => {
  const location = [];
  const equipment = [];
  const vehicleType = [];

  if (!campers) return [];
  campers.map((camper) => {
    if (!location.includes(camper.location)) {
      location.push(camper.location);
    }
    if (!vehicleType.find((vt) => vt.key === camper.form)) {
      let newName = camper.form;
      let iconId = "";
      if (camper.form === "alcove") {
        newName = "Alcove";
        iconId = "camper-alcove";
      } else if (camper.form === "fullyIntegrated") {
        newName = "Fully integrated";
        iconId = "camper-fully-integrated";
      } else if (camper.form === "panelTruck") {
        newName = "Panel Truck";
        iconId = "camper-van";
      } else {
        newName = camper.form;
        iconId = "camper-van";
      }

      vehicleType.push({
        key: camper.form,
        name: newName,
        iconId: iconId,
        cheched: false,
      });
    }
  });
  equipment.push({
    key: "airConditioner",
    // name: "Air conditioner",
    // iconId: "hotel-air-conditioner",
    name: "AC",
    iconId: "ac",
    cheched: false,
  });
  equipment.push({
    key: "kitchen",
    name: "Kitchen",
    iconId: "kitchen",
    cheched: false,
  });
  equipment.push({
    key: "bathroom",
    name: "Bathroom",
    iconId: "shower",
    cheched: false,
  });
  equipment.push({
    key: "shower",
    name: "Shower",
    iconId: "shower",
    cheched: false,
  });
  equipment.push({
    key: "beds",
    name: "Beds",
    iconId: "bed",
    cheched: false,
  });
  equipment.push({
    key: "TV",
    name: "TV",
    iconId: "tv",
    cheched: false,
  });
  equipment.push({
    key: "CD",
    name: "CD",
    iconId: "park-outline-cd",
    cheched: false,
  });
  equipment.push({
    key: "radio",
    name: "Radio",
    iconId: "radio-linear",
    cheched: false,
  });
  equipment.push({
    key: "toilet",
    name: "Toilet",
    iconId: "toilet-paper-line",
    cheched: false,
  });
  equipment.push({
    key: "freezer",
    name: "Freezer",
    iconId: "freezer",
    cheched: false,
  });
  equipment.push({
    key: "hob",
    name: "Hob",
    iconId: "park-outline-hand-painted-plate",
    cheched: false,
  });
  equipment.push({
    key: "microwave",
    name: "Microwave",
    iconId: "microwave",
    cheched: false,
  });
  equipment.push({
    key: "gas",
    name: "Gas",
    iconId: "gas",
    cheched: false,
  });
  equipment.push({
    key: "water",
    name: "Water",
    iconId: "water-outline",
    cheched: false,
  });

  return { location, equipment, vehicleType };
};
