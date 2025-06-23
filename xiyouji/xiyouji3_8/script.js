const poemText = `悟空执着如意棒
径登森罗殿上
正中间南面坐上
十王即命掌案的判官取出文簿来查
那判官不敢怠慢
便到司房里
捧出五六簿文书并十类簿子
逐一查看
裸虫毛虫羽虫昆虫鳞介之属
俱无他名
又看到猴属之类
原来这猴似人相
不入人名
似裸虫
不居国界
似走兽
不伏麒麟管
似飞禽
不受凤凰辖
另有个簿子
悟空亲自检阅
直到那魂字一千三百五十号上
方注着孙悟空名字
乃天产石猴
该寿三百四十二岁
善终
悟空道
我也不记寿数几何
且只消了名字便罢
取笔过来
那判官慌忙捧笔
饱掭浓墨
悟空拿过簿子
把猴属之类
但有名者
一概勾之
捽下簿子道
了帐
了帐
今番不伏你管了
一路棒
打出幽冥界
那十王不敢相近
都去翠云宫
同拜地藏王菩萨
商量启表
奏闻上天
不在话下
这猴王打出城中
忽然绊着一个草纥繨
跌了个躘踵
猛的醒来
乃是南柯一梦
才觉伸腰
只闻得四健将与众猴高叫道
大王
吃了多少酒
睡这一夜
还不醒来
悟空道
睡还小可
我梦见两个人
来此勾我
把我带到幽冥界城门之外
却才醒悟
是我显神通
直嚷到森罗殿
与那十王争吵
将我们的生死簿看了
但有我等名号
俱是我勾了
都不伏那厮所辖也
众猴磕头礼谢
自此
山猴都有不老者
以阴司无名故也
美猴王言毕前事
四健将报知各洞妖王
都来贺喜
不几日
六个义兄弟
又来拜贺
一闻销名之故
又个个欢喜
每日聚乐不提`;

const pinyinMap = {
  悟: "wù",
  空: "kōng",
  执: "zhí",
  着: "zhuó",
  如: "rú",
  意: "yì",
  棒: "bàng",
  径: "jìng",
  登: "dēng",
  森: "sēn",
  罗: "luó",
  殿: "diàn",
  上: "shàng",
  正: "zhèng",
  中: "zhōng",
  间: "jiān",
  南: "nán",
  面: "miàn",
  坐: "zuò",
  十: "shí",
  王: "wáng",
  即: "jí",
  命: "mìng",
  掌: "zhǎng",
  案: "àn",
  的: "de",
  判: "pàn",
  官: "guān",
  取: "qǔ",
  出: "chū",
  文: "wén",
  簿: "bù",
  来: "lái",
  查: "chá",
  那: "nà",
  不: "bù",
  敢: "gǎn",
  怠: "dài",
  慢: "màn",
  便: "biàn",
  到: "dào",
  司: "sī",
  房: "fáng",
  里: "lǐ",
  捧: "pěng",
  五: "wǔ",
  六: "liù",
  书: "shū",
  并: "bìng",
  类: "lèi",
  子: "zi",
  逐: "zhú",
  一: "yī",
  看: "kàn",
  裸: "luǒ",
  虫: "chóng",
  毛: "máo",
  羽: "yǔ",
  昆: "kūn",
  鳞: "lín",
  介: "jiè",
  之: "zhī",
  属: "shǔ",
  俱: "jù",
  无: "wú",
  他: "tā",
  名: "míng",
  又: "yòu",
  猴: "hóu",
  原: "yuán",
  这: "zhè",
  似: "shì",
  人: "rén",
  相: "xiāng",
  入: "rù",
  居: "jū",
  国: "guó",
  界: "jiè",
  走: "zǒu",
  兽: "shòu",
  伏: "fú",
  麒: "qí",
  麟: "lín",
  管: "guǎn",
  飞: "fēi",
  禽: "qín",
  受: "shòu",
  凤: "fèng",
  凰: "huáng",
  辖: "xiá",
  另: "lìng",
  有: "yǒu",
  个: "gè",
  亲: "qīn",
  自: "zì",
  检: "jiǎn",
  阅: "yuè",
  直: "zhí",
  魂: "hún",
  字: "zì",
  千: "qiān",
  三: "sān",
  百: "bǎi",
  号: "hào",
  方: "fāng",
  注: "zhù",
  孙: "sūn",
  乃: "nǎi",
  天: "tiān",
  产: "chǎn",
  石: "shí",
  该: "gāi",
  寿: "shòu",
  四: "sì",
  二: "èr",
  岁: "suì",
  善: "shàn",
  终: "zhōng",
  道: "dào",
  我: "wǒ",
  也: "yě",
  记: "jì",
  数: "shù",
  几: "jǐ",
  何: "hé",
  且: "qiě",
  只: "zhǐ",
  消: "xiāo",
  了: "le",
  罢: "bà",
  笔: "bǐ",
  过: "guò",
  慌: "huāng",
  忙: "máng",
  饱: "bǎo",
  掭: "tiàn",
  浓: "nóng",
  墨: "mò",
  拿: "ná",
  把: "bǎ",
  但: "dàn",
  者: "zhě",
  概: "gài",
  勾: "gōu",
  捽: "zuó",
  下: "xià",
  帐: "zhàng",
  今: "jīn",
  番: "fān",
  你: "nǐ",
  路: "lù",
  打: "dǎ",
  幽: "yōu",
  冥: "míng",
  近: "jìn",
  都: "dōu",
  去: "qù",
  翠: "cuì",
  云: "yún",
  宫: "gōng",
  同: "tóng",
  拜: "bài",
  地: "dì",
  藏: "zàng",
  菩: "pú",
  萨: "sà",
  商: "shāng",
  量: "liáng",
  启: "qǐ",
  表: "biǎo",
  奏: "zòu",
  闻: "wén",
  在: "zài",
  话: "huà",
  城: "chéng",
  忽: "hū",
  然: "rán",
  绊: "bàn",
  草: "cǎo",
  纥: "gē",
  繨: "da",
  跌: "diē",
  躘: "lóng",
  踵: "zhǒng",
  猛: "měng",
  醒: "xǐng",
  是: "shì",
  柯: "kē",
  梦: "mèng",
  才: "cái",
  觉: "jué",
  伸: "shēn",
  腰: "yāo",
  得: "dé",
  健: "jiàn",
  将: "jiàng",
  与: "yǔ",
  众: "zhòng",
  高: "gāo",
  叫: "jiào",
  大: "dà",
  吃: "chī",
  多: "duō",
  少: "shǎo",
  酒: "jiǔ",
  睡: "shuì",
  夜: "yè",
  还: "hái",
  小: "xiǎo",
  可: "kě",
  见: "jiàn",
  两: "liǎng",
  此: "cǐ",
  带: "dài",
  门: "mén",
  外: "wài",
  却: "què",
  显: "xiǎn",
  神: "shén",
  通: "tōng",
  嚷: "rǎng",
  争: "zhēng",
  吵: "chǎo",
  们: "men",
  生: "shēng",
  死: "sǐ",
  等: "děng",
  厮: "sī",
  所: "suǒ",
  磕: "kē",
  头: "tóu",
  礼: "lǐ",
  谢: "xiè",
  山: "shān",
  老: "lǎo",
  以: "yǐ",
  阴: "yīn",
  故: "gù",
  美: "měi",
  言: "yán",
  毕: "bì",
  前: "qián",
  事: "shì",
  报: "bào",
  知: "zhī",
  各: "gè",
  洞: "dòng",
  妖: "yāo",
  贺: "hè",
  喜: "xǐ",
  日: "rì",
  义: "yì",
  兄: "xiōng",
  弟: "dì",
  销: "xiāo",
  欢: "huān",
  每: "měi",
  聚: "jù",
  乐: "lè",
  提: "tí",
};

