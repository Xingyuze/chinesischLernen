const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `美猴王荣归故里
自剿了混世魔王
夺了一口大刀
逐日操演武艺
教小猴砍竹为标
削木为刀
治旗幡
打哨子
一进一退
安营下寨
顽耍多时
忽然静坐处
思想道
我等在此
恐作耍成真
或惊动人王
或有禽王兽王认此犯头
说我们操兵造反
兴师来相杀
汝等都是竹竿木刀
如何对敌
须得锋利剑戟方可
如今奈何
众猴闻说
个个惊恐道
大王所见甚长
只是无处可取
正说间
转上四个老猴
两个是赤尻马猴
两个是通背猿猴
走在面前道
大王
若要治锋利器械
甚是容易
悟空道
怎见容易
四猴道
我们这山
向东去
有二百里水面
那厢乃傲来国界
那国界中有一王位
满城中军民无数
必有金银铜铁等匠作
大王若去那里
或买或造些兵器
教演我等
守护山场
诚所谓保泰长久之机也
悟空闻说
满心欢喜道
汝等在此顽耍
待我去来
好猴王
急纵筋斗云
霎时间过了二百里水面
果然那厢有座城池
六街三市
万户千门
来来往往
人都在光天化日之下
悟空心中想道
这里定有现成的兵器
我待下去买他几件
还不如使个神通觅他几件倒好
他就捻起诀来
念动咒语
向巽地上吸一口气
呼的吹将去
便是一阵风
飞沙走石
好惊人也
炮云起处荡乾坤
黑雾阴霾大地昏
江海波翻鱼蟹怕
山林树折虎狼奔
诸般买卖无商旅
各样生涯不见人
殿上君王归内院
阶前文武转衙门
千秋宝座都吹倒
五凤高楼幌动根`;

const pinyinMap = {
  美: "měi",
  猴: "hóu",
  王: "wáng",
  荣: "róng",
  归: "guī",
  故: "gù",
  里: "lǐ",
  自: "zì",
  剿: "jiǎo",
  了: "le",
  混: "hùn",
  世: "shì",
  魔: "mó",
  夺: "duó",
  一: "yī",
  口: "kǒu",
  大: "dà",
  刀: "dāo",
  逐: "zhú",
  日: "rì",
  操: "cāo",
  演: "yǎn",
  武: "wǔ",
  艺: "yì",
  教: "jiào",
  小: "xiǎo",
  砍: "kǎn",
  竹: "zhú",
  为: "wèi",
  标: "biāo",
  削: "xuē",
  木: "mù",
  治: "zhì",
  旗: "qí",
  幡: "fān",
  打: "dǎ",
  哨: "shào",
  子: "zi",
  进: "jìn",
  退: "tuì",
  安: "ān",
  营: "yíng",
  下: "xià",
  寨: "zhài",
  顽: "wán",
  耍: "shuǎ",
  多: "duō",
  时: "shí",
  忽: "hū",
  然: "rán",
  静: "jìng",
  坐: "zuò",
  处: "chù",
  思: "sī",
  想: "xiǎng",
  道: "dào",
  我: "wǒ",
  等: "děng",
  在: "zài",
  此: "cǐ",
  恐: "kǒng",
  作: "zuò",
  成: "chéng",
  真: "zhēn",
  或: "huò",
  惊: "jīng",
  动: "dòng",
  人: "rén",
  有: "yǒu",
  禽: "qín",
  兽: "shòu",
  认: "rèn",
  犯: "fàn",
  头: "tóu",
  说: "shuō",
  们: "men",
  兵: "bīng",
  造: "zào",
  反: "fǎn",
  兴: "xīng",
  师: "shī",
  来: "lái",
  相: "xiāng",
  杀: "shā",
  汝: "rǔ",
  都: "dōu",
  是: "shì",
  竿: "gān",
  如: "rú",
  何: "hé",
  对: "duì",
  敌: "dí",
  须: "xū",
  得: "dé",
  锋: "fēng",
  利: "lì",
  剑: "jiàn",
  戟: "jǐ",
  方: "fāng",
  可: "kě",
  今: "jīn",
  奈: "nài",
  众: "zhòng",
  闻: "wén",
  个: "gè",
  所: "suǒ",
  见: "jiàn",
  甚: "shèn",
  长: "zhǎng",
  只: "zhǐ",
  无: "wú",
  取: "qǔ",
  正: "zhèng",
  间: "jiān",
  转: "zhuǎn",
  上: "shàng",
  四: "sì",
  老: "lǎo",
  两: "liǎng",
  赤: "chì",
  尻: "kāo",
  马: "mǎ",
  通: "tōng",
  背: "bèi",
  猿: "yuán",
  走: "zǒu",
  面: "miàn",
  前: "qián",
  若: "ruò",
  要: "yào",
  器: "qì",
  械: "xiè",
  容: "róng",
  易: "yì",
  悟: "wù",
  空: "kōng",
  怎: "zěn",
  这: "zhè",
  山: "shān",
  向: "xiàng",
  东: "dōng",
  去: "qù",
  二: "èr",
  百: "bǎi",
  水: "shuǐ",
  那: "nà",
  厢: "xiāng",
  乃: "nǎi",
  傲: "ào",
  国: "guó",
  界: "jiè",
  中: "zhōng",
  位: "wèi",
  满: "mǎn",
  城: "chéng",
  军: "jūn",
  民: "mín",
  数: "shù",
  必: "bì",
  金: "jīn",
  银: "yín",
  铜: "tóng",
  铁: "tiě",
  匠: "jiàng",
  买: "mǎi",
  些: "xiē",
  守: "shǒu",
  护: "hù",
  场: "chǎng",
  诚: "chéng",
  谓: "wèi",
  保: "bǎo",
  泰: "tài",
  久: "jiǔ",
  之: "zhī",
  机: "jī",
  也: "yě",
  心: "xīn",
  欢: "huān",
  喜: "xǐ",
  待: "dài",
  好: "hǎo",
  急: "jí",
  纵: "zòng",
  筋: "jīn",
  斗: "dǒu",
  云: "yún",
  霎: "shà",
  过: "guò",
  果: "guǒ",
  座: "zuò",
  池: "chí",
  六: "liù",
  街: "jiē",
  三: "sān",
  市: "shì",
  万: "wàn",
  户: "hù",
  千: "qiān",
  门: "mén",
  往: "wǎng",
  光: "guāng",
  天: "tiān",
  化: "huà",
  定: "dìng",
  现: "xiàn",
  的: "de",
  他: "tā",
  几: "jǐ",
  件: "jiàn",
  还: "hái",
  不: "bù",
  使: "shǐ",
  神: "shén",
  觅: "mì",
  倒: "dào",
  就: "jiù",
  捻: "niǎn",
  起: "qǐ",
  诀: "jué",
  念: "niàn",
  咒: "zhòu",
  语: "yǔ",
  巽: "xùn",
  地: "dì",
  吸: "xī",
  气: "qì",
  呼: "hū",
  吹: "chuī",
  将: "jiāng",
  便: "biàn",
  阵: "zhèn",
  风: "fēng",
  飞: "fēi",
  沙: "shā",
  石: "shí",
  炮: "pào",
  荡: "dàng",
  乾: "qián",
  坤: "kūn",
  黑: "hēi",
  雾: "wù",
  阴: "yīn",
  霾: "mái",
  昏: "hūn",
  江: "jiāng",
  海: "hǎi",
  波: "bō",
  翻: "fān",
  鱼: "yú",
  蟹: "xiè",
  怕: "pà",
  林: "lín",
  树: "shù",
  折: "zhé",
  虎: "hǔ",
  狼: "láng",
  奔: "bēn",
  诸: "zhū",
  般: "bān",
  卖: "mài",
  商: "shāng",
  旅: "lǚ",
  各: "gè",
  样: "yàng",
  生: "shēng",
  涯: "yá",
  殿: "diàn",
  君: "jūn",
  内: "nèi",
  院: "yuàn",
  阶: "jiē",
  文: "wén",
  衙: "yá",
  秋: "qiū",
  宝: "bǎo",
  五: "wǔ",
  凤: "fèng",
  高: "gāo",
  楼: "lóu",
  幌: "huǎng",
  根: "gēn",
};

