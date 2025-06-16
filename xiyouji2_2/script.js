const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `祖师道
教你
静
字门中之道
如何
悟空道
静字门中
是甚正果
祖师道
此是休粮
守谷
清静无为
参禅打坐
戒语持斋
或睡功
或立功
并入定坐关之类
悟空道
这般也能长生么
祖师道
也似
窑头土坯
悟空笑道
师父果有些滴
一行说我不会打市语
怎么谓之
窑头土坯
祖师道
就如那窑头上
造成砖瓦之坯
虽已成形
尚未经水火煅炼
一朝大雨滂沱
他必滥矣
悟空道
也不长远
不学
不学
祖师道
教你
动
字门中之道
如何
悟空道
动门之道
却又怎样
祖师道
此是有为有作
采阴补阳
攀弓踏弩
摩脐过气
用方炮制
烧茅打鼎
进红铅
炼秋石
并服妇乳之类
悟空道
似这等也得长生么
祖师道
此欲长生
亦如
水中捞月
悟空道
师父又来了
怎么叫做
水中捞月
祖师道
月在长空
水中有影
虽然看见
只是无捞摸处
到底只成空耳
悟空道
也不学
不学
`;

const pinyinMap = {
  "祖": "zǔ",
  "师": "shī",
  "道": "dào",
  "教": "jiào",
  "你": "nǐ",
  "静": "jìng",
  "字": "zì",
  "门": "mén",
  "中": "zhōng",
  "之": "zhī",
  "如": "rú",
  "何": "hé",
  "悟": "wù",
  "空": "kōng",
  "是": "shì",
  "甚": "shèn",
  "正": "zhèng",
  "果": "guǒ",
  "此": "cǐ",
  "休": "xiū",
  "粮": "liáng",
  "守": "shǒu",
  "谷": "gǔ",
  "清": "qīng",
  "无": "wú",
  "为": "wéi",
  "参": "cān",
  "禅": "chán",
  "打": "dǎ",
  "坐": "zuò",
  "戒": "jiè",
  "语": "yǔ",
  "持": "chí",
  "斋": "zhāi",
  "或": "huò",
  "睡": "shuì",
  "功": "gōng",
  "立": "lì",
  "并": "bìng",
  "入": "rù",
  "定": "dìng",
  "关": "guān",
  "类": "lèi",
  "这": "zhè",
  "般": "bān",
  "也": "yě",
  "能": "néng",
  "长": "cháng",
  "生": "shēng",
  "么": "me",
  "似": "shì",
  "窑": "yáo",
  "头": "tóu",
  "土": "tǔ",
  "坯": "pī",
  "笑": "xiào",
  "父": "fù",
  "有": "yǒu",
  "些": "xiē",
  "滴": "dī",
  "一": "yī",
  "行": "xíng",
  "说": "shuō",
  "我": "wǒ",
  "不": "bú",
  "会": "huì",
  "市": "shì",
  "怎": "zěn",
  "谓": "wèi",
  "就": "jiù",
  "那": "nà",
  "上": "shàng",
  "造": "zào",
  "成": "chéng",
  "砖": "zhuān",
  "瓦": "wǎ",
  "虽": "suī",
  "已": "yǐ",
  "形": "xíng",
  "尚": "shàng",
  "未": "wèi",
  "经": "jīng",
  "水": "shuǐ",
  "火": "huǒ",
  "煅": "duàn",
  "炼": "liàn",
  "朝": "cháo",
  "大": "dà",
  "雨": "yǔ",
  "滂": "pāng",
  "沱": "tuó",
  "他": "tā",
  "必": "bì",
  "滥": "làn",
  "矣": "yǐ",
  "远": "yuǎn",
  "学": "xué",
  "动": "dòng",
  "却": "què",
  "又": "yòu",
  "样": "yàng",
  "作": "zuò",
  "采": "cǎi",
  "阴": "yīn",
  "补": "bǔ",
  "阳": "yáng",
  "攀": "pān",
  "弓": "gōng",
  "踏": "tà",
  "弩": "nǔ",
  "摩": "mó",
  "脐": "qí",
  "过": "guò",
  "气": "qì",
  "用": "yòng",
  "方": "fāng",
  "炮": "páo",
  "制": "zhì",
  "烧": "shāo",
  "茅": "máo",
  "鼎": "dǐng",
  "进": "jìn",
  "红": "hóng",
  "铅": "qiān",
  "秋": "qiū",
  "石": "shí",
  "服": "fú",
  "妇": "fù",
  "乳": "rǔ",
  "等": "děng",
  "得": "dé",
  "欲": "yù",
  "亦": "yì",
  "捞": "lāo",
  "月": "yuè",
  "来": "lái",
  "了": "le",
  "叫": "jiào",
  "做": "zuò",
  "在": "zài",
  "影": "yǐng",
  "然": "rán",
  "看": "kàn",
  "见": "jiàn",
  "只": "zhǐ",
  "摸": "mō",
  "处": "chù",
  "到": "dào",
  "底": "dǐ",
  "耳": "ěr"
};

