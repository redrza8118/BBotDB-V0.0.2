const cards = [

    // ========================================
    // EXISTING CARDS
    // ========================================

    {
        id: "kyrie-irving",
        name: "Kyrie Irving",
        image: "images/KyrieIrvingBasketbot.png",
        rarity: "SPECIAL",
        shooting: 91,
        finishing: 93,
        defending: 82,
        playmaking: 96,
        height: "6'2\"",
        position: ["PG", "SG"],
        market: "₳ 70K-80K",
        traits: [
            { name: "Area Architect", level: 2 },
            { name: "Deep Volume", level: 2 },
            { name: "Hog", level: 1 },
            { name: "Icy", level: 1 },
            { name: "Midrange Maestro", level: 2 },
            { name: "Unfazed", level: 1 }
        ]
    },

    {
        id: "jose-alvarado",
        name: "Jose Alvarado",
        image: "images/JoseAlvaradoBasketbot.png",
        rarity: "Finals '26",
        shooting: 84,
        finishing: 82,
        defending: 92,
        playmaking: 87,
        height: "6'0\"",
        position: ["PG"],
        market: "₳ 30K-50K",
        traits: [
            { name: "Clamp Time", level: 2 },
            { name: "Icy", level: 1 },
            { name: "Selfless", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 3 }
        ]
    },

    {
        id: "isaiah-hartenstein",
        name: "Isaiah Hartenstein",
        image: "images/IsaiahHartensteinBasketbot.png",
        rarity: "FROST V4",
        shooting: 78,
        finishing: 91,
        defending: 91,
        playmaking: 81,
        height: "7'0\"",
        position: ["C"],
        market: "₳ 150K-200K",
        traits: [
            { name: "Clamp Time", level: 1 },
            { name: "Dynamic Defender", level: 1 },
            { name: "Ferocious Finisher", level: 2 },
            { name: "Helping Hand", level: 1 },
            { name: "Midrange Maestro", level: 1 },
            { name: "Post Punisher", level: 1 },
            { name: "Resilient Rebounder", level: 3 },
            { name: "Shot Stopper", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 1 }
        ]
    },

    {
        id: "scottie-barnes",
        name: "Scottie Barnes",
        image: "images/ScottieBarnesBasketbot.png",
        rarity: "FROST V4",
        shooting: 85,
        finishing: 92,
        defending: 91,
        playmaking: 91,
        height: "6'7\"",
        position: ["PF", "SF"],
        market: "₳ 800K-900K",
        traits: [
            { name: "Area Architect", level: 1 },
            { name: "Clamp Time", level: 1 },
            { name: "Dynamic Defender", level: 1 },
            { name: "Ferocious Finisher", level: 2 },
            { name: "Helping Hand", level: 1 },
            { name: "Icy", level: 1 },
            { name: "Midrange Maestro", level: 1 },
            { name: "Post Punisher", level: 1 },
            { name: "Resilient Rebounder", level: 2 },
            { name: "Shot Stopper", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 1 },
            { name: "Unfazed", level: 1 }
        ]
    },

    {
        id: "alex-sarr",
        name: "Alex Sarr",
        image: "images/AlexSarrBasketbot.png",
        rarity: "FUTURE STAR V3",
        shooting: 86,
        finishing: 91,
        defending: 93,
        playmaking: 83,
        height: "7'0\"",
        position: ["C", "PF"],
        market: "₳ 550K-650K",
        traits: [
            { name: "Area Architect", level: 1 },
            { name: "Clamp Time", level: 2 },
            { name: "Deep Volume", level: 1 },
            { name: "Dynamic Defender", level: 1 },
            { name: "Ferocious Finisher", level: 2 },
            { name: "Midrange Maestro", level: 1 },
            { name: "Post Punisher", level: 1 },
            { name: "Resilient Rebounder", level: 2 },
            { name: "Shot Stopper", level: 2 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 1 },
            { name: "Unfazed", level: 1 }
        ]
    },

    {
        id: "kawhi-leonard",
        name: "Kawhi Leonard",
        image: "images/KawhiLeonardBasketbot.png",
        rarity: "SPECIAL",
        shooting: 89,
        finishing: 90,
        defending: 96,
        playmaking: 85,
        height: "6'7\"",
        position: ["SF", "SG"],
        market: "₳ 80K-100K",
        traits: [
            { name: "Area Architect", level: 1 },
            { name: "Clamp Time", level: 2 },
            { name: "Dynamic Defender", level: 2 },
            { name: "Ferocious Finisher", level: 1 },
            { name: "Icy", level: 2 },
            { name: "IQ", level: 1 },
            { name: "Midrange Maestro", level: 1 },
            { name: "Thief", level: 2 }
        ]
    },

    {
        id: "chris-paul",
        name: "Chris Paul",
        image: "images/CP3Basketbot.png",
        rarity: "RARE",
        shooting: 88,
        finishing: 82,
        defending: 88,
        playmaking: 99,
        height: "6'0\"",
        position: ["PG"],
        market: "₳ 7K",
        traits: [
            { name: "Clamp Time", level: 1 },
            { name: "Helping Hand", level: 2 },
            { name: "IQ", level: 2 },
            { name: "Midrange Maestro", level: 1 },
            { name: "Selfless", level: 1 },
            { name: "Thief", level: 1 }
        ]
    },

    {
        id: "russell-westbrook",
        name: "Russell Westbrook",
        image: "images/BrodieBasketbot.png",
        rarity: "RARE",
        shooting: 79,
        finishing: 93,
        defending: 88,
        playmaking: 89,
        height: "6'3\"",
        position: ["PG"],
        market: "Unknown",
        traits: [
            { name: "Ferocious Finisher", level: 1 },
            { name: "Hog", level: 1 },
            { name: "Resilient Rebounder", level: 1 }
        ]
    },

    {
        id: "ben-simmons",
        name: "Ben Simmons",
        image: "images/BenSimmonsBasketbot.png",
        rarity: "RARE",
        shooting: 41,
        finishing: 93,
        defending: 90,
        playmaking: 83,
        height: "6'11\"",
        position: ["PF", "PG"],
        market: "₳ 10K",
        traits: [
            { name: "Clamp Time", level: 1 },
            { name: "Dynamic Defender", level: 1 },
            { name: "Ferocious Finisher", level: 1 },
            { name: "Resilient Rebounder", level: 1 },
            { name: "Thief", level: 1 }
        ]
    },

    {
        id: "rudy-gobert",
        name: "Rudy Gobert",
        image: "images/RudyGobertBasketbot.png",
        rarity: "RARE",
        shooting: 51,
        finishing: 89,
        defending: 99,
        playmaking: 78,
        height: "7'1\"",
        position: ["C"],
        market: "₳ 10K",
        traits: [
            { name: "Dynamic Defender", level: 1 },
            { name: "Ferocious Finisher", level: 1 },
            { name: "Resilient Rebounder", level: 2 },
            { name: "Selfless", level: 1 },
            { name: "Shot Stopper", level: 2 }
        ]
    },


    // ========================================
    // BATCH 2
    // ========================================

    {
        id: "michael-jordan",
        name: "Michael Jordan",
        image: "images/MichaelJordanBasketbot.png",
        rarity: "One of a Kind",
        shooting: 90,
        finishing: 99,
        defending: 98,
        playmaking: 97,
        height: "6'6\"",
        position: ["SG", "SF"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 3 },
            { name: "Clamp Time", level: 3 },
            { name: "Dynamic Defender", level: 2 },
            { name: "Ferocious Finisher", level: 3 },
            { name: "Hog", level: 3 },
            { name: "Icy", level: 2 },
            { name: "IQ", level: 2 },
            { name: "Midrange Maestro", level: 3 },
            { name: "Resilient Rebounder", level: 1 },
            { name: "Shot Stopper", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 3 },
            { name: "Unfazed", level: 3 }
        ]
    },

    {
        id: "lebron-james",
        name: "LeBron James",
        image: "images/LeBronJamesBasketbot.png",
        rarity: "One of a Kind",
        shooting: 90,
        finishing: 99,
        defending: 97,
        playmaking: 98,
        height: "6'9\"",
        position: ["SF", "PF"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 2 },
            { name: "Clamp Time", level: 2 },
            { name: "Deep Volume", level: 1 },
            { name: "Dynamic Defender", level: 3 },
            { name: "Ferocious Finisher", level: 3 },
            { name: "Helping Hand", level: 2 },
            { name: "Hog", level: 2 },
            { name: "Icy", level: 2 },
            { name: "IQ", level: 2 },
            { name: "Midrange Maestro", level: 1 },
            { name: "Post Punisher", level: 1 },
            { name: "Resilient Rebounder", level: 2 },
            { name: "Shot Stopper", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 1 },
            { name: "Unfazed", level: 2 }
        ]
    },

    {
        id: "stephen-curry",
        name: "Stephen Curry",
        image: "images/StephenCurryBasketbot.png",
        rarity: "Champion",
        shooting: 99,
        finishing: 95,
        defending: 87,
        playmaking: 98,
        height: "6'3\"",
        position: ["PG", "SG"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 2 },
            { name: "Deep Volume", level: 3 },
            { name: "Helping Hand", level: 1 },
            { name: "Hog", level: 1 },
            { name: "Icy", level: 2 },
            { name: "IQ", level: 3 },
            { name: "Midrange Maestro", level: 2 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 1 },
            { name: "Unfazed", level: 3 }
        ]
    },

    {
        id: "kobe-bryant",
        name: "Kobe Bryant",
        image: "images/KobeBryantBasketbot.png",
        rarity: "One of a Kind",
        shooting: 97,
        finishing: 97,
        defending: 94,
        playmaking: 90,
        height: "6'6\"",
        position: ["SG", "SF"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 3 },
            { name: "Clamp Time", level: 2 },
            { name: "Deep Volume", level: 2 },
            { name: "Dynamic Defender", level: 1 },
            { name: "Ferocious Finisher", level: 2 },
            { name: "Hog", level: 3 },
            { name: "Icy", level: 2 },
            { name: "IQ", level: 1 },
            { name: "Midrange Maestro", level: 3 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 1 },
            { name: "Unfazed", level: 3 }
        ]
    },

    {
        id: "giannis-antetokounmpo",
        name: "Giannis Antetokounmpo",
        image: "images/GiannisAntetokounmpoBasketbot.png",
        rarity: "Champion",
        shooting: 85,
        finishing: 99,
        defending: 99,
        playmaking: 95,
        height: "6'11\"",
        position: ["PF", "C"],
        market: "N/A",
        traits: [
            { name: "Clamp Time", level: 3 },
            { name: "Dynamic Defender", level: 2 },
            { name: "Post Punisher", level: 2 },
            { name: "Resilient Rebounder", level: 2 },
            { name: "Solid Stats", level: 1 }
        ]
    },

    {
        id: "nikola-jokic",
        name: "Nikola Jokic",
        image: "images/NikolaJokicBasketbot.png",
        rarity: "Champion",
        shooting: 91,
        finishing: 97,
        defending: 90,
        playmaking: 99,
        height: "6'11\"",
        position: ["C"],
        market: "N/A",
        traits: [
            { name: "Deep Volume", level: 1 },
            { name: "Helping Hand", level: 3 },
            { name: "Icy", level: 1 },
            { name: "IQ", level: 2 },
            { name: "Midrange Maestro", level: 2 },
            { name: "Post Punisher", level: 3 },
            { name: "Resilient Rebounder", level: 3 },
            { name: "Shot Stopper", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Unfazed", level: 3 }
        ]
    },

    {
        id: "derrick-rose",
        name: "Derrick Rose",
        image: "images/DerrickRoseBasketbot.png",
        rarity: "Synced (Paired with Joakim Noah)",
        shooting: 90,
        finishing: 98,
        defending: 90,
        playmaking: 95,
        height: "6'3\"",
        position: ["PG"],
        market: "N/A",

        synced: {
            partner: "Joakim Noah",
            boosts: {
                shooting: 2,
                finishing: 1,
                defending: 3,
                playmaking: 2
            }
        },

        traits: [
            { name: "Area Architect", level: 3 },
            { name: "Deep Volume", level: 1 },
            { name: "Ferocious Finisher", level: 3 },
            { name: "Helping Hand", level: 2 },
            { name: "Hog", level: 1 },
            { name: "Icy", level: 2 },
            { name: "IQ", level: 1 },
            { name: "Midrange Maestro", level: 2 },
            { name: "Resilient Rebounder", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 2 },
            { name: "Unfazed", level: 2 }
        ]
    },

    {
        id: "luka-doncic",
        name: "Luka Doncic",
        image: "images/LukaDoncicBasketbot.png",
        rarity: "Exclusive v2",
        shooting: 94,
        finishing: 96,
        defending: 85,
        playmaking: 98,
        height: "6'6\"",
        position: ["PG", "SG"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 3 },
            { name: "Deep Volume", level: 2 },
            { name: "Dynamic Defender", level: 1 },
            { name: "Helping Hand", level: 2 },
            { name: "Hog", level: 1 },
            { name: "Icy", level: 1 },
            { name: "IQ", level: 1 },
            { name: "Midrange Maestro", level: 2 },
            { name: "Post Punisher", level: 1 },
            { name: "Resilient Rebounder", level: 2 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 2 },
            { name: "Unfazed", level: 2 }
        ]
    },

    {
        id: "shai-gilgeous-alexander",
        name: "Shai Gilgeous-Alexander",
        image: "images/ShaiGilgeousAlexanderBasketbot.png",
        rarity: "Exclusive v2",
        shooting: 91,
        finishing: 96,
        defending: 91,
        playmaking: 93,
        height: "6'6\"",
        position: ["PG", "SG"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 3 },
            { name: "Deep Volume", level: 1 },
            { name: "Dynamic Defender", level: 1 },
            { name: "Ferocious Finisher", level: 1 },
            { name: "Helping Hand", level: 1 },
            { name: "Icy", level: 1 },
            { name: "IQ", level: 1 },
            { name: "Midrange Maestro", level: 3 },
            { name: "Shot Stopper", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 2 },
            { name: "Unfazed", level: 2 }
        ]
    },

    {
        id: "jason-kidd",
        name: "Jason Kidd",
        image: "images/JasonKiddBasketbot.png",
        rarity: "Historic",
        shooting: 89,
        finishing: 87,
        defending: 95,
        playmaking: 98,
        height: "6'4\"",
        position: ["PG"],
        market: "N/A",
        traits: [
            { name: "Clamp Time", level: 2 },
            { name: "Deep Volume", level: 1 },
            { name: "Dynamic Defender", level: 1 },
            { name: "Helping Hand", level: 3 },
            { name: "IQ", level: 2 },
            { name: "Selfless", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 2 }
        ]
    },


    // ========================================
    // BATCH 3
    // ========================================

    {
        id: "jayson-tatum",
        name: "Jayson Tatum",
        image: "images/JaysonTatumBasketbot.png",
        rarity: "Exclusive v2",
        shooting: 94,
        finishing: 94,
        defending: 93,
        playmaking: 88,
        height: "6'8\"",
        position: ["SF", "PF"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 2 },
            { name: "Clamp Time", level: 1 },
            { name: "Deep Volume", level: 2 },
            { name: "Dynamic Defender", level: 1 },
            { name: "Ferocious Finisher", level: 2 },
            { name: "Helping Hand", level: 1 },
            { name: "Icy", level: 1 },
            { name: "Midrange Maestro", level: 2 },
            { name: "Post Punisher", level: 1 },
            { name: "Resilient Rebounder", level: 2 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 1 },
            { name: "Unfazed", level: 2 }
        ]
    },

    {
        id: "jalen-williams",
        name: "Jalen Williams",
        image: "images/JalenWilliamsBasketbot.png",
        rarity: "Playoff Performer v2",
        shooting: 92,
        finishing: 93,
        defending: 94,
        playmaking: 89,
        height: "6'5\"",
        position: ["SG", "SF"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 2 },
            { name: "Clamp Time", level: 1 },
            { name: "Deep Volume", level: 1 },
            { name: "Dynamic Defender", level: 2 },
            { name: "Ferocious Finisher", level: 1 },
            { name: "Helping Hand", level: 1 },
            { name: "Icy", level: 1 },
            { name: "IQ", level: 1 },
            { name: "Midrange Maestro", level: 3 },
            { name: "Shot Stopper", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 2 },
            { name: "Unfazed", level: 2 }
        ]
    },

    {
        id: "lebron-james-frost-v4",
        name: "LeBron James",
        image: "images/LeBronJamesFrostV4Basketbot.png",
        rarity: "Frost v4",
        shooting: 89,
        finishing: 95,
        defending: 88,
        playmaking: 96,
        height: "6'9\"",
        position: ["SF", "PF"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 2 },
            { name: "Deep Volume", level: 1 },
            { name: "Dynamic Defender", level: 2 },
            { name: "Ferocious Finisher", level: 2 },
            { name: "Helping Hand", level: 2 },
            { name: "IQ", level: 2 },
            { name: "Midrange Maestro", level: 1 },
            { name: "Post Punisher", level: 1 },
            { name: "Resilient Rebounder", level: 1 },
            { name: "Shot Stopper", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Unfazed", level: 2 }
        ]
    },

    {
        id: "tyrese-haliburton",
        name: "Tyrese Haliburton",
        image: "images/TyreseHaliburtonBasketbot.png",
        rarity: "Playoff Performer v2",
        shooting: 93,
        finishing: 90,
        defending: 88,
        playmaking: 97,
        height: "6'5\"",
        position: ["PG"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 2 },
            { name: "Deep Volume", level: 2 },
            { name: "Helping Hand", level: 3 },
            { name: "Icy", level: 2 },
            { name: "IQ", level: 2 },
            { name: "Midrange Maestro", level: 2 },
            { name: "Selfless", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 2 },
            { name: "Unfazed", level: 1 }
        ]
    },

    {
        id: "cooper-flagg",
        name: "Cooper Flagg",
        image: "images/CooperFlaggBasketbot.png",
        rarity: "Future Star v3",
        shooting: 89,
        finishing: 94,
        defending: 94,
        playmaking: 90,
        height: "6'9\"",
        position: ["SF", "PF"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 2 },
            { name: "Clamp Time", level: 2 },
            { name: "Deep Volume", level: 1 },
            { name: "Dynamic Defender", level: 1 },
            { name: "Ferocious Finisher", level: 2 },
            { name: "Helping Hand", level: 1 },
            { name: "Icy", level: 1 },
            { name: "Midrange Maestro", level: 2 },
            { name: "Resilient Rebounder", level: 1 },
            { name: "Shot Stopper", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 1 },
            { name: "Unfazed", level: 1 }
        ]
    },

    {
        id: "jerry-west",
        name: "Jerry West",
        image: "images/JerryWestBasketbot.png",
        rarity: "Historic",
        shooting: 93,
        finishing: 89,
        defending: 92,
        playmaking: 93,
        height: "6'3\"",
        position: ["PG", "SG"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 2 },
            { name: "Clamp Time", level: 2 },
            { name: "Deep Volume", level: 1 },
            { name: "Helping Hand", level: 1 },
            { name: "Icy", level: 1 },
            { name: "IQ", level: 2 },
            { name: "Midrange Maestro", level: 2 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 2 },
            { name: "Unfazed", level: 2 }
        ]
    },

    {
        id: "jamal-murray",
        name: "Jamal Murray",
        image: "images/JamalMurrayBasketbot.png",
        rarity: "Champion",
        shooting: 94,
        finishing: 92,
        defending: 88,
        playmaking: 93,
        height: "6'4\"",
        position: ["PG", "SG"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 2 },
            { name: "Deep Volume", level: 2 },
            { name: "Ferocious Finisher", level: 1 },
            { name: "Icy", level: 1 },
            { name: "IQ", level: 1 },
            { name: "Midrange Maestro", level: 2 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 1 },
            { name: "Unfazed", level: 2 }
        ]
    },

    {
        id: "devin-booker",
        name: "Devin Booker",
        image: "images/DevinBookerBasketbot.png",
        rarity: "Frost v3",
        shooting: 94,
        finishing: 93,
        defending: 88,
        playmaking: 91,
        height: "6'5\"",
        position: ["SG", "PG"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 2 },
            { name: "Deep Volume", level: 2 },
            { name: "Dynamic Defender", level: 1 },
            { name: "Ferocious Finisher", level: 1 },
            { name: "Helping Hand", level: 2 },
            { name: "Icy", level: 1 },
            { name: "IQ", level: 1 },
            { name: "Midrange Maestro", level: 2 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 1 },
            { name: "Unfazed", level: 2 }
        ]
    },

    {
        id: "kevin-durant",
        name: "Kevin Durant",
        image: "images/KevinDurantBasketbot.png",
        rarity: "Exclusive",
        shooting: 96,
        finishing: 92,
        defending: 86,
        playmaking: 92,
        height: "6'10\"",
        position: ["SF", "PF"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 2 },
            { name: "Deep Volume", level: 2 },
            { name: "Dynamic Defender", level: 1 },
            { name: "Ferocious Finisher", level: 1 },
            { name: "Hog", level: 1 },
            { name: "Icy", level: 2 },
            { name: "IQ", level: 1 },
            { name: "Midrange Maestro", level: 2 },
            { name: "Resilient Rebounder", level: 1 },
            { name: "Shot Stopper", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Unfazed", level: 2 }
        ]
    },

    {
        id: "lamelo-ball",
        name: "LaMelo Ball",
        image: "images/LaMeloBallBasketbot.png",
        rarity: "Future Star",
        shooting: 91,
        finishing: 88,
        defending: 93,
        playmaking: 94,
        height: "6'6\"",
        position: ["PG", "SG"],
        market: "N/A",
        traits: [
            { name: "Area Architect", level: 1 },
            { name: "Clamp Time", level: 1 },
            { name: "Helping Hand", level: 2 },
            { name: "Hog", level: 2 },
            { name: "Icy", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Unfazed", level: 2 }
        ]
    },

    {
        id: "mike-conley",
        name: "Mike Conley",
        image: "images/MikeConleyBasketbot.png",
        rarity: "Synced (Paired with Marc Gasol)",
        shooting: 90,
        finishing: 88,
        defending: 93,
        playmaking: 95,
        height: "6'1\"",
        position: ["PG"],
        market: "N/A",

        synced: {
            partner: "Marc Gasol",
            boosts: {
                shooting: 1,
                finishing: 2,
                defending: 1,
                playmaking: 2
            }
        },

        traits: [
            { name: "Area Architect", level: 1 },
            { name: "Clamp Time", level: 1 },
            { name: "Deep Volume", level: 1 },
            { name: "Dynamic Defender", level: 1 },
            { name: "Helping Hand", level: 2 },
            { name: "IQ", level: 1 },
            { name: "Midrange Maestro", level: 2 },
            { name: "Selfless", level: 1 },
            { name: "Solid Stats", level: 1 },
            { name: "Thief", level: 3 }
        ]
    }

];


// ========================================
// CALCULATE BASE TOTALS
// ========================================

cards.forEach(card => {

    card.total =
        card.shooting +
        card.finishing +
        card.defending +
        card.playmaking;

});


// ========================================
// RARITY ORDER
// ========================================

const rarityOrder = {

    "OOAK": 20,
    "ONE OF A KIND": 20,

    "HISTORIC": 19,
    "FINALS '26": 18,
    "SYNCED": 17,
    "CHAMPION": 16,

    "EXCLUSIVE V2": 15,
    "PLAYOFF PERFORMER V2": 14,
    "PLAYOFF PERFORMER": 13,

    "FROST V4": 12,
    "FROST V3": 11,
    "FROST V2": 10,
    "FROST V1": 9,

    "FUTURE STAR V3": 8,
    "FUTURE STAR V2": 7,
    "FUTURE STAR": 6,

    "EXCLUSIVE": 5,
    "SPECIAL": 4,
    "RARE": 3,
    "UNCOMMON": 2,
    "COMMON": 1

};