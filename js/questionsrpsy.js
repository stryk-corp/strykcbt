const questions = [
    {
        "id": 1,
        "question": "What is the origin of the term 'motivation'?",
        "options": [
            "Greek word 'motivos' meaning movement",
            "Latin word 'movete' referring to movement of activity",
            "French word 'motif' meaning reason",
            "German word 'motiv' meaning incentive"
        ],
        "answer": "Latin word 'movete' referring to movement of activity"
    },
    {
        "id": 2,
        "question": "According to Quin (1995), motivation is defined as:",
        "options": [
            "The emotional state that drives behavior",
            "The need and incentive that cause people to behave the way they do",
            "The biological instincts controlling human actions",
            "The external rewards influencing behavior"
        ],
        "answer": "The need and incentive that cause people to behave the way they do"
    },
    {
        "id": 3,
        "question": "What is the primary function of motives in understanding behavior?",
        "options": [
            "To measure intelligence levels",
            "To make predictions about behavior in different situations",
            "To determine personality types",
            "To assess emotional stability"
        ],
        "answer": "To make predictions about behavior in different situations"
    },
    {
        "id": 4,
        "question": "Which of the following best describes extrinsic motivation?",
        "options": [
            "Performing an action because the act itself is rewarding",
            "Behavior driven by internal satisfaction",
            "Performing an action because it leads to an external outcome",
            "Motivation arising from biological needs"
        ],
        "answer": "Performing an action because it leads to an external outcome"
    },
    {
        "id": 5,
        "question": "What characterizes intrinsic motivation?",
        "options": [
            "Seeking external rewards and recognition",
            "Performing actions that lead to separate outcomes",
            "The act itself is rewarding or satisfying internally",
            "Behavior driven by avoidance of punishment"
        ],
        "answer": "The act itself is rewarding or satisfying internally"
    },
    {
        "id": 6,
        "question": "Biological motives are primarily guided by:",
        "options": [
            "Social interactions and cultural norms",
            "Psychological needs and desires",
            "Physiological mechanisms of the body",
            "Cognitive processes and thinking patterns"
        ],
        "answer": "Physiological mechanisms of the body"
    },
    {
        "id": 7,
        "question": "Psychosocial motives are primarily:",
        "options": [
            "Genetically determined and innate",
            "Learned from environmental interactions",
            "Based solely on biological factors",
            "Unconscious and hidden from awareness"
        ],
        "answer": "Learned from environmental interactions"
    },
    {
        "id": 8,
        "question": "The need for affiliation refers to:",
        "options": [
            "The desire for power and control over others",
            "The need to achieve excellence and success",
            "Wanting to maintain relationships with others",
            "The drive to explore new environments"
        ],
        "answer": "Wanting to maintain relationships with others"
    },
    {
        "id": 9,
        "question": "According to David McClelland, how many general ways are there to express the power motive?",
        "options": [
            "Two",
            "Three",
            "Four",
            "Five"
        ],
        "answer": "Four"
    },
    {
        "id": 10,
        "question": "People high in achievement motivation tend to prefer tasks that are:",
        "options": [
            "Extremely easy and simple",
            "Moderately difficult and challenging",
            "Impossible to complete",
            "Completely unfamiliar"
        ],
        "answer": "Moderately difficult and challenging"
    },
    {
        "id": 11,
        "question": "Curiosity and exploration motivation is characterized by:",
        "options": [
            "Clear goals and specific purposes",
            "Acting without specific identifiable goals",
            "Avoidance of novel experiences",
            "Focus on practical outcomes only"
        ],
        "answer": "Acting without specific identifiable goals"
    },
    {
        "id": 12,
        "question": "Instinct theory of motivation suggests that behavior is motivated by:",
        "options": [
            "Learned responses to environmental stimuli",
            "Cognitive interpretations of situations",
            "Inborn patterns that are biologically determined",
            "External rewards and punishments"
        ],
        "answer": "Inborn patterns that are biologically determined"
    },
    {
        "id": 13,
        "question": "Drive-reduction theory is based on the concept of:",
        "options": [
            "Cognitive dissonance reduction",
            "Homeostatic equilibrium restoration",
            "Social comparison processes",
            "Emotional regulation"
        ],
        "answer": "Homeostatic equilibrium restoration"
    },
    {
        "id": 14,
        "question": "Incentive theories of motivation emphasize:",
        "options": [
            "Internal physiological states",
            "Environmental stimuli that pull people",
            "Unconscious psychological conflicts",
            "Genetic predispositions"
        ],
        "answer": "Environmental stimuli that pull people"
    },
    {
        "id": 15,
        "question": "Cognitive theory of motivation emphasizes the role of:",
        "options": [
            "Physiological needs and drives",
            "Perception and interpretation of events",
            "Instinctual behavior patterns",
            "Environmental reinforcements"
        ],
        "answer": "Perception and interpretation of events"
    },
    {
        "id": 16,
        "question": "Maslow's Hierarchy of Needs arranges needs in how many levels?",
        "options": [
            "Three",
            "Four",
            "Five",
            "Six"
        ],
        "answer": "Five"
    },
    {
        "id": 17,
        "question": "In Maslow's hierarchy, which needs are most basic to survival?",
        "options": [
            "Safety needs",
            "Belongingness needs",
            "Physiological needs",
            "Esteem needs"
        ],
        "answer": "Physiological needs"
    },
    {
        "id": 18,
        "question": "Self-actualization needs represent:",
        "options": [
            "Basic survival requirements",
            "The need for safety and security",
            "The fullest development of potential",
            "The desire for social recognition"
        ],
        "answer": "The fullest development of potential"
    },
    {
        "id": 19,
        "question": "According to Maslow, lower level needs:",
        "options": [
            "Are less important than higher needs",
            "Dominate as long as they are unsatisfied",
            "Can be ignored in favor of higher needs",
            "Are irrelevant to human motivation"
        ],
        "answer": "Dominate as long as they are unsatisfied"
    },
    {
        "id": 20,
        "question": "Emotion is defined as:",
        "options": [
            "A purely physiological response pattern",
            "Internal feelings that stir people to act or change",
            "Cognitive processes without physical components",
            "Behavioral responses without subjective experience"
        ],
        "answer": "Internal feelings that stir people to act or change"
    },
    {
        "id": 21,
        "question": "Emotions operate along a continuum from:",
        "options": [
            "Simple to complex",
            "Mild to severe",
            "Positive to negative only",
            "Conscious to unconscious"
        ],
        "answer": "Mild to severe"
    },
    {
        "id": 22,
        "question": "The physiological component of emotion involves:",
        "options": [
            "Cognitive interpretations only",
            "Behavioral expressions only",
            "Physical changes in the body",
            "Social interactions primarily"
        ],
        "answer": "Physical changes in the body"
    },
    {
        "id": 23,
        "question": "Behavioral components of emotion are expressed through:",
        "options": [
            "Internal thought processes",
            "Body movement, posture, and tone of voice",
            "Physiological changes only",
            "Cognitive appraisals"
        ],
        "answer": "Body movement, posture, and tone of voice"
    },
    {
        "id": 24,
        "question": "According to Ekonen (1993), facial expressions appear to be:",
        "options": [
            "Completely learned and culturally specific",
            "Universal for various emotional states",
            "Different for each individual",
            "Unrelated to emotional experience"
        ],
        "answer": "Universal for various emotional states"
    },
    {
        "id": 25,
        "question": "The cognitive component of emotion refers to:",
        "options": [
            "Physical changes in the body",
            "Behavioral expressions",
            "Perception, thoughts, and expectations",
            "Genetic predispositions"
        ],
        "answer": "Perception, thoughts, and expectations"
    },
    {
        "id": 26,
        "question": "How many basic emotions are universally experienced and recognized according to research?",
        "options": [
            "Four",
            "Five",
            "Six",
            "Seven"
        ],
        "answer": "Six"
    },
    {
        "id": 27,
        "question": "Izard proposed a set of how many basic emotions?",
        "options": [
            "Six",
            "Eight",
            "Ten",
            "Twelve"
        ],
        "answer": "Ten"
    },
    {
        "id": 28,
        "question": "Plutchik arranged basic emotions in how many pairs of opposites?",
        "options": [
            "Three",
            "Four",
            "Five",
            "Six"
        ],
        "answer": "Four"
    },
    {
        "id": 29,
        "question": "Emotional intelligence involves the ability to:",
        "options": [
            "Suppress all emotional expressions",
            "Know and manage emotions and maintain relationships",
            "Avoid emotional experiences completely",
            "Focus only on cognitive abilities"
        ],
        "answer": "Know and manage emotions and maintain relationships"
    },
    {
        "id": 30,
        "question": "The James-Lange theory suggests that:",
        "options": [
            "Emotions cause physiological changes",
            "Physiological changes cause emotions",
            "Cognition mediates between stimulus and emotion",
            "Emotions are socially constructed"
        ],
        "answer": "Physiological changes cause emotions"
    },
    {
        "id": 31,
        "question": "According to James-Lange theory, people feel afraid because they:",
        "options": [
            "Interpret the situation as dangerous",
            "Tremble and have physiological arousal",
            "Learn to fear certain stimuli",
            "Have genetic predispositions to fear"
        ],
        "answer": "Tremble and have physiological arousal"
    },
    {
        "id": 32,
        "question": "The Cannon-Bard theory claims that emotional processes are mediated by the:",
        "options": [
            "Hypothalamus",
            "Thalamus",
            "Cortex",
            "Amygdala"
        ],
        "answer": "Thalamus"
    },
    {
        "id": 33,
        "question": "Which brain structure is considered the primary center for emotion regulation?",
        "options": [
            "Thalamus",
            "Hypothalamus",
            "Cortex",
            "Hippocampus"
        ],
        "answer": "Hypothalamus"
    },
    {
        "id": 34,
        "question": "The amygdala is responsible for:",
        "options": [
            "Regulating body temperature",
            "Formation of emotional memories",
            "Cognitive processing only",
            "Motor coordination"
        ],
        "answer": "Formation of emotional memories"
    },
    {
        "id": 35,
        "question": "The left frontal cortex is associated with:",
        "options": [
            "Negative feelings",
            "Positive feelings",
            "Fear responses",
            "Anger expressions"
        ],
        "answer": "Positive feelings"
    },
    {
        "id": 36,
        "question": "The sympathetic nervous system prepares the body for:",
        "options": [
            "Rest and digestion",
            "Fight or flight response",
            "Cognitive processing",
            "Emotional suppression"
        ],
        "answer": "Fight or flight response"
    },
    {
        "id": 37,
        "question": "Schachter and Singer's two-factor theory states that emotion results from:",
        "options": [
            "Physiological arousal only",
            "Cognitive interpretation only",
            "Physical arousal and cognitive interpretation",
            "Genetic factors only"
        ],
        "answer": "Physical arousal and cognitive interpretation"
    },
    {
        "id": 38,
        "question": "Cultural learning influences emotions primarily by affecting:",
        "options": [
            "The physiological experience of emotions",
            "The expression of emotions more than experience",
            "The genetic basis of emotional responses",
            "The complete elimination of some emotions"
        ],
        "answer": "The expression of emotions more than experience"
    },
    {
        "id": 39,
        "question": "Sensation is defined as:",
        "options": [
            "The interpretation of sensory information",
            "The organization of perceptual experiences",
            "Sensory organs absorbing energy from physical stimuli",
            "Cognitive processing of environmental information"
        ],
        "answer": "Sensory organs absorbing energy from physical stimuli"
    },
    {
        "id": 40,
        "question": "Perception refers to:",
        "options": [
            "The detection of physical energy",
            "The process by which the brain selects, organizes, and interprets sensations",
            "The physiological response to stimuli",
            "The genetic predisposition to certain experiences"
        ],
        "answer": "The process by which the brain selects, organizes, and interprets sensations"
    },
    {
        "id": 41,
        "question": "The conversion from sensory stimulus energy to action potential is called:",
        "options": [
            "Transduction",
            "Transmission",
            "Transformation",
            "Translation"
        ],
        "answer": "Transduction"
    },
    {
        "id": 42,
        "question": "Absolute threshold refers to:",
        "options": [
            "The maximum amount of stimulus that can be detected",
            "The minimum amount of stimulus energy detected 50% of the time",
            "The difference between two stimuli that can be detected",
            "The adaptation to constant stimuli"
        ],
        "answer": "The minimum amount of stimulus energy detected 50% of the time"
    },
    {
        "id": 43,
        "question": "Messages presented below the threshold for conscious awareness are called:",
        "options": [
            "Supraliminal messages",
            "Subliminal messages",
            "Conscious messages",
            "Explicit messages"
        ],
        "answer": "Subliminal messages"
    },
    {
        "id": 44,
        "question": "The just noticeable difference is also known as:",
        "options": [
            "Absolute threshold",
            "Difference threshold",
            "Sensory adaptation",
            "Signal detection"
        ],
        "answer": "Difference threshold"
    },
    {
        "id": 45,
        "question": "Weber's law states that the difference threshold is:",
        "options": [
            "A random fraction of the original stimulus",
            "A constant fraction of the original stimulus",
            "Unrelated to the original stimulus intensity",
            "The same for all types of stimuli"
        ],
        "answer": "A constant fraction of the original stimulus"
    },
    {
        "id": 46,
        "question": "In vision, wavelength affects:",
        "options": [
            "Brightness perception",
            "Color perception",
            "Depth perception",
            "Motion perception"
        ],
        "answer": "Color perception"
    },
    {
        "id": 47,
        "question": "Wave amplitude in vision affects:",
        "options": [
            "Color perception",
            "Brightness perception",
            "Shape perception",
            "Distance perception"
        ],
        "answer": "Brightness perception"
    },
    {
        "id": 48,
        "question": "The cornea functions to:",
        "options": [
            "Focus light onto the retina",
            "Control the amount of light entering the eye",
            "Allow light to pass into the eye",
            "Process visual information"
        ],
        "answer": "Allow light to pass into the eye"
    },
    {
        "id": 49,
        "question": "The lens functions to:",
        "options": [
            "Control light entry",
            "Focus light onto the retina",
            "Detect color information",
            "Process visual signals"
        ],
        "answer": "Focus light onto the retina"
    },
    {
        "id": 50,
        "question": "Rods are visual receptor cells important for:",
        "options": [
            "Daylight vision and color vision",
            "Night vision and peripheral vision",
            "Detailed central vision",
            "Color discrimination only"
        ],
        "answer": "Night vision and peripheral vision"
    },
    {
        "id": 51,
        "question": "Cones are visual receptor cells important for:",
        "options": [
            "Night vision and peripheral vision",
            "Daylight vision and color vision",
            "Motion detection only",
            "Low light vision"
        ],
        "answer": "Daylight vision and color vision"
    },
    {
        "id": 52,
        "question": "The fovea contains:",
        "options": [
            "Only rods",
            "Only cones",
            "Both rods and cones equally",
            "No photoreceptors"
        ],
        "answer": "Only cones"
    },
    {
        "id": 53,
        "question": "Trichromatic theory suggests we can receive how many types of colors?",
        "options": [
            "Two",
            "Three",
            "Four",
            "Five"
        ],
        "answer": "Three"
    },
    {
        "id": 54,
        "question": "Opponent-process theory proposes that color perception depends on:",
        "options": [
            "Single color receptors",
            "Pairs of antagonist colors",
            "Cultural learning only",
            "Genetic factors only"
        ],
        "answer": "Pairs of antagonist colors"
    },
    {
        "id": 55,
        "question": "Bottom-up processing refers to:",
        "options": [
            "Perceptions built from sensory input",
            "Interpretations influenced by knowledge and experience",
            "Cognitive expectations driving perception",
            "Cultural influences on perception"
        ],
        "answer": "Perceptions built from sensory input"
    },
    {
        "id": 56,
        "question": "Top-down processing involves:",
        "options": [
            "Sensory input only",
            "Interpretation influenced by knowledge and experience",
            "Genetic predispositions only",
            "Physiological processes only"
        ],
        "answer": "Interpretation influenced by knowledge and experience"
    },
    {
        "id": 57,
        "question": "Sensory adaptation occurs when:",
        "options": [
            "We perceive stimuli that remain constant over time",
            "We fail to perceive constant stimuli over prolonged periods",
            "Our sensory thresholds increase dramatically",
            "We become more sensitive to stimuli"
        ],
        "answer": "We fail to perceive constant stimuli over prolonged periods"
    },
    {
        "id": 58,
        "question": "The first process involved in perception is:",
        "options": [
            "Organization",
            "Interpretation",
            "Selection",
            "Adaptation"
        ],
        "answer": "Selection"
    },
    {
        "id": 59,
        "question": "Selective attention is the process of:",
        "options": [
            "Organizing sensory information",
            "Interpreting sensory input",
            "Discriminating between important and irrelevant information",
            "Adapting to constant stimuli"
        ],
        "answer": "Discriminating between important and irrelevant information"
    },
    {
        "id": 60,
        "question": "Habituation refers to:",
        "options": [
            "The brain's tendency to ignore constant environmental factors",
            "Increased sensitivity to novel stimuli",
            "The organization of perceptual information",
            "The interpretation of sensory input"
        ],
        "answer": "The brain's tendency to ignore constant environmental factors"
    },
    {
        "id": 61,
        "question": "Which environmental factor increases the probability of stimulus selection?",
        "options": [
            "Low intensity",
            "High intensity",
            "Similarity to background",
            "Static nature"
        ],
        "answer": "High intensity"
    },
    {
        "id": 62,
        "question": "Motivation as a psychological factor in perception means we attend to stimuli that:",
        "options": [
            "Are completely novel",
            "Lead to goals satisfying our needs",
            "Are constant and predictable",
            "Match our personality traits"
        ],
        "answer": "Lead to goals satisfying our needs"
    },
    {
        "id": 63,
        "question": "The second process in perception after selection is:",
        "options": [
            "Interpretation",
            "Organization",
            "Adaptation",
            "Transduction"
        ],
        "answer": "Organization"
    },
    {
        "id": 64,
        "question": "Gestalt psychology emphasizes that perception is:",
        "options": [
            "Meaningful only when organized as a whole",
            "Based solely on individual elements",
            "Unrelated to past experience",
            "Completely innate and unlearned"
        ],
        "answer": "Meaningful only when organized as a whole"
    },
    {
        "id": 65,
        "question": "The fundamental way we organize visual perceptions is through:",
        "options": [
            "Proximity",
            "Figure-ground",
            "Similarity",
            "Closure"
        ],
        "answer": "Figure-ground"
    },
    {
        "id": 66,
        "question": "The law of proximity states that objects close to each other are perceived as:",
        "options": [
            "Similar in attributes",
            "A single unit belonging together",
            "Complete forms despite gaps",
            "Continuing in one direction"
        ],
        "answer": "A single unit belonging together"
    },
    {
        "id": 67,
        "question": "The law of similarity suggests that objects that are similar are perceived as:",
        "options": [
            "The same and grouped together",
            "Separate and distinct",
            "Part of different categories",
            "Unrelated to each other"
        ],
        "answer": "The same and grouped together"
    },
    {
        "id": 68,
        "question": "Continuity refers to the tendency to perceive objects as:",
        "options": [
            "Grouped when they are similar",
            "Continuing in one direction even when interrupted",
            "Complete forms when they have gaps",
            "Moving together in the same direction"
        ],
        "answer": "Continuing in one direction even when interrupted"
    },
    {
        "id": 69,
        "question": "Closure describes our tendency to:",
        "options": [
            "Group similar objects together",
            "Complete forms when they have gaps",
            "Perceive objects as continuing",
            "See objects that move together as grouped"
        ],
        "answer": "Complete forms when they have gaps"
    },
    {
        "id": 70,
        "question": "Common fate refers to elements that:",
        "options": [
            "Are similar in appearance",
            "Move together being grouped together",
            "Are close to each other",
            "Form complete patterns"
        ],
        "answer": "Move together being grouped together"
    },
    {
        "id": 71,
        "question": "Depth perception involves:",
        "options": [
            "Perceiving objects in two dimensions",
            "Estimating distance between us and objects",
            "Recognizing colors accurately",
            "Detecting motion only"
        ],
        "answer": "Estimating distance between us and objects"
    },
    {
        "id": 72,
        "question": "Binocular cues for depth perception rely on:",
        "options": [
            "The use of one eye only",
            "The use of both eyes",
            "Cultural learning only",
            "Genetic factors only"
        ],
        "answer": "The use of both eyes"
    },
    {
        "id": 73,
        "question": "Retinal disparity results from:",
        "options": [
            "The separation of the eyes causing different images",
            "The adaptation of rods and cones",
            "Cultural differences in perception",
            "The processing in visual cortex"
        ],
        "answer": "The separation of the eyes causing different images"
    },
    {
        "id": 74,
        "question": "Monocular cues help in judging:",
        "options": [
            "Very close distances only",
            "Far distances using one eye",
            "Color differences only",
            "Motion perception only"
        ],
        "answer": "Far distances using one eye"
    },
    {
        "id": 75,
        "question": "Which is NOT a monocular cue?",
        "options": [
            "Linear perspective",
            "Retinal disparity",
            "Texture gradient",
            "Interposition"
        ],
        "answer": "Retinal disparity"
    },
    {
        "id": 76,
        "question": "Perceptual constancy refers to perceiving objects as:",
        "options": [
            "Changing constantly",
            "The same despite changes in stimulation",
            "Different under various conditions",
            "Unrelated to past experience"
        ],
        "answer": "The same despite changes in stimulation"
    },
    {
        "id": 77,
        "question": "Size constancy depends on:",
        "options": [
            "Genetic factors only",
            "Past experience and learning",
            "Current emotional state only",
            "Cultural background only"
        ],
        "answer": "Past experience and learning"
    },
    {
        "id": 78,
        "question": "Shape constancy occurs when we perceive an object as the same despite changes in:",
        "options": [
            "Lighting conditions",
            "Retinal image due to viewing angle",
            "Color saturation",
            "Background context"
        ],
        "answer": "Retinal image due to viewing angle"
    },
    {
        "id": 79,
        "question": "Brightness constancy involves perceiving objects as the same despite changes in:",
        "options": [
            "Viewing distance",
            "Viewing angle",
            "Illumination levels",
            "Background colors"
        ],
        "answer": "Illumination levels"
    },
    {
        "id": 80,
        "question": "The final stage in the perceptual process is:",
        "options": [
            "Selection",
            "Organization",
            "Interpretation",
            "Adaptation"
        ],
        "answer": "Interpretation"
    },
    {
        "id": 81,
        "question": "Interpretation in perception is influenced by:",
        "options": [
            "Physiological factors only",
            "Past experiences and expectations",
            "Genetic predispositions only",
            "Current sensory input only"
        ],
        "answer": "Past experiences and expectations"
    },
    {
        "id": 82,
        "question": "Inattentional blindness refers to:",
        "options": [
            "Physical blindness to certain stimuli",
            "Failure to notice visible things due to lack of attention",
            "Adaptation to constant stimuli",
            "Genetic visual impairments"
        ],
        "answer": "Failure to notice visible things due to lack of attention"
    },
    {
        "id": 83,
        "question": "Signal detection theory involves:",
        "options": [
            "Identifying stimuli embedded in distracting backgrounds",
            "Adapting to constant sensory input",
            "Genetic factors in perception",
            "Cultural influences on sensation"
        ],
        "answer": "Identifying stimuli embedded in distracting backgrounds"
    },
    {
        "id": 84,
        "question": "Perceptual expectancy means that perception is a function of:",
        "options": [
            "Current sensory input only",
            "Past experiences, culture, and biological makeup",
            "Genetic factors only",
            "Emotional state only"
        ],
        "answer": "Past experiences, culture, and biological makeup"
    },
    {
        "id": 85,
        "question": "Psychophysics is defined as the study of:",
        "options": [
            "Psychological disorders",
            "How physical stimuli are translated into psychological experience",
            "Physical properties of the brain",
            "Social influences on behavior"
        ],
        "answer": "How physical stimuli are translated into psychological experience"
    },
    {
        "id": 86,
        "question": "The Müller-Lyer illusion demonstrates that:",
        "options": [
            "All people perceive illusions equally",
            "Cultural experiences affect visual perception",
            "Genetic factors determine all perception",
            "Illusions are based solely on physiological factors"
        ],
        "answer": "Cultural experiences affect visual perception"
    },
    {
        "id": 87,
        "question": "The carpentered world hypothesis suggests that people from Western cultures:",
        "options": [
            "Are less susceptible to visual illusions",
            "Are more prone to certain visual illusions",
            "Have better visual acuity",
            "Have worse depth perception"
        ],
        "answer": "Are more prone to certain visual illusions"
    },
    {
        "id": 88,
        "question": "Which factor does NOT affect sensation and perception?",
        "options": [
            "Attention",
            "Motivation",
            "Cultural background",
            "Genetic inheritance only"
        ],
        "answer": "Genetic inheritance only"
    },
    {
        "id": 89,
        "question": "The phi phenomenon is an illusion of:",
        "options": [
            "Color",
            "Movement",
            "Depth",
            "Size"
        ],
        "answer": "Movement"
    },
    {
        "id": 90,
        "question": "Which Gestalt principle explains why we see Christmas lights as moving?",
        "options": [
            "Figure-ground",
            "Proximity",
            "Phi phenomenon",
            "Similarity"
        ],
        "answer": "Phi phenomenon"
    },
    {
        "id": 91,
        "question": "The autonomic nervous system is divided into:",
        "options": [
            "Central and peripheral systems",
            "Sensory and motor systems",
            "Sympathetic and parasympathetic systems",
            "Cognitive and emotional systems"
        ],
        "answer": "Sympathetic and parasympathetic systems"
    },
    {
        "id": 92,
        "question": "After a threat is removed, which system becomes active?",
        "options": [
            "Sympathetic nervous system",
            "Parasympathetic nervous system",
            "Central nervous system",
            "Somatic nervous system"
        ],
        "answer": "Parasympathetic nervous system"
    },
    {
        "id": 93,
        "question": "The parasympathetic nervous system functions to:",
        "options": [
            "Prepare for fight or flight",
            "Restore and conserve energy",
            "Increase physiological arousal",
            "Enhance sensory sensitivity"
        ],
        "answer": "Restore and conserve energy"
    },
    {
        "id": 94,
        "question": "Emotional memories are primarily formed in the:",
        "options": [
            "Hypothalamus",
            "Thalamus",
            "Amygdala",
            "Cortex"
        ],
        "answer": "Amygdala"
    },
    {
        "id": 95,
        "question": "The right frontal cortex is associated with:",
        "options": [
            "Positive feelings",
            "Negative feelings",
            "Logical reasoning",
            "Language processing"
        ],
        "answer": "Negative feelings"
    },
    {
        "id": 96,
        "question": "In Schachter and Singer's experiment, subjects were injected with:",
        "options": [
            "Placebo",
            "Epinephrine",
            "Serotonin",
            "Dopamine"
        ],
        "answer": "Epinephrine"
    },
    {
        "id": 97,
        "question": "Cross-cultural studies show that the ability to identify odors:",
        "options": [
            "Is exactly the same across all cultures",
            "Varies across cultures",
            "Is purely genetic and unaffected by culture",
            "Is unrelated to emotional experience"
        ],
        "answer": "Varies across cultures"
    },
    {
        "id": 98,
        "question": "Visually impaired children from birth:",
        "options": [
            "Cannot express emotions facially",
            "Show different facial expressions than sighted children",
            "Smile and frown in the same way as sighted children",
            "Have no emotional expressions"
        ],
        "answer": "Smile and frown in the same way as sighted children"
    },
    {
        "id": 99,
        "question": "The thalamus acts as a:",
        "options": [
            "Primary emotion center",
            "Relay center for sensory nerves",
            "Memory storage area",
            "Language processing center"
        ],
        "answer": "Relay center for sensory nerves"
    },
    {
        "id": 100,
        "question": "Stimulation of the thalamus produces:",
        "options": [
            "Happiness and joy",
            "Fear, anxiety, and autonomic reactions",
            "Cognitive processing only",
            "Motor coordination"
        ],
        "answer": "Fear, anxiety, and autonomic reactions"
    },
    {
        "id": 101,
        "question": "The hypothalamus regulates:",
        "options": [
            "Only emotional responses",
            "Homeostatic balance and endocrine secretion",
            "Cognitive processes only",
            "Social behaviors only"
        ],
        "answer": "Homeostatic balance and endocrine secretion"
    },
    {
        "id": 102,
        "question": "The limbic system plays a vital role in:",
        "options": [
            "Motor coordination only",
            "Language processing only",
            "Regulation of emotion",
            "Visual perception only"
        ],
        "answer": "Regulation of emotion"
    },
    {
        "id": 103,
        "question": "Cortex involvement in emotions shows that:",
        "options": [
            "Only positive emotions involve the cortex",
            "Hemispheres have contrasting roles",
            "The cortex is not involved in emotions",
            "Emotions are processed only in subcortical areas"
        ],
        "answer": "Hemispheres have contrasting roles"
    },
    {
        "id": 104,
        "question": "In a stressful situation, the sympathetic system:",
        "options": [
            "Slows down heart rate",
            "Prepares the body to face the situation",
            "Promotes digestion",
            "Reduces blood pressure"
        ],
        "answer": "Prepares the body to face the situation"
    },
    {
        "id": 105,
        "question": "The two-factor theory of emotion requires:",
        "options": [
            "Physiological arousal only",
            "Cognitive interpretation only",
            "Both arousal and interpretation",
            "Genetic predisposition only"
        ],
        "answer": "Both arousal and interpretation"
    },
    {
        "id": 106,
        "question": "According to the text, very few people reach Maslow's level of:",
        "options": [
            "Safety needs",
            "Belongingness needs",
            "Esteem needs",
            "Self-actualization"
        ],
        "answer": "Self-actualization"
    },
    {
        "id": 107,
        "question": "A self-actualized person is characterized as:",
        "options": [
            "Socially isolated and rigid",
            "Self-aware, creative, and spontaneous",
            "Focused only on basic needs",
            "Avoiding challenges and novelty"
        ],
        "answer": "Self-aware, creative, and spontaneous"
    },
    {
        "id": 108,
        "question": "The need for achievement is also known as:",
        "options": [
            "n-Pow",
            "n-Aff",
            "n-Ach",
            "n-Cur"
        ],
        "answer": "n-Ach"
    },
    {
        "id": 109,
        "question": "Persons high in achievement motivation desire:",
        "options": [
            "No feedback on performance",
            "Strong feedback on performance",
            "To avoid challenging tasks",
            "To work alone without interaction"
        ],
        "answer": "Strong feedback on performance"
    },
    {
        "id": 110,
        "question": "Curiosity in infants and children is reflected in their:",
        "options": [
            "Crying and distress",
            "Smiling and babbling during exploration",
            "Avoidance of novel stimuli",
            "Preference for familiar objects only"
        ],
        "answer": "Smiling and babbling during exploration"
    },
    {
        "id": 111,
        "question": "Children become distressed when:",
        "options": [
            "Allowed to explore freely",
            "The motive to explore is discouraged",
            "Presented with novel toys",
            "Given too much sensory stimulation"
        ],
        "answer": "The motive to explore is discouraged"
    },
    {
        "id": 112,
        "question": "The earliest explanations of motivation relied on the concept of:",
        "options": [
            "Drive reduction",
            "Instinct",
            "Incentive",
            "Cognition"
        ],
        "answer": "Instinct"
    },
    {
        "id": 113,
        "question": "According to McDougall, human beings have instincts such as:",
        "options": [
            "Only aggression and sex",
            "Repulsion, curiosity, and self-assertiveness",
            "Only basic survival instincts",
            "No instincts, only learned behaviors"
        ],
        "answer": "Repulsion, curiosity, and self-assertiveness"
    },
    {
        "id": 114,
        "question": "Drive-reduction theory evolved to replace:",
        "options": [
            "Cognitive theory",
            "Incentive theory",
            "Instinct theory",
            "Humanistic theory"
        ],
        "answer": "Instinct theory"
    },
    {
        "id": 115,
        "question": "The body has set points for physiological states like:",
        "options": [
            "Emotional states only",
            "Temperature and blood-sugar level",
            "Cognitive abilities only",
            "Personality traits"
        ],
        "answer": "Temperature and blood-sugar level"
    },
    {
        "id": 116,
        "question": "Incentive theories suggest that motivation comes from:",
        "options": [
            "Internal physiological imbalances",
            "Environmental stimuli that pull people",
            "Genetic predispositions only",
            "Unconscious psychological conflicts"
        ],
        "answer": "Environmental stimuli that pull people"
    },
    {
        "id": 117,
        "question": "Cognitive theory emphasizes that motivation depends on:",
        "options": [
            "Physiological needs only",
            "How we interpret and attribute events",
            "Environmental reinforcements only",
            "Genetic factors only"
        ],
        "answer": "How we interpret and attribute events"
    },
    {
        "id": 118,
        "question": "Locus of control in cognitive appraisal refers to:",
        "options": [
            "Where people locate the cause of motivating events",
            "The control of physiological processes",
            "The regulation of emotional expressions",
            "The management of cognitive resources"
        ],
        "answer": "Where people locate the cause of motivating events"
    },
    {
        "id": 119,
        "question": "Internally oriented persons are:",
        "options": [
            "Less motivated in achievement",
            "Highly motivated especially in achievement",
            "Unconcerned with goal attainment",
            "Focused only on external rewards"
        ],
        "answer": "Highly motivated especially in achievement"
    },
    {
        "id": 120,
        "question": "Maslow's theory is popular because of its:",
        "options": [
            "Theoretical and applied value",
            "Focus on biological factors only",
            "Rejection of higher needs",
            "Emphasis on unconscious motives"
        ],
        "answer": "Theoretical and applied value"
    }
];
