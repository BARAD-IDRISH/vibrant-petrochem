export interface TechSpecRow {
  property: string;
  method: string;
  unit: string;
  typical: string;
}

export interface ProductSubItem {
  name: string;
  id: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Energy & Petroleum' | 'Base Oils & Lubricant Stocks' | 'Chemicals & Solvents';
  shortDesc: string;
  fullDesc: string;
  specs: string[];
  techSpecs?: TechSpecRow[];
  subItems?: ProductSubItem[];
  applications: string[];
  imageUrl: string;
  badge?: string;
}

export const CATEGORY_INFO: Record<string, string> = {
  'Energy & Petroleum': 'Primary distillates, fuel oils, naphtha, and synthetic fuels.',
  'Base Oils & Lubricant Stocks': 'Raw mineral and synthetic base stocks and additive packages.',
  'Chemicals & Solvents': 'Specialty chemicals, industrial polymers, and solvents.',
};

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName: 'Users' | 'Clock' | 'Globe' | 'TrendingUp' | 'ShieldCheck' | 'Cpu';
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Cpu' | 'Users' | 'Sliders' | 'Globe2';
}

export const COMPANY_INFO = {
  name: 'VIBRANT PETROCHEM FZE',
  tagline: 'Leading Commodity & Petrochemical Trading Partner in the Gulf Region',
  established: 2018,
  headquarters: 'United Arab Emirates (UAE)',
  coreStatement:
    'Transforming the petrochemical business in the Gulf region with an expansive product range and an unwavering commitment to quality, transparency, and safety.',
  phone: '+971 55 927 1528',
  email: 'ashish@vibrantpetro.com',
  website: 'https://vibrantpetro.com/',
  address: 'Al Shmookh Business Center, One UAQ, UAQ Free Trade Zone, Umm Al Quwain, U.A.E.',
  hours: {
    weekdays: 'Mon - Fri: 10:00 - 18:00',
    saturday: 'Sat & Sun: Closed',
    sunday: 'Sunday: Closed',
  },
  valuesStatement: {
    heading: 'We offer Industrial Solutions that are reliable, efficient, safe and sustainable.',
    paragraph1:
      'We strongly believe in business transparency and ethical behavior practices, building long term trust-based relationship with our clients, suppliers, and associates. We focus on the needs of our counterparties and provide tailor-made solutions. Our fairness and dedication to develop long-term and equitable relationships have earned us trust and respect within the industry.',
    paragraph2:
      'We will continue to remain focused on ramping up and maintaining our position as a contributing player that will transcend Vibrant Petrochem\'s presences globally along with the company\'s principles to run its operations with a high degree of "Self-confidence" to its responsibilities towards the clients, principles, suppliers, and employees in achieving a rewarding long-term relationship.',
  },
};

export const KEY_METRICS: MetricItem[] = [
  {
    id: 'experience',
    value: '10+ Years',
    label: 'Industry Experience',
    subtext: 'Proven excellence across Gulf and global markets',
    iconName: 'Clock',
  },
  {
    id: 'product-lines',
    value: '17+',
    label: 'Global Product Lines',
    subtext: 'Refined oils, synthetic fuels, polymers & solvents',
    iconName: 'Globe',
  },
  {
    id: 'compliance',
    value: '100%',
    label: 'Trade Compliance & Governance',
    subtext: 'Strict adherence to international trade & ISO standards',
    iconName: 'ShieldCheck',
  },
  {
    id: 'innovation',
    value: 'Tech-Driven',
    label: 'Innovation Strength',
    subtext: 'Advanced market analytics & streamlined logistics execution',
    iconName: 'Cpu',
  },
];

