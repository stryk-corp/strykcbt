const questions = [
    {
        "id": 1,
        "question": "Who is considered the 'Father of American Anthropology'?",
        "options": [
            "Charles Darwin",
            "Franz Boas",
            "Bronisław Malinowski",
            "Lewis Henry Morgan"
        ],
        "answer": "Franz Boas"
    },
    {
        "id": 2,
        "question": "Anthropology is the study of:",
        "options": [
            "Insects",
            "Ancient civilizations only",
            "Humans, past and present",
            "Plants and their uses"
        ],
        "answer": "Humans, past and present"
    },
    {
        "id": 3,
        "question": "Which of the following is not a subfield of anthropology?",
        "options": [
            "Cultural Anthropology",
            "Biological Anthropology",
            "Linguistic Anthropology",
            "Political Science"
        ],
        "answer": "Political Science"
    },
    {
        "id": 4,
        "question": "Cultural anthropology focuses primarily on:",
        "options": [
            "Fossils",
            "Social and cultural patterns",
            "Genetic variation",
            "Ancient scripts"
        ],
        "answer": "Social and cultural patterns"
    },
    {
        "id": 5,
        "question": "Archaeology is the study of:",
        "options": [
            "Human fossils",
            "Contemporary society",
            "Material remains of past cultures",
            "Animal behavior"
        ],
        "answer": "Material remains of past cultures"
    },
    {
        "id": 6,
        "question": "Biological anthropology is concerned with:",
        "options": [
            "Economic systems",
            "Evolution and human biology",
            "Language patterns",
            "Laws of human societies"
        ],
        "answer": "Evolution and human biology"
    },
    {
        "id": 7,
        "question": "Linguistic anthropology primarily studies:",
        "options": [
            "Language development and use",
            "Political systems",
            "Artifacts",
            "Religious rituals"
        ],
        "answer": "Language development and use"
    },
    {
        "id": 8,
        "question": "Which method is primarily used in cultural anthropology?",
        "options": [
            "Radiocarbon dating",
            "Participant observation",
            "DNA sequencing",
            "Carbon dating"
        ],
        "answer": "Participant observation"
    },
    {
        "id": 9,
        "question": "The holistic approach in anthropology refers to:",
        "options": [
            "Specializing in one topic",
            "Studying a part of a society only",
            "Understanding human life in a broad and integrated manner",
            "Ignoring the biological aspects of humans"
        ],
        "answer": "Understanding human life in a broad and integrated manner"
    },
    {
        "id": 10,
        "question": "The term 'ethnography' refers to:",
        "options": [
            "A genetic analysis",
            "A written account of a culture based on fieldwork",
            "Ancient artifact study",
            "A language map"
        ],
        "answer": "A written account of a culture based on fieldwork"
    },
    {
        "id": 11,
        "question": "The term 'culture' in anthropology includes:",
        "options": [
            "Only beliefs and values",
            "Only art and architecture",
            "Learned and shared human behaviors",
            "Only written texts"
        ],
        "answer": "Learned and shared human behaviors"
    },
    {
        "id": 12,
        "question": "The comparative method in anthropology:",
        "options": [
            "Avoids cross-cultural studies",
            "Focuses only on Western societies",
            "Examines similarities and differences among cultures",
            "Emphasizes ancient history only"
        ],
        "answer": "Examines similarities and differences among cultures"
    },
    {
        "id": 13,
        "question": "Enculturation refers to:",
        "options": [
            "Genetic mutation",
            "The process of learning culture",
            "Traveling abroad",
            "Fossil formation"
        ],
        "answer": "The process of learning culture"
    },
    {
        "id": 14,
        "question": "An ethnocentric view means:",
        "options": [
            "Respecting other cultures",
            "Believing one's own culture is superior",
            "Being multicultural",
            "Avoiding cultural practices"
        ],
        "answer": "Believing one's own culture is superior"
    },
    {
        "id": 15,
        "question": "Cultural relativism means:",
        "options": [
            "All cultures are judged by one standard",
            "One culture dominates others",
            "Understanding a culture in its own context",
            "Cultures never change"
        ],
        "answer": "Understanding a culture in its own context"
    },
    {
        "id": 16,
        "question": "Archaeologists use which of the following to date artifacts?",
        "options": [
            "Ethnography",
            "Linguistics",
            "Carbon-14 dating",
            "DNA sequencing"
        ],
        "answer": "Carbon-14 dating"
    },
    {
        "id": 17,
        "question": "Which species is believed to be the first toolmaker?",
        "options": [
            "Homo sapiens",
            "Homo erectus",
            "Homo habilis",
            "Australopithecus afarensis"
        ],
        "answer": "Homo habilis"
    },
    {
        "id": 18,
        "question": "Homo sapiens first appeared about:",
        "options": [
            "10,000 years ago",
            "200,000 years ago",
            "1 million years ago",
            "5 million years ago"
        ],
        "answer": "200,000 years ago"
    },
    {
        "id": 19,
        "question": "The term 'bipedalism' refers to:",
        "options": [
            "Living in groups",
            "Walking on two legs",
            "Use of fire",
            "Tool making"
        ],
        "answer": "Walking on two legs"
    },
    {
        "id": 20,
        "question": "Anthropology is different from sociology because:",
        "options": [
            "Anthropology focuses more on Western societies",
            "Anthropology is purely theoretical",
            "Anthropology takes a holistic and cross-cultural approach",
            "Anthropology excludes fieldwork"
        ],
        "answer": "Anthropology takes a holistic and cross-cultural approach"
    },
    {
        "id": 21,
        "question": "'Primates' in anthropology refers to:",
        "options": [
            "Reptiles",
            "Ancient fish",
            "The biological order including humans, apes, and monkeys",
            "Birds"
        ],
        "answer": "The biological order including humans, apes, and monkeys"
    },
    {
        "id": 22,
        "question": "The study of ancient languages is called:",
        "options": [
            "Ethnology",
            "Paleolinguistics",
            "Archaeology",
            "Bioanthropology"
        ],
        "answer": "Paleolinguistics"
    },
    {
        "id": 23,
        "question": "Stratigraphy in archaeology refers to:",
        "options": [
            "The study of fossils",
            "Layering of soils and remains",
            "Radioactive decay",
            "Chemical analysis"
        ],
        "answer": "Layering of soils and remains"
    },
    {
        "id": 24,
        "question": "The Out-of-Africa theory suggests:",
        "options": [
            "Homo sapiens evolved in Europe",
            "All humans are from Asia",
            "Homo sapiens migrated from Africa to other continents",
            "Africans were isolated in evolution"
        ],
        "answer": "Homo sapiens migrated from Africa to other continents"
    },
    {
        "id": 25,
        "question": "The scientific method in anthropology involves:",
        "options": [
            "Guessing cultural practices",
            "Making untestable claims",
            "Observation, hypothesis, testing, and analysis",
            "Avoiding evidence"
        ],
        "answer": "Observation, hypothesis, testing, and analysis"
    },
    {
        "id": 26,
        "question": "Ethnology is:",
        "options": [
            "Excavation science",
            "Study of languages",
            "Comparative study of cultures",
            "Study of fossils"
        ],
        "answer": "Comparative study of cultures"
    },
    {
        "id": 27,
        "question": "Applied anthropology involves:",
        "options": [
            "Only studying cultures",
            "Using anthropology to solve real-world problems",
            "Avoiding modern societies",
            "Focusing only on the past"
        ],
        "answer": "Using anthropology to solve real-world problems"
    },
    {
        "id": 28,
        "question": "The four fields of American anthropology include all except:",
        "options": [
            "Cultural anthropology",
            "Physical anthropology",
            "Political science",
            "Archaeology"
        ],
        "answer": "Political science"
    },
    {
        "id": 29,
        "question": "Kinship studies involve:",
        "options": [
            "Inheritance laws only",
            "Family and descent systems",
            "Animal behavior",
            "Soil samples"
        ],
        "answer": "Family and descent systems"
    },
    {
        "id": 30,
        "question": "Which anthropologist is known for work in the Trobriand Islands?",
        "options": [
            "Margaret Mead",
            "Bronisław Malinowski",
            "Franz Boas",
            "Clifford Geertz"
        ],
        "answer": "Bronisław Malinowski"
    },
    {
        "id": 31,
        "question": "Margaret Mead conducted research in:",
        "options": [
            "Australia",
            "Samoa",
            "Egypt",
            "China"
        ],
        "answer": "Samoa"
    },
    {
        "id": 32,
        "question": "The term 'emic' perspective means:",
        "options": [
            "An outsider's view",
            "A comparative perspective",
            "An insider's view",
            "A colonial perspective"
        ],
        "answer": "An insider's view"
    },
    {
        "id": 33,
        "question": "The term 'etic' perspective refers to:",
        "options": [
            "An internal viewpoint",
            "An anthropologist's analytical perspective",
            "A mythological explanation",
            "A religious viewpoint"
        ],
        "answer": "An anthropologist's analytical perspective"
    },
    {
        "id": 34,
        "question": "Foraging societies are:",
        "options": [
            "Based on industrial farming",
            "Large urban cultures",
            "Small-scale, hunter-gatherer groups",
            "Internet-based societies"
        ],
        "answer": "Small-scale, hunter-gatherer groups"
    },
    {
        "id": 35,
        "question": "Subsistence strategies include all except:",
        "options": [
            "Foraging",
            "Horticulture",
            "Pastoralism",
            "Telecommunication"
        ],
        "answer": "Telecommunication"
    },
    {
        "id": 36,
        "question": "Horticulture is characterized by:",
        "options": [
            "Large-scale farming",
            "Simple gardening tools",
            "Use of tractors",
            "Planting without fallow periods"
        ],
        "answer": "Simple gardening tools"
    },
    {
        "id": 37,
        "question": "A pastoral society depends on:",
        "options": [
            "Fish",
            "Mining",
            "Domesticated animals",
            "Irrigation canals"
        ],
        "answer": "Domesticated animals"
    },
    {
        "id": 38,
        "question": "Which anthropologist developed structural-functionalism?",
        "options": [
            "Clifford Geertz",
            "Franz Boas",
            "Bronisław Malinowski",
            "Julian Steward"
        ],
        "answer": "Bronisław Malinowski"
    },
    {
        "id": 39,
        "question": "The term 'ethnocide' means:",
        "options": [
            "Respecting a culture",
            "Learning a language",
            "Deliberate destruction of a culture",
            "Forming a new ethnic group"
        ],
        "answer": "Deliberate destruction of a culture"
    },
    {
        "id": 40,
        "question": "Anthropology helps us understand:",
        "options": [
            "Only historical data",
            "Only biology",
            "The full range of human experience",
            "Only laws"
        ],
        "answer": "The full range of human experience"
    },
    {
        "id": 41,
        "question": "Who coined the term 'culture'?",
        "options": [
            "Edward B. Tylor",
            "Charles Darwin",
            "Emile Durkheim",
            "Claude Lévi-Strauss"
        ],
        "answer": "Edward B. Tylor"
    },
    {
        "id": 42,
        "question": "The earliest known hominins appeared in:",
        "options": [
            "Europe",
            "Asia",
            "Africa",
            "Australia"
        ],
        "answer": "Africa"
    },
    {
        "id": 43,
        "question": "The theory of evolution by natural selection was proposed by:",
        "options": [
            "Alfred Wallace",
            "Gregor Mendel",
            "Charles Darwin",
            "Edward B. Tylor"
        ],
        "answer": "Charles Darwin"
    },
    {
        "id": 44,
        "question": "A clan is:",
        "options": [
            "A group of unrelated people",
            "A type of social class",
            "A unilineal descent group",
            "A religious sect"
        ],
        "answer": "A unilineal descent group"
    },
    {
        "id": 45,
        "question": "A matrilineal society traces descent through:",
        "options": [
            "The father",
            "The king",
            "The mother",
            "The priest"
        ],
        "answer": "The mother"
    },
    {
        "id": 46,
        "question": "Participant observation means:",
        "options": [
            "Using surveys only",
            "Observing from a distance",
            "Living among the people studied",
            "Studying only written records"
        ],
        "answer": "Living among the people studied"
    },
    {
        "id": 47,
        "question": "A rite of passage is:",
        "options": [
            "A cooking ritual",
            "A ceremonial transition in life stages",
            "An economic transaction",
            "A marriage contract"
        ],
        "answer": "A ceremonial transition in life stages"
    },
    {
        "id": 48,
        "question": "Totemism refers to:",
        "options": [
            "Currency use",
            "Belief in a spiritual connection with a plant or animal",
            "Kinship ranking",
            "Warfare rituals"
        ],
        "answer": "Belief in a spiritual connection with a plant or animal"
    },
    {
        "id": 49,
        "question": "Which is not a feature of culture?",
        "options": [
            "Learned",
            "Shared",
            "Genetic",
            "Symbolic"
        ],
        "answer": "Genetic"
    },
    {
        "id": 50,
        "question": "Anthropology differs from history because it:",
        "options": [
            "Only studies documents",
            "Focuses more on present cultures",
            "Avoids analysis",
            "Studies only kings and rulers"
        ],
        "answer": "Focuses more on present cultures"
    },
    {
        "id": 51,
        "question": "The term 'race' in anthropology is considered:",
        "options": [
            "A biological category",
            "A cultural and social construct",
            "An ancient scientific truth",
            "Defined by skin color only"
        ],
        "answer": "A cultural and social construct"
    },
    {
        "id": 52,
        "question": "Gender is viewed in anthropology as:",
        "options": [
            "Fixed and biological",
            "A social and cultural construction",
            "Unrelated to society",
            "The same in all cultures"
        ],
        "answer": "A social and cultural construction"
    },
    {
        "id": 53,
        "question": "An artifact is:",
        "options": [
            "A bone",
            "A stone tool or object made by humans",
            "A natural rock",
            "A climate condition"
        ],
        "answer": "A stone tool or object made by humans"
    },
    {
        "id": 54,
        "question": "'Multisited ethnography' refers to:",
        "options": [
            "Studying a single location",
            "Lab-only research",
            "Conducting fieldwork in multiple places",
            "Digital anthropology"
        ],
        "answer": "Conducting fieldwork in multiple places"
    },
    {
        "id": 55,
        "question": "The Neolithic Revolution refers to:",
        "options": [
            "Discovery of fire",
            "Invention of the wheel",
            "Transition from foraging to farming",
            "Use of language"
        ],
        "answer": "Transition from foraging to farming"
    },
    {
        "id": 56,
        "question": "The Sapir-Whorf Hypothesis relates to:",
        "options": [
            "Brain size",
            "Language and thought",
            "Body modification",
            "Tool usage"
        ],
        "answer": "Language and thought"
    },
    {
        "id": 57,
        "question": "The concept of 'taboo' was introduced by:",
        "options": [
            "Tylor",
            "Durkheim",
            "James Frazer",
            "Franz Boas"
        ],
        "answer": "James Frazer"
    },
    {
        "id": 58,
        "question": "Who wrote 'Coming of Age in Samoa'?",
        "options": [
            "Ruth Benedict",
            "Margaret Mead",
            "Mary Leakey",
            "Jane Goodall"
        ],
        "answer": "Margaret Mead"
    },
    {
        "id": 59,
        "question": "Polyandry means:",
        "options": [
            "One woman, multiple husbands",
            "One man, multiple wives",
            "Celibacy",
            "Monogamy"
        ],
        "answer": "One woman, multiple husbands"
    },
    {
        "id": 60,
        "question": "A 'chiefdom' is:",
        "options": [
            "An uncentralized political system",
            "Ruled by a chief with ranked hierarchy",
            "A democracy",
            "A kinship-based band"
        ],
        "answer": "Ruled by a chief with ranked hierarchy"
    },
    {
        "id": 61,
        "question": "A cargo cult is associated with:",
        "options": [
            "American history",
            "Global economics",
            "Melanesian religion and material goods",
            "Tribal warfare"
        ],
        "answer": "Melanesian religion and material goods"
    },
    {
        "id": 62,
        "question": "Which is an example of a cultural universal?",
        "options": [
            "Smartphones",
            "Marriage",
            "Internet",
            "Ice cream"
        ],
        "answer": "Marriage"
    },
    {
        "id": 63,
        "question": "Stratified societies are based on:",
        "options": [
            "Simple equality",
            "Random leadership",
            "Unequal access to resources",
            "Anarchism"
        ],
        "answer": "Unequal access to resources"
    },
    {
        "id": 64,
        "question": "Franz Boas promoted:",
        "options": [
            "Cultural evolutionism",
            "Biological determinism",
            "Historical particularism",
            "Structuralism"
        ],
        "answer": "Historical particularism"
    },
    {
        "id": 65,
        "question": "The kula ring is a system of exchange studied in:",
        "options": [
            "New York",
            "Amazon",
            "Trobriand Islands",
            "Egypt"
        ],
        "answer": "Trobriand Islands"
    },
    {
        "id": 66,
        "question": "A patrilocal residence pattern means:",
        "options": [
            "Living with the bride's family",
            "Living with the husband's family",
            "Living independently",
            "Moving frequently"
        ],
        "answer": "Living with the husband's family"
    },
    {
        "id": 67,
        "question": "A dowry is:",
        "options": [
            "Bride's family giving wealth to groom's family",
            "Groom kidnapping bride",
            "Group marriage",
            "Bridewealth given to bride"
        ],
        "answer": "Bride's family giving wealth to groom's family"
    },
    {
        "id": 68,
        "question": "Cultural diffusion is:",
        "options": [
            "Loss of culture",
            "Borrowing and spreading cultural traits",
            "Cultural evolution",
            "Cultural relativism"
        ],
        "answer": "Borrowing and spreading cultural traits"
    },
    {
        "id": 69,
        "question": "Acculturation occurs when:",
        "options": [
            "Cultures remain isolated",
            "One culture dominates and transforms another",
            "Evolution occurs",
            "Cultures unify politically"
        ],
        "answer": "One culture dominates and transforms another"
    },
    {
        "id": 70,
        "question": "Applied anthropology can be used in:",
        "options": [
            "Archaeology only",
            "Medical care, education, and development",
            "Only museums",
            "Art galleries"
        ],
        "answer": "Medical care, education, and development"
    },
    {
        "id": 71,
        "question": "Which type of society is most egalitarian?",
        "options": [
            "States",
            "Foraging bands",
            "Chiefdoms",
            "Kingdoms"
        ],
        "answer": "Foraging bands"
    },
    {
        "id": 72,
        "question": "Human variation in skin color is due to:",
        "options": [
            "Culture",
            "Latitude and sunlight exposure",
            "Blood type",
            "Race"
        ],
        "answer": "Latitude and sunlight exposure"
    },
    {
        "id": 73,
        "question": "Archaeologists use flotation to:",
        "options": [
            "Dig holes",
            "Date fossils",
            "Separate small remains from soil",
            "Create maps"
        ],
        "answer": "Separate small remains from soil"
    },
    {
        "id": 74,
        "question": "A symbol is:",
        "options": [
            "Only written language",
            "An object or act with cultural meaning",
            "Limited to speech",
            "Always religious"
        ],
        "answer": "An object or act with cultural meaning"
    },
    {
        "id": 75,
        "question": "Informed consent in fieldwork ensures:",
        "options": [
            "Legal immunity",
            "Language proficiency",
            "Ethical research practices",
            "Culture change"
        ],
        "answer": "Ethical research practices"
    },
    {
        "id": 76,
        "question": "The study of non-human primates is called:",
        "options": [
            "Archaeobotany",
            "Zooarchaeology",
            "Primatology",
            "Ethnolinguistics"
        ],
        "answer": "Primatology"
    },
    {
        "id": 77,
        "question": "An example of a rite of intensification is:",
        "options": [
            "Graduation",
            "Funeral",
            "Harvest festival",
            "Birth ceremony"
        ],
        "answer": "Harvest festival"
    },
    {
        "id": 78,
        "question": "Urban anthropology studies:",
        "options": [
            "Rural farming",
            "Ancient foraging",
            "City life and urban problems",
            "Forest tribes"
        ],
        "answer": "City life and urban problems"
    },
    {
        "id": 79,
        "question": "Which is an ethnographic technique?",
        "options": [
            "Excavation",
            "Census",
            "Participant observation",
            "Radiocarbon dating"
        ],
        "answer": "Participant observation"
    },
    {
        "id": 80,
        "question": "The idea that culture is adaptive means:",
        "options": [
            "Cultures never change",
            "Cultures respond to environments",
            "Culture is static",
            "People resist change"
        ],
        "answer": "Cultures respond to environments"
    },
    {
        "id": 81,
        "question": "Which society is known for potlatch ceremonies?",
        "options": [
            "Trobrianders",
            "Navajo",
            "Kwakwaka'wakw",
            "Zulu"
        ],
        "answer": "Kwakwaka'wakw"
    },
    {
        "id": 82,
        "question": "A 'band' society is typically:",
        "options": [
            "Industrial",
            "Agricultural",
            "Foraging and egalitarian",
            "Urban"
        ],
        "answer": "Foraging and egalitarian"
    },
    {
        "id": 83,
        "question": "Animism is:",
        "options": [
            "Worship of a single god",
            "Belief that all objects have spirit",
            "Science-based religion",
            "A ritual dance"
        ],
        "answer": "Belief that all objects have spirit"
    },
    {
        "id": 84,
        "question": "Anthropology became formalized in the:",
        "options": [
            "16th century",
            "18th century",
            "19th century",
            "21st century"
        ],
        "answer": "19th century"
    },
    {
        "id": 85,
        "question": "Which term refers to bodily decoration or modification?",
        "options": [
            "Ethnocentrism",
            "Enculturation",
            "Body art",
            "Endogamy"
        ],
        "answer": "Body art"
    },
    {
        "id": 86,
        "question": "Medical anthropology studies:",
        "options": [
            "Hospitals",
            "Traditional healing and health practices",
            "Western medicine only",
            "Biology"
        ],
        "answer": "Traditional healing and health practices"
    },
    {
        "id": 87,
        "question": "An example of reciprocity is:",
        "options": [
            "Paying taxes",
            "Giving and receiving gifts",
            "A legal contract",
            "Warfare"
        ],
        "answer": "Giving and receiving gifts"
    },
    {
        "id": 88,
        "question": "Generalized reciprocity is common in:",
        "options": [
            "Market economies",
            "Foraging societies",
            "Modern corporations",
            "States"
        ],
        "answer": "Foraging societies"
    },
    {
        "id": 89,
        "question": "Cross-cultural studies involve:",
        "options": [
            "Studying only local groups",
            "Comparing multiple societies",
            "Focusing on one site",
            "Avoiding comparisons"
        ],
        "answer": "Comparing multiple societies"
    },
    {
        "id": 90,
        "question": "Culture shock is:",
        "options": [
            "An illness",
            "Excitement about other cultures",
            "Disorientation from exposure to unfamiliar culture",
            "Learning a new language"
        ],
        "answer": "Disorientation from exposure to unfamiliar culture"
    },
    {
        "id": 91,
        "question": "Ethnocide refers to:",
        "options": [
            "Mass killing",
            "Destruction of a people's culture",
            "Genetic cloning",
            "Tribal unification"
        ],
        "answer": "Destruction of a people's culture"
    },
    {
        "id": 92,
        "question": "Bridewealth is:",
        "options": [
            "Payment made by bride's family",
            "Gifts from groom's family to bride's",
            "A ritual dance",
            "Divorce payment"
        ],
        "answer": "Gifts from groom's family to bride's"
    },
    {
        "id": 93,
        "question": "The oldest stone tools belong to which tradition?",
        "options": [
            "Mousterian",
            "Acheulean",
            "Oldowan",
            "Levallois"
        ],
        "answer": "Oldowan"
    },
    {
        "id": 94,
        "question": "A hypothesis is:",
        "options": [
            "Proven theory",
            "Educated guess or prediction",
            "Statistical formula",
            "A law"
        ],
        "answer": "Educated guess or prediction"
    },
    {
        "id": 95,
        "question": "Cultural materialism emphasizes:",
        "options": [
            "Beliefs and values only",
            "Material conditions of life",
            "Myths and rituals",
            "Language evolution"
        ],
        "answer": "Material conditions of life"
    },
    {
        "id": 96,
        "question": "Who introduced the concept of 'thick description'?",
        "options": [
            "Clifford Geertz",
            "Marvin Harris",
            "Bronisław Malinowski",
            "Leslie White"
        ],
        "answer": "Clifford Geertz"
    },
    {
        "id": 97,
        "question": "Who are the San people?",
        "options": [
            "Arctic hunters",
            "Foragers of Southern Africa",
            "Warriors of Central America",
            "Aboriginal farmers"
        ],
        "answer": "Foragers of Southern Africa"
    },
    {
        "id": 98,
        "question": "Which of these is a characteristic of Homo erectus?",
        "options": [
            "Small brain size",
            "Use of fire",
            "Lack of tools",
            "Tree-dwelling lifestyle"
        ],
        "answer": "Use of fire"
    },
    {
        "id": 99,
        "question": "An emic perspective focuses on:",
        "options": [
            "Outsider's view",
            "Historical analysis",
            "Insider's view and meaning",
            "Cross-species comparison"
        ],
        "answer": "Insider's view and meaning"
    },
    {
        "id": 100,
        "question": "The term 'ethnography' refers to:",
        "options": [
            "Theoretical discussion",
            "Fieldwork-based description of a culture",
            "Laboratory testing",
            "Genetic mapping"
        ],
        "answer": "Fieldwork-based description of a culture"
    },
    {
        "id": 101,
        "question": "Cultural relativism encourages:",
        "options": [
            "Judging other cultures",
            "Belief in universal laws",
            "Understanding cultures in their own context",
            "Spreading one's values"
        ],
        "answer": "Understanding cultures in their own context"
    },
    {
        "id": 102,
        "question": "Endogamy means marrying:",
        "options": [
            "Outside your group",
            "Within your group",
            "Across continents",
            "Based on wealth only"
        ],
        "answer": "Within your group"
    },
    {
        "id": 103,
        "question": "An anthropologist who studies fossils is called a:",
        "options": [
            "Cultural anthropologist",
            "Sociologist",
            "Paleoanthropologist",
            "Criminologist"
        ],
        "answer": "Paleoanthropologist"
    },
    {
        "id": 104,
        "question": "Who introduced the concept of 'function' in social institutions?",
        "options": [
            "Boas",
            "Mead",
            "Radcliffe-Brown",
            "Geertz"
        ],
        "answer": "Radcliffe-Brown"
    },
    {
        "id": 105,
        "question": "Stratigraphy is a method used in:",
        "options": [
            "Linguistics",
            "Excavation",
            "Economics",
            "Kinship analysis"
        ],
        "answer": "Excavation"
    },
    {
        "id": 106,
        "question": "The incest taboo is considered:",
        "options": [
            "Rare",
            "Universal in human societies",
            "Unimportant",
            "Encouraged"
        ],
        "answer": "Universal in human societies"
    },
    {
        "id": 107,
        "question": "A nuclear family consists of:",
        "options": [
            "Parents and children",
            "Grandparents only",
            "Extended relatives",
            "Tribe members"
        ],
        "answer": "Parents and children"
    },
    {
        "id": 108,
        "question": "Ethnology involves:",
        "options": [
            "Lab testing",
            "Fossil analysis",
            "Comparing different cultures",
            "Myth interpretation only"
        ],
        "answer": "Comparing different cultures"
    },
    {
        "id": 109,
        "question": "The concept of prestige in society relates to:",
        "options": [
            "Age only",
            "Honor and social respect",
            "Ownership of land",
            "Intelligence level"
        ],
        "answer": "Honor and social respect"
    },
    {
        "id": 110,
        "question": "Redistribution is common in:",
        "options": [
            "Chiefdoms",
            "Market economies",
            "Bands",
            "States"
        ],
        "answer": "Chiefdoms"
    },
    {
        "id": 111,
        "question": "Monogamy is the practice of:",
        "options": [
            "Marrying many",
            "Marrying once",
            "Marrying one spouse at a time",
            "Not marrying at all"
        ],
        "answer": "Marrying one spouse at a time"
    },
    {
        "id": 112,
        "question": "Culture is transmitted mainly through:",
        "options": [
            "DNA",
            "Language",
            "Magic",
            "Environment"
        ],
        "answer": "Language"
    },
    {
        "id": 113,
        "question": "Who is considered the founder of ethnographic fieldwork?",
        "options": [
            "Tylor",
            "Darwin",
            "Malinowski",
            "Mead"
        ],
        "answer": "Malinowski"
    },
    {
        "id": 114,
        "question": "Biological anthropology is also known as:",
        "options": [
            "Cultural anthropology",
            "Social anthropology",
            "Physical anthropology",
            "Medical anthropology"
        ],
        "answer": "Physical anthropology"
    },
    {
        "id": 115,
        "question": "The Holistic perspective in anthropology means:",
        "options": [
            "Studying only one aspect",
            "Fragmented analysis",
            "Integrating all aspects of human life",
            "Ignoring the environment"
        ],
        "answer": "Integrating all aspects of human life"
    },
    {
        "id": 116,
        "question": "Which primate is closest genetically to humans?",
        "options": [
            "Gorilla",
            "Orangutan",
            "Gibbon",
            "Chimpanzee"
        ],
        "answer": "Chimpanzee"
    },
    {
        "id": 117,
        "question": "The concept of achieved status refers to:",
        "options": [
            "Inherited roles",
            "Positions earned through merit",
            "Status by family name",
            "Fixed roles"
        ],
        "answer": "Positions earned through merit"
    },
    {
        "id": 118,
        "question": "Horticulture is characterized by:",
        "options": [
            "Industrial plowing",
            "Small-scale gardening with hand tools",
            "Hunting only",
            "Desert irrigation"
        ],
        "answer": "Small-scale gardening with hand tools"
    },
    {
        "id": 119,
        "question": "Enculturation is the process of:",
        "options": [
            "Losing one's culture",
            "Acquiring one's culture",
            "Migration",
            "Imitation only"
        ],
        "answer": "Acquiring one's culture"
    },
    {
        "id": 120,
        "question": "Ethnocentrism is:",
        "options": [
            "Cultural tolerance",
            "Judging others by one's own culture",
            "Respecting all practices",
            "Avoiding cultural interaction"
        ],
        "answer": "Judging others by one's own culture"
    },
    {
        "id": 121,
        "question": "Which method is most used in ethnographic research?",
        "options": [
            "Simulation",
            "Participant observation",
            "Telepathy",
            "Statistics only"
        ],
        "answer": "Participant observation"
    },
    {
        "id": 122,
        "question": "Who was the first to define culture scientifically?",
        "options": [
            "Edward Tylor",
            "Claude Lévi-Strauss",
            "Emile Durkheim",
            "B. Malinowski"
        ],
        "answer": "Edward Tylor"
    },
    {
        "id": 123,
        "question": "Who developed structuralism?",
        "options": [
            "Franz Boas",
            "Claude Lévi-Strauss",
            "Tylor",
            "Morgan"
        ],
        "answer": "Claude Lévi-Strauss"
    },
    {
        "id": 124,
        "question": "A social norm is:",
        "options": [
            "Random behavior",
            "Expected social behavior",
            "Unacceptable behavior",
            "Illegal acts"
        ],
        "answer": "Expected social behavior"
    },
    {
        "id": 125,
        "question": "The term 'ethnos' refers to:",
        "options": [
            "Religion",
            "Nation or ethnic group",
            "Food",
            "Clothing"
        ],
        "answer": "Nation or ethnic group"
    },
    {
        "id": 126,
        "question": "The earliest anthropological studies were:",
        "options": [
            "Armchair studies",
            "Based on fieldwork",
            "Digital studies",
            "Lab-only"
        ],
        "answer": "Armchair studies"
    },
    {
        "id": 127,
        "question": "Bride service means:",
        "options": [
            "Working for the bride's family",
            "Serving drinks",
            "Educating bride",
            "Protecting inheritance"
        ],
        "answer": "Working for the bride's family"
    },
    {
        "id": 128,
        "question": "The study of human languages is known as:",
        "options": [
            "Ethnography",
            "Paleontology",
            "Linguistic anthropology",
            "Demography"
        ],
        "answer": "Linguistic anthropology"
    },
    {
        "id": 129,
        "question": "Kinship charts are also called:",
        "options": [
            "Gene flow diagrams",
            "Phylogenetic trees",
            "Kin diagrams",
            "Ritual cycles"
        ],
        "answer": "Kin diagrams"
    },
    {
        "id": 130,
        "question": "A taboo is:",
        "options": [
            "An acceptable tradition",
            "Forbidden social practice",
            "Global law",
            "Required duty"
        ],
        "answer": "Forbidden social practice"
    },
    {
        "id": 131,
        "question": "Cultural lag occurs when:",
        "options": [
            "Culture is too fast",
            "Technology advances faster than culture",
            "Religion disappears",
            "Cultures merge"
        ],
        "answer": "Technology advances faster than culture"
    },
    {
        "id": 132,
        "question": "Shamanism involves:",
        "options": [
            "Political leadership",
            "Spiritual healing and rituals",
            "Farming methods",
            "Kinship mapping"
        ],
        "answer": "Spiritual healing and rituals"
    },
    {
        "id": 133,
        "question": "Segmentary lineage system is based on:",
        "options": [
            "Classes",
            "Age",
            "Kinship and loyalty",
            "Education"
        ],
        "answer": "Kinship and loyalty"
    },
    {
        "id": 134,
        "question": "Dowry violence is often associated with:",
        "options": [
            "Europe",
            "India",
            "Brazil",
            "Kenya"
        ],
        "answer": "India"
    },
    {
        "id": 135,
        "question": "The term 'forager' refers to:",
        "options": [
            "Industrial worker",
            "Hunter-gatherer",
            "Soldier",
            "Nomadic warrior"
        ],
        "answer": "Hunter-gatherer"
    },
    {
        "id": 136,
        "question": "Anthropology developed as a distinct field in:",
        "options": [
            "Asia",
            "North America and Europe",
            "Australia",
            "Russia"
        ],
        "answer": "North America and Europe"
    },
    {
        "id": 137,
        "question": "Bilateral descent traces lineage through:",
        "options": [
            "Father's side only",
            "Both father's and mother's sides",
            "Mother's side only",
            "Grandparents"
        ],
        "answer": "Both father's and mother's sides"
    },
    {
        "id": 138,
        "question": "Cultural hybridization is the:",
        "options": [
            "Mixing of global and local cultural elements",
            "Loss of culture",
            "Cultural extinction",
            "Religious conflict"
        ],
        "answer": "Mixing of global and local cultural elements"
    },
    {
        "id": 139,
        "question": "The concept of liminality was introduced by:",
        "options": [
            "Franz Boas",
            "Victor Turner",
            "Tylor",
            "Margaret Mead"
        ],
        "answer": "Victor Turner"
    },
    {
        "id": 140,
        "question": "Applied anthropology works in areas such as:",
        "options": [
            "Medicine, education, and law",
            "Only ritual",
            "Museums only",
            "Armchair theorizing"
        ],
        "answer": "Medicine, education, and law"
    }
];