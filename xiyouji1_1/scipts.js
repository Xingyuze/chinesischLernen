const translationCard = document.getElementById('translationCard');
// 诗歌文本
const poemText = `
感盘古开辟
三皇治世
五帝定伦
世界之间
遂分为四大部洲
曰东胜神洲
曰西牛贺洲
曰南赡部洲
曰北俱芦洲
这部书单表东胜神洲
海外有一国土
名曰傲来国
国近大海
海中有一座山
唤为花果山
此山乃十洲之祖脉
三岛之来龙
自开清浊而立
鸿蒙判后而成
那座山
正当顶上
有一块仙石
其石有三丈六尺五寸高
有二丈四尺围圆
三丈六尺五寸高
按周天三百六十五度
二丈四尺围圆
按政历二十四气
上有九窍八孔
按九宫八卦
四面更无树木遮陰
左右倒有芝兰相衬
盖自开辟以来
每受天真地秀
日精月华
感之既久
遂有灵通之意
内育仙胞
一日迸裂
产一石卵
似圆球样大
因见风
化作一个石猴
五官俱备
四肢皆全
便就学爬学走
拜了四方
目运两道金光
射冲斗府
惊动高天上圣大慈仁者玉皇大天尊玄穹高上帝
驾座金阙云宫灵霄宝店
聚集仙卿
见有金光焰焰
即命千里眼
顺风耳开南天门观看
二将果奉旨出门外
看的真
听的明
须臾回报道
臣奉旨观听金光之处
乃东胜神洲海东傲来小国之界
有一座花果山
山上有一仙石
石产一卵
见风化一石猴
在那里拜四方
眼运金光
射冲斗府
如今服饵水食
金光将潜息矣
玉帝垂赐恩慈曰
下方之物
乃天地精华所生
不足为异
`;
// 翻译数据 (示例)

const translations_de = {
  感: "fühlen",
  盘: "Platte",
  古: "Antike",
  开: "offen",
  辟: "Erkennen",
  三: "drei",
  皇: "Kaiser",
  治: "Regel",
  世: "Welt",
  五: "fünf",
  帝: "Kaiser",
  定: "Sicherlich",
  伦: "Lun",
  界: "Grenze",
  之: "Von",
  间: "zwischen",
  遂: "Also",
  分: "Punkt",
  为: "für",
  四: "Vier",
  大: "groß",
  部: "Abteilung",
  洲: "Kontinent",
  曰: "sagen",
  东: "Ost",
  胜: "Gewinnen",
  神: "Gott",
  西: "West",
  牛: "Ochse",
  贺: "Glückwunsch",
  南: "Süden",
  赡: "Unterstützung",
  北: "Norden",
  俱: "alle",
  芦: "Schilf",
  这: "Das",
  书: "Buch",
  单: "eins",
  表: "Oberfläche",
  海: "Ozean",
  外: "draußen",
  有: "haben",
  一: "eins",
  国: "Land",
  土: "Erde",
  名: "Name",
  傲: "stolz",
  来: "Kommen",
  近: "schließen",
  中: "Mitte",
  座: "Sitz",
  山: "Berg",
  唤: "Anruf",
  花: "Blume",
  果: "Obst",
  此: "Das",
  乃: "Also",
  十: "zehn",
  祖: "Vorfahr",
  脉: "Impuls",
  岛: "Insel",
  龙: "Drachen",
  自: "seit",
  清: "klar",
  浊: "Trübung",
  而: "Und",
  立: "Stand",
  鸿: "Hong",
  蒙: "mongolisch",
  判: "Urteil",
  后: "zurück",
  成: "werden",
  那: "Das",
  正: "Nur",
  当: "Wann",
  顶: "Spitze",
  上: "Vorgesetzter",
  块: "Stück",
  仙: "Fee",
  石: "Stein",
  其: "Das",
  丈: "zehn Fuß",
  六: "sechs",
  尺: "Herrscher",
  寸: "Zoll",
  高: "hoch",
  二: "zwei",
  围: "Umgeben",
  圆: "runden",
  按: "entsprechend",
  周: "Woche",
  天: "Himmel",
  百: "Hundert",
  度: "Ausgeben",
  政: "Politisch",
  历: "Kalender",
  气: "Gas",
  九: "Neun",
  窍: "Tipps",
  八: "acht",
  孔: "Loch",
  宫: "Palast",
  卦: "Hexagramm",
  面: "Nudel",
  更: "Sogar",
  无: "keiner",
  树: "Baum",
  木: "Holz",
  遮: "Abdeckung",
  陰: "大",
  左: "Links",
  右: "Rechts",
  倒: "fallen",
  芝: "Zhi",
  兰: "Orchidee",
  相: "Gegenseitig",
  衬: "Beschichtung",
  盖: "bauen",
  以: "von",
  每: "Jeder",
  受: "von",
  真: "real",
  地: "Land",
  秀: "zeigen",
  日: "Tag",
  精: "Raffiniert",
  月: "Mond",
  华: "herrlich",
  既: "Nun das",
  久: "Lang",
  灵: "Geist",
  通: "Passieren",
  意: "Bedeutung",
  内: "Innen",
  育: "Ausbildung",
  胞: "Zelle",
  迸: "Brechen",
  裂: "Riss",
  产: "Produzieren",
  卵: "Ei",
  似: "wie",
  球: "Ball",
  样: "Probe",
  因: "Weil",
  见: "Sehen",
  风: "Wind",
  化: "ändern",
  作: "Tun",
  个: "indival",
  猴: "Affe",
  官: "offiziell",
  备: "Vorbereiten",
  肢: "Glied",
  皆: "alle",
  全: "Vollständig",
  便: "Hoffnung",
  就: "Auf einmal",
  学: "Studie",
  爬: "Aufstieg",
  走: "Gehen",
  拜: "Tschüss",
  了: "Es ist",
  方: "Quadrat",
  目: "Bedeutung",
  运: "Transport",
  两: "zwei",
  道: "Straße",
  金: "Gold",
  光: "Licht",
  射: "schießen",
  冲: "eilen",
  斗: "kämpfen",
  府: "Haus",
  惊: "Schock",
  动: "bewegen",
  圣: "Heilige",
  慈: "CI",
  仁: "Wohlwollen",
  者: "Diese",
  玉: "Jade",
  尊: "Ehre",
  玄: "mysteriös",
  穹: "Kuppel",
  驾: "fahren",
  阙: "Que",
  云: "Wolke",
  霄: "Himmel",
  宝: "wertvoll",
  店: "Geschäft",
  聚: "Versammeln",
  集: "Satz",
  卿: "Du",
  焰: "Flamme",
  即: "Im Augenblick",
  命: "Leben",
  千: "tausend",
  里: "innen",
  眼: "Auge",
  顺: "Sicher",
  耳: "Ohr",
  门: "Tür",
  观: "Sicht",
  看: "sehen",
  将: "Wille",
  奉: "Feng",
  旨: "Zweck",
  出: "aus",
  的: "von",
  听: "Hören",
  明: "hell",
  须: "Muss",
  臾: "Für einen Moment",
  回: "Zurück",
  报: "Bericht",
  臣: "Minister",
  处: "Wo",
  小: "Klein",
  在: "existieren",
  如: "wie",
  今: "Jetzt",
  服: "Kleidung",
  饵: "Köder",
  水: "Wasser",
  食: "Essen",
  潜: "latent",
  息: "Interesse",
  矣: "Es ist in Ordnung",
  垂: "Sinken",
  赐: "Geben",
  恩: "Freundlichkeit",
  下: "Runter",
  物: "Dinge",
  所: "Ort",
  生: "geboren",
  不: "NEIN",
  足: "Fuß",
  异: "anders",
};