const translations_en = {
  美: "beautiful",
  猴: "monkey",
  王: "king",
  荣: "Honor",
  归: "Go home",
  故: "Therefore",
  里: "inside",
  自: "since",
  剿: "Suppress",
  了: "It's",
  混: "mix",
  世: "World",
  魔: "magic",
  夺: "Take it",
  一: "one",
  口: "mouth",
  大: "big",
  刀: "knife",
  逐: "By",
  日: "day",
  操: "Hold",
  演: "play",
  武: "Wu",
  艺: "art",
  教: "teach",
  小: "Small",
  砍: "cut",
  竹: "bamboo",
  为: "for",
  标: "Standard",
  削: "cut",
  木: "Wood",
  治: "rule",
  旗: "flag",
  幡: "banner",
  打: "beat",
  哨: "post",
  子: "son",
  进: "Enter",
  退: "retreat",
  安: "install",
  营: "camp",
  下: "Down",
  寨: "Village",
  顽: "stubborn",
  耍: "Play",
  多: "many",
  时: "hour",
  忽: "suddenly",
  然: "Of course",
  静: "quiet",
  坐: "sit",
  处: "Where",
  思: "think",
  想: "think",
  道: "road",
  我: "I",
  等: "wait",
  在: "exist",
  此: "this",
  恐: "fear",
  作: "do",
  成: "become",
  真: "real",
  或: "or",
  惊: "shock",
  动: "move",
  人: "people",
  有: "have",
  禽: "birds",
  兽: "beast",
  认: "recognize",
  犯: "Infringement",
  头: "head",
  说: "explain",
  们: "We",
  兵: "Soldier",
  造: "make",
  反: "opposite",
  兴: "prosper",
  师: "division",
  来: "Come",
  相: "Mutually",
  杀: "kill",
  汝: "You",
  都: "All",
  是: "yes",
  竿: "pole",
  如: "like",
  何: "what",
  对: "right",
  敌: "enemy",
  须: "Must",
  得: "have to",
  锋: "Front",
  利: "profit",
  剑: "sword",
  戟: "halberd",
  方: "square",
  可: "Can",
  今: "now",
  奈: "Nye",
  众: "All",
  闻: "smell",
  个: "indivual",
  所: "Place",
  见: "See",
  甚: "very",
  长: "long",
  只: "Only",
  无: "none",
  取: "Pick",
  正: "just",
  间: "between",
  转: "change",
  上: "superior",
  四: "Four",
  老: "old",
  两: "two",
  赤: "red",
  尻: "Butt",
  马: "horse",
  通: "Pass",
  背: "back",
  猿: "ape",
  走: "Walk",
  面: "noodle",
  前: "forward",
  若: "like",
  要: "want",
  器: "Device",
  械: "Machinery",
  容: "Allow",
  易: "easy",
  悟: "Enlightenment",
  空: "null",
  怎: "How",
  这: "this",
  山: "Mountain",
  向: "Towards",
  东: "East",
  去: "go",
  二: "two",
  百: "Hundred",
  水: "water",
  那: "That",
  厢: "Fence",
  乃: "So",
  傲: "proud",
  国: "country",
  界: "boundary",
  中: "middle",
  位: "Bit",
  满: "Full",
  城: "city",
  军: "military",
  民: "civil",
  数: "number",
  必: "must",
  金: "gold",
  银: "silver",
  铜: "copper",
  铁: "iron",
  匠: "Craftsman",
  买: "purchase",
  些: "some",
  守: "Guard",
  护: "Protection",
  场: "field",
  诚: "Sincere",
  谓: "Present",
  保: "Save",
  泰: "Thai",
  久: "Long",
  之: "Of",
  机: "machine",
  也: "also",
  心: "Heart",
  欢: "joyous",
  喜: "happiness",
  待: "treat",
  好: "good",
  急: "urgent",
  纵: "vertical",
  筋: "Tendons",
  斗: "fight",
  云: "cloud",
  霎: "Suddenly",
  过: "Pass",
  果: "fruit",
  座: "seat",
  池: "Pool",
  六: "six",
  街: "street",
  三: "three",
  市: "city",
  万: "Ten thousand",
  户: "household",
  千: "thousand",
  门: "Door",
  往: "Past",
  光: "Light",
  天: "sky",
  化: "change",
  定: "Certainly",
  现: "now",
  的: "of",
  他: "he",
  几: "Several",
  件: "Parts",
  还: "return",
  不: "No",
  使: "make",
  神: "god",
  觅: "seek",
  倒: "fall",
  就: "At once",
  捻: "twist",
  起: "rise",
  诀: "Tips",
  念: "read",
  咒: "curse",
  语: "language",
  巽: "Xun",
  地: "land",
  吸: "suck",
  气: "gas",
  呼: "call",
  吹: "blow",
  将: "Will",
  便: "Hope",
  阵: "Array",
  风: "wind",
  飞: "fly",
  沙: "sand",
  石: "stone",
  炮: "gun",
  荡: "swing",
  乾: "Dry",
  坤: "Kun",
  黑: "black",
  雾: "fog",
  阴: "Negative",
  霾: "haze",
  昏: "faint",
  江: "River",
  海: "ocean",
  波: "Wave",
  翻: "turn",
  鱼: "fish",
  蟹: "crab",
  怕: "Afraid",
  林: "Forest",
  树: "Tree",
  折: "fold",
  虎: "Tiger",
  狼: "Wolf",
  奔: "Run",
  诸: "various",
  般: "Normal",
  卖: "Sell",
  商: "business",
  旅: "trip",
  各: "each",
  样: "Sample",
  生: "born",
  涯: "Career",
  殿: "temple",
  君: "Jun",
  内: "Inside",
  院: "hospital",
  阶: "Level",
  文: "arts",
  衙: "Yai",
  秋: "Autumn",
  宝: "precious",
  五: "five",
  凤: "phoenix",
  高: "high",
  楼: "building",
  幌: "联",
  根: "root",
};

