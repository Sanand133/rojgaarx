import { WorkerProfile, ServiceCategory } from '../types';

export const TRADE_SYNONYMS: Record<string, string[]> = {
  'cat-electric': [
    // English & Transliterated
    'electric',
    'electrician',
    'electrical',
    'wire',
    'wiring',
    'bijli',
    'bijlee',
    'bijliwala',
    'current',
    'switch',
    'socket',
    'fuse',
    'mcb',
    'light',
    'lights',
    'lighting',
    'fan',
    'fans',
    'ceiling fan',
    'inverter',
    'ac',
    'air conditioner',
    'short circuit',
    'phase',
    'earthing',
    'board',
    'switchboard',
    'bulb',
    'led',
    'chandelier',
    'geyser electrical',
    'stabilizer',
    'motor starter',
    'rewiring',
    'tripping',
    'cooler',
    'spark',
    // Hindi (Devanagari)
    'इलेक्ट्रीशियन',
    'बिजली',
    'बिजलीवाला',
    'वायरिंग',
    'तार',
    'पंखा',
    'स्विच',
    'सॉकेट',
    'इनवर्टर',
    'एसी',
    'फ्यूज',
    'लाइट',
    'बत्ती',
    'कूलर',
    'बोर्ड',
    'शॉर्ट सर्किट',
    'अर्थिंग',
    // Tamil
    'மின்சார',
    'எலக்ட்ரீஷியன்',
    'மின் பணியாளர்',
    // Marathi
    'इलेक्ट्रिशियन',
    'वीज',
    'वायरिंग',
  ],
  'cat-plumbing': [
    // English & Transliterated
    'plumb',
    'plumber',
    'plumbing',
    'pipe',
    'piping',
    'pipes',
    'tap',
    'taps',
    'leak',
    'leakage',
    'leaking',
    'drain',
    'drainage',
    'drain cleaning',
    'flush',
    'flush tank',
    'tank',
    'water tank',
    'nal',
    'sink',
    'kitchen sink',
    'washbasin',
    'motor',
    'water pump',
    'submersible',
    'booster',
    'sanitary',
    'toilet',
    'western toilet',
    'indian seat',
    'valve',
    'hydro',
    'geyser',
    'water heater',
    'ro water',
    'purifier',
    'sewage',
    'clog',
    'blockage',
    'seep',
    'seepage',
    // Hindi (Devanagari)
    'प्लंबर',
    'प्लम्बर',
    'नल',
    'पाइप',
    'लीकेज',
    'टंकी',
    'मोटर',
    'गीजर',
    'वॉशबेसिन',
    'ड्रेनेज',
    'पानी',
    'सीलन',
    'गटर',
    'नलसाज',
    // Tamil
    'பிளம்பர்',
    'குழாய்',
    'நீர் கசிவு',
    // Marathi
    'प्लंबर',
    'नळ',
    'पाईप',
    'पाणी गळती',
  ],
  'cat-carpentry': [
    // English & Transliterated
    'carpenter',
    'carpentry',
    'wood',
    'wooden',
    'woodwork',
    'furniture',
    'door',
    'doors',
    'bed',
    'beds',
    'latch',
    'hinge',
    'hinges',
    'cabinet',
    'cabinets',
    'badhai',
    'badhaiji',
    'teak',
    'plywood',
    'ply',
    'sunmica',
    'laminate',
    'cupboard',
    'almirah',
    'wardrobe',
    'drawer',
    'hydraulic',
    'hydraulic bed',
    'lock',
    'locks',
    'door lock',
    'handle',
    'table',
    'dining table',
    'chair',
    'sofa repair',
    'joiner',
    'window frame',
    // Hindi (Devanagari)
    'बढ़ई',
    'कारपेंटर',
    'लकड़ी',
    'दरवाजा',
    'ताला',
    'फर्नीचर',
    'अलमारी',
    'खिड़की',
    'कुर्सी',
    'मेज',
    'प्लाईवुड',
    // Tamil
    'தச்சர்',
    'மரவேலை',
    // Marathi
    'सुतार',
    'लाकूड काम',
    'फर्निचर',
  ],
  'cat-cleaning': [
    // English & Transliterated
    'clean',
    'cleaning',
    'cleaner',
    'safai',
    'safaiwala',
    'maid',
    'jhadu',
    'pocha',
    'sweep',
    'scrub',
    'deep cleaning',
    'deep clean',
    'sofa',
    'sofa cleaning',
    'sanitization',
    'hygiene',
    'kitchen degreasing',
    'kitchen cleaning',
    'steam',
    'vacuum',
    'bathroom',
    'bathroom cleaning',
    'toilet cleaning',
    'home cleaning',
    'house cleaning',
    'floor polish',
    'tile cleaning',
    'balcony',
    'terrace cleaning',
    'window glass',
    // Hindi (Devanagari)
    'सफाई',
    'सफाईकर्मी',
    'झाड़ू',
    'पोछा',
    'क्लीनर',
    'डीप क्लीनिंग',
    'सोफा',
    'बाथरूम',
    'किचन',
    'स्वच्छता',
    // Tamil
    'சுத்தம்',
    'வீட்டு வேலை',
    // Marathi
    'स्वच्छता',
    'झाडू',
    'फरशी पुसणे',
  ],
  'cat-cooking': [
    // English & Transliterated
    'cook',
    'cooking',
    'chef',
    'food',
    'khana',
    'rasoi',
    'rasoia',
    'meal',
    'meals',
    'tiffin',
    'sabzi',
    'roti',
    'chapati',
    'phulka',
    'dal',
    'rice',
    'thali',
    'catering',
    'caterer',
    'breakfast',
    'lunch',
    'dinner',
    'diet',
    'maharaj',
    'party food',
    'north indian',
    'south indian',
    'jain food',
    'healthy food',
    // Hindi (Devanagari)
    'कुक',
    'रसोइया',
    'शेफ',
    'खाना',
    'रोटी',
    'टिफिन',
    'नाश्ता',
    'भोजन',
    'दाल',
    'सब्जी',
    'महाराज',
    // Tamil
    'சமையல்',
    'சமையல்காரர்',
    'உணவு',
    // Marathi
    'स्वयंपाकी',
    'जेवण',
    'भाकरी',
    'पोळी',
  ],
  'cat-masonry': [
    // English & Transliterated
    'mason',
    'masonry',
    'mistri',
    'brick',
    'bricks',
    'cement',
    'tile',
    'tiles',
    'tile fixing',
    'waterproof',
    'waterproofing',
    'plaster',
    'wall',
    'walls',
    'damp',
    'terrace',
    'roof',
    'leakage',
    'crack',
    'cracks',
    'grout',
    'concrete',
    'foundation',
    'construction',
    'renovation',
    'flooring',
    'marble',
    'granite',
    // Hindi (Devanagari)
    'राजमिस्त्री',
    'मिस्त्री',
    'ईंट',
    'सीमेंट',
    'प्लास्टर',
    'टाइल',
    'दीवार',
    'वाटरप्रूफिंग',
    'छत',
    'मकान',
    'भवन निर्माण',
    // Tamil
    'கொத்தனார்',
    'கட்டுமானம்',
    // Marathi
    'गवंडी',
    'बांधकाम',
    'फरशी',
  ],
  'cat-eldercare': [
    // English & Transliterated
    'elder',
    'eldercare',
    'caregiver',
    'care',
    'nurse',
    'nursing',
    'ayah',
    'nanny',
    'baby',
    'babysitter',
    'childcare',
    'patient',
    'patient care',
    'senior',
    'senior citizen',
    'mobility',
    'vitals',
    'bp check',
    'companionship',
    'physiotherapy',
    'palliative',
    'bedridden',
    'injection',
    'dressing',
    'attendant',
    // Hindi (Devanagari)
    'देखभाल',
    'आया',
    'दाई',
    'नर्स',
    'बुजुर्ग',
    'मरीज',
    'फिजियोथेरेपी',
    'सेवा',
    'वरिष्ठ नागरिक',
    // Tamil
    'முதியோர் பராமரிப்பு',
    'செவிலியர்',
    // Marathi
    'वृद्धांची काळजी',
    'रुग्ण सेवा',
    'परिचारिका',
  ],
  'cat-painting': [
    // English & Transliterated
    'paint',
    'painting',
    'painter',
    'putty',
    'wall putty',
    'wall',
    'rang',
    'rangai',
    'distemper',
    'texture',
    'texture paint',
    'roller',
    'acrylic',
    'emulsion',
    'stenciling',
    'weatherproof',
    'whitewash',
    'primer',
    'enamel',
    'polish',
    'wood polish',
    'varnish',
    // Hindi (Devanagari)
    'पेंटर',
    'रंगाई',
    'पुट्टी',
    'पेंट',
    'सफेदी',
    'रंग',
    'पुताई',
    // Tamil
    'பெயிண்டர்',
    'வண்ணம் பூசுதல்',
    // Marathi
    'रंगारी',
    'रंगकाम',
  ],
  'cat-labour': [
    // English & Transliterated
    'labour',
    'labor',
    'majdoor',
    'mazdoor',
    'heavy',
    'lifting',
    'shifting',
    'construction',
    'debris',
    'loading',
    'unloading',
    'excavation',
    'malba',
    'manual',
    'luggage shifting',
    'house shifting',
    'godown',
    'warehouse',
    'palledar',
    // Hindi (Devanagari)
    'मजदूर',
    'मजदूरी',
    'पल्लेदार',
    'बोझा',
    'लोडिंग',
    'शिफ्टिंग',
    'मलबा',
    'खुदाई',
    // Tamil
    'சுமை தூக்குபவர்',
    'தொழிலாளி',
    // Marathi
    'मजूर',
    'हमाली',
  ],
  'cat-helper': [
    // English & Transliterated
    'helper',
    'domestic',
    'utility',
    'errand',
    'luggage',
    'packing',
    'peon',
    'chores',
    'chopping',
    'dishwashing',
    'store helper',
    'office boy',
    'assistant',
    // Hindi (Devanagari)
    'हेल्पर',
    'घरेलू सहायक',
    'सहायक',
    'दुकान सहायक',
    'कामकाज',
    // Tamil
    'உதவியாளர்',
    // Marathi
    'मदतनीस',
  ],
  'cat-driving': [
    // English & Transliterated
    'driver',
    'driving',
    'chauffeur',
    'car driver',
    'private driver',
    'cab',
    'taxi',
    'van',
    'car',
    'vehicle',
    'transport',
    'pilot',
    'fleet',
    'transit',
    'shuttle',
    'airport drop',
    'night driver',
    'commercial driver',
    'tempo driver',
    'truck driver',
    'gaadi wala',
    'chalak',
    // Hindi (Devanagari)
    'ड्राइवर',
    'चालक',
    'गाड़ी चालक',
    'कार ड्राइवर',
    'वाहन चालक',
    'ड्राइविंग',
    // Tamil
    'ஓட்டுநர்',
    'டிரைவர்',
    // Marathi
    'चालक',
    'ड्रायव्हर',
    'वाहन चालक',
  ],
  'cat-gardening': [
    // English & Transliterated
    'gardener',
    'gardening',
    'garden',
    'horticulture',
    'lawn',
    'lawn mowing',
    'mower',
    'grass',
    'grass cutting',
    'plants',
    'plant care',
    'soil',
    'manure',
    'compost',
    'vermicompost',
    'pruning',
    'trimming',
    'hedge',
    'pots',
    'balcony garden',
    'terrace garden',
    'nursery',
    'mali',
    'baag',
    'bagicha',
    // Hindi (Devanagari)
    'माली',
    'बागवानी',
    'बगीचा',
    'पौधे',
    'घास कटाई',
    'खाद',
    'गमले',
    // Tamil
    'தோட்டக்காரர்',
    'தோட்டம்',
    // Marathi
    'माळी',
    'बागकाम',
    'झाडे',
  ],
};