const translations_fr = {
  感: "sentir",
  盘: "plaque",
  古: "antiquité",
  开: "ouvrir",
  辟: "Détecter",
  三: "trois",
  皇: "Empereur",
  治: "règle",
  世: "Monde",
  五: "cinq",
  帝: "empereur",
  定: "Certainement",
  伦: "Secouer",
  界: "limite",
  之: "De",
  间: "entre",
  遂: "Donc",
  分: "indiquer",
  为: "pour",
  四: "Quatre",
  大: "grand",
  部: "département",
  洲: "Continent",
  曰: "dire",
  东: "Est",
  胜: "Gagner",
  神: "Dieu",
  西: "Ouest",
  牛: "bœuf",
  贺: "Félicitations",
  南: "Sud",
  赡: "soutien",
  北: "nord",
  俱: "tous",
  芦: "roseau",
  这: "ce",
  书: "Livre",
  单: "un",
  表: "surface",
  海: "océan",
  外: "dehors",
  有: "avoir",
  一: "un",
  国: "pays",
  土: "Terre",
  名: "nom",
  傲: "fier",
  来: "Viens",
  近: "fermer",
  中: "milieu",
  座: "siège",
  山: "Montagne",
  唤: "Appel",
  花: "fleur",
  果: "fruit",
  此: "ce",
  乃: "Donc",
  十: "dix",
  祖: "Ancêtre",
  脉: "impulsion",
  岛: "île",
  龙: "dragon",
  自: "depuis",
  清: "clair",
  浊: "turbidité",
  而: "et",
  立: "rester",
  鸿: "Hong",
  蒙: "mongol",
  判: "Verdict",
  后: "dos",
  成: "devenir",
  那: "Que",
  正: "juste",
  当: "quand",
  顶: "haut",
  上: "supérieur",
  块: "morceau",
  仙: "Fée",
  石: "pierre",
  其: "Que",
  丈: "dix pieds",
  六: "six",
  尺: "règle",
  寸: "pouce",
  高: "haut",
  二: "deux",
  围: "Environnant",
  圆: "rond",
  按: "selon",
  周: "semaine",
  天: "ciel",
  百: "Cent",
  度: "Dépenser",
  政: "Politique",
  历: "calendrier",
  气: "gaz",
  九: "Neuf",
  窍: "Conseils",
  八: "huit",
  孔: "trou",
  宫: "palais",
  卦: "Hexagramme",
  面: "nouille",
  更: "Même",
  无: "aucun",
  树: "Arbre",
  木: "Bois",
  遮: "couverture",
  陰: "大",
  左: "Gauche",
  右: "droite",
  倒: "automne",
  芝: "Zhi",
  兰: "orchidée",
  相: "Mutuellement",
  衬: "garniture",
  盖: "construire",
  以: "par",
  每: "Chaque",
  受: "par",
  真: "réel",
  地: "atterrir",
  秀: "montrer",
  日: "jour",
  精: "Raffiné",
  月: "lune",
  华: "magnifique",
  既: "maintenant que",
  久: "Long",
  灵: "esprit",
  通: "Passer",
  意: "signification",
  内: "À l'intérieur",
  育: "Éducation",
  胞: "Cellule",
  迸: "Rupture",
  裂: "fissure",
  产: "Produire",
  卵: "œuf",
  似: "comme",
  球: "balle",
  样: "Échantillon",
  因: "parce que",
  见: "Voir",
  风: "vent",
  化: "changement",
  作: "faire",
  个: "autonome",
  猴: "singe",
  官: "officiel",
  备: "Préparer",
  肢: "membre",
  皆: "tous",
  全: "Complet",
  便: "Espoir",
  就: "Immédiatement",
  学: "étude",
  爬: "grimper",
  走: "Marcher",
  拜: "au revoir",
  了: "C'est",
  方: "carré",
  目: "Signification",
  运: "transport",
  两: "deux",
  道: "route",
  金: "or",
  光: "Lumière",
  射: "tirer",
  冲: "se précipiter",
  斗: "lutte",
  府: "Maison",
  惊: "choc",
  动: "se déplacer",
  圣: "Saint",
  慈: "CI",
  仁: "Bienveillance",
  者: "Ceux",
  玉: "Jade",
  尊: "Honneur",
  玄: "mystérieux",
  穹: "Dôme",
  驾: "conduire",
  阙: "Que ce soit",
  云: "nuage",
  霄: "Ciel",
  宝: "précieux",
  店: "boutique",
  聚: "Rassembler",
  集: "ensemble",
  卿: "Toi",
  焰: "flamme",
  即: "Tout de suite",
  命: "vie",
  千: "mille",
  里: "à l'intérieur",
  眼: "Œil",
  顺: "Bien sûr",
  耳: "Oreille",
  门: "Porte",
  观: "Voir",
  看: "regarder",
  将: "Volonté",
  奉: "Feng",
  旨: "but",
  出: "dehors",
  的: "de",
  听: "écouter",
  明: "brillant",
  须: "Doit",
  臾: "Pendant un moment",
  回: "Dos",
  报: "Rapport",
  臣: "ministre",
  处: "Où",
  小: "Petit",
  在: "exister",
  如: "comme",
  今: "maintenant",
  服: "Vêtements",
  饵: "appât",
  水: "eau",
  食: "Nourriture",
  潜: "latent",
  息: "intérêt",
  矣: "C'est bon",
  垂: "Affaissement",
  赐: "Donner",
  恩: "gentillesse",
  下: "Vers le bas",
  物: "Des choses",
  所: "Lieu",
  生: "né",
  不: "Non",
  足: "pied",
  异: "différent",
};
const translations_en = {
  感: "feel",
  盘: "plate",
  古: "antiquity",
  开: "open",
  辟: "Detect",
  三: "three",
  皇: "Emperor",
  治: "rule",
  世: "World",
  五: "five",
  帝: "emperor",
  定: "Certainly",
  伦: "Lun",
  界: "boundary",
  之: "Of",
  间: "between",
  遂: "So",
  分: "point",
  为: "for",
  四: "Four",
  大: "big",
  部: "department",
  洲: "Continent",
  曰: "say",
  东: "East",
  胜: "Win",
  神: "god",
  西: "West",
  牛: "ox",
  贺: "Congratulations",
  南: "South",
  赡: "support",
  北: "north",
  俱: "all",
  芦: "reed",
  这: "this",
  书: "Book",
  单: "one",
  表: "surface",
  海: "ocean",
  外: "outside",
  有: "have",
  一: "one",
  国: "country",
  土: "earth",
  名: "name",
  傲: "proud",
  来: "Come",
  近: "close",
  中: "middle",
  座: "seat",
  山: "Mountain",
  唤: "Call",
  花: "flower",
  果: "fruit",
  此: "this",
  乃: "So",
  十: "ten",
  祖: "Ancestor",
  脉: "pulse",
  岛: "island",
  龙: "dragon",
  自: "since",
  清: "clear",
  浊: "turbidity",
  而: "and",
  立: "stand",
  鸿: "Hong",
  蒙: "Mongolian",
  判: "Verdict",
  后: "back",
  成: "become",
  那: "That",
  正: "just",
  当: "when",
  顶: "top",
  上: "superior",
  块: "piece",
  仙: "Fairy",
  石: "stone",
  其: "That",
  丈: "ten feet",
  六: "six",
  尺: "ruler",
  寸: "inch",
  高: "high",
  二: "two",
  围: "Surrounding",
  圆: "round",
  按: "according to",
  周: "week",
  天: "sky",
  百: "Hundred",
  度: "Spend",
  政: "Political",
  历: "calendar",
  气: "gas",
  九: "Nine",
  窍: "Tips",
  八: "eight",
  孔: "hole",
  宫: "palace",
  卦: "Hexagram",
  面: "noodle",
  更: "Even",
  无: "none",
  树: "Tree",
  木: "Wood",
  遮: "cover",
  陰: "大",
  左: "Left",
  右: "right",
  倒: "fall",
  芝: "Zhi",
  兰: "orchid",
  相: "Mutually",
  衬: "lining",
  盖: "build",
  以: "by",
  每: "Every",
  受: "by",
  真: "real",
  地: "land",
  秀: "show",
  日: "day",
  精: "Refined",
  月: "moon",
  华: "magnificent",
  既: "now that",
  久: "Long",
  灵: "spirit",
  通: "Pass",
  意: "meaning",
  内: "Inside",
  育: "Education",
  胞: "Cell",
  迸: "Breaking",
  裂: "crack",
  产: "Produce",
  卵: "egg",
  似: "like",
  球: "ball",
  样: "Sample",
  因: "because",
  见: "See",
  风: "wind",
  化: "change",
  作: "do",
  个: "indivual",
  猴: "monkey",
  官: "official",
  备: "Prepare",
  肢: "limb",
  皆: "all",
  全: "Complete",
  便: "Hope",
  就: "At once",
  学: "study",
  爬: "climb",
  走: "Walk",
  拜: "bye",
  了: "It's",
  方: "square",
  目: "Meaning",
  运: "transport",
  两: "two",
  道: "road",
  金: "gold",
  光: "Light",
  射: "shoot",
  冲: "rush",
  斗: "fight",
  府: "House",
  惊: "shock",
  动: "move",
  圣: "Saint",
  慈: "Ci",
  仁: "Benevolence",
  者: "Those",
  玉: "Jade",
  尊: "Honor",
  玄: "mysterious",
  穹: "Dome",
  驾: "drive",
  阙: "Que",
  云: "cloud",
  霄: "Sky",
  宝: "precious",
  店: "shop",
  聚: "Gather",
  集: "set",
  卿: "You",
  焰: "flame",
  即: "Right now",
  命: "life",
  千: "thousand",
  里: "inside",
  眼: "Eye",
  顺: "Sure",
  耳: "Ear",
  门: "Door",
  观: "View",
  看: "look",
  将: "Will",
  奉: "Feng",
  旨: "purpose",
  出: "out",
  的: "of",
  听: "listen",
  明: "bright",
  须: "Must",
  臾: "For a moment",
  回: "Back",
  报: "Report",
  臣: "minister",
  处: "Where",
  小: "Small",
  在: "exist",
  如: "like",
  今: "now",
  服: "Clothes",
  饵: "bait",
  水: "water",
  食: "Food",
  潜: "latent",
  息: "interest",
  矣: "It's OK",
  垂: "Droop",
  赐: "Give",
  恩: "kindness",
  下: "Down",
  物: "Things",
  所: "Place",
  生: "born",
  不: "No",
  足: "foot",
  异: "different",
};






