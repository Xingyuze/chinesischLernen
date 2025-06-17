const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `少时
钟鼓响处
果然惊动那三海龙王
须臾来到
一齐在外面会着
敖钦道
大哥
有甚紧事
擂鼓撞钟
老龙道
贤弟
不好说
有一个花果山甚么天生圣人
早间来认我做邻居
后来要求一件兵器
献钢叉嫌小
奉画戟嫌轻
将一块天河定底神珍铁
自己拿出手
丢了些解数
如今坐在宫中
又要索甚么披挂
我处无有
故响钟鸣鼓
请贤弟来
你们可有甚么披挂
送他一副
打发出门去罢了
敖钦闻言
大怒道
我兄弟们
点起兵
拿他不是
老龙道
莫说拿
那块铁
挽着些儿就死
磕着些儿就亡
挨挨皮儿破
擦擦儿筋伤
西海龙王敖闰说
二哥不可与他动手
且只凑副披挂与他
打发他出了门
启表奏上上天
天自诛也
北海龙王敖顺道
说的是
我这里有一双藕丝步云履哩
西海龙王敖闰道
我带了一副锁子黄金甲哩
南海龙王敖钦道
我有一顶凤翅紫金冠哩
老龙大喜
引入水晶宫相见了
以此奉上
悟空将金冠金甲云履那穿戴停当
使动如意棒
一路打出去
对众龙道
聒噪
聒噪
四海龙王甚是不平
一边商议进表上奏不题`;

const pinyinMap = {
  少: "shǎo",
  时: "shí",
  钟: "zhōng",
  鼓: "gǔ",
  响: "xiǎng",
  处: "chù",
  果: "guǒ",
  然: "rán",
  惊: "jīng",
  动: "dòng",
  那: "nà",
  三: "sān",
  海: "hǎi",
  龙: "lóng",
  王: "wáng",
  须: "xū",
  臾: "yú",
  来: "lái",
  到: "dào",
  一: "yī",
  齐: "qí",
  在: "zài",
  外: "wài",
  面: "miàn",
  会: "huì",
  着: "zhe",
  敖: "áo",
  钦: "qīn",
  道: "dào",
  大: "dà",
  哥: "gē",
  有: "yǒu",
  甚: "shèn",
  紧: "jǐn",
  事: "shì",
  擂: "léi",
  撞: "zhuàng",
  老: "lǎo",
  贤: "xián",
  弟: "dì",
  不: "bù",
  好: "hǎo",
  说: "shuō",
  个: "gè",
  花: "huā",
  山: "shān",
  么: "me",
  天: "tiān",
  生: "shēng",
  圣: "shèng",
  人: "rén",
  早: "zǎo",
  间: "jiān",
  认: "rèn",
  我: "wǒ",
  做: "zuò",
  邻: "lín",
  居: "jū",
  后: "hòu",
  要: "yāo",
  求: "qiú",
  件: "jiàn",
  兵: "bīng",
  器: "qì",
  献: "xiàn",
  钢: "gāng",
  叉: "chā",
  嫌: "xián",
  小: "xiǎo",
  奉: "fèng",
  画: "huà",
  戟: "jǐ",
  轻: "qīng",
  将: "jiāng",
  块: "kuài",
  河: "hé",
  定: "dìng",
  底: "dǐ",
  神: "shén",
  珍: "zhēn",
  铁: "tiě",
  自: "zì",
  己: "jǐ",
  拿: "ná",
  出: "chū",
  手: "shǒu",
  丢: "diū",
  了: "le",
  些: "xiē",
  解: "xiè",
  数: "shù",
  如: "rú",
  今: "jīn",
  坐: "zuò",
  宫: "gōng",
  中: "zhōng",
  又: "yòu",
  索: "suǒ",
  披: "pī",
  挂: "guà",
  无: "wú",
  故: "gù",
  鸣: "míng",
  请: "qǐng",
  你: "nǐ",
  们: "men",
  可: "kě",
  送: "sòng",
  他: "tā",
  副: "fù",
  打: "dǎ",
  发: "fā",
  门: "mén",
  去: "qù",
  罢: "bà",
  闻: "wén",
  言: "yán",
  怒: "nù",
  兄: "xiōng",
  点: "diǎn",
  起: "qǐ",
  是: "shì",
  莫: "mò",
  挽: "wǎn",
  儿: "ér",
  就: "jiù",
  死: "sǐ",
  磕: "kē",
  亡: "wáng",
  挨: "āi",
  皮: "pí",
  破: "pò",
  擦: "cā",
  筋: "jīn",
  伤: "shāng",
  西: "xī",
  闰: "rùn",
  二: "èr",
  与: "yǔ",
  且: "qiě",
  只: "zhǐ",
  凑: "còu",
  启: "qǐ",
  表: "biǎo",
  奏: "zòu",
  上: "shàng",
  诛: "zhū",
  也: "yě",
  北: "běi",
  顺: "shùn",
  的: "de",
  这: "zhè",
  里: "lǐ",
  双: "shuāng",
  藕: "ǒu",
  丝: "sī",
  步: "bù",
  云: "yún",
  履: "lǚ",
  哩: "lī",
  带: "dài",
  锁: "suǒ",
  子: "zi",
  黄: "huáng",
  金: "jīn",
  甲: "jiǎ",
  南: "nán",
  顶: "dǐng",
  凤: "fèng",
  翅: "chì",
  紫: "zǐ",
  冠: "guān",
  喜: "xǐ",
  引: "yǐn",
  入: "rù",
  水: "shuǐ",
  晶: "jīng",
  相: "xiāng",
  见: "jiàn",
  以: "yǐ",
  此: "cǐ",
  悟: "wù",
  空: "kōng",
  穿: "chuān",
  戴: "dài",
  停: "tíng",
  当: "dàng",
  使: "shǐ",
  意: "yì",
  棒: "bàng",
  路: "lù",
  对: "duì",
  众: "zhòng",
  聒: "guā",
  噪: "zào",
  四: "sì",
  平: "píng",
  边: "biān",
  商: "shāng",
  议: "yì",
  进: "jìn",
  题: "tí",
};