const translations_en = {
  "祖": "Ancestor",
  "师": "division",
  "道": "road",
  "教": "teach",
  "你": "you",
  "静": "quiet",
  "字": "Character",
  "门": "Door",
  "中": "middle",
  "之": "Of",
  "如": "like",
  "何": "what",
  "悟": "Enlightenment",
  "空": "null",
  "是": "yes",
  "甚": "very",
  "正": "just",
  "果": "fruit",
  "此": "this",
  "休": "stop",
  "粮": "grain",
  "守": "Guard",
  "谷": "valley",
  "清": "clear",
  "无": "none",
  "为": "for",
  "参": "Ginseng",
  "禅": "Zen",
  "打": "beat",
  "坐": "sit",
  "戒": "Rice",
  "语": "language",
  "持": "hold",
  "斋": "fast",
  "或": "or",
  "睡": "sleep",
  "功": "achievement",
  "立": "stand",
  "并": "and",
  "入": "enter",
  "定": "Certainly",
  "关": "close",
  "类": "kind",
  "这": "this",
  "般": "Normal",
  "也": "also",
  "能": "able",
  "长": "long",
  "生": "born",
  "么": "Is it",
  "似": "like",
  "窑": "kiln",
  "头": "head",
  "土": "earth",
  "坯": "Blank",
  "笑": "laugh",
  "父": "father",
  "有": "have",
  "些": "some",
  "滴": "drop",
  "一": "one",
  "行": "OK",
  "说": "explain",
  "我": "I",
  "不": "No",
  "会": "meeting",
  "市": "city",
  "怎": "How",
  "谓": "Present",
  "就": "At once",
  "那": "That",
  "上": "superior",
  "造": "make",
  "成": "become",
  "砖": "brick",
  "瓦": "watt",
  "虽": "although",
  "已": "already",
  "形": "shape",
  "尚": "still",
  "未": "not yet",
  "经": "through",
  "水": "water",
  "火": "fire",
  "煅": "Case",
  "炼": "Refining",
  "朝": "towards",
  "大": "big",
  "雨": "rain",
  "滂": "rushing",
  "沱": "Tuo",
  "他": "he",
  "必": "must",
  "滥": "Abuse",
  "矣": "It's OK",
  "远": "Far",
  "学": "study",
  "动": "move",
  "却": "but",
  "又": "again",
  "样": "Sample",
  "作": "do",
  "采": "Pick",
  "阴": "Negative",
  "补": "repair",
  "阳": "Positive",
  "攀": "climb",
  "弓": "bow",
  "踏": "tread",
  "弩": "crossbow",
  "摩": "Mo",
  "脐": "Navel",
  "过": "Pass",
  "气": "gas",
  "用": "use",
  "方": "square",
  "炮": "gun",
  "制": "system",
  "烧": "burn",
  "茅": "Mao",
  "鼎": "tripod",
  "进": "Enter",
  "红": "red",
  "铅": "lead",
  "秋": "Autumn",
  "石": "stone",
  "服": "Clothes",
  "妇": "woman",
  "乳": "milk",
  "等": "wait",
  "得": "have to",
  "欲": "want",
  "亦": "as well as",
  "捞": "Fish",
  "月": "moon",
  "来": "Come",
  "了": "It's",
  "叫": "Call",
  "做": "Do",
  "在": "exist",
  "影": "film",
  "然": "Of course",
  "看": "look",
  "见": "See",
  "只": "Only",
  "摸": "touch",
  "处": "Where",
  "到": "arrive",
  "底": "end",
  "耳": "Ear"
};