// 初始化语音合成
const synth = window.speechSynthesis;
let utterance = null;

// 状态跟踪
const charStates = {};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    renderPoem();
});

// 渲染诗歌
function renderPoem() {
    const poemContainer = document.getElementById('poemContainer');
    const lines = poemText.split('\n');
    
    lines.forEach(line => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'poem-line';
        
        // 处理每个字符
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            // 跳过空格
            if (char.trim() === '') {
                const spaceSpan = document.createElement('span');
                spaceSpan.textContent = ' ';
                lineDiv.appendChild(spaceSpan);
                continue;
            }
            
            // 创建字符容器
            const charContainer = document.createElement('div');
            charContainer.className = 'char-container';
            
            // 创建字符显示
            const charSpan = document.createElement('span');
            charSpan.className = 'char';
            charSpan.textContent = char;
            
            // 创建拼音显示
            const pinyinSpan = document.createElement('span');
            pinyinSpan.className = 'pinyin';
            
            // 创建翻译显示
            const transSpan = document.createElement('span');
            transSpan.className = 'translation';
            
            // 添加到容器
            charContainer.appendChild(pinyinSpan);
            charContainer.appendChild(charSpan);
            charContainer.appendChild(transSpan);
            
            // 添加点击事件
            charContainer.addEventListener('click', () => handleCharClick(char, pinyinSpan, transSpan));
            
            // 添加到行
            lineDiv.appendChild(charContainer);
        }
        
        // 添加行控制按钮
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'line-controls';
        
        const readBtn = document.createElement('button');
        readBtn.textContent = '朗读';
        readBtn.addEventListener('click', () => readLine(line));
        
        const transBtn = document.createElement('button');
        transBtn.textContent = '翻译';
        transBtn.addEventListener('click', () => showLineTranslation(line));
        
        controlsDiv.appendChild(readBtn);
        controlsDiv.appendChild(transBtn);
        lineDiv.appendChild(controlsDiv);
        
        // 添加到容器
        poemContainer.appendChild(lineDiv);
    });
}

