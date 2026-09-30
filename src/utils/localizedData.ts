import {
  ServiceCategory,
  WorkerProfile,
  ComboExpert,
  TenderPost,
  LanguageCode,
} from '../types';

// ============================================================================
// LOCALIZED CATEGORIES
// ============================================================================
export const CATEGORY_LOCALIZATIONS: Record<
  string,
  Record<LanguageCode, { name: string; tagline: string; description: string; popularTasks: string[]; badge: string }>
> = {
  'cat-electric': {
    en: {
      name: 'Electrical & Power Systems',
      tagline: 'Short circuits, distribution board upgrades & inverter diagnostics',
      description: 'ITI certified and safety-tested electricians with calibrated 1000V insulated gear.',
      popularTasks: ['MCB Fuse Tripping Repair', '3-Phase Line Balancing', 'Earthing Pit Testing', 'Appliance Isolation Switch'],
      badge: 'SURGE MONITORED',
    },
    hi: {
      name: 'विद्युत व वायरिंग सेवाएं',
      tagline: 'शॉर्ट सर्किट, डिस्ट्रीब्यूशन बोर्ड अपग्रेड और इन्वर्टर मरम्मत',
      description: 'आईटीआई प्रमाणित और सुरक्षा-परीक्षित इलेक्ट्रीशियन, 1000V इंसुलेटेड उपकरणों से लैस।',
      popularTasks: ['एमसीबी फ्यूज ट्रिपिंग ठीक करना', '3-फेज लोड संतुलन', 'अर्थिंग पिट परीक्षण', 'उपकरण स्विच इंस्टॉलेशन'],
      badge: 'सुरक्षा प्रमाणित',
    },
    ta: {
      name: 'மின்சாரம் மற்றும் பவர் சிஸ்டம்ஸ்',
      tagline: 'மின் கசிவு, விநியோக பலகை மேம்பாடு மற்றும் இன்வெர்ட்டர் பழுதுபார்ப்பு',
      description: '1000V பாதுகாப்பான கருவிகளுடன் ஐடிஐ சான்றளிக்கப்பட்ட மின் வல்லுநர்கள்.',
      popularTasks: ['எம்சிபி பழுதுபார்ப்பு', '3-பேஸ் சமநிலை', 'எர்திங் சோதனை', 'சுவிட்ச் பொருத்துதல்'],
      badge: 'பாதுகாப்பு சான்றிதழ்',
    },
    mr: {
      name: 'विद्युत व वायरिंग कामे',
      tagline: 'शॉर्ट सर्किट, डीपी बोर्ड अपग्रेड आणि इन्व्हर्टर दुरुस्ती',
      description: 'आयटीआय प्रमाणित आणि १००० व्होल्ट इन्सुलेटेड उपकरणांसह सुसज्ज इलेक्ट्रिशियन.',
      popularTasks: ['एमसीबी ट्रिपिंग दुरुस्ती', '३-फेज लोड बॅलन्सिंग', 'अर्थिंग टेस्ट', 'उपकरण स्विच फिटिंग'],
      badge: 'सुरक्षितता प्रमाणित',
    },
  },
  'cat-plumbing': {
    en: {
      name: 'Plumbing & Water Systems',
      tagline: 'Concealed pipe leaks, pressure booster pumps & sanitary fittings',
      description: 'Cooperative master plumbers specialized in acoustic leak tracing and CPVC thermal welding.',
      popularTasks: ['Acoustic Wall Leak Tracing', 'Submersible Pump Overhaul', 'Bathroom Diverter Cartridge Replacement', 'Overhead Tank Float Valve'],
      badge: 'PENSION PROTECTED',
    },
    hi: {
      name: 'नलसाजी एवं जल प्रणाली',
      tagline: 'दीवार में पाइप रिसाव, बूस्टर पंप और सेनेटरी फिटिंग',
      description: 'दीवार में छिपे लीकेज को ढूंढने और सीपीवीसी पाइप वेल्डिंग में माहिर प्लंबर।',
      popularTasks: ['दीवार लीकेज जांच', 'सबमर्सिबल पंप मरम्मत', 'बाथरूम डायवर्टर रिप्लेसमेंट', 'पानी टंकी फ्लोट वाल्व'],
      badge: 'पेंशन सुरक्षित',
    },
    ta: {
      name: 'குழாய் பழுது மற்றும் நீர் அமைப்புகள்',
      tagline: 'சுவர் குழாய் கசிவு, பிரஷர் பம்ப் மற்றும் சானிட்டரி பொருத்துதல்',
      description: 'அதிநவீன கருவிகளுடன் கூடிய கூட்டுறவு சங்க முதன்மை பிளம்பர்கள்.',
      popularTasks: ['சுவர் கசிவு கண்டறிதல்', 'மோட்டார் பம்ப் பழுது', 'குளியலறை குழாய் மாற்றுதல்', 'தண்ணீர் தொட்டி வால்வு'],
      badge: 'நல நிதி பாதுகாப்பு',
    },
    mr: {
      name: 'प्लंबिंग व पाणीपुरवठा कामे',
      tagline: 'भिंतीतील गळती, बुस्टर पंप आणि सॅनिटरी फिटिंग दुरुस्ती',
      description: 'अचूक गळती शोधणे व सीपीव्हीसी पाईप वेल्डिंगमध्ये निष्णात प्लंबर.',
      popularTasks: ['भिंत लीकेज तपासणी', 'सबमर्सिबल पंप दुरुस्ती', 'बाथरूम डायव्हर्टर बदलणे', 'टाकी फ्लोट व्हॉल्व्ह'],
      badge: 'पेन्शन सुरक्षित',
    },
  },
  'cat-carpentry': {
    en: {
      name: 'Carpentry & Woodwork',
      tagline: 'Custom cabinetry, hydraulic hinge fixes & lock installations',
      description: 'Experienced guild carpenters proficient in modular fittings, door re-alignments, and teak preservation.',
      popularTasks: ['Door Lock & Latch Replacement', 'Hydraulic Bed Frame Repair', 'Modular Kitchen Hinge Alignment', 'Custom Shelf Mounting'],
      badge: 'MASTER CRAFT',
    },
    hi: {
      name: 'बढ़ई और लकड़ी का काम',
      tagline: 'अलमारी निर्माण, हाइड्रोलिक कब्जा मरम्मत और मुख्य द्वार ताले',
      description: 'मॉड्यूलर किचन, दरवाजे संरेखण और सागौन पॉलिशिंग में अनुभवी बढ़ई।',
      popularTasks: ['दरवाजे का ताला बदलना', 'हाइड्रोलिक बेड रिपेयर', 'मॉड्यूलर किचन कब्जा अलाइनमेंट', 'कस्टम शेल्फ फिटिंग'],
      badge: 'मास्टर कारीगर',
    },
    ta: {
      name: 'தச்சு வேலை மற்றும் மரவேலை',
      tagline: 'அலமாரி வடிவமைப்பு, பூட்டுகள் மற்றும் மரக்கதவு பழுதுபார்ப்பு',
      description: 'மாடுலர் பொருத்துதல்கள் மற்றும் தேக்கு மர வேலைகளில் தேர்ந்த தச்சர்கள்.',
      popularTasks: ['கதவு பூட்டு மாற்றுதல்', 'ஹைட்ராலிக் படுக்கை பழுது', 'சமையலறை அலமாரி சரிசெய்தல்', 'மர அடுக்குகள்'],
      badge: 'முதன்மை கைவினைஞர்',
    },
    mr: {
      name: 'सुतारकाम व लाकडी फर्निचर',
      tagline: 'कपाटे, हायड्रॉलिक बिजागऱ्या आणि मुख्य दाराचे कुलूप दुरुस्ती',
      description: 'मॉड्यूलर किचन फिटिंग व सागवानी लाकूडकामात अनुभवी सुतार.',
      popularTasks: ['दाराचे लॉक बदलणे', 'हायड्रॉलिक बेड दुरुस्ती', 'किचन कॅबिनेट अलाइनमेंट', 'भिंतीवरील शेल्फ बसवणे'],
      badge: 'उत्कृष्ट कारागीर',
    },
  },
  'cat-masonry': {
    en: {
      name: 'Masonry & Waterproofing',
      tagline: 'Crack stitching, terrace chemical membranes & tile relaying',
      description: 'Multi-generational masons certified under the Uralungal Cooperative construction standards.',
      popularTasks: ['Terrace Damp Proofing', 'Tile Grout Sealing', 'Plaster Crack Repair', 'Brick Wall Partitioning'],
      badge: 'ULCCS ACCREDITED',
    },
    hi: {
      name: 'राजमिस्त्री और वॉटरप्रूफिंग',
      tagline: 'दरारें सिलना, छत का वॉटरप्रूफिंग और टाइल रिपेयरिंग',
      description: 'सहकारी निर्माण मानकों के तहत प्रशिक्षित कुशल राजमिस्त्री।',
      popularTasks: ['छत सीलन प्रूफिंग', 'टाइल ग्राउट सीलिंग', 'प्लास्टर दरार मरम्मत', 'ईंट की दीवार चिनाई'],
      badge: 'सहकार मान्यता प्राप्त',
    },
    ta: {
      name: 'கொத்து வேலை & வாட்டர்ப்ரூஃபிங்',
      tagline: 'சுவர் விரிசல் சரிசெய்தல், மாடி நீர்க்கசிவு தடுப்பு மற்றும் டைல்ஸ் வேலை',
      description: 'அரசு கூட்டுறவு கட்டுமான தரநிலைகளின் கீழ் சான்றளிக்கப்பட்ட கொத்தனா Leonardo.',
      popularTasks: ['மாடி வாட்டர்ப்ரூஃபிங்', 'டைல்ஸ் பொருத்துதல்', 'சுவர் பூச்சு பழுது', 'செங்கல் சுவர் கட்டுதல்'],
      badge: 'கூட்டுறவு அங்கீகாரம்',
    },
    mr: {
      name: 'गवंडीकाम व वॉटरप्रूफिंग',
      tagline: 'भिंतीच्या भेगा भरणे, टेरेस वॉटरप्रूफिंग आणि फरशी बसवणे',
      description: 'सहकारी बांधकाम मानकांनुसार प्रशिक्षित अनुभवी गवंडी.',
      popularTasks: ['टेरेस वॉटरप्रूफिंग', 'टाईल्स ग्राउटिंग', 'प्लास्टर दुरुस्ती', 'विटांची भिंत बांधकाम'],
      badge: 'अधिकृत गवंडी',
    },
  },
  'cat-cleaning': {
    en: {
      name: 'Sanitation & Deep Cleaning',
      tagline: 'Industrial kitchen degreasing, bathroom descaling & floor polishing',
      description: 'Cooperative sanitation teams using non-toxic biodegradable compounds and mechanical scrubbers.',
      popularTasks: ['Full Home Sanitization', 'Sofa & Mattress Extraction', 'Post-Construction Scrubbing', 'Water Tank Disinfection'],
      badge: 'ECO-BIO CERTIFIED',
    },
    hi: {
      name: 'सफाई एवं स्वच्छता सेवाएं',
      tagline: 'रसोईघर की डीप क्लीनिंग, बाथरूम डिस्केलिंग और फर्श पॉलिशिंग',
      description: 'गैर-विषाक्त पर्यावरण अनुकूल रसायनों और मशीनों से गहरी सफाई।',
      popularTasks: ['पूरे घर की डीप क्लीनिंग', 'सोफा और गद्दे की सफाई', 'निर्माण उपरांत सफाई', 'पानी की टंकी की सफाई'],
      badge: 'इको-बायो प्रमाणित',
    },
    ta: {
      name: 'ஆழ்ந்த துப்புரவு & சுகாதாரம்',
      tagline: 'சமையலறை எண்ணெய் நீக்கம், குளியலறை சுத்திகரிப்பு & தரை பாலிஷ்',
      description: 'இயற்கை நச்சுத்தன்மையற்ற பொருட்களுடன் கூட்டுறவு துப்புரவு குழுக்கள்.',
      popularTasks: ['முழு வீடு ஆழ்ந்த தூய்மை', 'சோபா கிளீனிங்', 'கட்டுமானத்திற்குப் பிந்தைய தூய்மை', 'நீர் தொட்டி சுத்தம்'],
      badge: 'சுற்றுச்சூழல் சான்றிதழ்',
    },
    mr: {
      name: 'स्वच्छता व सखोल सफाई',
      tagline: 'किचन डीप क्लिनिंग, बाथरूम स्वच्छता आणि फरशी पॉलिशिंग',
      description: 'पर्यावरणपूरक औषधे आणि आधुनिक यंत्रांचा वापर करणारी सहकारी टीम.',
      popularTasks: ['संपूर्ण घराची डीप क्लिनिंग', 'सोफा व गादी स्वच्छता', 'बांधकामानंतरची सफाई', 'पाण्याची टाकी स्वच्छता'],
      badge: 'इको-बायो प्रमाणित',
    },
  },
  'cat-eldercare': {
    en: {
      name: 'Caregivers & Nursing Aid',
      tagline: 'Elderly assistance, post-surgery mobility support & daily vitals tracking',
      description: 'Compassionate auxiliary nurse mid-wives and eldercare workers verified with police clearances.',
      popularTasks: ['Elderly Mobility Assistance', 'Bedside Medication Scheduling', 'Physiotherapy Exercise Aid', 'Hospital Escort Support'],
      badge: 'SEWA ACCREDITED',
    },
    hi: {
      name: 'बुजुर्ग देखभाल एवं परिचर्या',
      tagline: 'वरिष्ठ नागरिकों की सहायता, सर्जरी उपरांत देखभाल और स्वास्थ्य निगरानी',
      description: 'सहानुभूतिपूर्ण, पुलिस-सत्यापित और प्रशिक्षित स्वास्थ्य सहायक।',
      popularTasks: ['बुजुर्गों के चलने-फिरने में सहायता', 'दवाइयों का समयबद्ध प्रबंधन', 'फिजियोथेरेपी व्यायाम सहयोग', 'अस्पताल ले जाने में सहायता'],
      badge: 'सेवा मान्यता प्राप्त',
    },
    ta: {
      name: 'முதியோர் பராமரிப்பு & செவிலியர் உதவி',
      tagline: 'முதியோர் உதவி, அறுவை சிகிச்சைக்குப் பின் பராமரிப்பு மற்றும் முக்கிய அளவீடுகள்',
      description: 'காவல்துறை சரிபார்க்கப்பட்ட மற்றும் பயிற்சி பெற்ற கூட்டுறவு பராமரிப்பாளர்கள்.',
      popularTasks: ['முதியோர் நடமாட்ட உதவி', 'மருந்து அட்டவணை பராமரிப்பு', 'உடற்பயிற்சி உதவி', 'மருத்துவமனை துணை'],
      badge: 'சேவா அங்கீகாரம்',
    },
    mr: {
      name: 'ज्येष्ठ नागरिक शुश्रूषा व मदत',
      tagline: 'वृद्धांची काळजी, शस्त्रक्रियेनंतरची मदत आणि औषधोपचार वेळापत्रक',
      description: 'पोलीस व्हेरिफाईड आणि प्रशिक्षित दयाळू शुश्रूषा सहायक.',
      popularTasks: ['वृद्धांना चालण्यास मदत', 'वेळेवर औषधे देणे', 'फिजिओथेरपी व्यायाम मदत', 'रुग्णालयात नेण्यास सोबत'],
      badge: 'सेवा मान्यता प्राप्त',
    },
  },
  'cat-driving': {
    en: {
      name: 'Drivers & Fleet Chauffeurs',
      tagline: 'Private chauffeur, institutional shuttle, airport transit & emergency driver pool',
      description: 'Commercial badge certified and police-verified drivers with defensive driving training and insurance.',
      popularTasks: ['Hourly / Full-Day City Chauffeur', 'Airport Transfer & Highway Driving', 'School Van / Institutional Fleet Pool', 'Night Shift Return Safe Escort'],
      badge: 'COMMERCIAL VERIFIED',
    },
    hi: {
      name: 'ड्राइवर और फ्लीट चालक',
      tagline: 'प्राइवेट ड्राइवर, स्कूल व संस्थागत फ्लीट, एयरपोर्ट ट्रांसफर और आपातकालीन सेवा',
      description: 'कमर्शियल बैज प्रमाणित और पुलिस-सत्यापित ड्राइवर, डिफेंसिव ड्राइविंग प्रशिक्षण और बीमा सुरक्षा से युक्त।',
      popularTasks: ['घंटे / पूरे दिन के लिए कार चालक', 'एयरपोर्ट ट्रांसफर और हाईवे ड्राइविंग', 'स्कूल वैन / संस्थागत फ्लीट पूल', 'सुरक्षित रात्रि यात्रा चालक'],
      badge: 'कमर्शियल सत्यापित',
    },
    ta: {
      name: 'ஓட்டுநர்கள் மற்றும் வாகன ஓட்டிகள்',
      tagline: 'தனிப்பட்ட கார் ஓட்டுநர், நிறுவன வாகன சேவை மற்றும் விமான நிலைய பயணம்',
      description: 'வணிக உரிமம் பெற்ற மற்றும் காவல்துறை சரிபார்க்கப்பட்ட நம்பகமான ஓட்டுநர்கள்.',
      popularTasks: ['மணிநேர / முழு நாள் கார் ஓட்டுநர்', 'விமான நிலைய பயணம் & நெடுஞ்சாலை ஓட்டுதல்', 'பள்ளி வேன் / நிறுவன வாகனம்', 'இரவு நேர பாதுகாப்பான பயணம்'],
      badge: 'வணிக சான்றிதழ்',
    },
    mr: {
      name: 'चालक व फ्लीट ड्रायव्हर',
      tagline: 'वैयक्तिक चालक, संस्थागत वाहने, विमानतळ प्रवास आणि आपत्कालीन ड्रायव्हर पूल',
      description: 'व्यावसायिक बॅज प्रमाणित आणि पोलीस व्हेरिफाईड सुरक्षित ड्रायव्हर्स.',
      popularTasks: ['ताशी / पूर्ण दिवसासाठी कार चालक', 'विमानतळ प्रवास व हायवे ड्रायव्हिंग', 'शालेय व्हॅन / संस्थागत वाहने', 'रात्रीच्या सुरक्षित प्रवासासाठी चालक'],
      badge: 'व्यावसायिक प्रमाणित',
    },
  },
  'cat-gardening': {
    en: {
      name: 'Gardeners & Horticulture',
      tagline: 'Lawn turf trimming, organic vermicompost, rooftop terrace gardens & RWA landscape care',
      description: 'Krishi Vigyan Kendra and NSQF certified horticulturists skilled in organic soil conditioning and plant health.',
      popularTasks: ['Lawn Mowing & Border Edging', 'Organic Vermicompost & Soil Enrichment', 'Terrace / Balcony Planter Revamp', 'Fruit Tree Pruning & Pest Control'],
      badge: 'ECO HORTICULTURE',
    },
    hi: {
      name: 'माली और बागवानी विशेषज्ञ',
      tagline: 'लॉन कटाई, जैविक वर्मीकम्पोस्ट, छत व बालकनी बागवानी और आरडब्ल्यूए पार्क देखभाल',
      description: 'कृषि विज्ञान केंद्र प्रमाणित बागवानी विशेषज्ञ, जैविक खाद, पौध रोपण और ड्रिप सिंचाई में दक्ष।',
      popularTasks: ['लॉन घास कटाई व किनारा संवारना', 'जैविक वर्मीकम्पोस्ट खाद संवर्धन', 'बालकनी व छत बागवानी सेटअप', 'पेड़ों की छंटाई व कीट निवारण'],
      badge: 'जैविक बागवानी',
    },
    ta: {
      name: 'தோட்டக்காரர்கள் மற்றும் தாவர பராமரிப்பு',
      tagline: 'புல்வெளி வெட்டுதல், இயற்கை மண்புழு உரம், மொட்டை மாடி தோட்டம் மற்றும் பூங்கா பராமரிப்பு',
      description: 'வேளாண் அறிவியல் மையம் சான்றளிக்கப்பட்ட தோட்டக்கலை வல்லுநர்கள்.',
      popularTasks: ['புல்வெளி புல் வெட்டுதல்', 'இயற்கை மண்புழு உரம் சேர்த்தல்', 'மாடி தோட்டம் / பால்கனி செடிகள்', 'மரக் கிளை கவாத்து & பூச்சி கட்டுப்பாடு'],
      badge: 'இயற்கை தோட்டக்கலை',
    },
    mr: {
      name: 'माळी व बागकाम तज्ज्ञ',
      tagline: 'लॉन कटिंग, सेंद्रिय गांडूळखत, टेरेस बागकाम आणि गृहनिर्माण संस्था परिसर संवर्धन',
      description: 'कृषी विज्ञान केंद्र प्रमाणित बागकाम तज्ज्ञ, सेंद्रिय माती व झाडांची काळजी.',
      popularTasks: ['लॉन गवत कापणे व कडा छाटणे', 'सेंद्रिय गांडूळखत खत घालणे', 'गच्ची / बाल्कनी कुंडी सजावट', 'झाडांची छाटणी व कीड नियंत्रण'],
      badge: 'सेंद्रिय बागकाम',
    },
  },
};

