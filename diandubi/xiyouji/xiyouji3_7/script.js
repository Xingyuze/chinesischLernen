const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `只见那美猴王睡里见两人拿一张批文
上有孙悟空三字
走近身
不容分说
套上绳
就把美猴王的魂灵儿索了去
踉踉跄跄
直带到一座城边
猴王渐觉酒醒
忽抬头观看
那城上有一铁牌
牌上有三个大字
乃幽冥界
美猴王顿然醒悟道
幽冥界乃阎王所居
何为到此
那两人道
你今阳寿该终
我两人领批
勾你来也
猴王听说
道
我老孙超出三界外
不在五行中
已不伏他管辖
怎么朦胧
又敢来勾我
那两个勾死人只管扯扯拉拉
定要拖他进去
那猴王恼起性来
耳朵中掣出宝贝
幌一幌
碗来粗细
略举手
把两个勾死人打为肉酱
自解其索
丢开手
轮着棒
打入城中
唬得那牛头鬼东躲西藏
马面鬼南奔北跑
众鬼卒奔上森罗殿
报着
大王
祸事
祸事
外面一个毛脸雷公
打将来了
慌得那十代冥王急整衣来看
见他相貌凶恶
即排下班次
应声高叫道
上仙留名
上仙留名
猴王道
你既认不得我
怎么差人来勾我
十王道
不敢
不敢
想是差人差了
猴王道
我本是花果山水帘洞天生圣人孙悟空
你等是什么官位
十王躬身道
我等是阴间天子十代冥王
悟空道
快报名来
免打
十王道
我等是秦广王
初江王
宋帝王
仵官王
阎罗王
平等王
泰山王
都市王
卞城王
转轮王
悟空道
汝等既登王位
乃灵显感应之类
为何不知好歹
我老孙修仙了道
与天齐寿
超升三界之外
跳出五行之中
为何着人拘我
十王道
上仙息怒
普天下同名同姓者多
敢是那勾死人错走了也
悟空道
胡说
胡说
常言道
官差吏差
来人不差
你快取生死簿子来我看
十王闻言
即请上殿查看`;

const pinyinMap = {
  只: "zhī",
  见: "jiàn",
  那: "nà",
  美: "měi",
  猴: "hóu",
  王: "wáng",
  睡: "shuì",
  里: "lǐ",
  两: "liǎng",
  人: "rén",
  拿: "ná",
  一: "yī",
  张: "zhāng",
  批: "pī",
  文: "wén",
  上: "shàng",
  有: "yǒu",
  孙: "sūn",
  悟: "wù",
  空: "kōng",
  三: "sān",
  字: "zì",
  走: "zǒu",
  近: "jìn",
  身: "shēn",
  不: "bù",
  容: "róng",
  分: "fēn",
  说: "shuō",
  套: "tào",
  绳: "shéng",
  就: "jiù",
  把: "bǎ",
  的: "de",
  魂: "hún",
  灵: "líng",
  儿: "ér",
  索: "suǒ",
  了: "le",
  去: "qù",
  踉: "liàng",
  跄: "qiàng",
  直: "zhí",
  带: "dài",
  到: "dào",
  座: "zuò",
  城: "chéng",
  边: "biān",
  渐: "jiàn",
  觉: "jué",
  酒: "jiǔ",
  醒: "xǐng",
  忽: "hū",
  抬: "tái",
  头: "tóu",
  观: "guān",
  看: "kàn",
  铁: "tiě",
  牌: "pái",
  个: "gè",
  大: "dà",
  乃: "nǎi",
  幽: "yōu",
  冥: "míng",
  界: "jiè",
  顿: "dùn",
  然: "rán",
  道: "dào",
  阎: "yán",
  所: "suǒ",
  居: "jū",
  何: "hé",
  为: "wèi",
  此: "cǐ",
  你: "nǐ",
  今: "jīn",
  阳: "yáng",
  寿: "shòu",
  该: "gāi",
  终: "zhōng",
  我: "wǒ",
  领: "lǐng",
  勾: "gōu",
  来: "lái",
  也: "yě",
  听: "tīng",
  老: "lǎo",
  超: "chāo",
  出: "chū",
  外: "wài",
  在: "zài",
  五: "wǔ",
  行: "xíng",
  中: "zhōng",
  已: "yǐ",
  伏: "fú",
  他: "tā",
  管: "guǎn",
  辖: "xiá",
  怎: "zěn",
  么: "me",
  朦: "méng",
  胧: "lóng",
  又: "yòu",
  敢: "gǎn",
  死: "sǐ",
  扯: "chě",
  拉: "lā",
  定: "dìng",
  要: "yào",
  拖: "tuō",
  进: "jìn",
  恼: "nǎo",
  起: "qǐ",
  性: "xìng",
  耳: "ěr",
  朵: "duǒ",
  掣: "chè",
  宝: "bǎo",
  贝: "bèi",
  幌: "huǎng",
  碗: "wǎn",
  粗: "cū",
  细: "xì",
  略: "lüè",
  举: "jǔ",
  手: "shǒu",
  打: "dǎ",
  肉: "ròu",
  酱: "jiàng",
  自: "zì",
  解: "jiě",
  其: "qí",
  丢: "diū",
  开: "kāi",
  轮: "lún",
  着: "zhe",
  棒: "bàng",
  入: "rù",
  唬: "hǔ",
  得: "dé",
  牛: "niú",
  鬼: "guǐ",
  东: "dōng",
  躲: "duǒ",
  西: "xī",
  藏: "cáng",
  马: "mǎ",
  面: "miàn",
  南: "nán",
  奔: "bēn",
  北: "běi",
  跑: "pǎo",
  众: "zhòng",
  卒: "zú",
  森: "sēn",
  罗: "luó",
  殿: "diàn",
  报: "bào",
  祸: "huò",
  事: "shì",
  毛: "máo",
  脸: "liǎn",
  雷: "léi",
  公: "gōng",
  将: "jiāng",
  慌: "huāng",
  十: "shí",
  代: "dài",
  急: "jí",
  整: "zhěng",
  衣: "yī",
  相: "xiàng",
  貌: "mào",
  凶: "xiōng",
  恶: "è",
  即: "jí",
  排: "pái",
  下: "xià",
  班: "bān",
  次: "cì",
  应: "yīng",
  声: "shēng",
  高: "gāo",
  叫: "jiào",
  仙: "xiān",
  留: "liú",
  名: "míng",
  既: "jì",
  认: "rèn",
  差: "chà",
  想: "xiǎng",
  是: "shì",
  本: "běn",
  花: "huā",
  果: "guǒ",
  山: "shān",
  水: "shuǐ",
  帘: "lián",
  洞: "dòng",
  天: "tiān",
  生: "shēng",
  圣: "shèng",
  等: "děng",
  什: "shén",
  官: "guān",
  位: "wèi",
  躬: "gōng",
  阴: "yīn",
  间: "jiān",
  子: "zi",
  快: "kuài",
  免: "miǎn",
  秦: "qín",
  广: "guǎng",
  初: "chū",
  江: "jiāng",
  宋: "sòng",
  帝: "dì",
  仵: "wǔ",
  平: "píng",
  泰: "tài",
  都: "dū",
  市: "shì",
  卞: "biàn",
  转: "zhuǎn",
  汝: "rǔ",
  登: "dēng",
  显: "xiǎn",
  感: "gǎn",
  之: "zhī",
  类: "lèi",
  知: "zhī",
  好: "hǎo",
  歹: "dǎi",
  修: "xiū",
  与: "yǔ",
  齐: "qí",
  升: "shēng",
  跳: "tiào",
  拘: "jū",
  息: "xī",
  怒: "nù",
  普: "pǔ",
  同: "tóng",
  姓: "xìng",
  者: "zhě",
  多: "duō",
  错: "cuò",
  胡: "hú",
  常: "cháng",
  言: "yán",
  吏: "lì",
  取: "qǔ",
  簿: "bù",
  闻: "wén",
  请: "qǐng",
  查: "chá",
};

