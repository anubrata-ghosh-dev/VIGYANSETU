export type ResourceType = 'publication' | 'dataset' | 'expedition' | 'report' | 'media';

export interface Resource {
  id: string;
  type: ResourceType;
  title: string;
  summary: string;
  creator: string;
  date: string;
  domain: string;
  tags: string[];
  citation?: string;
  doi?: string;
  location?: string;
  version?: string;
  imageUrl?: string;
}

export const MOCK_RESOURCES: Resource[] = [
  {
    id: 'exp-ncpor-1',
    type: 'expedition',
    title: 'AFops 2026: Arctic Field Operations',
    summary: 'The 2026 Arctic Field Operations focuses on monitoring ice-sheet dynamics and atmospheric chemistry in the high Arctic region.',
    creator: 'NCPOR Arctic Division',
    date: '2026-03-15',
    domain: 'Polar Science',
    tags: ['Arctic', 'Ice-Sheet', 'Climate Change'],
    location: 'High Arctic',
    imageUrl: 'https://ncpor.res.in/files/picture/Bharati_IMG-Cropped.JPG'
  },
  {
    id: 'vessel-1',
    type: 'expedition',
    title: 'RV Sagar Manthan Maiden Voyage',
    summary: 'Official launch and initial survey of India’s new state-of-the-art ocean research vessel, designed for deep-sea exploration.',
    creator: 'NCPOR Vessel Operations',
    date: '2026-08-20',
    domain: 'Oceanography',
    tags: ['Research Vessel', 'Deep Sea', 'Ocean Mapping'],
    location: 'Indian Ocean',
    imageUrl: 'https://ncpor.res.in/files/picture/s_ocean.jpg'
  },
  {
    id: 'data-ncpor-1',
    type: 'dataset',
    title: 'Hydrothermal Vent Mineralization Data',
    summary: 'Systematic survey of multi-metal hydrothermal mineralisation in the Indian ridge area, focusing on gas hydrate occurrences.',
    creator: 'Geoscience Division',
    date: '2025-11-05',
    domain: 'Geoscience',
    tags: ['Hydrothermal Vents', 'Minerals', 'Indian Ridge'],
    version: 'v2.1',
    location: 'Central Indian Ocean',
    imageUrl: 'https://ncpor.res.in/files/picture/GeoscienceImage.JPG'
  },
  {
    id: 'pub-ncpor-1',
    type: 'publication',
    title: 'Glacier-Lake Dynamics in the Himalaya',
    summary: 'A detailed study unravelling the complex interaction between glacial melt and lake formation in the high Himalayan region.',
    creator: 'Cryosphere Research Group',
    date: '2026-01-10',
    domain: 'Cryosphere',
    tags: ['Himalayas', 'Glacier', 'Hydrology'],
    doi: '10.1016/ncpor.himalaya.2026',
    citation: 'NCPOR Research Group (2026). Glacier-Lake Dynamics. Polar Science Journal.'
  },
  {
    id: 'exp-antarctica-1',
    type: 'expedition',
    title: '42nd Indian Scientific Expedition to Antarctica',
    summary: 'Launch of the 42nd ISEA from Goa, including firefighting training and briefing sessions for the research team heading to Bharati station.',
    creator: 'NCPOR Antarctic Division',
    date: '2022-10-22',
    domain: 'Polar Science',
    tags: ['Antarctica', 'Bharati Station', 'ISEA'],
    location: 'Antarctica',
    imageUrl: 'https://ncpor.res.in/files/picture/Bharati_IMG-Cropped.JPG'
  },
  {
    id: 'data-ocean-1',
    type: 'dataset',
    title: 'Deep Ocean Temperature Mapping',
    summary: 'High-resolution mapping of temperature gradients in the Southern Ocean to understand deep-sea heat transport.',
    creator: 'Physical Oceanography Group',
    date: '2025-06-12',
    domain: 'Oceanography',
    tags: ['Southern Ocean', 'Heat Transport', 'Mapping'],
    version: 'v1.0',
    location: 'Southern Ocean',
    imageUrl: 'https://ncpor.res.in/files/picture/1%20Hydrothermal%20Map%20area.jpg'
  },
  {
    id: 'pub-ncpor-2',
    type: 'publication',
    title: 'Impact of Plastic Pollution on Coastal Ecosystems',
    summary: 'A multi-year study on the prevalence of micro-plastics in Indian coastal waters and their impact on marine biodiversity.',
    creator: 'Marine Ecology Division',
    date: '2026-04-05',
    domain: 'Environmental Science',
    tags: ['Plastic Pollution', 'Coastal Ecosystems', 'Biodiversity'],
    doi: '10.1001/ncpor.pollution.2026',
    citation: 'NCPOR Marine Ecology (2026). Plastic Pollution Impact. Marine Env Journal.'
  }
];

export const MOCK_STORIES = [
  {
    id: 'story-ncpor-1',
    title: 'Swachh Sagar, Surakshit Sagar 5.0',
    summary: 'NCPOR volunteers unite for cleaner shores, implementing a massive coastal cleanup and awareness drive across Indian shores.',
    image: 'https://ncpor.res.in/files/picture/Bharati_IMG-Cropped.JPG',
    category: 'Outreach'
  },
  {
    id: 'story-ncpor-2',
    title: 'Secrets of the Hydrothermal Vents',
    summary: 'Holding secrets of the new and the amazing: Exploring the extreme environments of the deep ocean floor.',
    image: 'https://ncpor.res.in/files/picture/1%20Hydrothermal%20Map%20area.jpg',
    category: 'Science Update'
  },
  {
    id: 'story-ncpor-3',
    title: 'Unravelling Glacier-Lake Dynamics',
    summary: 'Exploring the critical interactions between melting glaciers and the formation of high-altitude lakes in the Himalayas.',
    image: 'https://ncpor.res.in/files/picture/GeoscienceImage.JPG',
    category: 'Research Highlight'
  },
  {
    id: 'story-ncpor-4',
    title: 'India’s New Ocean Research Vessel',
    summary: 'The launch of RV Sagar Manthan marks a new era in India’s capability for deep-ocean exploration and discovery.',
    image: 'https://ncpor.res.in/files/picture/s_ocean.jpg',
    category: 'Institutional News'
  }
];