// ============================================================================
// LOCALIZED WORKER PROFILES
// ============================================================================
export const WORKER_LOCALIZATIONS: Record<
  string,
  Record<
    LanguageCode,
    {
      name: string;
      trade: string;
      bio: string;
      specialties: string[];
      statutoryUan: string;
      statutoryEsic: string;
      cooperativeSociety: string;
      reviews: { author: string; comment: string; tradeWorked: string }[];
      portfolio: { title: string; description: string; tag: string }[];
    }
  >
> = {
  'w-101': {
    en: {
      name: 'Rameshwar Kumar Sharma',
      trade: 'Master Certified Electrician',
      bio: 'State Board certified Grade-A electrical specialist with zero accident record across 14 years. Specialist in high-voltage industrial earthing and household distribution board safety.',
      specialties: ['Short Circuit Diagnostics', '3-Phase Load Balancing', 'Solar Inverter Sync', 'Smart Home Relays'],
      statutoryUan: 'e-Shram UAN Verified',
      statutoryEsic: '₹5,00,000 ESIC Cover Active',
      cooperativeSociety: 'Delhi Shramik Sahakari Samiti Ltd.',
      reviews: [
        {
          author: 'Col. Rajesh Verma',
          comment: 'Outstanding professionalism. Main distribution panel had severe sparking. Arrived with thermal camera, balanced phases, and charged exactly as per society rate card.',
          tradeWorked: '3-Phase Distribution Overhaul',
        },
        {
          author: 'Dr. Sunita Aggarwal',
          comment: 'Rameshwarji fixed my solar inverter connection that two private technicians failed to configure. Cooperative guarantee is real!',
          tradeWorked: 'Inverter Transfer Relay Fix',
        },
      ],
      portfolio: [
        {
          title: '3-Phase Smart Panel Upgrade',
          description: 'Replaced antiquated fuse board with modular MCBs and surge arrestors.',
          tag: 'Distribution Overhaul',
        },
        {
          title: 'Solar Hybrid Inverter Installation',
          description: 'Synchronized 5kVA solar plant with net-metering switchgear.',
          tag: 'Renewable Power',
        },
      ],
    },
    hi: {
      name: 'रामेश्वर कुमार शर्मा',
      trade: 'प्रमाणित मुख्य इलेक्ट्रीशियन',
      bio: '14 वर्षों के बेदाग रिकॉर्ड के साथ स्टेट बोर्ड प्रमाणित ग्रेड-ए विद्युत विशेषज्ञ। उच्च वोल्टेज अर्थिंग और घरेलू डिस्ट्रीब्यूशन बोर्ड सुरक्षा में निपुण।',
      specialties: ['शॉर्ट सर्किट जांच', '3-फेज लोड संतुलन', 'सोलर इन्वर्टर सिंक', 'स्मार्ट रिले'],
      statutoryUan: 'ई-श्रम UAN प्रमाणित',
      statutoryEsic: '₹5,00,000 ईएसआईसी बीमा सक्रिय',
      cooperativeSociety: 'दिल्ली श्रमिक सहकारी समिति लिमिटेड',
      reviews: [
        {
          author: 'कर्नल राजेश वर्मा',
          comment: 'उत्कृष्ट कार्यशैली। मेन पैनल में चिंगारियां निकल रही थीं। थर्मल कैमरे से जांच कर सटीक मरम्मत की और तय दर पर ही काम किया।',
          tradeWorked: '3-फेज डिस्ट्रीब्यूशन पैनल ओवरहाल',
        },
        {
          author: 'डॉ. सुनीता अग्रवाल',
          comment: 'रामेश्वर जी ने सोलर इन्वर्टर कनेक्शन तुरंत ठीक कर दिया जिसे अन्य तकनीशियन नहीं कर पाए थे। सहकारी गारंटी अद्भुत है!',
          tradeWorked: 'इन्वर्टर रिले मरम्मत',
        },
      ],
      portfolio: [
        {
          title: '3-फेज स्मार्ट पैनल अपग्रेड',
          description: 'पुराने फ्यूज बॉक्स को आधुनिक एमसीबी और सर्ज प्रोटेक्टर से बदला।',
          tag: 'पैनल नवीनीकरण',
        },
        {
          title: 'सोलर हाइब्रिड इन्वर्टर इंस्टॉलेशन',
          description: '5kVA सोलर प्लांट को नेट-मीटरिंग के साथ सुरक्षित जोड़ा।',
          tag: 'सोलर ऊर्जा',
        },
      ],
    },
    ta: {
      name: 'ராமேஷ்வர் குமார் சர்மா',
      trade: 'சான்றளிக்கப்பட்ட முதன்மை எலக்ட்ரீஷியன்',
      bio: '14 ஆண்டுகால விபத்தில்லா சாதனையுடன் கூடிய அரசு சான்றளிக்கப்பட்ட மின் பொறியாளர். உயர் மின்னழுத்த எர்திங் மற்றும் வீட்டு மின் பலகை பாதுகாப்பில் வல்லுநர்.',
      specialties: ['மின் கசிவு சரிசெய்தல்', '3-பேஸ் சமநிலை', 'சோலார் இன்வெர்ட்டர்', 'ஸ்மார்ட் ரிலே'],
      statutoryUan: 'இ-ஷ்ரம் UAN சரிபார்க்கப்பட்டது',
      statutoryEsic: '₹5,00,000 ESIC காப்பீடு செயலில் உள்ளது',
      cooperativeSociety: 'தில்லி தொழிலாளர் கூட்டுறவு சங்கம்',
      reviews: [
        {
          author: 'கர்னல் ராஜேஷ் வர்மா',
          comment: 'சிறந்த தொழில்முறை அணுகுமுறை. மின்சார பலகை தீப்பொறியை உடனே அணைத்து சரிசெய்தார். அரசு கட்டண அட்டைப்படியே வசூலித்தார்.',
          tradeWorked: '3-பேஸ் விநியோக சீரமைப்பு',
        },
        {
          author: 'டாக்டர் சுனிதா அகர்வால்',
          comment: 'சோலார் இன்வெர்ட்டரை மிகச் சிறப்பாக இணைத்தார். கூட்டுறவு சங்கம் மிகவும் நம்பகமானது!',
          tradeWorked: 'இன்வெர்ட்டர் ரிலே பழுது',
        },
      ],
      portfolio: [
        {
          title: '3-பேஸ் ஸ்மார்ட் பேனல் மேம்பாடு',
          description: 'பழைய பியூஸ் பலகையை மாற்றி நவீன MCB பொருத்தியது.',
          tag: 'மின் பகிர்வு',
        },
        {
          title: 'சோலார் ஹைப்ரிட் இன்வெர்ட்டர்',
          description: '5kVA சோலார் இணைப்பை நெட்-மீட்டருடன் இணைத்தது.',
          tag: 'சூரிய சக்தி',
        },
      ],
    },
    mr: {
      name: 'रामेश्वर कुमार शर्मा',
      trade: 'प्रमाणित मुख्य इलेक्ट्रिशियन',
      bio: '१४ वर्षांचा निर्दोष अनुभव असलेले स्टेट बोर्ड प्रमाणित ग्रेड-ए विद्युत तज्ज्ञ. हाय-व्होल्टेज अर्थिंग आणि घरगुती वीज सुरक्षिततेमध्ये निष्णात.',
      specialties: ['शॉर्ट सर्किट तपासणी', '३-फेज लोड बॅलन्स', 'सोलर इन्व्हर्टर सिंक', 'स्मार्ट होम स्विचेस'],
      statutoryUan: 'ई-श्रम UAN प्रमाणित',
      statutoryEsic: '₹५,००,००० ईएसआयसी विमा सक्रिय',
      cooperativeSociety: 'दिल्ली श्रमिक सहकारी सोसायटी लि.',
      reviews: [
        {
          author: 'कर्नल राजेश वर्मा',
          comment: 'उत्कृष्ट काम. मुख्य पॅनेलमध्ये स्पार्किंग होत होते, थर्मल कॅमेऱ्याने अचूक दोष शोधून दुरुस्त केले.',
          tradeWorked: '३-फेज पॅनेल दुरुस्ती',
        },
        {
          author: 'डॉ. सुनीता अग्रवाल',
          comment: 'रामेश्वरजींनी सोलर इन्व्हर्टर कनेक्शन लगेच दुरुस्त केले. सहकारी सेवेवर पूर्ण विश्वास!',
          tradeWorked: 'इन्व्हर्टर रिले फिक्स',
        },
      ],
      portfolio: [
        {
          title: '३-फेज स्मार्ट पॅनेल अपग्रेड',
          description: 'जुनाट फ्युज बॉक्स काढून आधुनिक एमसीबी बसवले.',
          tag: 'पॅनेल नूतनीकरण',
        },
        {
          title: 'सोलर हायब्रिड इन्व्हर्टर बसवणे',
          description: '५ केव्हीए सोलर सिस्टीम सुरक्षितपणे कनेक्ट केली.',
          tag: 'सौर ऊर्जा',
        },
      ],
    },
  },
  'w-102': {
    en: {
      name: 'Mohd. Salim Mansoori',
      trade: 'Senior Thermal Plumbing Specialist',
      bio: 'Second-generation plumber specializing in acoustically tracing hidden slab leakages without demolition. Experienced in residential high-pressure pump automation.',
      specialties: ['Non-Destructive Leak Tracing', 'CPVC Thermal Fusing', 'Booster Pumps', 'Water Hammer Arrest'],
      statutoryUan: 'e-Shram UAN Verified',
      statutoryEsic: '₹5,00,000 ESIC Cover Active',
      cooperativeSociety: 'Noida Shramjeevi Karigar Society',
      reviews: [
        {
          author: 'Pooja Singhania',
          comment: 'Saved our imported Italian bathroom tiles! Traced the leak behind the bathtub using acoustic listening stick with zero wall breakage.',
          tradeWorked: 'Concealed Water Leak Isolation',
        },
        {
          author: 'Harpreet Singh',
          comment: 'Replaced complete internal pipeline in one single day. Extremely neat workmanship.',
          tradeWorked: 'Multi-Line Repiping',
        },
      ],
      portfolio: [
        {
          title: 'Concealed Acoustic Leak Repair',
          description: 'Located hidden 2mm fissure inside reinforced concrete bathroom slab.',
          tag: 'Leak Isolation',
        },
      ],
    },
    hi: {
      name: 'मोहम्मद सलीम मंसूरी',
      trade: 'वरिष्ठ थर्मल प्लंबिंग विशेषज्ञ',
      bio: 'बिना तोड़-फोड़ के दीवार के अंदरूनी पाइप लीकेज को पकड़ने में माहिर। आवासीय हाई-प्रेशर पंप ऑटोमेशन में 11 वर्षों का अनुभव।',
      specialties: ['बिना तोड़-फोड़ लीकेज जांच', 'सीपीवीसी थर्मल वेल्डिंग', 'बूस्टर पंप इंस्टॉलेशन', 'वाटर हैमर रोकथाम'],
      statutoryUan: 'ई-श्रम UAN प्रमाणित',
      statutoryEsic: '₹5,00,000 ईएसआईसी बीमा सक्रिय',
      cooperativeSociety: 'नोएडा श्रमजीवी कारीगर समिति',
      reviews: [
        {
          author: 'पूजा सिंघानिया',
          comment: 'बिना दीवार तोड़े बाथटब के पीछे का रिसाव खोज निकाला और टाइल्स बचा लीं। बेहतरीन हुनर!',
          tradeWorked: 'छिपे लीकेज की सटीक मरम्मत',
        },
        {
          author: 'हरप्रीत सिंह',
          comment: 'पूरे घर की इंटरनल पाइपलाइन सिर्फ एक दिन में बदल दी। बेहद साफ-सुथरा काम।',
          tradeWorked: 'पाइपलाइन रीपाइपिंग',
        },
      ],
      portfolio: [
        {
          title: 'छिपा हुआ पाइप लीकेज रिपेयर',
          description: 'कंक्रीट स्लैब के भीतर छिपे 2mm के रिसाव को बिना नुकसान पहुंचाए ठीक किया।',
          tag: 'लीकेज समाधान',
        },
      ],
    },
    ta: {
      name: 'முகமது சலீம் மன்சூரி',
      trade: 'மூத்த தெர்மல் பிளம்பிங் நிபுணர்',
      bio: 'சுவரை உடைக்காமல் ஒலி அலை மூலம் மறைந்திருக்கும் நீர் கசிவை கண்டறிவதில் வல்லுநர். மோட்டார் பம்ப் அமைப்பில் 11 ஆண்டு அனுபவம்.',
      specialties: ['சுவர் உடைப்பில்லா கசிவு கண்டறிதல்', 'CPVC வெல்டிங்', 'பூஸ்டர் பம்ப்', 'நீர் அழுத்த சீரமைப்பு'],
      statutoryUan: 'இ-ஷ்ரம் UAN சரிபார்க்கப்பட்டது',
      statutoryEsic: '₹5,00,000 ESIC காப்பீடு செயலில் உள்ளது',
      cooperativeSociety: 'நொய்டா தொழிலாளர் சங்கம்',
      reviews: [
        {
          author: 'பூஜா சிங்கானியா',
          comment: 'சுவரை உடைக்காமல் ஒலியை வைத்து கசிவை கண்டுபிடித்து டைல்ஸை காப்பாற்றினார்!',
          tradeWorked: 'மறைந்த நீர் கசிவு பழுது',
        },
      ],
      portfolio: [
        {
          title: 'கான்கிரீட் நீர் கசிவு சரிசெய்தல்',
          description: 'குளியலறை தளத்தில் 2 மிமீ கசிவை துல்லியமாக சீரமைத்தது.',
          tag: 'கசிவு சீரமைப்பு',
        },
      ],
    },
    mr: {
      name: 'मोहम्मद सलीम मन्सूरी',
      trade: 'वरिष्ठ थर्मल प्लंबिंग तज्ज्ञ',
      bio: 'भिंत न फोडता आतल्या पाईपची गळती शोधण्यात निष्णात. गृहनिर्माण सोसायट्यांचे पाणीपुरवठा ऑटोमेशन करण्यात ११ वर्षे अनुभव.',
      specialties: ['विनातोडफोड गळती शोध', 'सीपीव्हीसी वेल्डिंग', 'बुस्टर पंप', 'पाणी दाब नियंत्रण'],
      statutoryUan: 'ई-श्रम UAN प्रमाणित',
      statutoryEsic: '₹५,००,००० ईएसआयसी विमा सक्रिय',
      cooperativeSociety: 'नोएडा श्रमजीवी कारागीर संस्था',
      reviews: [
        {
          author: 'पूजा सिंघानिया',
          comment: 'टाईल्स न तोडता बाथटब मागची गळती अचूक शोधून दुरुस्त केली!',
          tradeWorked: 'पाईप गळती दुरुस्ती',
        },
      ],
      portfolio: [
        {
          title: 'कंक्रीट स्लॅब गळती दुरुस्ती',
          description: 'कंक्रीटमधील सूक्ष्म गळती शोधून संपूर्ण सील केले.',
          tag: 'गळती निवारण',
        },
      ],
    },
  },
  'w-103': {
    en: {
      name: 'Jaswant Singh Kalsi',
      trade: 'Guild Master Carpenter & Joiner',
      bio: 'Heritage woodwork craftsman adept in modern hydraulic furniture mechanisms, sliding wardrobe tracks, and antique wood restoration.',
      specialties: ['Hydraulic Lift Channels', 'Modular Soft-Close Hinges', 'Concealed Lock Mortising', 'Teakwood Re-polishing'],
      statutoryUan: 'e-Shram UAN Verified',
      statutoryEsic: '₹5,00,000 ESIC Cover Active',
      cooperativeSociety: 'Gurgaon Vishwakarma Woodworkers Guild',
      reviews: [
        {
          author: 'Virendra Oberoi',
          comment: 'Jaswantji repaired our 12-foot Italian sliding wardrobe that showroom technicians wanted to replace entirely. Cost effective and masterful.',
          tradeWorked: 'Sliding Wardrobe Heavy-Duty Roller Realignment',
        },
      ],
      portfolio: [
        {
          title: 'Heavy Duty Sliding Door Fix',
          description: 'Re-engineered ceiling track with balanced bearing rollers.',
          tag: 'Joinery Overhaul',
        },
      ],
    },
    hi: {
      name: 'जसवंत सिंह कलसी',
      trade: 'मास्टर बढ़ई एवं काष्ठ शिल्पकार',
      bio: 'आधुनिक हाइड्रोलिक फर्नीचर, मॉड्यूलर किचन सॉफ्ट-क्लोज कब्जे और लकड़ी की नक्काशी व पॉलिशिंग में 16 वर्षों का समृद्ध अनुभव।',
      specialties: ['हाइड्रोलिक लिफ्ट चैनल', 'मॉड्यूलर सॉफ्ट-क्लोज कब्जे', 'कंसील्ड डोर लॉक फिटिंग', 'सागौन फर्नीचर पॉलिश'],
      statutoryUan: 'ई-श्रम UAN प्रमाणित',
      statutoryEsic: '₹5,00,000 ईएसआईसी बीमा सक्रिय',
      cooperativeSociety: 'गुड़गांव विश्वकर्मा काष्ठकार गिल्ड',
      reviews: [
        {
          author: 'वीरेंद्र ओबेरॉय',
          comment: 'हमारी 12 फीट की स्लाइडिंग अलमारी को पूरी तरह से नया जैसा बना दिया। अद्भुत कारीगरी!',
          tradeWorked: 'स्लाइडिंग वार्डरोब रोलर रिपेयर',
        },
      ],
      portfolio: [
        {
          title: 'स्लाइडिंग अलमारी रोलर फिटिंग',
          description: 'हैवी-ड्यूटी रोलर्स के साथ चैनल ट्रैक को पूरी तरह संतुलित किया।',
          tag: 'फर्नीचर नवीनीकरण',
        },
      ],
    },
    ta: {
      name: 'ஜஸ்வந்த் சிங் கல்சி',
      trade: 'முதன்மை தச்சு & மர கைவினைஞர்',
      bio: 'நவீன ஹைட்ராலிக் மரச்சாமான்கள், ஸ்லைடிங் கதவுகள் மற்றும் தேக்கு மர மெருகூட்டலில் 16 ஆண்டு அனுபவம்.',
      specialties: ['ஹைட்ராலிக் சேனல்கள்', 'சாஃப்ட்-க்ளோஸ் பூட்டுகள்', 'கதவு பூட்டு பொருத்துதல்', 'தேக்கு பாலிஷ்'],
      statutoryUan: 'இ-ஷ்ரம் UAN சரிபார்க்கப்பட்டது',
      statutoryEsic: '₹5,00,000 ESIC காப்பீடு செயலில் உள்ளது',
      cooperativeSociety: 'குருகிராம் தச்சர்கள் கூட்டுறவு சங்கம்',
      reviews: [
        {
          author: 'வீரேந்திர ஓபராய்',
          comment: 'ஸ்லைடிங் அலமாரியை மிகக் குறைந்த செலவில் சீரமைத்து கொடுத்தார். கைதேர்ந்த தச்சர்!',
          tradeWorked: 'ஸ்லைடிங் அலமாரி சீரமைப்பு',
        },
      ],
      portfolio: [
        {
          title: 'ஸ்லைடிங் கதவு பழுது',
          description: 'நீடித்து உழைக்கும் ரோலர்களுடன் கதவை சமன் செய்தது.',
          tag: 'மர வேலைப்பாடு',
        },
      ],
    },
    mr: {
      name: 'जसवंत सिंग कलसी',
      trade: 'मास्टर सुतार व फर्निचर कारागीर',
      bio: 'आधुनिक हायड्रॉलिक फर्निचर, मॉड्यूलर किचन व सागवानी लाकूडकामात १६ वर्षांचा प्रदीर्घ अनुभव.',
      specialties: ['हायड्रॉलिक लिफ्ट चॅनल', 'सॉफ्ट-क्लोज बिजागऱ्या', 'डोअर लॉक फिटिंग', 'सागवानी पॉलिश'],
      statutoryUan: 'ई-श्रम UAN प्रमाणित',
      statutoryEsic: '₹५,००,००० ईएसआयसी विमा सक्रिय',
      cooperativeSociety: 'गुडगाव विश्वकर्मा सुतार सहकारी संस्था',
      reviews: [
        {
          author: 'वीरेंद्र ओबेरॉय',
          comment: 'स्लाइडिंग कपाट अगदी नवीन केल्यासारखे नीट चालवून दिले. अत्यंत समाधानकारक काम!',
          tradeWorked: 'स्लाइडिंग वॉर्डरोब दुरुस्ती',
        },
      ],
      portfolio: [
        {
          title: 'स्लाइडिंग डोअर रोलर रिपेअर',
          description: 'कपाटाचे चॅनेल व रोलर्स संतुलित करून सुरळीत केले.',
          tag: 'फर्निचर दुरुस्ती',
        },
      ],
    },
  },
  'w-104': {
    en: {
      name: 'Muruganandham Pillai',
      trade: 'Certified Mason & Waterproofing Expert',
      bio: 'ULCCS accredited structural waterproofing technician with 18 years expertise in PU injection grouting and rooftop thermal damp-proofing membranes.',
      specialties: ['Polyurethane Chemical Grouting', 'Terrace Bitumen Membranes', 'Tile Hollow Sound Rectification', 'Structural Column Strengthening'],
      statutoryUan: 'e-Shram UAN Verified',
      statutoryEsic: '₹5,00,000 ESIC Cover Active',
      cooperativeSociety: 'Uralungal Labour Contract Society (ULCCS) Branch',
      reviews: [
        {
          author: 'Sanjeev Nambiar',
          comment: 'Terrace had monsoon seepage for 3 years. Pillai used thermal scan, injected PU chemical, and our ceiling has stayed bone-dry through heavy storms.',
          tradeWorked: 'Pressure Grouting & Damp Proofing',
        },
      ],
      portfolio: [
        {
          title: 'Terrace Chemical Waterproofing',
          description: 'Applied 3-layer elastomeric coating over 2200 sq.ft terrace slab.',
          tag: 'Waterproofing',
        },
      ],
    },
    hi: {
      name: 'मुरुगानंदन पिल्लई',
      trade: 'प्रमाणित राजमिस्त्री एवं वॉटरप्रूफिंग विशेषज्ञ',
      bio: 'छत सीलन, केमिकल ग्राउटिंग और वॉटरप्रूफिंग में 18 वर्षों का विशाल अनुभव। मानकीकृत केमिकल इंजेक्शन तकनीकों से छत की सीलन का स्थायी समाधान।',
      specialties: ['केमिकल इंजेक्शन ग्राउटिंग', 'छत वॉटरप्रूफिंग झिल्ली', 'खोखली टाइल दुरुस्ती', 'कॉलम मजबूती चिनाई'],
      statutoryUan: 'ई-श्रम UAN प्रमाणित',
      statutoryEsic: '₹5,00,000 ईएसआईसी बीमा सक्रिय',
      cooperativeSociety: 'उरालूंगल लेबर कॉन्ट्रैक्ट कोऑपरेटिव सोसायटी',
      reviews: [
        {
          author: 'संजीव नाम्बियार',
          comment: '3 साल से छत से पानी टपक रहा था। पिल्लई जी ने केमिकल ग्राउटिंग की और अब भारी बारिश में भी छत पूरी तरह सूखी है।',
          tradeWorked: 'प्रेशर ग्राउटिंग एवं वॉटरप्रूफिंग',
        },
      ],
      portfolio: [
        {
          title: 'छत केमिकल वॉटरप्रूफिंग',
          description: '2200 वर्ग फुट छत पर 3-परत इलास्टोमेरिक कोटिंग की गई।',
          tag: 'वॉटरप्रूफिंग',
        },
      ],
    },
    ta: {
      name: 'முருகானந்தம் பிள்ளை',
      trade: 'சான்றளிக்கப்பட்ட கொத்தனார் & வாட்டர்ப்ரூஃபிங் நிபுணர்',
      bio: '18 ஆண்டு கால அனுபவத்துடன் மாடி நீர்க்கசிவு மற்றும் கெமிக்கல் கிரவுட்டிங் செய்வதில் தலைசிறந்த கொத்தனார்.',
      specialties: ['பாலிமித்தேன் கெமிக்கல் கிரவுட்டிங்', 'மாடி நீர்க்கசிவு தடுப்பு', 'டைல்ஸ் சரிசெய்தல்', 'கான்கிரீட் பலப்படுத்துதல்'],
      statutoryUan: 'இ-ஷ்ரம் UAN சரிபார்க்கப்பட்டது',
      statutoryEsic: '₹5,00,000 ESIC காப்பீடு செயலில் உள்ளது',
      cooperativeSociety: 'உராலுங்கல் தொழிலாளர் ஒப்பந்த சங்கம் (ULCCS)',
      reviews: [
        {
          author: 'சஞ்சீவ் நம்பியார்',
          comment: 'மழைக் காலத்தில் மாடி கசிவை உடனே தடுத்து நிறுத்தினார். மிகச் சிறந்த வாட்டர்ப்ரூஃபிங் வேலை!',
          tradeWorked: 'கெமிக்கல் கிரவுட்டிங் & வாட்டர்ப்ரூஃபிங்',
        },
      ],
      portfolio: [
        {
          title: 'மாடி வாட்டர்ப்ரூஃபிங் பணி',
          description: '2200 சதுர அடி மாடி தளத்தில் 3 அடுக்கு பாதுகாப்பு பூச்சு.',
          tag: 'வாட்டர்ப்ரூஃபிங்',
        },
      ],
    },
    mr: {
      name: 'मुरुगानंदन पिल्लई',
      trade: 'प्रमाणित गवंडी व वॉटरप्रूफिंग तज्ज्ञ',
      bio: 'टेरेस गळती, केमिकल ग्राउटिंग आणि बांधकाम मजबुतीकरणात १८ वर्षांचा दांडगा अनुभव.',
      specialties: ['केमिकल इंजेक्शन ग्राउटिंग', 'टेरेस वॉटरप्रूफिंग', 'टाईल्स दुरुस्ती', 'कॉलम मजबुती'],
      statutoryUan: 'ई-श्रम UAN प्रमाणित',
      statutoryEsic: '₹५,००,००० ईएसआयसी विमा सक्रिय',
      cooperativeSociety: 'उरालूंगल लेबर कॉन्ट्रॅक्ट सोसायटी (ULCCS)',
      reviews: [
        {
          author: 'संजीव नांबियार',
          comment: 'पावसाळ्यात छताची होणारी गळती कायमची थांबवली. अत्यंत परिणामकारक वॉटरप्रूफिंग!',
          tradeWorked: 'प्रेशर ग्राउटिंग व वॉटरप्रूफिंग',
        },
      ],
      portfolio: [
        {
          title: 'टेरेस केमिकल वॉटरप्रूफिंग',
          description: '२२०० चौरस फूट टेरेसवर ३-थरी कोटिंग करून गळती रोखली.',
          tag: 'वॉटरप्रूफिंग',
        },
      ],
    },
  },
  'w-105': {
    en: {
      name: 'Sunita Devi Balmiki',
      trade: 'Master Sanitation & Disinfection Lead',
      bio: 'Cooperative cleaning team supervisor trained in bio-enzyme non-caustic formulations. Over 8 years leading specialized kitchen and post-construction scrubbing.',
      specialties: ['Bio-Enzyme Grease Degreasing', 'Acid-Free Tile Descaling', 'HEPA Filtration Extraction', 'Overhead Tank Sanitization'],
      statutoryUan: 'e-Shram UAN Verified',
      statutoryEsic: '₹5,00,000 ESIC Cover Active',
      cooperativeSociety: 'Safai Karamchari Mahila Sahakari Samiti',
      reviews: [
        {
          author: 'Meenakshi Iyer',
          comment: 'Booked post-renovation cleaning. Sunitaji and her team made our dusty 3BHK gleam in 4 hours. No harsh chemical smell at all.',
          tradeWorked: 'Full Flat Deep Degreasing',
        },
      ],
      portfolio: [
        {
          title: 'Commercial Kitchen Deep Degreasing',
          description: 'Restored 12-burner restaurant chimney and oil trap.',
          tag: 'Kitchen Hygiene',
        },
      ],
    },
    hi: {
      name: 'सुनीता देवी बाल्मीकि',
      trade: 'मास्टर सफाई एवं स्वच्छता विशेषज्ञ',
      bio: 'इको-फ्रेंडली बायो-एंजाइम से डीप क्लीनिंग में 8 वर्षों का अनुभव। बिना हानिकारक गंध के रसोई और बाथरूम की चमक लौटाने में विशेषज्ञ।',
      specialties: ['बायो-एंजाइम ग्रीस रिमूवल', 'एसिड-मुक्त टाइल डीस्केलिंग', 'हेपा-फिल्टर सोफा वैक्यूम', 'पानी की टंकी की सफाई'],
      statutoryUan: 'ई-श्रम UAN प्रमाणित',
      statutoryEsic: '₹5,00,000 ईएसआईसी बीमा सक्रिय',
      cooperativeSociety: 'सफाई कर्मचारी महिला सहकारी समिति',
      reviews: [
        {
          author: 'मीनाक्षी अय्यर',
          comment: 'मकान के रिनोवेशन के बाद पूरी सफाई कराई। 4 घंटे में घर चमक उठा, बिना किसी हानिकारक केमिकल की दुर्गंध के।',
          tradeWorked: 'फ्लैट डीप क्लीनिंग',
        },
      ],
      portfolio: [
        {
          title: 'किचन डीप डिग्रेसिंग',
          description: 'चिमनी और टाइल्स की जिद्दी चिकनाई को पूरी तरह साफ किया।',
          tag: 'किचन सफाई',
        },
      ],
    },
    ta: {
      name: 'சுனிதா தேவி பால்மீகி',
      trade: 'சுகாதாரம் & ஆழ்ந்த தூய்மை நிபுணர்',
      bio: 'இயற்கை நொதிகள் மூலம் சமையலறை மற்றும் கழிப்பறைகளை நச்சுத்தன்மையின்றி சுத்தப்படுத்துவதில் 8 ஆண்டு அனுபவம்.',
      specialties: ['எண்ணெய் பிசுக்கு நீக்கம்', 'ஆசிட் இல்லாத டைல்ஸ் தூய்மை', 'சோபா கிளீனிங்', 'நீர் தொட்டி கிருமிநீக்கம்'],
      statutoryUan: 'இ-ஷ்ரம் UAN சரிபார்க்கப்பட்டது',
      statutoryEsic: '₹5,00,000 ESIC காப்பீடு செயலில் உள்ளது',
      cooperativeSociety: 'துப்புரவு தொழிலாளர் மகளிர் கூட்டுறவு சங்கம்',
      reviews: [
        {
          author: 'மீனாட்சி அய்யர்',
          comment: 'முழு வீட்டையும் 4 மணி நேரத்தில் சுத்தமாக்கித் தந்தனர். ரசாயன வாடை எதுவுமில்லை.',
          tradeWorked: 'வீட்டு ஆழ்ந்த தூய்மை',
        },
      ],
      portfolio: [
        {
          title: 'சமையலறை ஆழ்ந்த தூய்மை',
          description: 'புகைபோக்கி மற்றும் அடுப்பு எண்ணெய் பிசுக்குகளை அகற்றியது.',
          tag: 'சமையலறை தூய்மை',
        },
      ],
    },
    mr: {
      name: 'सुनिता देवी वाल्मिकी',
      trade: 'सफाई व स्वच्छता पर्यवेक्षिका',
      bio: 'पर्यावरणपूरक बायो-एन्झाइम्स वापरून किचन व बाथरूम डीप क्लिनिंगमध्ये ८ वर्षांचा अनुभव.',
      specialties: ['बायो-एन्झाइम तेलकट डाग काढणे', 'अ‍ॅसिड-मुक्त टाईल्स क्लिनिंग', 'सोफा व्हॅक्यूम क्लिनिंग', 'पाण्याची टाकी निर्जंतुकीकरण'],
      statutoryUan: 'ई-श्रम UAN प्रमाणित',
      statutoryEsic: '₹५,००,००० ईएसआयसी विमा सक्रिय',
      cooperativeSociety: 'सफाई कामगार महिला सहकारी संस्था',
      reviews: [
        {
          author: 'मीनाक्षी अय्यर',
          comment: 'बांधकामानंतरचे संपूर्ण घर अत्यंत स्वच्छ केले. कुठलाही रासायनिक वास न येता घर चकाचक झाले.',
          tradeWorked: 'घर डीप क्लिनिंग',
        },
      ],
      portfolio: [
        {
          title: 'किचन डीप क्लिनिंग',
          description: 'किचन चिमणी व टाईल्सवरील तेलकट डाग पूर्णपणे स्वच्छ केले.',
          tag: 'स्वच्छता मोहीम',
        },
      ],
    },
  },
  'w-106': {
    en: {
      name: 'Anjali Mary Kurian',
      trade: 'Certified Geriatric Care & Nursing Aide',
      bio: 'Registered Auxiliary Nurse with 9 years serving senior citizens, post-operative stroke patients, and wheelchair mobility assistance.',
      specialties: ['Blood Glucose & Vitals Log', 'Post-Op Wound Dressing', 'Gentle Bedside Mobilization', 'Dementia Companion Care'],
      statutoryUan: 'e-Shram UAN Verified',
      statutoryEsic: '₹5,00,000 ESIC Cover Active',
      cooperativeSociety: 'SEWA Caregiver Workers Cooperative',
      reviews: [
        {
          author: 'Kavita Menon',
          comment: 'Anjali took care of my 84-year old mother with such kindness and medical diligence after her hip replacement. Cooperative caregivers are truly dedicated.',
          tradeWorked: 'Post-Surgery Eldercare Assisstance',
        },
      ],
      portfolio: [
        {
          title: 'Post-Orthopedic Bedside Care',
          description: 'Monitored daily vitals and coordinated physical therapy recovery.',
          tag: 'Geriatric Care',
        },
      ],
    },
    hi: {
      name: 'अंजलि मेरी कुरियन',
      trade: 'प्रमाणित बुजुर्ग देखभाल एवं परिचर्या सहायक',
      bio: 'वरिष्ठ नागरिकों और सर्जरी के बाद मरीजों की देखभाल में 9 वर्षों का अनुभव। रक्तचाप, शुगर निगरानी और फिजियोथेरेपी में दक्ष।',
      specialties: ['दैनिक स्वास्थ्य निगरानी', 'सर्जरी घाव ड्रेसिंग', 'चलने-फिरने में सहायता', 'दवाइयों का समयबद्ध प्रबंधन'],
      statutoryUan: 'ई-श्रम UAN प्रमाणित',
      statutoryEsic: '₹5,00,000 ईएसआईसी बीमा सक्रिय',
      cooperativeSociety: 'सेवा (SEWA) केयरगिवर सहकारी समिति',
      reviews: [
        {
          author: 'कविता मेनन',
          comment: 'अंजलि जी ने मेरी 84 वर्षीय मां की कूल्हे की सर्जरी के बाद बेहद आत्मीयता से देखभाल की। बहुत ही समर्पित परिचारिका!',
          tradeWorked: 'सर्जरी उपरांत बुजुर्ग देखभाल',
        },
      ],
      portfolio: [
        {
          title: 'ऑर्थोपेडिक रिकवरी देखभाल',
          description: 'दैनिक स्वास्थ्य मानकों की निगरानी और फिजियोथेरेपी में सहायता।',
          tag: 'बुजुर्ग सेवा',
        },
      ],
    },
    ta: {
      name: 'அஞ்சலி மேரி குரியன்',
      trade: 'சான்றளிக்கப்பட்ட முதியோர் பராமரிப்பாளர்',
      bio: 'முதியவர்கள் மற்றும் அறுவை சிகிச்சைக்குப் பிந்தைய நோயாளிகளை கனிவுடன் பராமரிப்பதில் 9 ஆண்டு அனுபவம்.',
      specialties: ['இரத்த அழுத்தம் & சர்க்கரை பதிவு', 'காயம் கட்டுதல்', 'முதியோர் நடமாட்ட உதவி', 'மருந்து நிர்வாகம்'],
      statutoryUan: 'இ-ஷ்ரம் UAN சரிபார்க்கப்பட்டது',
      statutoryEsic: '₹5,00,000 ESIC காப்பீடு செயலில் உள்ளது',
      cooperativeSociety: 'சேவா (SEWA) பராமரிப்பாளர் கூட்டுறவு சங்கம்',
      reviews: [
        {
          author: 'கவிதா மேனன்',
          comment: 'எனது தாயாரை மிகுந்த அன்போடும் அக்கறையோடும் கவனித்துக் கொண்டார். பாராட்டத்தக்க சேவை!',
          tradeWorked: 'முதியோர் நலம் & பராமரிப்பு',
        },
      ],
      portfolio: [
        {
          title: 'முதியோர் நல பராமரிப்பு',
          description: 'தினசரி உடற்பயிற்சி மற்றும் மருந்து அட்டவணை பராமரிப்பு.',
          tag: 'முதியோர் உதவி',
        },
      ],
    },
    mr: {
      name: 'अंजली मेरी कुरियन',
      trade: 'प्रमाणित ज्येष्ठ नागरिक शुश्रूषा सहायक',
      bio: 'ज्येष्ठ नागरिकांची देखभाल आणि शस्त्रक्रियेनंतरच्या रुग्णांच्या शुश्रूषेमध्ये ९ वर्षांचा अनुभव. रक्तदाब, मधुमेह तपासणीत कुशल.',
      specialties: ['रक्तदाब व साखर नोंद', 'मलमपट्टी व औषधोपचार', 'चालण्यास मदत', 'वेळेवर औषधे देणे'],
      statutoryUan: 'ई-श्रम UAN प्रमाणित',
      statutoryEsic: '₹५,००,००० ईएसआयसी विमा सक्रिय',
      cooperativeSociety: 'सेवा (SEWA) केअरगिव्हर सहकारी संस्था',
      reviews: [
        {
          author: 'कविता मेनन',
          comment: 'माझ्या आईच्या शस्त्रक्रियेनंतर अंजली यांनी अत्यंत मायेने आणि दक्षतेने सेवा केली. खूप आभारी आहोत!',
          tradeWorked: 'ज्येष्ठ नागरिक शुश्रूषा',
        },
      ],
      portfolio: [
        {
          title: 'शस्त्रक्रियेनंतरची शुश्रूषा',
          description: 'दररोजच्या आरोग्याची नोंद आणि फिजिओथेरपीमध्ये मदत.',
          tag: 'आरोग्य शुश्रूषा',
        },
      ],
    },
  },
  'w-115': {
    en: {
      name: 'Gurpreet Singh Sandhu',
      trade: 'Commercial Heavy & Private Fleet Chauffeur',
      bio: 'Professional certified chauffeur with heavy transport license, clean driving record for 13 years, and defensive driving certification.',
      specialties: ['Automatic & Manual Sedan Chauffeur', 'Highway & Night Transit Driving', 'School Van / Institutional Fleet Pool', 'Airport Priority Drop & Pickup'],
      statutoryUan: 'e-Shram UAN Verified',
      statutoryEsic: '₹5,00,000 Transit Cover Active',
      cooperativeSociety: 'Delhi State Cooperative Transport Guild',
      reviews: [
        {
          author: 'Jasleen Oberoi',
          comment: 'Gurpreetji drove my elderly parents to Chandigarh and back. Extremely calm behind the wheel, took timely breaks, and car was handled with utmost care.',
          tradeWorked: 'Outstation Highway Return Chauffeur',
        },
      ],
      portfolio: [
        {
          title: 'Institutional Fleet & Outstation Highway Transit',
          description: 'Certified defensive driving record across 120,000+ commercial kilometres with zero traffic penalties.',
          tag: 'Fleet Chauffeur',
        },
      ],
    },
    hi: {
      name: 'गुरप्रीत सिंह संधू',
      trade: 'कमर्शियल व प्राइवेट फ्लीट चालक',
      bio: '13 वर्षों के बेदाग रिकॉर्ड और डिफेंसिव ड्राइविंग सर्टिफिकेट के साथ अनुभवी व्यावसायिक चालक।',
      specialties: ['ऑटोमैटिक व मैनुअल कार ड्राइविंग', 'हाईवे व रात्रि ड्राइविंग', 'स्कूल व संस्थागत फ्लीट', 'एयरपोर्ट पिक-अप व ड्रॉप'],
      statutoryUan: 'ई-श्रम यूएएन सत्यापित',
      statutoryEsic: '₹5,00,000 यात्रा बीमा सक्रिय',
      cooperativeSociety: 'दिल्ली स्टेट कोऑपरेटिव ट्रांसपोर्ट गिल्ड',
      reviews: [
        {
          author: 'जसलीन ओबेरॉय',
          comment: 'गुरप्रीत जी मेरे माता-पिता को सुरक्षित चंडीगढ़ ले गए और वापस लाए। गाड़ी बहुत संभलकर और संयम से चलाई।',
          tradeWorked: 'आउटस्टेशन हाईवे रिटर्न ड्राइवर',
        },
      ],
      portfolio: [
        {
          title: 'संस्थागत व आउटस्टेशन हाईवे ड्राइविंग',
          description: '1,20,000+ किमी का प्रमाणित सुरक्षित रिकॉर्ड बिना किसी चालान के।',
          tag: 'फ्लीट चालक',
        },
      ],
    },
    ta: {
      name: 'குர்ப்ரீத் சிங் சாந்து',
      trade: 'வணிக மற்றும் தனிப்பட்ட வாகன ஓட்டுநர்',
      bio: '13 வருட அனுபவம் கொண்ட சான்றளிக்கப்பட்ட நம்பகமான ஓட்டுநர்.',
      specialties: ['கார் ஓட்டுதல்', 'நெடுஞ்சாலை பயணம்', 'பள்ளி வேன் சேவை', 'விமான நிலைய பயணம்'],
      statutoryUan: 'இ-ஷ்ரம் சரிபார்க்கப்பட்டது',
      statutoryEsic: '₹5,00,000 காப்பீடு செயல்பாட்டில் உள்ளது',
      cooperativeSociety: 'டெல்லி கூட்டுறவு போக்குவரத்து சங்கம்',
      reviews: [
        {
          author: 'ஜஸ்லீன் ஓபராய்',
          comment: 'மிகவும் பாதுகாப்பாகவும் அமைதியாகவும் வண்டியை ஓட்டினார்.',
          tradeWorked: 'நெடுஞ்சாலை கார் ஓட்டுநர்',
        },
      ],
      portfolio: [
        {
          title: 'நிறுவன வாகன போக்குவரத்து',
          description: 'விபத்தில்லா ஓட்டுநர் பதிவு.',
          tag: 'வாகன ஓட்டுநர்',
        },
      ],
    },
    mr: {
      name: 'गुरप्रीत सिंह संधू',
      trade: 'व्यावसायिक व खाजगी वाहन चालक',
      bio: '१३ वर्षांचा निष्कलंक रेकॉर्ड असलेला प्रमाणित सुरक्षित ड्रायव्हर.',
      specialties: ['कार ड्रायव्हिंग', 'हायवे व नाईट ड्रायव्हिंग', 'शालेय व्हॅन', 'विमानतळ पिक-अप व ड्रॉप'],
      statutoryUan: 'ई-श्रम युएएन पडताळणीकृत',
      statutoryEsic: '₹५,००,००० प्रवास विमा सक्रिय',
      cooperativeSociety: 'दिल्ली स्टेट सहकारी ट्रान्सपोर्ट गिल्ड',
      reviews: [
        {
          author: 'जसलीन ओबेरॉय',
          comment: 'खूप संयमाने आणि सुरक्षितपणे गाडी चालवली.',
          tradeWorked: 'हायवे ड्रायव्हर',
        },
      ],
      portfolio: [
        {
          title: 'संस्थागत व हायवे प्रवास ड्रायव्हिंग',
          description: '१,२०,००० किमी पेक्षा जास्त सुरक्षित ड्रायव्हिंग अनुभव.',
          tag: 'फ्लीट चालक',
        },
      ],
    },
  },
  'w-116': {
    en: {
      name: 'Bhawani Shankar Kushwaha',
      trade: 'Horticulture & Landscape Specialist',
      bio: 'Krishi Vigyan Kendra certified horticulturist with 16 years transforming residential lawns and rooftop gardens.',
      specialties: ['Organic Balcony / Terrace Garden Setup', 'Lawn Mowing & Turf Weed Control', 'Medicinal Herb Cultivation', 'Tree Grafting'],
      statutoryUan: 'e-Shram UAN Verified',
      statutoryEsic: '₹5,00,000 ESIC Cover Active',
      cooperativeSociety: 'All-India SEWA Green Guild Cooperative',
      reviews: [
        {
          author: 'Sunil Mathur',
          comment: 'Bhawani Shankar completely revived our dying terrace bougainvillea and prepared organic soil beds. Unmatched plant care.',
          tradeWorked: 'Terrace Garden Organic Soil & Plant Pruning',
        },
      ],
      portfolio: [
        {
          title: 'Organic Terrace Kitchen Garden',
          description: 'Transformed rooftop into organic vegetable garden with gravity drip line.',
          tag: 'Horticulture & Landscaping',
        },
      ],
    },
    hi: {
      name: 'भवानी शंकर कुशवाहा',
      trade: 'बागवानी व लैंडस्केप विशेषज्ञ',
      bio: 'कृषि विज्ञान केंद्र प्रमाणित बागवानी विशेषज्ञ, 16 वर्षों का समृद्ध जैविक बागवानी अनुभव।',
      specialties: ['जैविक बालकनी व टेरेस गार्डन', 'लॉन घास कटाई व खरपतवार नियंत्रण', 'औषधीय पौधे संवर्धन', 'कलम रोपण'],
      statutoryUan: 'ई-श्रम यूएएन सत्यापित',
      statutoryEsic: '₹5,00,000 ईएसआईसी बीमा सक्रिय',
      cooperativeSociety: 'अखिल भारतीय सेवा ग्रीन गिल्ड कोऑपरेटिव',
      reviews: [
        {
          author: 'सुनील माथुर',
          comment: 'भवानी शंकर जी ने हमारे मुरझाते पौधों को फिर से हरा-भरा कर दिया। मिट्टी में जैविक खाद का बहुत अच्छा प्रयोग किया।',
          tradeWorked: 'छत बागवानी जैविक खाद व छंटाई',
        },
      ],
      portfolio: [
        {
          title: 'जैविक टेरेस किचन गार्डन',
          description: 'छत पर ड्रिप सिंचाई के साथ सब्जियों का सुंदर जैविक बगीचा तैयार किया।',
          tag: 'बागवानी व लैंडस्केप',
        },
      ],
    },
    ta: {
      name: 'பவானி சங்கர் குஷ்வாஹா',
      trade: 'தோட்டக்கலை & இயற்கை பராமரிப்பு வல்லுநர்',
      bio: '16 வருட அனுபவமுள்ள வேளாண் அறிவியல் மைய சான்றிதழ் பெற்ற தோட்டக்கலை வல்லுநர்.',
      specialties: ['மாடி தோட்டம் அமைத்தல்', 'புல்வெளி பராமரிப்பு', 'மூலிகை செடிகள் வளர்ப்பு', 'மரக் கிளை கவாத்து'],
      statutoryUan: 'இ-ஷ்ரம் சரிபார்க்கப்பட்டது',
      statutoryEsic: '₹5,00,000 காப்பீடு செயல்பாட்டில் உள்ளது',
      cooperativeSociety: 'அனைத்திந்திய சேவா கூட்டுறவு சங்கம்',
      reviews: [
        {
          author: 'சுனில் மாத்தூர்',
          comment: 'எங்கள் மாடி தோட்ட செடிகளை மிகவும் சிறப்பாக பராமரித்தார்.',
          tradeWorked: 'தோட்டக்கலை பராமரிப்பு',
        },
      ],
      portfolio: [
        {
          title: 'இயற்கை மாடி தோட்டம்',
          description: 'சொட்டு நீர் பாசனத்துடன் கூடிய இயற்கை காய்கறி தோட்டம்.',
          tag: 'தோட்டக்கலை',
        },
      ],
    },
    mr: {
      name: 'भवानी शंकर कुशवाहा',
      trade: 'बागकाम व लँडस्केप तज्ज्ञ',
      bio: 'कृषी विज्ञान केंद्र प्रमाणित १६ वर्षांचा अनुभव असलेले सेंद्रिय बागकाम तज्ज्ञ.',
      specialties: ['सेंद्रिय गच्ची बागकाम', 'लॉन गवत कापणे व तण नियंत्रण', 'औषधी वनस्पतींची लागवड', 'कलम बांधणी'],
      statutoryUan: 'ई-श्रम युएएन पडताळणीकृत',
      statutoryEsic: '₹५,००,००० ईएसआयसी विमा सक्रिय',
      cooperativeSociety: 'अखिल भारतीय सेवा ग्रीन गिल्ड को-ऑपरेटिव्ह',
      reviews: [
        {
          author: 'सुनील माथूर',
          comment: 'गच्चीवरील बागेची अप्रतिम देखभाल केली आणि सर्व सुकलेली झाडे पुन्हा टवटवीत केली.',
          tradeWorked: 'सेंद्रिय बागकाम व छाटणी',
        },
      ],
      portfolio: [
        {
          title: 'सेंद्रिय टेरेस किचन गार्डन',
          description: 'ठिबक सिंचनासह सेंद्रिय भाज्यांची सुंदर बाग तयार केली.',
          tag: 'बागकाम व लँडस्केपिंग',
        },
      ],
    },
  },
};

