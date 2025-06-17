const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `祖师闻言
咄的一声
跳下高台
手持戒尺
指定悟空道
你这猢狲
这般不学
那般不学
却待怎么
走上前
将悟空头上打了三下
倒背着手
走入里面
将中门关了
撇下大众而去
唬得那一班听讲的
人人惊惧
皆怨悟空道
你这泼猴
十分无状
师父传你道法
如何不学
却与师父顶嘴
这番冲撞了他
不知几时才出来呵
此时俱甚报怨他
又鄙贱嫌恶他
悟空一些儿也不恼
只是满脸陪笑
原来那猴王
已打破盘中之谜
暗暗在心
所以不与众人争竞
只是忍耐无言
祖师打他三下者
教他三更时分存心
倒背着手
走入里面
将中门关上者
教他从后门进步
秘处传他道也
当日悟空与众等
喜喜欢欢
在三星仙洞之前
盼望天色
急不能到晚
及黄昏时
却与众就寝
假合眼
定息存神
山中又没支更传箭
不知时分
只自家将鼻孔中出入之气调定
约到子时前后
轻轻的起来
穿了衣服
偷开前门
躲离大众
走出外
抬头观看
正是那
月明清露冷
八极迥无尘
深树幽禽宿
源头水溜汾
飞萤光散影
过雁字排云
正直三更候
应该访道真`;

const pinyinMap = {
  "祖": "zǔ",
  "师": "shī",
  "闻": "wén",
  "言": "yán",
  "咄": "duō",
  "的": "de",
  "一": "yī",
  "声": "shēng",
  "跳": "tiào",
  "下": "xià",
  "高": "gāo",
  "台": "tái",
  "手": "shǒu",
  "持": "chí",
  "戒": "jiè",
  "尺": "chǐ",
  "指": "zhǐ",
  "定": "dìng",
  "悟": "wù",
  "空": "kōng",
  "道": "dào",
  "你": "nǐ",
  "这": "zhè",
  "猢": "hú",
  "狲": "sūn",
  "般": "bān",
  "不": "bù",
  "学": "xué",
  "那": "nà",
  "却": "què",
  "待": "dài",
  "怎": "zěn",
  "么": "me",
  "走": "zǒu",
  "上": "shàng",
  "前": "qián",
  "将": "jiāng",
  "头": "tóu",
  "打": "dǎ",
  "了": "le",
  "三": "sān",
  "倒": "dào",
  "背": "bèi",
  "着": "zhe",
  "入": "rù",
  "里": "lǐ",
  "面": "miàn",
  "中": "zhōng",
  "门": "mén",
  "关": "guān",
  "撇": "piē",
  "大": "dà",
  "众": "zhòng",
  "而": "ér",
  "去": "qù",
  "唬": "hǔ",
  "得": "dé",
  "班": "bān",
  "听": "tīng",
  "讲": "jiǎng",
  "人": "rén",
  "惊": "jīng",
  "惧": "jù",
  "皆": "jiē",
  "怨": "yuàn",
  "泼": "pō",
  "猴": "hóu",
  "十": "shí",
  "分": "fēn",
  "无": "wú",
  "状": "zhuàng",
  "父": "fù",
  "传": "chuán",
  "法": "fǎ",
  "如": "rú",
  "何": "hé",
  "与": "yǔ",
  "顶": "dǐng",
  "嘴": "zuǐ",
  "番": "fān",
  "冲": "chōng",
  "撞": "zhuàng",
  "他": "tā",
  "知": "zhī",
  "几": "jǐ",
  "时": "shí",
  "才": "cái",
  "出": "chū",
  "来": "lái",
  "呵": "hē",
  "此": "cǐ",
  "俱": "jù",
  "甚": "shèn",
  "报": "bào",
  "又": "yòu",
  "鄙": "bǐ",
  "贱": "jiàn",
  "嫌": "xián",
  "恶": "wù",
  "些": "xiē",
  "儿": "ér",
  "也": "yě",
  "恼": "nǎo",
  "只": "zhǐ",
  "是": "shì",
  "满": "mǎn",
  "脸": "liǎn",
  "陪": "péi",
  "笑": "xiào",
  "原": "yuán",
  "王": "wáng",
  "已": "yǐ",
  "破": "pò",
  "盘": "pán",
  "之": "zhī",
  "谜": "mí",
  "暗": "àn",
  "在": "zài",
  "心": "xīn",
  "所": "suǒ",
  "以": "yǐ",
  "争": "zhēng",
  "竞": "jìng",
  "忍": "rěn",
  "耐": "nài",
  "者": "zhě",
  "教": "jiào",
  "更": "gèng",
  "存": "cún",
  "从": "cóng",
  "后": "hòu",
  "进": "jìn",
  "步": "bù",
  "秘": "mì",
  "处": "chù",
  "当": "dāng",
  "日": "rì",
  "等": "děng",
  "喜": "xǐ",
  "欢": "huān",
  "星": "xīng",
  "仙": "xiān",
  "洞": "dòng",
  "盼": "pàn",
  "望": "wàng",
  "天": "tiān",
  "色": "sè",
  "急": "jí",
  "能": "néng",
  "到": "dào",
  "晚": "wǎn",
  "及": "jí",
  "黄": "huáng",
  "昏": "hūn",
  "就": "jiù",
  "寝": "qǐn",
  "假": "jiǎ",
  "合": "hé",
  "眼": "yǎn",
  "息": "xī",
  "神": "shén",
  "山": "shān",
  "没": "méi",
  "支": "zhī",
  "箭": "jiàn",
  "自": "zì",
  "家": "jiā",
  "鼻": "bí",
  "孔": "kǒng",
  "气": "qì",
  "调": "diào",
  "约": "yuē",
  "子": "zi",
  "轻": "qīng",
  "起": "qǐ",
  "穿": "chuān",
  "衣": "yī",
  "服": "fú",
  "偷": "tōu",
  "开": "kāi",
  "躲": "duǒ",
  "离": "lí",
  "外": "wài",
  "抬": "tái",
  "观": "guān",
  "看": "kàn",
  "正": "zhēng",
  "月": "yuè",
  "明": "míng",
  "清": "qīng",
  "露": "lù",
  "冷": "lěng",
  "八": "bā",
  "极": "jí",
  "迥": "jiǒng",
  "尘": "chén",
  "深": "shēn",
  "树": "shù",
  "幽": "yōu",
  "禽": "qín",
  "宿": "sù",
  "源": "yuán",
  "水": "shuǐ",
  "溜": "liù",
  "汾": "fén",
  "飞": "fēi",
  "萤": "yíng",
  "光": "guāng",
  "散": "sàn",
  "影": "yǐng",
  "过": "guò",
  "雁": "yàn",
  "字": "zì",
  "排": "pái",
  "云": "yún",
  "直": "zhí",
  "候": "hòu",
  "应": "yīng",
  "该": "gāi",
  "访": "fǎng",
  "真": "zhēn"
};