const translations_en = {
  少: "few",
  时: "hour",
  钟: "bell",
  鼓: "drum",
  响: "ring",
  处: "Where",
  果: "fruit",
  然: "Of course",
  惊: "shock",
  动: "move",
  那: "That",
  三: "three",
  海: "ocean",
  龙: "dragon",
  王: "king",
  须: "Must",
  臾: "For a moment",
  来: "Come",
  到: "arrive",
  一: "one",
  齐: "together",
  在: "exist",
  外: "outside",
  面: "noodle",
  会: "meeting",
  着: "Put",
  敖: "Ao",
  钦: "Qin",
  道: "road",
  大: "big",
  哥: "elder brother",
  有: "have",
  甚: "very",
  紧: "tight",
  事: "thing",
  擂: "beat",
  撞: "Collide",
  老: "old",
  贤: "Virtue",
  弟: "younger brother",
  不: "No",
  好: "good",
  说: "explain",
  个: "indivual",
  花: "flower",
  山: "Mountain",
  么: "Is it",
  天: "sky",
  生: "born",
  圣: "Saint",
  人: "people",
  早: "morning",
  间: "between",
  认: "recognize",
  我: "I",
  做: "Do",
  邻: "adjacent",
  居: "Residence",
  后: "back",
  要: "want",
  求: "beg",
  件: "Parts",
  兵: "Soldier",
  器: "Device",
  献: "offer",
  钢: "steel",
  叉: "fork",
  嫌: "Dislike",
  小: "Small",
  奉: "Feng",
  画: "painting",
  戟: "halberd",
  轻: "light",
  将: "Will",
  块: "piece",
  河: "river",
  定: "Certainly",
  底: "end",
  神: "god",
  珍: "Jen",
  铁: "iron",
  自: "since",
  己: "It's own",
  拿: "take",
  出: "out",
  手: "hand",
  丢: "leave",
  了: "It's",
  些: "some",
  解: "untie",
  数: "number",
  如: "like",
  今: "now",
  坐: "sit",
  宫: "palace",
  中: "middle",
  又: "again",
  索: "Search",
  披: "路",
  挂: "hang",
  无: "none",
  故: "Therefore",
  鸣: "Ting",
  请: "please",
  你: "you",
  们: "We",
  可: "Can",
  送: "deliver",
  他: "he",
  副: "vice",
  打: "beat",
  发: "hair",
  门: "Door",
  去: "go",
  罢: "stop",
  闻: "smell",
  言: "Word",
  怒: "anger",
  兄: "Brother",
  点: "point",
  起: "rise",
  是: "yes",
  莫: "Mo",
  挽: "pull",
  儿: "Son",
  就: "At once",
  死: "die",
  磕: "knock",
  亡: "Death",
  挨: "suffer",
  皮: "Skin",
  破: "break",
  擦: "wipe",
  筋: "Tendons",
  伤: "hurt",
  西: "West",
  闰: "Leap",
  二: "two",
  与: "and",
  且: "and",
  只: "Only",
  凑: "Make up",
  启: "start",
  表: "surface",
  奏: "Play",
  上: "superior",
  诛: "punish",
  也: "also",
  北: "north",
  顺: "Sure",
  的: "of",
  这: "this",
  里: "inside",
  双: "pair",
  藕: "Lotus",
  丝: "Silk",
  步: "step",
  云: "cloud",
  履: "shoe",
  哩: "Li",
  带: "bring",
  锁: "Lock",
  子: "son",
  黄: "yellow",
  金: "gold",
  甲: "First",
  南: "South",
  顶: "top",
  凤: "phoenix",
  翅: "wing",
  紫: "purple",
  冠: "crown",
  喜: "happiness",
  引: "lead",
  入: "enter",
  水: "water",
  晶: "crystal",
  相: "Mutually",
  见: "See",
  以: "by",
  此: "this",
  悟: "Enlightenment",
  空: "null",
  穿: "wear",
  戴: "Wear",
  停: "stop",
  当: "when",
  使: "make",
  意: "meaning",
  棒: "Great",
  路: "road",
  对: "right",
  众: "All",
  聒: "Hollow",
  噪: "noise",
  四: "Four",
  平: "flat",
  边: "side",
  商: "business",
  议: "Discussion",
  进: "Enter",
  题: "question",
};