const translations_de = {
  美: "Schön",
  猴: "Affe",
  王: "König",
  荣: "Ehre",
  归: "Nach Hause gehen",
  故: "daher",
  里: "innen",
  自: "seit",
  剿: "Unterdrücken",
  了: "Es ist",
  混: "mischen",
  世: "Welt",
  魔: "Magie",
  夺: "Nimm es",
  一: "eins",
  口: "Mund",
  大: "groß",
  刀: "Messer",
  逐: "Von",
  日: "Tag",
  操: "Halten",
  演: "spielen",
  武: "Wu",
  艺: "Kunst",
  教: "unterrichten",
  小: "Klein",
  砍: "schneiden",
  竹: "Bambus",
  为: "für",
  标: "Standard",
  削: "schneiden",
  木: "Holz",
  治: "Regel",
  旗: "Flagge",
  幡: "Banner",
  打: "schlagen",
  哨: "Post",
  子: "Sohn",
  进: "Eingeben",
  退: "Rückzug",
  安: "installieren",
  营: "Lager",
  下: "Runter",
  寨: "Dorf",
  顽: "hartnäckig",
  耍: "Spielen",
  多: "viele",
  时: "Stunde",
  忽: "plötzlich",
  然: "Natürlich",
  静: "ruhig",
  坐: "sitzen",
  处: "Wo",
  思: "denken",
  想: "denken",
  道: "Straße",
  我: "ICH",
  等: "Warten",
  在: "existieren",
  此: "Das",
  恐: "Furcht",
  作: "Tun",
  成: "werden",
  真: "real",
  或: "oder",
  惊: "Schock",
  动: "bewegen",
  人: "Menschen",
  有: "haben",
  禽: "Vögel",
  兽: "Tier",
  认: "erkennen",
  犯: "Verletzung",
  头: "Kopf",
  说: "erklären",
  们: "Wir",
  兵: "Soldat",
  造: "machen",
  反: "Gegenteil",
  兴: "gedeihen",
  师: "Division",
  来: "Kommen",
  相: "Gegenseitig",
  杀: "töten",
  汝: "Du",
  都: "Alle",
  是: "Ja",
  竿: "Pole",
  如: "wie",
  何: "Was",
  对: "Rechts",
  敌: "Feind",
  须: "Muss",
  得: "müssen",
  锋: "Front",
  利: "profitieren",
  剑: "Schwert",
  戟: "Hellebarde",
  方: "Quadrat",
  可: "Kann",
  今: "Jetzt",
  奈: "Nye",
  众: "Alle",
  闻: "Geruch",
  个: "indival",
  所: "Ort",
  见: "Sehen",
  甚: "sehr",
  长: "lang",
  只: "Nur",
  无: "keiner",
  取: "Wählen",
  正: "Nur",
  间: "zwischen",
  转: "ändern",
  上: "Vorgesetzter",
  四: "Vier",
  老: "alt",
  两: "zwei",
  赤: "Rot",
  尻: "Hintern",
  马: "Pferd",
  通: "Passieren",
  背: "zurück",
  猿: "Affe",
  走: "Gehen",
  面: "Nudel",
  前: "nach vorne",
  若: "wie",
  要: "wollen",
  器: "Gerät",
  械: "Maschinen",
  容: "Erlauben",
  易: "einfach",
  悟: "Aufklärung",
  空: "NULL",
  怎: "Wie",
  这: "Das",
  山: "Berg",
  向: "In Richtung",
  东: "Ost",
  去: "gehen",
  二: "zwei",
  百: "Hundert",
  水: "Wasser",
  那: "Das",
  厢: "Zaun",
  乃: "Also",
  傲: "stolz",
  国: "Land",
  界: "Grenze",
  中: "Mitte",
  位: "Bisschen",
  满: "Voll",
  城: "Stadt",
  军: "Militär",
  民: "bürgerlich",
  数: "Nummer",
  必: "muss",
  金: "Gold",
  银: "Silber",
  铜: "Kupfer",
  铁: "Eisen",
  匠: "Handwerker",
  买: "kaufen",
  些: "manche",
  守: "Bewachen",
  护: "Schutz",
  场: "Feld",
  诚: "Aufrichtig",
  谓: "Gegenwärtig",
  保: "Speichern",
  泰: "Thai",
  久: "Lang",
  之: "Von",
  机: "Maschine",
  也: "Auch",
  心: "Herz",
  欢: "freudig",
  喜: "Glück",
  待: "behandeln",
  好: "Gut",
  急: "dringend",
  纵: "Vertikale",
  筋: "Sehnen",
  斗: "kämpfen",
  云: "Wolke",
  霎: "Plötzlich",
  过: "Passieren",
  果: "Obst",
  座: "Sitz",
  池: "Pool",
  六: "sechs",
  街: "Straße",
  三: "drei",
  市: "Stadt",
  万: "Zehntausend",
  户: "Haushalt",
  千: "tausend",
  门: "Tür",
  往: "Vergangenheit",
  光: "Licht",
  天: "Himmel",
  化: "ändern",
  定: "Sicherlich",
  现: "Jetzt",
  的: "von",
  他: "Er",
  几: "Mehrere",
  件: "Teile",
  还: "zurückkehren",
  不: "NEIN",
  使: "machen",
  神: "Gott",
  觅: "suchen",
  倒: "fallen",
  就: "Auf einmal",
  捻: "Twist",
  起: "erheben",
  诀: "Tipps",
  念: "lesen",
  咒: "Fluch",
  语: "Sprache",
  巽: "Xun",
  地: "Land",
  吸: "saugen",
  气: "Gas",
  呼: "Anruf",
  吹: "Schlag",
  将: "Wille",
  便: "Hoffnung",
  阵: "Array",
  风: "Wind",
  飞: "fliegen",
  沙: "Sand",
  石: "Stein",
  炮: "Pistole",
  荡: "Swing",
  乾: "Trocken",
  坤: "Kun",
  黑: "Schwarz",
  雾: "Nebel",
  阴: "Negativ",
  霾: "Dunst",
  昏: "schwach",
  江: "Fluss",
  海: "Ozean",
  波: "Welle",
  翻: "drehen",
  鱼: "Fisch",
  蟹: "Krabbe",
  怕: "Besorgt",
  林: "Wald",
  树: "Baum",
  折: "falten",
  虎: "Tiger",
  狼: "Wolf",
  奔: "Laufen",
  诸: "verschieden",
  般: "Normal",
  卖: "Verkaufen",
  商: "Geschäft",
  旅: "Reise",
  各: "jede",
  样: "Probe",
  生: "geboren",
  涯: "Karriere",
  殿: "Tempel",
  君: "Jun",
  内: "Innen",
  院: "Krankenhaus",
  阶: "Ebene",
  文: "Künste",
  衙: "Yai",
  秋: "Herbst",
  宝: "wertvoll",
  五: "fünf",
  凤: "Phönix",
  高: "hoch",
  楼: "Gebäude",
  幌: "联",
  根: "Wurzel",
};

