export const wateringLevels = ["peu", "moyennement", "beaucoup"];

export const plantList = [
  {
    name: "monstera",
    category: "classique",
    id: "uniqueId1",
    water: wateringLevels[Math.floor(Math.random() * wateringLevels.length)],
    sun: Math.floor(Math.random() * 11),
    price: 10,
    plantingDate: new Date(
      2022,
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 31) + 1
    ),
  },
  {
    name: "ficus lyrata",
    category: "classique",
    id: "uniqueId2",
    water: wateringLevels[Math.floor(Math.random() * wateringLevels.length)],
    sun: Math.floor(Math.random() * 11),
    price: 20,
    plantingDate: new Date(
      2022,
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 31) + 1
    ),
  },
  {
    name: "pothos argenté",
    category: "classique",
    id: "uniqueId3",
    water: wateringLevels[Math.floor(Math.random() * wateringLevels.length)],
    sun: Math.floor(Math.random() * 11),
    price: 30,
    plantingDate: new Date(
      2022,
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 31) + 1
    ),
  },
  {
    name: "yucca",
    category: "exotique",
    id: "uniqueId4",
    water: wateringLevels[Math.floor(Math.random() * wateringLevels.length)],
    sun: Math.floor(Math.random() * 11),
    price: 40,
    plantingDate: new Date(
      2022,
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 31) + 1
    ),
  },
  {
    name: "palmier",
    category: "exotique",
    id: "uniqueId5",
    water: wateringLevels[Math.floor(Math.random() * wateringLevels.length)],
    sun: Math.floor(Math.random() * 11),
    price: 50,
    plantingDate: new Date(
      2022,
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 31) + 1
    ),
  },
];