// ============================================================================
// LOCALIZED COMBO EXPERTS
// ============================================================================
export const COMBO_LOCALIZATIONS: Record<
  string,
  Record<
    LanguageCode,
    {
      comboTitle: string;
      comboTrades: string[];
      popularCombos: string[];
      tagline: string;
      singleVisit: string;
    }
  >
> = {
  'exp-1': {
    en: {
      comboTitle: 'Electrician + Plumber Dual Fix',
      comboTrades: ['Electrician', 'Plumber'],
      popularCombos: [
        'Geyser switch replacement + faucet valve leak',
        'Kitchen RO water purifier power socket + drainage trap',
        'Submersible water pump starter rewiring + pressure pipe fix',
      ],
      tagline: 'Dual certified technician solving electrical faults and water pipe issues in 1 seamless visit.',
      singleVisit: 'Single Visit',
    },
    hi: {
      comboTitle: 'इलेक्ट्रीशियन + प्लंबर दोहरा समाधान',
      comboTrades: ['इलेक्ट्रीशियन', 'प्लंबर'],
      popularCombos: [
        'गीजर स्विच रिप्लेसमेंट + नल का रिसाव ठीक करना',
        'किचन आरओ वाटर प्यूरीफायर सॉकेट + ड्रेनेज पाइप ठीक करना',
        'सबमर्सिबल पंप स्टार्टर वायरिंग + प्रेशर पाइप फिटिंग',
      ],
      tagline: 'बिजली और पानी के काम एक ही बार में, बिना दो अलग कारीगरों को बुलाए।',
      singleVisit: 'एकल विजिट',
    },
    ta: {
      comboTitle: 'மின்சார + குழாய் இரட்டை பழுதுபார்ப்பு',
      comboTrades: ['எலக்ட்ரீஷியன்', 'பிளம்பர்'],
      popularCombos: [
        'கீசர் சுவிட்ச் மாற்றுதல் + குழாய் கசிவு',
        'ஆர்.ஓ வாட்டர் பில்டர் பவர் சாக்கெட் + வடிகால் குழாய்',
        'மோட்டார் பம்ப் வயரிங் + நீர் குழாய் பொருத்துதல்',
      ],
      tagline: 'ஒரே வருகையில் மின்சாரம் மற்றும் பிளம்பிங் இரண்டையும் சரிசெய்கிறார்.',
      singleVisit: 'ஒற்றை வருகை',
    },
    mr: {
      comboTitle: 'इलेक्ट्रिशियन + प्लंबर दुहेरी सेवा',
      comboTrades: ['इलेक्ट्रिशियन', 'प्लंबर'],
      popularCombos: [
        'गिझर स्विच बदलणे + नळाची गळती दुरुस्ती',
        'वॉटर प्युरिफायर सॉकेट + ड्रेनेज पाईप दुरुस्ती',
        'सबमर्सिबल स्टार्टर वायरिंग + वॉटर प्रेशर पाईप',
      ],
      tagline: 'एकाच भेटीत वीज आणि नळ दुरुस्तीची सर्व कामे पूर्ण.',
      singleVisit: 'एकच भेट',
    },
  },
  'exp-2': {
    en: {
      comboTitle: 'Carpenter + Masonry Architectural Combo',
      comboTrades: ['Structural Carpenter', 'Masonry Specialist'],
      popularCombos: [
        'Door frame masonry grouting + precision hinge alignment',
        'Granite countertop cutout + modular under-counter drawer run',
        'Wall anchored TV console mounting + concealed channel plaster',
      ],
      tagline: 'Woodcraft repairs bundled with structural masonry anchoring and cabinet fitting.',
      singleVisit: 'Single Visit',
    },
    hi: {
      comboTitle: 'बढ़ई + राजमिस्त्री वास्तुशिल्प कॉम्बो',
      comboTrades: ['बढ़ई', 'राजमिस्त्री'],
      popularCombos: [
        'दरवाजे की चौखट सीमेंट ग्राउटिंग + कब्जे अलाइनमेंट',
        'ग्रेनाइट स्लैब कटिंग + मॉड्यूलर दराज फिटिंग',
        'टीवी कंसोल वॉल माउंटिंग + दीवार प्लास्टर फिनिश',
      ],
      tagline: 'लकड़ी की कलाकारी और मजबूत चिनाई का एक साथ सटीक समाधान।',
      singleVisit: 'एकल विजिट',
    },
    ta: {
      comboTitle: 'தச்சு + கொத்தனார் இரட்டை சேவை',
      comboTrades: ['தச்சர்', 'கொத்தனார்'],
      popularCombos: [
        'கதவு நிலை சிமெண்ட் பொருத்துதல் + கீல் சீரமைப்பு',
        'சமையலறை கிரானைட் வெட்டுதல் + அலமாரி பொருத்துதல்',
        'சுவர் டிவி ஸ்டாண்ட் பொருத்துதல் + பூச்சு வேலை',
      ],
      tagline: 'மரவேலை மற்றும் கட்டிட பூச்சு வேலை இரண்டும் ஒரே வருகையில்.',
      singleVisit: 'ஒற்றை வருகை',
    },
    mr: {
      comboTitle: 'सुतार + गवंडी वास्तुकला कॉम्बो',
      comboTrades: ['सुतार', 'गवंडी'],
      popularCombos: [
        'दाराची चौकट सिमेंट भरणे + बिजागऱ्या सेटिंग',
        'किचन ग्रॅनाइट कटिंग + मॉड्यूलर ड्रावर फिटिंग',
        'टीव्ही युनिट वॉल माउंटिंग + प्लास्टर फिनिश',
      ],
      tagline: 'सुतारकाम आणि सिमेंट काम एकाच पॅकेजमध्ये.',
      singleVisit: 'एकच भेट',
    },
  },
  'exp-3': {
    en: {
      comboTitle: 'Climate & High Voltage Electrical Duo',
      comboTrades: ['HVAC & AC Specialist', 'Heavy Voltage Electrician'],
      popularCombos: [
        'Split AC relocation + dedicated MCB sub-circuit wiring',
        'Compressor capacitor replacement + 32A isolator switch repair',
        'Drain pipe de-clogging + high pressure coil chemical wash',
      ],
      tagline: 'Complete AC cooling diagnosis paired with high-load power wiring stability.',
      singleVisit: 'Single Visit',
    },
    hi: {
      comboTitle: 'एसी तकनीशियन + हेवी वोल्टेज इलेक्ट्रीशियन',
      comboTrades: ['एसी तकनीशियन', 'इलेक्ट्रीशियन'],
      popularCombos: [
        'स्प्लिट एसी री-लोकेशन + समर्पित एमसीबी वायरिंग',
        'कंप्रेसर कैपेसिटर बदलाव + 32A आइसोलेटर स्विच रिपेयर',
        'ड्रेन पाइप डी-क्लॉगिंग + कॉइल केमिकल वॉश',
      ],
      tagline: 'एसी कूलिंग और हाई वोल्टेज वायरिंग का संपूर्ण समाधान एक साथ।',
      singleVisit: 'एकल विजिट',
    },
    ta: {
      comboTitle: 'ஏசி பழுதுபார்ப்பு + மின்சார நிபுணர்',
      comboTrades: ['ஏசி மெக்கானிக்', 'எலக்ட்ரீஷியன்'],
      popularCombos: [
        'ஸ்பிளிட் ஏசி இடமாற்றம் + புதிய எம்சிபி வயரிங்',
        'கம்ப்ரசர் கெபாசிட்டர் மாற்றுதல் + சுவிட்ச் சரிசெய்தல்',
        'வடிகால் குழாய் சுத்தம் + ஏசி காயில் வாஷ்',
      ],
      tagline: 'ஏசி குளிரூட்டல் மற்றும் மின்சார பாதுகாப்பு ஒரே வருகையில்.',
      singleVisit: 'ஒற்றை வருகை',
    },
    mr: {
      comboTitle: 'एसी तंत्रज्ञ + हाय व्होल्टेज इलेक्ट्रिशियन',
      comboTrades: ['एसी तंत्रज्ञ', 'इलेक्ट्रिशियन'],
      popularCombos: [
        'स्प्लिट एसी स्थलांतर + स्वतंत्र एमसीबी वायरिंग',
        'कंप्रेसर कपॅसिटर बदलणे + स्विच दुरुस्ती',
        'ड्रेनेज पाईप सफाई + हाय प्रेशर केमिकल वॉश',
      ],
      tagline: 'एसी दुरुस्ती आणि वीज पुरवठा एकाच वेळी योग्यरीत्या पूर्ण.',
      singleVisit: 'एकच भेट',
    },
  },
  'exp-4': {
    en: {
      comboTitle: 'Eco-Garden Care & Pet Companion Duo',
      comboTrades: ['Landscape Gardener', 'Pet Walker & Companion'],
      popularCombos: [
        'Backyard lawn trimming + 45-min neighborhood dog walk',
        'Balcony planter soil re-potting + puppy play & brushing session',
        'Rose bed organic compost dressing + evening dog park stroll',
      ],
      tagline: 'Lawn grooming & organic plant nourishment bundled with attentive dog walking and pet care.',
      singleVisit: 'Single Visit',
    },
    hi: {
      comboTitle: 'पर्यावरण बागवानी एवं पालतू पशु देखभाल',
      comboTrades: ['माली / बागवानी विशेषज्ञ', 'पेट वॉकर एवं देखभाल'],
      popularCombos: [
        'लॉन कटिंग व हेज छंटाई + 45 मिनट डॉग वॉक',
        'गमलों में जैविक खाद व मिट्टी बदलना + पिल्ले की देखभाल व ब्रशिंग',
        'गुलाब क्यारी में खाद डालना + शाम का पार्क वॉक',
      ],
      tagline: 'बगीचे की हरी-भरी देखभाल और आपके प्यारे पालतू जानवर की सुरक्षित सैर एक ही साथ।',
      singleVisit: 'एकल विजिट',
    },
    ta: {
      comboTitle: 'தோட்ட பராமரிப்பு & செல்லப்பிராணி வாக்கிங் காம்போ',
      comboTrades: ['தோட்டக்காரர்', 'செல்லப்பிராணி பராமரிப்பாளர்'],
      popularCombos: [
        'புல்வெளி வெட்டுதல் + 45 நிமிட நாய் வாக்கிங்',
        'செடி தொட்டி மண் மாற்றுதல் + நாய்க்குட்டி விளையாட்டு',
        'இயற்கை உரமிடுதல் + மாலை பூங்கா நடைப்பயிற்சி',
      ],
      tagline: 'பசுமைத் தோட்டம் மற்றும் அன்பான செல்லப்பிராணி பராமரிப்பு ஒரே நேரத்தில்.',
      singleVisit: 'ஒற்றை வருகை',
    },
    mr: {
      comboTitle: 'बागकाम आणि पाळीव प्राणी काळजी कॉम्बो',
      comboTrades: ['माळी', 'पेट वॉकर आणि केअरटेकर'],
      popularCombos: [
        'लॉन कटिंग + 45 मिनिटे श्वानाची फेरफटका',
        'कुंड्यांमध्ये सेंद्रिय खत भरणे + पाळीव प्राण्याची स्वच्छता',
        'झाडांची छाटणी + संध्याकाळची सायकल/पार्क वॉक',
      ],
      tagline: 'हिरवेगार अंगण आणि लाडक्या पाळीव प्राण्याची जबाबदार काळजी.',
      singleVisit: 'एकच भेट',
    },
  },
  'exp-5': {
    en: {
      comboTitle: 'Infant Care & Healthy Family Kitchen Duo',
      comboTrades: ['Certified Child Nanny', 'Nutritious Home Cook'],
      popularCombos: [
        'Toddler morning routine & bath + 3-course family lunch thali',
        'School return snack & story session + wholesome dinner rotis',
        'Baby bottle sterilization & playtime + nutritious moong khichdi prep',
      ],
      tagline: 'Maternal infant engagement and nursery care coordinated with clean, nutritious family home cooking.',
      singleVisit: 'Single Visit',
    },
    hi: {
      comboTitle: 'शिशु देखभाल एवं पौष्टिक पारिवारिक रसोई जोड़ी',
      comboTrades: ['शिशु देखभाल नैनी', 'घरेलू रसोइया'],
      popularCombos: [
        'बच्चे की सुबह की देखभाल व स्नान + ताजा 3-कोर्स दोपहर का भोजन',
        'स्कूल वापसी पर नाश्ता व कहानियां + गर्म रोटियां व दाल-सब्जी',
        'दूध की बोतल स्टरलाइजेशन + पौष्टिक मूंग दाल खिचड़ी',
      ],
      tagline: 'नन्हें बच्चों की ममतामयी देखभाल के साथ घर का शुद्ध, स्वादिष्ट व सेहतमंद खाना।',
      singleVisit: 'एकल विजिट',
    },
    ta: {
      comboTitle: 'குழந்தை பராமரிப்பு & சமையல் இரட்டை சேவை',
      comboTrades: ['குழந்தை வளர்ப்பாளர் (நேனி)', 'குடும்ப சமையலர்'],
      popularCombos: [
        'குழந்தை காலை குளியல் + மதிய உணவு தயார் செய்தல்',
        'மாலை சிற்றுண்டி & கவனிப்பு + இரவு உணவு',
        'பால் பாட்டில் கிருமி நீக்கம் + சத்தான கிச்சடி தயாரிப்பு',
      ],
      tagline: 'குழந்தையின் பாசமான கவனிப்புடன் குடும்பத்திற்கு சத்தான வீட்டுச் சாப்பாடு.',
      singleVisit: 'ஒற்றை வருகை',
    },
    mr: {
      comboTitle: 'बाल संगोपन आणि घरगुती स्वयंपाक कॉम्बो',
      comboTrades: ['केअरटेकर / नॅनी', 'घरगुती आचारी'],
      popularCombos: [
        'लहान मुलांचे आंघोळ व खेळ + दुपारचे ताजे जेवण',
        'शाळेतून आल्यावर नाश्ता + रात्रीच्या गरमागरम पोळ्या व भाजी',
        'बाटली निर्जंतुकीकरण + पौष्टिक मऊ खिचडी',
      ],
      tagline: 'मुलांची सुरक्षित काळजी आणि संपूर्ण कुटुंबासाठी पौष्टिक घरगुती जेवण.',
      singleVisit: 'एकच भेट',
    },
  },
  'exp-6': {
    en: {
      comboTitle: 'Complete Cooking & Kitchen Deep Scrub Combo',
      comboTrades: ['Traditional Home Chef', 'Deep Kitchen Cleaner'],
      popularCombos: [
        'Weekend guest feast (3 curries + breads) + post-meal deep kitchen scrub',
        'Daily 2-meal batch cooking + stainless steel sink & chimney wash',
        'Festival sweets & puri preparation + floor degreasing & dish washing',
      ],
      tagline: 'Enjoy authentic home-cooked meals without worrying about oily chimneys, counters, or greasy utensils.',
      singleVisit: 'Single Visit',
    },
    hi: {
      comboTitle: 'स्वादिष्ट रसोई एवं डीप किचन क्लीनिंग कॉम्बो',
      comboTrades: ['पारंपरिक शेफ / रसोइया', 'किचन डीप क्लीनर'],
      popularCombos: [
        'सप्ताहांत दावत भोजन (3 सब्जियां + रोटियां) + बाद में पूरी रसोई की सफाई',
        'दैनिक भोजन पकाना + चिमनी, स्लैब व बर्तनों की गहरी सफाई',
        'त्योहारी व्यंजन व मिठाइयां + रसोई के फर्श व सिंक की डीग्रीसिंग',
      ],
      tagline: 'स्वादिष्ट घर का भोजन भी तैयार और रसोई के बर्तन व चिमनी भी चमचमाते हुए साफ।',
      singleVisit: 'एकल विजिट',
    },
    ta: {
      comboTitle: 'சுவையான சமையல் & சமையலறை ஆழ்ந்த சுத்தம்',
      comboTrades: ['பாரம்பரிய சமையலர்', 'சமையலறை கிளீனர்'],
      popularCombos: [
        'விருந்து உணவு சமைத்தல் + சமையலறை முழுமையான சுத்தம்',
        'தினசரி உணவு தயாரிப்பு + சிம்னி & பாத்திரங்கள் கழுவுதல்',
        'பண்டிகை பலகாரங்கள் + தரை & மடுவு அழுக்கு நீக்குதல்',
      ],
      tagline: 'சுவையான வீட்டுச் சமையலுடன் சமையலறை பளபளக்கும் தூய்மை.',
      singleVisit: 'ஒற்றை வருகை',
    },
    mr: {
      comboTitle: 'स्वादपूर्ण स्वयंपाक आणि किचन डीप क्लिनिंग',
      comboTrades: ['महाराज / आचारी', 'किचन स्वच्छता सहायक'],
      popularCombos: [
        'पाहुण्यांसाठी खास जेवण + नंतर किचनची संपूर्ण स्वच्छता',
        'दोन वेळेचा स्वयंपाक + चिमणी व ओट्याची चकाचक सफाई',
        'सणासुदीचे गोडधोड + भांडी घासणे व फरशी पुसणे',
      ],
      tagline: 'उत्तम चवीचे जेवण आणि स्वयंपाकघराची संपूर्ण स्वच्छता एकाच सेवेत.',
      singleVisit: 'एकच भेट',
    },
  },
  'exp-7': {
    en: {
      comboTitle: 'Holistic Senior Care & Bedside Vitals Assistant',
      comboTrades: ['Senior Geriatric Caregiver', 'Bedside Nursing Aide'],
      popularCombos: [
        'Morning vitals & insulin admin + wheelchair stroll in society park',
        'Post-hospital bed mobility & sponge bath + soft porridge feeding',
        'Physiotherapy gentle exercise assist + evening medicine schedule',
      ],
      tagline: 'Qualified bedside vitals monitoring combined with gentle mobility support and compassionate companionship.',
      singleVisit: 'Single Visit',
    },
    hi: {
      comboTitle: 'वरिष्ठ नागरिक देखभाल एवं नर्सिंग परिचारक गिल्ड',
      comboTrades: ['बुजुर्ग देखभाल सहायक', 'नर्सिंग अटेंडेंट'],
      popularCombos: [
        'सुबह बीपी/शुगर जांच व दवा + व्हीलचेयर पर सोसाइटी पार्क सैर',
        'अस्पताल बाद स्पंज बाथ व आराम + हल्का सुपाच्य भोजन कराना',
        'हल्का फिजियोथेरेपी व्यायाम + शाम की दवा का समयबद्ध पालन',
      ],
      tagline: 'वरिष्ठ परिजनों के लिए गरिमामय, सुरक्षित और प्रशिक्षित मेडिकल देखभाल।',
      singleVisit: 'एकल विजिट',
    },
    ta: {
      comboTitle: 'முதியோர் பராமரிப்பு & நர்சிங் உதவியாளர் காம்போ',
      comboTrades: ['முதியோர் உதவியாளர்', 'நர்சிங் உதவியாளர்'],
      popularCombos: [
        'காலை இரத்த அழுத்தம் & சர்க்கரை அளவு சரிபார்த்தல் + பூங்கா நடை',
        'மருத்துவமனைக்கு பிந்தைய பராமரிப்பு + மென்மையான உணவு ஊட்டுதல்',
        'உடற்பயிற்சி உதவி + மாலை மருந்து அட்டவணை',
      ],
      tagline: 'முதியோர்களுக்கு அன்பான துணையும் அவசியமான மருத்துவ உதவிகளும்.',
      singleVisit: 'ஒற்றை வருகை',
    },
    mr: {
      comboTitle: 'ज्येष्ठ नागरिक काळजी व नर्सिंग सहाय्यक कॉम्बो',
      comboTrades: ['ज्येष्ठ नागरिक केअरटेकर', 'नर्सिंग अटेंडंट'],
      popularCombos: [
        'सकाळचे बीपी/शुगर तपासणे + बागेत व्हीलचेअरने फिरवणे',
        'स्पंज बाथ व बेड केअर + हलका दलिया भरवणे',
        'फिजिओथेरपी हलके व्यायाम + वेळेवर औषधे देणे',
      ],
      tagline: 'ज्येष्ठांसाठी सन्मानपूर्वक आणि प्रशिक्षित वैद्यकीय सेवा.',
      singleVisit: 'एकच भेट',
    },
  },
  'exp-8': {
    en: {
      comboTitle: 'Damp Proofing & Fresh Wall Paint Duo',
      comboTrades: ['House Wall Painter', 'Waterproofing Mason'],
      popularCombos: [
        'Balcony damp wall chemical seal + 2-coat anti-fungal interior paint',
        'Ceiling leak crack stitching + waterproof putty & primer finish',
        'Exterior parapet wall grouting + weather-proof elastomeric coating',
      ],
      tagline: 'Root-cause water seepage diagnosis paired with long-lasting acrylic putty and paint finishes.',
      singleVisit: 'Single Visit',
    },
    hi: {
      comboTitle: 'सीलन रोधी उपचार एवं दीवार पेंटिंग कॉम्बो',
      comboTrades: ['दीवार पेंटर', 'वॉटरप्रूफिंग मिस्त्री'],
      popularCombos: [
        'बालकनी दीवार केमिकल सीलिंग + 2-कोट एंटी-फंगल पेंट',
        'छत रिसाव दरार सिलाई + वॉटरप्रूफ पुट्टी फिनिश',
        'छत की मुंडेर ग्राउटिंग + मौसम-रोधी बाहरी कोटिंग',
      ],
      tagline: 'दीवारों की सीलन का जड़ से इलाज और शानदार खूबसूरत पेंटिंग एक साथ।',
      singleVisit: 'एकल विजिट',
    },
    ta: {
      comboTitle: 'நீர் கசிவு தடுப்பு & சுவர் பெயிண்டிங் காம்போ',
      comboTrades: ['சுவர் பெயிண்டர்', 'வாட்டர்ப்ரூஃபிங் கொத்தனார்'],
      popularCombos: [
        'பால்கனி சுவர் கெமிக்கல் பூச்சு + 2 அடுக்கு பெயிண்ட்',
        'கூரை கசிவு சரிசெய்தல் + வாட்டர்ப்ரூப் புட்டி பூச்சு',
        'வெளிச்சுவர் விரிசல் அடைத்தல் + வெதர் கோட்டிங்',
      ],
      tagline: 'கசிவு பிரச்சனையை தீர்த்து புதுமையான வண்ணப் பூச்சு.',
      singleVisit: 'ஒற்றை வருகை',
    },
    mr: {
      comboTitle: 'ओलावा प्रतिबंध व भिंत रंगकाम कॉम्बो',
      comboTrades: ['पेंटर', 'वॉटरप्रूफिंग गवंडी'],
      popularCombos: [
        'बाल्कनी ओल केमिकल कोटिंग + 2-कोट अँटी-फंगल रंग',
        'छताची गळती दुरुस्ती + वॉटरप्रूफ पुट्टी फिनिश',
        'बाहेरील भिंतीचे ग्राउटिंग + वेदरकोट रंगकाम',
      ],
      tagline: 'ओलाव्यावर कायमस्वरूपी उपाय आणि सुंदर रंगकाम एकत्र.',
      singleVisit: 'एकच भेट',
    },
  },
  'combo-1': {
    en: {
      comboTitle: 'Electrician + Plumber Dual Fix',
      comboTrades: ['Electrician', 'Plumber'],
      popularCombos: [
        'Geyser switch replacement + faucet valve leak',
        'Kitchen RO water purifier power socket + drainage trap',
        'Submersible water pump starter rewiring + pressure pipe fix',
      ],
      tagline: 'Dual certified technician solving electrical faults and water pipe issues in 1 seamless visit.',
      singleVisit: 'Single Visit',
    },
    hi: {
      comboTitle: 'इलेक्ट्रीशियन + प्लंबर दोहरा समाधान',
      comboTrades: ['इलेक्ट्रीशियन', 'प्लंबर'],
      popularCombos: [
        'गीजर स्विच रिप्लेसमेंट + नल का रिसाव ठीक करना',
        'किचन आरओ वाटर प्यूरीफायर सॉकेट + ड्रेनेज पाइप ठीक करना',
        'सबमर्सिबल पंप स्टार्टर वायरिंग + प्रेशर पाइप फिटिंग',
      ],
      tagline: 'बिजली और पानी के काम एक ही बार में, बिना दो अलग कारीगरों को बुलाए।',
      singleVisit: 'एकल विजिट',
    },
    ta: {
      comboTitle: 'மின்சார + குழாய் இரட்டை பழுதுபார்ப்பு',
      comboTrades: ['எலக்ட்ரீஷியன்', 'பிளம்பர்'],
      popularCombos: [
        'கீசர் சுவிட்ச் மாற்றுதல் + குழாய் கசிவு',
        'ஆர்.ஓ வாட்டர் பில்டர் பவர் சாக்கெட் + வடிகால் குழாய்',
        'மோட்டார் பம்ப் வயரிங் + நீர் குழாய் பொருத்துதல்',
      ],
      tagline: 'ஒரே வருகையில் மின்சாரம் மற்றும் பிளம்பிங் இரண்டையும் சரிசெய்கிறார்.',
      singleVisit: 'ஒற்றை வருகை',
    },
    mr: {
      comboTitle: 'इलेक्ट्रिशियन + प्लंबर दुहेरी सेवा',
      comboTrades: ['इलेक्ट्रिशियन', 'प्लंबर'],
      popularCombos: [
        'गिझर स्विच बदलणे + नळाची गळती दुरुस्ती',
        'वॉटर प्युरिफायर सॉकेट + ड्रेनेज पाईप दुरुस्ती',
        'सबमर्सिबल स्टार्टर वायरिंग + वॉटर प्रेशर पाईप',
      ],
      tagline: 'एकाच भेटीत वीज आणि नळ दुरुस्तीची सर्व कामे पूर्ण.',
      singleVisit: 'एकच भेट',
    },
  },
  'combo-2': {
    en: {
      comboTitle: 'Carpenter + Painter Finish Master',
      comboTrades: ['Carpenter', 'Painter'],
      popularCombos: [
        'Door hinge realignment + touch-up polyurethane polish',
        'Modular kitchen cabinet fixing + moisture barrier primer',
        'Curtain rod installation + wall patch putty finish',
      ],
      tagline: 'Woodwork repairs bundled with immaculate color touch-ups and sealing.',
      singleVisit: 'Single Visit',
    },
    hi: {
      comboTitle: 'बढ़ई + पेंटर फिनिश मास्टर',
      comboTrades: ['बढ़ई', 'पेंटर'],
      popularCombos: [
        'दरवाजे के कब्जे अलाइनमेंट + लकड़ी की पॉलिश',
        'मॉड्यूलर कैबिनेट फिटिंग + सीलन रोधी प्राइमर पुट्टी',
        'पर्दे की रॉड फिटिंग + दीवार के छेद पर पुट्टी फिनिश',
      ],
      tagline: 'लकड़ी की मरम्मत के साथ तुरंत टच-अप और पुट्टी फिनिशिंग।',
      singleVisit: 'एकल विजिट',
    },
    ta: {
      comboTitle: 'தச்சு + பெயிண்டர் இரட்டை சேவை',
      comboTrades: ['தச்சர்', 'பெயிண்டர்'],
      popularCombos: [
        'கதவு பழுது + மர பாலிஷ் செய்தல்',
        'சமையலறை அலமாரி சீரமைப்பு + சுவர் பிரைமர்',
        'திரைச்சீலை ராடு பொருத்துதல் + சுவர் புட்டி பூச்சு',
      ],
      tagline: 'மர வேலைகளுடன் வண்ண மெருகூட்டல் ஒரே நேரத்தில்.',
      singleVisit: 'ஒற்றை வருகை',
    },
    mr: {
      comboTitle: 'सुतार + पेंटर कॉम्बो मास्टर',
      comboTrades: ['सुतार', 'पेंटर'],
      popularCombos: [
        'दाराच्या बिजागऱ्या दुरुस्ती + लाकडी पॉलिश टच-अप',
        'किचन कॅबिनेट फिटिंग + वॉटरप्रूफ पुट्टी कोटिंग',
        'पडद्याचे रॉड बसवणे + भिंतीच्या भेगा पुट्टीने भरणे',
      ],
      tagline: 'सुतारकाम आणि रंगकाम एकाच वेळी अचूक पूर्ण.',
      singleVisit: 'एकच भेट',
    },
  },
  'combo-3': {
    en: {
      comboTitle: 'Mason + Waterproofing Diagnostic',
      comboTrades: ['Mason', 'Waterproofer'],
      popularCombos: [
        'Bathroom wall crack stitching + chemical elastomeric coat',
        'Terrace parapet damp proofing + tile re-grouting',
        'Balcony drainage slope reconstruction + polymer seal',
      ],
      tagline: 'Complete leak tracing combined with structural masonry plastering.',
      singleVisit: 'Single Visit',
    },
    hi: {
      comboTitle: 'राजमिस्त्री + वॉटरप्रूफिंग निदान',
      comboTrades: ['राजमिस्त्री', 'वॉटरप्रूफिंग'],
      popularCombos: [
        'बाथरूम दीवार दरार मरम्मत + केमिकल कोटिंग',
        'छत की सीलन रोकथाम + टाइल ग्राउटिंग',
        'बालकनी ढलान निर्माण + पॉलीमर सील',
      ],
      tagline: 'दीवार चिनाई और सीलन का पक्का तकनीकी समाधान।',
      singleVisit: 'एकल विजिट',
    },
    ta: {
      comboTitle: 'கொத்தனார் + வாட்டர்ப்ரூஃபிங் காம்போ',
      comboTrades: ['கொத்தனார்', 'வாட்டர்ப்ரூஃபிங்'],
      popularCombos: [
        'சுவர் விரிசல் பூச்சு + கெமிக்கல் பூச்சு',
        'மாடி கசிவு தடுப்பு + டைல்ஸ் கிரவுட்டிங்',
        'பால்கனி நீர் வடிகால் சரிசெய்தல் + சீலிங்',
      ],
      tagline: 'கட்டுமான விரிசல் மற்றும் நீர் கசிவு இரண்டிற்கும் முற்றுப்புள்ளி.',
      singleVisit: 'ஒற்றை வருகை',
    },
    mr: {
      comboTitle: 'गवंडी + वॉटरप्रूफिंग कॉम्बो',
      comboTrades: ['गवंडी', 'वॉटरप्रूफिंग'],
      popularCombos: [
        'बाथरूम भिंतीच्या भेगा भरणे + केमिकल कोटिंग',
        'टेरेस गळती निवारण + टाईल्स ग्राउटिंग',
        'बाल्कनी ड्रेनेज दुरुस्ती + पॉलीमर सील',
      ],
      tagline: 'भिंतीचे बांधकाम आणि वॉटरप्रूफिंग एकाच पॅकेजमध्ये.',
      singleVisit: 'एकच भेट',
    },
  },
};

