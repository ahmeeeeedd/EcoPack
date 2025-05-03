// Mock user data
export const currentUser = {
  id: 1,
  name: 'Amina Ben Salah',
  email: 'amina@example.com',
  points: 2750,
  rank: 8,
  pointsHistory: [
    { date: '2025-01-01', points: 100, product: 'Café Bio' },
    { date: '2025-01-08', points: 150, product: 'Dattes Deglet Nour' },
    { date: '2025-01-15', points: 200, product: 'Huile d\'olive extra vierge' },
    { date: '2025-01-22', points: 300, product: 'Pâtisseries tunisiennes' },
    { date: '2025-01-29', points: 250, product: 'Amandes Sfax' },
    { date: '2025-02-05', points: 350, product: 'Miel de thym' },
    { date: '2025-02-12', points: 400, product: 'Harissa artisanale' },
    { date: '2025-02-19', points: 500, product: 'Figues séchées' },
    { date: '2025-02-26', points: 500, product: 'Eau minérale Aïn Garci' },
  ],
  impact: {
    bottlesSaved: 183,
    treesPreserved: 12,
    co2Reduced: 35,
    plasticWaste: 27
  }
};

// Mock leaderboard data
export const leaderboard = [
  { id: 5, name: 'Mehdi Khelifi', points: 4830, rank: 1 },
  { id: 8, name: 'Leila Trabelsi', points: 4215, rank: 2 },
  { id: 3, name: 'Karim Jebali', points: 3950, rank: 3 },
  { id: 12, name: 'Sonia Ben Amor', points: 3760, rank: 4 },
  { id: 7, name: 'Ahmed Guizani', points: 3580, rank: 5 },
  { id: 9, name: 'Rim Gharbi', points: 3320, rank: 6 },
  { id: 2, name: 'Youssef Chahed', points: 3105, rank: 7 },
  { id: 1, name: 'Amina Ben Salah', points: 2750, rank: 8 },
  { id: 6, name: 'Olfa Riahi', points: 2490, rank: 9 },
  { id: 10, name: 'Slim Feriani', points: 2320, rank: 10 },
];

// Mock rewards data
export const rewards = [
  { 
    id: 1, 
    title: 'Réduction de 15%',
    sponsor: 'Café Bondin', 
    description: 'Réduction sur tous les cafés et produits bio',
    pointsCost: 500,
    image: 'https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 2, 
    title: 'Entrée gratuite',
    sponsor: 'Parc Écologique de Zaghouan', 
    description: 'Entrée gratuite pour une journée découverte',
    pointsCost: 750,
    image: 'https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 3, 
    title: 'Produit offert',
    sponsor: 'Huiles El Baraka', 
    description: 'Une bouteille d\'huile d\'olive bio offerte',
    pointsCost: 1000,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 4, 
    title: 'Panier éco-responsable',
    sponsor: 'Marché Vert de Sousse', 
    description: 'Un panier de produits locaux de saison',
    pointsCost: 1500,
    image: 'https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];

// Mock sponsors data
export const sponsors = [
  {
    id: 1,
    name: 'Délices de Carthage',
    logo: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Spécialiste des produits alimentaires traditionnels tunisiens',
    impact: 'A évité 1250 kg de déchets plastiques en 2025',
    website: 'https://example.com/delices-de-carthage'
  },
  {
    id: 2,
    name: 'Café Bondin',
    logo: 'https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Producteur de café bio et commerce équitable',
    impact: 'A sauvé 3400 bouteilles de l\'océan depuis 2024',
    website: 'https://example.com/cafe-bondin'
  },
  {
    id: 3,
    name: 'Huiles El Baraka',
    logo: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Producteur d\'huile d\'olive extra vierge depuis 1985',
    impact: 'A réduit ses émissions de CO₂ de 75 tonnes en 2024',
    website: 'https://example.com/huiles-el-baraka'
  },
  {
    id: 4,
    name: 'Eaux Jebel',
    logo: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Eau minérale naturelle des montagnes tunisiennes',
    impact: 'A adopté 100% d\'emballages biodégradables en 2024',
    website: 'https://example.com/eaux-jebel'
  },
  {
    id: 5,
    name: 'Marché Vert de Sousse',
    logo: 'https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Marché de produits bio et locaux à Sousse',
    impact: 'A éliminé tous les emballages plastiques depuis 2023',
    website: 'https://example.com/marche-vert'
  },
  {
    id: 6,
    name: 'Parc Écologique de Zaghouan',
    logo: 'https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Parc naturel et centre d\'éducation environnementale',
    impact: 'A planté 12000 arbres endémiques depuis 2023',
    website: 'https://example.com/parc-zaghouan'
  },
];

// Mock QR code product data
export const qrProducts = [
  {
    id: 'PROD-001',
    name: 'Café Bio Moulu',
    producer: 'Café Bondin',
    points: 100,
    packaging: 'Fibres de palmier-dattier',
    impactBottles: 3,
    impactTrees: 0.25,
    impactCO2: 0.5,
    impactPlastic: 0.3
  },
  {
    id: 'PROD-002',
    name: 'Huile d\'Olive Extra Vierge',
    producer: 'Huiles El Baraka',
    points: 200,
    packaging: 'Algues tunisiennes',
    impactBottles: 5,
    impactTrees: 0.5,
    impactCO2: 1.2,
    impactPlastic: 0.8
  },
  {
    id: 'PROD-003',
    name: 'Dattes Deglet Nour',
    producer: 'Délices de Carthage',
    points: 150,
    packaging: 'Fibres de palmier-dattier',
    impactBottles: 4,
    impactTrees: 0.3,
    impactCO2: 0.7,
    impactPlastic: 0.5
  },
  {
    id: 'PROD-004',
    name: 'Eau Minérale Naturelle',
    producer: 'Eaux Jebel',
    points: 150,
    packaging: 'Algues tunisiennes',
    impactBottles: 3,
    impactTrees: 0.3,
    impactCO2: 0.6,
    impactPlastic: 0.4
  },
];