const translations_en = {
  只: "Only",
  见: "See",
  那: "That",
  美: "beautiful",
  猴: "monkey",
  王: "king",
  睡: "sleep",
  里: "inside",
  两: "two",
  人: "people",
  拿: "take",
  一: "one",
  张: "open",
  批: "Batch",
  文: "arts",
  上: "superior",
  有: "have",
  孙: "Sun",
  悟: "Enlightenment",
  空: "null",
  三: "three",
  字: "Character",
  走: "Walk",
  近: "close",
  身: "body",
  不: "No",
  容: "Allow",
  分: "point",
  说: "explain",
  套: "set",
  绳: "rope",
  就: "At once",
  把: "Bundle",
  的: "of",
  魂: "soul",
  灵: "spirit",
  儿: "Son",
  索: "Search",
  了: "It's",
  去: "go",
  踉: "jump",
  跄: "stagger",
  直: "straight",
  带: "bring",
  到: "arrive",
  座: "seat",
  城: "city",
  边: "side",
  渐: "gradually",
  觉: "Sleep",
  酒: "liquor",
  醒: "Awake",
  忽: "suddenly",
  抬: "lift",
  头: "head",
  观: "View",
  看: "look",
  铁: "iron",
  牌: "Card",
  个: "indivual",
  大: "big",
  乃: "So",
  幽: "quiet",
  冥: "deep",
  界: "boundary",
  顿: "Dun",
  然: "Of course",
  道: "road",
  阎: "Yan",
  所: "Place",
  居: "Residence",
  何: "what",
  为: "for",
  此: "this",
  你: "you",
  今: "now",
  阳: "Positive",
  寿: "life",
  该: "Should",
  终: "end",
  我: "I",
  领: "collar",
  勾: "hook",
  来: "Come",
  也: "also",
  听: "listen",
  老: "old",
  超: "overtake",
  出: "out",
  外: "outside",
  在: "exist",
  五: "five",
  行: "OK",
  中: "middle",
  已: "already",
  伏: "Fu",
  他: "he",
  管: "Tube",
  辖: "Obedience",
  怎: "How",
  么: "Is it",
  朦: "deceive",
  胧: "hazy",
  又: "again",
  敢: "dare",
  死: "die",
  扯: "pull",
  拉: "pull",
  定: "Certainly",
  要: "want",
  拖: "drag",
  进: "Enter",
  恼: "angry",
  起: "rise",
  性: "sex",
  耳: "Ear",
  朵: "Duo",
  掣: "Stop",
  宝: "precious",
  贝: "cowry",
  幌: "联",
  碗: "bowl",
  粗: "thick",
  细: "thin",
  略: "slightly",
  举: "Lift",
  手: "hand",
  打: "beat",
  肉: "Meat",
  酱: "Sauce",
  自: "since",
  解: "untie",
  其: "That",
  丢: "leave",
  开: "open",
  轮: "wheel",
  着: "Put",
  棒: "Great",
  入: "enter",
  唬: "fool",
  得: "have to",
  牛: "ox",
  鬼: "ghost",
  东: "East",
  躲: "hide",
  西: "West",
  藏: "Tibetan",
  马: "horse",
  面: "noodle",
  南: "South",
  奔: "Run",
  北: "north",
  跑: "run",
  众: "All",
  卒: "Pawn",
  森: "南",
  罗: "Luo",
  殿: "temple",
  报: "Report",
  祸: "disaster",
  事: "thing",
  毛: "hair",
  脸: "Face",
  雷: "thunder",
  公: "male",
  将: "Will",
  慌: "Panic",
  十: "ten",
  代: "generation",
  急: "urgent",
  整: "all",
  衣: "Clothes",
  相: "Mutually",
  貌: "appearance",
  凶: "fierce",
  恶: "evil",
  即: "Right now",
  排: "Row",
  下: "Down",
  班: "class",
  次: "Second-rate",
  应: "answer",
  声: "Voice",
  高: "high",
  叫: "Call",
  仙: "Fairy",
  留: "Keep",
  名: "name",
  既: "now that",
  认: "recognize",
  差: "Difference",
  想: "think",
  是: "yes",
  本: "Book",
  花: "flower",
  果: "fruit",
  山: "Mountain",
  水: "water",
  帘: "curtain",
  洞: "Hole",
  天: "sky",
  生: "born",
  圣: "Saint",
  等: "wait",
  什: "Varied",
  官: "official",
  位: "Bit",
  躬: "bow",
  阴: "Negative",
  间: "between",
  子: "son",
  快: "quick",
  免: "waived",
  秦: "Qin",
  广: "wide",
  初: "early",
  江: "River",
  宋: "Song",
  帝: "emperor",
  仵: "opponent",
  平: "flat",
  泰: "Thai",
  都: "All",
  市: "city",
  卞: "Bian",
  转: "change",
  汝: "You",
  登: "Login",
  显: "Show",
  感: "feel",
  之: "Of",
  类: "kind",
  知: "Know",
  好: "good",
  歹: "bad",
  修: "build",
  与: "and",
  齐: "together",
  升: "Lift",
  跳: "Jump",
  拘: "arrest",
  息: "interest",
  怒: "anger",
  普: "general",
  同: "same",
  姓: "surname",
  者: "Those",
  多: "many",
  错: "wrong",
  胡: "Hu",
  常: "often",
  言: "Word",
  吏: "Official",
  取: "Pick",
  簿: "book",
  闻: "smell",
  请: "please",
  查: "check",
};

