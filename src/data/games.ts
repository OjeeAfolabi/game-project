export type Game = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  developer: string;
  publisher: string;
  releaseDate: string;
  platforms: string[];
  gameplayMechanics: string[];
  story: string;
  setting: string;
  combatStyle: string;
  worldDesign: string;
  playerChoiceImpact: boolean;
  multiplayer: boolean;
  expansionContent: string[];
  difficultyLevel: string;
  progressionSystem: string;
};

export const games: Game[] = [
  {
    id: "1",
    title: "The Witcher 3: Wild Hunt Complete Edition",
    slug: "the-witcher-3-wild-hunt-complete-edition",
    category: "action-rpg",
    description:
      "An expansive open-world dark fantasy RPG with rich storytelling and impactful choices.",
    image: "https://wallpaperaccess.com/full/147237.png", // official next-gen cover :contentReference[oaicite:2]{index=2}
    rating: 4.9,
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "2015-05-19",
    platforms: ["PC", "PS4/5", "Xbox One/Series X"],
    gameplayMechanics: ["Open World", "Boss Battles", "Narrative Choices"],
    story:
      "Geralt searches for Ciri while navigating a war-torn world full of monsters and conspiracy.",
    setting: "The Continent — a sprawling dark fantasy realm",
    combatStyle: "Melee, magic, and ranged",
    worldDesign: "Expansive open-world with dynamic ecosystems",
    playerChoiceImpact: true,
    multiplayer: false,
    expansionContent: ["Hearts of Stone", "Blood and Wine"],
    difficultyLevel: "Variable",
    progressionSystem: "Leveling via gear, mutations, and skill trees",
  },
  {
    id: "2",
    title: "Elden Ring",
    slug: "elden-ring",
    category: "action-rpg",
    description:
      "An expansive open-world dark fantasy RPG born from the minds of Miyazaki and Martin.",
    image: "https://wallpaperaccess.com/full/2651908.png",
    rating: 4.9,
    developer: "FromSoftware",
    publisher: "Bandai Namco",
    releaseDate: "2022-02-25",
    platforms: ["PC", "PS4/5", "Xbox One/Series X"],
    gameplayMechanics: ["Open World", "Mounted Combat", "Boss Encounters"],
    story:
      "Explore the Lands Between and restore the Elden Ring to become Elden Lord.",
    setting: "The Lands Between — a sprawling, haunting fantasy world",
    combatStyle: "Melee, magic, ranged",
    worldDesign: "Massive open-world with hidden dungeons",
    playerChoiceImpact: true,
    multiplayer: true,
    expansionContent: [],
    difficultyLevel: "Hard",
    progressionSystem: "Runes, gear upgrades, and skill builds",
  },
  {
    id: "3",
    title: "The Legend of Zelda: Ocarina of Time",
    slug: "the-legend-of-zelda-ocarina-of-time",
    category: "Action-Adventure",
    description:
      "A timeless action-adventure with rich storytelling and groundbreaking 3D gameplay.",
    image: "https://wallpaperaccess.com/thumb/407603.jpg",
    rating: 5.0,
    developer: "Nintendo EAD",
    publisher: "Nintendo",
    releaseDate: "1998-11-21",
    platforms: ["Nintendo 64", "3DS", "Switch"],
    gameplayMechanics: ["Z-targeting", "Time Travel", "Puzzle Solving"],
    story: "Link travels through time to stop Ganondorf and save Hyrule.",
    setting: "Hyrule — a vibrant fantasy kingdom",
    combatStyle: "Melee and ranged",
    worldDesign: "Open-world, dungeons, varied environments",
    playerChoiceImpact: false,
    multiplayer: false,
    expansionContent: [],
    difficultyLevel: "Medium",
    progressionSystem: "Item collection and equipment upgrades",
  },
  {
    id: "4",
    slug: "prince-of-persia",
    title: "Prince of Persia: The Sands of Time",
    category: "Action-Adventure",
    description:
      "A cinematic platformer with parkour-based navigation, puzzle solving, and time manipulation mechanics.",
    image: "https://wallpaperaccess.com/thumb/1122256.jpg",
    rating: 4.8,
    developer: "Ubisoft Montreal",
    publisher: "Ubisoft",
    releaseDate: "2003-11-21",
    platforms: ["PC", "PlayStation 2", "Xbox", "GameCube"],
    gameplayMechanics: [
      "Parkour",
      "Sword Combat",
      "Time Manipulation",
      "Puzzle Solving",
    ],
    story:
      "A young prince accidentally unleashes the Sands of Time and must fix his mistake to save the kingdom.",
    setting: "Fantasy Middle Eastern Kingdom",
    combatStyle: "Sword-based melee combat",
    worldDesign: "Linear level progression",
    playerChoiceImpact: false,
    multiplayer: false,
    expansionContent: [],
    difficultyLevel: "Moderate",
    progressionSystem: "Story-driven with ability upgrades",
  },
  {
    id: "5",
    title: "Grand Theft Auto V",
    slug: "grand-theft-auto-v",
    category: "Action-Adventure",
    description:
      "An open-world crime epic with three protagonists, heists, and sprawling cityscapes.",
    image: "https://wallpaperaccess.com/thumb/1105744.jpg",
    rating: 4.8,
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    releaseDate: "2013-09-17",
    platforms: ["PS3", "PS4", "Xbox 360", "Xbox One", "PC"],
    gameplayMechanics: ["Heists", "Character Switching", "Vehicle Dynamics"],
    story:
      "Three criminals execute major heists while dealing with personal demons.",
    setting: "Los Santos — fictional city and surroundings",
    combatStyle: "Third-person gunplay and melee",
    worldDesign: "Massive open-world urban and rural",
    playerChoiceImpact: true,
    multiplayer: true,
    expansionContent: ["GTA Online Updates"],
    difficultyLevel: "Medium",
    progressionSystem: "Money-based unlocks and upgrades",
  },
  {
    id: "6",
    title: "Half-Life 2",
    slug: "half-life-2",
    category: "first-person-shooter",
    description:
      "A groundbreaking FPS with physics-driven gameplay and immersive narrative.",
    image: "https://wallpaperaccess.com/full/2001826.jpg",
    rating: 4.9,
    developer: "Valve",
    publisher: "Valve",
    releaseDate: "2004-11-16",
    platforms: ["PC", "Xbox", "Xbox 360"],
    gameplayMechanics: ["Physics", "Gravity Gun", "Puzzle Solving"],
    story: "Gordon Freeman leads a rebellion against the Combine in City 17.",
    setting: "Dystopian City 17",
    combatStyle: "FPS with environmental tactics",
    worldDesign: "Linear yet immersive levels",
    playerChoiceImpact: false,
    multiplayer: false,
    expansionContent: ["Episode One", "Episode Two"],
    difficultyLevel: "Medium",
    progressionSystem: "Story progression",
  },
  {
    id: "7",
    slug: "assassins-creed",
    title: "Assassin's Creed",
    category: "Action-Adventure",
    description:
      "A stealth-based action game where players explore historical settings, using parkour, combat, and assassinations to complete missions.",
    image: "https://wallpaperaccess.com/thumb/4636532.jpg",
    rating: 4.9,
    developer: "Ubisoft Montreal",
    publisher: "Ubisoft",
    releaseDate: "2007-11-13",
    platforms: ["PC", "PlayStation 3", "Xbox 360"],
    gameplayMechanics: [
      "Stealth",
      "Parkour",
      "Assassination",
      "Open World Exploration",
    ],
    story:
      "A bartender is kidnapped and forced to relive the memories of an ancestor who was an Assassin during the Third Crusade.",
    setting: "Holy Land, 1191 AD",
    combatStyle: "Melee and stealth-based assassinations",
    worldDesign: "Historical open world",
    playerChoiceImpact: true,
    multiplayer: false,
    expansionContent: [],
    difficultyLevel: "Moderate",
    progressionSystem: "Mission-based with skill unlocks",
  },
  {
    id: "8",
    title: "Mortal Kombat 4",
    slug: "mortal-kombat-4",
    category: "Fighting",
    description:
      "The first fully 3D Mortal Kombat featuring weapons, new fatalities, and classic martial arts arcade combat.",
    image: "https://wallpaperaccess.com/thumb/908165.jpg",
    rating: 5.0,
    developer: "Midway Games (arcade), Eurocom (ports)",
    publisher: "Midway Games",
    releaseDate: "1997-10-08",
    platforms: ["Arcade", "PlayStation", "Nintendo 64", "PC"],
    gameplayMechanics: ["3D Graphics", "Weapons", "Fatalities", "Fatal Combos"],
    story:
      "Legendary fighters battle to stop the escaped Elder God Shinnok from conquering all realms.",
    setting: "Various realms including Earthrealms and Outworld",
    combatStyle: "2D fighting in 3D arena",
    worldDesign: "Stage-based combat arenas",
    playerChoiceImpact: false,
    multiplayer: true,
    expansionContent: [],
    difficultyLevel: "Medium",
    progressionSystem: "Arcade ladder progression",
  },
  {
    id: "9",
    title: "Devil May Cry",
    slug: "devil-may-cry",
    category: "Action-Adventure",
    description:
      "A groundbreaking fast-paced action game featuring stylish combat as demon hunter Dante.",
    image: "https://wallpaperaccess.com/thumb/1105993.jpg",
    rating: 4.7,
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "2001-08-23",
    platforms: ["PlayStation 2", "later ports"],
    gameplayMechanics: ["Stylish Combats", "Combo Grading", "Platforming"],
    story: "Dante, a half-demon, seeks to vanquish the demon lord Mundus.",
    setting: "Mallet Island – haunted gothic environment",
    combatStyle: "Fast-action melee with firearms",
    worldDesign: "Mission-based levels with gothic architecture",
    playerChoiceImpact: false,
    multiplayer: false,
    expansionContent: [],
    difficultyLevel: "Hard",
    progressionSystem: "Weapon unlocks and style ranking",
  },
  {
    id: "10",
    title: "God Hand",
    slug: "god-hand",
    category: "Adventure",
    description:
      "A quirky, over-the-top brawler where players string together combos and fight demons using the legendary God Hand.",
    image: "https://wallpaperaccess.com/full/1593483.jpg",
    rating: 4.2,
    developer: "Clover Studio",
    publisher: "Capcom",
    releaseDate: "2006-06-30",
    platforms: ["PlayStation 2"],
    gameplayMechanics: ["Combo Mapping", "Humor", "Beat 'em Up Mechanics"],
    story:
      "A martial artist wields the God Hand to protect his companion and save the world from demons.",
    setting: "Urban-with-demons plus surreal locations",
    combatStyle: "Hand-to-hand beat-'em-up",
    worldDesign: "Stage-based progression",
    playerChoiceImpact: false,
    multiplayer: false,
    expansionContent: [],
    difficultyLevel: "Very Hard",
    progressionSystem: "Combo skill customization",
  },
];

export const categories = [
  {
    slug: "action-adventure",
    name: "Action-Adventure",
  },
  {
    slug: "fighting",
    name: "Fighting",
  },
  {
    slug: "first-person-shooter",
    name: "First-Person Shooter",
  },
  {
    slug: "action-rpg",
    name: "Action RPG",
  },

];