const translations_de = {
  少: "wenige",
  时: "Stunde",
  钟: "Glocke",
  鼓: "Trommel",
  响: "Ring",
  处: "Wo",
  果: "Obst",
  然: "Natürlich",
  惊: "Schock",
  动: "bewegen",
  那: "Das",
  三: "drei",
  海: "Ozean",
  龙: "Drachen",
  王: "König",
  须: "Muss",
  臾: "Für einen Moment",
  来: "Kommen",
  到: "ankommen",
  一: "eins",
  齐: "zusammen",
  在: "existieren",
  外: "draußen",
  面: "Nudel",
  会: "treffen",
  着: "Setzen",
  敖: "Ao",
  钦: "Qin",
  道: "Straße",
  大: "groß",
  哥: "älterer Bruder",
  有: "haben",
  甚: "sehr",
  紧: "eng",
  事: "Ding",
  擂: "schlagen",
  撞: "Kollidieren",
  老: "alt",
  贤: "Tugend",
  弟: "jüngerer Bruder",
  不: "NEIN",
  好: "Gut",
  说: "erklären",
  个: "indival",
  花: "Blume",
  山: "Berg",
  么: "Ist es",
  天: "Himmel",
  生: "geboren",
  圣: "Heilige",
  人: "Menschen",
  早: "Morgen",
  间: "zwischen",
  认: "erkennen",
  我: "ICH",
  做: "Tun",
  邻: "benachbart",
  居: "Residenz",
  后: "zurück",
  要: "wollen",
  求: "bitten",
  件: "Teile",
  兵: "Soldat",
  器: "Gerät",
  献: "Angebot",
  钢: "Stahl",
  叉: "Gabel",
  嫌: "Abneigung",
  小: "Klein",
  奉: "Feng",
  画: "Malerei",
  戟: "Hellebarde",
  轻: "Licht",
  将: "Wille",
  块: "Stück",
  河: "Fluss",
  定: "Sicherlich",
  底: "Ende",
  神: "Gott",
  珍: "Jen",
  铁: "Eisen",
  自: "seit",
  己: "Es ist eigen",
  拿: "nehmen",
  出: "aus",
  手: "Hand",
  丢: "verlassen",
  了: "Es ist",
  些: "manche",
  解: "lösen",
  数: "Nummer",
  如: "wie",
  今: "Jetzt",
  坐: "sitzen",
  宫: "Palast",
  中: "Mitte",
  又: "wieder",
  索: "Suchen",
  披: "路",
  挂: "aufhängen",
  无: "keiner",
  故: "daher",
  鸣: "Ting",
  请: "Bitte",
  你: "Du",
  们: "Wir",
  可: "Kann",
  送: "liefern",
  他: "Er",
  副: "Vize",
  打: "schlagen",
  发: "Haar",
  门: "Tür",
  去: "gehen",
  罢: "stoppen",
  闻: "Geruch",
  言: "Wort",
  怒: "Wut",
  兄: "Bruder",
  点: "Punkt",
  起: "erheben",
  是: "Ja",
  莫: "MO",
  挽: "ziehen",
  儿: "Sohn",
  就: "Auf einmal",
  死: "sterben",
  磕: "klopfen",
  亡: "Tod",
  挨: "leiden",
  皮: "Haut",
  破: "brechen",
  擦: "wischen",
  筋: "Sehnen",
  伤: "verletzt",
  西: "West",
  闰: "Sprung",
  二: "zwei",
  与: "Und",
  且: "Und",
  只: "Nur",
  凑: "Bilden",
  启: "Start",
  表: "Oberfläche",
  奏: "Spielen",
  上: "Vorgesetzter",
  诛: "bestrafen",
  也: "Auch",
  北: "Norden",
  顺: "Sicher",
  的: "von",
  这: "Das",
  里: "innen",
  双: "Paar",
  藕: "Lotus",
  丝: "Seide",
  步: "Schritt",
  云: "Wolke",
  履: "Schuh",
  哩: "Li",
  带: "bringen",
  锁: "Sperren",
  子: "Sohn",
  黄: "Gelb",
  金: "Gold",
  甲: "Erste",
  南: "Süden",
  顶: "Spitze",
  凤: "Phönix",
  翅: "Flügel",
  紫: "lila",
  冠: "Krone",
  喜: "Glück",
  引: "führen",
  入: "eingeben",
  水: "Wasser",
  晶: "Kristall",
  相: "Gegenseitig",
  见: "Sehen",
  以: "von",
  此: "Das",
  悟: "Aufklärung",
  空: "NULL",
  穿: "tragen",
  戴: "Tragen",
  停: "stoppen",
  当: "Wann",
  使: "machen",
  意: "Bedeutung",
  棒: "Großartig",
  路: "Straße",
  对: "Rechts",
  众: "Alle",
  聒: "Hohl",
  噪: "Lärm",
  四: "Vier",
  平: "Wohnung",
  边: "Seite",
  商: "Geschäft",
  议: "Diskussion",
  进: "Eingeben",
  题: "Frage",
};