const translations_en = {
  "祖": "Ancestor",
  "师": "division",
  "闻": "smell",
  "言": "Word",
  "咄": "Duh",
  "的": "of",
  "一": "one",
  "声": "Voice",
  "跳": "Jump",
  "下": "Down",
  "高": "high",
  "台": "tower",
  "手": "hand",
  "持": "hold",
  "戒": "Rice",
  "尺": "ruler",
  "指": "refer to",
  "定": "Certainly",
  "悟": "Enlightenment",
  "空": "null",
  "道": "road",
  "你": "you",
  "这": "this",
  "猢": "Money",
  "狲": "可",
  "般": "Normal",
  "不": "No",
  "学": "study",
  "那": "That",
  "却": "but",
  "待": "treat",
  "怎": "How",
  "么": "Is it",
  "走": "Walk",
  "上": "superior",
  "前": "forward",
  "将": "Will",
  "头": "head",
  "打": "beat",
  "了": "It's",
  "三": "three",
  "倒": "fall",
  "背": "back",
  "着": "Put",
  "入": "enter",
  "里": "inside",
  "面": "noodle",
  "中": "middle",
  "门": "Door",
  "关": "close",
  "撇": "Skip",
  "大": "big",
  "众": "All",
  "而": "and",
  "去": "go",
  "唬": "fool",
  "得": "have to",
  "班": "class",
  "听": "listen",
  "讲": "speak",
  "人": "people",
  "惊": "shock",
  "惧": "fear",
  "皆": "all",
  "怨": "blame",
  "泼": "splash",
  "猴": "monkey",
  "十": "ten",
  "分": "point",
  "无": "none",
  "状": "shape",
  "父": "father",
  "传": "pass",
  "法": "Law",
  "如": "like",
  "何": "what",
  "与": "and",
  "顶": "top",
  "嘴": "Mouth",
  "番": "Anime",
  "冲": "rush",
  "撞": "Collide",
  "他": "he",
  "知": "Know",
  "几": "Several",
  "时": "hour",
  "才": "talent",
  "出": "out",
  "来": "Come",
  "呵": "Oh",
  "此": "this",
  "俱": "all",
  "甚": "very",
  "报": "Report",
  "又": "again",
  "鄙": "rustic",
  "贱": "cheap",
  "嫌": "Dislike",
  "恶": "evil",
  "些": "some",
  "儿": "Son",
  "也": "also",
  "恼": "angry",
  "只": "Only",
  "是": "yes",
  "满": "Full",
  "脸": "Face",
  "陪": "accompany",
  "笑": "laugh",
  "原": "Original",
  "王": "king",
  "已": "already",
  "破": "break",
  "盘": "plate",
  "之": "Of",
  "谜": "puzzle",
  "暗": "dark",
  "在": "exist",
  "心": "Heart",
  "所": "Place",
  "以": "by",
  "争": "Contend",
  "竞": "Competition",
  "忍": "Tolerate",
  "耐": "Persistence",
  "者": "Those",
  "教": "teach",
  "更": "Even",
  "存": "live",
  "从": "from",
  "后": "back",
  "进": "Enter",
  "步": "step",
  "秘": "secret",
  "处": "Where",
  "当": "when",
  "日": "day",
  "等": "wait",
  "喜": "happiness",
  "欢": "joyous",
  "星": "star",
  "仙": "Fairy",
  "洞": "Hole",
  "盼": "Looking forward to",
  "望": "see",
  "天": "sky",
  "色": "color",
  "急": "urgent",
  "能": "able",
  "到": "arrive",
  "晚": "Night",
  "及": "and",
  "黄": "yellow",
  "昏": "faint",
  "就": "At once",
  "寝": "sleep",
  "假": "Fake",
  "合": "combine",
  "眼": "Eye",
  "息": "interest",
  "神": "god",
  "山": "Mountain",
  "没": "without",
  "支": "branch",
  "箭": "arrow",
  "自": "since",
  "家": "Home",
  "鼻": "nose",
  "孔": "hole",
  "气": "gas",
  "调": "Adjust",
  "约": "about",
  "子": "son",
  "轻": "light",
  "起": "rise",
  "穿": "wear",
  "衣": "Clothes",
  "服": "Clothes",
  "偷": "steal",
  "开": "open",
  "躲": "hide",
  "离": "Leave",
  "外": "outside",
  "抬": "lift",
  "观": "View",
  "看": "look",
  "正": "just",
  "月": "moon",
  "明": "bright",
  "清": "clear",
  "露": "dew",
  "冷": "cold",
  "八": "eight",
  "极": "pole",
  "迥": "Very",
  "尘": "dust",
  "深": "deep",
  "树": "Tree",
  "幽": "quiet",
  "禽": "birds",
  "宿": "Stay",
  "源": "source",
  "水": "water",
  "溜": "slip",
  "汾": "Fen",
  "飞": "fly",
  "萤": "firefly",
  "光": "Light",
  "散": "Scattered",
  "影": "film",
  "过": "Pass",
  "雁": "Goose",
  "字": "Character",
  "排": "Row",
  "云": "cloud",
  "直": "straight",
  "候": "Wait",
  "应": "answer",
  "该": "Should",
  "访": "visit",
  "真": "real"
};