export const PRODUCTS: ProductItem[] = [
  // ENERGY & PETROLEUM
  {
    id: 'jet-a1',
    name: 'Jet A-1 Fuel',
    category: 'Energy & Petroleum',
    shortDesc: 'Kerosene-type aviation fuel strictly compliant with international DEF STAN 91-091 & ASTM D1655 standards.',
    fullDesc:
      'Premium aviation turbine fuel refined for commercial and defense jet aircraft engines. Engineered for ultra-low freeze points (-47°C) and rigorous thermal oxidation stability required for extreme altitudes.',
    specs: ['Freeze Point Max -47°C', 'Flash Point Min 38°C', 'ASTM D1655 / DEF STAN 91-091', 'Strict Quality QC Assurance'],
    techSpecs: [
      { property: 'Density @ 15°C', method: 'ASTM D4052', unit: 'kg/m³', typical: '775 - 840' },
      { property: 'Freeze Point', method: 'ASTM D2386', unit: '°C', typical: 'Max -47' },
      { property: 'Flash Point (Abel)', method: 'ASTM D56 / IP 170', unit: '°C', typical: 'Min 38' },
      { property: 'Smoke Point', method: 'ASTM D1322', unit: 'mm', typical: 'Min 25.0' },
      { property: 'Total Sulfur', method: 'ASTM D4294', unit: '% mass', typical: 'Max 0.30' },
    ],
    applications: ['Commercial Aviation', 'Cargo Aircraft Fleets', 'Defense & Military Jets', 'Turbine Engine Operations'],
    imageUrl: '/products/jet_a1.png',
  },
  {
    id: 'fuel-oil',
    name: 'Fuel Oils',
    category: 'Energy & Petroleum',
    shortDesc: 'Industrial grade residual fuel oils (180 CST & 360 CST) engineered for thermal power plants and marine bunkering.',
    fullDesc:
      'Heavy residual fuel oil optimized for high-capacity boilers, thermal power stations, and ocean vessels. Formulated with controlled kinematic viscosity and standardized calorific values.',
    specs: ['Viscosity 180 CST & 360 CST', 'Density @15°C: 0.985 max', 'Flash Point > 66°C', 'Low Sediment Content'],
    techSpecs: [
      { property: 'Kinematic Viscosity @ 50°C', method: 'ASTM D445', unit: 'cSt', typical: '180 - 380 (Grade dependent)' },
      { property: 'Density @ 15°C', method: 'ASTM D1298', unit: 'kg/m³', typical: 'Max 991.0' },
      { property: 'Flash Point (PMCC)', method: 'ASTM D93', unit: '°C', typical: 'Min 66.0' },
      { property: 'Pour Point', method: 'ASTM D97', unit: '°C', typical: 'Max 24 - 30' },
      { property: 'Micro Carbon Residue', method: 'ASTM D4530', unit: '% mass', typical: 'Max 15.0' },
    ],
    applications: ['Industrial Steam Boilers', 'Thermal Power Generation', 'Bunkering Operations', 'Furnace Operations'],
    imageUrl: '/products/fuel_oil.png',
  },
  {
    id: 'distillate-oil',
    name: 'Distillate Oil',
    category: 'Energy & Petroleum',
    shortDesc: 'Primary hydrocarbon distillate fraction ideal for custom fuel blending and industrial heat generation.',
    fullDesc:
      'Light to medium hydrocarbon distillates processed for optimal volatility, controlled flash points, and minimal sulfur residues in industrial heating burners.',
    specs: ['Density 0.820 - 0.860 g/cm³', 'Controlled Boiling Range', 'Low Carbon Residue', 'Clean Combustion'],
    techSpecs: [
      { property: 'Density @ 15°C', method: 'ASTM D4052', unit: 'g/cm³', typical: '0.820 - 0.860' },
      { property: 'Kinematic Viscosity @ 40°C', method: 'ASTM D445', unit: 'cSt', typical: '2.0 - 4.5' },
      { property: 'Flash Point (PMCC)', method: 'ASTM D93', unit: '°C', typical: 'Min 55' },
      { property: 'Sulfur Content', method: 'ASTM D2622', unit: 'mg/kg', typical: 'Max 50' },
      { property: 'Distillation T90', method: 'ASTM D86', unit: '°C', typical: 'Max 360' },
    ],
    applications: ['Industrial Kilns & Furnaces', 'Diesel Blending Feedstock', 'Agricultural Machinery', 'Solvent Refining'],
    imageUrl: '/products/distillate_oil.png',
  },
  {
    id: 'naphtha-oil',
    name: 'Naphtha',
    category: 'Energy & Petroleum',
    shortDesc: 'Straight-run light and heavy naphtha feedstocks for steam crackers, olefin production, and high-octane gasoline blending.',
    fullDesc:
      'Straight-run light and heavy naphtha fractions extracted from crude oil distillation. Critical raw material for steam cracking units producing ethylene, propylene, and BTX aromatics.',
    specs: ['Light Naphtha (C5-C6)', 'Heavy Naphtha (C7-C9)', 'Purity Certified', 'Low Sulfur Content'],
    techSpecs: [
      { property: 'Density @ 15°C', method: 'ASTM D4052', unit: 'g/cm³', typical: '0.650 - 0.750' },
      { property: 'Initial Boiling Point (IBP)', method: 'ASTM D86', unit: '°C', typical: '35 - 90' },
      { property: 'Final Boiling Point (FBP)', method: 'ASTM D86', unit: '°C', typical: '160 - 210' },
      { property: 'Total Aromatics', method: 'ASTM D5443', unit: '% vol', typical: '5.0 - 15.0' },
      { property: 'Sulfur Content', method: 'ASTM D3120', unit: 'ppm', typical: 'Max 100' },
    ],
    applications: ['Steam Cracker Feedstock', 'Reformer Feedstock', 'High-Octane Gas Blend stock', 'Chemical Synthesis'],
    imageUrl: '/products/naphtha_oil.png',
  },
  {
    id: 'gtl-fuel',
    name: 'GTL Fuels',
    category: 'Energy & Petroleum',
    shortDesc: 'Clean-burning Gas-to-Liquid synthetic fuels converted from natural gas with zero sulfur and high cetane number.',
    fullDesc:
      'Synthetic Gas-To-Liquid (GTL) fuel converted from natural gas, offering zero sulfur content, virtually no aromatics, low emissions, and high cetane number for specialized combustion.',
    specs: ['Zero Sulfur Content', 'Cetane Rating > 70', 'Low Odor & Low Toxicity', 'Flash Point Compliant'],
    techSpecs: [
      { property: 'Cetane Number', method: 'ASTM D613', unit: '-', typical: 'Min 70 - 75' },
      { property: 'Density @ 15°C', method: 'ASTM D4052', unit: 'kg/m³', typical: '775 - 785' },
      { property: 'Flash Point (PMCC)', method: 'ASTM D93', unit: '°C', typical: 'Min 80' },
      { property: 'Total Sulfur', method: 'ASTM D5453', unit: 'mg/kg', typical: 'Max 5 (Near Zero)' },
      { property: 'Polycyclic Aromatics', method: 'EN 12916', unit: '% mass', typical: 'Max 0.1' },
    ],
    applications: ['Heavy Machinery Fuel', 'Off-shore & Marine Gensets', 'Specialty Chemical Processing', 'Precision Cleaning'],
    imageUrl: '/products/gtl_fuel.png',
  },

  // BASE OILS & LUBRICANT STOCKS
  {
    id: 'base-oil',
    name: 'Base Oils (Group I, II & III)',
    category: 'Base Oils & Lubricant Stocks',
    shortDesc: 'Pristine raw mineral and synthetic base stocks for automotive, industrial lubricants, and grease manufacturing.',
    fullDesc:
      'High-grade Group I (SN150, SN500, Brightstock), Group II (N70, N150, N500), Group III, and eco-sustainable recycled base oils. Produced through hydrocracking for high VI and low volatility.',
    specs: ['Group I (SN150, SN500, Brightstock)', 'Group II (N70, N150, N500)', 'Group III High VI', 'Recycled Eco Grade'],
    techSpecs: [
      { property: 'Kinematic Viscosity @ 100°C', method: 'ASTM D445', unit: 'cSt', typical: '4.1 - 10.8 (Grade dependent)' },
      { property: 'Viscosity Index', method: 'ASTM D2270', unit: '-', typical: 'Min 95 (Group I) to Min 122 (Group III)' },
      { property: 'Flash Point (COC)', method: 'ASTM D92', unit: '°C', typical: 'Min 205 - 245' },
      { property: 'Pour Point', method: 'ASTM D97', unit: '°C', typical: 'Max -9 to -15' },
      { property: 'Sulfur Content', method: 'ASTM D2622', unit: '% mass', typical: 'Group I: < 0.30% | Group II/III: < 0.03%' },
    ],
    applications: ['Automotive Engine Oils', 'Hydraulic & Industrial Fluids', 'Gear Oils & Greases', 'Rubber Processing'],
    imageUrl: '/products/base_oil.png',
  },
  {
    id: 'mineral-oil',
    name: 'Mineral Oils (White Oils)',
    category: 'Base Oils & Lubricant Stocks',
    shortDesc: 'Severely hydrotreated transparent white mineral oils for technical applications, plastics, and industrial machinery.',
    fullDesc:
      'Clear, odorless, highly refined white mineral oils. Exceptional thermal stability, non-staining properties, and complete compliance with technical safety standards.',
    specs: ['Saybolt Color +30', 'Odorless & Colorless', 'Low Volatility', 'High Hydrotreatment Level'],
    techSpecs: [
      { property: 'Saybolt Color', method: 'ASTM D156', unit: '-', typical: 'Min +30 (Colorless)' },
      { property: 'Kinematic Viscosity @ 40°C', method: 'ASTM D445', unit: 'cSt', typical: '15.0 - 68.0' },
      { property: 'Density @ 20°C', method: 'ASTM D4052', unit: 'g/cm³', typical: '0.835 - 0.865' },
      { property: 'Flash Point (COC)', method: 'ASTM D92', unit: '°C', typical: 'Min 180 - 220' },
      { property: 'Odor & Taste', method: 'Organoleptic', unit: '-', typical: 'Completely Odorless & Tasteless' },
    ],
    applications: ['Plastic Extrusion & Polymers', 'Textile Lubricants', 'Agricultural Sprays', 'Electrical Insulation'],
    imageUrl: '/products/mineral_oil.png',
  },
  {
    id: 'process-oil',
    name: 'Process Oils',
    category: 'Base Oils & Lubricant Stocks',
    shortDesc: 'Specialized rubber process oils and extender oils engineered for tire manufacturing, elastomers, and polymer compounding.',
    fullDesc:
      'Refined aromatic, paraffinic, and naphthenic process oils designed to enhance elasticity, workability, and tensile strength in rubber compounding, tires, and industrial polymer processing.',
    specs: ['Low Aromatic Content (TDAE / RAE / MES)', 'High Thermal Stability', 'Controlled Viscosity Range', 'Excellent Polymer Compatibility'],
    techSpecs: [
      { property: 'Kinematic Viscosity @ 100°C', method: 'ASTM D445', unit: 'cSt', typical: '9.0 - 32.0' },
      { property: 'Aniline Point', method: 'ASTM D611', unit: '°C', typical: '65 - 105' },
      { property: 'Flash Point (COC)', method: 'ASTM D92', unit: '°C', typical: 'Min 210 - 260' },
      { property: 'PCA Content (IP 346)', method: 'IP 346', unit: '% mass', typical: 'Max 3.0 (TDAE Safe Grade)' },
      { property: 'Density @ 15°C', method: 'ASTM D1298', unit: 'kg/m³', typical: '910 - 960' },
    ],
    applications: ['Tire & Rubber Manufacturing', 'Thermoplastic Elastomers (TPE/TPR)', 'Printing Inks & Adhesives', 'Industrial Rubber Goods'],
    imageUrl: '/products/process_oil.png',
    badge: 'Newly Added',
  },
  {
    id: 'spindle-oil',
    name: 'Spindle Oils',
    category: 'Base Oils & Lubricant Stocks',
    shortDesc: 'Low-viscosity precision lubricant for high-speed machinery spindles, bearings, and textile looms.',
    fullDesc:
      'Refined light mineral lubricant enriched with anti-wear, anti-rust, and anti-foam additives. Designed specifically for high-RPM textile spindles and precision machine tool bearings.',
    specs: ['Low Viscosity ISO VG 5, 10, 15, 22', 'Anti-Oxidant Additives', 'Rapid Air Release', 'Corrosion Inhibited'],
    techSpecs: [
      { property: 'Kinematic Viscosity @ 40°C', method: 'ASTM D445', unit: 'cSt', typical: '9.0 - 24.0 (ISO VG 10-22)' },
      { property: 'Viscosity Index', method: 'ASTM D2270', unit: '-', typical: 'Min 95' },
      { property: 'Flash Point (COC)', method: 'ASTM D92', unit: '°C', typical: 'Min 150 - 180' },
      { property: 'Pour Point', method: 'ASTM D97', unit: '°C', typical: 'Max -12' },
      { property: 'Rust Prevention Test', method: 'ASTM D665A', unit: '-', typical: 'Pass (No Rust)' },
    ],
    applications: ['Textile Spinning Spindles', 'High-Speed Bearing Systems', 'Automated Machine Tools', 'Instrument Lubrication'],
    imageUrl: '/products/spindle_oil.png',
  },
  {
    id: 'lubricant-raw-materials',
    name: 'Lubricant Raw Materials',
    category: 'Base Oils & Lubricant Stocks',
    shortDesc: 'Essential chemical building blocks, viscosity modifiers, pour point depressants, and DI additive packages.',
    fullDesc:
      'Comprehensive portfolio of lubricant formulation components including Detergent-Dispersant packages, ZDDP anti-wear agents, Pour Point Depressants (PPD), and friction modifiers for finished lubricant blending.',
    specs: ['Detergent & Dispersant Packages', 'Anti-Wear (ZDDP) Compounds', 'Pour Point Depressants (PPD)', 'Antioxidants & Anti-Corrosion'],
    techSpecs: [
      { property: 'Total Base Number (TBN)', method: 'ASTM D2896', unit: 'mg KOH/g', typical: '150 - 400 (Detergent Additive)' },
      { property: 'Zinc Content', method: 'ASTM D4951', unit: '% mass', typical: '8.5 - 11.5 (ZDDP Grade)' },
      { property: 'Phosphorus Content', method: 'ASTM D4951', unit: '% mass', typical: '7.5 - 10.0' },
      { property: 'Flash Point (COC)', method: 'ASTM D92', unit: '°C', typical: 'Min 160' },
      { property: 'Kinematic Viscosity @ 100°C', method: 'ASTM D445', unit: 'cSt', typical: '45.0 - 120.0' },
    ],
    applications: ['Custom Lubricant Blending', 'Engine Oil Formulations', 'Industrial Gear & Hydraulic Oils', 'Grease Manufacturing'],
    imageUrl: '/products/lubricant_raw_materials.png',
    badge: 'Newly Added',
  },

  // CHEMICALS & SOLVENTS
  {
    id: 'glycols',
    name: 'Glycols',
    category: 'Chemicals & Solvents',
    shortDesc: 'High-purity Monoethylene Glycol (MEG), Diethylene Glycol (DEG), and Triethylene Glycol (TEG).',
    fullDesc:
      'High-purity MEG, DEG, and TEG. Vital chemical building blocks for textile polyester fibers, PET bottles, industrial coolants, and natural gas drying systems.',
    specs: ['Purity > 99.8%', 'Water Content < 0.1%', 'Color (Pt-Co) < 10', 'Acidity < 0.002%'],
    techSpecs: [
      { property: 'Purity (GC Assay)', method: 'GC Assay', unit: '% mass', typical: 'Min 99.8 (MEG Grade)' },
      { property: 'Density @ 20°C', method: 'ASTM D4052', unit: 'g/cm³', typical: '1.113 - 1.115' },
      { property: 'Water Content', method: 'ASTM E203', unit: '% mass', typical: 'Max 0.08' },
      { property: 'Color (Pt-Co)', method: 'ASTM D1209', unit: 'Hazen', typical: 'Max 10' },
      { property: 'Distillation Range (101.3 kPa)', method: 'ASTM D1078', unit: '°C', typical: '196 - 199' },
    ],
    applications: ['PET Resin & Synthetic Fibers', 'Automotive Coolants & Antifreeze', 'Natural Gas Dehydration', 'Polyurethanes'],
    imageUrl: '/products/glycols.png',
  },
  {
    id: 'n-paraffin',
    name: 'N-Paraffins',
    category: 'Chemicals & Solvents',
    shortDesc: 'Ultra-pure normal paraffins tailored for Linear Alkyl Benzene (LAB) and chlorinated paraffin synthesis.',
    fullDesc:
      'Pristine quality normal paraffin liquid extracted via molecular sieve adsorption. Characterized by high purity, consistent carbon chain distribution (C10-C13 & C14-C17), and low aromatics.',
    specs: ['Carbon Chain C10-C17', 'Purity > 99%', 'Aromatics < 0.5%', 'Low Color Saybolt +30'],
    techSpecs: [
      { property: 'Normal Paraffin Purity', method: 'GC Assay', unit: '% mass', typical: 'Min 99.0' },
      { property: 'Carbon Chain Cut', method: 'GC Distribution', unit: '-', typical: 'C10-C13 / C14-C17' },
      { property: 'Total Aromatics', method: 'ASTM D1840', unit: '% mass', typical: 'Max 0.30' },
      { property: 'Saybolt Color', method: 'ASTM D156', unit: '-', typical: 'Min +30' },
      { property: 'Density @ 15°C', method: 'ASTM D4052', unit: 'g/cm³', typical: '0.745 - 0.770' },
    ],
    applications: ['Detergent Feedstock (LAB)', 'Chlorinated Paraffins', 'Specialty Solvents', 'Rolling Oils'],
    imageUrl: '/products/n_paraffin.png',
  },
  {
    id: 'liquid-solid-polymers',
    name: 'Liquid & Solid Polymers',
    category: 'Chemicals & Solvents',
    shortDesc: 'Specialty industrial polymers including Viscosity Index Improvers (VII) and polyolefin resins (PP, PE, PVC).',
    fullDesc:
      'High-performance liquid polymer Viscosity Index Improvers (VII) paired with prime grade solid polyolefins (Polypropylene, Polyethylene, and PVC resins) for industrial and automotive applications.',
    specs: ['Viscosity Index Improver (VII)', 'Polypropylene (PP Film & Injection)', 'Polyethylene (HDPE / LDPE)', 'PVC Resins (K-67)'],
    subItems: [
      { name: 'Viscosity Index Improver (VII)', id: 'viscosity-index-improver' },
      { name: 'Others (PP, PE, PVC)', id: 'polyolefin-resins' },
    ],
    techSpecs: [
      { property: 'Melt Flow Index (MFI)', method: 'ASTM D1238', unit: 'g/10min', typical: '3.0 - 25.0 (PP Resins)' },
      { property: 'Density @ 23°C', method: 'ASTM D1505', unit: 'g/cm³', typical: '0.900 - 0.955 (Polyolefin Grade)' },
      { property: 'Shear Stability Index (SSI)', method: 'ASTM D6278', unit: '%', typical: '22 - 35 (VII Polymer)' },
      { property: 'Viscosity @ 100°C', method: 'ASTM D445', unit: 'cSt', typical: '1150 - 1450 (Liquid Polymer)' },
      { property: 'Ash Content', method: 'ASTM D482', unit: '% mass', typical: 'Max 0.05' },
    ],
    applications: ['Multigrade Engine Oil Formulation', 'Plastic Packaging & Extrusion', 'Industrial Pipes & Fittings', 'Automotive Components'],
    imageUrl: '/products/liquid_solid_polymers.png',
    badge: 'Newly Added',
  },
  {
    id: 'viscosity-index-improver',
    name: 'Viscosity Index Improver (VII)',
    category: 'Chemicals & Solvents',
    shortDesc: 'High-shear stability liquid polymer additives (OCP & PMA) designed for multigrade engine oils and gear lubricants.',
    fullDesc:
      'High-performance liquid polymer Viscosity Index Improver (VII) formulated from Olefin Copolymers (OCP) and Polymethacrylates (PMA). Engineered to provide outstanding shear stability, thermal resilience, and low-temperature viscometric control in multigrade automotive engine oils, hydraulic fluids, and industrial gear oils.',
    specs: ['SSI 22 - 35 (Shear Stability)', 'Kinematic Viscosity @ 100°C: 1150-1450 cSt', 'OCP & PMA Polymer Bases', 'High Thickening Efficiency'],
    techSpecs: [
      { property: 'Kinematic Viscosity @ 100°C', method: 'ASTM D445', unit: 'cSt', typical: '1150 - 1450' },
      { property: 'Shear Stability Index (SSI)', method: 'ASTM D6278', unit: '%', typical: '22 - 35' },
      { property: 'Flash Point (COC)', method: 'ASTM D92', unit: '°C', typical: 'Min 200' },
      { property: 'Thickening Efficiency (100°C)', method: 'ASTM D445', unit: 'cSt/%', typical: '1.8 - 2.4' },
      { property: 'Nitrogen Content', method: 'ASTM D5291', unit: '% mass', typical: 'Max 0.05' },
    ],
    applications: ['Multigrade Engine Oils (5W-30, 10W-40, 15W-40)', 'Automatic Transmission Fluids (ATF)', 'Industrial Hydraulic Oils', 'Gear & Axle Lubricants'],
    imageUrl: '/products/liquid_solid_polymers.png',
    badge: 'Dedicated Product',
  },
  {
    id: 'polyolefin-resins',
    name: 'Polyolefin & PVC Resins (PP, PE, PVC)',
    category: 'Chemicals & Solvents',
    shortDesc: 'Prime grade solid polymers including Polypropylene (PP), Polyethylene (HDPE/LDPE), and PVC Resins for extrusion and molding.',
    fullDesc:
      'Comprehensive selection of prime solid thermoplastic polymers including Polypropylene (PP Homopolymer & Copolymer), High & Low Density Polyethylene (HDPE / LDPE / LLDPE), and Suspension PVC Resins (K-67). Ideal for film extrusion, blow molding, injection molding, and industrial piping manufacture.',
    specs: ['Polypropylene (PP Film & Injection)', 'Polyethylene (HDPE / LDPE / LLDPE)', 'PVC Resin K-67 Grade', 'High Melt Flow Index Range'],
    techSpecs: [
      { property: 'Melt Flow Index (MFI) @ 230°C/2.16kg', method: 'ASTM D1238', unit: 'g/10min', typical: '3.0 - 25.0 (PP Resins)' },
      { property: 'Density @ 23°C', method: 'ASTM D1505', unit: 'g/cm³', typical: '0.900 - 0.955' },
      { property: 'Tensile Strength at Yield', method: 'ASTM D638', unit: 'MPa', typical: '26 - 38' },
      { property: 'Vicat Softening Point', method: 'ASTM D1525', unit: '°C', typical: '130 - 155' },
      { property: 'Ash Content', method: 'ASTM D482', unit: '% mass', typical: 'Max 0.03' },
    ],
    applications: ['Plastic Packaging & Film Extrusion', 'Blow Molded Containers & Drums', 'Industrial Pipes & Fittings', 'Automotive Plastic Trim'],
    imageUrl: '/products/liquid_solid_polymers.png',
    badge: 'Dedicated Product',
  },
  {
    id: 'gtl-solvents',
    name: 'GTL Solvents',
    category: 'Chemicals & Solvents',
    shortDesc: 'Ultra-pure paraffinic synthetic solvents with low odor, low aromatic content, and high flash points.',
    fullDesc:
      'Synthetic Gas-To-Liquid paraffinic solvents offering virtually zero sulfur, low toxicity, high flash point, and superior solvency for precision industrial and consumer applications.',
    specs: ['Aromatic Content < 100 ppm', 'Narrow Boiling Cut', 'High Flash Point (>60°C)', 'Biodegradable & Non-Toxic'],
    techSpecs: [
      { property: 'Density @ 15°C', method: 'ASTM D4052', unit: 'g/cm³', typical: '0.750 - 0.775' },
      { property: 'Flash Point (Tag Closed)', method: 'ASTM D56', unit: '°C', typical: 'Min 62 - 105' },
      { property: 'Aromatic Content', method: 'ASTM D1840', unit: 'mg/kg', typical: 'Max 100 (Near Zero)' },
      { property: 'Boiling Range (IBP-FBP)', method: 'ASTM D1078', unit: '°C', typical: '185 - 245' },
      { property: 'Kauri-Butanol Value', method: 'ASTM D1133', unit: '-', typical: '26 - 32' },
    ],
    applications: ['Consumer Product Formulations', 'Decorative Coatings & Paints', 'Metal Processing & Cleaning', 'Crop Protection Solvents'],
    imageUrl: '/products/gtl_solvents.png',
    badge: 'Newly Added',
  },
  {
    id: 'degreasing-solvent',
    name: 'Degreasing Solvents',
    category: 'Chemicals & Solvents',
    shortDesc: 'Heavy-duty solvent degreasers engineered for rapid oil, grease, and tar removal from machinery.',
    fullDesc:
      'Fast-acting, non-corrosive petroleum solvent formulation that quickly dissolves stubborn grease, heavy oils, flux residues, and carbon deposits on mechanical components.',
    specs: ['High Solvency (KB Value > 90)', 'Non-Corrosive to Metals', 'Controlled Evaporation', 'Low Residue After Drying'],
    techSpecs: [
      { property: 'Kauri-Butanol Value (KB Value)', method: 'ASTM D1133', unit: '-', typical: 'Min 92' },
      { property: 'Density @ 15°C', method: 'ASTM D4052', unit: 'g/cm³', typical: '0.780 - 0.810' },
      { property: 'Flash Point (PMCC)', method: 'ASTM D93', unit: '°C', typical: 'Min 42' },
      { property: 'Evaporation Rate (n-BuAc=1)', method: 'ASTM D3539', unit: '-', typical: '0.15 - 0.35' },
      { property: 'Non-Volatile Residue', method: 'ASTM D1353', unit: 'mg/100ml', typical: 'Max 2.0' },
    ],
    applications: ['Engine & Transmission Cleaning', 'Heavy Equipment Maintenance', 'Metal Parts Washing', 'Industrial Plant Maintenance'],
    imageUrl: '/products/degreasing_solvent.png',
  },
  {
    id: 'thinner',
    name: 'Thinners & Diluents',
    category: 'Chemicals & Solvents',
    shortDesc: 'Precision-formulated solvent thinners and diluents for industrial coatings, epoxy systems, and lacquers.',
    fullDesc:
      'Balanced aromatic and aliphatic solvent blends designed for optimal flow, fast drying rates, high solubility, and streak-free finishes on metal and wooden surfaces.',
    specs: ['Nitrocellulose (NC) & Epoxy Grades', 'Zero Moisture Content', 'Consistent Boiling Range', 'Fast & Medium Evaporation'],
    techSpecs: [
      { property: 'Specific Gravity @ 20°C', method: 'ASTM D891', unit: '-', typical: '0.815 - 0.840' },
      { property: 'Water Content', method: 'ASTM E203', unit: '% mass', typical: 'Max 0.10' },
      { property: 'Boiling Range (IBP-FBP)', method: 'ASTM D1078', unit: '°C', typical: '78 - 145' },
      { property: 'Solvency & Compatibility', method: 'In-House Test', unit: '-', typical: 'Clear & Homogeneous' },
      { property: 'Flash Point (Abel)', method: 'IP 170', unit: '°C', typical: 'Min 12 - 25' },
    ],
    applications: ['Automotive Refinishing Paints', 'Industrial Metal Coatings', 'Wood Lacquers & Varnish', 'Equipment Flush'],
    imageUrl: '/products/thinner.png',
  },
  {
    id: 'specialty-chemical-solutions',
    name: 'Specialty Chemical Solutions',
    category: 'Chemicals & Solvents',
    shortDesc: 'Tailor-made chemical blends, demulsifiers, corrosion inhibitors, and process additives for energy industries.',
    fullDesc:
      'Bespoke specialty chemical formulations engineered for oilfield production, refinery process optimization, water treatment, and custom industrial manufacturing.',
    specs: ['Custom Formulation Blends', 'High Thermal & Chemical Stability', 'Emulsion Breakers & Clarifiers', 'Scalable Batch Blending'],
    techSpecs: [
      { property: 'Active Chemical Content', method: 'Titration Assay', unit: '% mass', typical: '45.0 - 85.0 (Custom Blend)' },
      { property: 'Specific Gravity @ 25°C', method: 'ASTM D1298', unit: '-', typical: '0.950 - 1.080' },
      { property: 'Flash Point (PMCC)', method: 'ASTM D93', unit: '°C', typical: 'Min 60' },
      { property: 'pH (1% aqueous solution)', method: 'ASTM E70', unit: '-', typical: '6.0 - 8.5' },
      { property: 'Pour Point', method: 'ASTM D97', unit: '°C', typical: 'Max -20' },
    ],
    applications: ['Oilfield Processing & Production', 'Refinery Process Optimization', 'Water Treatment Systems', 'Industrial Chemical Manufacturing'],
    imageUrl: '/products/specialty_chemical_solutions.png',
    badge: 'Newly Added',
  },
];