// ============================================================================
// LOCALIZED TENDERS
// ============================================================================
export const TENDER_LOCALIZATIONS: Record<
  string,
  Record<
    LanguageCode,
    {
      title: string;
      description: string;
      tradeTags: string[];
      requirements: string[];
    }
  >
> = {
  'tender-1': {
    en: {
      title: 'Housing Society Annual Diwali Electrical & Light Overhaul (180 Flats)',
      description: 'Comprehensive annual inspection of main distribution boards, terrace floodlights, pump panels, and phase load balancing across 6 residential blocks.',
      tradeTags: ['Industrial Electrician', 'Panel Wireman', 'Safety Auditor'],
      requirements: ['Certified 1000V Insulated Gear', 'Valid e-Shram Registration', 'Daily Log Audit Submission'],
    },
    hi: {
      title: 'हाउसिंग सोसायटी वार्षिक दिवाली विद्युत व प्रकाश व्यवस्था (180 फ्लैट)',
      description: '6 आवासीय ब्लॉकों में मुख्य डिस्ट्रीब्यूशन पैनल, फ्लडलाइट्स, पंप पैनल और 3-फेज लोड संतुलन की संपूर्ण जांच व नवीनीकरण।',
      tradeTags: ['इंडस्ट्रियल इलेक्ट्रीशियन', 'पैनल वायरमैन', 'सुरक्षा ऑडिटर'],
      requirements: ['1000V इंसुलेटेड उपकरण आवश्यक', 'मान्य ई-श्रम पंजीकरण', 'दैनिक कार्य ऑडिट सबमिशन'],
    },
    ta: {
      title: 'குடியிருப்பு சங்க தீபாவளி மின்சார பராமரிப்பு திட்டம் (180 குடியிருப்புகள்)',
      description: '6 கட்டிடங்களில் உள்ள பிரதான மின் பலகைகள், விளக்குகள் மற்றும் பம்ப் பேனல்களின் வருடாந்திர ஆய்வு.',
      tradeTags: ['தொழில்துறை எலக்ட்ரீஷியன்', 'பலகை வயர்மேன்', 'பாதுகாப்பு தணிக்கையாளர்'],
      requirements: ['பாதுகாப்பான 1000V உபகரணங்கள்', 'செல்லுபடியாகும் இ-ஷ்ரம் பதிவு', 'தினசரி பணி அறிக்கை'],
    },
    mr: {
      title: 'गृहनिर्माण संस्था वार्षिक दिवाळी विद्युत तपासणी व दुरुस्ती (१८० फ्लॅट्स)',
      description: '६ इमारतींमधील मुख्य विद्युत पॅनेल्स, फ्लडलाईट्स, पंप पॅनेल्स आणि ३-फेज लोड बॅलन्सिंगची संपूर्ण तपासणी.',
      tradeTags: ['औद्योगिक इलेक्ट्रिशियन', 'पॅनेल वायरमन', 'सुरक्षा ऑडिटर'],
      requirements: ['१००० व्होल्ट इन्सुलेटेड साधने', 'वैध ई-श्रम नोंदणी', 'दररोजचे काम ऑडिट'],
    },
  },
  'tender-2': {
    en: {
      title: 'Commercial Kitchen Multi-Appliance Exhaust & Gas Duct Servicing',
      description: 'Quarterly deep degreasing, commercial burner flame calibration, and fire-safe grease duct hydro-scrubbing for banquet facility.',
      tradeTags: ['Commercial Plumber', 'Gas Fitter', 'Industrial Cleaner'],
      requirements: ['Fire Safety Protocol Compliant', 'Zero Chemical Runoff Disposal', 'GST Society Invoice'],
    },
    hi: {
      title: 'कमर्शियल किचन एग्जॉस्ट और गैस डक्ट संपूर्ण सर्विसिंग',
      description: 'बैंक्वेट हॉल रसोई के लिए तिमाही डीप डिग्रेसिंग, गैस बर्नर फ्लेम कैलिब्रेशन और फायर-सेफ डक्ट हाइड्रो-स्क्रबिंग।',
      tradeTags: ['कमर्शियल प्लंबर', 'गैस फिटर', 'इंडस्ट्रियल क्लीनर'],
      requirements: ['अग्निशमन सुरक्षा मानकों का पालन', 'पर्यावरण अनुकूल सफाई', 'जीएसटी सोसायटी बिल'],
    },
    ta: {
      title: 'வணிக சமையலறை புகைபோக்கி & எரிவாயு பழுதுபார்ப்பு பணி',
      description: 'விருந்து மண்டப சமையலறை புகைபோக்கிகள் மற்றும் பர்னர்களின் காலாண்டு ஆழ்ந்த தூய்மை பணி.',
      tradeTags: ['வணிக பிளம்பர்', 'எரிவாயு குழாய் பொருத்துபவர்', 'தொழில்துறை துப்புரவாளர்'],
      requirements: ['தீ பாதுகாப்பு நெறிமுறைகள்', 'சுற்றுச்சூழல் பாதுகாப்பு', 'ஜிஎஸ்டி ரசீது'],
    },
    mr: {
      title: 'हॉटेल किचन एक्झॉस्ट व गॅस पाईपलाईन संपूर्ण सर्व्हिसिंग',
      description: 'बँक्वेट किचनसाठी त्रैमासिक डीप क्लिनिंग, गॅस बर्नर फ्लेम ट्यूनिंग आणि ऑइल डक्ट हायड्रो-स्क्रबिंग.',
      tradeTags: ['व्यावसायिक प्लंबर', 'गॅस फिटर', 'औद्योगिक स्वच्छता कामगार'],
      requirements: ['अग्निशमन सुरक्षा नियम पालन', 'पर्यावरणपूरक पद्धत', 'जीएसटी अधिकृत बिल'],
    },
  },
  'tender-3': {
    en: {
      title: 'Basement Parking Retaining Wall Waterproofing & Crack Grouting (450m²)',
      description: 'High pressure chemical injection grouting to stop active monsoonal subsoil water intrusion through elevator pit and retaining walls.',
      tradeTags: ['Waterproofing Specialist', 'Concrete Mason', 'Grouting Operator'],
      requirements: ['Minimum 5-Year Leakage Warranty', 'ULCCS Standard Polyurethane Resins', 'Night Shift Execution'],
    },
    hi: {
      title: 'बेसमेंट पार्किंग रिटेनिंग वॉल वॉटरप्रूफिंग एवं क्रैक ग्राउटिंग (450 वर्गमीटर)',
      description: 'लिफ्ट पिट और बेसमेंट दीवारों में बारिश के रिसाव को रोकने के लिए हाई-प्रेशर केमिकल इंजेक्शन ग्राउटिंग।',
      tradeTags: ['वॉटरप्रूफिंग विशेषज्ञ', 'कंक्रीट राजमिस्त्री', 'ग्राउटिंग ऑपरेटर'],
      requirements: ['न्यूनतम 5 वर्ष की लीकेज वारंटी', 'मानकीकृत पॉलीयुरेथेन केमिकल', 'रात्रि कार्य की सुविधा'],
    },
    ta: {
      title: 'அடித்தள கார் பார்க்கிங் சுவர் நீர்க்கசிவு தடுப்பு பணி (450 ச.மீ)',
      description: 'மழைக்கால நீர் கசிவை நிறுத்த உயர் அழுத்த பாலியூரித்தேன் கெமிக்கல் ஊசி கிரவுட்டிங் முறை.',
      tradeTags: ['வாட்டர்ப்ரூஃபிங் நிபுணர்', 'கான்கிரீட் கொத்தனார்', 'கிரவுட்டிங் வல்லுநர்'],
      requirements: ['5 ஆண்டு கசிவு உத்தரவாதம்', 'அங்கீகரிக்கப்பட்ட கெமிக்கல் கலவை', 'இரவு நேர பணி'],
    },
    mr: {
      title: 'बेसमेंट पार्किंग रिटेनिंग वॉल वॉटरप्रूफिंग व ग्राउटिंग (४५० चौ.मी.)',
      description: 'पावसाळ्यात तळघरात येणारे पाणी रोखण्यासाठी हाय-प्रेशर केमिकल इंजेक्शन ग्राउटिंग तंत्रज्ञानाने दुरुस्ती.',
      tradeTags: ['वॉटरप्रूफिंग तज्ज्ञ', 'कंक्रीट गवंडी', 'ग्राउटिंग ऑपरेटर'],
      requirements: ['किमान ५ वर्षांची गॅरंटी', 'प्रमाणित पॉलीयुरेथेन केमिकल्स', 'रात्रीच्या वेळेत काम'],
    },
  },
};