const translations_de = {
  只: "Nur",
  见: "Sehen",
  那: "Das",
  美: "Schön",
  猴: "Affe",
  王: "König",
  睡: "schlafen",
  里: "innen",
  两: "zwei",
  人: "Menschen",
  拿: "nehmen",
  一: "eins",
  张: "offen",
  批: "Charge",
  文: "Künste",
  上: "Vorgesetzter",
  有: "haben",
  孙: "Sonne",
  悟: "Aufklärung",
  空: "NULL",
  三: "drei",
  字: "Charakter",
  走: "Gehen",
  近: "schließen",
  身: "Körper",
  不: "NEIN",
  容: "Erlauben",
  分: "Punkt",
  说: "erklären",
  套: "Satz",
  绳: "Seil",
  就: "Auf einmal",
  把: "Bündeln",
  的: "von",
  魂: "Seele",
  灵: "Geist",
  儿: "Sohn",
  索: "Suchen",
  了: "Es ist",
  去: "gehen",
  踉: "springen",
  跄: "staffeln",
  直: "gerade",
  带: "bringen",
  到: "ankommen",
  座: "Sitz",
  城: "Stadt",
  边: "Seite",
  渐: "schrittweise",
  觉: "Schlafen",
  酒: "Alkohol",
  醒: "Wach",
  忽: "plötzlich",
  抬: "Aufzug",
  头: "Kopf",
  观: "Sicht",
  看: "sehen",
  铁: "Eisen",
  牌: "Karte",
  个: "indival",
  大: "groß",
  乃: "Also",
  幽: "ruhig",
  冥: "tief",
  界: "Grenze",
  顿: "Dun",
  然: "Natürlich",
  道: "Straße",
  阎: "Yan",
  所: "Ort",
  居: "Residenz",
  何: "Was",
  为: "für",
  此: "Das",
  你: "Du",
  今: "Jetzt",
  阳: "Positiv",
  寿: "Leben",
  该: "Sollen",
  终: "Ende",
  我: "ICH",
  领: "Kragen",
  勾: "Haken",
  来: "Kommen",
  也: "Auch",
  听: "Hören",
  老: "alt",
  超: "überholen",
  出: "aus",
  外: "draußen",
  在: "existieren",
  五: "fünf",
  行: "OK",
  中: "Mitte",
  已: "bereits",
  伏: "Fu",
  他: "Er",
  管: "Rohr",
  辖: "Gehorsam",
  怎: "Wie",
  么: "Ist es",
  朦: "täuschen",
  胧: "dunstig",
  又: "wieder",
  敢: "wagen",
  死: "sterben",
  扯: "ziehen",
  拉: "ziehen",
  定: "Sicherlich",
  要: "wollen",
  拖: "ziehen",
  进: "Eingeben",
  恼: "wütend",
  起: "erheben",
  性: "Sex",
  耳: "Ohr",
  朵: "Duo",
  掣: "Stoppen",
  宝: "wertvoll",
  贝: "Cowry",
  幌: "联",
  碗: "Schüssel",
  粗: "dick",
  细: "dünn",
  略: "leicht",
  举: "Aufzug",
  手: "Hand",
  打: "schlagen",
  肉: "Fleisch",
  酱: "Sauce",
  自: "seit",
  解: "lösen",
  其: "Das",
  丢: "verlassen",
  开: "offen",
  轮: "Rad",
  着: "Setzen",
  棒: "Großartig",
  入: "eingeben",
  唬: "Narr",
  得: "müssen",
  牛: "Ochse",
  鬼: "Geist",
  东: "Ost",
  躲: "verstecken",
  西: "West",
  藏: "Tibetaner",
  马: "Pferd",
  面: "Nudel",
  南: "Süden",
  奔: "Laufen",
  北: "Norden",
  跑: "laufen",
  众: "Alle",
  卒: "Bauer",
  森: "南",
  罗: "Luo",
  殿: "Tempel",
  报: "Bericht",
  祸: "Katastrophe",
  事: "Ding",
  毛: "Haar",
  脸: "Gesicht",
  雷: "Donner",
  公: "männlich",
  将: "Wille",
  慌: "Panik",
  十: "zehn",
  代: "Generation",
  急: "dringend",
  整: "alle",
  衣: "Kleidung",
  相: "Gegenseitig",
  貌: "Aussehen",
  凶: "erbittert",
  恶: "teuflisch",
  即: "Im Augenblick",
  排: "Reihe",
  下: "Runter",
  班: "Klasse",
  次: "Zweitklassifiziert",
  应: "Antwort",
  声: "Stimme",
  高: "hoch",
  叫: "Anruf",
  仙: "Fee",
  留: "Halten",
  名: "Name",
  既: "Nun das",
  认: "erkennen",
  差: "Unterschied",
  想: "denken",
  是: "Ja",
  本: "Buch",
  花: "Blume",
  果: "Obst",
  山: "Berg",
  水: "Wasser",
  帘: "Vorhang",
  洞: "Loch",
  天: "Himmel",
  生: "geboren",
  圣: "Heilige",
  等: "Warten",
  什: "Unterschiedlich",
  官: "offiziell",
  位: "Bisschen",
  躬: "Bogen",
  阴: "Negativ",
  间: "zwischen",
  子: "Sohn",
  快: "schnell",
  免: "verzichtet",
  秦: "Qin",
  广: "breit",
  初: "früh",
  江: "Fluss",
  宋: "Lied",
  帝: "Kaiser",
  仵: "Gegner",
  平: "Wohnung",
  泰: "Thai",
  都: "Alle",
  市: "Stadt",
  卞: "Bian",
  转: "ändern",
  汝: "Du",
  登: "Login",
  显: "Zeigen",
  感: "fühlen",
  之: "Von",
  类: "Art",
  知: "Wissen",
  好: "Gut",
  歹: "schlecht",
  修: "bauen",
  与: "Und",
  齐: "zusammen",
  升: "Aufzug",
  跳: "Springen",
  拘: "verhaften",
  息: "Interesse",
  怒: "Wut",
  普: "allgemein",
  同: "Dasselbe",
  姓: "Nachname",
  者: "Diese",
  多: "viele",
  错: "falsch",
  胡: "Hu",
  常: "oft",
  言: "Wort",
  吏: "Offiziell",
  取: "Wählen",
  簿: "Buch",
  闻: "Geruch",
  请: "Bitte",
  查: "überprüfen",
};