export const COMPANY_VALUES: ValueItem[] = [
  {
    id: 'transparency',
    title: 'Transparency & Ethics',
    description:
      'We strongly believe in business transparency and ethical practices, building long-term trust-based relationships with clients, suppliers, and international associates.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'innovation',
    title: 'Innovation Strength',
    description:
      'Leading with technology-driven trading solutions, advanced market analytics, and streamlined logistics management for global counterparties.',
    iconName: 'Cpu',
  },
  {
    id: 'synergy',
    title: 'Team Synergy & Expertise',
    description:
      'Our team brings collective market mastery, regulatory know-how, and strategic trade execution that ensures continuous supply security.',
    iconName: 'Users',
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  subtext: string;
  description: string;
  iconName: 'Database' | 'ShieldCheck' | 'Truck' | 'Wrench';
}

export const COMPANY_SERVICES: ServiceItem[] = [
  {
    id: 'sourcing',
    title: 'Sourcing & Procurement',
    subtext: 'Reliable commodity sourcing desk',
    description: 'Direct procurement channel with tier-1 refiners and global chemical producers ensuring raw material integrity and competitive pricing.',
    iconName: 'Database',
  },
  {
    id: 'trading',
    title: 'Energy Trading',
    subtext: 'Global energy commodities desk',
    description: 'Specialized trading desk for refined petroleum products, base oils, specialty solvents, and industrial petrochemicals.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'logistics',
    title: 'Logistics & Distribution',
    subtext: 'Safe land, sea & multimodal transport',
    description: 'End-to-end maritime vessel chartering, ISO tank logistics, and bulk overland freight under FOB, CIF, and CFR commercial terms.',
    iconName: 'Truck',
  },
  {
    id: 'storage',
    title: 'Storage Solutions',
    subtext: 'Integrated distribution network',
    description: 'Strategic bulk tank storage capacity in key UAE free zone ports enabling flexible inventory management and rapid dispatch.',
    iconName: 'Wrench',
  },
];

export interface IndustryItem {
  id: string;
  title: string;
  subtext: string;
  description: string;
  iconName: 'Ship' | 'Plane' | 'FlaskConical' | 'Car' | 'Zap';
}

export const COMPANY_INDUSTRIES: IndustryItem[] = [
  {
    id: 'marine',
    title: 'Marine & Bunker',
    subtext: 'High-grade marine fuels & lubricants',
    description: 'Supplying compliant Low Sulfur Fuel Oils (LSFO), High Sulfur Fuel Oils (HSFO), Marine Gas Oil (MGO), and high-performance marine lubricants for global shipping fleets.',
    iconName: 'Ship',
  },
  {
    id: 'aviation',
    title: 'Aviation Logistics',
    subtext: 'Certified Jet A-1 & aviation fuels',
    description: 'Providing DEF STAN 91-091 & ASTM D1655 compliant Jet A-1 fuel, aviation solvents, and specialized hydraulic fluids for airport operations and airline fleets.',
    iconName: 'Plane',
  },
  {
    id: 'chemical',
    title: 'Chemical Processing',
    subtext: 'Solvents, polymers & petrochemical feedstock',
    description: 'Delivering virgin solvents, aromatic hydrocarbons, polymer resins, and chemical intermediate feedstocks for industrial manufacturing plants.',
    iconName: 'FlaskConical',
  },
  {
    id: 'automotive',
    title: 'Automotive & Industrial',
    subtext: 'Virgin base oils, greases & additives',
    description: 'Supplying Group I, II, III base oils, synthetic lubricants, industrial hydraulic oils, and high-performance automotive formulation additives.',
    iconName: 'Car',
  },
  {
    id: 'power',
    title: 'Power Generation',
    subtext: 'Heavy fuel oil & gas turbine diesel',
    description: 'Fuels supply for thermal power stations, municipal diesel generators, and heavy utility infrastructure across emerging international markets.',
    iconName: 'Zap',
  },
];