const translations_en = {
  悟: "Enlightenment",
  空: "null",
  执: "Persistence",
  着: "Put",
  如: "like",
  意: "meaning",
  棒: "Great",
  径: "path",
  登: "Login",
  森: "南",
  罗: "Luo",
  殿: "temple",
  上: "superior",
  正: "just",
  中: "middle",
  间: "between",
  南: "South",
  面: "noodle",
  坐: "sit",
  十: "ten",
  王: "king",
  即: "Right now",
  命: "life",
  掌: "Palm",
  案: "case",
  的: "of",
  判: "Verdict",
  官: "official",
  取: "Pick",
  出: "out",
  文: "arts",
  簿: "book",
  来: "Come",
  查: "check",
  那: "That",
  不: "No",
  敢: "dare",
  怠: "lazy",
  慢: "slow",
  便: "Hope",
  到: "arrive",
  司: "manage",
  房: "house",
  里: "inside",
  捧: "Hold",
  五: "five",
  六: "six",
  书: "Book",
  并: "and",
  类: "kind",
  子: "son",
  逐: "By",
  一: "one",
  看: "look",
  裸: "bare",
  虫: "insect",
  毛: "hair",
  羽: "feather",
  昆: "Kun",
  鳞: "scale",
  介: "between",
  之: "Of",
  属: "Generic",
  俱: "all",
  无: "none",
  他: "he",
  名: "name",
  又: "again",
  猴: "monkey",
  原: "Original",
  这: "this",
  似: "like",
  人: "people",
  相: "Mutually",
  入: "enter",
  居: "Residence",
  国: "country",
  界: "boundary",
  走: "Walk",
  兽: "beast",
  伏: "Fu",
  麒: "Kiri",
  麟: "Lin",
  管: "Tube",
  飞: "fly",
  禽: "birds",
  受: "by",
  凤: "phoenix",
  凰: "phoenix",
  辖: "Obedience",
  另: "Other",
  有: "have",
  个: "indivual",
  亲: "relative",
  自: "since",
  检: "Inspection",
  阅: "read",
  直: "straight",
  魂: "soul",
  字: "Character",
  千: "thousand",
  三: "three",
  百: "Hundred",
  号: "Number",
  方: "square",
  注: "Note",
  孙: "Sun",
  乃: "So",
  天: "sky",
  产: "Produce",
  石: "stone",
  该: "Should",
  寿: "life",
  四: "Four",
  二: "two",
  岁: "age",
  善: "good",
  终: "end",
  道: "road",
  我: "I",
  也: "also",
  记: "remember",
  数: "number",
  几: "Several",
  何: "what",
  且: "and",
  只: "Only",
  消: "remove",
  了: "It's",
  罢: "stop",
  笔: "Pen",
  过: "Pass",
  慌: "Panic",
  忙: "busy",
  饱: "full",
  掭: "未",
  浓: "concentrated",
  墨: "ink",
  拿: "take",
  把: "Bundle",
  但: "but",
  者: "Those",
  概: "Overview",
  勾: "hook",
  捽: "seize",
  下: "Down",
  帐: "account",
  今: "now",
  番: "Anime",
  你: "you",
  路: "road",
  打: "beat",
  幽: "quiet",
  冥: "deep",
  近: "close",
  都: "All",
  去: "go",
  翠: "emerald",
  云: "cloud",
  宫: "palace",
  同: "same",
  拜: "bye",
  地: "land",
  藏: "Tibetan",
  菩: "Bodhisattva",
  萨: "Sa",
  商: "business",
  量: "quantity",
  启: "start",
  表: "surface",
  奏: "Play",
  闻: "smell",
  在: "exist",
  话: "talk",
  城: "city",
  忽: "suddenly",
  然: "Of course",
  绊: "trip",
  草: "Grass",
  纥: "knot",
  繨: "Trace",
  跌: "fall",
  躘: "walk",
  踵: "Heel",
  猛: "fierce",
  醒: "Awake",
  是: "yes",
  柯: "Ke",
  梦: "Dream",
  才: "talent",
  觉: "Sleep",
  伸: "stretch",
  腰: "waist",
  得: "have to",
  健: "Healthy",
  将: "Will",
  与: "and",
  众: "All",
  高: "high",
  叫: "Call",
  大: "big",
  吃: "eat",
  多: "many",
  少: "few",
  酒: "liquor",
  睡: "sleep",
  夜: "night",
  还: "return",
  小: "Small",
  可: "Can",
  见: "See",
  两: "two",
  此: "this",
  带: "bring",
  门: "Door",
  外: "outside",
  却: "but",
  显: "Show",
  神: "god",
  通: "Pass",
  嚷: "Scream",
  争: "Contend",
  吵: "Quarrel",
  们: "We",
  生: "born",
  死: "die",
  等: "wait",
  厮: "Friend",
  所: "Place",
  磕: "knock",
  头: "head",
  礼: "present",
  谢: "Thanks",
  山: "Mountain",
  老: "old",
  以: "by",
  阴: "Negative",
  故: "Therefore",
  美: "beautiful",
  言: "Word",
  毕: "complete",
  前: "forward",
  事: "thing",
  报: "Report",
  知: "Know",
  各: "each",
  洞: "Hole",
  妖: "Demon",
  贺: "Congratulations",
  喜: "happiness",
  日: "day",
  义: "righteous",
  兄: "Brother",
  弟: "younger brother",
  销: "pin",
  欢: "joyous",
  每: "Every",
  聚: "Gather",
  乐: "happy",
  提: "carry",
};

