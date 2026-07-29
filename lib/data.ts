export interface ProductItem {
  id: string;
  name: string;
  category: 'Base Oils' | 'Fuels & Solvents' | 'Specialty Hydrocarbons' | 'Industrial Solvents';
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
  iconName: 'Users' | 'Clock' | 'Globe' | 'TrendingUp';
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
    value: '12+',
    label: 'Global Product Lines',
    subtext: 'Refined oils, gas-to-liquid fuels, & solvents',
    iconName: 'Globe',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'base-oil',
    name: 'Base Oil (Group I, II, III & Recycled)',
    category: 'Base Oils',
    shortDesc: 'Pristine refined base stocks suitable for automotive, industrial lubricants, and grease manufacturing.',
    fullDesc:
      'We supply high-grade Group I (SN150, SN500), Group II (N70, N150, N500), Group III, and eco-sustainable recycled base oils. Produced through advanced hydrocracking and refining techniques to ensure superior viscosity index, oxidative stability, and low volatility.',
    specs: ['Group I (SN150, SN500)', 'Group II (N70, N150, N500)', 'Group III High VI', 'Recycled Eco Grade'],
    applications: ['Automotive Engine Oils', 'Hydraulic & Industrial Fluids', 'Gear Oils & Greases', 'Rubber Processing'],
    imageUrl: '/products/base_oil.png',
    badge: 'High Demand',
  },
  {
    id: 'gtl-fuel',
    name: 'GTL Fuel & Specialty Solvents',
    category: 'Fuels & Solvents',
    shortDesc: 'Clean-burning Gas-to-Liquid synthetic fuels and high-purity industrial solvents.',
    fullDesc:
      'Synthetic Gas-To-Liquid (GTL) fuel converted from natural gas, offering zero sulfur content, virtually no aromatics, low emissions, and high cetane number. Paired with ultra-pure paraffinic solvents for specialized manufacturing.',
    specs: ['Zero Sulfur Content', 'Cetane Rating > 70', 'Low Odor & Low Toxicity', 'Flash Point Compliant'],
    applications: ['Heavy Machinery Fuel', 'Off-shore & Marine Gensets', 'Specialty Chemical Processing', 'Precision Cleaning'],
    imageUrl: '/products/gtl_fuel.png',
    badge: 'Eco Friendly',
  },
  {
    id: 'n-paraffin',
    name: 'N-Paraffin (Pristine Grade)',
    category: 'Specialty Hydrocarbons',
    shortDesc: 'Ultra-pure normal paraffins tailored for Linear Alkyl Benzene (LAB) and chlorinated paraffin synthesis.',
    fullDesc:
      'Pristine quality normal paraffin liquid extracted via molecular sieve adsorption. Characterized by high purity, consistent carbon chain distribution (C10-C13 & C14-C17), and exceptionally low aromatic content.',
    specs: ['Carbon Chain C10-C17', 'Purity > 99%', 'Aromatics < 0.5%', 'Low Color Saybolt +30'],
    applications: ['Detergent Feedstock (LAB)', 'Chlorinated Paraffins', 'Specialty Solvents', 'Rolling Oils'],
    imageUrl: '/products/n_paraffin.png',
  },
  {
    id: 'fuel-oil',
    name: 'Fuel Oil (180 CST, 360 CST)',
    category: 'Fuels & Solvents',
    shortDesc: 'Industrial grade residual fuel oil engineered for power generation plants and marine bunkering.',
    fullDesc:
      'Heavy residual fuel oil optimized for high-capacity boilers, thermal power stations, and ocean vessels. Formulated with controlled kinematic viscosity (180 CST & 360 CST) and standardized calorific values.',
    specs: ['Viscosity 180 CST & 360 CST', 'Density @15°C: 0.985 max', 'Flash Point > 66°C', 'Low Sediment Content'],
    applications: ['Industrial Steam Boilers', 'Thermal Power Generation', 'Bunkering Operations', 'Furnace Operations'],
    imageUrl: '/products/fuel_oil.png',
  },
  {
    id: 'glycols',
    name: 'Glycols (MEG, DEG, TEG)',
    category: 'Industrial Solvents',
    shortDesc: 'Essential chemical intermediates for polyester resin production, anti-freeze, and gas dehydration.',
    fullDesc:
      'High-purity Monoethylene Glycol (MEG), Diethylene Glycol (DEG), and Triethylene Glycol (TEG). Vital chemical building blocks for textile fibers, PET bottles, industrial coolants, and natural gas drying systems.',
    specs: ['Purity > 99.8%', 'Water Content < 0.1%', 'Color (Pt-Co) < 10', 'Acidity < 0.002%'],
    applications: ['PET Resin & Synthetic Fibers', 'Automotive Coolants & Antifreeze', 'Natural Gas Dehydration', 'Polyurethanes'],
    imageUrl: '/products/glycols.png',
  },
  {
    id: 'mineral-oil',
    name: 'Mineral Oil (Technical & Industrial)',
    category: 'Specialty Hydrocarbons',
    shortDesc: 'Severely hydrotreated transparent mineral oils for technical applications, plastics, and lubricants.',
    fullDesc:
      'Clear, odorless, highly refined mineral oils. Exceptional thermal stability, non-staining properties, and complete compliance with technical safety standards for rubber, plastics, and industrial machinery.',
    specs: ['Saybolt Color +30', 'Odorless & Colorless', 'Low Volatility', 'High Hydrotreatment Level'],
    applications: ['Plastic Extrusion & Polymers', 'Textile Lubricants', 'Agricultural Sprays', 'Electrical Insulation'],
    imageUrl: '/products/mineral_oil.png',
  },
  {
    id: 'jet-a1',
    name: 'Jet A-1 Aviation Fuel',
    category: 'Fuels & Solvents',
    shortDesc: 'Kerosene-type aviation fuel strictly compliant with international DEF STAN 91-091 & ASTM D1655 standards.',
    fullDesc:
      'Premium aviation turbine fuel refined for commercial and defense jet aircraft engines. Engineered for ultra-low freeze points (-47°C) and rigorous thermal oxidation stability required for extreme altitudes.',
    specs: ['Freeze Point Max -47°C', 'Flash Point Min 38°C', 'ASTM D1655 / DEF STAN 91-091', 'Strict Quality QC Assurance'],
    applications: ['Commercial Aviation', 'Cargo Aircraft Fleets', 'Defense & Military Jets', 'Turbine Engine Operations'],
    imageUrl: '/products/jet_a1.png',
    badge: 'Aviation Standard',
  },
  {
    id: 'spindle-oil',
    name: 'General Purpose Spindle Oil',
    category: 'Base Oils',
    shortDesc: 'Low-viscosity precision lubricant for high-speed machinery spindles and textile looms.',
    fullDesc:
      'Refined light mineral lubricant enriched with anti-wear, anti-rust, and anti-foam additives. Designed specifically for high-RPM textile spindles, precision machine tool bearings, and automated mechanisms.',
    specs: ['Low Viscosity ISO VG 5, 10, 15, 22', 'Anti-Oxidant Additives', 'Rapid Air Release', 'Corrosion Inhibited'],
    applications: ['Textile Spinning Spindles', 'High-Speed Bearing Systems', 'Automated Machine Tools', 'Instrument Lubrication'],
    imageUrl: '/products/spindle_oil.png',
  },
  {
    id: 'distillate-oil',
    name: 'Distillate Oil',
    category: 'Fuels & Solvents',
    shortDesc: 'Intermediate petroleum distillate fraction ideal for custom fuel blending and industrial heat generation.',
    fullDesc:
      'Light to medium hydrocarbon distillates processed for optimal volatility, controlled flash points, and minimal sulfur residues in industrial heating burners.',
    specs: ['Density 0.820 - 0.860 g/cm³', 'Controlled Boiling Range', 'Low Carbon Residue', 'Clean Combustion'],
    applications: ['Industrial Kilns & Furnaces', 'Diesel Blending Feedstock', 'Agricultural Machinery', 'Solvent Refining'],
    imageUrl: '/products/distillate_oil.png',
  },
  {
    id: 'residual-oil',
    name: 'Residual Oil',
    category: 'Fuels & Solvents',
    shortDesc: 'Heavy refinery bottoms refined for asphalt, bitumen modification, and heavy fuel applications.',
    fullDesc:
      'Heavy viscous petroleum fraction remaining after light oil distillation. Widely utilized in paving bitumen, heavy industrial firing, and maritime power stations.',
    specs: ['High Density & Calorific Value', 'Viscosity Grade 400+', 'Stable Emulsification', 'Bitumen Grade Blendable'],
    applications: ['Bitumen & Road Paving', 'Heavy Thermal Power', 'Asphalt Plants', 'Marine Engine Heavy Fuel'],
    imageUrl: '/products/residual_oil.png',
  },
  {
    id: 'thinner',
    name: 'Industrial Thinner (NC & Epoxy Grade)',
    category: 'Industrial Solvents',
    shortDesc: 'Precision-formulated paint thinners for industrial coatings, auto refinishing, and lacquers.',
    fullDesc:
      'Balanced aromatic and aliphatic solvent blends designed for optimal flow, fast drying rates, high solubility, and streak-free finishes on metal and wooden surfaces.',
    specs: ['Nitrocellulose (NC) & Epoxy Grades', 'Zero Moisture Content', 'Consistent Boiling Range', 'Fast & Medium Evaporation'],
    applications: ['Automotive Refinishing Paints', 'Industrial Metal Coatings', 'Wood Lacquers & Varnish', 'Equipment Flush'],
    imageUrl: '/products/thinner.png',
  },
  {
    id: 'degreasing-solvent',
    name: 'Degreasing Solvent',
    category: 'Industrial Solvents',
    shortDesc: 'Heavy-duty solvent degreaser engineered for rapid oil, grease, and tar removal from machinery.',
    fullDesc:
      'Fast-acting, non-corrosive petroleum solvent formulation that quickly dissolves stubborn grease, heavy oils, flux residues, and carbon deposits on mechanical components.',
    specs: ['High Solvency (KB Value > 90)', 'Non-Corrosive to Metals', 'Controlled Evaporation', 'Low Residue After Drying'],
    applications: ['Engine & Transmission Cleaning', 'Heavy Equipment Maintenance', 'Metal Parts Washing', 'Industrial Plant Maintenance'],
    imageUrl: '/products/degreasing_solvent.png',
  },
  {
    id: 'naphtha-oil',
    name: 'Naphtha Oil (Light & Heavy)',
    category: 'Specialty Hydrocarbons',
    shortDesc: 'Key petrochemical feedstocks for steam crackers, olefin production, and high-octane gasoline blending.',
    fullDesc:
      'Straight-run light and heavy naphtha fractions extracted from crude oil distillation. Critical raw material for steam cracking units producing ethylene, propylene, and BTX aromatics.',
    specs: ['Light Naphtha (C5-C6)', 'Heavy Naphtha (C7-C9)', 'Purity Certified', 'Low Sulfur Content'],
    applications: ['Steam Cracker Feedstock', 'Reformer Feedstock', 'High-Octane Gas Blend stock', 'Chemical Synthesis'],
    imageUrl: '/products/naphtha_oil.png',
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
  {
    id: 'tailor-made',
    title: 'Tailor-Made Solutions',
    description:
      'We focus on the unique operational needs of our counterparties to provide precision product specifications, flexible volume terms, and customized shipping.',
    iconName: 'Sliders',
  },
  {
    id: 'global-presence',
    title: 'Global Presence & Responsibility',
    description:
      'Ramping up and maintaining our position as a globally contributing player, operating with high self-confidence and strict environmental and safety standards.',
    iconName: 'Globe2',
  },
];