const translations_fr = {
  只: "Seulement",
  见: "Voir",
  那: "Que",
  美: "beau",
  猴: "singe",
  王: "roi",
  睡: "dormir",
  里: "à l'intérieur",
  两: "deux",
  人: "personnes",
  拿: "prendre",
  一: "un",
  张: "ouvrir",
  批: "Lot",
  文: "arts",
  上: "supérieur",
  有: "avoir",
  孙: "Soleil",
  悟: "Éclaircissement",
  空: "nul",
  三: "trois",
  字: "Personnage",
  走: "Marcher",
  近: "fermer",
  身: "corps",
  不: "Non",
  容: "Permettre",
  分: "indiquer",
  说: "expliquer",
  套: "ensemble",
  绳: "corde",
  就: "Immédiatement",
  把: "Paquet",
  的: "de",
  魂: "âme",
  灵: "esprit",
  儿: "Fils",
  索: "Recherche",
  了: "C'est",
  去: "aller",
  踉: "saut",
  跄: "échelonner",
  直: "droit",
  带: "apporter",
  到: "arriver",
  座: "siège",
  城: "ville",
  边: "côté",
  渐: "progressivement",
  觉: "Dormir",
  酒: "alcool",
  醒: "Éveillé",
  忽: "soudainement",
  抬: "ascenseur",
  头: "tête",
  观: "Voir",
  看: "regarder",
  铁: "fer",
  牌: "Carte",
  个: "autonome",
  大: "grand",
  乃: "Donc",
  幽: "calme",
  冥: "profond",
  界: "limite",
  顿: "Dun",
  然: "Bien sûr",
  道: "route",
  阎: "Anéantier",
  所: "Lieu",
  居: "Résidence",
  何: "quoi",
  为: "pour",
  此: "ce",
  你: "toi",
  今: "maintenant",
  阳: "Positif",
  寿: "vie",
  该: "Devrait",
  终: "fin",
  我: "je",
  领: "collier",
  勾: "crochet",
  来: "Viens",
  也: "aussi",
  听: "écouter",
  老: "vieux",
  超: "dépasser",
  出: "dehors",
  外: "dehors",
  在: "exister",
  五: "cinq",
  行: "D'ACCORD",
  中: "milieu",
  已: "déjà",
  伏: "Fu",
  他: "il",
  管: "Tube",
  辖: "Obéissance",
  怎: "Comment",
  么: "Est-ce",
  朦: "tromper",
  胧: "brumeux",
  又: "encore",
  敢: "oser",
  死: "mourir",
  扯: "tirer",
  拉: "tirer",
  定: "Certainement",
  要: "vouloir",
  拖: "traîner",
  进: "Entrer",
  恼: "en colère",
  起: "augmenter",
  性: "sexe",
  耳: "Oreille",
  朵: "Duo",
  掣: "Arrêt",
  宝: "précieux",
  贝: "bouc",
  幌: "联",
  碗: "bol",
  粗: "épais",
  细: "mince",
  略: "légèrement",
  举: "Ascenseur",
  手: "main",
  打: "battre",
  肉: "Viande",
  酱: "Sauce",
  自: "depuis",
  解: "délier",
  其: "Que",
  丢: "partir",
  开: "ouvrir",
  轮: "roue",
  着: "Mettre",
  棒: "Super",
  入: "entrer",
  唬: "idiot",
  得: "devoir",
  牛: "bœuf",
  鬼: "fantôme",
  东: "Est",
  躲: "cacher",
  西: "Ouest",
  藏: "Tibétain",
  马: "cheval",
  面: "nouille",
  南: "Sud",
  奔: "Courir",
  北: "nord",
  跑: "courir",
  众: "Tous",
  卒: "Pion",
  森: "南",
  罗: "Luo",
  殿: "temple",
  报: "Rapport",
  祸: "catastrophe",
  事: "chose",
  毛: "cheveux",
  脸: "Affronter",
  雷: "tonnerre",
  公: "mâle",
  将: "Volonté",
  慌: "Panique",
  十: "dix",
  代: "génération",
  急: "urgent",
  整: "tous",
  衣: "Vêtements",
  相: "Mutuellement",
  貌: "apparence",
  凶: "féroce",
  恶: "mal",
  即: "Tout de suite",
  排: "Rangée",
  下: "Vers le bas",
  班: "classe",
  次: "De premier ordre",
  应: "répondre",
  声: "Voix",
  高: "haut",
  叫: "Appel",
  仙: "Fée",
  留: "Garder",
  名: "nom",
  既: "maintenant que",
  认: "reconnaître",
  差: "Différence",
  想: "pense",
  是: "Oui",
  本: "Livre",
  花: "fleur",
  果: "fruit",
  山: "Montagne",
  水: "eau",
  帘: "rideau",
  洞: "Trou",
  天: "ciel",
  生: "né",
  圣: "Saint",
  等: "attendez",
  什: "Varié",
  官: "officiel",
  位: "Peu",
  躬: "arc",
  阴: "Négatif",
  间: "entre",
  子: "fils",
  快: "rapide",
  免: "renoncé",
  秦: "Qin",
  广: "large",
  初: "tôt",
  江: "Rivière",
  宋: "Chanson",
  帝: "empereur",
  仵: "adversaire",
  平: "plat",
  泰: "thaïlandais",
  都: "Tous",
  市: "ville",
  卞: "Bian",
  转: "changement",
  汝: "Toi",
  登: "Se connecter",
  显: "Montrer",
  感: "sentir",
  之: "De",
  类: "gentil",
  知: "Savoir",
  好: "bien",
  歹: "mauvais",
  修: "construire",
  与: "et",
  齐: "ensemble",
  升: "Ascenseur",
  跳: "Saut",
  拘: "arrêter",
  息: "intérêt",
  怒: "colère",
  普: "général",
  同: "même",
  姓: "nom de famille",
  者: "Ceux",
  多: "beaucoup",
  错: "faux",
  胡: "Hu",
  常: "souvent",
  言: "Mot",
  吏: "Officiel",
  取: "Prendre",
  簿: "livre",
  闻: "odeur",
  请: "s'il te plaît",
  查: "vérifier",
};