const translations_de = {
  悟: "Aufklärung",
  空: "NULL",
  执: "Ausdauer",
  着: "Setzen",
  如: "wie",
  意: "Bedeutung",
  棒: "Großartig",
  径: "Weg",
  登: "Login",
  森: "南",
  罗: "Luo",
  殿: "Tempel",
  上: "Vorgesetzter",
  正: "Nur",
  中: "Mitte",
  间: "zwischen",
  南: "Süden",
  面: "Nudel",
  坐: "sitzen",
  十: "zehn",
  王: "König",
  即: "Im Augenblick",
  命: "Leben",
  掌: "Palme",
  案: "Fall",
  的: "von",
  判: "Urteil",
  官: "offiziell",
  取: "Wählen",
  出: "aus",
  文: "Künste",
  簿: "Buch",
  来: "Kommen",
  查: "überprüfen",
  那: "Das",
  不: "NEIN",
  敢: "wagen",
  怠: "faul",
  慢: "langsam",
  便: "Hoffnung",
  到: "ankommen",
  司: "verwalten",
  房: "Haus",
  里: "innen",
  捧: "Halten",
  五: "fünf",
  六: "sechs",
  书: "Buch",
  并: "Und",
  类: "Art",
  子: "Sohn",
  逐: "Von",
  一: "eins",
  看: "sehen",
  裸: "nackt",
  虫: "Insekt",
  毛: "Haar",
  羽: "Feder",
  昆: "Kun",
  鳞: "Skala",
  介: "zwischen",
  之: "Von",
  属: "Generisches",
  俱: "alle",
  无: "keiner",
  他: "Er",
  名: "Name",
  又: "wieder",
  猴: "Affe",
  原: "Original",
  这: "Das",
  似: "wie",
  人: "Menschen",
  相: "Gegenseitig",
  入: "eingeben",
  居: "Residenz",
  国: "Land",
  界: "Grenze",
  走: "Gehen",
  兽: "Tier",
  伏: "Fu",
  麒: "Kiri",
  麟: "Lin",
  管: "Rohr",
  飞: "fliegen",
  禽: "Vögel",
  受: "von",
  凤: "Phönix",
  凰: "Phönix",
  辖: "Gehorsam",
  另: "Andere",
  有: "haben",
  个: "indival",
  亲: "relativ",
  自: "seit",
  检: "Inspektion",
  阅: "lesen",
  直: "gerade",
  魂: "Seele",
  字: "Charakter",
  千: "tausend",
  三: "drei",
  百: "Hundert",
  号: "Nummer",
  方: "Quadrat",
  注: "Notiz",
  孙: "Sonne",
  乃: "Also",
  天: "Himmel",
  产: "Produzieren",
  石: "Stein",
  该: "Sollen",
  寿: "Leben",
  四: "Vier",
  二: "zwei",
  岁: "Alter",
  善: "Gut",
  终: "Ende",
  道: "Straße",
  我: "ICH",
  也: "Auch",
  记: "erinnern",
  数: "Nummer",
  几: "Mehrere",
  何: "Was",
  且: "Und",
  只: "Nur",
  消: "entfernen",
  了: "Es ist",
  罢: "stoppen",
  笔: "Stift",
  过: "Passieren",
  慌: "Panik",
  忙: "beschäftigt",
  饱: "voll",
  掭: "未",
  浓: "konzentriert",
  墨: "Tinte",
  拿: "nehmen",
  把: "Bündeln",
  但: "Aber",
  者: "Diese",
  概: "Überblick",
  勾: "Haken",
  捽: "ergreifen",
  下: "Runter",
  帐: "Konto",
  今: "Jetzt",
  番: "Anime",
  你: "Du",
  路: "Straße",
  打: "schlagen",
  幽: "ruhig",
  冥: "tief",
  近: "schließen",
  都: "Alle",
  去: "gehen",
  翠: "Smaragd",
  云: "Wolke",
  宫: "Palast",
  同: "Dasselbe",
  拜: "Tschüss",
  地: "Land",
  藏: "Tibetaner",
  菩: "Bodhisattva",
  萨: "Sa",
  商: "Geschäft",
  量: "Menge",
  启: "Start",
  表: "Oberfläche",
  奏: "Spielen",
  闻: "Geruch",
  在: "existieren",
  话: "sprechen",
  城: "Stadt",
  忽: "plötzlich",
  然: "Natürlich",
  绊: "Reise",
  草: "Gras",
  纥: "Knoten",
  繨: "Verfolgen",
  跌: "fallen",
  躘: "gehen",
  踵: "Ferse",
  猛: "erbittert",
  醒: "Wach",
  是: "Ja",
  柯: "Ke",
  梦: "Traum",
  才: "Talent",
  觉: "Schlafen",
  伸: "strecken",
  腰: "Taille",
  得: "müssen",
  健: "Gesund",
  将: "Wille",
  与: "Und",
  众: "Alle",
  高: "hoch",
  叫: "Anruf",
  大: "groß",
  吃: "essen",
  多: "viele",
  少: "wenige",
  酒: "Alkohol",
  睡: "schlafen",
  夜: "Nacht",
  还: "zurückkehren",
  小: "Klein",
  可: "Kann",
  见: "Sehen",
  两: "zwei",
  此: "Das",
  带: "bringen",
  门: "Tür",
  外: "draußen",
  却: "Aber",
  显: "Zeigen",
  神: "Gott",
  通: "Passieren",
  嚷: "Schreien",
  争: "Kämpfen",
  吵: "Streit",
  们: "Wir",
  生: "geboren",
  死: "sterben",
  等: "Warten",
  厮: "Freund",
  所: "Ort",
  磕: "klopfen",
  头: "Kopf",
  礼: "gegenwärtig",
  谢: "Danke",
  山: "Berg",
  老: "alt",
  以: "von",
  阴: "Negativ",
  故: "daher",
  美: "Schön",
  言: "Wort",
  毕: "vollständig",
  前: "nach vorne",
  事: "Ding",
  报: "Bericht",
  知: "Wissen",
  各: "jede",
  洞: "Loch",
  妖: "Dämon",
  贺: "Glückwunsch",
  喜: "Glück",
  日: "Tag",
  义: "gerecht",
  兄: "Bruder",
  弟: "jüngerer Bruder",
  销: "Stift",
  欢: "freudig",
  每: "Jeder",
  聚: "Versammeln",
  乐: "Glücklich",
  提: "tragen",
};

