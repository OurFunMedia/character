const defaults = {
  headSize: '精緻小巧',
  faceShape: '闊圓臉',
  chin: '圓潤不尖',
  eyeShape: '偏圓杏眼',
  nose: '鼻樑細直',
  mouth: '櫻桃小嘴',
  eyebrows: '自然平直',
  hairStyle: '高馬尾',
  hairColor: '淺棕混色',
  height: '155',
  bodyShape: '苗條勻稱',
  bust: '34',
  waist: '24',
  hip: '32',
  cup: 'E',
  measureDetail: '有明顯體積感',
  clothing: '二件式藍邊白色泳裝，布料貼合身形，側邊細繩，赤腳',
  clothingTemplate: 'swimsuit',
  aspectRatio: '3:2',
  race: '東亞少女',
  skinColor: '暖白通透',
  charStyle: '真人角色',
  age: '20歲初'
};

const translations = {
  headSize: { 
    '精緻小巧': 'small petite face, refined head proportions',
    '標準比例': 'naturally proportioned head and body',
    '略大生動': 'expressive slightly larger face',
    '細長瘦臉': 'narrow slender face silhouette'
  },
  faceShape: { 
    '闊圓臉': 'soft round wide face',
    '鵝蛋臉': 'classic symmetric oval face',
    '瓜子臉': 'pointed V-shaped thin face',
    '心形臉': 'heart-shaped face, pointed chin',
    '稜角分明': 'square defined jawline and face'
  },
  chin: { 
    '圓潤不尖': 'soft rounded chin silhouette',
    '精緻V型': 'sharp delicate V-line chin',
    '略微後縮': 'recessed youthful chin profile',
    '結實有型': 'firm well-defined prominent chin',
    '柔和弧線': 'gracefully curved soft chin'
  },
  eyeShape: { 
    '偏圓杏眼': 'almond-shaped eyes',
    '丹鳳眼': 'slanted phoenix eyes',
    '圓眼': 'large round expressive eyes',
    '細長眼': 'slender narrow eyes',
    '下垂眼': 'droopy downturned eyes',
    '內雙': 'inner double eyelids',
    '外雙': 'distinct double eyelids'
  },
  nose: { 
    '鼻樑細直': 'straight slim nose bridge',
    '小巧圓潤': 'small rounded cute nose',
    '高挺秀氣': 'high elegant nose bridge',
    '鷹勾鼻': 'aquiline hooked nose',
    '蒜頭鼻': 'bulbous round-tipped nose',
    '寬鼻翼': 'wide nostrils',
    '尖鼻頭': 'pointed nose tip'
  },
  mouth: { 
    '櫻桃小嘴': 'delicate cherry lips',
    '豐滿嘴唇': 'full luscious lips',
    '薄嘴唇': 'thin refined lips',
    '嘴角上揚': 'naturally upturned mouth corners',
    '嘴角下垂': 'downturned mouth corners',
    '寬大嘴巴': 'wide expressive mouth',
    'M型唇': 'perfect M-shaped cupid\'s bow lips'
  },
  eyebrows: { 
    '自然平直': 'natural straight eyebrows',
    '柳葉眉': 'slender willow-leaf eyebrows',
    '劍眉': 'sharp arched sword eyebrows',
    '濃密眉': 'thick dense eyebrows',
    '稀疏眉': 'thin sparse eyebrows',
    '高挑眉': 'high arched eyebrows',
    '下垂眉': 'droopy sad eyebrows'
  },
  hairStyle: { 
    '長直髮': 'long straight flowing hair',
    '長捲髮': 'long wavy curly hair',
    '短髮': 'short bob hair',
    '中長髮': 'medium length hair',
    '公主切': 'hime cut hairstyle',
    '丸子頭': 'high hair bun',
    '雙馬尾': 'twin tails',
    '高馬尾': 'high ponytail',
    '低馬尾': 'low ponytail',
    '側邊馬尾': 'side ponytail',
    '雙辮子': 'twin braids',
    '單辮子': 'single braid'
  },
  hairColor: { 
    '自然深黑': 'natural deep black hair',
    '深棕色': 'elegant dark brown hair',
    '淺棕混色': 'mixed light and dark brown hair',
    '銀灰色': 'silver gray fashion hair',
    '金髮': 'shining blonde hair',
    '奶茶色': 'ash blonde milk tea hair color',
    '粉紫色': 'pastel pink purple hair',
    '酒紅色': 'burgundy red wine hair',
    '深藍色': 'mystical midnight blue hair',
    '碧綠色': 'vivid emerald green hair',
    '薰衣草色': 'soft dreamy lavender hair',
    '火橙色': 'energetic fire orange hair',
    '鉑金色': 'platinum white hair',
    '漸層染': 'gradient ombre dyed hair',
    '極光漸層': 'fantasy aurora gradient hair'
  },
  height: { '155': '155cm height' },
  bodyShape: { 
    '苗條勻稱': 'slim and well-proportioned',
    '嬌小纖瘦': 'petite and slender silhouette',
    '精實有線條': 'athletic and toned physique with defined lines',
    '豐滿有致': 'curvy and sensual hourglass figure',
    '圓潤豐腴': 'soft and plump aesthetic',
    '高挑名模': 'tall model-like proportions with long legs'
  },
  measurements: { '34E-24-32，胸部有明顯體積感': '34E-24-32 measurements, full bust' },
  clothing: { 
    '二件式藍邊白色泳裝，布料貼合身形，側邊細繩，赤腳': 'two-piece blue-trimmed white swimsuit, side-string bottom, barefoot',
    '緊身灰色瑜珈服，高腰設計，側邊排汗網格，展現腰臀比': 'tight grey yoga wear, high-waist, side mesh panels, emphasizing waist-to-hip ratio',
    '修身深藍西裝外套，開襟合身，內搭白色蕾絲襯衫，黑色窄裙': 'slim-fit navy blazer, open front, white lace shirt, black pencil skirt',
    '現代短版旗袍，淡粉色綢緞材質，精細刺繡花紋，側邊高開衩': 'modern short qipao cheongsam, light pink satin, intricate floral embroidery, side high slit',
    '皮革與金屬混合的輕型戰鬥護甲，黑色主體與金邊，具備機械感細節': 'light combat armor, leather and metal, black with gold trim, mechanical details',
    '經典水手服風格制服，深藍色短裙與白襯衫，配有紅色蝴蝶結，及膝長襪': 'classic sailor style school uniform, navy pleated skirt, white shirt with red bow tie, knee-high socks'
  },
  race: { 
    '東亞少女': 'East Asian girl',
    '高加索少女': 'Western Caucasian girl',
    '歐亞混血少女': 'Eurasian mixed girl',
    '東南亞少女': 'Southeast Asian girl',
    '南亞少女': 'South Asian girl',
    '拉丁少女': 'Hispanic Latino girl',
    '中東少女': 'Middle Eastern girl',
    '非裔少女': 'African Black girl'
  },
  age: {
    '16歲': '16-year-old',
    '18歲': '18-year-old',
    '20歲初': 'early 20s',
    '25歲左右': 'around 25 years old',
    '30歲左右': 'around 30 years old',
    '成熟': 'mature'
  },
  skinColor: { 
    '雪白通透': 'porcelain snow white transparent skin',
    '暖白通透': 'warm white, transparent glowing skin',
    '象牙色': 'delicate ivory skin tone',
    '小麥色': 'healthy tanned sun-kissed skin',
    '橄欖色': 'olive complexion skin',
    '古銅色': 'glistening bronze skin tone',
    '深褐色': 'deep ebony charcoal skin'
  },
  measureDetail: {
    '自然型態': 'natural shape',
    '有明顯體積感': 'naturally proportioned upper body where the bust has a perceptible sense of volume and weight, featuring full contours that respond organically to posture and gravity with a balanced drape that harmonizes with the overall physique'
  },
  charStyle: {
    '真人角色': 'Ultra-realistic raw photo, hyper-detailed skin texture, visible pores, subsurface scattering, natural look, shot on 85mm lens, f/1.8, cinematic lighting, 8k UHD, masterpiece, highly detailed',
    '動漫角色': 'high quality anime style, 2D art, professional illustration, clean lines, vibrant colors, masterpiece, 4k'
  }
};