const tianwen_translation_map_en = {
  只见那美猴王睡里见两人拿一张批文:
    "I saw the monkey king sleeping and saw two people pick up a comment",
  上有孙悟空三字: 'There are three words "Sun Wukong" on it',
  走近身: "Get closer",
  不容分说: "Nothing to say",
  套上绳: "Put on the rope",
  就把美猴王的魂灵儿索了去: "Just took the soul of the Monkey King",
  踉踉跄跄: "Stumbling",
  直带到一座城边: "Take it straight to a city",
  猴王渐觉酒醒: "The Monkey King wakes up",
  忽抬头观看: "Suddenly looking up to watch",
  那城上有一铁牌: "There is an iron sign in the city",
  牌上有三个大字: "There are three big characters on the card",
  乃幽冥界: "It's the underworld",
  美猴王顿然醒悟道: "The Monkey King suddenly awakened",
  幽冥界乃阎王所居: "The underworld is where the king of hell lives",
  何为到此: "What is here",
  那两人道: "The two said",
  你今阳寿该终: "Your life is over now",
  我两人领批: "I'll get the approval",
  勾你来也: "Tick ​​you up",
  猴王听说: "The Monkey King heard",
  道: "road",
  我老孙超出三界外: "My old grandson is beyond the Three Realms",
  不在五行中: "Not in the five elements",
  已不伏他管辖: "No longer he is in charge",
  怎么朦胧: "How hazy",
  又敢来勾我: "Dare to hook me again",
  那两个勾死人只管扯扯拉拉:
    "Those two people who were so scared were just pulling and pulling",
  定要拖他进去: "Must drag him in",
  那猴王恼起性来: "The monkey king became angry",
  耳朵中掣出宝贝: "Baby is drawn in the ears",
  幌一幌: "A guitar",
  碗来粗细: "The bowl is thick",
  略举手: "Raise your hand slightly",
  把两个勾死人打为肉酱: "Beat two dead people into meat sauce",
  自解其索: "Self-solving",
  丢开手: "Throw your hands away",
  轮着棒: "Take a turn",
  打入城中: "Kill into the city",
  唬得那牛头鬼东躲西藏:
    "The bull-headed ghost was so scared that he hid in the world",
  马面鬼南奔北跑: "Horse-faced ghost running south and north",
  众鬼卒奔上森罗殿: "All the ghosts rushed to Senluo Palace",
  报着: "Report",
  大王: "The King",
  祸事: "Disaster",
  祸事: "Disaster",
  外面一个毛脸雷公: "A thunder man with a hairy face outside",
  打将来了: "It's the future",
  慌得那十代冥王急整衣来看:
    "The ten generations of Popes were so anxious to look at him",
  见他相貌凶恶: "Seeing his appearance is fierce",
  即排下班次: "Schedule off duty",
  应声高叫道: "Screaming in response",
  上仙留名: "The immortal's name",
  上仙留名: "The immortal's name",
  猴王道: "The Monkey King's Way",
  你既认不得我: "You can't recognize me",
  怎么差人来勾我: "Why do you send me a message",
  十王道: "Ten kingly way",
  不敢: "Don't dare",
  不敢: "Don't dare",
  想是差人差了: "I think it's a bad guy",
  猴王道: "The Monkey King's Way",
  我本是花果山水帘洞天生圣人孙悟空:
    "I was originally a saint from Huaguo Mountain and Water Curtain Cave, Sun Wukong, who was born in the sky.",
  你等是什么官位: "What official position are you waiting for",
  十王躬身道: "The ten kings bowed and said",
  我等是阴间天子十代冥王:
    "I am the tenth generation of the Underworld Emperor.",
  悟空道: "Wukong Tao",
  快报名来: "Sign up soon",
  免打: "No call",
  十王道: "Ten kingly way",
  我等是秦广王: "I am King Guang of Qin",
  初江王: "King Chujiang",
  宋帝王: "Emperor Song",
  仵官王: "Coroner King",
  阎罗王: "King of Hell",
  平等王: "King of Equality",
  泰山王: "King of Mount Tai",
  都市王: "The city king",
  卞城王: "King Biancheng",
  转轮王: "The Wheel King",
  悟空道: "Wukong Tao",
  汝等既登王位: "You ascend the throne",
  乃灵显感应之类: "It's spiritual sensing, etc.",
  为何不知好歹: "Why don't you know what's wrong",
  我老孙修仙了道: "My old grandson has cultivated immortality",
  与天齐寿: "Sleep with Tiantian",
  超升三界之外: "Ascend to the outside of the three realms",
  跳出五行之中: "Leap out of the five elements",
  为何着人拘我: "Why do people arrest me",
  十王道: "Ten kingly way",
  上仙息怒: "Immortals vent",
  普天下同名同姓者多:
    "There are many people in the world who have the same name and surname",
  敢是那勾死人错走了也: "Dare you, that person who got away by mistake",
  悟空道: "Wukong Tao",
  胡说: "nonsense",
  胡说: "nonsense",
  常言道: "As the saying goes",
  官差吏差: "Officials and officials",
  来人不差: "The person coming is not bad",
  你快取生死簿子来我看:
    "You can take the life and death book and come and see it",
  十王闻言: "Ten Kings heard",
  即请上殿查看: "Please go to the palace to check",
};

