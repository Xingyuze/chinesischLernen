const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `话表美猴王得了姓名
怡然踊跃
对菩提前作礼启谢
那祖师即命大众引孙悟空出二门外
教他洒扫应对
进退周旋之节
众仙奉行而出
悟空到门外
又拜了大众师兄
就于廊庑之间
安排寝处
次早
与众师兄学言语礼貌
讲经论道
习字焚香
每日如此
闲时即扫地锄园
养花修树
寻柴燃火
挑水运浆
凡所用之物
无一不备
在洞中不觉倏六七年
一日
祖师登坛高坐
唤集诸仙
开讲大道
孙悟空在旁闻讲
喜得他抓耳挠腮
眉花眼笑
忍不住手之舞之
足之蹈之
忽被祖师看见
叫孙悟空道
你在班中
怎么颠狂跃舞
不听我讲
悟空道
弟子诚心听讲
听到老师父妙音处
喜不自胜
故不觉作此踊跃之状
望师父恕罪
祖师道
你既识妙音
我且问你
你到洞中多少时了
悟空道
弟子本来懵懂
不知多少时节
只记得灶下无火
常去山后打柴
见一山好桃树
我在那里吃了七次饱桃矣
祖师道
那山唤名烂桃山
你既吃七次
想是七年了
你今要从我学些什么道
悟空道
但凭尊师教诲
只是有些道气儿
弟子便就学了
祖师道
道
字门中有三百六十傍门
傍门皆有正果
不知你学那一门哩
悟空道
凭尊师意思
弟子倾心听从
祖师道
我教你个
术
字门中之道
如何
悟空道
术门之道怎么说
祖师道
术字门中
乃是些请仙扶鸾
问卜揲蓍
能知趋吉避凶之理
悟空道
似这般可得长生么
祖师道
不能
不能
悟空道
不学
不学
`;

const pinyinMap = {
  话: "huà",
  表: "biǎo",
  美: "měi",
  猴: "hóu",
  王: "wáng",
  得: "dé",
  了: "le",
  姓: "xìng",
  名: "míng",
  怡: "yí",
  然: "rán",
  踊: "yǒng",
  跃: "yuè",
  对: "duì",
  菩: "pú",
  提: "tí",
  前: "qián",
  作: "zuò",
  礼: "lǐ",
  启: "qǐ",
  谢: "xiè",
  那: "nà",
  祖: "zǔ",
  师: "shī",
  即: "jí",
  命: "mìng",
  大: "dà",
  众: "zhòng",
  引: "yǐn",
  孙: "sūn",
  悟: "wù",
  空: "kōng",
  出: "chū",
  二: "èr",
  门: "mén",
  外: "wài",
  教: "jiào",
  他: "tā",
  洒: "sǎ",
  扫: "sǎo",
  应: "yīng",
  进: "jìn",
  退: "tuì",
  周: "zhōu",
  旋: "xuán",
  之: "zhī",
  节: "jié",
  仙: "xiān",
  奉: "fèng",
  行: "xíng",
  而: "ér",
  到: "dào",
  又: "yòu",
  拜: "bài",
  兄: "xiōng",
  就: "jiù",
  于: "yú",
  廊: "láng",
  庑: "wǔ",
  间: "jiān",
  安: "ān",
  排: "pái",
  寝: "qǐn",
  处: "chù",
  次: "cì",
  早: "zǎo",
  与: "yǔ",
  学: "xué",
  言: "yán",
  语: "yǔ",
  貌: "mào",
  讲: "jiǎng",
  经: "jīng",
  论: "lùn",
  道: "dào",
  习: "xí",
  字: "zì",
  焚: "fén",
  香: "xiāng",
  每: "měi",
  日: "rì",
  如: "rú",
  此: "cǐ",
  闲: "xián",
  时: "shí",
  地: "dì",
  锄: "chú",
  园: "yuán",
  养: "yǎng",
  花: "huā",
  修: "xiū",
  树: "shù",
  寻: "xún",
  柴: "chái",
  燃: "rán",
  火: "huǒ",
  挑: "tiāo",
  水: "shuǐ",
  运: "yùn",
  浆: "jiāng",
  凡: "fán",
  所: "suǒ",
  用: "yòng",
  物: "wù",
  无: "wú",
  一: "yī",
  不: "bù",
  备: "bèi",
  在: "zài",
  洞: "dòng",
  中: "zhōng",
  觉: "jué",
  倏: "shū",
  六: "liù",
  七: "qī",
  年: "nián",
  登: "dēng",
  坛: "tán",
  高: "gāo",
  坐: "zuò",
  唤: "huàn",
  集: "jí",
  诸: "zhū",
  开: "kāi",
  旁: "páng",
  闻: "wén",
  喜: "xǐ",
  抓: "zhuā",
  耳: "ěr",
  挠: "náo",
  腮: "sāi",
  眉: "méi",
  眼: "yǎn",
  笑: "xiào",
  忍: "rěn",
  住: "zhù",
  手: "shǒu",
  舞: "wǔ",
  足: "zú",
  蹈: "dǎo",
  忽: "hū",
  被: "bèi",
  看: "kàn",
  见: "jiàn",
  叫: "jiào",
  你: "nǐ",
  班: "bān",
  怎: "zěn",
  么: "me",
  颠: "diān",
  狂: "kuáng",
  听: "tīng",
  我: "wǒ",
  弟: "dì",
  子: "zǐ",
  诚: "chéng",
  心: "xīn",
  老: "lǎo",
  父: "fù",
  妙: "miào",
  音: "yīn",
  自: "zì",
  胜: "shèng",
  故: "gù",
  状: "zhuàng",
  望: "wàng",
  恕: "shù",
  罪: "zuì",
  既: "jì",
  识: "shí",
  且: "qiě",
  问: "wèn",
  多: "duō",
  少: "shǎo",
  本: "běn",
  来: "lái",
  懵: "měng",
  懂: "dǒng",
  知: "zhī",
  只: "zhǐ",
  记: "jì",
  灶: "zào",
  下: "xià",
  常: "cháng",
  去: "qù",
  山: "shān",
  后: "hòu",
  打: "dǎ",
  好: "hǎo",
  桃: "táo",
  里: "lǐ",
  吃: "chī",
  饱: "bǎo",
  矣: "yǐ",
  烂: "làn",
  想: "xiǎng",
  是: "shì",
  今: "jīn",
  要: "yào",
  从: "cóng",
  些: "xiē",
  什: "shén",
  但: "dàn",
  凭: "píng",
  尊: "zūn",
  诲: "huì",
  有: "yǒu",
  气: "qì",
  儿: "ér",
  便: "biàn",
  三: "sān",
  百: "bǎi",
  十: "shí",
  傍: "bàng",
  皆: "jiē",
  正: "zhèng",
  果: "guǒ",
  哩: "lī",
  意: "yì",
  思: "sī",
  倾: "qīng",
  个: "gè",
  术: "shù",
  何: "hé",
  说: "shuō",
  乃: "nǎi",
  请: "qǐng",
  扶: "fú",
  鸾: "luán",
  卜: "bo",
  揲: "dié",
  蓍: "shī",
  能: "néng",
  趋: "qū",
  吉: "jí",
  避: "bì",
  凶: "xiōng",
  理: "lǐ",
  似: "shì",
  这: "zhè",
  般: "bān",
  可: "kě",
  长: "cháng",
  生: "shēng",
};