const translations_fr = {
  美: "beau",
  猴: "singe",
  王: "roi",
  荣: "Honneur",
  归: "Rentrer chez eux",
  故: "Donc",
  里: "à l'intérieur",
  自: "depuis",
  剿: "Réprimer",
  了: "C'est",
  混: "mélanger",
  世: "Monde",
  魔: "magie",
  夺: "Prendre",
  一: "un",
  口: "bouche",
  大: "grand",
  刀: "couteau",
  逐: "Par",
  日: "jour",
  操: "Prise",
  演: "jouer",
  武: "Wu",
  艺: "art",
  教: "enseigner",
  小: "Petit",
  砍: "couper",
  竹: "bambou",
  为: "pour",
  标: "Standard",
  削: "couper",
  木: "Bois",
  治: "règle",
  旗: "drapeau",
  幡: "bannière",
  打: "battre",
  哨: "poste",
  子: "fils",
  进: "Entrer",
  退: "retraite",
  安: "installer",
  营: "camp",
  下: "Vers le bas",
  寨: "Village",
  顽: "têtu",
  耍: "Jouer",
  多: "beaucoup",
  时: "heure",
  忽: "soudainement",
  然: "Bien sûr",
  静: "calme",
  坐: "s'asseoir",
  处: "Où",
  思: "pense",
  想: "pense",
  道: "route",
  我: "je",
  等: "attendez",
  在: "exister",
  此: "ce",
  恐: "peur",
  作: "faire",
  成: "devenir",
  真: "réel",
  或: "ou",
  惊: "choc",
  动: "se déplacer",
  人: "personnes",
  有: "avoir",
  禽: "oiseaux",
  兽: "bête",
  认: "reconnaître",
  犯: "Infraction",
  头: "tête",
  说: "expliquer",
  们: "Nous",
  兵: "Soldat",
  造: "faire",
  反: "opposé",
  兴: "prospérer",
  师: "division",
  来: "Viens",
  相: "Mutuellement",
  杀: "tuer",
  汝: "Toi",
  都: "Tous",
  是: "Oui",
  竿: "pôle",
  如: "comme",
  何: "quoi",
  对: "droite",
  敌: "ennemi",
  须: "Doit",
  得: "devoir",
  锋: "Devant",
  利: "profit",
  剑: "épée",
  戟: "hallebarde",
  方: "carré",
  可: "Peut",
  今: "maintenant",
  奈: "Nye",
  众: "Tous",
  闻: "odeur",
  个: "autonome",
  所: "Lieu",
  见: "Voir",
  甚: "très",
  长: "long",
  只: "Seulement",
  无: "aucun",
  取: "Prendre",
  正: "juste",
  间: "entre",
  转: "changement",
  上: "supérieur",
  四: "Quatre",
  老: "vieux",
  两: "deux",
  赤: "rouge",
  尻: "Bout",
  马: "cheval",
  通: "Passer",
  背: "dos",
  猿: "singe",
  走: "Marcher",
  面: "nouille",
  前: "avant",
  若: "comme",
  要: "vouloir",
  器: "Appareil",
  械: "Machinerie",
  容: "Permettre",
  易: "facile",
  悟: "Éclaircissement",
  空: "nul",
  怎: "Comment",
  这: "ce",
  山: "Montagne",
  向: "Vers",
  东: "Est",
  去: "aller",
  二: "deux",
  百: "Cent",
  水: "eau",
  那: "Que",
  厢: "Clôture",
  乃: "Donc",
  傲: "fier",
  国: "pays",
  界: "limite",
  中: "milieu",
  位: "Peu",
  满: "Complet",
  城: "ville",
  军: "militaire",
  民: "civil",
  数: "nombre",
  必: "doit",
  金: "or",
  银: "argent",
  铜: "cuivre",
  铁: "fer",
  匠: "Artisan",
  买: "achat",
  些: "quelques",
  守: "Garde",
  护: "Protection",
  场: "champ",
  诚: "Sincère",
  谓: "Présent",
  保: "Sauvegarder",
  泰: "thaïlandais",
  久: "Long",
  之: "De",
  机: "machine",
  也: "aussi",
  心: "Cœur",
  欢: "joyeux",
  喜: "bonheur",
  待: "traiter",
  好: "bien",
  急: "urgent",
  纵: "verticale",
  筋: "Tendons",
  斗: "lutte",
  云: "nuage",
  霎: "Soudainement",
  过: "Passer",
  果: "fruit",
  座: "siège",
  池: "Piscine",
  六: "six",
  街: "rue",
  三: "trois",
  市: "ville",
  万: "Dix mille",
  户: "ménage",
  千: "mille",
  门: "Porte",
  往: "Passé",
  光: "Lumière",
  天: "ciel",
  化: "changement",
  定: "Certainement",
  现: "maintenant",
  的: "de",
  他: "il",
  几: "Plusieurs",
  件: "Parties",
  还: "retour",
  不: "Non",
  使: "faire",
  神: "Dieu",
  觅: "chercher",
  倒: "automne",
  就: "Immédiatement",
  捻: "torsion",
  起: "augmenter",
  诀: "Conseils",
  念: "lire",
  咒: "malédiction",
  语: "langue",
  巽: "Xun",
  地: "atterrir",
  吸: "sucer",
  气: "gaz",
  呼: "appel",
  吹: "souffler",
  将: "Volonté",
  便: "Espoir",
  阵: "Tableau",
  风: "vent",
  飞: "voler",
  沙: "sable",
  石: "pierre",
  炮: "pistolet",
  荡: "balançoire",
  乾: "Sec",
  坤: "Kun",
  黑: "noir",
  雾: "brouillard",
  阴: "Négatif",
  霾: "brume",
  昏: "s'évanouir",
  江: "Rivière",
  海: "océan",
  波: "Vague",
  翻: "tourner",
  鱼: "poisson",
  蟹: "crabe",
  怕: "Effrayé",
  林: "Forêt",
  树: "Arbre",
  折: "pli",
  虎: "Tigre",
  狼: "Loup",
  奔: "Courir",
  诸: "divers",
  般: "Normale",
  卖: "Vendre",
  商: "entreprise",
  旅: "voyage",
  各: "chaque",
  样: "Échantillon",
  生: "né",
  涯: "Carrière",
  殿: "temple",
  君: "Juin",
  内: "À l'intérieur",
  院: "hôpital",
  阶: "Niveau",
  文: "arts",
  衙: "Yai",
  秋: "Automne",
  宝: "précieux",
  五: "cinq",
  凤: "phénix",
  高: "haut",
  楼: "bâtiment",
  幌: "联",
  根: "racine",
};