const translations_de = {
  "祖": "Vorfahr",
  "师": "Division",
  "道": "Straße",
  "教": "unterrichten",
  "你": "Du",
  "静": "ruhig",
  "字": "Charakter",
  "门": "Tür",
  "中": "Mitte",
  "之": "Von",
  "如": "wie",
  "何": "Was",
  "悟": "Aufklärung",
  "空": "NULL",
  "是": "Ja",
  "甚": "sehr",
  "正": "Nur",
  "果": "Obst",
  "此": "Das",
  "休": "stoppen",
  "粮": "Getreide",
  "守": "Bewachen",
  "谷": "Schlucht",
  "清": "klar",
  "无": "keiner",
  "为": "für",
  "参": "Ginseng",
  "禅": "Zen",
  "打": "schlagen",
  "坐": "sitzen",
  "戒": "Reis",
  "语": "Sprache",
  "持": "halten",
  "斋": "schnell",
  "或": "oder",
  "睡": "schlafen",
  "功": "Leistung",
  "立": "Stand",
  "并": "Und",
  "入": "eingeben",
  "定": "Sicherlich",
  "关": "schließen",
  "类": "Art",
  "这": "Das",
  "般": "Normal",
  "也": "Auch",
  "能": "fähig",
  "长": "lang",
  "生": "geboren",
  "么": "Ist es",
  "似": "wie",
  "窑": "Ofen",
  "头": "Kopf",
  "土": "Erde",
  "坯": "Leer",
  "笑": "lachen",
  "父": "Vater",
  "有": "haben",
  "些": "manche",
  "滴": "fallen",
  "一": "eins",
  "行": "OK",
  "说": "erklären",
  "我": "ICH",
  "不": "NEIN",
  "会": "treffen",
  "市": "Stadt",
  "怎": "Wie",
  "谓": "Gegenwärtig",
  "就": "Auf einmal",
  "那": "Das",
  "上": "Vorgesetzter",
  "造": "machen",
  "成": "werden",
  "砖": "Ziegel",
  "瓦": "Watt",
  "虽": "Obwohl",
  "已": "bereits",
  "形": "Form",
  "尚": "Trotzdem",
  "未": "Noch nicht",
  "经": "durch",
  "水": "Wasser",
  "火": "Feuer",
  "煅": "Fall",
  "炼": "Verfeinerung",
  "朝": "in Richtung",
  "大": "groß",
  "雨": "Regen",
  "滂": "Rushing",
  "沱": "Tuo",
  "他": "Er",
  "必": "muss",
  "滥": "Missbrauch",
  "矣": "Es ist in Ordnung",
  "远": "Weit",
  "学": "Studie",
  "动": "bewegen",
  "却": "Aber",
  "又": "wieder",
  "样": "Probe",
  "作": "Tun",
  "采": "Wählen",
  "阴": "Negativ",
  "补": "reparieren",
  "阳": "Positiv",
  "攀": "Aufstieg",
  "弓": "Bogen",
  "踏": "treten",
  "弩": "Armbrust",
  "摩": "MO",
  "脐": "Nabel",
  "过": "Passieren",
  "气": "Gas",
  "用": "verwenden",
  "方": "Quadrat",
  "炮": "Pistole",
  "制": "System",
  "烧": "brennen",
  "茅": "Mao",
  "鼎": "Stativ",
  "进": "Eingeben",
  "红": "Rot",
  "铅": "führen",
  "秋": "Herbst",
  "石": "Stein",
  "服": "Kleidung",
  "妇": "Frau",
  "乳": "Milch",
  "等": "Warten",
  "得": "müssen",
  "欲": "wollen",
  "亦": "sowie",
  "捞": "Fisch",
  "月": "Mond",
  "来": "Kommen",
  "了": "Es ist",
  "叫": "Anruf",
  "做": "Tun",
  "在": "existieren",
  "影": "Film",
  "然": "Natürlich",
  "看": "sehen",
  "见": "Sehen",
  "只": "Nur",
  "摸": "berühren",
  "处": "Wo",
  "到": "ankommen",
  "底": "Ende",
  "耳": "Ohr"
};