// 处理字符点击
function handleCharClick(char, pinyinSpan, transSpan) {
  const charId = `${char}-${pinyinSpan.id}`; // 创建唯一标识
  
  // 初始化状态
  if (!charStates[charId]) {
      charStates[charId] = 0;
  }
  
  // 更新状态
  charStates[charId]++;
  if (charStates[charId] > 3) {
      charStates[charId] = 1;
  }
  
  // 根据状态执行操作
  switch (charStates[charId]) {
    case 1: // 朗读字符
      readChar(char);
      updateStatus(`朗读字符: ${char}`);
      break;
    case 2: // 显示拼音
      showPinyin(char, pinyinSpan);
      updateStatus(`显示拼音: ${char}`);
      break;
    case 3: // 显示翻译
      showTranslation(char, transSpan);
      updateStatus(`显示翻译: ${char}`);
      break;
  }
}

// 显示拼音
function showPinyin(char, pinyinSpan) {
    // 这里应该调用拼音库，简化处理
const pinyinMap = {
  感: "gǎn",
  盘: "pán",
  古: "gǔ",
  开: "kāi",
  辟: "pì",
  三: "sān",
  皇: "huáng",
  治: "zhì",
  世: "shì",
  五: "wǔ",
  帝: "dì",
  定: "dìng",
  伦: "lún",
  界: "jiè",
  之: "zhī",
  间: "jiān",
  遂: "suì",
  分: "fēn",
  为: "wéi",
  四: "sì",
  大: "dà",
  部: "bù",
  洲: "zhōu",
  曰: "yuē",
  东: "dōng",
  胜: "shèng",
  神: "shén",
  西: "xī",
  牛: "niú",
  贺: "hè",
  南: "nán",
  赡: "shàn",
  北: "běi",
  俱: "jù",
  芦: "lú",
  这: "zhè",
  书: "shū",
  单: "dān",
  表: "biǎo",
  海: "hǎi",
  外: "wài",
  有: "yǒu",
  一: "yī",
  国: "guó",
  土: "tǔ",
  名: "míng",
  傲: "ào",
  来: "lái",
  近: "jìn",
  中: "zhōng",
  座: "zuò",
  山: "shān",
  唤: "huàn",
  花: "huā",
  果: "guǒ",
  此: "cǐ",
  乃: "nǎi",
  十: "shí",
  祖: "zǔ",
  脉: "mài",
  岛: "dǎo",
  龙: "lóng",
  自: "zì",
  清: "qīng",
  浊: "zhuó",
  而: "ér",
  立: "lì",
  鸿: "hóng",
  蒙: "méng",
  判: "pàn",
  后: "hòu",
  成: "chéng",
  那: "nà",
  正: "zhèng",
  当: "dāng",
  顶: "dǐng",
  上: "shàng",
  块: "kuài",
  仙: "xiān",
  石: "shí",
  其: "qí",
  丈: "zhàng",
  六: "liù",
  尺: "chǐ",
  寸: "cùn",
  高: "gāo",
  二: "èr",
  围: "wéi",
  圆: "yuán",
  按: "àn",
  周: "zhōu",
  天: "tiān",
  百: "bǎi",
  度: "dù",
  政: "zhèng",
  历: "lì",
  气: "qì",
  九: "jiǔ",
  窍: "qiào",
  八: "bā",
  孔: "kǒng",
  宫: "gōng",
  卦: "guà",
  面: "miàn",
  更: "gèng",
  无: "wú",
  树: "shù",
  木: "mù",
  遮: "zhē",
  陰: "yīn",
  左: "zuǒ",
  右: "yòu",
  倒: "dào",
  芝: "zhī",
  兰: "lán",
  相: "xiāng",
  衬: "chèn",
  盖: "gài",
  以: "yǐ",
  每: "měi",
  受: "shòu",
  真: "zhēn",
  地: "dì",
  秀: "xiù",
  日: "rì",
  精: "jīng",
  月: "yuè",
  华: "huá",
  既: "jì",
  久: "jiǔ",
  灵: "líng",
  通: "tōng",
  意: "yì",
  内: "nèi",
  育: "yù",
  胞: "bāo",
  迸: "bèng",
  裂: "liè",
  产: "chǎn",
  卵: "luǎn",
  似: "shì",
  球: "qiú",
  样: "yàng",
  因: "yīn",
  见: "jiàn",
  风: "fēng",
  化: "huà",
  作: "zuò",
  个: "gè",
  猴: "hóu",
  官: "guān",
  备: "bèi",
  肢: "zhī",
  皆: "jiē",
  全: "quán",
  便: "biàn",
  就: "jiù",
  学: "xué",
  爬: "pá",
  走: "zǒu",
  拜: "bài",
  了: "le",
  方: "fāng",
  目: "mù",
  运: "yùn",
  两: "liǎng",
  道: "dào",
  金: "jīn",
  光: "guāng",
  射: "shè",
  冲: "chōng",
  斗: "dòu",
  府: "fǔ",
  惊: "jīng",
  动: "dòng",
  圣: "shèng",
  慈: "cí",
  仁: "rén",
  者: "zhě",
  玉: "yù",
  尊: "zūn",
  玄: "xuán",
  穹: "qióng",
  驾: "jià",
  阙: "quē",
  云: "yún",
  霄: "xiāo",
  宝: "bǎo",
  店: "diàn",
  聚: "jù",
  集: "jí",
  卿: "qīng",
  焰: "yàn",
  即: "jí",
  命: "mìng",
  千: "qiān",
  里: "lǐ",
  眼: "yǎn",
  顺: "shùn",
  耳: "ěr",
  门: "mén",
  观: "guān",
  看: "kàn",
  将: "jiāng",
  奉: "fèng",
  旨: "zhǐ",
  出: "chū",
  的: "de",
  听: "tīng",
  明: "míng",
  须: "xū",
  臾: "yú",
  回: "huí",
  报: "bào",
  臣: "chén",
  处: "chù",
  小: "xiǎo",
  在: "zài",
  如: "rú",
  今: "jīn",
  服: "fú",
  饵: "ěr",
  水: "shuǐ",
  食: "shí",
  潜: "qián",
  息: "xī",
  矣: "yǐ",
  垂: "chuí",
  赐: "cì",
  恩: "ēn",
  下: "xià",
  物: "wù",
  所: "suǒ",
  生: "shēng",
  不: "bù",
  足: "zú",
  异: "yì",
};
  
    

    const py = pinyinMap[char] || "?";
    pinyinSpan.textContent = py;
    pinyinSpan.style.display = 'block';
    
    // 3秒后自动隐藏
    setTimeout(() => {
        pinyinSpan.style.display = 'none';
        // 重置状态以便下次点击
        const charId = `${char}-${pinyinSpan.id}`;
        charStates[charId] = 0;
    }, 8000);
}