// ============================================================================
// HELPER CONVERTER FUNCTIONS
// ============================================================================

export function getLocalizedCategory(cat: ServiceCategory, language: LanguageCode): ServiceCategory {
  const loc = CATEGORY_LOCALIZATIONS[cat.id]?.[language];
  if (!loc) return cat;

  return {
    ...cat,
    name: loc.name,
    tagline: loc.tagline,
    description: loc.description,
    popularTasks: loc.popularTasks,
    badge: loc.badge,
  };
}

export function getLocalizedCategories(categories: ServiceCategory[], language: LanguageCode): ServiceCategory[] {
  return categories.map((c) => getLocalizedCategory(c, language));
}

export function getLocalizedWorker(worker: WorkerProfile, language: LanguageCode): WorkerProfile {
  const loc = WORKER_LOCALIZATIONS[worker.id]?.[language];
  if (!loc) return worker;

  return {
    ...worker,
    name: loc.name,
    trade: loc.trade,
    bio: loc.bio,
    specialties: loc.specialties,
    cooperativeSociety: loc.cooperativeSociety,
    reviews: (worker.reviews || []).map((rev, idx) => {
      const revLoc = loc.reviews?.[idx];
      return revLoc
        ? {
            ...rev,
            author: revLoc.author,
            comment: revLoc.comment,
            tradeWorked: revLoc.tradeWorked,
          }
        : rev;
    }),
    portfolio: (worker.portfolio || []).map((p, idx) => {
      const pLoc = loc.portfolio?.[idx];
      return pLoc
        ? {
            ...p,
            title: pLoc.title,
            description: pLoc.description,
            tag: pLoc.tag,
          }
        : p;
    }),
  };
}

