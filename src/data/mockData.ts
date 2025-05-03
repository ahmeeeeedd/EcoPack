// Mock user data
export const currentUser = {
  id: 1,
  name: "Madame NAOUEL ABDELMOULA",
  email: "Naoul@example.com",
  points: 2750,
  rank: 8,
  pointsHistory: [
    { date: "2025-01-01", points: 100, product: "Café Bio" },
    { date: "2025-01-08", points: 150, product: "Dattes Deglet Nour" },
    { date: "2025-01-15", points: 200, product: "Huile d'olive extra vierge" },
    { date: "2025-01-22", points: 300, product: "Pâtisseries tunisiennes" },
    { date: "2025-01-29", points: 250, product: "Amandes Sfax" },
    { date: "2025-02-05", points: 350, product: "Miel Boumiza" },
    { date: "2025-02-12", points: 400, product: "Harissa artisanale" },
    { date: "2025-02-19", points: 500, product: "Figues séchées" },
    { date: "2025-02-26", points: 500, product: "Eau minérale Aïn Garci" },
  ],
  impact: {
    bottlesSaved: 183,
    treesPreserved: 12,
    co2Reduced: 35,
    plasticWaste: 27,
  },
};

// Mock leaderboard data
export const leaderboard = [
  { id: 5, name: "Chayma Nouri", points: 4830, rank: 1 },
  { id: 8, name: "Maher Mahmoudi", points: 4215, rank: 2 },
  { id: 3, name: "Ahmed hnana", points: 3950, rank: 3 },
  { id: 12, name: "Ibtihel Ayari", points: 3760, rank: 4 },
  { id: 7, name: "Yassin Bouktif", points: 3580, rank: 5 },
  { id: 9, name: "Selim Boujneh", points: 3320, rank: 6 },
  { id: 2, name: "Maram Cheikh", points: 3105, rank: 7 },
  { id: 1, name: "Ameni Ziadi", points: 2750, rank: 8 },
  { id: 6, name: "Olfa Riahi", points: 2490, rank: 9 },
  { id: 10, name: "Slim Feriani", points: 2320, rank: 10 },
];

// Mock rewards data
export const rewards = [
  {
    id: 1,
    title: "Réduction de 15%",
    sponsor: "Café Bondin",
    description: "Réduction sur tous les cafés et produits bio",
    pointsCost: 500,
    image:
      "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Entrée gratuite",
    sponsor: "Parc Écologique de Zaghouan",
    description: "Entrée gratuite pour une journée découverte",
    pointsCost: 750,
    image:
      "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Produit offert",
    sponsor: "Huiles El Baraka",
    description: "Une bouteille d'huile d'olive bio offerte",
    pointsCost: 1000,
    image:
      "https://www.huiledoliveitalienne.com/img/cms/blog/14/huile-d-olive.jpg",
  },
  {
    id: 4,
    title: "Panier éco-responsable",
    sponsor: "Marché Vert de Sousse",
    description: "Un panier de produits locaux de saison",
    pointsCost: 1500,
    image:
      "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// Mock sponsors data
export const sponsors = [
  {
    id: 1,
    name: "Délices de Carthage",
    logo: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Spécialiste des produits alimentaires traditionnels tunisiens",
    impact: "A évité 1250 kg de déchets plastiques en 2025",
    website: "https://example.com/delices-de-carthage",
  },
  {
    id: 2,
    name: "Café Bondin",
    logo: "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Producteur de café bio et commerce équitable",
    impact: "A sauvé 3400 bouteilles de l'océan depuis 2024",
    website: "https://example.com/cafe-bondin",
  },
  {
    id: 3,
    name: "Huiles El Baraka",
    logo: "https://www.huiledoliveitalienne.com/img/cms/blog/14/huile-d-olive.jpg",
    description: "Producteur d'huile d'olive extra vierge depuis 1985",
    impact: "A réduit ses émissions de CO₂ de 75 tonnes en 2024",
    website: "https://example.com/huiles-el-baraka",
  },
  {
    id: 4,
    name: "Eaux Jebel",
    logo: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Eau minérale naturelle des montagnes tunisiennes",
    impact: "A adopté 100% d'emballages biodégradables en 2024",
    website: "https://example.com/eaux-jebel",
  },
  {
    id: 5,
    name: "Marché Vert de Sousse",
    logo: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Marché de produits bio et locaux à Sousse",
    impact: "A éliminé tous les emballages plastiques depuis 2023",
    website: "https://example.com/marche-vert",
  },
  {
    id: 6,
    name: "Parc Écologique de Zaghouan",
    logo: "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Parc naturel et centre d'éducation environnementale",
    impact: "A planté 12000 arbres endémiques depuis 2023",
    website: "https://example.com/parc-zaghouan",
  },
];

// Mock QR code product data
export const qrProducts = [
  {
    id: "PROD-004",
    name: "Eau Minérale Naturelle",
    producer: "Eaux Jebel",
    points: 150,
    packaging: "Algues tunisiennes",
    impactBottles: 3,
    impactTrees: 0.3,
    impactCO2: 0.6,
    impactPlastic: 0.4,
  },
];