const translations_fr = {
  少: "peu",
  时: "heure",
  钟: "cloche",
  鼓: "tambour",
  响: "anneau",
  处: "Où",
  果: "fruit",
  然: "Bien sûr",
  惊: "choc",
  动: "se déplacer",
  那: "Que",
  三: "trois",
  海: "océan",
  龙: "dragon",
  王: "roi",
  须: "Doit",
  臾: "Pendant un moment",
  来: "Viens",
  到: "arriver",
  一: "un",
  齐: "ensemble",
  在: "exister",
  外: "dehors",
  面: "nouille",
  会: "réunion",
  着: "Mettre",
  敖: "AO",
  钦: "Qin",
  道: "route",
  大: "grand",
  哥: "frère aîné",
  有: "avoir",
  甚: "très",
  紧: "serré",
  事: "chose",
  擂: "battre",
  撞: "Entrer en collision",
  老: "vieux",
  贤: "Vertu",
  弟: "jeune frère",
  不: "Non",
  好: "bien",
  说: "expliquer",
  个: "autonome",
  花: "fleur",
  山: "Montagne",
  么: "Est-ce",
  天: "ciel",
  生: "né",
  圣: "Saint",
  人: "personnes",
  早: "matin",
  间: "entre",
  认: "reconnaître",
  我: "je",
  做: "Faire",
  邻: "adjacent",
  居: "Résidence",
  后: "dos",
  要: "vouloir",
  求: "mendier",
  件: "Parties",
  兵: "Soldat",
  器: "Appareil",
  献: "offre",
  钢: "acier",
  叉: "fourchette",
  嫌: "Aversion",
  小: "Petit",
  奉: "Feng",
  画: "peinture",
  戟: "hallebarde",
  轻: "lumière",
  将: "Volonté",
  块: "morceau",
  河: "rivière",
  定: "Certainement",
  底: "fin",
  神: "Dieu",
  珍: "Jen",
  铁: "fer",
  自: "depuis",
  己: "C'est propre",
  拿: "prendre",
  出: "dehors",
  手: "main",
  丢: "partir",
  了: "C'est",
  些: "quelques",
  解: "délier",
  数: "nombre",
  如: "comme",
  今: "maintenant",
  坐: "s'asseoir",
  宫: "palais",
  中: "milieu",
  又: "encore",
  索: "Recherche",
  披: "路",
  挂: "accrocher",
  无: "aucun",
  故: "Donc",
  鸣: "Ting",
  请: "s'il te plaît",
  你: "toi",
  们: "Nous",
  可: "Peut",
  送: "livrer",
  他: "il",
  副: "vice",
  打: "battre",
  发: "cheveux",
  门: "Porte",
  去: "aller",
  罢: "arrêt",
  闻: "odeur",
  言: "Mot",
  怒: "colère",
  兄: "Frère",
  点: "indiquer",
  起: "augmenter",
  是: "Oui",
  莫: "MO",
  挽: "tirer",
  儿: "Fils",
  就: "Immédiatement",
  死: "mourir",
  磕: "frappe",
  亡: "La mort",
  挨: "souffrir",
  皮: "Peau",
  破: "casser",
  擦: "essuyer",
  筋: "Tendons",
  伤: "blesser",
  西: "Ouest",
  闰: "Saut",
  二: "deux",
  与: "et",
  且: "et",
  只: "Seulement",
  凑: "Se maquiller",
  启: "commencer",
  表: "surface",
  奏: "Jouer",
  上: "supérieur",
  诛: "punir",
  也: "aussi",
  北: "nord",
  顺: "Bien sûr",
  的: "de",
  这: "ce",
  里: "à l'intérieur",
  双: "paire",
  藕: "Lotus",
  丝: "Soie",
  步: "étape",
  云: "nuage",
  履: "chaussure",
  哩: "Li",
  带: "apporter",
  锁: "Verrouillage",
  子: "fils",
  黄: "jaune",
  金: "or",
  甲: "D'abord",
  南: "Sud",
  顶: "haut",
  凤: "phénix",
  翅: "aile",
  紫: "violet",
  冠: "couronne",
  喜: "bonheur",
  引: "plomb",
  入: "entrer",
  水: "eau",
  晶: "cristal",
  相: "Mutuellement",
  见: "Voir",
  以: "par",
  此: "ce",
  悟: "Éclaircissement",
  空: "nul",
  穿: "porter",
  戴: "Porter",
  停: "arrêt",
  当: "quand",
  使: "faire",
  意: "signification",
  棒: "Super",
  路: "route",
  对: "droite",
  众: "Tous",
  聒: "Creux",
  噪: "bruit",
  四: "Quatre",
  平: "plat",
  边: "côté",
  商: "entreprise",
  议: "Discussion",
  进: "Entrer",
  题: "question",
};