const translations_en = {
  话: "talk",
  表: "surface",
  美: "beautiful",
  猴: "monkey",
  王: "king",
  得: "have to",
  了: "It's",
  姓: "surname",
  名: "name",
  怡: "Yi",
  然: "Of course",
  踊: "leap",
  跃: "jump",
  对: "right",
  菩: "Bodhisattva",
  提: "carry",
  前: "forward",
  作: "do",
  礼: "present",
  启: "start",
  谢: "Thanks",
  那: "That",
  祖: "Ancestor",
  师: "division",
  即: "Right now",
  命: "life",
  大: "big",
  众: "All",
  引: "lead",
  孙: "Sun",
  悟: "Enlightenment",
  空: "null",
  出: "out",
  二: "two",
  门: "Door",
  外: "outside",
  教: "teach",
  他: "he",
  洒: "sprinkle",
  扫: "sweep",
  应: "answer",
  进: "Enter",
  退: "retreat",
  周: "week",
  旋: "Swirl",
  之: "Of",
  节: "Festival",
  仙: "Fairy",
  奉: "Feng",
  行: "OK",
  而: "and",
  到: "arrive",
  又: "again",
  拜: "bye",
  兄: "Brother",
  就: "At once",
  于: "At",
  廊: "gallery",
  庑: "veranda",
  间: "between",
  安: "install",
  排: "Row",
  寝: "sleep",
  处: "Where",
  次: "Second-rate",
  早: "morning",
  与: "and",
  学: "study",
  言: "Word",
  语: "language",
  貌: "appearance",
  讲: "speak",
  经: "through",
  论: "Argument",
  道: "road",
  习: "habit",
  字: "Character",
  焚: "burn",
  香: "fragrant",
  每: "Every",
  日: "day",
  如: "like",
  此: "this",
  闲: "idle",
  时: "hour",
  地: "land",
  锄: "hoe",
  园: "garden",
  养: "keep",
  花: "flower",
  修: "build",
  树: "Tree",
  寻: "Looking for",
  柴: "firewood",
  燃: "Burn",
  火: "fire",
  挑: "pick",
  水: "water",
  运: "transport",
  浆: "Slurry",
  凡: "Any",
  所: "Place",
  用: "use",
  物: "Things",
  无: "none",
  一: "one",
  不: "No",
  备: "Prepare",
  在: "exist",
  洞: "Hole",
  中: "middle",
  觉: "Sleep",
  倏: "Suddenly",
  六: "six",
  七: "seven",
  年: "Year",
  登: "Login",
  坛: "altar",
  高: "high",
  坐: "sit",
  唤: "Call",
  集: "set",
  诸: "various",
  开: "open",
  旁: "beside",
  闻: "smell",
  喜: "happiness",
  抓: "Grasp",
  耳: "Ear",
  挠: "scratch",
  腮: "cheek",
  眉: "eyebrow",
  眼: "Eye",
  笑: "laugh",
  忍: "Tolerate",
  住: "live",
  手: "hand",
  舞: "dance",
  足: "foot",
  蹈: "Dance",
  忽: "suddenly",
  被: "quilt",
  看: "look",
  见: "See",
  叫: "Call",
  你: "you",
  班: "class",
  怎: "How",
  么: "Is it",
  颠: "Far",
  狂: "mad",
  听: "listen",
  我: "I",
  弟: "younger brother",
  子: "son",
  诚: "Sincere",
  心: "Heart",
  老: "old",
  父: "father",
  妙: "wonderful",
  音: "sound",
  自: "since",
  胜: "Win",
  故: "Therefore",
  状: "shape",
  望: "see",
  恕: "Forgive",
  罪: "crime",
  既: "now that",
  识: "knowledge",
  且: "and",
  问: "ask",
  多: "many",
  少: "few",
  本: "Book",
  来: "Come",
  懵: "stupid",
  懂: "Understand",
  知: "Know",
  只: "Only",
  记: "remember",
  灶: "kitchen",
  下: "Down",
  常: "often",
  去: "go",
  山: "Mountain",
  后: "back",
  打: "beat",
  好: "good",
  桃: "Peach",
  里: "inside",
  吃: "eat",
  饱: "full",
  矣: "It's OK",
  烂: "rotten",
  想: "think",
  是: "yes",
  今: "now",
  要: "want",
  从: "from",
  些: "some",
  什: "Varied",
  但: "but",
  凭: "By",
  尊: "Honor",
  诲: "instruct",
  有: "have",
  气: "gas",
  儿: "Son",
  便: "Hope",
  三: "three",
  百: "Hundred",
  十: "ten",
  傍: "Beside",
  皆: "all",
  正: "just",
  果: "fruit",
  哩: "Li",
  意: "meaning",
  思: "think",
  倾: "pour",
  个: "indivual",
  术: "Technique",
  何: "what",
  说: "explain",
  乃: "So",
  请: "please",
  扶: "help",
  鸾: "Luan",
  卜: "predict",
  揲: "sort out divining stalks",
  蓍: "Yarl",
  能: "able",
  趋: "Trend",
  吉: "lucky",
  避: "avoid",
  凶: "fierce",
  理: "reason",
  似: "like",
  这: "this",
  般: "Normal",
  可: "Can",
  长: "long",
  生: "born",
};