const tianwen_translation_map_de = {
  只见那美猴王睡里见两人拿一张批文:
    "Ich sah den Affenkönig schlafen und sah zwei Leute einen Kommentar abholen",
  上有孙悟空三字: 'Es gibt drei Worte "Sun Wukong"',
  走近身: "Näher kommen",
  不容分说: "Nichts zu sagen",
  套上绳: "Anziehen",
  就把美猴王的魂灵儿索了去:
    "Ich habe gerade die Seele des Affenkönigs genommen",
  踉踉跄跄: "Stolpern",
  直带到一座城边: "Nehmen Sie es direkt in eine Stadt",
  猴王渐觉酒醒: "Der Affenkönig wacht auf",
  忽抬头观看: "Plötzlich aufschauen, um zuzusehen",
  那城上有一铁牌: "In der Stadt gibt es ein Eisenschild",
  牌上有三个大字: "Es gibt drei große Charaktere auf der Karte",
  乃幽冥界: "Es ist die Unterwelt",
  美猴王顿然醒悟道: "Der Affenkönig weckte plötzlich",
  幽冥界乃阎王所居: "In der Unterwelt lebt der König der Hölle",
  何为到此: "Was ist hier",
  那两人道: "Die beiden sagten",
  你今阳寿该终: "Dein Leben ist jetzt vorbei",
  我两人领批: "Ich werde die Zustimmung erhalten",
  勾你来也: "Tick ​​dich an",
  猴王听说: "Der Affenkönig hörte",
  道: "Straße",
  我老孙超出三界外: "Mein alter Enkel ist jenseits der drei Bereiche",
  不在五行中: "Nicht in den fünf Elementen",
  已不伏他管辖: "Er ist nicht mehr verantwortlich",
  怎么朦胧: "Wie dunstig",
  又敢来勾我: "Wage es, mich wieder einzuhaken",
  那两个勾死人只管扯扯拉拉:
    "Diese beiden Menschen, die so Angst hatten, zogen und zogen nur",
  定要拖他进去: "Muss ihn hineinziehen",
  那猴王恼起性来: "Der Affenkönig wurde wütend",
  耳朵中掣出宝贝: "Baby wird in den Ohren gezeichnet",
  幌一幌: "Eine Gitarre",
  碗来粗细: "Die Schüssel ist dick",
  略举手: "Heben Sie Ihre Hand leicht an",
  把两个勾死人打为肉酱: "Schlagen Sie zwei Tote in Fleischsauce",
  自解其索: "Sich selbst behoben",
  丢开手: "Wirf deine Hände weg",
  轮着棒: "Drehen Sie sich an",
  打入城中: "In die Stadt töten",
  唬得那牛头鬼东躲西藏:
    "Der bullenköpfige Geist hatte so Angst, dass er sich in der Welt versteckte",
  马面鬼南奔北跑:
    "Geister mit dem Pferdegesicht, der nach Süden und Norden läuft",
  众鬼卒奔上森罗殿: "Alle Geister eilten nach Senluo Palace",
  报着: "Bericht",
  大王: "Der König",
  祸事: "Katastrophe",
  祸事: "Katastrophe",
  外面一个毛脸雷公: "Ein Donnermann mit einem haarigen Gesicht draußen",
  打将来了: "Es ist die Zukunft",
  慌得那十代冥王急整衣来看:
    "Die zehn Generationen von Päpsten waren so bestrebt, ihn anzusehen",
  见他相貌凶恶: "Sein Aussehen zu sehen ist heftig",
  即排下班次: "Zeitplan für den Dienst",
  应声高叫道: "Als Antwort schreien",
  上仙留名: "Der Name des Unsterblichen",
  上仙留名: "Der Name des Unsterblichen",
  猴王道: "Der Weg des Affenkönigs",
  你既认不得我: "Du kannst mich nicht erkennen",
  怎么差人来勾我: "Warum senden Sie mir eine Nachricht?",
  十王道: "Zehn königliche Weise",
  不敢: "Wagen Sie es nicht",
  不敢: "Wagen Sie es nicht",
  想是差人差了: "Ich denke, es ist ein Bösewicht",
  猴王道: "Der Weg des Affenkönigs",
  我本是花果山水帘洞天生圣人孙悟空:
    "Ich war ursprünglich ein Heiliger aus Huaguo Mountain und Water Curtain Cave, Sun Wukong, der am Himmel geboren wurde.",
  你等是什么官位: "Auf welche offizielle Position warten Sie?",
  十王躬身道: "Die zehn Könige verneigten sich und sagten",
  我等是阴间天子十代冥王: "Ich bin die zehnte Generation des Unterweltkaisers.",
  悟空道: "Wukong Tao",
  快报名来: "Melden Sie sich bald an",
  免打: "Kein Anruf",
  十王道: "Zehn königliche Weise",
  我等是秦广王: "Ich bin König Guang von Qin",
  初江王: "König Chujiang",
  宋帝王: "Kaiserlied",
  仵官王: "Gerichtsmediziner",
  阎罗王: "König der Hölle",
  平等王: "König der Gleichheit",
  泰山王: "König des Mount Tai",
  都市王: "Der Stadtkönig",
  卞城王: "King Biancheng",
  转轮王: "Der Radkönig",
  悟空道: "Wukong Tao",
  汝等既登王位: "Sie haben den Thron bestiegen",
  乃灵显感应之类: "Es ist spirituelle Erkennung usw.",
  为何不知好歹: "Warum weißt du nicht, was los ist?",
  我老孙修仙了道: "Mein alter Enkel hat das Tao kultiviert",
  与天齐寿: "Schlaf mit Tiantian",
  超升三界之外: "Auf die Außenseite der drei Bereiche aufsteigen",
  跳出五行之中: "Springen Sie aus den fünf Elementen",
  为何着人拘我: "Warum verhaften mich die Leute?",
  十王道: "Zehn königliche Weise",
  上仙息怒: "Unsterbliche Entlüftung",
  普天下同名同姓者多:
    "Es gibt viele Menschen auf der Welt, die den gleichen Namen und denselben Nachnamen haben",
  敢是那勾死人错走了也:
    "Wagen Sie es, Sie, diese Person, die versehentlich davongekommen ist",
  悟空道: "Wukong Tao",
  胡说: "Unsinn",
  胡说: "Unsinn",
  常言道: "Wie das Sprichwort sagt",
  官差吏差: "Beamte und Beamte",
  来人不差: "Die Person, die kommt, ist nicht schlecht",
  你快取生死簿子来我看:
    "Sie können das Leben und das Todesbuch nehmen und es sehen und es sehen",
  十王闻言: "Zehn Könige hörten",
  即请上殿查看: "Bitte gehen Sie zum Palast, um zu überprüfen",
};