const translations_de = {
  "祖": "Vorfahr",
  "师": "Division",
  "闻": "Geruch",
  "言": "Wort",
  "咄": "Duh",
  "的": "von",
  "一": "eins",
  "声": "Stimme",
  "跳": "Springen",
  "下": "Runter",
  "高": "hoch",
  "台": "Turm",
  "手": "Hand",
  "持": "halten",
  "戒": "Reis",
  "尺": "Herrscher",
  "指": "beziehen sich auf",
  "定": "Sicherlich",
  "悟": "Aufklärung",
  "空": "NULL",
  "道": "Straße",
  "你": "Du",
  "这": "Das",
  "猢": "Geld",
  "狲": "可",
  "般": "Normal",
  "不": "NEIN",
  "学": "Studie",
  "那": "Das",
  "却": "Aber",
  "待": "behandeln",
  "怎": "Wie",
  "么": "Ist es",
  "走": "Gehen",
  "上": "Vorgesetzter",
  "前": "nach vorne",
  "将": "Wille",
  "头": "Kopf",
  "打": "schlagen",
  "了": "Es ist",
  "三": "drei",
  "倒": "fallen",
  "背": "zurück",
  "着": "Setzen",
  "入": "eingeben",
  "里": "innen",
  "面": "Nudel",
  "中": "Mitte",
  "门": "Tür",
  "关": "schließen",
  "撇": "Überspringen",
  "大": "groß",
  "众": "Alle",
  "而": "Und",
  "去": "gehen",
  "唬": "Narr",
  "得": "müssen",
  "班": "Klasse",
  "听": "Hören",
  "讲": "sprechen",
  "人": "Menschen",
  "惊": "Schock",
  "惧": "Furcht",
  "皆": "alle",
  "怨": "beschuldigen",
  "泼": "Spritzen",
  "猴": "Affe",
  "十": "zehn",
  "分": "Punkt",
  "无": "keiner",
  "状": "Form",
  "父": "Vater",
  "传": "passieren",
  "法": "Gesetz",
  "如": "wie",
  "何": "Was",
  "与": "Und",
  "顶": "Spitze",
  "嘴": "Mund",
  "番": "Anime",
  "冲": "eilen",
  "撞": "Kollidieren",
  "他": "Er",
  "知": "Wissen",
  "几": "Mehrere",
  "时": "Stunde",
  "才": "Talent",
  "出": "aus",
  "来": "Kommen",
  "呵": "Oh",
  "此": "Das",
  "俱": "alle",
  "甚": "sehr",
  "报": "Bericht",
  "又": "wieder",
  "鄙": "rustikal",
  "贱": "billig",
  "嫌": "Abneigung",
  "恶": "teuflisch",
  "些": "manche",
  "儿": "Sohn",
  "也": "Auch",
  "恼": "wütend",
  "只": "Nur",
  "是": "Ja",
  "满": "Voll",
  "脸": "Gesicht",
  "陪": "begleiten",
  "笑": "lachen",
  "原": "Original",
  "王": "König",
  "已": "bereits",
  "破": "brechen",
  "盘": "Platte",
  "之": "Von",
  "谜": "Puzzle",
  "暗": "dunkel",
  "在": "existieren",
  "心": "Herz",
  "所": "Ort",
  "以": "von",
  "争": "Kämpfen",
  "竞": "Wettbewerb",
  "忍": "Tolerieren",
  "耐": "Ausdauer",
  "者": "Diese",
  "教": "unterrichten",
  "更": "Sogar",
  "存": "live",
  "从": "aus",
  "后": "zurück",
  "进": "Eingeben",
  "步": "Schritt",
  "秘": "Geheimnis",
  "处": "Wo",
  "当": "Wann",
  "日": "Tag",
  "等": "Warten",
  "喜": "Glück",
  "欢": "freudig",
  "星": "Stern",
  "仙": "Fee",
  "洞": "Loch",
  "盼": "Ich freue mich darauf",
  "望": "sehen",
  "天": "Himmel",
  "色": "Farbe",
  "急": "dringend",
  "能": "fähig",
  "到": "ankommen",
  "晚": "Nacht",
  "及": "Und",
  "黄": "Gelb",
  "昏": "schwach",
  "就": "Auf einmal",
  "寝": "schlafen",
  "假": "Gefälscht",
  "合": "kombinieren",
  "眼": "Auge",
  "息": "Interesse",
  "神": "Gott",
  "山": "Berg",
  "没": "ohne",
  "支": "Zweig",
  "箭": "Pfeil",
  "自": "seit",
  "家": "Heim",
  "鼻": "Nase",
  "孔": "Loch",
  "气": "Gas",
  "调": "Anpassen",
  "约": "um",
  "子": "Sohn",
  "轻": "Licht",
  "起": "erheben",
  "穿": "tragen",
  "衣": "Kleidung",
  "服": "Kleidung",
  "偷": "stehlen",
  "开": "offen",
  "躲": "verstecken",
  "离": "Verlassen",
  "外": "draußen",
  "抬": "Aufzug",
  "观": "Sicht",
  "看": "sehen",
  "正": "Nur",
  "月": "Mond",
  "明": "hell",
  "清": "klar",
  "露": "Tau",
  "冷": "kalt",
  "八": "acht",
  "极": "Pole",
  "迥": "Sehr",
  "尘": "Staub",
  "深": "tief",
  "树": "Baum",
  "幽": "ruhig",
  "禽": "Vögel",
  "宿": "Bleiben",
  "源": "Quelle",
  "水": "Wasser",
  "溜": "Beleg",
  "汾": "Fen",
  "飞": "fliegen",
  "萤": "Firefly",
  "光": "Licht",
  "散": "Verstreut",
  "影": "Film",
  "过": "Passieren",
  "雁": "Gans",
  "字": "Charakter",
  "排": "Reihe",
  "云": "Wolke",
  "直": "gerade",
  "候": "Warten",
  "应": "Antwort",
  "该": "Sollen",
  "访": "besuchen",
  "真": "real"
};