const translations_de = {
  话: "sprechen",
  表: "Oberfläche",
  美: "Schön",
  猴: "Affe",
  王: "König",
  得: "müssen",
  了: "Es ist",
  姓: "Nachname",
  名: "Name",
  怡: "Yi",
  然: "Natürlich",
  踊: "Sprung",
  跃: "springen",
  对: "Rechts",
  菩: "Bodhisattva",
  提: "tragen",
  前: "nach vorne",
  作: "Tun",
  礼: "gegenwärtig",
  启: "Start",
  谢: "Danke",
  那: "Das",
  祖: "Vorfahr",
  师: "Division",
  即: "Im Augenblick",
  命: "Leben",
  大: "groß",
  众: "Alle",
  引: "führen",
  孙: "Sonne",
  悟: "Aufklärung",
  空: "NULL",
  出: "aus",
  二: "zwei",
  门: "Tür",
  外: "draußen",
  教: "unterrichten",
  他: "Er",
  洒: "streuen",
  扫: "fegen",
  应: "Antwort",
  进: "Eingeben",
  退: "Rückzug",
  周: "Woche",
  旋: "Strudel",
  之: "Von",
  节: "Festival",
  仙: "Fee",
  奉: "Feng",
  行: "OK",
  而: "Und",
  到: "ankommen",
  又: "wieder",
  拜: "Tschüss",
  兄: "Bruder",
  就: "Auf einmal",
  于: "Bei",
  廊: "Galerie",
  庑: "Veranda",
  间: "zwischen",
  安: "installieren",
  排: "Reihe",
  寝: "schlafen",
  处: "Wo",
  次: "Zweitklassifiziert",
  早: "Morgen",
  与: "Und",
  学: "Studie",
  言: "Wort",
  语: "Sprache",
  貌: "Aussehen",
  讲: "sprechen",
  经: "durch",
  论: "Argument",
  道: "Straße",
  习: "Gewohnheit",
  字: "Charakter",
  焚: "brennen",
  香: "duftend",
  每: "Jeder",
  日: "Tag",
  如: "wie",
  此: "Das",
  闲: "Leerlauf",
  时: "Stunde",
  地: "Land",
  锄: "Hacke",
  园: "Garten",
  养: "halten",
  花: "Blume",
  修: "bauen",
  树: "Baum",
  寻: "Auf der Suche nach",
  柴: "Brennholz",
  燃: "Brennen",
  火: "Feuer",
  挑: "wählen",
  水: "Wasser",
  运: "Transport",
  浆: "Aufschlämmung",
  凡: "Beliebig",
  所: "Ort",
  用: "verwenden",
  物: "Dinge",
  无: "keiner",
  一: "eins",
  不: "NEIN",
  备: "Vorbereiten",
  在: "existieren",
  洞: "Loch",
  中: "Mitte",
  觉: "Schlafen",
  倏: "Plötzlich",
  六: "sechs",
  七: "Sieben",
  年: "Jahr",
  登: "Login",
  坛: "Altar",
  高: "hoch",
  坐: "sitzen",
  唤: "Anruf",
  集: "Satz",
  诸: "verschieden",
  开: "offen",
  旁: "neben",
  闻: "Geruch",
  喜: "Glück",
  抓: "Fassen",
  耳: "Ohr",
  挠: "kratzen",
  腮: "Wange",
  眉: "Augenbraue",
  眼: "Auge",
  笑: "lachen",
  忍: "Tolerieren",
  住: "live",
  手: "Hand",
  舞: "tanzen",
  足: "Fuß",
  蹈: "Tanzen",
  忽: "plötzlich",
  被: "Decke",
  看: "sehen",
  见: "Sehen",
  叫: "Anruf",
  你: "Du",
  班: "Klasse",
  怎: "Wie",
  么: "Ist es",
  颠: "Weit",
  狂: "verrückt",
  听: "Hören",
  我: "ICH",
  弟: "jüngerer Bruder",
  子: "Sohn",
  诚: "Aufrichtig",
  心: "Herz",
  老: "alt",
  父: "Vater",
  妙: "wunderbar",
  音: "Klang",
  自: "seit",
  胜: "Gewinnen",
  故: "daher",
  状: "Form",
  望: "sehen",
  恕: "Verzeihen",
  罪: "Verbrechen",
  既: "Nun das",
  识: "Wissen",
  且: "Und",
  问: "fragen",
  多: "viele",
  少: "wenige",
  本: "Buch",
  来: "Kommen",
  懵: "dumm",
  懂: "Verstehen",
  知: "Wissen",
  只: "Nur",
  记: "erinnern",
  灶: "Küche",
  下: "Runter",
  常: "oft",
  去: "gehen",
  山: "Berg",
  后: "zurück",
  打: "schlagen",
  好: "Gut",
  桃: "Pfirsich",
  里: "innen",
  吃: "essen",
  饱: "voll",
  矣: "Es ist in Ordnung",
  烂: "faul",
  想: "denken",
  是: "Ja",
  今: "Jetzt",
  要: "wollen",
  从: "aus",
  些: "manche",
  什: "Unterschiedlich",
  但: "Aber",
  凭: "Von",
  尊: "Ehre",
  诲: "anweisen",
  有: "haben",
  气: "Gas",
  儿: "Sohn",
  便: "Hoffnung",
  三: "drei",
  百: "Hundert",
  十: "zehn",
  傍: "Neben",
  皆: "alle",
  正: "Nur",
  果: "Obst",
  哩: "Li",
  意: "Bedeutung",
  思: "denken",
  倾: "gießen",
  个: "indival",
  术: "Technik",
  何: "Was",
  说: "erklären",
  乃: "Also",
  请: "Bitte",
  扶: "helfen",
  鸾: "Luan",
  卜: "vorhersagen",
  揲: "Sortieren Sie göttliche Stiele",
  蓍: "Yarl",
  能: "fähig",
  趋: "Trend",
  吉: "glücklich",
  避: "vermeiden",
  凶: "erbittert",
  理: "Grund",
  似: "wie",
  这: "Das",
  般: "Normal",
  可: "Kann",
  长: "lang",
  生: "geboren",
};

