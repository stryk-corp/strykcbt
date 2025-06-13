const questions = [
     {
      "id": 1,
      "question": "Who coined the term 'sociology' and is considered its founder?",
      "options": [
        "Karl Marx",
        "Max Weber",
        "Auguste Comte",
        "Emile Durkheim"
      ],
      "answer": "Auguste Comte"
    },
    {
      "id": 2,
      "question": "Which theoretical paradigm views society as a complex system with interdependent parts working together?",
      "options": [
        "Conflict theory",
        "Symbolic interactionism",
        "Structural-functionalism",
        "Feminist theory"
      ],
      "answer": "Structural-functionalism"
    },
    {
      "id": 3,
      "question": "What concept did Herbert Spencer apply from biology to society?",
      "options": [
        "Class conflict",
        "Social Darwinism",
        "Labeling theory",
        "Cultural lag"
      ],
      "answer": "Social Darwinism"
    },
    {
      "id": 4,
      "question": "Which sociologist emphasized class conflict as the key to human history?",
      "options": [
        "Talcott Parsons",
        "Robert Merton",
        "Karl Marx",
        "George Herbert Mead"
      ],
      "answer": "Karl Marx"
    },
    {
      "id": 5,
      "question": "What did Emile Durkheim's study of suicide rates reveal about social factors?",
      "options": [
        "Economic status determines suicide rates",
        "Weak community ties increase suicide likelihood",
        "Religion has no impact on suicide",
        "Suicide is purely psychological"
      ],
      "answer": "Weak community ties increase suicide likelihood"
    },
    {
      "id": 6,
      "question": "What is the sociological perspective that sees general patterns in particular people's behavior?",
      "options": [
        "Seeing the strange in the familiar",
        "Seeing the general in the particular",
        "Seeing the micro in the macro",
        "Seeing the subjective in the objective"
      ],
      "answer": "Seeing the general in the particular"
    },
    {
      "id": 7,
      "question": "Which concept refers to rules and expectations by which a society guides behavior?",
      "options": [
        "Values",
        "Beliefs",
        "Norms",
        "Symbols"
      ],
      "answer": "Norms"
    },
    {
      "id": 8,
      "question": "What term describes the recognized and intended consequences of a social pattern?",
      "options": [
        "Latent functions",
        "Manifest functions",
        "Dysfunctions",
        "Anomie"
      ],
      "answer": "Manifest functions"
    },
    {
      "id": 9,
      "question": "Which type of social group commands a member's esteem and loyalty?",
      "options": [
        "Out-group",
        "Reference group",
        "In-group",
        "Secondary group"
      ],
      "answer": "In-group"
    },
    {
      "id": 10,
      "question": "What is the dynamic aspect of a social status called?",
      "options": [
        "Role set",
        "Role",
        "Status set",
        "Master status"
      ],
      "answer": "Role"
    },
    {
      "id": 11,
      "question": "Which characteristic is NOT part of Weber's ideal-type bureaucracy?",
      "options": [
        "Technical competence",
        "Hierarchy of offices",
        "Personal favoritism",
        "Written rules"
      ],
      "answer": "Personal favoritism"
    },
    {
      "id": 12,
      "question": "What term describes the lifelong process of learning culture?",
      "options": [
        "Acculturation",
        "Socialization",
        "Assimilation",
        "Enculturation"
      ],
      "answer": "Socialization"
    },
    {
      "id": 13,
      "question": "According to Freud, which part of personality represents cultural values?",
      "options": [
        "Id",
        "Ego",
        "Superego",
        "Libido"
      ],
      "answer": "Superego"
    },
    {
      "id": 14,
      "question": "What did George Herbert Mead call the active, spontaneous side of self?",
      "options": [
        "Me",
        "I",
        "Generalized other",
        "Significant other"
      ],
      "answer": "I"
    },
    {
      "id": 15,
      "question": "Which agent of socialization is most influential in early childhood?",
      "options": [
        "School",
        "Peer group",
        "Family",
        "Mass media"
      ],
      "answer": "Family"
    },
    {
      "id": 16,
      "question": "What term describes the violation of cultural norms?",
      "options": [
        "Crime",
        "Deviance",
        "Stigma",
        "Anomie"
      ],
      "answer": "Deviance"
    },
    {
      "id": 17,
      "question": "Which theory states that deviance results from how others respond to behavior?",
      "options": [
        "Strain theory",
        "Control theory",
        "Labeling theory",
        "Differential association"
      ],
      "answer": "Labeling theory"
    },
    {
      "id": 18,
      "question": "What are the four principles of social stratification?",
      "options": [
        "Universal, variable, persistent, biological",
        "Cultural, economic, political, religious",
        "Characteristic of society, persistent, universal, involves beliefs",
        "Economic, social, political, psychological"
      ],
      "answer": "Characteristic of society, persistent, universal, involves beliefs"
    },
    {
      "id": 19,
      "question": "Which system allows little or no social mobility?",
      "options": [
        "Open system",
        "Meritocracy",
        "Closed system",
        "Class system"
      ],
      "answer": "Closed system"
    },
    {
      "id": 20,
      "question": "What did Karl Marx call the working class?",
      "options": [
        "Bourgeoisie",
        "Petite bourgeoisie",
        "Proletariat",
        "Aristocracy"
      ],
      "answer": "Proletariat"
    },
    {
      "id": 21,
      "question": "Which of Weber's stratification dimensions includes social honor?",
      "options": [
        "Class",
        "Status",
        "Power",
        "Wealth"
      ],
      "answer": "Status"
    },
    {
      "id": 22,
      "question": "What term describes moving between social classes?",
      "options": [
        "Social promotion",
        "Social mobility",
        "Status inconsistency",
        "Class consciousness"
      ],
      "answer": "Social mobility"
    },
    {
      "id": 23,
      "question": "Which family type consists of parents and children only?",
      "options": [
        "Extended",
        "Nuclear",
        "Blended",
        "Compound"
      ],
      "answer": "Nuclear"
    },
    {
      "id": 24,
      "question": "What is the practice of marrying within one's social group called?",
      "options": [
        "Exogamy",
        "Endogamy",
        "Polygamy",
        "Homogamy"
      ],
      "answer": "Endogamy"
    },
    {
      "id": 25,
      "question": "Which perspective views gender inequality as rooted in capitalism?",
      "options": [
        "Functionalist",
        "Conflict",
        "Symbolic interactionist",
        "Feminist"
      ],
      "answer": "Conflict"
    },
    {
      "id": 26,
      "question": "What term describes society's unequal distribution of resources between genders?",
      "options": [
        "Gender roles",
        "Gender stratification",
        "Sexism",
        "Patriarchy"
      ],
      "answer": "Gender stratification"
    },
    {
      "id": 27,
      "question": "Which education function involves transmitting cultural values?",
      "options": [
        "Socialization",
        "Cultural innovation",
        "Social placement",
        "Social control"
      ],
      "answer": "Socialization"
    },
    {
      "id": 28,
      "question": "What concept refers to judging another culture by one's own standards?",
      "options": [
        "Cultural relativism",
        "Ethnocentrism",
        "Xenocentrism",
        "Multiculturalism"
      ],
      "answer": "Ethnocentrism"
    },
    {
      "id": 29,
      "question": "Which theoretical approach sees society as an arena of inequality?",
      "options": [
        "Structural-functionalism",
        "Social-conflict",
        "Symbolic-interaction",
        "Social-exchange"
      ],
      "answer": "Social-conflict"
    },
    {
      "id": 30,
      "question": "What term describes the unrecognized consequences of a social pattern?",
      "options": [
        "Manifest functions",
        "Latent functions",
        "Dysfunctions",
        "Anomie"
      ],
      "answer": "Latent functions"
    },
    {
      "id": 31,
      "question": "Which sociologist introduced the concept of the 'looking-glass self'?",
      "options": [
        "George Herbert Mead",
        "Charles Horton Cooley",
        "Erving Goffman",
        "Talcott Parsons"
      ],
      "answer": "Charles Horton Cooley"
    },
    {
      "id": 32,
      "question": "What is the term for attributes that discredit a person's social identity?",
      "options": [
        "Deviance",
        "Stigma",
        "Label",
        "Stereotype"
      ],
      "answer": "Stigma"
    },
    {
      "id": 33,
      "question": "Which type of social mobility involves movement within one's lifetime?",
      "options": [
        "Intergenerational",
        "Intragenerational",
        "Vertical",
        "Horizontal"
      ],
      "answer": "Intragenerational"
    },
    {
      "id": 34,
      "question": "What term describes a family that includes relatives beyond parents and children?",
      "options": [
        "Nuclear",
        "Extended",
        "Blended",
        "Compound"
      ],
      "answer": "Extended"
    },
    {
      "id": 35,
      "question": "Which feminist principle advocates for women's control over reproduction?",
      "options": [
        "Gender equality",
        "Sexual autonomy",
        "Economic independence",
        "Political representation"
      ],
      "answer": "Sexual autonomy"
    },
    {
      "id": 36,
      "question": "What is the systematic study of human society called?",
      "options": [
        "Psychology",
        "Anthropology",
        "Sociology",
        "Political science"
      ],
      "answer": "Sociology"
    },
    {
      "id": 37,
      "question": "Which early sociologist compared society to the human body?",
      "options": [
        "Auguste Comte",
        "Herbert Spencer",
        "Karl Marx",
        "Max Weber"
      ],
      "answer": "Herbert Spencer"
    },
    {
      "id": 38,
      "question": "What term describes the experience of isolation due to weak social ties?",
      "options": [
        "Anomie",
        "Alienation",
        "Stigma",
        "Deviance"
      ],
      "answer": "Anomie"
    },
    {
      "id": 39,
      "question": "Which theoretical approach focuses on face-to-face social interaction?",
      "options": [
        "Structural-functionalism",
        "Conflict theory",
        "Symbolic interactionism",
        "Social exchange theory"
      ],
      "answer": "Symbolic interactionism"
    },
    {
      "id": 40,
      "question": "What is the term for all statuses a person holds at a given time?",
      "options": [
        "Role set",
        "Status set",
        "Master status",
        "Ascribed status"
      ],
      "answer": "Status set"
    },
    {
      "id": 41,
      "question": "Which concept refers to tension among roles connected to a single status?",
      "options": [
        "Role conflict",
        "Role strain",
        "Role exit",
        "Role performance"
      ],
      "answer": "Role strain"
    },
    {
      "id": 42,
      "question": "What term describes the process of creatively shaping reality through interaction?",
      "options": [
        "Social construction of reality",
        "Definition of the situation",
        "Impression management",
        "Dramaturgical analysis"
      ],
      "answer": "Social construction of reality"
    },
    {
      "id": 43,
      "question": "Which type of formal organization pays members to perform jobs?",
      "options": [
        "Normative",
        "Coercive",
        "Utilitarian",
        "Voluntary"
      ],
      "answer": "Utilitarian"
    },
    {
      "id": 44,
      "question": "What is the term for bureaucratic rules taking precedence over goals?",
      "options": [
        "Alienation",
        "Ritualism",
        "Inertia",
        "Oligarchy"
      ],
      "answer": "Ritualism"
    },
    {
      "id": 45,
      "question": "Which concept refers to people's way of life, including material and nonmaterial elements?",
      "options": [
        "Society",
        "Culture",
        "Social structure",
        "Institution"
      ],
      "answer": "Culture"
    },
    {
      "id": 46,
      "question": "What term describes norms that have great moral significance?",
      "options": [
        "Folkways",
        "Mores",
        "Laws",
        "Taboos"
      ],
      "answer": "Mores"
    },
    {
      "id": 47,
      "question": "Which concept refers to cultural patterns that distinguish a society's elite?",
      "options": [
        "Popular culture",
        "High culture",
        "Subculture",
        "Counterculture"
      ],
      "answer": "High culture"
    },
    {
      "id": 48,
      "question": "What is the term for judging a culture by its own standards?",
      "options": [
        "Ethnocentrism",
        "Cultural relativism",
        "Xenocentrism",
        "Multiculturalism"
      ],
      "answer": "Cultural relativism"
    },
    {
      "id": 49,
      "question": "Which concept refers to the gap when material culture changes faster than nonmaterial culture?",
      "options": [
        "Cultural lag",
        "Cultural shock",
        "Cultural diffusion",
        "Cultural leveling"
      ],
      "answer": "Cultural lag"
    },
    {
      "id": 50,
      "question": "What term describes the spread of cultural traits from one society to another?",
      "options": [
        "Invention",
        "Discovery",
        "Diffusion",
        "Innovation"
      ],
      "answer": "Diffusion"
    },
    {
      "id": 51,
      "question": "Which stage of socialization involves learning to take the role of multiple others simultaneously?",
      "options": [
        "Play stage",
        "Game stage",
        "Generalized other stage",
        "Imitation stage"
      ],
      "answer": "Game stage"
    },
    {
      "id": 52,
      "question": "What concept refers to learning that helps achieve a desired position?",
      "options": [
        "Primary socialization",
        "Anticipatory socialization",
        "Resocialization",
        "Reverse socialization"
      ],
      "answer": "Anticipatory socialization"
    },
    {
      "id": 53,
      "question": "Which concept describes a setting where people are isolated from society?",
      "options": [
        "Bureaucracy",
        "Total institution",
        "Formal organization",
        "Reference group"
      ],
      "answer": "Total institution"
    },
    {
      "id": 54,
      "question": "What term describes behavior that violates laws?",
      "options": [
        "Deviance",
        "Crime",
        "Stigma",
        "Anomie"
      ],
      "answer": "Crime"
    },
    {
      "id": 55,
      "question": "Which theory explains deviance as a learned behavior through social interaction?",
      "options": [
        "Labeling theory",
        "Control theory",
        "Differential association theory",
        "Strain theory"
      ],
      "answer": "Differential association theory"
    },
    {
      "id": 56,
      "question": "What concept refers to crimes committed by people of high social status?",
      "options": [
        "Organized crime",
        "White-collar crime",
        "Victimless crime",
        "Hate crime"
      ],
      "answer": "White-collar crime"
    },
    {
      "id": 57,
      "question": "Which concept refers to a system by which society ranks categories of people?",
      "options": [
        "Social mobility",
        "Social stratification",
        "Social class",
        "Social status"
      ],
      "answer": "Social stratification"
    },
    {
      "id": 58,
      "question": "What term describes social position based on personal ability?",
      "options": [
        "Ascribed status",
        "Achieved status",
        "Master status",
        "Role status"
      ],
      "answer": "Achieved status"
    },
    {
      "id": 59,
      "question": "Which concept refers to cultural patterns that oppose dominant culture?",
      "options": [
        "Subculture",
        "Counterculture",
        "High culture",
        "Popular culture"
      ],
      "answer": "Counterculture"
    },
    {
      "id": 60,
      "question": "What is the term for marriage between one woman and multiple men?",
      "options": [
        "Polygyny",
        "Polyandry",
        "Monogamy",
        "Group marriage"
      ],
      "answer": "Polyandry"
    },
    {
      "id": 61,
      "question": "Which family function involves regulating sexual activity?",
      "options": [
        "Reproduction",
        "Socialization",
        "Social placement",
        "Economic support"
      ],
      "answer": "Reproduction"
    },
    {
      "id": 62,
      "question": "What term describes the trend toward smaller families in industrial societies?",
      "options": [
        "Fertility decline",
        "Demographic transition",
        "Population implosion",
        "Family nucleation"
      ],
      "answer": "Fertility decline"
    },
    {
      "id": 63,
      "question": "Which concept refers to biological differences between males and females?",
      "options": [
        "Gender",
        "Sex",
        "Sexuality",
        "Gender identity"
      ],
      "answer": "Sex"
    },
    {
      "id": 64,
      "question": "What is the term for society's unequal distribution of resources between genders?",
      "options": [
        "Sexism",
        "Patriarchy",
        "Gender stratification",
        "Gender roles"
      ],
      "answer": "Gender stratification"
    },
    {
      "id": 65,
      "question": "Which feminist principle advocates for eliminating gender stratification?",
      "options": [
        "Expanding human choice",
        "Promoting sexual autonomy",
        "Eliminating gender stratification",
        "Existing sexual violence"
      ],
      "answer": "Eliminating gender stratification"
    },
    {
      "id": 66,
      "question": "What term describes the invisible barrier preventing women from top positions?",
      "options": [
        "Gender gap",
        "Glass ceiling",
        "Sticky floor",
        "Mommy track"
      ],
      "answer": "Glass ceiling"
    },
    {
      "id": 67,
      "question": "Which education function involves sorting students into social positions?",
      "options": [
        "Socialization",
        "Cultural innovation",
        "Social placement",
        "Social control"
      ],
      "answer": "Social placement"
    },
    {
      "id": 68,
      "question": "What is the term for tracking students into different educational programs?",
      "options": [
        "Streaming",
        "Mainlining",
        "Tracking",
        "Sorting"
      ],
      "answer": "Tracking"
    },
    {
      "id": 69,
      "question": "Which concept refers to the social institution that transmits knowledge?",
      "options": [
        "Family",
        "Religion",
        "Education",
        "Government"
      ],
      "answer": "Education"
    },
    {
      "id": 70,
      "question": "What term describes the unintended lessons schools teach?",
      "options": [
        "Manifest curriculum",
        "Latent curriculum",
        "Hidden curriculum",
        "Informal curriculum"
      ],
      "answer": "Hidden curriculum"
    },
    {
      "id": 71,
      "question": "Which theoretical approach sees education as reproducing social inequality?",
      "options": [
        "Functionalist",
        "Conflict",
        "Symbolic interactionist",
        "Feminist"
      ],
      "answer": "Conflict"
    },
    {
      "id": 72,
      "question": "What concept refers to the scientific study of population?",
      "options": [
        "Demography",
        "Epidemiology",
        "Ecology",
        "Geography"
      ],
      "answer": "Demography"
    },
    {
      "id": 73,
      "question": "Which term describes the number of live births per 1,000 people?",
      "options": [
        "Fertility rate",
        "Birth rate",
        "Mortality rate",
        "Growth rate"
      ],
      "answer": "Birth rate"
    },
    {
      "id": 74,
      "question": "What is the term for movement of people into a territory?",
      "options": [
        "Emigration",
        "Immigration",
        "Migration",
        "Urbanization"
      ],
      "answer": "Immigration"
    },
    {
      "id": 75,
      "question": "Which theory explains population growth in stages?",
      "options": [
        "Malthusian theory",
        "Demographic transition theory",
        "Zero population growth",
        "Carrying capacity theory"
      ],
      "answer": "Demographic transition theory"
    },
    {
      "id": 76,
      "question": "What term describes the physical and social environment?",
      "options": [
        "Ecosystem",
        "Biosphere",
        "Habitat",
        "Environment"
      ],
      "answer": "Environment"
    },
    {
      "id": 77,
      "question": "Which concept refers to long-term shifts in cultural patterns?",
      "options": [
        "Social movement",
        "Social change",
        "Cultural drift",
        "Historical transition"
      ],
      "answer": "Social change"
    },
    {
      "id": 78,
      "question": "What term describes resistance to technology due to cultural values?",
      "options": [
        "Cultural lag",
        "Cultural resistance",
        "Technophobia",
        "Neo-Luddism"
      ],
      "answer": "Cultural lag"
    },
    {
      "id": 79,
      "question": "Which theoretical approach sees society as orderly and stable?",
      "options": [
        "Conflict theory",
        "Structural-functionalism",
        "Symbolic interactionism",
        "Feminist theory"
      ],
      "answer": "Structural-functionalism"
    },
    {
      "id": 80,
      "question": "What concept refers to a status that overshadows others?",
      "options": [
        "Achieved status",
        "Ascribed status",
        "Master status",
        "Role status"
      ],
      "answer": "Master status"
    },
    {
      "id": 81,
      "question": "Which concept refers to tension among roles connected to different statuses?",
      "options": [
        "Role conflict",
        "Role strain",
        "Role exit",
        "Role performance"
      ],
      "answer": "Role conflict"
    },
    {
      "id": 82,
      "question": "What term describes the process of leaving a role central to one's identity?",
      "options": [
        "Role conflict",
        "Role strain",
        "Role exit",
        "Role reversal"
      ],
      "answer": "Role exit"
    },
    {
      "id": 83,
      "question": "Which concept refers to social groups with weak ties?",
      "options": [
        "Primary groups",
        "Secondary groups",
        "Reference groups",
        "Networks"
      ],
      "answer": "Networks"
    },
    {
      "id": 84,
      "question": "What is the term for groups used as standards for self-evaluation?",
      "options": [
        "In-groups",
        "Out-groups",
        "Reference groups",
        "Peer groups"
      ],
      "answer": "Reference groups"
    },
    {
      "id": 85,
      "question": "Which concept refers to exaggerated descriptions applied to categories?",
      "options": [
        "Labels",
        "Stereotypes",
        "Stigmas",
        "Prejudices"
      ],
      "answer": "Stereotypes"
    },
    {
      "id": 86,
      "question": "What term describes how closely people are willing to interact with others?",
      "options": [
        "Social distance",
        "Personal space",
        "Interaction zone",
        "Proxemics"
      ],
      "answer": "Social distance"
    },
    {
      "id": 87,
      "question": "Which type of organization has involuntary membership?",
      "options": [
        "Utilitarian",
        "Normative",
        "Coercive",
        "Voluntary"
      ],
      "answer": "Coercive"
    },
    {
      "id": 88,
      "question": "What is the term for bureaucratic expansion beyond original purpose?",
      "options": [
        "Alienation",
        "Ritualism",
        "Inertia",
        "Oligarchy"
      ],
      "answer": "Inertia"
    },
    {
      "id": 89,
      "question": "Which concept refers to shared expectations about behavior?",
      "options": [
        "Values",
        "Beliefs",
        "Norms",
        "Customs"
      ],
      "answer": "Norms"
    },
    {
      "id": 90,
      "question": "What term describes norms for routine, casual interaction?",
      "options": [
        "Mores",
        "Folkways",
        "Laws",
        "Taboos"
      ],
      "answer": "Folkways"
    },
    {
      "id": 91,
      "question": "Which concept refers to cultural patterns widespread among a population?",
      "options": [
        "High culture",
        "Popular culture",
        "Subculture",
        "Counterculture"
      ],
      "answer": "Popular culture"
    },
    {
      "id": 92,
      "question": "What is the term for cultural patterns setting apart some population segments?",
      "options": [
        "High culture",
        "Popular culture",
        "Subculture",
        "Counterculture"
      ],
      "answer": "Subculture"
    },
    {
      "id": 93,
      "question": "Which concept refers to considering another culture superior?",
      "options": [
        "Ethnocentrism",
        "Cultural relativism",
        "Xenocentrism",
        "Multiculturalism"
      ],
      "answer": "Xenocentrism"
    },
    {
      "id": 94,
      "question": "What term describes the process of creating new cultural elements?",
      "options": [
        "Invention",
        "Discovery",
        "Diffusion",
        "Innovation"
      ],
      "answer": "Invention"
    },
    {
      "id": 95,
      "question": "Which concept refers to finding that which already exists?",
      "options": [
        "Invention",
        "Discovery",
        "Diffusion",
        "Innovation"
      ],
      "answer": "Discovery"
    },
    {
      "id": 96,
      "question": "What is the term for a world with many cultural connections?",
      "options": [
        "Global village",
        "Global culture",
        "Cultural universe",
        "World society"
      ],
      "answer": "Global culture"
    },
    {
      "id": 97,
      "question": "Which stage of socialization involves imitating others?",
      "options": [
        "Play stage",
        "Game stage",
        "Imitation stage",
        "Generalized other stage"
      ],
      "answer": "Imitation stage"
    },
    {
      "id": 98,
      "question": "What concept refers to learning new norms when entering a new social setting?",
      "options": [
        "Primary socialization",
        "Anticipatory socialization",
        "Resocialization",
        "Reverse socialization"
      ],
      "answer": "Resocialization"
    },
    {
      "id": 99,
      "question": "Which concept describes Goffman's analysis of social interaction as theatrical performance?",
      "options": [
        "Social construction",
        "Definition of the situation",
        "Dramaturgical analysis",
        "Ethnomethodology"
      ],
      "answer": "Dramaturgical analysis"
    },
    {
      "id": 100,
      "question": "What term describes efforts to create specific impressions in others' minds?",
      "options": [
        "Role playing",
        "Impression management",
        "Face-work",
        "Presentation of self"
      ],
      "answer": "Impression management"
    }
];