// Common grammatical words, prepositions, filler words, and user-intent prefixes
const STOP_WORDS = new Set([
  'in',
  'near',
  'at',
  'for',
  'to',
  'the',
  'a',
  'an',
  'and',
  'or',
  'of',
  'by',
  'with',
  'ke',
  'ka',
  'ki',
  'ko',
  'me',
  'mein',
  'se',
  'par',
  'wala',
  'wali',
  'vale',
  'karo',
  'chahiye',
  'bhi',
  'hai',
  'hain',
  'hoga',
  'mujhe',
  'humko',
  'karna',
  'karwana',
  'theek',
  'need',
  'want',
  'looking',
  'find',
  'hire',
  'get',
  'require',
  'required',
  'service',
  'services',
  'urgent',
  'urgently',
  'emergency',
  'fast',
  'quick',
  'best',
  'top',
  'good',
  'verified',
  'certified',
  'cheap',
  'affordable',
  'doorstep',
  'local',
  'home',
  'house',
  'office',
  'work',
  'worker',
  'shramik',
  'bhaiya',
  'madam',
  'help',
  'repair',
  'repairing',
  'fixing',
  'fix',
  'fitting',
  'install',
  'installation',
  'kaam',
  'karyakarta',
]);

/**
 * Helper to test if a keyword matches a search query token safely.
 */