// Helper to translate or use input literally
function translate(key, value) {
  if (translations[key] && translations[key][value]) {
    return translations[key][value];
  }
  return value; 
}

const inputs = document.querySelectorAll('input, textarea, select');
const promptZh = document.getElementById('promptZh');
const promptEn = document.getElementById('promptEn');
const resetBtn = document.getElementById('resetBtn');
const copyZhBtn = document.getElementById('copyZhBtn');
const copyEnBtn = document.getElementById('copyEnBtn');

// Language Toggle Implementation
function initLanguageToggle() {
  const langBtns = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('character_gen_lang') || 'both';
  
  const setLanguage = (lang) => {
    document.body.setAttribute('data-lang', lang);
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang-set') === lang);
    });
    localStorage.setItem('character_gen_lang', lang);

    // Update Options and Placeholders
    const translatableElements = document.querySelectorAll('[data-zh][data-en]');
    translatableElements.forEach(el => {
      const zh = el.getAttribute('data-zh');
      const en = el.getAttribute('data-en');

      if (el.tagName === 'OPTION') {
        if (lang === 'zh') el.innerText = zh;
        else if (lang === 'en') el.innerText = en;
        else el.innerText = `${zh} (${en})`;
      } else if (el.hasAttribute('placeholder')) {
        if (lang === 'zh') el.placeholder = zh;
        else if (lang === 'en') el.placeholder = en;
        else el.placeholder = `${zh} / ${en}`;
      }
    });
  };

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang-set');
      setLanguage(selectedLang);
    });
  });

  // Initial set
  setLanguage(savedLang);
}