const tianwen_translation_map_en = {
  少时: "A few times",
  钟鼓响处: "Where the bell and drums sound",
  果然惊动那三海龙王: "Sure enough, the Dragon King of the Three Seas",
  须臾来到: "Coming in a moment",
  一齐在外面会着: "Meet outside together",
  敖钦道: "Ao Qindao",
  大哥: "Big brother",
  有甚紧事: "Something is so important",
  擂鼓撞钟: "Beat the drum and hit the bell",
  老龙道: "Old Dragon",
  贤弟: "Brother",
  不好说: "Not easy to say",
  有一个花果山甚么天生圣人:
    "There is a Huaguo Mountain, what is a natural saint",
  早间来认我做邻居: "Come to recognize me as your neighbor in the morning",
  后来要求一件兵器: "Later, a weapon was requested",
  献钢叉嫌小: "The steel fork is small",
  奉画戟嫌轻: "The painting halberd is light",
  将一块天河定底神珍铁:
    "A piece of divine iron that sets the bottom of the sky",
  自己拿出手: "Take it out yourself",
  丢了些解数: "Lost some solutions",
  如今坐在宫中: "Sitting in the palace now",
  又要索甚么披挂: "What other hangs are you going to ask for?",
  我处无有: "I have nothing",
  故响钟鸣鼓: "Therefore, the bells and drums ring",
  请贤弟来: "Please come here by my dear brother",
  你们可有甚么披挂: "What kind of hang do you have",
  送他一副: "Give him a pair",
  打发出门去罢了: "Just send it out",
  敖钦闻言: "Ao Qin heard",
  大怒道: "Furiously said",
  我兄弟们: "My brothers",
  点起兵: "Start a troops",
  拿他不是: "Not taking him",
  老龙道: "Old Dragon",
  莫说拿: "Don't say take it",
  那块铁: "That iron",
  挽着些儿就死: "If you hold it a little, you will die",
  磕着些儿就亡: "Knocking a little",
  挨挨皮儿破: "Going to the skin",
  擦擦儿筋伤: "Rub the tendon injury",
  西海龙王敖闰说: "The Dragon King of the West Sea Ao Run said",
  二哥不可与他动手: "Second brother can't fight him",
  且只凑副披挂与他: "And only the pair of robes and him",
  打发他出了门: "Send him out of the door",
  启表奏上上天: "Reveal the melody of heaven",
  天自诛也: "God will kill you",
  北海龙王敖顺道: "North Sea Dragon King Ao Shundao",
  说的是: "What I mean",
  我这里有一双藕丝步云履哩: "I have a pair of lotus silk slivered clouds here",
  西海龙王敖闰道: "The Dragon King of the West Sea Ao Rundao",
  我带了一副锁子黄金甲哩: "I brought a pair of golden armors with locks",
  南海龙王敖钦道: "Ao Qindao, the Dragon King of the South China Sea",
  我有一顶凤翅紫金冠哩: "I have a purple gold crown with phoenix wings",
  老龙大喜: "Old Dragon is very happy",
  引入水晶宫相见了: "Introduce Crystal Palace to meet",
  以此奉上: "Offer this",
  悟空将金冠金甲云履那穿戴停当:
    "Wukong stopped wearing the golden crown and golden armor cloud shoes",
  使动如意棒: "Make the best wishes",
  一路打出去: "Try it all the way",
  对众龙道: "The Dragons",
  聒噪: "Noisy",
  聒噪: "Noisy",
  四海龙王甚是不平: "The Dragon King of the Four Seas is very unfair",
  一边商议进表上奏不题:
    "While discussing the report, no question will be given",
};