const translations_fr = {
  "祖": "Ancêtre",
  "师": "division",
  "闻": "odeur",
  "言": "Mot",
  "咄": "Duh",
  "的": "de",
  "一": "un",
  "声": "Voix",
  "跳": "Saut",
  "下": "Vers le bas",
  "高": "haut",
  "台": "tour",
  "手": "main",
  "持": "prise",
  "戒": "Riz",
  "尺": "règle",
  "指": "se référer à",
  "定": "Certainement",
  "悟": "Éclaircissement",
  "空": "nul",
  "道": "route",
  "你": "toi",
  "这": "ce",
  "猢": "Argent",
  "狲": "可",
  "般": "Normale",
  "不": "Non",
  "学": "étude",
  "那": "Que",
  "却": "mais",
  "待": "traiter",
  "怎": "Comment",
  "么": "Est-ce",
  "走": "Marcher",
  "上": "supérieur",
  "前": "avant",
  "将": "Volonté",
  "头": "tête",
  "打": "battre",
  "了": "C'est",
  "三": "trois",
  "倒": "automne",
  "背": "dos",
  "着": "Mettre",
  "入": "entrer",
  "里": "à l'intérieur",
  "面": "nouille",
  "中": "milieu",
  "门": "Porte",
  "关": "fermer",
  "撇": "Sauter",
  "大": "grand",
  "众": "Tous",
  "而": "et",
  "去": "aller",
  "唬": "idiot",
  "得": "devoir",
  "班": "classe",
  "听": "écouter",
  "讲": "parler",
  "人": "personnes",
  "惊": "choc",
  "惧": "peur",
  "皆": "tous",
  "怨": "blâmer",
  "泼": "éclabousser",
  "猴": "singe",
  "十": "dix",
  "分": "indiquer",
  "无": "aucun",
  "状": "forme",
  "父": "père",
  "传": "passer",
  "法": "Loi",
  "如": "comme",
  "何": "quoi",
  "与": "et",
  "顶": "haut",
  "嘴": "Bouche",
  "番": "Anime",
  "冲": "se précipiter",
  "撞": "Entrer en collision",
  "他": "il",
  "知": "Savoir",
  "几": "Plusieurs",
  "时": "heure",
  "才": "talent",
  "出": "dehors",
  "来": "Viens",
  "呵": "Oh",
  "此": "ce",
  "俱": "tous",
  "甚": "très",
  "报": "Rapport",
  "又": "encore",
  "鄙": "rustique",
  "贱": "bon marché",
  "嫌": "Aversion",
  "恶": "mal",
  "些": "quelques",
  "儿": "Fils",
  "也": "aussi",
  "恼": "en colère",
  "只": "Seulement",
  "是": "Oui",
  "满": "Complet",
  "脸": "Affronter",
  "陪": "accompagner",
  "笑": "rire",
  "原": "Original",
  "王": "roi",
  "已": "déjà",
  "破": "casser",
  "盘": "plaque",
  "之": "De",
  "谜": "puzzle",
  "暗": "sombre",
  "在": "exister",
  "心": "Cœur",
  "所": "Lieu",
  "以": "par",
  "争": "Combattre",
  "竞": "Concours",
  "忍": "Tolérer",
  "耐": "Persistance",
  "者": "Ceux",
  "教": "enseigner",
  "更": "Même",
  "存": "en direct",
  "从": "depuis",
  "后": "dos",
  "进": "Entrer",
  "步": "étape",
  "秘": "secrète",
  "处": "Où",
  "当": "quand",
  "日": "jour",
  "等": "attendez",
  "喜": "bonheur",
  "欢": "joyeux",
  "星": "étoile",
  "仙": "Fée",
  "洞": "Trou",
  "盼": "Dans l'attente de",
  "望": "voir",
  "天": "ciel",
  "色": "couleur",
  "急": "urgent",
  "能": "capable",
  "到": "arriver",
  "晚": "Nuit",
  "及": "et",
  "黄": "jaune",
  "昏": "s'évanouir",
  "就": "Immédiatement",
  "寝": "dormir",
  "假": "Faux",
  "合": "combiner",
  "眼": "Œil",
  "息": "intérêt",
  "神": "Dieu",
  "山": "Montagne",
  "没": "sans",
  "支": "bifurquer",
  "箭": "flèche",
  "自": "depuis",
  "家": "Maison",
  "鼻": "nez",
  "孔": "trou",
  "气": "gaz",
  "调": "Ajuster",
  "约": "à propos",
  "子": "fils",
  "轻": "lumière",
  "起": "augmenter",
  "穿": "porter",
  "衣": "Vêtements",
  "服": "Vêtements",
  "偷": "voler",
  "开": "ouvrir",
  "躲": "cacher",
  "离": "Partir",
  "外": "dehors",
  "抬": "ascenseur",
  "观": "Voir",
  "看": "regarder",
  "正": "juste",
  "月": "lune",
  "明": "brillant",
  "清": "clair",
  "露": "rosée",
  "冷": "froid",
  "八": "huit",
  "极": "pôle",
  "迥": "Très",
  "尘": "poussière",
  "深": "profond",
  "树": "Arbre",
  "幽": "calme",
  "禽": "oiseaux",
  "宿": "Rester",
  "源": "source",
  "水": "eau",
  "溜": "glisser",
  "汾": "Marais",
  "飞": "voler",
  "萤": "luciole",
  "光": "Lumière",
  "散": "Dispersé",
  "影": "film",
  "过": "Passer",
  "雁": "Oie",
  "字": "Personnage",
  "排": "Rangée",
  "云": "nuage",
  "直": "droit",
  "候": "Attendez",
  "应": "répondre",
  "该": "Devrait",
  "访": "visite",
  "真": "réel"
};