// Field Synchronization & Logical Dependencies
function syncFields() {
  const cup = document.getElementById('cup').value;
  const race = document.getElementById('race').value;
  const measureDetail = document.getElementById('measureDetail');
  const skinColor = document.getElementById('skinColor');

  if (!measureDetail || !skinColor) return;

  // CUP vs Bust Details Logic
  const smallCups = ['A', 'B'];
  
  if (smallCups.includes(cup)) {
    // For A-B, only "Natural Shape" is logically consistent
    measureDetail.value = '自然型態';
    Array.from(measureDetail.options).forEach(opt => {
      if (opt.value !== '自然型態') {
        opt.disabled = true;
        opt.hidden = true;
      } else {
        opt.disabled = false;
        opt.hidden = false;
      }
    });
  } else {
    // For C-H+, prioritize volume-related details
    // If current value is "Natural Shape" (the fallback for small), change it to "Visible Volume"
    if (measureDetail.value === '自然型態') measureDetail.value = '有明顯體積感';
    
    Array.from(measureDetail.options).forEach(opt => {
      // For C-H+, only "Visible Volume" is available
      if (opt.value === '有明顯體積感') {
        opt.disabled = false;
        opt.hidden = false;
      } else {
        opt.disabled = true;
        opt.hidden = true;
      }
    });
  }

  // Race vs Skin Color Logic
  const raceSkinMapping = {
    '東亞少女': { exclude: ['深褐色'], fallback: '暖白通透' },
    '高加索少女': { exclude: ['深褐色'], fallback: '雪白通透' },
    '歐亞混血少女': { exclude: ['深褐色'], fallback: '暖白通透' },
    '東南亞少女': { exclude: ['深褐色'], fallback: '小麥色' },
    '南亞少女': { keep: ['象牙色', '小麥色', '橄欖色', '古銅色'], fallback: '小麥色' },
    '拉丁少女': { keep: ['象牙色', '小麥色', '橄欖色', '古銅色'], fallback: '小麥色' },
    '中東少女': { keep: ['象牙色', '小麥色', '橄欖色', '古銅色'], fallback: '小麥色' },
    '非裔少女': { keep: ['小麥色', '橄欖色', '古銅色', '深褐色'], fallback: '古銅色' }
  };

  const mapping = raceSkinMapping[race];
  if (mapping) {
    Array.from(skinColor.options).forEach(opt => {
      let isAllowed = true;
      if (mapping.exclude && mapping.exclude.includes(opt.value)) isAllowed = false;
      if (mapping.keep && !mapping.keep.includes(opt.value)) isAllowed = false;

      if (!isAllowed) {
        opt.disabled = true;
        opt.style.display = 'none';
        if (skinColor.value === opt.value) skinColor.value = mapping.fallback;
      } else {
        opt.disabled = false;
        opt.style.display = 'block';
      }
    });
  }
}