const tianwen_translation_map_en = {
  美猴王荣归故里: "The Monkey King returns home",
  自剿了混世魔王: "He suppressed the demon king",
  夺了一口大刀: "Take a big knife",
  逐日操演武艺: "Performing martial arts every day",
  教小猴砍竹为标: "Teach the little monkey to cut bamboo as a mark",
  削木为刀: "Cut wood into a knife",
  治旗幡: "Flag management banner",
  打哨子: "Whistle",
  一进一退: "One advance and one retreat",
  安营下寨: "Settlement camp",
  顽耍多时: "Play for a long time",
  忽然静坐处: "Suddenly sitting in meditation",
  思想道: "Thought",
  我等在此: "I'll wait here",
  恐作耍成真: "Worrying to be true",
  或惊动人王: "Or alarm the king",
  或有禽王兽王认此犯头:
    "Some bird king or beast king may recognize this as a crime",
  说我们操兵造反: "Say we rebel",
  兴师来相杀: "The army comes to kill each other",
  汝等都是竹竿木刀: "You are all bamboo poles and wooden knives",
  如何对敌: "How to fight the enemy",
  须得锋利剑戟方可: "You must have a sharp sword and halberd",
  如今奈何: "What can you do now",
  众猴闻说: "The monkeys heard",
  个个惊恐道: "Everyone said terrified",
  大王所见甚长: "The king has seen it very long",
  只是无处可取: "Just nowhere to be taken",
  正说间: "Just talking",
  转上四个老猴: "Turning on four old monkeys",
  两个是赤尻马猴: "Two are red-butt monkeys",
  两个是通背猿猴: "Two are monkeys on the back",
  走在面前道: "Walking in front of you",
  大王: "The King",
  若要治锋利器械: "To cure sharp equipment",
  甚是容易: "Very easy",
  悟空道: "Wukong Tao",
  怎见容易: "How easy to see",
  四猴道: "Four monkeys",
  我们这山: "Our mountain",
  向东去: "Go east",
  有二百里水面: "There are 200 miles of water",
  那厢乃傲来国界: "Nao Nai Aolai's borders",
  那国界中有一王位: "There is a throne in the borders",
  满城中军民无数: "Countless military and civilians in the city",
  必有金银铜铁等匠作:
    "There must be gold, silver, copper and iron craftsmanship",
  大王若去那里: "Where will the king go",
  或买或造些兵器: "Buy or make some weapons",
  教演我等: "Teach me to wait",
  守护山场: "Guarding the mountain field",
  诚所谓保泰长久之机也:
    "It is the so-called opportunity to protect the long-term",
  悟空闻说: "Wukong heard",
  满心欢喜道: "Said with joy",
  汝等在此顽耍: "You are here to play",
  待我去来: "Wait for me to go",
  好猴王: "Good Monkey King",
  急纵筋斗云: "Emergency somersault cloud",
  霎时间过了二百里水面: "Two hundred miles of water in an instant",
  果然那厢有座城池: "Sure enough, there is a city in that corner",
  六街三市: "Six streets and three cities",
  万户千门: "Thousands of households and doors",
  来来往往: "Come and go",
  人都在光天化日之下: "Everyone is in broad daylight",
  悟空心中想道: "Wukong thought in his heart",
  这里定有现成的兵器: "There must be ready-made weapons here",
  我待下去买他几件: "I'll buy some of his items",
  还不如使个神通觅他几件倒好:
    "It would be better to use a magical power to find him some",
  他就捻起诀来: "He just started to make a trick",
  念动咒语: "Recite the mantra",
  向巽地上吸一口气: "Take a breath on Xun's ground",
  呼的吹将去: "Hey, blowing",
  便是一阵风: "It's a gust of wind",
  飞沙走石: "Flying sand and stones",
  好惊人也: "Very amazing",
  炮云起处荡乾坤: "The clouds rise and the world swing",
  黑雾阴霾大地昏: "Black fog haze and earth dim",
  江海波翻鱼蟹怕: "Jianghai waves are afraid of fish and crabs",
  山林树折虎狼奔: "The trees in the mountains and forests break and tigers run",
  诸般买卖无商旅: "All kinds of business and business trips",
  各样生涯不见人: "No one can see in all kinds of careers",
  殿上君王归内院: "The king in the palace returns to the inner courtyard",
  阶前文武转衙门:
    "The civil and military officials transfer to the yamen in front of the steps",
  千秋宝座都吹倒: "The throne of thousands of years is blown down",
  五凤高楼幌动根: "Five Phoenix Towers are in a veil",
};