const tianwen_translation_map_fr = {
  只见那美猴王睡里见两人拿一张批文:
    "J'ai vu le roi de singe dormir et j'ai vu deux personnes prendre un commentaire",
  上有孙悟空三字: "Il y a trois mots pour le soleil wukong",
  走近身: "Se rapprocher",
  不容分说: "Rien à dire",
  套上绳: "",
  就把美猴王的魂灵儿索了去: "Je prends juste l'âme du roi du singe",
  踉踉跄跄: "Trébuchant",
  直带到一座城边: "Emmenez-le directement dans une ville",
  猴王渐觉酒醒: "Le roi de singe se réveille",
  忽抬头观看: "Regardant soudain les yeux pour regarder",
  那城上有一铁牌: "Il y a un signe de fer dans la ville",
  牌上有三个大字: "Il y a trois gros personnages sur la carte",
  乃幽冥界: "C'est les enfers",
  美猴王顿然醒悟道: "Le roi du singe s'est soudainement réveillé",
  幽冥界乃阎王所居: "Les enfers sont là où vit le roi de l'enfer",
  何为到此: "Qu'est-ce que ici",
  那两人道: "Les deux ont dit",
  你今阳寿该终: "Votre vie est terminée maintenant",
  我两人领批: "J'obtiendrai l'approbation",
  勾你来也: "Te cocher",
  猴王听说: "Le roi de singe a entendu",
  道: "route",
  我老孙超出三界外: "Mon vieux petit-fils est au-delà des trois royaumes",
  不在五行中: "Pas dans les cinq éléments",
  已不伏他管辖: "Il n'est plus responsable",
  怎么朦胧: "Comme c'est flou",
  又敢来勾我: "Osez-vous à nouveau m'accrocher",
  那两个勾死人只管扯扯拉拉:
    "Ces deux personnes qui avaient tellement peur de tirer et de tirer",
  定要拖他进去: "Doit le traîner",
  那猴王恼起性来: "Le roi de singe s'est mis en colère",
  耳朵中掣出宝贝: "Bébé est tiré dans les oreilles",
  幌一幌: "Une guitare",
  碗来粗细: "Le bol est épais",
  略举手: "Levez légèrement la main",
  把两个勾死人打为肉酱: "Battre deux morts dans la sauce à la viande",
  自解其索: "Auto-résolution",
  丢开手: "Jetez vos mains",
  轮着棒: "Prendre son tour",
  打入城中: "Tuer dans la ville",
  唬得那牛头鬼东躲西藏:
    "Le fantôme à tête de taureau avait tellement peur qu'il se cachait dans le monde",
  马面鬼南奔北跑: "Fantôme au visage de cheval coulant vers le sud et le nord",
  众鬼卒奔上森罗殿: "Tous les fantômes se sont précipités à Senluo Palace",
  报着: "Rapport",
  大王: "Le roi",
  祸事: "Catastrophe",
  祸事: "Catastrophe",
  外面一个毛脸雷公: "Un homme de tonnerre avec un visage poilu à l'extérieur",
  打将来了: "C'est l'avenir",
  慌得那十代冥王急整衣来看:
    "Les dix générations de papes étaient si impatientes de le regarder",
  见他相貌凶恶: "Voir son apparence est féroce",
  即排下班次: "Planifier en dehors des fonctions",
  应声高叫道: "Crier en réponse",
  上仙留名: "Le nom de l'immortel",
  上仙留名: "Le nom de l'immortel",
  猴王道: "Le chemin du roi du singe",
  你既认不得我: "Tu ne peux pas me reconnaître",
  怎么差人来勾我: "Pourquoi m'envoyez-vous un message",
  十王道: "Ten Killy Way",
  不敢: "N'ose pas",
  不敢: "N'ose pas",
  想是差人差了: "Je pense que c'est un méchant",
  猴王道: "Le chemin du roi du singe",
  我本是花果山水帘洞天生圣人孙悟空:
    "J'étais à l'origine un saint de Huaguo Mountain and Water Curtain Cave, Sun Wukong, qui est né dans le ciel.",
  你等是什么官位: "Quelle position officielle attendez-vous",
  十王躬身道: "Les dix rois s'inclinèrent et ont dit",
  我等是阴间天子十代冥王:
    "Je suis la dixième génération de l'empereur des enfers.",
  悟空道: "Wukong Tao",
  快报名来: "Inscrivez-vous bientôt",
  免打: "Pas d'appel",
  十王道: "Ten Killy Way",
  我等是秦广王: "Je suis le roi Guang de Qin",
  初江王: "Roi Chujiang",
  宋帝王: "Chant de l'empereur",
  仵官王: "Roi du coroner",
  阎罗王: "Roi de l'enfer",
  平等王: "Roi de l'égalité",
  泰山王: "Roi du mont Tai",
  都市王: "Le roi de la ville",
  卞城王: "King Biancheng",
  转轮王: "Le roi de roue",
  悟空道: "Wukong Tao",
  汝等既登王位: "Vous montez le trône",
  乃灵显感应之类: "C'est la détection spirituelle et d'autres",
  为何不知好歹: "Pourquoi tu ne sais pas ce qui ne va pas",
  我老孙修仙了道: "Mon vieux petit-fils a cultivé l'immortalité",
  与天齐寿: "Dormir avec tiantien",
  超升三界之外: "Monter à l'extérieur des trois royaumes",
  跳出五行之中: "Sauter des cinq éléments",
  为何着人拘我: "Pourquoi les gens m'arrêtent-ils",
  十王道: "Ten Killy Way",
  上仙息怒: "Immortels ventiler",
  普天下同名同姓者多:
    "Il y a beaucoup de gens dans le monde qui ont le même nom et le même nom",
  敢是那勾死人错走了也: "Osez-vous, cette personne qui s'est enfuie par erreur",
  悟空道: "Wukong Tao",
  胡说: "absurdité",
  胡说: "absurdité",
  常言道: "Comme on dit",
  官差吏差: "Fonctionnaires et fonctionnaires",
  来人不差: "La personne venant n'est pas mal",
  你快取生死簿子来我看:
    "Vous pouvez prendre le livre de la vie et de la mort et venir le voir",
  十王闻言: "Dix rois entendus",
  即请上殿查看: "Veuillez aller au palais pour vérifier",
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