const translations_fr = {
  "祖": "Ancêtre",
  "师": "division",
  "道": "route",
  "教": "enseigner",
  "你": "toi",
  "静": "calme",
  "字": "Personnage",
  "门": "Porte",
  "中": "milieu",
  "之": "De",
  "如": "comme",
  "何": "quoi",
  "悟": "Éclaircissement",
  "空": "nul",
  "是": "Oui",
  "甚": "très",
  "正": "juste",
  "果": "fruit",
  "此": "ce",
  "休": "arrêt",
  "粮": "grain",
  "守": "Garde",
  "谷": "vallée",
  "清": "clair",
  "无": "aucun",
  "为": "pour",
  "参": "Ginseng",
  "禅": "Zen",
  "打": "battre",
  "坐": "s'asseoir",
  "戒": "Riz",
  "语": "langue",
  "持": "prise",
  "斋": "rapide",
  "或": "ou",
  "睡": "dormir",
  "功": "réalisation",
  "立": "rester",
  "并": "et",
  "入": "entrer",
  "定": "Certainement",
  "关": "fermer",
  "类": "gentil",
  "这": "ce",
  "般": "Normale",
  "也": "aussi",
  "能": "capable",
  "长": "long",
  "生": "né",
  "么": "Est-ce",
  "似": "comme",
  "窑": "four",
  "头": "tête",
  "土": "Terre",
  "坯": "Vide",
  "笑": "rire",
  "父": "père",
  "有": "avoir",
  "些": "quelques",
  "滴": "baisse",
  "一": "un",
  "行": "D'ACCORD",
  "说": "expliquer",
  "我": "je",
  "不": "Non",
  "会": "réunion",
  "市": "ville",
  "怎": "Comment",
  "谓": "Présent",
  "就": "Immédiatement",
  "那": "Que",
  "上": "supérieur",
  "造": "faire",
  "成": "devenir",
  "砖": "brique",
  "瓦": "watt",
  "虽": "bien que",
  "已": "déjà",
  "形": "forme",
  "尚": "toujours",
  "未": "pas encore",
  "经": "à travers",
  "水": "eau",
  "火": "feu",
  "煅": "Cas",
  "炼": "Raffinage",
  "朝": "vers",
  "大": "grand",
  "雨": "pluie",
  "滂": "se précipiter",
  "沱": "Tuo",
  "他": "il",
  "必": "doit",
  "滥": "Abus",
  "矣": "C'est bon",
  "远": "Loin",
  "学": "étude",
  "动": "se déplacer",
  "却": "mais",
  "又": "encore",
  "样": "Échantillon",
  "作": "faire",
  "采": "Prendre",
  "阴": "Négatif",
  "补": "réparation",
  "阳": "Positif",
  "攀": "grimper",
  "弓": "arc",
  "踏": "bande de roulement",
  "弩": "arbalète",
  "摩": "MO",
  "脐": "Nombril",
  "过": "Passer",
  "气": "gaz",
  "用": "utiliser",
  "方": "carré",
  "炮": "pistolet",
  "制": "système",
  "烧": "brûler",
  "茅": "Mao",
  "鼎": "trépied",
  "进": "Entrer",
  "红": "rouge",
  "铅": "plomb",
  "秋": "Automne",
  "石": "pierre",
  "服": "Vêtements",
  "妇": "femme",
  "乳": "lait",
  "等": "attendez",
  "得": "devoir",
  "欲": "vouloir",
  "亦": "ainsi que",
  "捞": "Poisson",
  "月": "lune",
  "来": "Viens",
  "了": "C'est",
  "叫": "Appel",
  "做": "Faire",
  "在": "exister",
  "影": "film",
  "然": "Bien sûr",
  "看": "regarder",
  "见": "Voir",
  "只": "Seulement",
  "摸": "touche",
  "处": "Où",
  "到": "arriver",
  "底": "fin",
  "耳": "Oreille"
};