function tokenMatchesKeyword(token: string, keyword: string): boolean {
  const t = token.toLowerCase().trim();
  const kw = keyword.toLowerCase().trim();

  if (!t || !kw) return false;

  // Exact match always matches
  if (t === kw) return true;

  // If token is very short (1-2 chars, e.g. "ac", "ro"), require exact match or word boundary match
  if (t.length <= 2) {
    const kwWords = kw.split(/[\s\-_\/]+/);
    return kwWords.includes(t);
  }

  // If keyword is short (1-2 chars)
  if (kw.length <= 2) {
    return t === kw || t.split(/[\s\-_\/]+/).includes(kw);
  }

  // For 3+ characters, check substring match or prefix
  return kw.includes(t) || t.includes(kw);
}

/**
 * Checks if a worker matches a given search string.
 */
export function workerMatchesSearch(
  worker: WorkerProfile,
  searchQuery: string,
  categories: ServiceCategory[] = []
): boolean {
  if (!searchQuery || !searchQuery.trim()) return true;

  const rawQuery = searchQuery.trim().toLowerCase();

  // Build comprehensive worker text haystack
  const textHaystack = [
    worker.name,
    worker.hindiName || '',
    worker.trade,
    worker.cooperativeSociety,
    worker.federationCode || '',
    worker.locationSector,
    worker.bio || '',
    ...(worker.specialties || []),
    ...(worker.languages || []),
    ...(worker.badges || []),
  ]
    .join(' ')
    .toLowerCase();

  // Find worker's associated category
  const cat = categories.find((c) => c.id === worker.serviceCategoryId);
  const catHaystack = cat
    ? [
        cat.name,
        cat.hindiName || '',
        cat.tagline || '',
        cat.description || '',
        cat.badge || '',
        ...(cat.popularTasks || []),
      ]
        .join(' ')
        .toLowerCase()
    : '';

  // Get synonyms for this worker's category
  const categorySynonyms = worker.serviceCategoryId
    ? TRADE_SYNONYMS[worker.serviceCategoryId] || []
    : [];

  // Direct phrase match: If the entire query appears in textHaystack, catHaystack, or synonyms
  if (
    textHaystack.includes(rawQuery) ||
    catHaystack.includes(rawQuery) ||
    categorySynonyms.some((kw) => kw.toLowerCase().includes(rawQuery))
  ) {
    return true;
  }

  // Split query into tokens
  const cleanTokens = rawQuery
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean);

  if (cleanTokens.length === 0) return true;

  // Filter out stop words unless the entire query is only stop words
  const nonStopTokens = cleanTokens.filter((t) => !STOP_WORDS.has(t));
  const qTokens = nonStopTokens.length > 0 ? nonStopTokens : cleanTokens;

  // Test individual tokens
  const matchingTokens = qTokens.filter((token) => {
    // 1. Match against worker profile
    if (token.length <= 2) {
      const words = textHaystack.split(/[\s,•\/\-()]+/);
      if (words.includes(token)) return true;
    } else {
      if (textHaystack.includes(token)) return true;
    }

    // 2. Match against category info & popular tasks
    if (catHaystack) {
      if (token.length <= 2) {
        const catWords = catHaystack.split(/[\s,•\/\-()]+/);
        if (catWords.includes(token)) return true;
      } else {
        if (catHaystack.includes(token)) return true;
      }
    }

    // 3. Match against trade synonyms & keywords
    if (categorySynonyms.some((kw) => tokenMatchesKeyword(token, kw))) {
      return true;
    }

    return false;
  });

  // If query had only 1 or 2 tokens, all must match.
  // If query had 3+ tokens (e.g. "looking for urgent electrician in indore"), at least 50% or primary trade must match.
  if (qTokens.length <= 2) {
    return matchingTokens.length === qTokens.length;
  }

  return matchingTokens.length >= Math.ceil(qTokens.length * 0.6);
}