const translations_fr = {
  话: "parler",
  表: "surface",
  美: "beau",
  猴: "singe",
  王: "roi",
  得: "devoir",
  了: "C'est",
  姓: "nom de famille",
  名: "nom",
  怡: "Yi",
  然: "Bien sûr",
  踊: "saut",
  跃: "saut",
  对: "droite",
  菩: "Bodhisattva",
  提: "porter",
  前: "avant",
  作: "faire",
  礼: "présent",
  启: "commencer",
  谢: "Merci",
  那: "Que",
  祖: "Ancêtre",
  师: "division",
  即: "Tout de suite",
  命: "vie",
  大: "grand",
  众: "Tous",
  引: "plomb",
  孙: "Soleil",
  悟: "Éclaircissement",
  空: "nul",
  出: "dehors",
  二: "deux",
  门: "Porte",
  外: "dehors",
  教: "enseigner",
  他: "il",
  洒: "saupoudrer",
  扫: "balayer",
  应: "répondre",
  进: "Entrer",
  退: "retraite",
  周: "semaine",
  旋: "Tourbillon",
  之: "De",
  节: "Festival",
  仙: "Fée",
  奉: "Feng",
  行: "D'ACCORD",
  而: "et",
  到: "arriver",
  又: "encore",
  拜: "au revoir",
  兄: "Frère",
  就: "Immédiatement",
  于: "À",
  廊: "galerie",
  庑: "véranda",
  间: "entre",
  安: "installer",
  排: "Rangée",
  寝: "dormir",
  处: "Où",
  次: "De premier ordre",
  早: "matin",
  与: "et",
  学: "étude",
  言: "Mot",
  语: "langue",
  貌: "apparence",
  讲: "parler",
  经: "à travers",
  论: "Argument",
  道: "route",
  习: "habitude",
  字: "Personnage",
  焚: "brûler",
  香: "parfumé",
  每: "Chaque",
  日: "jour",
  如: "comme",
  此: "ce",
  闲: "inactif",
  时: "heure",
  地: "atterrir",
  锄: "houe",
  园: "jardin",
  养: "garder",
  花: "fleur",
  修: "construire",
  树: "Arbre",
  寻: "À la recherche de",
  柴: "bois de chauffage",
  燃: "Brûler",
  火: "feu",
  挑: "prendre",
  水: "eau",
  运: "transport",
  浆: "Boue",
  凡: "N'importe lequel",
  所: "Lieu",
  用: "utiliser",
  物: "Des choses",
  无: "aucun",
  一: "un",
  不: "Non",
  备: "Préparer",
  在: "exister",
  洞: "Trou",
  中: "milieu",
  觉: "Dormir",
  倏: "Soudainement",
  六: "six",
  七: "Sept",
  年: "Année",
  登: "Se connecter",
  坛: "autel",
  高: "haut",
  坐: "s'asseoir",
  唤: "Appel",
  集: "ensemble",
  诸: "divers",
  开: "ouvrir",
  旁: "à côté de",
  闻: "odeur",
  喜: "bonheur",
  抓: "Saisir",
  耳: "Oreille",
  挠: "gratter",
  腮: "joue",
  眉: "sourcil",
  眼: "Œil",
  笑: "rire",
  忍: "Tolérer",
  住: "en direct",
  手: "main",
  舞: "danse",
  足: "pied",
  蹈: "Danse",
  忽: "soudainement",
  被: "édredon",
  看: "regarder",
  见: "Voir",
  叫: "Appel",
  你: "toi",
  班: "classe",
  怎: "Comment",
  么: "Est-ce",
  颠: "Loin",
  狂: "fou",
  听: "écouter",
  我: "je",
  弟: "jeune frère",
  子: "fils",
  诚: "Sincère",
  心: "Cœur",
  老: "vieux",
  父: "père",
  妙: "merveilleux",
  音: "son",
  自: "depuis",
  胜: "Gagner",
  故: "Donc",
  状: "forme",
  望: "voir",
  恕: "Pardonner",
  罪: "crime",
  既: "maintenant que",
  识: "connaissance",
  且: "et",
  问: "demander",
  多: "beaucoup",
  少: "peu",
  本: "Livre",
  来: "Viens",
  懵: "stupide",
  懂: "Comprendre",
  知: "Savoir",
  只: "Seulement",
  记: "souviens-toi",
  灶: "cuisine",
  下: "Vers le bas",
  常: "souvent",
  去: "aller",
  山: "Montagne",
  后: "dos",
  打: "battre",
  好: "bien",
  桃: "Pêche",
  里: "à l'intérieur",
  吃: "manger",
  饱: "complet",
  矣: "C'est bon",
  烂: "pourri",
  想: "pense",
  是: "Oui",
  今: "maintenant",
  要: "vouloir",
  从: "depuis",
  些: "quelques",
  什: "Varié",
  但: "mais",
  凭: "Par",
  尊: "Honneur",
  诲: "instruire",
  有: "avoir",
  气: "gaz",
  儿: "Fils",
  便: "Espoir",
  三: "trois",
  百: "Cent",
  十: "dix",
  傍: "À côté de",
  皆: "tous",
  正: "juste",
  果: "fruit",
  哩: "Li",
  意: "signification",
  思: "pense",
  倾: "verser",
  个: "autonome",
  术: "Technique",
  何: "quoi",
  说: "expliquer",
  乃: "Donc",
  请: "s'il te plaît",
  扶: "aide",
  鸾: "Luan",
  卜: "prédire",
  揲: "Trier les tiges de divine",
  蓍: "Yarl",
  能: "capable",
  趋: "S'orienter",
  吉: "chanceux",
  避: "éviter",
  凶: "féroce",
  理: "raison",
  似: "comme",
  这: "ce",
  般: "Normale",
  可: "Peut",
  长: "long",
  生: "né",
};