const tianwen_translation_map_en = {
  "祖师道": "The Patriarch's Way",
  "教你": "Teach you",
  "静": "quiet",
  "字门中之道": "The Way in the Word",
  "如何": "how",
  "悟空道": "Wukong Tao",
  "静字门中": "The word \"jing\" is",
  "是甚正果": "What a true result",
  "祖师道": "The Patriarch's Way",
  "此是休粮": "This is food rest",
  "守谷": "Shungu",
  "清静无为": "Quiet and inaction",
  "参禅打坐": "Meditation",
  "戒语持斋": "Be a veterinary",
  "或睡功": "Or sleeping",
  "或立功": "Or make a contribution",
  "并入定坐关之类": "Incorporate into the sedentary and sedentary",
  "悟空道": "Wukong Tao",
  "这般也能长生么": "Can I live forever like this",
  "祖师道": "The Patriarch's Way",
  "也似": "Like",
  "窑头土坯": "Kiln head adobe",
  "悟空笑道": "Wukong said with a smile",
  "师父果有些滴": "Master's fruit is a bit",
  "一行说我不会打市语": "The company said I can't speak",
  "怎么谓之": "What does it mean",
  "窑头土坯": "Kiln head adobe",
  "祖师道": "The Patriarch's Way",
  "就如那窑头上": "Just like on the kiln",
  "造成砖瓦之坯": "Cause bricks and tiles",
  "虽已成形": "Although it has taken shape",
  "尚未经水火煅炼": "Not yet combusted by water and fire",
  "一朝大雨滂沱": "It rains heavily",
  "他必滥矣": "He will be abusive",
  "悟空道": "Wukong Tao",
  "也不长远": "Not long-term",
  "不学": "Don't learn",
  "不学": "Don't learn",
  "祖师道": "The Patriarch's Way",
  "教你": "Teach you",
  "动": "move",
  "字门中之道": "The Way in the Word",
  "如何": "how",
  "悟空道": "Wukong Tao",
  "动门之道": "The way to move the door",
  "却又怎样": "But so what",
  "祖师道": "The Patriarch's Way",
  "此是有为有作": "This is a matter of action and action",
  "采阴补阳": "Collect Yin and replenish Yang",
  "攀弓踏弩": "Climb the bow and step on the crossbow",
  "摩脐过气": "Flush the navel and ventilate",
  "用方炮制": "Prepared by prescription",
  "烧茅打鼎": "Burn the sapling",
  "进红铅": "Red lead",
  "炼秋石": "Refining autumn stones",
  "并服妇乳之类": "Take women's breasts and so on",
  "悟空道": "Wukong Tao",
  "似这等也得长生么": "Does this mean you will have immortality?",
  "祖师道": "The Patriarch's Way",
  "此欲长生": "This is forever",
  "亦如": "Like",
  "水中捞月": "Fishing the moon in the water",
  "悟空道": "Wukong Tao",
  "师父又来了": "Master is here again",
  "怎么叫做": "What is called",
  "水中捞月": "Fishing the moon in the water",
  "祖师道": "The Patriarch's Way",
  "月在长空": "The moon is in the sky",
  "水中有影": "There is shadow in the water",
  "虽然看见": "Although I saw it",
  "只是无捞摸处": "Just no touch",
  "到底只成空耳": "In the end, it's just empty",
  "悟空道": "Wukong Tao",
  "也不学": "Don't learn",
  "不学": "Don't learn"
};