const tianwen_translation_map_en = {
  "祖师闻言": "The ancestor heard",
  "咄的一声": "A dumb sound",
  "跳下高台": "Jump off the platform",
  "手持戒尺": "Holding a ruler in hand",
  "指定悟空道": "Designated Wukong Dao",
  "你这猢狲": "Your money",
  "这般不学": "Don't learn this way",
  "那般不学": "Don't learn that way",
  "却待怎么": "But what to wait",
  "走上前": "Go forward",
  "将悟空头上打了三下": "He hit Goku on the head three times",
  "倒背着手": "Put your hands on your back",
  "走入里面": "Walk inside",
  "将中门关了": "Close the gate",
  "撇下大众而去": "Leave the public behind",
  "唬得那一班听讲的": "That group of people listened to",
  "人人惊惧": "Everyone is frightened",
  "皆怨悟空道": "All resentful to Wukong's way",
  "你这泼猴": "You're a monkey",
  "十分无状": "Very rude",
  "师父传你道法": "Master teaches you the Tao",
  "如何不学": "How to not learn",
  "却与师父顶嘴": "But he talked to the master",
  "这番冲撞了他": "This hit him",
  "不知几时才出来呵": "I don't know when it will come out",
  "此时俱甚报怨他": "All of them complained about him at this time",
  "又鄙贱嫌恶他": "Despise him and hate him",
  "悟空一些儿也不恼": "Wukong is not annoyed",
  "只是满脸陪笑": "Just smile on your face",
  "原来那猴王": "It turns out that Monkey King",
  "已打破盘中之谜": "The mystery in the trading has been broken",
  "暗暗在心": "Secretly in my heart",
  "所以不与众人争竞": "So don't compete with everyone",
  "只是忍耐无言": "Just patient and speechless",
  "祖师打他三下者": "The ancestor beat him three times",
  "教他三更时分存心": "Teach him to be careful during the third update",
  "倒背着手": "Put your hands on your back",
  "走入里面": "Walk inside",
  "将中门关上者": "The one who closes the middle door",
  "教他从后门进步": "Teach him to make progress from the back door",
  "秘处传他道也": "The secret place tells him",
  "当日悟空与众等": "On that day, Wukong and others were waiting",
  "喜喜欢欢": "Like it",
  "在三星仙洞之前": "Before the Three Star Fairy Cave",
  "盼望天色": "Hope for the sky",
  "急不能到晚": "Not too late",
  "及黄昏时": "At dusk",
  "却与众就寝": "But sleeping with everyone",
  "假合眼": "Fake eyes closed",
  "定息存神": "Stay in peace",
  "山中又没支更传箭": "There is no more arrow in the mountains",
  "不知时分": "Don't know the time",
  "只自家将鼻孔中出入之气调定": "Only adjust the energy entering and leaving the nostrils by yourself",
  "约到子时前后": "Around midnight",
  "轻轻的起来": "Get up gently",
  "穿了衣服": "Wearing clothes",
  "偷开前门": "Steal the front door",
  "躲离大众": "Stay away from the masses",
  "走出外": "Go out",
  "抬头观看": "Look up to watch",
  "正是那": "It's exactly that",
  "月明清露冷": "The moon is bright and the dew is cold",
  "八极迥无尘": "Eight extremes without dust",
  "深树幽禽宿": "Deep trees and birds stay",
  "源头水溜汾": "Source water flows to Fen",
  "飞萤光散影": "Flying fluorescent shadow",
  "过雁字排云": "The word \"花\" is a cloud",
  "正直三更候": "Upright three times",
  "应该访道真": "It should be visited by Daozhen"
};

