
export const wateringLevels = ["peu", "moyennement", "beaucoup"];

export const plantList = [
    {
        name: "monstera",
        category: "classique",
        id: "uniqueId1",
        water: wateringLevels[Math.floor(Math.random() * wateringLevels.length)],
        sun: Math.floor(Math.random() * 11)
    },
    {
        name: "ficus lyrata",
        category: "classique",
        id: "uniqueId2",
        water: wateringLevels[Math.floor(Math.random() * wateringLevels.length)],
        sun: Math.floor(Math.random() * 11)
    },
    {
        name: "pothos argenté",
        category: "classique",
        id: "uniqueId3",
        water: wateringLevels[Math.floor(Math.random() * wateringLevels.length)],
        sun: Math.floor(Math.random() * 11)
    },
    {
        name: "yucca",
        category: "exotique",
        id: "uniqueId4",
        water: wateringLevels[Math.floor(Math.random() * wateringLevels.length)],
        sun: Math.floor(Math.random() * 11)
    },
    {
        name: "palmier",
        category: "exotique",
        id: "uniqueId5",
        water: wateringLevels[Math.floor(Math.random() * wateringLevels.length)],
        sun: Math.floor(Math.random() * 11)
    }
];