const tianwen_translation_map_de = {
  "祖师道": "Der Weg des Patriarchen",
  "教你": "Lehre dich",
  "静": "ruhig",
  "字门中之道": "Der Weg im Wort",
  "如何": "Wie",
  "悟空道": "Wukong Tao",
  "静字门中": "Das Wort \"Jing\" ist",
  "是甚正果": "Was für ein wahres Ergebnis",
  "祖师道": "Der Weg des Patriarchen",
  "此是休粮": "Das ist Lebensmittelruhe",
  "守谷": "Shungu",
  "清静无为": "Ruhig und untätig",
  "参禅打坐": "Meditation",
  "戒语持斋": "Ein Tierarzt sein",
  "或睡功": "Oder schlafen",
  "或立功": "Oder einen Beitrag leisten",
  "并入定坐关之类": "In den sitzenden und sitzenden Einbau einbauen",
  "悟空道": "Wukong Tao",
  "这般也能长生么": "Kann ich für immer so leben?",
  "祖师道": "Der Weg des Patriarchen",
  "也似": "Wie",
  "窑头土坯": "Ofenkopf -Adobe",
  "悟空笑道": "Sagte Wukong mit einem Lächeln",
  "师父果有些滴": "Masterfrucht ist ein bisschen",
  "一行说我不会打市语": "Die Firma sagte, ich kann nicht sprechen",
  "怎么谓之": "Was bedeutet es",
  "窑头土坯": "Ofenkopf -Adobe",
  "祖师道": "Der Weg des Patriarchen",
  "就如那窑头上": "Genau wie am Ofen",
  "造成砖瓦之坯": "Ziegel und Fliesen verursachen",
  "虽已成形": "Obwohl es Gestalt angenommen hat",
  "尚未经水火煅炼": "Noch nicht durch Wasser und Feuer verblüfft",
  "一朝大雨滂沱": "Es regnet stark",
  "他必滥矣": "Er wird missbräuchlich sein",
  "悟空道": "Wukong Tao",
  "也不长远": "Nicht langfristig",
  "不学": "Lerne nicht",
  "不学": "Lerne nicht",
  "祖师道": "Der Weg des Patriarchen",
  "教你": "Lehre dich",
  "动": "bewegen",
  "字门中之道": "Der Weg im Wort",
  "如何": "Wie",
  "悟空道": "Wukong Tao",
  "动门之道": "Der Weg, um die Tür zu bewegen",
  "却又怎样": "Aber was",
  "祖师道": "Der Weg des Patriarchen",
  "此是有为有作": "Dies ist eine Frage des Handelns und des Handelns",
  "采阴补阳": "Sammeln Sie Yin und füllen Sie Yang auf",
  "攀弓踏弩": "Klettere den Bogen und treten Sie auf die Armbrust",
  "摩脐过气": "Den Nabel spülen und lüften",
  "用方炮制": "Durch Rezept hergestellt",
  "烧茅打鼎": "Brennen Sie den Schläler",
  "进红铅": "Rote Blei",
  "炼秋石": "Herbststeine ​​verfeinern",
  "并服妇乳之类": "Nehmen Sie Frauen Brüste und so weiter",
  "悟空道": "Wukong Tao",
  "似这等也得长生么": "Bedeutet das, dass Sie Unsterblichkeit haben werden?",
  "祖师道": "Der Weg des Patriarchen",
  "此欲长生": "Das ist für immer",
  "亦如": "Wie",
  "水中捞月": "Fischen des Mondes im Wasser",
  "悟空道": "Wukong Tao",
  "师父又来了": "Der Meister ist wieder hier",
  "怎么叫做": "Was heißt",
  "水中捞月": "Fischen des Mondes im Wasser",
  "祖师道": "Der Weg des Patriarchen",
  "月在长空": "Der Mond ist am Himmel",
  "水中有影": "Es gibt Schatten im Wasser",
  "虽然看见": "Obwohl ich es gesehen habe",
  "只是无捞摸处": "Nur keine Berührung",
  "到底只成空耳": "Am Ende ist es einfach leer",
  "悟空道": "Wukong Tao",
  "也不学": "Lerne nicht",
  "不学": "Lerne nicht"
};