// 朗读字符
function readChar(char) {
if (synth.speaking) {
synth.cancel();
}

utterance = new SpeechSynthesisUtterance(char);
utterance.lang = 'zh-CN';
utterance.rate = 0.7; // 设置为正常速度的70%
synth.speak(utterance);
}

// 显示翻译
      // 显示翻译
      function showTranslation(char, transSpan) {
        const lang = document.getElementById('languageSelect').value;
    
        const translationCard = document.getElementById('translationCard');
    
        const translateMap = {
            de: translations_de[char] || "Keine Übersetzung",
            fr: translations_fr[char] || "Pas de traduction",
            en: translations_en[char] || "No translation"
        }
        const translate = translateMap[lang]
        translationCard.innerHTML = `
            <button class="close-btn" onclick="closeTranslationCard()">×</button>
            <strong style="font-size: 18px;">汉字：</strong> ${char}<br>
            <strong style="font-size: 18px;">翻译: </strong> ${translate}
        `;
    
        translationCard.style.display = 'block';
    
        const charId = `${char}-${transSpan.id}`;
        charStates[charId] = 0;
    }
    

function closeTranslationCard() {
translationCard.style.display = 'none';
}

// 朗读整行
function readLine(line) {
if (synth.speaking) {
synth.cancel();
}

utterance = new SpeechSynthesisUtterance(line);
utterance.lang = 'zh-CN';
utterance.rate = 0.6; // 设置为正常速度的60%，更慢一些
synth.speak(utterance);

updateStatus(`朗读: ${line}`);
}