const tianwen_translation_map_en = {
  话表美猴王得了姓名: "The Monkey King got his name",
  怡然踊跃: "Enjoyed happily",
  对菩提前作礼启谢: "Thank you for the Bodhi",
  那祖师即命大众引孙悟空出二门外:
    "The ancestor ordered the public to lead Sun Wukong out of the second gate",
  教他洒扫应对: "Teach him how to clean up",
  进退周旋之节: "The festival of advance and retreat",
  众仙奉行而出: "All the immortals follow",
  悟空到门外: "Wukong is out of the door",
  又拜了大众师兄: "I worshiped Mr. Volkswagen again",
  就于廊庑之间: "Just between the corridors",
  安排寝处: "Arrange a bedding",
  次早: "Next morning",
  与众师兄学言语礼貌: "Learn politeness with all the senior brothers",
  讲经论道: "Preaching and treating the scriptures",
  习字焚香: "Cultivate incense",
  每日如此: "This is how it is every day",
  闲时即扫地锄园: "Sweep the floor and hoe the garden when you are free",
  养花修树: "Growing flowers and repairing trees",
  寻柴燃火: "Find firewood and burn fire",
  挑水运浆: "Carry water and transport slurry",
  凡所用之物: "Anything used",
  无一不备: "All are prepared",
  在洞中不觉倏六七年: "Six or seven years have passed in the cave",
  一日: "One day",
  祖师登坛高坐: "The ancestors ascended to the altar and sat high",
  唤集诸仙: "Call the Immortals",
  开讲大道: "Talk about the road",
  孙悟空在旁闻讲: "Sun Wukong heard about it",
  喜得他抓耳挠腮: "He was so happy that he scratched his ears and cheeks",
  眉花眼笑: "Bleaked eyebrows and smile",
  忍不住手之舞之: "Can't help dancing with your hands",
  足之蹈之: "The foot is sings",
  忽被祖师看见: "Suddenly, the ancestor saw it",
  叫孙悟空道: "Called Sun Wukong",
  你在班中: "You're in class",
  怎么颠狂跃舞: "How to dance wildly",
  不听我讲: "Don't listen to me",
  悟空道: "Wukong Tao",
  弟子诚心听讲: "Disciple listens sincerely",
  听到老师父妙音处: "Hearing the wonderful voice of the teacher",
  喜不自胜: "Be happy",
  故不觉作此踊跃之状: "Therefore, I did not realize this excited",
  望师父恕罪: "I hope Master forgives sin",
  祖师道: "The Patriarch's Way",
  你既识妙音: "You know the wonderful sound",
  我且问你: "I'll ask you",
  你到洞中多少时了: "How long has it been since you got into the hole",
  悟空道: "Wukong Tao",
  弟子本来懵懂: "The disciple was ignorant",
  不知多少时节: "I don't know how many times",
  只记得灶下无火: "Just remember there is no fire under the stove",
  常去山后打柴: "I often go to the mountain to pick up firewood",
  见一山好桃树: "See a beautiful peach tree",
  我在那里吃了七次饱桃矣: "I ate there seven times",
  祖师道: "The Patriarch's Way",
  那山唤名烂桃山: "That mountain is called Lantao Mountain",
  你既吃七次: "You've eaten seven times",
  想是七年了: "It's been seven years",
  你今要从我学些什么道: "What do you want to learn from me now",
  悟空道: "Wukong Tao",
  但凭尊师教诲: "But by respecting the teacher's teachings",
  只是有些道气儿: "Just a little bit angrily",
  弟子便就学了: "The disciples learned",
  祖师道: "The Patriarch's Way",
  道: "road",
  字门中有三百六十傍门: "There are 360 ​​gates in the word gate",
  傍门皆有正果: "There are good results in the door",
  不知你学那一门哩: "I don't know which subject you are learning",
  悟空道: "Wukong Tao",
  凭尊师意思: "Respect the teacher's will",
  弟子倾心听从: "Disciples obey",
  祖师道: "The Patriarch's Way",
  我教你个: "I'll teach you",
  术: "Technique",
  字门中之道: "The Way in the Word",
  如何: "how",
  悟空道: "Wukong Tao",
  术门之道怎么说: "How to say the way of the art",
  祖师道: "The Patriarch's Way",
  术字门中: 'The word "Shu"',
  乃是些请仙扶鸾:
    "It's just some people who ask the immortal to help the phoenix",
  问卜揲蓍: "Ask for the divination",
  能知趋吉避凶之理:
    "Can know the principle of seeking good and avoiding bad luck",
  悟空道: "Wukong Tao",
  似这般可得长生么: "Can you live forever like this",
  祖师道: "The Patriarch's Way",
  不能: "cannot",
  不能: "cannot",
  悟空道: "Wukong Tao",
  不学: "Don't learn",
  不学: "Don't learn",
};