const tianwen_translation_map_fr = {
  "祖师道": "La voie du patriarche",
  "教你": "Vous apprendre",
  "静": "calme",
  "字门中之道": "Le chemin dans le mot",
  "如何": "comment",
  "悟空道": "Wukong Tao",
  "静字门中": "Le mot \"jing\" est",
  "是甚正果": "Quel vrai résultat",
  "祖师道": "La voie du patriarche",
  "此是休粮": "C'est le repos de la nourriture",
  "守谷": "Shungu",
  "清静无为": "Calme et inaction",
  "参禅打坐": "Méditation",
  "戒语持斋": "Être un vétérinaire",
  "或睡功": "Ou dormir",
  "或立功": "Ou apporter une contribution",
  "并入定坐关之类": "Incorporer dans le sédentaire et le sédentaire",
  "悟空道": "Wukong Tao",
  "这般也能长生么": "Puis-je vivre pour toujours comme ça",
  "祖师道": "La voie du patriarche",
  "也似": "Comme",
  "窑头土坯": "Kiln Head Adobe",
  "悟空笑道": "Wukong a dit avec un sourire",
  "师父果有些滴": "Le fruit du maître est un peu",
  "一行说我不会打市语": "La société a dit que je ne pouvais pas parler",
  "怎么谓之": "Qu'est-ce que ça veut dire",
  "窑头土坯": "Kiln Head Adobe",
  "祖师道": "La voie du patriarche",
  "就如那窑头上": "Comme sur le four",
  "造成砖瓦之坯": "Cause des briques et des carreaux",
  "虽已成形": "Bien qu'il ait pris forme",
  "尚未经水火煅炼": "Pas encore brûlé par l'eau et le feu",
  "一朝大雨滂沱": "Il pleut fortement",
  "他必滥矣": "Il sera abusif",
  "悟空道": "Wukong Tao",
  "也不长远": "Pas à long terme",
  "不学": "N'apprends pas",
  "不学": "N'apprends pas",
  "祖师道": "La voie du patriarche",
  "教你": "Vous apprendre",
  "动": "se déplacer",
  "字门中之道": "Le chemin dans le mot",
  "如何": "comment",
  "悟空道": "Wukong Tao",
  "动门之道": "La façon de déplacer la porte",
  "却又怎样": "Mais alors quoi",
  "祖师道": "La voie du patriarche",
  "此是有为有作": "C'est une question d'action et d'action",
  "采阴补阳": "Collectez le yin et reconstituez le yang",
  "攀弓踏弩": "Montez l'arc et marchez sur l'arbalète",
  "摩脐过气": "Rincer le nombril et ventiler",
  "用方炮制": "Préparé par ordonnance",
  "烧茅打鼎": "Brûler",
  "进红铅": "Avance rouge",
  "炼秋石": "Raffiner les pierres d'automne",
  "并服妇乳之类": "Prendre les seins des femmes et ainsi de suite",
  "悟空道": "Wukong Tao",
  "似这等也得长生么": "Cela signifie-t-il que vous aurez l'immortalité?",
  "祖师道": "La voie du patriarche",
  "此欲长生": "C'est pour toujours",
  "亦如": "Comme",
  "水中捞月": "Pêcher la lune dans l'eau",
  "悟空道": "Wukong Tao",
  "师父又来了": "Maître est encore là",
  "怎么叫做": "Comment s'appelle",
  "水中捞月": "Pêcher la lune dans l'eau",
  "祖师道": "La voie du patriarche",
  "月在长空": "La lune est dans le ciel",
  "水中有影": "Il y a de l'ombre dans l'eau",
  "虽然看见": "Bien que je l'ai vu",
  "只是无捞摸处": "Juste pas de contact",
  "到底只成空耳": "En fin de compte, c'est juste vide",
  "悟空道": "Wukong Tao",
  "也不学": "N'apprends pas",
  "不学": "N'apprends pas"
};

const synth = window.speechSynthesis;
let utterance = null;

// 状态跟踪
const charStates = {};

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", function () {
  renderPoem();
});