const tianwen_translation_map_de = {
  少时: "Ein paar Mal",
  钟鼓响处: "Wo die Glocke und Trommeln klingen",
  果然惊动那三海龙王: "Sicher genug, der Drachenkönig der drei Meere",
  须臾来到: "Einen Moment kommen",
  一齐在外面会着: "Treffen Sie sich zusammen zusammen",
  敖钦道: "Ao Qindao",
  大哥: "Big Brother",
  有甚紧事: "Etwas ist so wichtig",
  擂鼓撞钟: "Schlagen Sie die Trommel und schlagen Sie die Glocke",
  老龙道: "Alter Drache",
  贤弟: "Bruder",
  不好说: "Nicht leicht zu sagen",
  有一个花果山甚么天生圣人:
    "Es gibt einen Huaguo -Berg, was ein natürlicher Heiliger ist",
  早间来认我做邻居:
    "Kommen Sie, um mich morgens als Ihren Nachbarn zu erkennen",
  后来要求一件兵器: "Später wurde eine Waffe angefordert",
  献钢叉嫌小: "Die Stahlgabel ist klein",
  奉画戟嫌轻: "Das Gemäldehaleberd ist leicht",
  将一块天河定底神珍铁: "Ein Stück göttliches Eisen, das den Himmelboden setzt",
  自己拿出手: "Nehmen Sie es selbst heraus",
  丢了些解数: "Einige Lösungen verloren",
  如今坐在宫中: "Jetzt im Palast sitzen",
  又要索甚么披挂: "Nach welchen anderen Hängen werden Sie fragen?",
  我处无有: "Ich habe nichts",
  故响钟鸣鼓: "Daher klingeln die Glocken und Trommeln",
  请贤弟来: "Bitte komm mit meinem lieben Bruder hierher",
  你们可有甚么披挂: "Was für ein Hang hast du?",
  送他一副: "Gib ihm ein Paar",
  打发出门去罢了: "Senden Sie es einfach aus",
  敖钦闻言: "Ao Qin hörte",
  大怒道: "Sagte wütend",
  我兄弟们: "Meine Brüder",
  点起兵: "Starten Sie eine Truppen",
  拿他不是: "Ihn nicht nehmen",
  老龙道: "Alter Drache",
  莫说拿: "Sag nicht, nimm es",
  那块铁: "Das Eisen",
  挽着些儿就死: "Wenn Sie es ein wenig halten, werden Sie sterben",
  磕着些儿就亡: "Ein wenig klopfen",
  挨挨皮儿破: "Zur Haut gehen",
  擦擦儿筋伤: "Reiben Sie die Sehnenverletzung",
  西海龙王敖闰说: "Der Drachenkönig des Westsee -AO -Laufs sagte",
  二哥不可与他动手: "Der zweite Bruder kann ihn nicht bekämpfen",
  且只凑副披挂与他: "Und nur das Paar Roben und er",
  打发他出了门: "Schick ihn aus der Tür",
  启表奏上上天: "Enthüllen Sie die Melodie des Himmels",
  天自诛也: "Gott wird dich töten",
  北海龙王敖顺道: "Nordsee Drachen König Ao Shundao",
  说的是: "Was ich meine",
  我这里有一双藕丝步云履哩:
    "Ich habe hier ein Paar Lotus -Seiden -Splitter -Wolken",
  西海龙王敖闰道: "Der Drachenkönig des Westsee Ao Rundao",
  我带了一副锁子黄金甲哩:
    "Ich brachte ein Paar goldene Rüstungen mit Schlösser mit",
  南海龙王敖钦道: "Ao Qindao, der Drachenkönig des Südchinesischen Meeres",
  我有一顶凤翅紫金冠哩: "Ich habe eine lila Goldkrone mit Phoenix -Flügeln",
  老龙大喜: "Der alte Drache ist sehr glücklich",
  引入水晶宫相见了: "Stellen Sie den Kristallpalast vor, um sich zu treffen",
  以此奉上: "Bieten Sie dies an",
  悟空将金冠金甲云履那穿戴停当:
    "Wukong hörte auf, die Golden Crown und Golden Armor Cloud Schuhe zu tragen",
  使动如意棒: "Die besten Wünsche machen",
  一路打出去: "Versuchen Sie es den ganzen Weg",
  对众龙道: "Die Drachen",
  聒噪: "Laut",
  聒噪: "Laut",
  四海龙王甚是不平: "Der Drachenkönig der vier Meere ist sehr unfair",
  一边商议进表上奏不题:
    "Während der Diskussion des Berichts wird keine Frage gestellt",
};