function updatePrompt() {
  syncFields();
  const data = {};
  inputs.forEach(input => {
    data[input.id] = input.value || defaults[input.id];
  });

  // Combine Measurements
  const detailZh = data.measureDetail === '有明顯體積感' 
    ? '上半身比例自然，胸部有明顯的體積與重量感，輪廓飽滿但不是刻意挺起，會隨著站姿與重力自然下垂，與整體身形保持平衡' 
    : data.measureDetail;
  
  const measurementsZh = `${data.bust}${data.cup}-${data.waist}-${data.hip}${detailZh ? '，' + detailZh : ''}`;
  const measurementsEn = `${data.bust}${data.cup}-${data.waist}-${data.hip}${data.measureDetail ? ', ' + translate('measureDetail', data.measureDetail) : ''}`;

  // Construct Chinese Prompt
  const styleDescriptionZh = data.charStyle === '真人角色' ? '真人角色（自然拍攝，可見毛孔）' : '動漫角色風格';
  const zh = `${styleDescriptionZh}，製作一張三直排的人物設計參考圖（Character Sheet），主角是一位${data.age}的${data.race}，身高${data.height}cm，膚色${data.skinColor}，${data.bodyShape}但${measurementsZh}，（占總照片的左邊80%）包含同一個人的：正視圖、側視圖、後視圖（${data.hairStyle}），以及在（其餘20%）由上而下加入3張面部特寫（側面45度+微笑）（中性）（合眼）。臉部細節：${data.faceShape}，${data.headSize}，${data.chin}	，${data.eyeShape}，${data.nose}，${data.mouth}，${data.eyebrows}。髮色：${data.hairColor}。服裝：${data.clothing}。純淨中性灰色攝影棚背景，均勻平鋪光影，極致細節，清晰對焦。 --ar ${data.aspectRatio}`;

  // Construct English Prompt for Gemini
  const styleDescriptionEn = translate('charStyle', data.charStyle);
  const qualityTokens = data.charStyle === '真人角色' ? 'photorealistic, ultra-detailed, sharp focus, raw photography' : 'masterpiece, high quality illustration';
  const en = `${styleDescriptionEn}. A high-quality three-column character sheet for a character design reference, ${qualityTokens}. The main subject is a ${data.height}cm tall ${translate('race', data.race)} (${translate('age', data.age)}) with ${translate('skinColor', data.skinColor)}. She has a ${translate('bodyShape', data.bodyShape)} with ${measurementsEn}. The image (80% of composition) features multiple perspectives of the same woman, including front, side, and back views (hair styled in a ${translate('hairStyle', data.hairStyle)}). The remaining 20% displays three detailed headshots ranging from a 45-degree profile to a smiling expression, all with a neutral, calm demeanor and closed eyes. Face details: ${translate('faceShape', data.faceShape)}, ${translate('headSize', data.headSize)}, ${translate('chin', data.chin)}, ${translate('eyeShape', data.eyeShape)}, ${translate('nose', data.nose)}, ${translate('mouth', data.mouth)}, and ${translate('eyebrows', data.eyebrows)}. Her hair color is ${translate('hairColor', data.hairColor)}. She is wearing ${translate('clothing', data.clothing)}. Set against a neutral grey studio background with soft, flat cinematic lighting. The image should have a ${data.aspectRatio.replace(':', ' to ')} widescreen aspect ratio.`;

  promptZh.innerText = zh;
  promptEn.innerText = en;
}

function resetToDefault() {
  inputs.forEach(input => {
    input.value = defaults[input.id];
  });
  updatePrompt();
}

// Copy to Clipboard
async function copyToClipboard(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
    const originalContent = btn.innerHTML;
    const isPrimary = btn.classList.contains('btn-primary');
    
    btn.innerHTML = `<i data-lucide="check"></i> 已複製 / Copied!`;
    btn.style.background = 'var(--success)';
    btn.style.color = '#fff';
    lucide.createIcons(); // Re-render icons

    setTimeout(() => {
      btn.innerHTML = originalContent;
      btn.style.background = isPrimary ? 'var(--accent-color)' : 'transparent';
      btn.style.color = isPrimary ? 'var(--primary-bg)' : 'var(--text-main)';
      lucide.createIcons();
    }, 2000);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

const clothingTemplates = {
  'swimsuit': '二件式藍邊白色泳裝，布料貼合身形，側邊細繩，赤腳',
  'yoga': '緊身灰色瑜珈服，高腰設計，側邊排汗網格，展現腰臀比',
  'office': '修身深藍西裝外套，開襟合身，內搭白色蕾絲襯衫，黑色窄裙',
  'cheongsam': '現代短版旗袍，淡粉色綢緞材質，精細刺繡花紋，側邊高開衩',
  'armor': '皮革與金屬混合的輕型戰鬥護甲，黑色主體與金邊，具備機械感細節',
  'uniform': '經典水手服風格制服，深藍色短裙與白襯衫，配有紅色蝴蝶結，及膝長襪'
};

const templateSelect = document.getElementById('clothingTemplate');
const clothingTextarea = document.getElementById('clothing');

if (templateSelect && clothingTextarea) {
  templateSelect.addEventListener('change', () => {
    const val = templateSelect.value;
    if (val !== 'custom') {
      clothingTextarea.value = clothingTemplates[val];
      updatePrompt();
    }
  });
}

// Event Listeners
inputs.forEach(input => {
  input.addEventListener('input', updatePrompt);
});

resetBtn.addEventListener('click', resetToDefault);

copyZhBtn.addEventListener('click', () => copyToClipboard(promptZh.innerText, copyZhBtn));
copyEnBtn.addEventListener('click', () => copyToClipboard(promptEn.innerText, copyEnBtn));

// Initialize
initLanguageToggle();
resetToDefault();