// 渲染诗歌
function renderPoem() {
  const poemContainer = document.getElementById("poemContainer");
  const lines = poemText.split("\n");

  lines.forEach((line) => {
    const lineDiv = document.createElement("div");
    lineDiv.className = "poem-line";

    // 处理每个字符
    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      // 跳过空格
      if (char.trim() === "") {
        const spaceSpan = document.createElement("span");
        spaceSpan.textContent = " ";
        lineDiv.appendChild(spaceSpan);
        continue;
      }

      // 创建字符容器
      const charContainer = document.createElement("div");
      charContainer.className = "char-container";

      // 创建字符显示
      const charSpan = document.createElement("span");
      charSpan.className = "char";
      charSpan.textContent = char;

      // 创建拼音显示
      const pinyinSpan = document.createElement("span");
      pinyinSpan.className = "pinyin";

      // 创建翻译显示
      const transSpan = document.createElement("span");
      transSpan.className = "translation";

      // 添加到容器
      charContainer.appendChild(pinyinSpan);
      charContainer.appendChild(charSpan);
      charContainer.appendChild(transSpan);

      // 添加点击事件
      charContainer.addEventListener("click", () =>
        handleCharClick(char, pinyinSpan, transSpan)
      );

      // 添加到行
      lineDiv.appendChild(charContainer);
    }

    // 添加行控制按钮
    const controlsDiv = document.createElement("div");
    controlsDiv.className = "line-controls";

    const readBtn = document.createElement("button");
    readBtn.textContent = "朗读";
    readBtn.addEventListener("click", () => readLine(line));

    const transBtn = document.createElement("button");
    transBtn.textContent = "翻译";
    transBtn.addEventListener("click", () => showLineTranslation(line));

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

  const py = pinyinMap[char] || "?";
  pinyinSpan.textContent = py;
  pinyinSpan.style.display = "block";

  // 3秒后自动隐藏
  setTimeout(() => {
    pinyinSpan.style.display = "none";
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
  utterance.lang = "zh-CN";
  utterance.rate = 0.7; // 设置为正常速度的70%
  synth.speak(utterance);
}

// 显示翻译
function showTranslation(char, transSpan) {
  const lang = document.getElementById("languageSelect").value;

  const translationCard = document.getElementById("translationCard");

  const translateMap = {
    de: translations_de[char] || "Keine Übersetzung",
    fr: translations_fr[char] || "Pas de traduction",
    en: translations_en[char] || "No translation",
  };
  const translate = translateMap[lang];
  translationCard.innerHTML = `
  <div class="card-header">
    <button class="close-btn" onclick="closeTranslationCard()">×</button>
  </div>
  <div class="info-block">
    <div class="info-label">汉字：</div>
    <div class="info-content">${char}</div>
    <div class="info-label">翻译：</div>
    <div class="info-content">${translate}</div>
  </div>
`;

  translationCard.style.display = "block";

  const charId = `${char}-${transSpan.id}`;
  charStates[charId] = 0;
}

function closeTranslationCard() {
  const translationCard = document.getElementById("translationCard");
  translationCard.style.display = "none";
}

// 朗读整行
function readLine(line) {
  if (synth.speaking) {
    synth.cancel();
  }

  utterance = new SpeechSynthesisUtterance(line);
  utterance.lang = "zh-CN";
  utterance.rate = 0.6; // 设置为正常速度的60%，更慢一些
  synth.speak(utterance);

  updateStatus(`朗读: ${line}`);
}

function showLineTranslation(line) {
  const lang = document.getElementById("languageSelect").value;
  const translatedMap = {
    de: tianwen_translation_map_de,
    fr: tianwen_translation_map_fr,
    en: tianwen_translation_map_en,
  };
  const translatedLine =
    translatedMap[lang]?.[line] || "（keine Übersetzung gefunden）";
  const translationCard = document.getElementById("translationCard");

  translationCard.innerHTML = `
  <div class="card-header">
    <button class="close-btn" onclick="closeTranslationCard()">×</button>
  </div>
  <div class="info-block">
    <div class="info-label">原文：</div>
    <div class="info-content">${line}</div>
    <div class="info-label">翻译：</div>
    <div class="info-content">${translatedLine}</div>
  </div>
`;

  translationCard.style.display = "block";

  updateStatus(`显示翻译: ${line.substring(0, 15)}...`);
}

// 更新状态栏
function updateStatus(message) {
  document.getElementById("statusBar").textContent = message;
}