const translations_fr = {
  悟: "Éclaircissement",
  空: "nul",
  执: "Persistance",
  着: "Mettre",
  如: "comme",
  意: "signification",
  棒: "Super",
  径: "chemin",
  登: "Se connecter",
  森: "南",
  罗: "Luo",
  殿: "temple",
  上: "supérieur",
  正: "juste",
  中: "milieu",
  间: "entre",
  南: "Sud",
  面: "nouille",
  坐: "s'asseoir",
  十: "dix",
  王: "roi",
  即: "Tout de suite",
  命: "vie",
  掌: "Palmier",
  案: "cas",
  的: "de",
  判: "Verdict",
  官: "officiel",
  取: "Prendre",
  出: "dehors",
  文: "arts",
  簿: "livre",
  来: "Viens",
  查: "vérifier",
  那: "Que",
  不: "Non",
  敢: "oser",
  怠: "paresseux",
  慢: "lent",
  便: "Espoir",
  到: "arriver",
  司: "gérer",
  房: "maison",
  里: "à l'intérieur",
  捧: "Prise",
  五: "cinq",
  六: "six",
  书: "Livre",
  并: "et",
  类: "gentil",
  子: "fils",
  逐: "Par",
  一: "un",
  看: "regarder",
  裸: "nu",
  虫: "insecte",
  毛: "cheveux",
  羽: "plume",
  昆: "Kun",
  鳞: "échelle",
  介: "entre",
  之: "De",
  属: "Générique",
  俱: "tous",
  无: "aucun",
  他: "il",
  名: "nom",
  又: "encore",
  猴: "singe",
  原: "Original",
  这: "ce",
  似: "comme",
  人: "personnes",
  相: "Mutuellement",
  入: "entrer",
  居: "Résidence",
  国: "pays",
  界: "limite",
  走: "Marcher",
  兽: "bête",
  伏: "Fu",
  麒: "Kiri",
  麟: "Lin",
  管: "Tube",
  飞: "voler",
  禽: "oiseaux",
  受: "par",
  凤: "phénix",
  凰: "phénix",
  辖: "Obéissance",
  另: "Autre",
  有: "avoir",
  个: "autonome",
  亲: "relatif",
  自: "depuis",
  检: "Inspection",
  阅: "lire",
  直: "droit",
  魂: "âme",
  字: "Personnage",
  千: "mille",
  三: "trois",
  百: "Cent",
  号: "Nombre",
  方: "carré",
  注: "Note",
  孙: "Soleil",
  乃: "Donc",
  天: "ciel",
  产: "Produire",
  石: "pierre",
  该: "Devrait",
  寿: "vie",
  四: "Quatre",
  二: "deux",
  岁: "âge",
  善: "bien",
  终: "fin",
  道: "route",
  我: "je",
  也: "aussi",
  记: "souviens-toi",
  数: "nombre",
  几: "Plusieurs",
  何: "quoi",
  且: "et",
  只: "Seulement",
  消: "retirer",
  了: "C'est",
  罢: "arrêt",
  笔: "Stylo",
  过: "Passer",
  慌: "Panique",
  忙: "occupé",
  饱: "complet",
  掭: "未",
  浓: "concentré",
  墨: "encre",
  拿: "prendre",
  把: "Paquet",
  但: "mais",
  者: "Ceux",
  概: "Aperçu",
  勾: "crochet",
  捽: "saisir",
  下: "Vers le bas",
  帐: "compte",
  今: "maintenant",
  番: "Anime",
  你: "toi",
  路: "route",
  打: "battre",
  幽: "calme",
  冥: "profond",
  近: "fermer",
  都: "Tous",
  去: "aller",
  翠: "émeraude",
  云: "nuage",
  宫: "palais",
  同: "même",
  拜: "au revoir",
  地: "atterrir",
  藏: "Tibétain",
  菩: "Bodhisattva",
  萨: "SA",
  商: "entreprise",
  量: "quantité",
  启: "commencer",
  表: "surface",
  奏: "Jouer",
  闻: "odeur",
  在: "exister",
  话: "parler",
  城: "ville",
  忽: "soudainement",
  然: "Bien sûr",
  绊: "voyage",
  草: "Herbe",
  纥: "noeud",
  繨: "Tracer",
  跌: "automne",
  躘: "marcher",
  踵: "talon",
  猛: "féroce",
  醒: "Éveillé",
  是: "Oui",
  柯: "Ke",
  梦: "Rêve",
  才: "talent",
  觉: "Dormir",
  伸: "extensible",
  腰: "taille",
  得: "devoir",
  健: "En bonne santé",
  将: "Volonté",
  与: "et",
  众: "Tous",
  高: "haut",
  叫: "Appel",
  大: "grand",
  吃: "manger",
  多: "beaucoup",
  少: "peu",
  酒: "alcool",
  睡: "dormir",
  夜: "nuit",
  还: "retour",
  小: "Petit",
  可: "Peut",
  见: "Voir",
  两: "deux",
  此: "ce",
  带: "apporter",
  门: "Porte",
  外: "dehors",
  却: "mais",
  显: "Montrer",
  神: "Dieu",
  通: "Passer",
  嚷: "Crier",
  争: "Combattre",
  吵: "Querelle",
  们: "Nous",
  生: "né",
  死: "mourir",
  等: "attendez",
  厮: "Ami",
  所: "Lieu",
  磕: "frappe",
  头: "tête",
  礼: "présent",
  谢: "Merci",
  山: "Montagne",
  老: "vieux",
  以: "par",
  阴: "Négatif",
  故: "Donc",
  美: "beau",
  言: "Mot",
  毕: "complet",
  前: "avant",
  事: "chose",
  报: "Rapport",
  知: "Savoir",
  各: "chaque",
  洞: "Trou",
  妖: "Démon",
  贺: "Félicitations",
  喜: "bonheur",
  日: "jour",
  义: "vertueux",
  兄: "Frère",
  弟: "jeune frère",
  销: "épingle",
  欢: "joyeux",
  每: "Chaque",
  聚: "Rassembler",
  乐: "heureux",
  提: "porter",
};