const tianwen_translation_map_fr = {
  感盘古开辟: "Réflexion sur Pangu",
  三皇治世: "Trois empereurs gouvernent le monde",
  五帝定伦: "Cinq empereurs déterminés",
  世界之间: "Entre le monde",
  遂分为四大部洲: "Il est divisé en quatre continents",
  曰东胜神洲: "Dongsheng Shenzhou",
  曰西牛贺洲: "Xiniu hezhou",
  曰南赡部洲: "Continent de Nanshanbu",
  曰北俱芦洲: "Beijuluzhou",
  这部书单表东胜神洲: "Ce livre répertorie Dongsheng Shenzhou",
  海外有一国土: "Il y a un pays à l'étranger",
  名曰傲来国: "Nommé Aolai Country",
  国近大海: "Le pays est proche de la mer",
  海中有一座山: "Il y a une montagne dans la mer",
  唤为花果山: "Appelé Huaguo Mountain",
  此山乃十洲之祖脉: "Cette montagne est la ligne ancestrale des dix continents",
  三岛之来龙: "L'origine des trois îles",
  自开清浊而立: "Tenez-vous en ouvrant le clair et trouble",
  鸿蒙判后而成: "Après le jugement de Hongmeng",
  那座山: "Cette montagne",
  正当顶上: "Tout comme le haut",
  有一块仙石: "Il y a une pierre de fée",
  其石有三丈六尺五寸高:
    "Sa pierre mesure trois pieds six pieds cinq pouces de hauteur",
  有二丈四尺围圆: "Deux pieds en cercle",
  三丈六尺五寸高: "Trois pieds six pieds cinq pouces de haut",
  按周天三百六十五度: "Selon les 365 degrés de la semaine",
  二丈四尺围圆: "Deux pieds quatre pieds autour",
  按政历二十四气: "Selon les vingt-quatre spiritueux du calendrier politique",
  上有九窍八孔: "Il y a neuf orifices et huit trous dessus",
  按九宫八卦: "Selon les neuf palais et huit trigrammes",
  四面更无树木遮陰: "Aucun arbre de tous les côtés ne couvre le soleil",
  左右倒有芝兰相衬: "Il y a des Zhilans au contraste gauche et droit",
  盖自开辟以来: "Depuis son ouverture",
  每受天真地秀: "Chaque expérience de la performance naïve",
  日精月华: "Soleil et lune",
  感之既久: "Se sentir longtemps",
  遂有灵通之意: "Donc ça signifie être sage",
  内育仙胞: "Culture intérieure d'immortels",
  一日迸裂: "Éclatement d'un jour",
  产一石卵: "Laisser une pierre d'œuf",
  似圆球样大: "Aussi grand qu'une balle",
  因见风: "À cause du vent",
  化作一个石猴: "Se transformer en singe en pierre",
  五官俱备: "Les cinq sens",
  四肢皆全: "Tous les membres",
  便就学爬学走: "Apprenez juste à ramper et à marcher",
  拜了四方: "Adorer toutes les directions",
  目运两道金光: "Deux lumières dorées des yeux",
  射冲斗府: "Tire de Dou Mansion",
  惊动高天上圣大慈仁者玉皇大天尊玄穹高上帝:
    "Éveillé le saint, grand empereur de jade compatissant et gentil, le grand Seigneur céleste, Xuanqiong, Gao Dieu",
  驾座金阙云宫灵霄宝店: "Siège de conduite Jinque Yungong Lingxiaobao Store",
  聚集仙卿: "Rassembler les immortels",
  见有金光焰焰: "Voir Golden Flame",
  即命千里眼: "Destiné à être à mille kilomètres de là",
  顺风耳开南天门观看: "Regardez la porte nantienne avec le vent",
  二将果奉旨出门外: "Les seconds généraux ont reçu l'ordre de sortir",
  看的真: "Vraiment vu",
  听的明: "Écouter clairement",
  须臾回报道: "Rapport dans un instant",
  臣奉旨观听金光之处: "Je suis ordonné de voir la lumière dorée",
  乃东胜神洲海东傲来小国之界:
    "La limite du petit pays à l'est de la mer de Shenzhou",
  有一座花果山: "Il y a une montagne de fleurs et de fruits",
  山上有一仙石: "Il y a une pierre immortelle sur la montagne",
  石产一卵: "La pierre ponte un œuf",
  见风化一石猴: "Un singe avec une pierre de temps",
  在那里拜四方: "Là, vous adorez",
  眼运金光: "Lucky de la chance des yeux",
  射冲斗府: "Tire de Dou Mansion",
  如今服饵水食: "Maintenant prendre des appâts et manger",
  金光将潜息矣: "La lumière dorée est sur le point de s'affronter",
  玉帝垂赐恩慈曰: "L'empereur de jade lui a donné de la gentillesse",
  下方之物: "Les choses ci-dessous",
  乃天地精华所生: "Il est né de l'essence du ciel et de la terre",
  不足为异: "Ne pas être différent",
};

