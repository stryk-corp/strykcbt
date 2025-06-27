const questions = [
    {
        "id": 1,
        "question": "What makes up the solar system?",
        "options": [
            "The sun and its planets",
            "Stars and galaxies",
            "Comets and asteroids",
            "Milky Way components"
        ],
        "answer": "The sun and its planets"
    },
    {
        "id": 2,
        "question": "How old is the sun?",
        "options": [
            "1 billion years",
            "4.6 billion years",
            "10 million years",
            "500 million years"
        ],
        "answer": "4.6 billion years"
    },
    {
        "id": 3,
        "question": "Where is solar energy generated?",
        "options": [
            "Photosphere",
            "Chromosphere",
            "Core",
            "Convection zone"
        ],
        "answer": "Core"
    },
    {
        "id": 4,
        "question": "What process converts hydrogen to helium in the sun?",
        "options": [
            "Photosynthesis",
            "Nuclear fusion",
            "Radioactive decay",
            "Chemical combustion"
        ],
        "answer": "Nuclear fusion"
    },
    {
        "id": 5,
        "question": "Which planets have retrograde rotation?",
        "options": [
            "Earth and Mars",
            "Venus and Uranus",
            "Jupiter and Saturn",
            "Mercury and Neptune"
        ],
        "answer": "Venus and Uranus"
    },
    {
        "id": 6,
        "question": "What divides planets into terrestrial and jovian groups?",
        "options": [
            "Asteroid belt",
            "Kuiper belt",
            "Oort cloud",
            "Solar wind boundary"
        ],
        "answer": "Asteroid belt"
    },
    {
        "id": 7,
        "question": "Which is NOT a terrestrial planet?",
        "options": [
            "Mercury",
            "Venus",
            "Jupiter",
            "Mars"
        ],
        "answer": "Jupiter"
    },
    {
        "id": 8,
        "question": "What is Pluto classified as since 2007?",
        "options": [
            "Planet",
            "Moon",
            "Dwarf planet",
            "Asteroid"
        ],
        "answer": "Dwarf planet"
    },
    {
        "id": 9,
        "question": "What is the study of interactions between organisms and their environment?",
        "options": [
            "Biology",
            "Ecology",
            "Genetics",
            "Physiology"
        ],
        "answer": "Ecology"
    },
    {
        "id": 10,
        "question": "Which is an abiotic factor?",
        "options": [
            "Plants",
            "Temperature",
            "Animals",
            "Bacteria"
        ],
        "answer": "Temperature"
    },
    {
        "id": 11,
        "question": "What adaptation helps organisms blend with surroundings?",
        "options": [
            "Mimicry",
            "Camouflage",
            "Migration",
            "Hibernation"
        ],
        "answer": "Camouflage"
    },
    {
        "id": 12,
        "question": "Which organism exhibits bioluminescence?",
        "options": [
            "Earthworm",
            "Firefly",
            "Spider",
            "Snail"
        ],
        "answer": "Firefly"
    },
    {
        "id": 13,
        "question": "What is the primary energy source for ecosystems?",
        "options": [
            "Geothermal vents",
            "Chemical reactions",
            "Sun",
            "Organic matter"
        ],
        "answer": "Sun"
    },
    {
        "id": 14,
        "question": "Which plant lives in dry environments?",
        "options": [
            "Hydrophyte",
            "Xerophyte",
            "Halophyte",
            "Epiphyte"
        ],
        "answer": "Xerophyte"
    },
    {
        "id": 15,
        "question": "What does ATP stand for?",
        "options": [
            "Adenosine Triphosphate",
            "Amino Terminal Protein",
            "Activated Transport Particle",
            "Aerobic Transfer Process"
        ],
        "answer": "Adenosine Triphosphate"
    },
    {
        "id": 16,
        "question": "Who proposed the cell theory?",
        "options": [
            "Darwin and Mendel",
            "Hooke and Leeuwenhoek",
            "Schleiden and Schwann",
            "Watson and Crick"
        ],
        "answer": "Schleiden and Schwann"
    },
    {
        "id": 17,
        "question": "Where is genetic material stored in eukaryotic cells?",
        "options": [
            "Mitochondria",
            "Nucleus",
            "Ribosomes",
            "Golgi apparatus"
        ],
        "answer": "Nucleus"
    },
    {
        "id": 18,
        "question": "What carries hereditary information?",
        "options": [
            "RNA",
            "Chromosomes",
            "Proteins",
            "Lipids"
        ],
        "answer": "Chromosomes"
    },
    {
        "id": 19,
        "question": "Which is a sex-linked disorder?",
        "options": [
            "Diabetes",
            "Hemophilia",
            "Asthma",
            "Arthritis"
        ],
        "answer": "Hemophilia"
    },
    {
        "id": 20,
        "question": "What is meteorology?",
        "options": [
            "Study of meteors",
            "Study of oceans",
            "Study of atmosphere",
            "Study of rocks"
        ],
        "answer": "Study of atmosphere"
    },
    {
        "id": 21,
        "question": "Which instrument measures atmospheric pressure?",
        "options": [
            "Hygrometer",
            "Thermometer",
            "Barometer",
            "Anemometer"
        ],
        "answer": "Barometer"
    },
    {
        "id": 22,
        "question": "What does NWP stand for in weather forecasting?",
        "options": [
            "National Weather Program",
            "Numerical Weather Prediction",
            "Northern Wind Pattern",
            "Neutral Water Pressure"
        ],
        "answer": "Numerical Weather Prediction"
    },
    {
        "id": 23,
        "question": "How many states does matter exist in?",
        "options": [
            "Two",
            "Three",
            "Four",
            "Five"
        ],
        "answer": "Three"
    },
    {
        "id": 24,
        "question": "What theory states matter particles are in constant motion?",
        "options": [
            "Quantum theory",
            "Relativity theory",
            "Kinetic theory",
            "Atomic theory"
        ],
        "answer": "Kinetic theory"
    },
    {
        "id": 25,
        "question": "What process changes solid to liquid?",
        "options": [
            "Sublimation",
            "Evaporation",
            "Melting",
            "Condensation"
        ],
        "answer": "Melting"
    },
    {
        "id": 26,
        "question": "Which particle has no charge?",
        "options": [
            "Proton",
            "Electron",
            "Neutron",
            "Positron"
        ],
        "answer": "Neutron"
    },
    {
        "id": 27,
        "question": "What is the ultimate energy source for biological systems?",
        "options": [
            "ATP",
            "Glucose",
            "Sun",
            "Chemical bonds"
        ],
        "answer": "Sun"
    },
    {
        "id": 28,
        "question": "Which process stores energy in glucose?",
        "options": [
            "Respiration",
            "Photosynthesis",
            "Fermentation",
            "Digestion"
        ],
        "answer": "Photosynthesis"
    },
    {
        "id": 29,
        "question": "What is the energy currency of cells?",
        "options": [
            "DNA",
            "RNA",
            "ATP",
            "NAD"
        ],
        "answer": "ATP"
    },
    {
        "id": 30,
        "question": "Which law states energy cannot be created or destroyed?",
        "options": [
            "First law of thermodynamics",
            "Second law of thermodynamics",
            "Law of conservation of mass",
            "Newton's first law"
        ],
        "answer": "First law of thermodynamics"
    },
    {
        "id": 31,
        "question": "What is the family of the sun called?",
        "options": [
            "Galaxy",
            "Solar system",
            "Constellation",
            "Nebula"
        ],
        "answer": "Solar system"
    },
    {
        "id": 32,
        "question": "How many known satellites do planets have?",
        "options": [
            "24",
            "44",
            "64",
            "84"
        ],
        "answer": "44"
    },
    {
        "id": 33,
        "question": "What does DSSS stand for?",
        "options": [
            "Deep Space Satellite System",
            "Disc Shaped Spiral System",
            "Digital Star Survey System",
            "Dynamic Solar System Scale"
        ],
        "answer": "Disc Shaped Spiral System"
    },
    {
        "id": 34,
        "question": "What transports energy from the sun's core to the surface?",
        "options": [
            "Conduction",
            "Radiation",
            "Convection",
            "Advection"
        ],
        "answer": "Radiation"
    },
    {
        "id": 35,
        "question": "Where can both chromosphere and corona be seen?",
        "options": [
            "Lunar eclipse",
            "Total solar eclipse",
            "Aurora borealis",
            "Meteor shower"
        ],
        "answer": "Total solar eclipse"
    },
    {
        "id": 36,
        "question": "Which planet is called 'Earth's sister'?",
        "options": [
            "Mars",
            "Venus",
            "Mercury",
            "Jupiter"
        ],
        "answer": "Venus"
    },
    {
        "id": 37,
        "question": "What covers Mars' surface?",
        "options": [
            "Water ice",
            "Methane ice",
            "Carbon dioxide ice",
            "Ammonia ice"
        ],
        "answer": "Carbon dioxide ice"
    },
    {
        "id": 38,
        "question": "Which is the largest planet?",
        "options": [
            "Earth",
            "Saturn",
            "Jupiter",
            "Neptune"
        ],
        "answer": "Jupiter"
    },
    {
        "id": 39,
        "question": "What are Jupiter's large satellites called?",
        "options": [
            "Titan moons",
            "Galilean moons",
            "Olympus moons",
            "Phobos group"
        ],
        "answer": "Galilean moons"
    },
    {
        "id": 40,
        "question": "Which is NOT an interplanetary material?",
        "options": [
            "Asteroids",
            "Comets",
            "Nebulae",
            "Meteorites"
        ],
        "answer": "Nebulae"
    },
    {
        "id": 41,
        "question": "What is a segment of DNA called?",
        "options": [
            "Chromosome",
            "Allele",
            "Gene",
            "Protein"
        ],
        "answer": "Gene"
    },
    {
        "id": 42,
        "question": "What does DNA stand for?",
        "options": [
            "Deoxyribonucleic acid",
            "Dinucleotide acid",
            "Deoxyribose nucleotide",
            "Double nucleic acid"
        ],
        "answer": "Deoxyribonucleic acid"
    },
    {
        "id": 43,
        "question": "How many chromosomes do humans have?",
        "options": [
            "23",
            "46",
            "48",
            "52"
        ],
        "answer": "46"
    },
    {
        "id": 44,
        "question": "What is Mendel's first law?",
        "options": [
            "Law of dominance",
            "Law of segregation",
            "Law of independent assortment",
            "Law of inheritance"
        ],
        "answer": "Law of segregation"
    },
    {
        "id": 45,
        "question": "What determines sex in humans?",
        "options": [
            "Autosomes",
            "X chromosome",
            "Y chromosome",
            "Both X and Y chromosomes"
        ],
        "answer": "Y chromosome"
    },
    {
        "id": 46,
        "question": "Which blood type is the universal donor?",
        "options": [
            "A",
            "B",
            "AB",
            "O"
        ],
        "answer": "O"
    },
    {
        "id": 47,
        "question": "What is agrometeorology?",
        "options": [
            "Study of air pollution",
            "Study of weather effects on crops",
            "Study of ocean currents",
            "Study of atmospheric gases"
        ],
        "answer": "Study of weather effects on crops"
    },
    {
        "id": 48,
        "question": "What measures cloud cover?",
        "options": [
            "Barometer",
            "Anemometer",
            "Okta",
            "Hygrometer"
        ],
        "answer": "Okta"
    },
    {
        "id": 49,
        "question": "Which element is potassium?",
        "options": [
            "K",
            "P",
            "Pt",
            "Po"
        ],
        "answer": "K"
    },
    {
        "id": 50,
        "question": "What process emits radiation from unstable nuclei?",
        "options": [
            "Fission",
            "Fusion",
            "Radioactivity",
            "Oxidation"
        ],
        "answer": "Radioactivity"
    },
    {
        "id": 51,
        "question": "What is the basic structural unit of organisms?",
        "options": [
            "Atom",
            "Molecule",
            "Cell",
            "Tissue"
        ],
        "answer": "Cell"
    },
    {
        "id": 52,
        "question": "Which organelle produces proteins?",
        "options": [
            "Mitochondria",
            "Nucleus",
            "Ribosome",
            "Lysosome"
        ],
        "answer": "Ribosome"
    },
    {
        "id": 53,
        "question": "What is the sum of inherited genes called?",
        "options": [
            "Phenotype",
            "Genotype",
            "Allele",
            "Chromosome"
        ],
        "answer": "Genotype"
    },
    {
        "id": 54,
        "question": "Which blood type has both A and B antigens?",
        "options": [
            "A",
            "B",
            "AB",
            "O"
        ],
        "answer": "AB"
    },
    {
        "id": 55,
        "question": "What is maritime meteorology?",
        "options": [
            "Study of polar weather",
            "Study of air-sea interactions",
            "Study of mountain weather",
            "Study of desert climates"
        ],
        "answer": "Study of air-sea interactions"
    },
    {
        "id": 56,
        "question": "What causes water to rise in capillary tubes?",
        "options": [
            "Osmosis",
            "Diffusion",
            "Capillarity",
            "Gravity"
        ],
        "answer": "Capillarity"
    },
    {
        "id": 57,
        "question": "What is the process of water movement through membranes?",
        "options": [
            "Diffusion",
            "Osmosis",
            "Capillarity",
            "Transpiration"
        ],
        "answer": "Osmosis"
    },
    {
        "id": 58,
        "question": "Which reaction breaks down glucose?",
        "options": [
            "Photosynthesis",
            "Catabolism",
            "Anabolism",
            "Biosynthesis"
        ],
        "answer": "Catabolism"
    },
    {
        "id": 59,
        "question": "What is the solar system's age?",
        "options": [
            "1.5 billion years",
            "4.6 billion years",
            "10 million years",
            "6000 years"
        ],
        "answer": "4.6 billion years"
    },
    {
        "id": 60,
        "question": "What is Mercury known as in ancient times?",
        "options": [
            "Morning star",
            "Evening star",
            "Red planet",
            "Gas giant"
        ],
        "answer": "Evening star"
    },
    {
        "id": 61,
        "question": "Which planet has the Great Red Spot?",
        "options": [
            "Saturn",
            "Jupiter",
            "Neptune",
            "Mars"
        ],
        "answer": "Jupiter"
    },
    {
        "id": 62,
        "question": "What is Saturn's largest moon?",
        "options": [
            "Europa",
            "Titan",
            "Ganymede",
            "Callisto"
        ],
        "answer": "Titan"
    },
    {
        "id": 63,
        "question": "Which is NOT a jovian planet?",
        "options": [
            "Saturn",
            "Uranus",
            "Earth",
            "Neptune"
        ],
        "answer": "Earth"
    },
    {
        "id": 64,
        "question": "What is Pluto's moon called?",
        "options": [
            "Charon",
            "Deimos",
            "Triton",
            "Phobos"
        ],
        "answer": "Charon"
    },
    {
        "id": 65,
        "question": "Which theory explains solar system origins?",
        "options": [
            "Big Bang theory",
            "Condensation theory",
            "Relativity theory",
            "Quantum theory"
        ],
        "answer": "Condensation theory"
    },
    {
        "id": 66,
        "question": "What is the ultimate source of energy in ecosystems?",
        "options": [
            "Geothermal vents",
            "Chemical reactions",
            "Sun",
            "Organic matter"
        ],
        "answer": "Sun"
    },
    {
        "id": 67,
        "question": "Which process produces ATP?",
        "options": [
            "Photosynthesis",
            "Respiration",
            "Fermentation",
            "Digestion"
        ],
        "answer": "Respiration"
    },
    {
        "id": 68,
        "question": "What is the role of chlorophyll?",
        "options": [
            "Store energy",
            "Trap sunlight",
            "Produce oxygen",
            "Break down glucose"
        ],
        "answer": "Trap sunlight"
    },
    {
        "id": 69,
        "question": "Which is NOT a state of matter?",
        "options": [
            "Solid",
            "Liquid",
            "Gas",
            "Energy"
        ],
        "answer": "Energy"
    },
    {
        "id": 70,
        "question": "What is the atomic nucleus made of?",
        "options": [
            "Electrons and protons",
            "Protons and neutrons",
            "Neutrons and electrons",
            "Quarks and leptons"
        ],
        "answer": "Protons and neutrons"
    },
    {
        "id": 71,
        "question": "What is the solar system's primary motion?",
        "options": [
            "Rotation around galaxy center",
            "Expansion into space",
            "Oscillation",
            "Linear movement"
        ],
        "answer": "Rotation around galaxy center"
    },
    {
        "id": 72,
        "question": "Which is a characteristic of terrestrial planets?",
        "options": [
            "Large size",
            "Low density",
            "Rocky composition",
            "Many moons"
        ],
        "answer": "Rocky composition"
    },
    {
        "id": 73,
        "question": "What is the photosphere?",
        "options": [
            "Sun's core",
            "Sun's surface",
            "Solar flare region",
            "Corona layer"
        ],
        "answer": "Sun's surface"
    },
    {
        "id": 74,
        "question": "Which planet has the hottest surface temperature?",
        "options": [
            "Mercury",
            "Venus",
            "Mars",
            "Jupiter"
        ],
        "answer": "Venus"
    },
    {
        "id": 75,
        "question": "What is Earth's position from the sun?",
        "options": [
            "1st",
            "2nd",
            "3rd",
            "4th"
        ],
        "answer": "3rd"
    },
    {
        "id": 76,
        "question": "Which is NOT a solar system theory?",
        "options": [
            "Collision theory",
            "Condensation theory",
            "Big Bang theory",
            "Nebular hypothesis"
        ],
        "answer": "Big Bang theory"
    },
    {
        "id": 77,
        "question": "What defines a species?",
        "options": [
            "Similar appearance",
            "Same habitat",
            "Interbreeding capability",
            "Common ancestors"
        ],
        "answer": "Interbreeding capability"
    },
    {
        "id": 78,
        "question": "Which is a unicellular organism?",
        "options": [
            "Fish",
            "Amoeba",
            "Tree",
            "Human"
        ],
        "answer": "Amoeba"
    },
    {
        "id": 79,
        "question": "What is an ecosystem's living component?",
        "options": [
            "Biotic",
            "Abiotic",
            "Atmospheric",
            "Hydrologic"
        ],
        "answer": "Biotic"
    },
    {
        "id": 80,
        "question": "Which adaptation is structural?",
        "options": [
            "Hibernation",
            "Camouflage",
            "Migration",
            "Nocturnal activity"
        ],
        "answer": "Camouflage"
    },
    {
        "id": 81,
        "question": "What maintains constant body temperature?",
        "options": [
            "Ectotherms",
            "Endotherms",
            "Poikilotherms",
            "Mesotherms"
        ],
        "answer": "Endotherms"
    },
    {
        "id": 82,
        "question": "Which is a warm-blooded animal?",
        "options": [
            "Snake",
            "Frog",
            "Eagle",
            "Lizard"
        ],
        "answer": "Eagle"
    },
    {
        "id": 83,
        "question": "What is the primary function of chloroplasts?",
        "options": [
            "Protein synthesis",
            "Photosynthesis",
            "Respiration",
            "Waste processing"
        ],
        "answer": "Photosynthesis"
    },
    {
        "id": 84,
        "question": "What does a genotype represent?",
        "options": [
            "Physical traits",
            "Genetic makeup",
            "Environmental adaptation",
            "Behavioral patterns"
        ],
        "answer": "Genetic makeup"
    },
    {
        "id": 85,
        "question": "Which is a sex chromosome?",
        "options": [
            "Autosome",
            "X chromosome",
            "Mitochondrial DNA",
            "Ribosomal RNA"
        ],
        "answer": "X chromosome"
    },
    {
        "id": 86,
        "question": "What is nuclear meteorology?",
        "options": [
            "Study of nuclear winter",
            "Study of radioactive aerosols",
            "Study of solar radiation",
            "Study of atomic energy"
        ],
        "answer": "Study of radioactive aerosols"
    },
    {
        "id": 87,
        "question": "Which weather forecasting method uses pattern recognition?",
        "options": [
            "Persistence method",
            "Analogue method",
            "NWP",
            "Climatological forecast"
        ],
        "answer": "Analogue method"
    },
    {
        "id": 88,
        "question": "What is the boiling point?",
        "options": [
            "When liquid freezes",
            "When vapor pressure equals atmospheric pressure",
            "When evaporation occurs",
            "When condensation starts"
        ],
        "answer": "When vapor pressure equals atmospheric pressure"
    },
    {
        "id": 89,
        "question": "What particles are in an atom?",
        "options": [
            "Protons only",
            "Electrons only",
            "Protons, neutrons, electrons",
            "Neutrinos and quarks"
        ],
        "answer": "Protons, neutrons, electrons"
    },
    {
        "id": 90,
        "question": "Which is a form of energy?",
        "options": [
            "Mass",
            "Light",
            "Volume",
            "Density"
        ],
        "answer": "Light"
    },
    {
        "id": 91,
        "question": "What is anabolism?",
        "options": [
            "Energy release",
            "Molecule breakdown",
            "Molecule building",
            "Waste elimination"
        ],
        "answer": "Molecule building"
    },
    {
        "id": 92,
        "question": "Which is NOT part of cell theory?",
        "options": [
            "All organisms are made of cells",
            "Cells are basic units of life",
            "Cells come from pre-existing cells",
            "Cells contain nuclear material"
        ],
        "answer": "Cells contain nuclear material"
    },
    {
        "id": 93,
        "question": "What is the function of mitochondria?",
        "options": [
            "Photosynthesis",
            "Protein synthesis",
            "Energy production",
            "Waste processing"
        ],
        "answer": "Energy production"
    },
    {
        "id": 94,
        "question": "Which defines matter?",
        "options": [
            "Has color and shape",
            "Has mass and occupies space",
            "Is visible to the eye",
            "Can change states"
        ],
        "answer": "Has mass and occupies space"
    },
    {
        "id": 95,
        "question": "What is entropy?",
        "options": [
            "Energy storage",
            "Disorder in a system",
            "Chemical energy",
            "Heat transfer"
        ],
        "answer": "Disorder in a system"
    },
    {
        "id": 96,
        "question": "Which planet is known for its rings?",
        "options": [
            "Jupiter",
            "Saturn",
            "Uranus",
            "Neptune"
        ],
        "answer": "Saturn"
    },
    {
        "id": 97,
        "question": "What is a comet made of?",
        "options": [
            "Rock and metal",
            "Ice and dust",
            "Gas only",
            "Plasma"
        ],
        "answer": "Ice and dust"
    },
    {
        "id": 98,
        "question": "Which is a microorganism?",
        "options": [
            "Elephant",
            "Bacteria",
            "Oak tree",
            "Shark"
        ],
        "answer": "Bacteria"
    },
    {
        "id": 99,
        "question": "What is active transport?",
        "options": [
            "Movement with concentration gradient",
            "Movement against concentration gradient",
            "Passive diffusion",
            "Osmosis process"
        ],
        "answer": "Movement against concentration gradient"
    },
    {
        "id": 100,
        "question": "Which is a primary consumer?",
        "options": [
            "Lion",
            "Hawk",
            "Rabbit",
            "Snake"
        ],
        "answer": "Rabbit"
    },
    {
        "id": 101,
        "question": "What is the sun's surface temperature?",
        "options": [
            "1,000 K",
            "5,800 K",
            "15,000 K",
            "1,000,000 K"
        ],
        "answer": "5,800 K"
    },
    {
        "id": 102,
        "question": "Which planet has the most moons?",
        "options": [
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn"
        ],
        "answer": "Saturn"
    },
    {
        "id": 103,
        "question": "What is a nebula?",
        "options": [
            "A planet",
            "A star",
            "A galaxy",
            "A cloud of gas and dust"
        ],
        "answer": "A cloud of gas and dust"
    },
    {
        "id": 104,
        "question": "Which element dominates the sun's composition?",
        "options": [
            "Oxygen",
            "Carbon",
            "Hydrogen",
            "Helium"
        ],
        "answer": "Hydrogen"
    },
    {
        "id": 105,
        "question": "What is retrograde rotation?",
        "options": [
            "Clockwise rotation",
            "Counter-clockwise rotation",
            "No rotation",
            "Tilted rotation"
        ],
        "answer": "Clockwise rotation"
    },
    {
        "id": 106,
        "question": "Which is NOT a greenhouse gas?",
        "options": [
            "Carbon dioxide",
            "Methane",
            "Oxygen",
            "Water vapor"
        ],
        "answer": "Oxygen"
    },
    {
        "id": 107,
        "question": "What is the largest animal?",
        "options": [
            "African elephant",
            "Blue whale",
            "Tyrannosaurus rex",
            "Giraffe"
        ],
        "answer": "Blue whale"
    },
    {
        "id": 108,
        "question": "Which is a heterotroph?",
        "options": [
            "Oak tree",
            "Algae",
            "Human",
            "Cactus"
        ],
        "answer": "Human"
    },
    {
        "id": 109,
        "question": "What is osmosis?",
        "options": [
            "Movement of water through membranes",
            "Movement of air through tissues",
            "Breakdown of molecules",
            "Energy production"
        ],
        "answer": "Movement of water through membranes"
    },
    {
        "id": 110,
        "question": "Which is a nucleotide base?",
        "options": [
            "Glucose",
            "Adenine",
            "Amino acid",
            "Fatty acid"
        ],
        "answer": "Adenine"
    },
    {
        "id": 111,
        "question": "What is ballistic meteorology?",
        "options": [
            "Study of meteors",
            "Study of projectiles",
            "Study of wind effects on trajectories",
            "Study of space weather"
        ],
        "answer": "Study of wind effects on trajectories"
    },
    {
        "id": 112,
        "question": "Which is a noble gas?",
        "options": [
            "Oxygen",
            "Nitrogen",
            "Helium",
            "Hydrogen"
        ],
        "answer": "Helium"
    },
    {
        "id": 113,
        "question": "What is chemosynthesis?",
        "options": [
            "Energy from chemicals",
            "Energy from light",
            "Energy from heat",
            "Energy from motion"
        ],
        "answer": "Energy from chemicals"
    },
    {
        "id": 114,
        "question": "Which planet has a day similar to Earth's?",
        "options": [
            "Venus",
            "Mars",
            "Jupiter",
            "Mercury"
        ],
        "answer": "Mars"
    },
    {
        "id": 115,
        "question": "What is Jupiter's Great Red Spot?",
        "options": [
            "Volcano",
            "Storm",
            "Mountain",
            "Ocean"
        ],
        "answer": "Storm"
    },
    {
        "id": 116,
        "question": "Which is a carnivore?",
        "options": [
            "Cow",
            "Rabbit",
            "Lion",
            "Deer"
        ],
        "answer": "Lion"
    },
    {
        "id": 117,
        "question": "What is the function of ribosomes?",
        "options": [
            "Energy production",
            "Protein synthesis",
            "Waste removal",
            "Photosynthesis"
        ],
        "answer": "Protein synthesis"
    },
    {
        "id": 118,
        "question": "Which is a recessive trait?",
        "options": [
            "Brown eyes",
            "Blonde hair",
            "Dimples",
            "Attached earlobes"
        ],
        "answer": "Attached earlobes"
    },
    {
        "id": 119,
        "question": "What is hydrometeorology?",
        "options": [
            "Study of water cycle",
            "Study of ice",
            "Study of oceans",
            "Study of rivers"
        ],
        "answer": "Study of water cycle"
    },
    {
        "id": 120,
        "question": "Which is a chemical change?",
        "options": [
            "Melting ice",
            "Boiling water",
            "Burning wood",
            "Breaking glass"
        ],
        "answer": "Burning wood"
    },
    {
        "id": 121,
        "question": "What is sublimation?",
        "options": [
            "Solid to liquid",
            "Liquid to gas",
            "Solid to gas",
            "Gas to solid"
        ],
        "answer": "Solid to gas"
    },
    {
        "id": 122,
        "question": "Which is kinetic energy?",
        "options": [
            "Stored energy",
            "Chemical energy",
            "Motion energy",
            "Nuclear energy"
        ],
        "answer": "Motion energy"
    },
    {
        "id": 123,
        "question": "What is a meteorite?",
        "options": [
            "Shooting star",
            "Space rock hitting Earth",
            "Comet tail",
            "Asteroid belt object"
        ],
        "answer": "Space rock hitting Earth"
    },
    {
        "id": 124,
        "question": "Which is NOT a terrestrial planet?",
        "options": [
            "Mercury",
            "Venus",
            "Mars",
            "Uranus"
        ],
        "answer": "Uranus"
    },
    {
        "id": 125,
        "question": "What is a phenotype?",
        "options": [
            "Genetic code",
            "Physical expression",
            "Cell structure",
            "Chromosome number"
        ],
        "answer": "Physical expression"
    },
    {
        "id": 126,
        "question": "Which is a decomposer?",
        "options": [
            "Eagle",
            "Mushroom",
            "Grass",
            "Fish"
        ],
        "answer": "Mushroom"
    },
    {
        "id": 127,
        "question": "What is the role of Golgi apparatus?",
        "options": [
            "Protein synthesis",
            "Energy production",
            "Protein packaging",
            "Waste digestion"
        ],
        "answer": "Protein packaging"
    },
    {
        "id": 128,
        "question": "Which weather element is measured with a hygrometer?",
        "options": [
            "Wind speed",
            "Humidity",
            "Pressure",
            "Temperature"
        ],
        "answer": "Humidity"
    },
    {
        "id": 129,
        "question": "What is atomic number?",
        "options": [
            "Number of neutrons",
            "Number of protons",
            "Number of electrons",
            "Atomic mass"
        ],
        "answer": "Number of protons"
    },
    {
        "id": 130,
        "question": "Which reaction is endothermic?",
        "options": [
            "Combustion",
            "Photosynthesis",
            "Respiration",
            "Digestion"
        ],
        "answer": "Photosynthesis"
    },
    {
        "id": 131,
        "question": "What is a constellation?",
        "options": [
            "Solar system pattern",
            "Star pattern",
            "Galaxy cluster",
            "Planetary alignment"
        ],
        "answer": "Star pattern"
    },
    {
        "id": 132,
        "question": "Which is Saturn's orbital period?",
        "options": [
            "1 year",
            "12 years",
            "29.5 years",
            "84 years"
        ],
        "answer": "29.5 years"
    },
    {
        "id": 133,
        "question": "What is Uranus' distinctive feature?",
        "options": [
            "Rings",
            "Greenish color",
            "Volcanoes",
            "Liquid water"
        ],
        "answer": "Greenish color"
    },
    {
        "id": 134,
        "question": "Which is a biotic factor?",
        "options": [
            "Temperature",
            "Predator",
            "Rainfall",
            "Soil pH"
        ],
        "answer": "Predator"
    },
    {
        "id": 135,
        "question": "What is homeostasis?",
        "options": [
            "Genetic mutation",
            "Internal balance",
            "Energy transfer",
            "Cell division"
        ],
        "answer": "Internal balance"
    },
    {
        "id": 136,
        "question": "Which organelle contains DNA?",
        "options": [
            "Ribosome",
            "Mitochondria",
            "Endoplasmic reticulum",
            "Golgi apparatus"
        ],
        "answer": "Mitochondria"
    },
    {
        "id": 137,
        "question": "What is an allele?",
        "options": [
            "Gene variant",
            "Protein type",
            "Cell organelle",
            "Chromosome pair"
        ],
        "answer": "Gene variant"
    },
    {
        "id": 138,
        "question": "Which is a weather satellite?",
        "options": [
            "Voyager",
            "Hubble",
            "NOAA",
            "Kepler"
        ],
        "answer": "NOAA"
    },
    {
        "id": 139,
        "question": "What is vapor pressure?",
        "options": [
            "Atmospheric pressure",
            "Pressure from evaporating liquid",
            "Wind pressure",
            "Water pressure"
        ],
        "answer": "Pressure from evaporating liquid"
    },
    {
        "id": 140,
        "question": "Which is a compound?",
        "options": [
            "Oxygen",
            "Hydrogen",
            "Water",
            "Iron"
        ],
        "answer": "Water"
    },
    {
        "id": 141,
        "question": "What is fermentation?",
        "options": [
            "Aerobic energy production",
            "Anaerobic energy production",
            "Protein synthesis",
            "Waste elimination"
        ],
        "answer": "Anaerobic energy production"
    },
    {
        "id": 142,
        "question": "Which planet has sulfuric acid clouds?",
        "options": [
            "Mars",
            "Venus",
            "Jupiter",
            "Saturn"
        ],
        "answer": "Venus"
    },
    {
        "id": 143,
        "question": "What is Neptune's orbital period?",
        "options": [
            "84 years",
            "165 years",
            "248 years",
            "365 years"
        ],
        "answer": "165 years"
    },
    {
        "id": 144,
        "question": "Which is a xerophyte adaptation?",
        "options": [
            "Broad leaves",
            "Deep roots",
            "Thin cuticle",
            "High water storage"
        ],
        "answer": "Deep roots"
    },
    {
        "id": 145,
        "question": "What is mitosis?",
        "options": [
            "Cell division for growth",
            "Sex cell production",
            "Protein synthesis",
            "Energy production"
        ],
        "answer": "Cell division for growth"
    },
    {
        "id": 146,
        "question": "Which is a homozygous genotype?",
        "options": [
            "Tt",
            "TT",
            "T Y",
            "t t"
        ],
        "answer": "TT"
    },
    {
        "id": 147,
        "question": "What is the thermosphere?",
        "options": [
            "Lowest atmosphere layer",
            "Weather layer",
            "Aurora layer",
            "Ozone layer"
        ],
        "answer": "Aurora layer"
    },
    {
        "id": 148,
        "question": "Which is a physical change?",
        "options": [
            "Rusting iron",
            "Burning paper",
            "Melting gold",
            "Digesting food"
        ],
        "answer": "Melting gold"
    },
    {
        "id": 149,
        "question": "What is the electron's charge?",
        "options": [
            "Positive",
            "Negative",
            "Neutral",
            "Variable"
        ],
        "answer": "Negative"
    },
    {
        "id": 150,
        "question": "Which is a catabolic reaction?",
        "options": [
            "Glucose formation",
            "Protein synthesis",
            "Glycogen breakdown",
            "DNA replication"
        ],
        "answer": "Glycogen breakdown"
    },
    {
        "id": 151,
        "question": "What is Charon?",
        "options": [
            "Jupiter's moon",
            "Pluto's moon",
            "Asteroid belt object",
            "Kuiper belt comet"
        ],
        "answer": "Pluto's moon"
    },
    {
        "id": 152,
        "question": "Which is a circadian rhythm?",
        "options": [
            "Annual migration",
            "Daily activity cycle",
            "Hibernation pattern",
            "Mating season"
        ],
        "answer": "Daily activity cycle"
    },
    {
        "id": 153,
        "question": "What is cytokinesis?",
        "options": [
            "DNA replication",
            "Cytoplasm division",
            "Protein synthesis",
            "Energy transfer"
        ],
        "answer": "Cytoplasm division"
    },
    {
        "id": 154,
        "question": "Which is a phenotype example?",
        "options": [
            "BB genotype",
            "Blue eyes",
            "Heterozygous allele",
            "Recessive gene"
        ],
        "answer": "Blue eyes"
    },
    {
        "id": 155,
        "question": "What is nowcasting?",
        "options": [
            "Long-term forecasting",
            "Short-term forecasting",
            "Climate modeling",
            "Historical weather analysis"
        ],
        "answer": "Short-term forecasting"
    },
    {
        "id": 156,
        "question": "Which is a chemical property?",
        "options": [
            "Density",
            "Flammability",
            "Melting point",
            "Solubility"
        ],
        "answer": "Flammability"
    },
    {
        "id": 157,
        "question": "What is metabolism?",
        "options": [
            "Energy storage",
            "Cellular respiration",
            "All chemical reactions",
            "Waste elimination"
        ],
        "answer": "All chemical reactions"
    },
    {
        "id": 158,
        "question": "Which is Mars' orbital characteristic?",
        "options": [
            "Closest to sun",
            "Retrograde rotation",
            "687 Earth days",
            "Tilted 98 degrees"
        ],
        "answer": "687 Earth days"
    },
    {
        "id": 159,
        "question": "What is a community in ecology?",
        "options": [
            "Single species group",
            "Multiple populations",
            "Individual organism",
            "Abiotic factors"
        ],
        "answer": "Multiple populations"
    },
    {
        "id": 160,
        "question": "Which cell part controls transport?",
        "options": [
            "Nucleus",
            "Plasma membrane",
            "Mitochondria",
            "Ribosome"
        ],
        "answer": "Plasma membrane"
    },
    {
        "id": 161,
        "question": "What is codominance?",
        "options": [
            "One allele dominates",
            "Both alleles expressed equally",
            "No expression",
            "Recessive only"
        ],
        "answer": "Both alleles expressed equally"
    },
    {
        "id": 162,
        "question": "Which is a mesoscale meteorology feature?",
        "options": [
            "Global wind patterns",
            "Thunderstorms",
            "Climate zones",
            "Jet streams"
        ],
        "answer": "Thunderstorms"
    },
    {
        "id": 163,
        "question": "What is density?",
        "options": [
            "Mass per volume",
            "Weight per area",
            "Volume per mass",
            "Space per object"
        ],
        "answer": "Mass per volume"
    },
    {
        "id": 164,
        "question": "Which is NOT an energy form?",
        "options": [
            "Chemical",
            "Thermal",
            "Mechanical",
            "Spatial"
        ],
        "answer": "Spatial"
    },
    {
        "id": 165,
        "question": "What is the Kuiper belt?",
        "options": [
            "Asteroid region",
            "Comet reservoir",
            "Planetary zone",
            "Galactic center"
        ],
        "answer": "Comet reservoir"
    },
    {
        "id": 166,
        "question": "Which is a parasitic relationship?",
        "options": [
            "Bee and flower",
            "Tapeworm and human",
            "Clownfish and anemone",
            "Oxpecker and rhino"
        ],
        "answer": "Tapeworm and human"
    },
    {
        "id": 167,
        "question": "What is the nucleolus function?",
        "options": [
            "Energy production",
            "Ribosome synthesis",
            "Protein transport",
            "Waste processing"
        ],
        "answer": "Ribosome synthesis"
    },
    {
        "id": 168,
        "question": "Which is incomplete dominance?",
        "options": [
            "Red + white = pink",
            "Red + white = red",
            "Red + white = white",
            "Red + white = striped"
        ],
        "answer": "Red + white = pink"
    },
    {
        "id": 169,
        "question": "What is parameterization in NWP?",
        "options": [
            "Data initialization",
            "Small-scale process approximation",
            "Result interpretation",
            "Model validation"
        ],
        "answer": "Small-scale process approximation"
    },
    {
        "id": 170,
        "question": "Which is a mixture?",
        "options": [
            "Water",
            "Salt",
            "Air",
            "Iron"
        ],
        "answer": "Air"
    },
    {
        "id": 171,
        "question": "What is glycolysis?",
        "options": [
            "Protein breakdown",
            "Glucose breakdown",
            "Fat synthesis",
            "DNA replication"
        ],
        "answer": "Glucose breakdown"
    },
    {
        "id": 172,
        "question": "Which planet has Olympus Mons?",
        "options": [
            "Earth",
            "Mars",
            "Venus",
            "Mercury"
        ],
        "answer": "Mars"
    },
    {
        "id": 173,
        "question": "What is carrying capacity?",
        "options": [
            "Maximum population size",
            "Minimum resources",
            "Habitat size",
            "Migration rate"
        ],
        "answer": "Maximum population size"
    },
    {
        "id": 174,
        "question": "Which is a lysosome function?",
        "options": [
            "Photosynthesis",
            "Protein synthesis",
            "Waste digestion",
            "Energy production"
        ],
        "answer": "Waste digestion"
    },
    {
        "id": 175,
        "question": "What is a karyotype?",
        "options": [
            "Gene sequence",
            "Chromosome picture",
            "Protein structure",
            "Cell membrane"
        ],
        "answer": "Chromosome picture"
    },
    {
        "id": 176,
        "question": "Which is synoptic scale meteorology?",
        "options": [
            "Global patterns",
            "Tornadoes",
            "Urban heat islands",
            "Plant microclimates"
        ],
        "answer": "Global patterns"
    },
    {
        "id": 177,
        "question": "What is atomic mass?",
        "options": [
            "Protons only",
            "Protons + neutrons",
            "Electrons only",
            "Neutrons only"
        ],
        "answer": "Protons + neutrons"
    },
    {
        "id": 178,
        "question": "Which is a redox reaction?",
        "options": [
            "Neutralization",
            "Oxidation-reduction",
            "Precipitation",
            "Combustion"
        ],
        "answer": "Oxidation-reduction"
    },
    {
        "id": 179,
        "question": "What is Oort cloud?",
        "options": [
            "Asteroid belt",
            "Cometary reservoir",
            "Planetary zone",
            "Galactic cluster"
        ],
        "answer": "Cometary reservoir"
    },
    {
        "id": 180,
        "question": "Which is a keystone species?",
        "options": [
            "Top predator",
            "Primary producer",
            "Soil decomposer",
            "Pollinator"
        ],
        "answer": "Top predator"
    },
    {
        "id": 181,
        "question": "What is endoplasmic reticulum?",
        "options": [
            "Protein synthesis site",
            "Transport network",
            "Energy producer",
            "Waste processor"
        ],
        "answer": "Transport network"
    },
    {
        "id": 182,
        "question": "Which is polygenic inheritance?",
        "options": [
            "Single gene trait",
            "Multiple gene trait",
            "Sex-linked trait",
            "Codominant trait"
        ],
        "answer": "Multiple gene trait"
    },
    {
        "id": 183,
        "question": "What is albedo?",
        "options": [
            "Cloud thickness",
            "Reflectivity",
            "Heat capacity",
            "Wind speed"
        ],
        "answer": "Reflectivity"
    },
    {
        "id": 184,
        "question": "Which is a solution?",
        "options": [
            "Milk",
            "Salt water",
            "Blood",
            "Paint"
        ],
        "answer": "Salt water"
    },
    {
        "id": 185,
        "question": "What is the Calvin cycle?",
        "options": [
            "Carbon fixation",
            "Glycolysis",
            "Krebs cycle",
            "Electron transport"
        ],
        "answer": "Carbon fixation"
    },
    {
        "id": 186,
        "question": "Which moon is volcanically active?",
        "options": [
            "Earth's Moon",
            "Europa",
            "Io",
            "Titan"
        ],
        "answer": "Io"
    },
    {
        "id": 187,
        "question": "What is a biome?",
        "options": [
            "Weather pattern",
            "Large ecosystem",
            "Genetic variation",
            "Atmospheric layer"
        ],
        "answer": "Large ecosystem"
    },
    {
        "id": 188,
        "question": "What is centriole function?",
        "options": [
            "Photosynthesis",
            "Cell division",
            "Protein synthesis",
            "Energy storage"
        ],
        "answer": "Cell division"
    },
    {
        "id": 189,
        "question": "Which is a frameshift mutation?",
        "options": [
            "Base substitution",
            "Base insertion",
            "Chromosomal deletion",
            "Gene duplication"
        ],
        "answer": "Base insertion"
    },
    {
        "id": 190,
        "question": "What is a front in meteorology?",
        "options": [
            "Cloud type",
            "Air mass boundary",
            "Storm center",
            "Wind pattern"
        ],
        "answer": "Air mass boundary"
    },
    {
        "id": 191,
        "question": "Which is a compound?",
        "options": [
            "Oxygen gas",
            "Carbon powder",
            "Sodium chloride",
            "Copper wire"
        ],
        "answer": "Sodium chloride"
    },
    {
        "id": 192,
        "question": "What is chemiosmosis?",
        "options": [
            "Protein synthesis",
            "ATP synthesis",
            "DNA replication",
            "Glucose breakdown"
        ],
        "answer": "ATP synthesis"
    },
    {
        "id": 193,
        "question": "Which is Venus' orbital period?",
        "options": [
            "88 days",
            "225 days",
            "365 days",
            "687 days"
        ],
        "answer": "225 days"
    },
    {
        "id": 194,
        "question": "What is denitrification?",
        "options": [
            "Nitrogen fixation",
            "Nitrogen to atmosphere",
            "Ammonia production",
            "Nitrate absorption"
        ],
        "answer": "Nitrogen to atmosphere"
    },
    {
        "id": 195,
        "question": "Which is a vacuole function?",
        "options": [
            "Protein synthesis",
            "Storage",
            "Energy production",
            "Cell division"
        ],
        "answer": "Storage"
    },
    {
        "id": 196,
        "question": "What is epistasis?",
        "options": [
            "Gene interaction",
            "Chromosomal abnormality",
            "Mutation type",
            "Protein folding"
        ],
        "answer": "Gene interaction"
    },
    {
        "id": 197,
        "question": "What is dew point?",
        "options": [
            "Cloud formation temperature",
            "Dew formation temperature",
            "Frost point",
            "Evaporation temperature"
        ],
        "answer": "Dew formation temperature"
    },
    {
        "id": 198,
        "question": "Which is a catalyst?",
        "options": [
            "Reactant",
            "Product",
            "Reaction speeder",
            "Inhibitor"
        ],
        "answer": "Reaction speeder"
    },
    {
        "id": 199,
        "question": "What is the Krebs cycle?",
        "options": [
            "Carbon fixation",
            "Electron transport",
            "ATP production",
            "Glucose breakdown"
        ],
        "answer": "ATP production"
    },
    {
        "id": 200,
        "question": "Which is NOT a solar system component?",
        "options": [
            "Asteroids",
            "Comets",
            "Black holes",
            "Kuiper belt"
        ],
        "answer": "Black holes"
    }
];