export function getLocalizedWorkers(workers: WorkerProfile[], language: LanguageCode): WorkerProfile[] {
  return workers.map((w) => getLocalizedWorker(w, language));
}

export function getLocalizedCombo(combo: ComboExpert, language: LanguageCode): ComboExpert {
  const loc = COMBO_LOCALIZATIONS[combo.id]?.[language];
  if (!loc) return combo;

  return {
    ...combo,
    comboTitle: loc.comboTitle,
    comboTrades: loc.comboTrades,
    popularCombos: loc.popularCombos,
    bio: loc.tagline,
  };
}

export function getLocalizedCombos(combos: ComboExpert[], language: LanguageCode): ComboExpert[] {
  return combos.map((c) => getLocalizedCombo(c, language));
}

export function getLocalizedTender(tender: TenderPost, language: LanguageCode): TenderPost {
  const loc = TENDER_LOCALIZATIONS[tender.id]?.[language];
  if (!loc) return tender;

  return {
    ...tender,
    title: loc.title,
    description: loc.description,
    tradeTags: loc.tradeTags,
    requirements: loc.requirements,
  };
}

export function getLocalizedTenders(tenders: TenderPost[], language: LanguageCode): TenderPost[] {
  return tenders.map((t) => getLocalizedTender(t, language));
}