const tianwen_translation_map_de = {
  话表美猴王得了姓名: "Der Affenkönig bekam seinen Namen",
  怡然踊跃: "Ich habe glücklich genossen",
  对菩提前作礼启谢: "Danke für den Bodhi",
  那祖师即命大众引孙悟空出二门外:
    "Der Vorfahr befahl der Öffentlichkeit, Sun Wukong aus dem zweiten Tor zu führen",
  教他洒扫应对: "Bringen Sie ihm bei, wie man aufräumt",
  进退周旋之节: "Das Festival von Fortschritt und Rückzugsort",
  众仙奉行而出: "Alle Unsterblichen folgen",
  悟空到门外: "Wukong ist außerhalb der Tür",
  又拜了大众师兄: "Ich verehrte Mr. Volkswagen wieder",
  就于廊庑之间: "Nur zwischen den Korridoren",
  安排寝处: "Arrangieren Sie eine Bettwäsche",
  次早: "Am nächsten Morgen",
  与众师兄学言语礼貌: "Lerne Höflichkeit mit allen hochrangigen Brüdern",
  讲经论道: "Predigen und Behandlung der heiligen Schriften",
  习字焚香: "Weihrauch kultivieren",
  每日如此: "So ist es jeden Tag",
  闲时即扫地锄园:
    "Fegen Sie den Boden und hacken Sie den Garten, wenn Sie frei sind",
  养花修树: "Wachsende Blumen und Reparatur von Bäumen",
  寻柴燃火: "Finden Sie Brennholz und brennen Sie Feuer",
  挑水运浆: "Tragen Sie Wasser und transportieren die Aufschlämmung",
  凡所用之物: "Alles benutzt",
  无一不备: "Alle sind vorbereitet",
  在洞中不觉倏六七年: "Sechs oder sieben Jahre sind in der Höhle vergangen",
  一日: "Einmal",
  祖师登坛高坐: "Die Vorfahren stiegen zum Altar auf und saßen hoch",
  唤集诸仙: "Rufen Sie die Unsterblichen an",
  开讲大道: "Über die Straße sprechen",
  孙悟空在旁闻讲: "Sun Wukong hörte davon",
  喜得他抓耳挠腮:
    "Er war so glücklich, dass er sich an den Ohren und Wangen kratzte",
  眉花眼笑: "Trostige Augenbrauen und Lächeln",
  忍不住手之舞之: "Ich kann nicht helfen, mit deinen Händen zu tanzen",
  足之蹈之: "Der Fuß singt",
  忽被祖师看见: "Plötzlich sah der Vorfahr es",
  叫孙悟空道: "Sun Wukong genannt",
  你在班中: "Du bist im Unterricht",
  怎么颠狂跃舞: "Wie man wild tanzt",
  不听我讲: "Hör mir nicht zu",
  悟空道: "Wukong Tao",
  弟子诚心听讲: "Der Schüler hört aufrichtig zu",
  听到老师父妙音处: "Die wundervolle Stimme des Lehrers hören",
  喜不自胜: "Sei glücklich",
  故不觉作此踊跃之状: "Deshalb merkte ich das nicht aufgeregt",
  望师父恕罪: "Ich hoffe Meister vergibt Sünde",
  祖师道: "Der Weg des Patriarchen",
  你既识妙音: "Sie kennen den wunderbaren Klang",
  我且问你: "Ich werde dich fragen",
  你到洞中多少时了: "Wie lange ist es her, seit du in das Loch gekommen bist?",
  悟空道: "Wukong Tao",
  弟子本来懵懂: "Der Schüler war unwissend",
  不知多少时节: "Ich weiß nicht wie oft",
  只记得灶下无火: "Denken Sie daran, es gibt kein Feuer unter dem Herd",
  常去山后打柴: "Ich gehe oft zum Berg, um ein Feuerholz abzuholen",
  见一山好桃树: "Sehen Sie einen schönen Pfirsichbaum",
  我在那里吃了七次饱桃矣: "Ich habe dort sieben Mal gegessen",
  祖师道: "Der Weg des Patriarchen",
  那山唤名烂桃山: "Dieser Berg heißt Lantao Mountain",
  你既吃七次: "Sie haben sieben Mal gegessen",
  想是七年了: "Es sind sieben Jahre her",
  你今要从我学些什么道: "Was willst du jetzt von mir lernen?",
  悟空道: "Wukong Tao",
  但凭尊师教诲: "Aber durch Respekt der Lehren des Lehrers",
  只是有些道气儿: "Nur ein bisschen wütend",
  弟子便就学了: "Die Jünger lernten",
  祖师道: "Der Weg des Patriarchen",
  道: "Straße",
  字门中有三百六十傍门: "Es gibt 360 Tore im Word -Tor",
  傍门皆有正果: "Es gibt gute Ergebnisse in der Tür",
  不知你学那一门哩: "Ich weiß nicht, welches Thema Sie lernen",
  悟空道: "Wukong Tao",
  凭尊师意思: "Respektieren den Willen des Lehrers",
  弟子倾心听从: "Jünger gehorchen",
  祖师道: "Der Weg des Patriarchen",
  我教你个: "Ich werde dich unterrichten",
  术: "Technik",
  字门中之道: "Der Weg im Wort",
  如何: "Wie",
  悟空道: "Wukong Tao",
  术门之道怎么说: "Wie man den Weg der Kunst sagt",
  祖师道: "Der Weg des Patriarchen",
  术字门中: 'Das Wort "Shu"',
  乃是些请仙扶鸾:
    "Es sind nur einige Leute, die den Unsterblichen bitten, dem Phönix zu helfen",
  问卜揲蓍: "Fragen Sie nach der Wahrsagerei",
  能知趋吉避凶之理:
    "Kann das Prinzip wissen, gut zu suchen und Pech zu vermeiden",
  悟空道: "Wukong Tao",
  似这般可得长生么: "Kannst du für immer so leben?",
  祖师道: "Der Weg des Patriarchen",
  不能: "kann nicht",
  不能: "kann nicht",
  悟空道: "Wukong Tao",
  不学: "Lerne nicht",
  不学: "Lerne nicht",
};