const tianwen_translation_map_en = {
  悟空执着如意棒: "Wukong is persistent in Ruyi",
  径登森罗殿上: "Down the Senro Hall",
  正中间南面坐上: "Sitting on the south side of the middle",
  十王即命掌案的判官取出文簿来查:
    "The judge who was in charge of the ten kings took out the document book to investigate",
  那判官不敢怠慢: "The judge dare not be negligent",
  便到司房里: "Then I went to the stewardship",
  捧出五六簿文书并十类簿子:
    "Take out five or six documents and ten types of books",
  逐一查看: "View one by one",
  裸虫毛虫羽虫昆虫鳞介之属: "Naked caterpillar feather insect insect scale",
  俱无他名: "No other name",
  又看到猴属之类: "See monkeys again",
  原来这猴似人相: "It turns out that this monkey looks like a human",
  不入人名: "Not named",
  似裸虫: "Like a naked insect",
  不居国界: "Not on national borders",
  似走兽: "Like a beast",
  不伏麒麟管: "Don't hide the Qilin",
  似飞禽: "Like a bird",
  不受凤凰辖: "Not under the jurisdiction of the Phoenix",
  另有个簿子: "Another book",
  悟空亲自检阅: "Wukong checked it himself",
  直到那魂字一千三百五十号上: 'Until the word "Soul" is on No. 1,350',
  方注着孙悟空名字: "Fang notes the name of Sun Wukong",
  乃天产石猴: "It is a stone monkey born in heaven",
  该寿三百四十二岁: "It's 342 years old",
  善终: "Good ending",
  悟空道: "Wukong Tao",
  我也不记寿数几何: "I don't remember the number of my life.",
  且只消了名字便罢: "And just need the name",
  取笔过来: "Take the pen",
  那判官慌忙捧笔: "The judge hurriedly held the pen",
  饱掭浓墨: "Thick ink",
  悟空拿过簿子: "Wukong took the book",
  把猴属之类: "Monkeys",
  但有名者: "But famous",
  一概勾之: "All hooks",
  捽下簿子道: "Let's go to the next book",
  了帐: "Pay the account",
  了帐: "Pay the account",
  今番不伏你管了: "You'll care if you don't want to do this",
  一路棒: "Good all the way",
  打出幽冥界: "Fight out of the Netherworld",
  那十王不敢相近: "Those ten kings dare not be close to each other",
  都去翠云宫: "All go to Cuiyun Palace",
  同拜地藏王菩萨: "Worship the Bodhisattva Ksitigarbha together",
  商量启表: "Discussion start table",
  奏闻上天: "Listen to heaven",
  不在话下: "No problem",
  这猴王打出城中: "The Monkey King fights out of the city",
  忽然绊着一个草纥繨: "Suddenly a grass hut tree tripped",
  跌了个躘踵: "It fell a little",
  猛的醒来: "Wake up suddenly",
  乃是南柯一梦: "It's Nan Ke's dream",
  才觉伸腰: "Only then can I stretch my waist",
  只闻得四健将与众猴高叫道: "Only the four heroes shouted with the monkeys",
  大王: "The King",
  吃了多少酒: "How much wine did you eat",
  睡这一夜: "Sleep this night",
  还不醒来: "Not awake yet",
  悟空道: "Wukong Tao",
  睡还小可: "Sleeping pretty",
  我梦见两个人: "I dreamed of two people",
  来此勾我: "Come here to hook me",
  把我带到幽冥界城门之外: "Take me outside the gate of the Netherworld",
  却才醒悟: "But I realized",
  是我显神通: "It's me who show his power",
  直嚷到森罗殿: "Just shouted to Senluo Palace",
  与那十王争吵: "Arguing with the ten kings",
  将我们的生死簿看了: "Read our life and death book",
  但有我等名号: "But I have my name",
  俱是我勾了: "I've all hooked",
  都不伏那厮所辖也: "It's not under the jurisdiction of that guy",
  众猴磕头礼谢: "The monkeys kowtow to thank you",
  自此: "Since then",
  山猴都有不老者: "All monkeys are immortal",
  以阴司无名故也: "Because the underworld has no name",
  美猴王言毕前事: "The Monkey King talks about the past",
  四健将报知各洞妖王: "Four heroes report to the demon kings of each cave",
  都来贺喜: "All come to congratulate",
  不几日: "In just a few days",
  六个义兄弟: "Six righteous brothers",
  又来拜贺: "Come and congratulate again",
  一闻销名之故: "It's because of the reputation of being lost",
  又个个欢喜: "Everyone is happy again",
  每日聚乐不提: "Don't mention the daily gathering",
};