const tianwen_translation_map_de = {
  美猴王荣归故里: "Der Affenkönig kehrt nach Hause zurück",
  自剿了混世魔王: "Er unterdrückte den Dämonenkönig",
  夺了一口大刀: "Sich ein großes Messer nehmen",
  逐日操演武艺: "Jeden Tag Kampfkünste aufführen",
  教小猴砍竹为标:
    "Bringen Sie dem kleinen Affen bei, Bambus als Zeichen zu schneiden",
  削木为刀: "Holz in ein Messer schneiden",
  治旗幡: "Flag -Management -Banner",
  打哨子: "Pfeife",
  一进一退: "Ein Vormarsch und ein Rückzug",
  安营下寨: "Siedlungslager",
  顽耍多时: "Lange spielen",
  忽然静坐处: "Plötzlich in Meditation sitzen",
  思想道: "Gedanke",
  我等在此: "Ich werde hier warten",
  恐作耍成真: "Sorge um wahr zu sein",
  或惊动人王: "Oder alarmieren der König",
  或有禽王兽王认此犯头:
    "Ein Vogelkönig oder ein Beast -König kann dies als Verbrechen anerkennen",
  说我们操兵造反: "Sagen Sie, wir rebellieren",
  兴师来相杀: "Die Armee kommt, um sich gegenseitig zu töten",
  汝等都是竹竿木刀: "Sie sind alle Bambusstangen und Holzmesser",
  如何对敌: "Wie man gegen den Feind kämpft",
  须得锋利剑戟方可: "Sie müssen ein scharfes Schwert und ein Hellebarde haben",
  如今奈何: "Was können Sie jetzt tun?",
  众猴闻说: "Die Affen hörten",
  个个惊恐道: "Alle sagten verängstigt",
  大王所见甚长: "Der König hat es sehr lange gesehen",
  只是无处可取: "Nur nirgendwo genommen werden",
  正说间: "Nur reden",
  转上四个老猴: "Vier alte Affen einschalten",
  两个是赤尻马猴: "Zwei sind rot-Butt-Affen",
  两个是通背猿猴: "Zwei sind Affen auf dem Rücken",
  走在面前道: "Vor dir gehen",
  大王: "Der König",
  若要治锋利器械: "Scharfe Ausrüstung heilen",
  甚是容易: "Sehr einfach",
  悟空道: "Wukong Tao",
  怎见容易: "Wie leicht zu sehen",
  四猴道: "Vier Affen",
  我们这山: "Unser Berg",
  向东去: "Geh nach Osten",
  有二百里水面: "Es gibt 200 Meilen Wasser",
  那厢乃傲来国界: "Nao Nai Aolais Grenzen",
  那国界中有一王位: "Es gibt einen Thron in den Grenzen",
  满城中军民无数: "Unzählige Militär- und Zivilisten in der Stadt",
  必有金银铜铁等匠作: "Es muss Gold, Silber, Kupfer und Eisenhandwerk sein",
  大王若去那里: "Wohin wird der König gehen",
  或买或造些兵器: "Waffen kaufen oder machen",
  教演我等: "Lehre mich zu warten",
  守护山场: "Bewachung des Bergfeldes",
  诚所谓保泰长久之机也:
    "Es ist die sogenannte Gelegenheit, die langfristige zu schützen",
  悟空闻说: "Wukong hörte",
  满心欢喜道: "Sagte mit Freude",
  汝等在此顽耍: "Sie sind hier, um zu spielen",
  待我去来: "Warten Sie, bis ich gehe",
  好猴王: "Guter Affenkönig",
  急纵筋斗云: "Notfall -Somersault -Cloud",
  霎时间过了二百里水面: "Zweihundert Meilen Wasser im Moment",
  果然那厢有座城池: "Sicher genug, es gibt eine Stadt in dieser Ecke",
  六街三市: "Sechs Straßen und drei Städte",
  万户千门: "Tausende von Haushalten und Türen",
  来来往往: "Komm und geh",
  人都在光天化日之下: "Jeder ist am helllichten Tageslicht",
  悟空心中想道: "Dachte Wukong in seinem Herzen",
  这里定有现成的兵器: "Hier müssen vorgefertigte Waffen geben",
  我待下去买他几件: "Ich werde einige seiner Artikel kaufen",
  还不如使个神通觅他几件倒好:
    "Es wäre besser, eine magische Kraft zu nutzen, um ihn etwas zu finden",
  他就捻起诀来: "Er begann gerade einen Trick zu machen",
  念动咒语: "Das Mantra rezitieren",
  向巽地上吸一口气: "Atme auf Xuns Boden ein",
  呼的吹将去: "Hey, blasen",
  便是一阵风: "Es ist ein Windstoß",
  飞沙走石: "Fliegender Sand und Steine",
  好惊人也: "Sehr erstaunlich",
  炮云起处荡乾坤: "Die Wolken steigen und die Welt schwingt",
  黑雾阴霾大地昏: "Schwarzer Nebel Dunst und Erde dunkel",
  江海波翻鱼蟹怕: "Jianghai -Wellen haben Angst vor Fischen und Krabben",
  山林树折虎狼奔:
    "Die Bäume in den Bergen und Wäldern brechen und Tiger rennen",
  诸般买卖无商旅: "Alle möglichen Geschäfts- und Geschäftsreisen",
  各样生涯不见人: "Niemand kann in allen möglichen Karrieren sehen",
  殿上君王归内院: "Der König im Palast kehrt in den inneren Hof zurück",
  阶前文武转衙门:
    "Die Zivil- und Militärbeamten wechseln vor den Stufen zum Yamen",
  千秋宝座都吹倒: "Der Thron von Tausenden von Jahren ist niedergeblasen",
  五凤高楼幌动根: "Fünf Phoenix -Türme sind im Schleier",
};

