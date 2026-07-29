export interface ProductItem {
  id: string;
  name: string;
  category: 'Energy & Petroleum' | 'Base Oils & Lubricant Stocks' | 'Chemicals & Solvents';
  shortDesc: string;
  fullDesc: string;
  specs: string[];
  applications: string[];
  imageUrl: string;
  badge?: string;
}

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
  address: 'United Arab Emirates (UAE) Free Zone Estate',
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
    applications: ['Multigrade Engine Oil Formulation', 'Plastic Packaging & Extrusion', 'Industrial Pipes & Fittings', 'Automotive Components'],
    imageUrl: '/products/liquid_solid_polymers.png',
    badge: 'Newly Added',
  },
  {
    id: 'gtl-solvents',
    name: 'GTL Solvents',
    category: 'Chemicals & Solvents',
    shortDesc: 'Ultra-pure paraffinic synthetic solvents with low odor, low aromatic content, and high flash points.',
    fullDesc:
      'Synthetic Gas-To-Liquid paraffinic solvents offering virtually zero sulfur, low toxicity, high flash point, and superior solvency for precision industrial and consumer applications.',
    specs: ['Aromatic Content < 100 ppm', 'Narrow Boiling Cut', 'High Flash Point (>60°C)', 'Biodegradable & Non-Toxic'],
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