const tianwen_translation_map_de = {
  悟空执着如意棒: "Wukong ist in Ruyi hartnäckig",
  径登森罗殿上: "Die Senrohalle hinunter",
  正中间南面坐上: "Sitzen auf der Südseite der Mitte",
  十王即命掌案的判官取出文簿来查:
    "Der Richter, der für die zehn Könige verantwortlich war",
  那判官不敢怠慢: "Der Richter wagt es nicht fahrlässig zu sein",
  便到司房里: "Dann ging ich zur Stewardship",
  捧出五六簿文书并十类簿子:
    "Nehmen Sie fünf oder sechs Dokumente und zehn Arten von Büchern heraus",
  逐一查看: "Anzeigen nacheinander anzeigen",
  裸虫毛虫羽虫昆虫鳞介之属: "Nackte Raupen -Federinsekten -Insektenskala",
  俱无他名: "Kein anderer Name",
  又看到猴属之类: "Siehe wieder Affen",
  原来这猴似人相:
    "Es stellt sich heraus, dass dieser Affe wie ein Mensch aussieht",
  不入人名: "Nicht genannt",
  似裸虫: "Wie ein nacktes Insekt",
  不居国界: "Nicht an nationalen Grenzen",
  似走兽: "Wie ein Tier",
  不伏麒麟管: "Verstecke das Qilin nicht",
  似飞禽: "Wie ein Vogel",
  不受凤凰辖: "Nicht unter der Zuständigkeit des Phönix",
  另有个簿子: "Ein weiteres Buch",
  悟空亲自检阅: "Wukong überprüfte es selbst",
  直到那魂字一千三百五十号上: 'Bis das Wort "Seele" auf Nr. 1.350 ist',
  方注着孙悟空名字: "Fang bemerkt den Namen von Sun Wukong",
  乃天产石猴: "Es ist ein Steinaffen, der im Himmel geboren wurde",
  该寿三百四十二岁: "Es ist 342 Jahre alt",
  善终: "Gutes Ende",
  悟空道: "Wukong Tao",
  我也不记寿数几何: "Ich erinnere mich nicht an die Anzahl meines Lebens.",
  且只消了名字便罢: "Und brauche nur den Namen",
  取笔过来: "Nimm den Stift",
  那判官慌忙捧笔: "Der Richter hielt den Stift hastig fest",
  饱掭浓墨: "Dicke Tinte",
  悟空拿过簿子: "Wukong nahm das Buch",
  把猴属之类: "Affen",
  但有名者: "Aber berühmt",
  一概勾之: "Alle Haken",
  捽下簿子道: "Gehen wir zum nächsten Buch",
  了帐: "Zahlen Sie das Konto",
  了帐: "Zahlen Sie das Konto",
  今番不伏你管了: "Es wird sich darum kümmern, wenn Sie dies nicht tun wollen",
  一路棒: "Gut den ganzen Weg",
  打出幽冥界: "Kämpfen aus der Unterwelt",
  那十王不敢相近: "Diese zehn Könige wagen es nicht nahe beieinander zu sein",
  都去翠云宫: "Alle gehen zum Cuiyun -Palast",
  同拜地藏王菩萨: "Verehren die bodhisattva ksiitigarbha zusammen",
  商量启表: "Diskussionsstart Tabelle",
  奏闻上天: "Hör auf den Himmel",
  不在话下: "Kein Problem",
  这猴王打出城中: "Der Affenkönig kämpft aus der Stadt",
  忽然绊着一个草纥繨: "Plötzlich stolperte ein Grashüttenbaum",
  跌了个躘踵: "Es fiel ein wenig",
  猛的醒来: "Wach plötzlich auf",
  乃是南柯一梦: "Es ist Nan Ke's Traum",
  才觉伸腰: "Nur dann kann ich meine Taille dehnen",
  只闻得四健将与众猴高叫道: "Nur die vier Helden riefen mit den Affen",
  大王: "Der König",
  吃了多少酒: "Wie viel Wein hast du gegessen?",
  睡这一夜: "Schlafe diese Nacht",
  还不醒来: "Noch nicht wach",
  悟空道: "Wukong Tao",
  睡还小可: "Hübsch schlafen",
  我梦见两个人: "Ich habe von zwei Menschen geträumt",
  来此勾我: "Komm her, um mich anzuschließen",
  把我带到幽冥界城门之外: "Nehmen Sie mich aus dem Tor der Unterwelt",
  却才醒悟: "Aber mir wurde mir klar",
  是我显神通: "Ich bin es, der seine Macht zeigt",
  直嚷到森罗殿: "Nur dem Senluo Palace geschrien",
  与那十王争吵: "Mit den zehn Königen streiten",
  将我们的生死簿看了: "Lesen Sie unser Leben und Todesbuch",
  但有我等名号: "Aber ich habe meinen Namen",
  俱是我勾了: "Ich habe alle süchtig",
  都不伏那厮所辖也: "Es steht nicht unter der Gerichtsbarkeit dieses Kerls",
  众猴磕头礼谢: "Die Monkeys Kowtow, um es Ihnen zu bedanken",
  自此: "Seitdem",
  山猴都有不老者: "Alle Affen sind unsterblich",
  以阴司无名故也: "Weil die Unterwelt keinen Namen hat",
  美猴王言毕前事: "Der Affenkönig spricht über die Vergangenheit",
  四健将报知各洞妖王:
    "Vier Helden berichten über die Dämonenkönige jeder Höhle",
  都来贺喜: "Alle kommen, um zu gratulieren",
  不几日: "In nur wenigen Tagen",
  六个义兄弟: "Sechs gerechte Brüder",
  又来拜贺: "Komm und gratuliere noch einmal",
  一闻销名之故: "Es liegt an dem Ruf, verloren zu sein",
  又个个欢喜: "Jeder ist wieder glücklich",
  每日聚乐不提: "Erwähnen Sie nicht die tägliche Versammlung",
};