const tianwen_translation_map_fr = {
  美猴王荣归故里: "Le roi de singe rentre chez lui",
  自剿了混世魔王: "Il a supprimé le roi démon",
  夺了一口大刀: "Prendre un gros couteau",
  逐日操演武艺: "Effectuer des arts martiaux tous les jours",
  教小猴砍竹为标: "Apprenez au petit singe à couper le bambou comme une marque",
  削木为刀: "Couper le bois dans un couteau",
  治旗幡: "Bannière de gestion des drapeaux",
  打哨子: "Siffler",
  一进一退: "Une avance et une retraite",
  安营下寨: "Camp de colonie",
  顽耍多时: "Jouer pendant longtemps",
  忽然静坐处: "Soudain assis dans la méditation",
  思想道: "Pensée",
  我等在此: "J'attendrai ici",
  恐作耍成真: "S'inquiéter d'être vrai",
  或惊动人王: "Ou alarmer le roi",
  或有禽王兽王认此犯头:
    "Certains oiseaux King ou Beast King peuvent reconnaître cela comme un crime",
  说我们操兵造反: "Dites que nous nous rebelles",
  兴师来相杀: "L'armée vient se tuer",
  汝等都是竹竿木刀:
    "Vous êtes tous des poteaux en bambou et des couteaux en bois",
  如何对敌: "Comment combattre l'ennemi",
  须得锋利剑戟方可: "Vous devez avoir une épée et une hallebarde aiguës",
  如今奈何: "Que pouvez-vous faire maintenant",
  众猴闻说: "Les singes ont entendu",
  个个惊恐道: "Tout le monde a dit terrifié",
  大王所见甚长: "Le roi l'a vu très longtemps",
  只是无处可取: "Juste nulle part à prendre",
  正说间: "Juste parler",
  转上四个老猴: "Allumer quatre vieux singes",
  两个是赤尻马猴: "Deux sont des singes rouges",
  两个是通背猿猴: "Deux sont des singes à l'arrière",
  走在面前道: "Marcher devant toi",
  大王: "Le roi",
  若要治锋利器械: "Pour guérir un équipement tranchant",
  甚是容易: "Très facile",
  悟空道: "Wukong Tao",
  怎见容易: "Comme c'est facile de voir",
  四猴道: "Quatre singes",
  我们这山: "Notre montagne",
  向东去: "Aller à l'est",
  有二百里水面: "Il y a 200 miles d'eau",
  那厢乃傲来国界: "Les frontières de Nao Nai Aolai",
  那国界中有一王位: "Il y a un trône aux frontières",
  满城中军民无数: "D'innombrables militaires et civils de la ville",
  必有金银铜铁等匠作:
    "Il doit y avoir l'artisanat d'or, d'argent, de cuivre et de fer",
  大王若去那里: "Où ira le roi",
  或买或造些兵器: "Acheter ou faire des armes",
  教演我等: "Apprenez-moi à attendre",
  守护山场: "Garder le champ de montagne",
  诚所谓保泰长久之机也:
    "C'est la soi-disant opportunité de protéger le long terme",
  悟空闻说: "Wukong entendu",
  满心欢喜道: "Dit avec joie",
  汝等在此顽耍: "Tu es ici pour jouer",
  待我去来: "Attends que j'y aille",
  好猴王: "Bon roi de singe",
  急纵筋斗云: "Nuage de somersault d'urgence",
  霎时间过了二百里水面: "Deux cents milles d'eau en un instant",
  果然那厢有座城池: "Effectivement, il y a une ville dans ce coin",
  六街三市: "Six rues et trois villes",
  万户千门: "Des milliers de ménages et de portes",
  来来往往: "Aller et venir",
  人都在光天化日之下: "Tout le monde est en plein jour",
  悟空心中想道: "Wukong pensa dans son cœur",
  这里定有现成的兵器: "Il doit y avoir des armes prêtes à l'emploi ici",
  我待下去买他几件: "J'achèterai certains de ses articles",
  还不如使个神通觅他几件倒好:
    "Il serait préférable d'utiliser une puissance magique pour lui trouver",
  他就捻起诀来: "Il a juste commencé à faire un truc",
  念动咒语: "Réciter le mantra",
  向巽地上吸一口气: "Respirez sur le sol de Xun",
  呼的吹将去: "Hé, soufflant",
  便是一阵风: "C'est une rafale de vent",
  飞沙走石: "Sable volant et pierres",
  好惊人也: "Très incroyable",
  炮云起处荡乾坤: "Les nuages ​​montent et le monde swing",
  黑雾阴霾大地昏: "Haze de brouillard noir et terre",
  江海波翻鱼蟹怕: "Les vagues de Jianghai ont peur des poissons et des crabes",
  山林树折虎狼奔:
    "Les arbres des montagnes et des forêts se cassent et les tigres courent",
  诸般买卖无商旅: "Toutes sortes de voyages d'affaires et d'affaires",
  各样生涯不见人: "Personne ne peut voir dans toutes sortes de carrières",
  殿上君王归内院: "Le roi du palais revient dans la cour intérieure",
  阶前文武转衙门:
    "Les responsables civils et militaires sont transférés aux Yamen devant les marches",
  千秋宝座都吹倒: "Le trône de milliers d'années est détruit",
  五凤高楼幌动根: "Cinq tours Phoenix sont dans un voile",
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