const tianwen_translation_map_de = {
  "祖师闻言": "Der Vorfahr hörte",
  "咄的一声": "Ein dummer Klang",
  "跳下高台": "Von der Plattform springen",
  "手持戒尺": "Einen Herrscher in der Hand halten",
  "指定悟空道": "Bezeichnet Wukong Dao",
  "你这猢狲": "Dein Geld",
  "这般不学": "Lerne nicht so",
  "那般不学": "Lerne nicht so",
  "却待怎么": "Aber was zu warten ist",
  "走上前": "Vorwärts gehen",
  "将悟空头上打了三下": "Er traf Goku dreimal auf den Kopf",
  "倒背着手": "Legen Sie Ihre Hände auf Ihren Rücken",
  "走入里面": "Gehen Sie hinein",
  "将中门关了": "Schließen Sie das Tor",
  "撇下大众而去": "Lassen Sie die Öffentlichkeit zurück",
  "唬得那一班听讲的": "Diese Gruppe von Personen hörte sich an",
  "人人惊惧": "Jeder ist verängstigt",
  "皆怨悟空道": "Alles ärgerlich zu Wukongs Weg",
  "你这泼猴": "Du bist ein Affe",
  "十分无状": "Sehr unhöflich",
  "师父传你道法": "Meister lehrt dir das Tao",
  "如何不学": "Wie man nicht lernt",
  "却与师父顶嘴": "Aber er sprach mit dem Meister",
  "这番冲撞了他": "Das traf ihn",
  "不知几时才出来呵": "Ich weiß nicht, wann es herauskommen wird",
  "此时俱甚报怨他": "Alle haben sich zu dieser Zeit über ihn beschwert",
  "又鄙贱嫌恶他": "Verachten Sie ihn und hasse ihn",
  "悟空一些儿也不恼": "Wukong ist nicht verärgert",
  "只是满脸陪笑": "Lächle einfach auf deinem Gesicht",
  "原来那猴王": "Es stellt sich heraus, dass dieser Affenkönig",
  "已打破盘中之谜": "Das Geheimnis im Handel wurde gebrochen",
  "暗暗在心": "Heimlich in meinem Herzen",
  "所以不与众人争竞": "Konkurrieren Sie also nicht mit allen",
  "只是忍耐无言": "Nur geduldig und sprachlos",
  "祖师打他三下者": "Der Vorfahr schlug ihn dreimal",
  "教他三更时分存心": "Lehre ihn, während des dritten Update vorsichtig zu sein",
  "倒背着手": "Legen Sie Ihre Hände auf Ihren Rücken",
  "走入里面": "Gehen Sie hinein",
  "将中门关上者": "Derjenige, der die Mitteltür schließt",
  "教他从后门进步": "Lehre ihn, Fortschritte von der Hintertür zu machen",
  "秘处传他道也": "Der geheime Ort erzählt es ihm",
  "当日悟空与众等": "An diesem Tag warteten Wukong und andere",
  "喜喜欢欢": "Gefällt mir",
  "在三星仙洞之前": "Vor der Drei -Sterne -Feenhöhle",
  "盼望天色": "Hoffnung für den Himmel",
  "急不能到晚": "Nicht zu spät",
  "及黄昏时": "In der Abenddämmerung",
  "却与众就寝": "Aber mit allen schlafen",
  "假合眼": "Gefälschte Augen geschlossen",
  "定息存神": "Bleib in Frieden",
  "山中又没支更传箭": "Es gibt keinen Pfeil mehr in den Bergen",
  "不知时分": "Kennt die Zeit nicht",
  "只自家将鼻孔中出入之气调定": "Passen Sie nur die Eingabe der Energie an und lassen Sie die Nasenflächen selbst ein",
  "约到子时前后": "Gegen Mitternacht",
  "轻轻的起来": "Steh sanft auf",
  "穿了衣服": "Kleidung tragen",
  "偷开前门": "Die Haustür stehlen",
  "躲离大众": "Halten Sie sich von den Massen fern",
  "走出外": "Hinausgehen",
  "抬头观看": "Schau auf, um zu sehen",
  "正是那": "Genau das",
  "月明清露冷": "Der Mond ist hell und der Tau ist kalt",
  "八极迥无尘": "Acht Extreme ohne Staub",
  "深树幽禽宿": "Tiefe Bäume und Vögel bleiben",
  "源头水溜汾": "Quelle Wasser fließt nach Fen",
  "飞萤光散影": "Fluoreszierender Schatten",
  "过雁字排云": "Das Wort \"花\" ist eine Wolke",
  "正直三更候": "Dreimal aufrecht",
  "应该访道真": "Es sollte von Daozhen besucht werden"
};

