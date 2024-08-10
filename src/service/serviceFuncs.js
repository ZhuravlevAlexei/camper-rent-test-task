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
      }
      vehicleType.push({ key: camper.form, name: newName, iconId: iconId });
    }
  });
  equipment.push({
    key: "airConditioner",
    name: "Air conditioner",
    iconId: "hotel-air-conditioner",
  });
  equipment.push({
    key: "kitchen",
    name: "Kitchen",
    iconId: "kitchen",
  });
  equipment.push({
    key: "bathroom",
    name: "Bathroom",
    iconId: "shower",
  });
  equipment.push({
    key: "shower",
    name: "Shower",
    iconId: "shower",
  });
  equipment.push({
    key: "beds",
    name: "Beds",
    iconId: "bed",
  });
  equipment.push({
    key: "TV",
    name: "TV",
    iconId: "tv",
  });
  equipment.push({
    key: "CD",
    name: "CD",
    iconId: "park-outline-cd",
  });
  equipment.push({
    key: "radio",
    name: "Radio",
    iconId: "radio-linear",
  });
  equipment.push({
    key: "toilet",
    name: "Toilet",
    iconId: "toilet-paper-line",
  });
  equipment.push({
    key: "freezer",
    name: "Freezer",
    iconId: "freezer",
  });
  equipment.push({
    key: "hob",
    name: "Hob",
    iconId: "hob",
  });
  equipment.push({
    key: "microwave",
    name: "Microwave",
    iconId: "microwave",
  });
  equipment.push({
    key: "gas",
    name: "Gas",
    iconId: "gas",
  });
  equipment.push({
    key: "water",
    name: "Water",
    iconId: "water-outline",
  });

  return { location, equipment, vehicleType };
};