const tianwen_translation_map_fr = {
  少时: "Plusieurs fois",
  钟鼓响处: "Où la cloche et les tambours sont",
  果然惊动那三海龙王: "Effectivement, le roi dragon des trois mers",
  须臾来到: "Venir dans un instant",
  一齐在外面会着: "Se rencontrer à l'extérieur ensemble",
  敖钦道: "AO Qindao",
  大哥: "Grand frère",
  有甚紧事: "Quelque chose est si important",
  擂鼓撞钟: "Battre le tambour et frapper la cloche",
  老龙道: "Vieux dragon",
  贤弟: "Frère",
  不好说: "Pas facile à dire",
  有一个花果山甚么天生圣人:
    "Il y a une montagne Huaguo, qu'est-ce qu'un saint naturel",
  早间来认我做邻居: "Venez me reconnaître comme votre voisin le matin",
  后来要求一件兵器: "Plus tard, une arme a été demandée",
  献钢叉嫌小: "La fourche en acier est petite",
  奉画戟嫌轻: "La peinture Halleber est légère",
  将一块天河定底神珍铁: "Un morceau de fer divin qui dérange le bas du ciel",
  自己拿出手: "Sortez-le vous-même",
  丢了些解数: "Perdu certaines solutions",
  如今坐在宫中: "Assis dans le palais maintenant",
  又要索甚么披挂: "Quels autres accrochages allez-vous demander?",
  我处无有: "Je n'ai rien",
  故响钟鸣鼓: "Par conséquent, les cloches et les tambours sonnent",
  请贤弟来: "Venez ici par mon cher frère",
  你们可有甚么披挂: "Quel genre de suspension avez-vous",
  送他一副: "Donnez-lui une paire",
  打发出门去罢了: "Envoyez-le",
  敖钦闻言: "Ao qin entendu",
  大怒道: "Dit furieusement",
  我兄弟们: "Mes frères",
  点起兵: "Démarrer les troupes",
  拿他不是: "Ne le prenant pas",
  老龙道: "Vieux dragon",
  莫说拿: "Ne dis pas prendre",
  那块铁: "Ce fer",
  挽着些儿就死: "Si vous le tenez un peu, vous mourrez",
  磕着些儿就亡: "Frapper un peu",
  挨挨皮儿破: "Aller à la peau",
  擦擦儿筋伤: "Frotter la blessure au tendon",
  西海龙王敖闰说: "Le roi dragon de la mer de la mer Ouest a dit",
  二哥不可与他动手: "Le deuxième frère ne peut pas le combattre",
  且只凑副披挂与他: "Et seulement la paire de robes et lui",
  打发他出了门: "Envoyez-le hors de la porte",
  启表奏上上天: "Révéler la mélodie du ciel",
  天自诛也: "Dieu vous tuera",
  北海龙王敖顺道: "King du dragon de la mer du Nord Ao Shundao",
  说的是: "Ce que je veux dire",
  我这里有一双藕丝步云履哩:
    "J'ai une paire de nuages ​​coupés de soie Lotus ici",
  西海龙王敖闰道: "Le roi dragon de la mer Ouest Ao Rundao",
  我带了一副锁子黄金甲哩:
    "J'ai apporté une paire d'armures d'or avec des serrures",
  南海龙王敖钦道: "Ao Qindao, le roi dragon de la mer de Chine méridionale",
  我有一顶凤翅紫金冠哩:
    "J'ai une couronne en or violet avec des ailes de phénix",
  老龙大喜: "Le vieux dragon est très heureux",
  引入水晶宫相见了: "Présenter Crystal Palace pour se rencontrer",
  以此奉上: "Offrir ceci",
  悟空将金冠金甲云履那穿戴停当:
    "Wukong a cessé de porter la couronne dorée et les chaussures de nuages ​​d'armure dorée",
  使动如意棒: "Faites les meilleurs voeux",
  一路打出去: "Essayez-le tout le chemin",
  对众龙道: "La voie des dragons",
  聒噪: "Bruyant",
  聒噪: "Bruyant",
  四海龙王甚是不平: "Le roi dragon des quatre mers est très injuste",
  一边商议进表上奏不题:
    "Tout en discutant du rapport, aucune question ne sera donnée",
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