const tianwen_translation_map_fr = {
  悟空执着如意棒: "Wukong est persistant à Ruyi",
  径登森罗殿上: "Dans le Senro Hall",
  正中间南面坐上: "Assis sur le côté sud du milieu",
  十王即命掌案的判官取出文簿来查:
    "Le juge qui était en charge des dix rois a pris le livre de documents pour enquêter",
  那判官不敢怠慢: "Le juge n'ose pas être négligent",
  便到司房里: "Puis je suis allé à l'intendance",
  捧出五六簿文书并十类簿子:
    "Sortez cinq ou six documents et dix types de livres",
  逐一查看: "Voir un par un",
  裸虫毛虫羽虫昆虫鳞介之属:
    "Échelle d'insectes d'insectes de plumes Naked Caterpillar",
  俱无他名: "Aucun autre nom",
  又看到猴属之类: "Revoir les singes",
  原来这猴似人相: "Il s'avère que ce singe ressemble à un humain",
  不入人名: "Non nommé",
  似裸虫: "Comme un insecte nu",
  不居国界: "Pas aux frontières nationales",
  似走兽: "Comme une bête",
  不伏麒麟管: "Ne cachez pas le Qilin",
  似飞禽: "Comme un oiseau",
  不受凤凰辖: "Pas sous la juridiction du Phoenix",
  另有个簿子: "Un autre livre",
  悟空亲自检阅: "Wukong l'a vérifié et passé en revue lui-même",
  直到那魂字一千三百五十号上:
    'Jusqu\'à ce que le mot "âme" soit sur le n ° 1,350',
  方注着孙悟空名字: "Fang note le nom de Sun Wukong",
  乃天产石猴: "C'est un singe de pierre né dans le ciel",
  该寿三百四十二岁: "Il a 342 ans",
  善终: "Bonne fin",
  悟空道: "Wukong Tao",
  我也不记寿数几何: "Je ne me souviens pas du nombre de ma vie.",
  且只消了名字便罢: "Et juste besoin du nom",
  取笔过来: "Prendre le stylo",
  那判官慌忙捧笔: "Le juge a tenu à la hâte le stylo",
  饱掭浓墨: "Encre épaisse",
  悟空拿过簿子: "Wukong a pris le livre",
  把猴属之类: "Singes",
  但有名者: "Mais célèbre",
  一概勾之: "Tous les crochets",
  捽下簿子道: "Allons au livre suivant",
  了帐: "Payer le compte",
  了帐: "Payer le compte",
  今番不伏你管了: "Vous vous soucierez si vous ne voulez pas faire ça",
  一路棒: "Bon tout le chemin",
  打出幽冥界: "Se battre dans le monde du Nether",
  那十王不敢相近: "Ces dix rois n'osent pas être proches les uns des autres",
  都去翠云宫: "Tout va au palais de Cuiyun",
  同拜地藏王菩萨: "Adorer le bodhisattva ksitigarbha ensemble",
  商量启表: "Table de début de discussion",
  奏闻上天: "Écoutez le paradis",
  不在话下: "Aucun problème",
  这猴王打出城中: "Le roi de singe se bat hors de la ville",
  忽然绊着一个草纥繨: "Soudain, un arbre de cabane d'herbe a trébuché",
  跌了个躘踵: "Ça est tombé un peu",
  猛的醒来: "Réveiller soudain",
  乃是南柯一梦: "C'est le rêve de Nan Ke",
  才觉伸腰: "Ce n'est qu'alors que je peux étirer ma taille",
  只闻得四健将与众猴高叫道: "Seuls les quatre héros ont crié avec les singes",
  大王: "Le roi",
  吃了多少酒: "Combien de vin as-tu mangé",
  睡这一夜: "Dormir cette nuit",
  还不醒来: "Pas encore éveillé",
  悟空道: "Wukong Tao",
  睡还小可: "Dormir joli",
  我梦见两个人: "J'ai rêvé de deux personnes",
  来此勾我: "Viens ici pour m'accrocher",
  把我带到幽冥界城门之外: "Emmenez-moi de la porte du Netherworld",
  却才醒悟: "Mais j'ai réalisé",
  是我显神通: "C'est moi qui montre son pouvoir",
  直嚷到森罗殿: "Je viens de crier à Senluo Palace",
  与那十王争吵: "Se disputer avec les dix rois",
  将我们的生死簿看了: "Lisez notre livre de vie et de mort",
  但有我等名号: "Mais j'ai mon nom",
  俱是我勾了: "J'ai tous accroché",
  都不伏那厮所辖也: "Ce n'est pas sous la juridiction de ce type",
  众猴磕头礼谢: "Les singes kowtow pour vous remercier",
  自此: "Depuis lors",
  山猴都有不老者: "Tous les singes sont immortels",
  以阴司无名故也: "Parce que les enfers n'ont pas de nom",
  美猴王言毕前事: "Le roi de singe parle du passé",
  四健将报知各洞妖王: "Quatre héros relèvent des rois démon de chaque grotte",
  都来贺喜: "Tous viennent féliciter",
  不几日: "En quelques jours seulement",
  六个义兄弟: "Six frères justes",
  又来拜贺: "Venez féliciter à nouveau",
  一闻销名之故: "C'est à cause de la réputation d'être perdu",
  又个个欢喜: "Tout le monde est à nouveau heureux",
  每日聚乐不提: "Ne mentionnez pas le rassemblement quotidien",
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