const tianwen_translation_map_de = {
  感盘古开辟: "Reflexion auf Pangu",
  三皇治世: "Drei Kaiser regieren die Welt",
  五帝定伦: "Fünf Kaiser bestimmt",
  世界之间: "Zwischen der Welt",
  遂分为四大部洲: "Es ist in vier Kontinente unterteilt",
  曰东胜神洲: "Dongsheng Shenzhou",
  曰西牛贺洲: "Xiniu Hiszhou",
  曰南赡部洲: "Nanshanbu Kontinent",
  曰北俱芦洲: "Beijuluzhou",
  这部书单表东胜神洲: "Dieses Buch listet Dongsheng Shenzhou auf",
  海外有一国土: "Es gibt ein Land in Übersee",
  名曰傲来国: "Namen Aolai Land",
  国近大海: "Das Land liegt in der Nähe des Meeres",
  海中有一座山: "Es gibt einen Berg im Meer",
  唤为花果山: "Huaguo Berg genannt",
  此山乃十洲之祖脉: "Dieser Berg ist die Stammlinie der zehn Kontinente",
  三岛之来龙: "Der Ursprung der drei Inseln",
  自开清浊而立: "Stehen Sie durch Öffnen der Klaren und Tourbiden",
  鸿蒙判后而成: "Nach dem Hongmeng -Urteil",
  那座山: "Dieser Berg",
  正当顶上: "Genauso oben",
  有一块仙石: "Es gibt einen Märchenstein",
  其石有三丈六尺五寸高: "Sein Stein ist drei Fuß sechs Fuß fünf Zoll groß",
  有二丈四尺围圆: "Zwei Fuß im Kreis",
  三丈六尺五寸高: "Drei Fuß sechs Fuß fünf Zoll groß",
  按周天三百六十五度: "Nach den 365 Grad der Woche",
  二丈四尺围圆: "Zwei Fuß vier Fuß rund",
  按政历二十四气: "Nach den vierundzwanzig Geistern des politischen Kalenders",
  上有九窍八孔: "Es gibt neun Öffnungen und acht Löcher darauf",
  按九宫八卦: "Nach Angaben der neun Paläste und acht Trigramme",
  四面更无树木遮陰: "Keine Bäume auf allen Seiten bedecken die Sonne",
  左右倒有芝兰相衬: "Es gibt Zhilaner am linken und rechten Kontrast",
  盖自开辟以来: "Seit seiner Öffnung",
  每受天真地秀: "Jede Erfahrung naiver Leistung",
  日精月华: "Sonne und Mond",
  感之既久: "Sich lang fühlen",
  遂有灵通之意: "Es bedeutet also weise zu sein",
  内育仙胞: "Innerer Anbau von Unsterblichen",
  一日迸裂: "Eines Tages platzte",
  产一石卵: "Einen Stein Ei lassen",
  似圆球样大: "So groß wie ein Ball",
  因见风: "Wegen des Windes",
  化作一个石猴: "Verwandeln Sie sich in einen Steinaffen",
  五官俱备: "Alle fünf Sinne",
  四肢皆全: "Alle Gliedmaßen",
  便就学爬学走: "Lerne einfach zu kriechen und zu gehen",
  拜了四方: "Verehren alle Richtungen",
  目运两道金光: "Zwei goldene Augenlichter",
  射冲斗府: "Dou Mansion schießen",
  惊动高天上圣大慈仁者玉皇大天尊玄穹高上帝:
    "Erregt den Heiligen, großen mitfühlenden und freundlichen Jade -Kaiser, den großen himmlischen Herrn, Xuanqiong, Gao -Gott",
  驾座金阙云宫灵霄宝店: "Fahrsitz Jinque Yungong Lingxiaobao Store",
  聚集仙卿: "Sammeln Sie die Unsterblichen",
  见有金光焰焰: "Siehe Goldene Flamme",
  即命千里眼: "Dazu bestimmt, tausend Meilen entfernt zu sein",
  顺风耳开南天门观看: "Beobachten Sie das nantische Tor mit dem Wind",
  二将果奉旨出门外: "Die zweiten Generäle wurden angewiesen, auszugehen",
  看的真: "Wirklich gesehen",
  听的明: "Hören Sie klar zu",
  须臾回报道: "Melden Sie sich in einem Moment zurück",
  臣奉旨观听金光之处: "Ich werde befohlen, das goldene Licht zu sehen",
  乃东胜神洲海东傲来小国之界:
    "Die Grenze des kleinen Landes im Osten von Shenzhou Sea",
  有一座花果山: "Es gibt einen Berg von Blumen und Früchten",
  山上有一仙石: "Auf dem Berg befindet sich ein unsterblicher Stein",
  石产一卵: "Stein legt ein Ei",
  见风化一石猴: "Ein Affe mit einem Steinmesser",
  在那里拜四方: "Da verehrst du",
  眼运金光: "Goldenes Licht von Augen Glück",
  射冲斗府: "Dou Mansion schießen",
  如今服饵水食: "Jetzt Köder nehmen und essen",
  金光将潜息矣: "Das goldene Licht ist kurz vor dem Einbruch",
  玉帝垂赐恩慈曰: "Der Jade -Kaiser gab ihm Freundlichkeit",
  下方之物: "Dinge unten",
  乃天地精华所生: "Es wird aus der Essenz des Himmels und der Erde geboren",
  不足为异: "Nicht anders sein",
};
const tianwen_translation_map_en = {
  感盘古开辟: "Reflection on Pangu",
  三皇治世: "Three Emperors rule the world",
  五帝定伦: "Five Emperors Determined",
  世界之间: "Between the world",
  遂分为四大部洲: "It is divided into four continents",
  曰东胜神洲: "Dongsheng Shenzhou",
  曰西牛贺洲: "Xiniu Hezhou",
  曰南赡部洲: "Nanshanbu Continent",
  曰北俱芦洲: "Beijuluzhou",
  这部书单表东胜神洲: "This book lists Dongsheng Shenzhou",
  海外有一国土: "There is a country overseas",
  名曰傲来国: "Named Aolai Country",
  国近大海: "The country is close to the sea",
  海中有一座山: "There is a mountain in the sea",
  唤为花果山: "Called Huaguo Mountain",
  此山乃十洲之祖脉: "This mountain is the ancestral line of the ten continents",
  三岛之来龙: "The origin of the Three Islands",
  自开清浊而立: "Stand by opening the clear and turbid",
  鸿蒙判后而成: "After the Hongmeng judgment",
  那座山: "That mountain",
  正当顶上: "Just as top",
  有一块仙石: "There is a fairy stone",
  其石有三丈六尺五寸高: "Its stone is three feet six feet five inches tall",
  有二丈四尺围圆: "Two feet in circle",
  三丈六尺五寸高: "Three feet six feet five inches tall",
  按周天三百六十五度: "According to the 365 degrees of the week",
  二丈四尺围圆: "Two feet four feet round",
  按政历二十四气: "According to the Twenty-Four Spirits of Political Calendar",
  上有九窍八孔: "There are nine orifices and eight holes on it",
  按九宫八卦: "According to the Nine Palaces and Eight Trigrams",
  四面更无树木遮陰: "No trees on all sides cover the sun",
  左右倒有芝兰相衬: "There are zhilans on the left and right contrast",
  盖自开辟以来: "Since its opening",
  每受天真地秀: "Every experience of naive performance",
  日精月华: "Sun and moon",
  感之既久: "Feeling long",
  遂有灵通之意: "So it means to be wise",
  内育仙胞: "Inner cultivation of immortals",
  一日迸裂: "One day burst",
  产一石卵: "Leave one stone of egg",
  似圆球样大: "As big as a ball",
  因见风: "Because of the wind",
  化作一个石猴: "Turn into a stone monkey",
  五官俱备: "All five senses",
  四肢皆全: "All limbs",
  便就学爬学走: "Just learn to crawl and walk",
  拜了四方: "Worship all directions",
  目运两道金光: "Two golden lights of eyes",
  射冲斗府: "Shooting Dou Mansion",
  惊动高天上圣大慈仁者玉皇大天尊玄穹高上帝:
    "Aroused the saint, great compassionate and kind Jade Emperor, the Great Heavenly Lord, Xuanqiong, Gao God",
  驾座金阙云宫灵霄宝店: "Driving seat Jinque Yungong Lingxiaobao Store",
  聚集仙卿: "Gather the Immortals",
  见有金光焰焰: "See golden flame",
  即命千里眼: "Destined to be a thousand miles away",
  顺风耳开南天门观看: "Watch the Nantian Gate with the Wind",
  二将果奉旨出门外: "The second generals were ordered to go out",
  看的真: "Really seen",
  听的明: "Listen clearly",
  须臾回报道: "Report back in a moment",
  臣奉旨观听金光之处: "I am ordered to see the golden light",
  乃东胜神洲海东傲来小国之界:
    "The boundary of the small country in the east of Shenzhou Sea",
  有一座花果山: "There is a mountain of flowers and fruits",
  山上有一仙石: "There is an immortal stone on the mountain",
  石产一卵: "Stone lays an egg",
  见风化一石猴: "A monkey with a stone of weather",
  在那里拜四方: "There you worship",
  眼运金光: "Eye luck golden light",
  射冲斗府: "Shooting Dou Mansion",
  如今服饵水食: "Now taking bait and eating",
  金光将潜息矣: "The golden light is about to slump",
  玉帝垂赐恩慈曰: "The Jade Emperor gave him kindness",
  下方之物: "Things below",
  乃天地精华所生: "It is born from the essence of heaven and earth",
  不足为异: "Not to be different",
};

function showLineTranslation(line) {
const lang = document.getElementById('languageSelect').value;
const translatedMap = {
de: tianwen_translation_map_de,
fr: tianwen_translation_map_fr,
en: tianwen_translation_map_en
};
const translatedLine = translatedMap[lang]?.[line] || "（keine Übersetzung gefunden）";
const translationCard = document.getElementById('translationCard');

translationCard.innerHTML = `
<button class="close-btn" onclick="closeTranslationCard()">×</button>
<strong style="font-size: 18px;">原文：</strong><br>
<div style="margin-bottom: 10px;">${line}</div>
<strong style="font-size: 18px;">翻译：</strong><br>
<div>${translatedLine}</div>
`;

translationCard.style.display = 'block';

updateStatus(`显示翻译: ${line.substring(0, 15)}...`);
}

// 更新状态栏
function updateStatus(message) {
    document.getElementById('statusBar').textContent = message;
}