/**
 * Checks if a category matches a given search string.
 */
export function categoryMatchesSearch(category: ServiceCategory, searchQuery: string): boolean {
  if (!searchQuery || !searchQuery.trim()) return true;

  const rawQuery = searchQuery.trim().toLowerCase();

  const catHaystack = [
    category.name,
    category.hindiName || '',
    category.tagline || '',
    category.description || '',
    category.badge || '',
    ...(category.popularTasks || []),
  ]
    .join(' ')
    .toLowerCase();

  const keywords = TRADE_SYNONYMS[category.id] || [];

  if (catHaystack.includes(rawQuery) || keywords.some((kw) => kw.toLowerCase().includes(rawQuery))) {
    return true;
  }

  const cleanTokens = rawQuery
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean);

  if (cleanTokens.length === 0) return true;

  const nonStopTokens = cleanTokens.filter((t) => !STOP_WORDS.has(t));
  const qTokens = nonStopTokens.length > 0 ? nonStopTokens : cleanTokens;

  // If any meaningful query token matches category fields or keywords
  return qTokens.some((token) => {
    if (token.length <= 2) {
      const catWords = catHaystack.split(/[\s,•\/\-()]+/);
      if (catWords.includes(token)) return true;
    } else {
      if (catHaystack.includes(token)) return true;
    }

    return keywords.some((kw) => tokenMatchesKeyword(token, kw));
  });
}