const tianwen_translation_map_fr = {
  话表美猴王得了姓名: "Le roi de singe a obtenu son nom",
  怡然踊跃: "Apprécié heureux",
  对菩提前作礼启谢: "Merci pour le Bodhi",
  那祖师即命大众引孙悟空出二门外:
    "L'ancêtre a ordonné au public de conduire le soleil Wukong hors de la deuxième porte",
  教他洒扫应对: "Apprenez-lui à nettoyer",
  进退周旋之节: "Le festival de l'avance et de la retraite",
  众仙奉行而出: "Tous les immortels suivent",
  悟空到门外: "Wukong est hors de la porte",
  又拜了大众师兄: "J'ai adoré M. Volkswagen à nouveau",
  就于廊庑之间: "Juste entre les couloirs",
  安排寝处: "Organiser une literie",
  次早: "Le lendemain",
  与众师兄学言语礼貌: "Apprendre la politesse avec tous les frères seniors",
  讲经论道: "Prêcher et traiter les Écritures",
  习字焚香: "Cultiver l'encens",
  每日如此: "C'est comme ça que c'est tous les jours",
  闲时即扫地锄园: "Balayez le sol et houle le jardin lorsque vous êtes libre",
  养花修树: "Cultiver des fleurs et réparation des arbres",
  寻柴燃火: "Trouver du bois de chauffage et brûler le feu",
  挑水运浆: "Transporter de l'eau et du lisier de transport",
  凡所用之物: "Tout ce qui est utilisé",
  无一不备: "Tous sont préparés",
  在洞中不觉倏六七年: "Six ou sept ans se sont écoulés dans la grotte",
  一日: "Un jour",
  祖师登坛高坐: "Les ancêtres sont montés sur l'autel et étaient assis haut",
  唤集诸仙: "Appeler les Immortels",
  开讲大道: "Parler de la route",
  孙悟空在旁闻讲: "Sun Wukong en a entendu parler",
  喜得他抓耳挠腮:
    "Il était si heureux qu'il se gratte les oreilles et les joues",
  眉花眼笑: "Sourcils sombres et sourire",
  忍不住手之舞之: "Je ne peux pas s'empêcher de danser avec vos mains",
  足之蹈之: "Le pied chante",
  忽被祖师看见: "Soudain, l'ancêtre l'a vu",
  叫孙悟空道: "Appelé Sun Wukong",
  你在班中: "Tu es en classe",
  怎么颠狂跃舞: "Comment danser sauvagement",
  不听我讲: "Ne m'écoute pas",
  悟空道: "Wukong Tao",
  弟子诚心听讲: "Le disciple écoute sincèrement",
  听到老师父妙音处: "Entendre la merveilleuse voix du professeur",
  喜不自胜: "Soyez heureux",
  故不觉作此踊跃之状: "Par conséquent, je ne savais pas que cela excité",
  望师父恕罪: "J'espère que le maître pardonne le péché",
  祖师道: "La voie du patriarche",
  你既识妙音: "Tu connais le son merveilleux",
  我且问你: "Je vais te demander",
  你到洞中多少时了: "Depuis combien de temps vous êtes entré dans le trou",
  悟空道: "Wukong Tao",
  弟子本来懵懂: "Le disciple était ignorant",
  不知多少时节: "Je ne sais pas combien de fois",
  只记得灶下无火: "N'oubliez pas qu'il n'y a pas de feu sous le poêle",
  常去山后打柴:
    "Je vais souvent à la montagne pour ramasser du bois de chauffage",
  见一山好桃树: "Voir un beau pêche",
  我在那里吃了七次饱桃矣: "J'y ai mangé sept fois",
  祖师道: "La voie du patriarche",
  那山唤名烂桃山: "Cette montagne s'appelle Lantao Mountain",
  你既吃七次: "Tu as mangé sept fois",
  想是七年了: "Ça fait sept ans",
  你今要从我学些什么道: "Que voulez-vous apprendre de moi maintenant",
  悟空道: "Wukong Tao",
  但凭尊师教诲: "Mais en respectant les enseignements de l'enseignant",
  只是有些道气儿: "Juste un peu avec colère",
  弟子便就学了: "Les disciples ont appris",
  祖师道: "La voie du patriarche",
  道: "route",
  字门中有三百六十傍门: "Il y a 360 portes dans la porte du mot",
  傍门皆有正果: "Il y a de bons résultats dans la porte",
  不知你学那一门哩: "Je ne sais pas quelle matière vous apprenez",
  悟空道: "Wukong Tao",
  凭尊师意思: "Respecter la volonté de l'enseignant",
  弟子倾心听从: "Les disciples obéissent",
  祖师道: "La voie du patriarche",
  我教你个: "Je t'apprendrai",
  术: "Technique",
  字门中之道: "Le chemin dans le mot",
  如何: "comment",
  悟空道: "Wukong Tao",
  术门之道怎么说: "Comment dire la voie de l'art",
  祖师道: "La voie du patriarche",
  术字门中: 'Le mot "shu"',
  乃是些请仙扶鸾:
    "Ce sont juste des gens qui demandent à l'immortel d'aider le phénix",
  问卜揲蓍: "Demandez la divination",
  能知趋吉避凶之理:
    "Peut connaître le principe de la recherche de bien et d'éviter la malchance",
  悟空道: "Wukong Tao",
  似这般可得长生么: "Pouvez-vous vivre pour toujours comme ça",
  祖师道: "La voie du patriarche",
  不能: "ne peut pas",
  不能: "ne peut pas",
  悟空道: "Wukong Tao",
  不学: "N'apprends pas",
  不学: "N'apprends pas",
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