const tianwen_translation_map_fr = {
  "祖师闻言": "L'ancêtre a entendu",
  "咄的一声": "Un son stupide",
  "跳下高台": "Sauter de la plate-forme",
  "手持戒尺": "Tenir une règle en main",
  "指定悟空道": "Wukong Dao désigné",
  "你这猢狲": "Votre argent",
  "这般不学": "N'apprends pas de cette façon",
  "那般不学": "N'apprends pas de cette façon",
  "却待怎么": "Mais quoi attendre",
  "走上前": "Aller de l'avant",
  "将悟空头上打了三下": "Il a frappé Goku sur la tête trois fois",
  "倒背着手": "Mettez vos mains sur votre dos",
  "走入里面": "Marcher à l'intérieur",
  "将中门关了": "Fermer la porte",
  "撇下大众而去": "Laisser le public derrière",
  "唬得那一班听讲的": "Ce groupe de personnes a écouté",
  "人人惊惧": "Tout le monde a peur",
  "皆怨悟空道": "Tout ressentiment avec le chemin de Wukong",
  "你这泼猴": "Tu es un singe",
  "十分无状": "Très grossier",
  "师父传你道法": "Maître vous enseigne le tao",
  "如何不学": "Comment ne pas apprendre",
  "却与师父顶嘴": "Mais il a parlé au maître",
  "这番冲撞了他": "Cela l'a frappé",
  "不知几时才出来呵": "Je ne sais pas quand ça sortira",
  "此时俱甚报怨他": "Tous se sont plaints de lui à ce moment",
  "又鄙贱嫌恶他": "Le méprise et le déteste",
  "悟空一些儿也不恼": "Wukong n'est pas ennuyé",
  "只是满脸陪笑": "Souriez juste sur ton visage",
  "原来那猴王": "Il s'avère que le roi de singe",
  "已打破盘中之谜": "Le mystère dans le trading a été brisé",
  "暗暗在心": "Secrètement dans mon cœur",
  "所以不与众人争竞": "Alors ne rivalisez pas avec tout le monde",
  "只是忍耐无言": "Juste patient et sans voix",
  "祖师打他三下者": "L'ancêtre l'a battu trois fois",
  "教他三更时分存心": "Apprenez-lui à faire attention lors de la troisième mise à jour",
  "倒背着手": "Mettez vos mains sur votre dos",
  "走入里面": "Marcher à l'intérieur",
  "将中门关上者": "Celui qui ferme la porte du milieu",
  "教他从后门进步": "Apprenez-lui à progresser par la porte arrière",
  "秘处传他道也": "L'endroit secret lui dit",
  "当日悟空与众等": "Ce jour-là, Wukong et d'autres attendaient",
  "喜喜欢欢": "Comme ça",
  "在三星仙洞之前": "Avant la grotte des trois étoiles",
  "盼望天色": "Espoir pour le ciel",
  "急不能到晚": "Pas trop tard",
  "及黄昏时": "Au crépuscule",
  "却与众就寝": "Mais dormir avec tout le monde",
  "假合眼": "Les faux yeux fermés",
  "定息存神": "Rester en paix",
  "山中又没支更传箭": "Il n'y a plus de flèche dans les montagnes",
  "不知时分": "Je ne sais pas le temps",
  "只自家将鼻孔中出入之气调定": "Ajustez uniquement l'énergie entrant et sortant les narines par vous-même",
  "约到子时前后": "Vers minuit",
  "轻轻的起来": "Se lever doucement",
  "穿了衣服": "Porter des vêtements",
  "偷开前门": "Voler la porte d'entrée",
  "躲离大众": "Éloignez-vous des masses",
  "走出外": "Sortir",
  "抬头观看": "Levez les yeux pour regarder",
  "正是那": "C'est exactement ça",
  "月明清露冷": "La lune est brillante et la rosée est froide",
  "八极迥无尘": "Huit extrêmes sans poussière",
  "深树幽禽宿": "Les arbres et les oiseaux profonds restent",
  "源头水溜汾": "La source d'eau coule vers Fen",
  "飞萤光散影": "Ombre fluorescente volante",
  "过雁字排云": "Le mot \"花\" est un nuage",
  "正直三更候": "Droit trois fois",
  "应该访道真": "Il devrait être visité par Daozhen"
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
