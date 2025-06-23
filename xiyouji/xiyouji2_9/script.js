const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `好猴王
将身一纵
跳起去
一路筋斗
直至北下观看
见一座高山
真是十分险峻
好山
笔峰挺立
曲涧深沉
笔峰挺立透空霄
曲涧深沉通地户
两崖花木争奇
几处松篁斗翠
左边龙
熟熟驯驯
右边虎
平平伏伏
每见铁牛耕
常有金钱种
幽禽睍睆声
丹凤朝阳立
石磷磷
波净净
古怪跷蹊真恶狞
世上名山无数多
花开花谢蘩还众
争如此景永长存
八节四时浑不动
诚为三界坎源山
滋养五行水脏洞
美猴王正默看景致
只听得有人言语
径自下山寻觅
原来那陡崖之前
乃是那水脏洞
洞门外有几个小妖跳舞
见了悟空就走
悟空道
休走
借你口中言
传我心内事
我乃正南方花果山水帘洞洞主
你家甚么混世鸟魔
屡次欺我儿孙
我特寻来
要与他见个上下
那小妖听说
疾忙跑入洞里
报道
大王
祸事了
魔王道
有甚祸事
小妖道
洞外有猴头称为花果山水帘洞洞主
他说你屡次欺他儿孙
特来寻你
见个上下哩
魔王笑道
我常闻得那些猴精说他有个大王
出家修行去
想是今番来了
你们见他怎生打扮
有甚器械
小妖道
他也没甚么器械
光着个头
穿一领红色衣
勒一条黄绦
足下踏一对乌靴
不僧不俗
又不像道士神仙
赤手空拳
在门外叫哩
魔王闻说
取我批挂兵器来
那小妖即时取出
那魔王穿了甲胄
绰刀在手
与众妖出得门来
即高声叫道
那个是水帘洞洞主
悟空急睁睛观看
只见那魔王
头戴乌金盔
映日光明
身挂皂罗袍
迎风飘荡
下穿着黑铁甲
紧勒皮条
足踏着花褶靴
雄如上将
腰广十围
身高三丈
手执一口刀
锋刃多明亮
称为混世魔
磊落凶模样`;

const pinyinMap = {
  好: "hǎo",
  猴: "hóu",
  王: "wáng",
  将: "jiāng",
  身: "shēn",
  一: "yī",
  纵: "zòng",
  跳: "tiào",
  起: "qǐ",
  去: "qù",
  路: "lù",
  筋: "jīn",
  斗: "dǒu",
  直: "zhí",
  至: "zhì",
  北: "běi",
  下: "xià",
  观: "guān",
  看: "kàn",
  见: "jiàn",
  座: "zuò",
  高: "gāo",
  山: "shān",
  真: "zhēn",
  是: "shì",
  十: "shí",
  分: "fēn",
  险: "xiǎn",
  峻: "jùn",
  笔: "bǐ",
  峰: "fēng",
  挺: "tǐng",
  立: "lì",
  曲: "qū",
  涧: "jiàn",
  深: "shēn",
  沉: "chén",
  透: "tòu",
  空: "kōng",
  霄: "xiāo",
  通: "tōng",
  地: "dì",
  户: "hù",
  两: "liǎng",
  崖: "yá",
  花: "huā",
  木: "mù",
  争: "zhēng",
  奇: "qí",
  几: "jǐ",
  处: "chù",
  松: "sōng",
  篁: "huáng",
  翠: "cuì",
  左: "zuǒ",
  边: "biān",
  龙: "lóng",
  熟: "shú",
  驯: "xùn",
  右: "yòu",
  虎: "hǔ",
  平: "píng",
  伏: "fú",
  每: "měi",
  铁: "tiě",
  牛: "niú",
  耕: "gēng",
  常: "cháng",
  有: "yǒu",
  金: "jīn",
  钱: "qián",
  种: "zhǒng",
  幽: "yōu",
  禽: "qín",
  睍: "xiàn",
  睆: "huàn",
  声: "shēng",
  丹: "dān",
  凤: "fèng",
  朝: "cháo",
  阳: "yáng",
  石: "shí",
  磷: "lín",
  波: "bō",
  净: "jìng",
  古: "gǔ",
  怪: "guài",
  跷: "qiāo",
  蹊: "qī",
  恶: "è",
  狞: "níng",
  世: "shì",
  上: "shàng",
  名: "míng",
  无: "wú",
  数: "shù",
  多: "duō",
  开: "kāi",
  谢: "xiè",
  蘩: "fán",
  还: "hái",
  众: "zhòng",
  如: "rú",
  此: "cǐ",
  景: "jǐng",
  永: "yǒng",
  长: "cháng",
  存: "cún",
  八: "bā",
  节: "jié",
  四: "sì",
  时: "shí",
  浑: "hún",
  不: "bù",
  动: "dòng",
  诚: "chéng",
  为: "wèi",
  三: "sān",
  界: "jiè",
  坎: "kǎn",
  源: "yuán",
  滋: "zī",
  养: "yǎng",
  五: "wǔ",
  行: "xíng",
  水: "shuǐ",
  脏: "zàng",
  洞: "dòng",
  美: "měi",
  正: "zhèng",
  默: "mò",
  致: "zhì",
  只: "zhǐ",
  听: "tīng",
  得: "dé",
  人: "rén",
  言: "yán",
  语: "yǔ",
  径: "jìng",
  自: "zì",
  寻: "xún",
  觅: "mì",
  原: "yuán",
  来: "lái",
  那: "nà",
  陡: "dǒu",
  之: "zhī",
  前: "qián",
  乃: "nǎi",
  门: "mén",
  外: "wài",
  个: "gè",
  小: "xiǎo",
  妖: "yāo",
  舞: "wǔ",
  了: "liǎo",
  悟: "wù",
  就: "jiù",
  走: "zǒu",
  道: "dào",
  休: "xiū",
  借: "jiè",
  你: "nǐ",
  口: "kǒu",
  中: "zhōng",
  传: "chuán",
  我: "wǒ",
  心: "xīn",
  内: "nèi",
  事: "shì",
  南: "nán",
  方: "fāng",
  果: "guǒ",
  帘: "lián",
  主: "zhǔ",
  家: "jiā",
  甚: "shén",
  么: "me",
  混: "hùn",
  鸟: "niǎo",
  魔: "mó",
  屡: "lǚ",
  次: "cì",
  欺: "qī",
  儿: "ér",
  孙: "sūn",
  特: "tè",
  要: "yào",
  与: "yǔ",
  他: "tā",
  说: "shuō",
  疾: "jí",
  忙: "máng",
  跑: "pǎo",
  入: "rù",
  里: "lǐ",
  报: "bào",
  大: "dà",
  祸: "huò",
  头: "tóu",
  称: "chēng",
  哩: "lī",
  笑: "xiào",
  闻: "wén",
  些: "xiē",
  精: "jīng",
  出: "chū",
  修: "xiū",
  想: "xiǎng",
  今: "jīn",
  番: "fān",
  们: "men",
  怎: "zěn",
  生: "shēng",
  打: "dǎ",
  扮: "bàn",
  器: "qì",
  械: "xiè",
  也: "yě",
  没: "méi",
  光: "guāng",
  着: "zhe",
  穿: "chuān",
  领: "lǐng",
  红: "hóng",
  色: "sè",
  衣: "yī",
  勒: "lēi",
  条: "tiáo",
  黄: "huáng",
  绦: "tāo",
  足: "zú",
  踏: "tà",
  对: "duì",
  乌: "wū",
  靴: "xuē",
  僧: "sēng",
  俗: "sú",
  又: "yòu",
  像: "xiàng",
  士: "shì",
  神: "shén",
  仙: "xiān",
  赤: "chì",
  手: "shǒu",
  拳: "quán",
  在: "zài",
  叫: "jiào",
  取: "qǔ",
  批: "pī",
  挂: "guà",
  兵: "bīng",
  即: "jí",
  甲: "jiǎ",
  胄: "zhòu",
  绰: "chuò",
  刀: "dāo",
  急: "jí",
  睁: "zhēng",
  睛: "jīng",
  戴: "dài",
  盔: "kuī",
  映: "yìng",
  日: "rì",
  明: "míng",
  皂: "zào",
  罗: "luó",
  袍: "páo",
  迎: "yíng",
  风: "fēng",
  飘: "piāo",
  荡: "dàng",
  黑: "hēi",
  紧: "jǐn",
  皮: "pí",
  褶: "zhě",
  雄: "xióng",
  腰: "yāo",
  广: "guǎng",
  围: "wéi",
  丈: "zhàng",
  执: "zhí",
  锋: "fēng",
  刃: "rèn",
  亮: "liàng",
  磊: "lěi",
  落: "luò",
  凶: "xiōng",
  模: "mú",
  样: "yàng",
};

const translations_en = {
  好: "good",
  猴: "monkey",
  王: "king",
  将: "Will",
  身: "body",
  一: "one",
  纵: "vertical",
  跳: "Jump",
  起: "rise",
  去: "go",
  路: "road",
  筋: "Tendons",
  斗: "fight",
  直: "straight",
  至: "to",
  北: "north",
  下: "Down",
  观: "View",
  看: "look",
  见: "See",
  座: "seat",
  高: "high",
  山: "Mountain",
  真: "real",
  是: "yes",
  十: "ten",
  分: "point",
  险: "risk",
  峻: "Jun",
  笔: "Pen",
  峰: "peak",
  挺: "quite",
  立: "stand",
  曲: "song",
  涧: "Stream",
  深: "deep",
  沉: "Sink",
  透: "through",
  空: "null",
  霄: "Sky",
  通: "Pass",
  地: "land",
  户: "household",
  两: "two",
  崖: "Cliff",
  花: "flower",
  木: "Wood",
  争: "Contend",
  奇: "strange",
  几: "Several",
  处: "Where",
  松: "loose",
  篁: "bamboo grove",
  翠: "emerald",
  左: "Left",
  边: "side",
  龙: "dragon",
  熟: "Crazy",
  驯: "tame",
  右: "right",
  虎: "Tiger",
  平: "flat",
  伏: "Fu",
  每: "Every",
  铁: "iron",
  牛: "ox",
  耕: "Farming",
  常: "often",
  有: "have",
  金: "gold",
  钱: "money",
  种: "kind",
  幽: "quiet",
  禽: "birds",
  睍: "Um",
  睆: "cute",
  声: "Voice",
  丹: "Dan",
  凤: "phoenix",
  朝: "towards",
  阳: "Positive",
  石: "stone",
  磷: "phosphorus",
  波: "Wave",
  净: "net",
  古: "antiquity",
  怪: "Strange",
  跷: "Stop",
  蹊: "footpath",
  恶: "evil",
  狞: "Ferment",
  世: "World",
  上: "superior",
  名: "name",
  无: "none",
  数: "number",
  多: "many",
  开: "open",
  谢: "Thanks",
  蘩: "英英",
  还: "return",
  众: "All",
  如: "like",
  此: "this",
  景: "scene",
  永: "forever",
  长: "long",
  存: "live",
  八: "eight",
  节: "Festival",
  四: "Four",
  时: "hour",
  浑: "muddy",
  不: "No",
  动: "move",
  诚: "Sincere",
  为: "for",
  三: "three",
  界: "boundary",
  坎: "Kan",
  源: "source",
  滋: "I",
  养: "keep",
  五: "five",
  行: "OK",
  水: "water",
  脏: "dirty",
  洞: "Hole",
  美: "beautiful",
  正: "just",
  默: "silent",
  致: "To",
  只: "Only",
  听: "listen",
  得: "have to",
  人: "people",
  言: "Word",
  语: "language",
  径: "path",
  自: "since",
  寻: "Looking for",
  觅: "seek",
  原: "Original",
  来: "Come",
  那: "That",
  陡: "steep",
  之: "Of",
  前: "forward",
  乃: "So",
  门: "Door",
  外: "outside",
  个: "indivual",
  小: "Small",
  妖: "Demon",
  舞: "dance",
  了: "It's",
  悟: "Enlightenment",
  就: "At once",
  走: "Walk",
  道: "road",
  休: "stop",
  借: "borrow",
  你: "you",
  口: "mouth",
  中: "middle",
  传: "pass",
  我: "I",
  心: "Heart",
  内: "Inside",
  事: "thing",
  南: "South",
  方: "square",
  果: "fruit",
  帘: "curtain",
  主: "host",
  家: "Home",
  甚: "very",
  么: "Is it",
  混: "mix",
  鸟: "bird",
  魔: "magic",
  屡: "repeatedly",
  次: "Second-rate",
  欺: "bully",
  儿: "Son",
  孙: "Sun",
  特: "special",
  要: "want",
  与: "and",
  他: "he",
  说: "explain",
  疾: "disease",
  忙: "busy",
  跑: "run",
  入: "enter",
  里: "inside",
  报: "Report",
  大: "big",
  祸: "disaster",
  头: "head",
  称: "say",
  哩: "Li",
  笑: "laugh",
  闻: "smell",
  些: "some",
  精: "Refined",
  出: "out",
  修: "build",
  想: "think",
  今: "now",
  番: "Anime",
  们: "We",
  怎: "How",
  生: "born",
  打: "beat",
  扮: "Pretend",
  器: "Device",
  械: "Machinery",
  也: "also",
  没: "without",
  光: "Light",
  着: "Put",
  穿: "wear",
  领: "collar",
  红: "red",
  色: "color",
  衣: "Clothes",
  勒: "Le",
  条: "strip",
  黄: "yellow",
  绦: "sash",
  足: "foot",
  踏: "tread",
  对: "right",
  乌: "Wu",
  靴: "Boots",
  僧: "monk",
  俗: "Vulgar",
  又: "again",
  像: "picture",
  士: "scholar",
  神: "god",
  仙: "Fairy",
  赤: "red",
  手: "hand",
  拳: "fist",
  在: "exist",
  叫: "Call",
  取: "Pick",
  批: "Batch",
  挂: "hang",
  兵: "Soldier",
  即: "Right now",
  甲: "First",
  胄: "helmet",
  绰: "Chuo",
  刀: "knife",
  急: "urgent",
  睁: "open eyes",
  睛: "eye",
  戴: "Wear",
  盔: "helmet",
  映: "reflect",
  日: "day",
  明: "bright",
  皂: "soap",
  罗: "Luo",
  袍: "robe",
  迎: "welcome",
  风: "wind",
  飘: "float",
  荡: "swing",
  黑: "black",
  紧: "tight",
  皮: "Skin",
  褶: "Pleated",
  雄: "male",
  腰: "waist",
  广: "wide",
  围: "Surrounding",
  丈: "ten feet",
  执: "Persistence",
  锋: "Front",
  刃: "edge",
  亮: "Bright",
  磊: "Lei",
  落: "fall",
  凶: "fierce",
  模: "mold",
  样: "Sample",
};

const translations_de = {
  好: "Gut",
  猴: "Affe",
  王: "König",
  将: "Wille",
  身: "Körper",
  一: "eins",
  纵: "Vertikale",
  跳: "Springen",
  起: "erheben",
  去: "gehen",
  路: "Straße",
  筋: "Sehnen",
  斗: "kämpfen",
  直: "gerade",
  至: "Zu",
  北: "Norden",
  下: "Runter",
  观: "Sicht",
  看: "sehen",
  见: "Sehen",
  座: "Sitz",
  高: "hoch",
  山: "Berg",
  真: "real",
  是: "Ja",
  十: "zehn",
  分: "Punkt",
  险: "Risiko",
  峻: "Jun",
  笔: "Stift",
  峰: "Gipfel",
  挺: "ganz",
  立: "Stand",
  曲: "Lied",
  涧: "Strom",
  深: "tief",
  沉: "Waschbecken",
  透: "durch",
  空: "NULL",
  霄: "Himmel",
  通: "Passieren",
  地: "Land",
  户: "Haushalt",
  两: "zwei",
  崖: "Cliff",
  花: "Blume",
  木: "Holz",
  争: "Kämpfen",
  奇: "seltsam",
  几: "Mehrere",
  处: "Wo",
  松: "lose",
  篁: "Bambushain",
  翠: "Smaragd",
  左: "Links",
  边: "Seite",
  龙: "Drachen",
  熟: "Verrückt",
  驯: "zähmen",
  右: "Rechts",
  虎: "Tiger",
  平: "Wohnung",
  伏: "Fu",
  每: "Jeder",
  铁: "Eisen",
  牛: "Ochse",
  耕: "Landwirtschaft",
  常: "oft",
  有: "haben",
  金: "Gold",
  钱: "Geld",
  种: "Art",
  幽: "ruhig",
  禽: "Vögel",
  睍: "Äh",
  睆: "Niedlich",
  声: "Stimme",
  丹: "Dan",
  凤: "Phönix",
  朝: "in Richtung",
  阳: "Positiv",
  石: "Stein",
  磷: "Phosphor",
  波: "Welle",
  净: "netto",
  古: "Antike",
  怪: "Seltsam",
  跷: "Stoppen",
  蹊: "Fußweg",
  恶: "teuflisch",
  狞: "Ferment",
  世: "Welt",
  上: "Vorgesetzter",
  名: "Name",
  无: "keiner",
  数: "Nummer",
  多: "viele",
  开: "offen",
  谢: "Danke",
  蘩: "英英",
  还: "zurückkehren",
  众: "Alle",
  如: "wie",
  此: "Das",
  景: "Szene",
  永: "für immer",
  长: "lang",
  存: "live",
  八: "acht",
  节: "Festival",
  四: "Vier",
  时: "Stunde",
  浑: "schlammig",
  不: "NEIN",
  动: "bewegen",
  诚: "Aufrichtig",
  为: "für",
  三: "drei",
  界: "Grenze",
  坎: "Kan",
  源: "Quelle",
  滋: "ICH",
  养: "halten",
  五: "fünf",
  行: "OK",
  水: "Wasser",
  脏: "schmutzig",
  洞: "Loch",
  美: "Schön",
  正: "Nur",
  默: "still",
  致: "Zu",
  只: "Nur",
  听: "Hören",
  得: "müssen",
  人: "Menschen",
  言: "Wort",
  语: "Sprache",
  径: "Weg",
  自: "seit",
  寻: "Auf der Suche nach",
  觅: "suchen",
  原: "Original",
  来: "Kommen",
  那: "Das",
  陡: "steil",
  之: "Von",
  前: "nach vorne",
  乃: "Also",
  门: "Tür",
  外: "draußen",
  个: "indival",
  小: "Klein",
  妖: "Dämon",
  舞: "tanzen",
  了: "Es ist",
  悟: "Aufklärung",
  就: "Auf einmal",
  走: "Gehen",
  道: "Straße",
  休: "stoppen",
  借: "ausleihen",
  你: "Du",
  口: "Mund",
  中: "Mitte",
  传: "passieren",
  我: "ICH",
  心: "Herz",
  内: "Innen",
  事: "Ding",
  南: "Süden",
  方: "Quadrat",
  果: "Obst",
  帘: "Vorhang",
  主: "Gastgeber",
  家: "Heim",
  甚: "sehr",
  么: "Ist es",
  混: "mischen",
  鸟: "Vogel",
  魔: "Magie",
  屡: "wiederholt",
  次: "Zweitklassifiziert",
  欺: "schikanieren",
  儿: "Sohn",
  孙: "Sonne",
  特: "besonders",
  要: "wollen",
  与: "Und",
  他: "Er",
  说: "erklären",
  疾: "Krankheit",
  忙: "beschäftigt",
  跑: "laufen",
  入: "eingeben",
  里: "innen",
  报: "Bericht",
  大: "groß",
  祸: "Katastrophe",
  头: "Kopf",
  称: "sagen",
  哩: "Li",
  笑: "lachen",
  闻: "Geruch",
  些: "manche",
  精: "Raffiniert",
  出: "aus",
  修: "bauen",
  想: "denken",
  今: "Jetzt",
  番: "Anime",
  们: "Wir",
  怎: "Wie",
  生: "geboren",
  打: "schlagen",
  扮: "Vorgeben",
  器: "Gerät",
  械: "Maschinen",
  也: "Auch",
  没: "ohne",
  光: "Licht",
  着: "Setzen",
  穿: "tragen",
  领: "Kragen",
  红: "Rot",
  色: "Farbe",
  衣: "Kleidung",
  勒: "Le",
  条: "Streifen",
  黄: "Gelb",
  绦: "Schärpe",
  足: "Fuß",
  踏: "treten",
  对: "Rechts",
  乌: "Wu",
  靴: "Stiefel",
  僧: "Mönch",
  俗: "Vulgär",
  又: "wieder",
  像: "Bild",
  士: "Gelehrte",
  神: "Gott",
  仙: "Fee",
  赤: "Rot",
  手: "Hand",
  拳: "Faust",
  在: "existieren",
  叫: "Anruf",
  取: "Wählen",
  批: "Charge",
  挂: "aufhängen",
  兵: "Soldat",
  即: "Im Augenblick",
  甲: "Erste",
  胄: "Helm",
  绰: "Chuo",
  刀: "Messer",
  急: "dringend",
  睁: "Augen auf",
  睛: "Auge",
  戴: "Tragen",
  盔: "Helm",
  映: "reflektieren",
  日: "Tag",
  明: "hell",
  皂: "Seife",
  罗: "Luo",
  袍: "Robe",
  迎: "Willkommen",
  风: "Wind",
  飘: "schweben",
  荡: "Swing",
  黑: "Schwarz",
  紧: "eng",
  皮: "Haut",
  褶: "Falten",
  雄: "männlich",
  腰: "Taille",
  广: "breit",
  围: "Umgeben",
  丈: "zehn Fuß",
  执: "Ausdauer",
  锋: "Front",
  刃: "Rand",
  亮: "Hell",
  磊: "Lei",
  落: "fallen",
  凶: "erbittert",
  模: "Schimmel",
  样: "Probe",
};

const translations_fr = {
  好: "bien",
  猴: "singe",
  王: "roi",
  将: "Volonté",
  身: "corps",
  一: "un",
  纵: "verticale",
  跳: "Saut",
  起: "augmenter",
  去: "aller",
  路: "route",
  筋: "Tendons",
  斗: "lutte",
  直: "droit",
  至: "à",
  北: "nord",
  下: "Vers le bas",
  观: "Voir",
  看: "regarder",
  见: "Voir",
  座: "siège",
  高: "haut",
  山: "Montagne",
  真: "réel",
  是: "Oui",
  十: "dix",
  分: "indiquer",
  险: "risque",
  峻: "Juin",
  笔: "Stylo",
  峰: "culminer",
  挺: "assez",
  立: "rester",
  曲: "chanson",
  涧: "Flux",
  深: "profond",
  沉: "Couler",
  透: "à travers",
  空: "nul",
  霄: "Ciel",
  通: "Passer",
  地: "atterrir",
  户: "ménage",
  两: "deux",
  崖: "Falaise",
  花: "fleur",
  木: "Bois",
  争: "Combattre",
  奇: "étrange",
  几: "Plusieurs",
  处: "Où",
  松: "lâche",
  篁: "bambou",
  翠: "émeraude",
  左: "Gauche",
  边: "côté",
  龙: "dragon",
  熟: "Fou",
  驯: "apprivoiser",
  右: "droite",
  虎: "Tigre",
  平: "plat",
  伏: "Fu",
  每: "Chaque",
  铁: "fer",
  牛: "bœuf",
  耕: "Agriculture",
  常: "souvent",
  有: "avoir",
  金: "or",
  钱: "argent",
  种: "gentil",
  幽: "calme",
  禽: "oiseaux",
  睍: "Um",
  睆: "mignon",
  声: "Voix",
  丹: "Dan",
  凤: "phénix",
  朝: "vers",
  阳: "Positif",
  石: "pierre",
  磷: "phosphore",
  波: "Vague",
  净: "filet",
  古: "antiquité",
  怪: "Étrange",
  跷: "Arrêt",
  蹊: "sentier",
  恶: "mal",
  狞: "Fermenter",
  世: "Monde",
  上: "supérieur",
  名: "nom",
  无: "aucun",
  数: "nombre",
  多: "beaucoup",
  开: "ouvrir",
  谢: "Merci",
  蘩: "英英",
  还: "retour",
  众: "Tous",
  如: "comme",
  此: "ce",
  景: "scène",
  永: "pour toujours",
  长: "long",
  存: "en direct",
  八: "huit",
  节: "Festival",
  四: "Quatre",
  时: "heure",
  浑: "boueux",
  不: "Non",
  动: "se déplacer",
  诚: "Sincère",
  为: "pour",
  三: "trois",
  界: "limite",
  坎: "Kan",
  源: "source",
  滋: "je",
  养: "garder",
  五: "cinq",
  行: "D'ACCORD",
  水: "eau",
  脏: "sale",
  洞: "Trou",
  美: "beau",
  正: "juste",
  默: "silencieux",
  致: "À",
  只: "Seulement",
  听: "écouter",
  得: "devoir",
  人: "personnes",
  言: "Mot",
  语: "langue",
  径: "chemin",
  自: "depuis",
  寻: "À la recherche de",
  觅: "chercher",
  原: "Original",
  来: "Viens",
  那: "Que",
  陡: "raide",
  之: "De",
  前: "avant",
  乃: "Donc",
  门: "Porte",
  外: "dehors",
  个: "autonome",
  小: "Petit",
  妖: "Démon",
  舞: "danse",
  了: "C'est",
  悟: "Éclaircissement",
  就: "Immédiatement",
  走: "Marcher",
  道: "route",
  休: "arrêt",
  借: "emprunter",
  你: "toi",
  口: "bouche",
  中: "milieu",
  传: "passer",
  我: "je",
  心: "Cœur",
  内: "À l'intérieur",
  事: "chose",
  南: "Sud",
  方: "carré",
  果: "fruit",
  帘: "rideau",
  主: "hôte",
  家: "Maison",
  甚: "très",
  么: "Est-ce",
  混: "mélanger",
  鸟: "oiseau",
  魔: "magie",
  屡: "à plusieurs reprises",
  次: "De premier ordre",
  欺: "intimidateur",
  儿: "Fils",
  孙: "Soleil",
  特: "spécial",
  要: "vouloir",
  与: "et",
  他: "il",
  说: "expliquer",
  疾: "maladie",
  忙: "occupé",
  跑: "courir",
  入: "entrer",
  里: "à l'intérieur",
  报: "Rapport",
  大: "grand",
  祸: "catastrophe",
  头: "tête",
  称: "dire",
  哩: "Li",
  笑: "rire",
  闻: "odeur",
  些: "quelques",
  精: "Raffiné",
  出: "dehors",
  修: "construire",
  想: "pense",
  今: "maintenant",
  番: "Anime",
  们: "Nous",
  怎: "Comment",
  生: "né",
  打: "battre",
  扮: "Prétendre",
  器: "Appareil",
  械: "Machinerie",
  也: "aussi",
  没: "sans",
  光: "Lumière",
  着: "Mettre",
  穿: "porter",
  领: "collier",
  红: "rouge",
  色: "couleur",
  衣: "Vêtements",
  勒: "Le",
  条: "bande",
  黄: "jaune",
  绦: "ceinture",
  足: "pied",
  踏: "bande de roulement",
  对: "droite",
  乌: "Wu",
  靴: "Bottes",
  僧: "moine",
  俗: "Vulgaire",
  又: "encore",
  像: "image",
  士: "savant",
  神: "Dieu",
  仙: "Fée",
  赤: "rouge",
  手: "main",
  拳: "poing",
  在: "exister",
  叫: "Appel",
  取: "Prendre",
  批: "Lot",
  挂: "accrocher",
  兵: "Soldat",
  即: "Tout de suite",
  甲: "D'abord",
  胄: "casque",
  绰: "Chuo",
  刀: "couteau",
  急: "urgent",
  睁: "yeux ouverts",
  睛: "œil",
  戴: "Porter",
  盔: "casque",
  映: "refléter",
  日: "jour",
  明: "brillant",
  皂: "savon",
  罗: "Luo",
  袍: "peignoir",
  迎: "accueillir",
  风: "vent",
  飘: "flotter",
  荡: "balançoire",
  黑: "noir",
  紧: "serré",
  皮: "Peau",
  褶: "Plissé",
  雄: "mâle",
  腰: "taille",
  广: "large",
  围: "Environnant",
  丈: "dix pieds",
  执: "Persistance",
  锋: "Devant",
  刃: "bord",
  亮: "Brillant",
  磊: "Lei",
  落: "automne",
  凶: "féroce",
  模: "moule",
  样: "Échantillon",
};

const tianwen_translation_map_en = {
  好猴王: "Good Monkey King",
  将身一纵: "Pull your body",
  跳起去: "Jump up",
  一路筋斗: "All the way",
  直至北下观看: "Until you go downstairs to watch",
  见一座高山: "See a mountain",
  真是十分险峻: "It's really dangerous",
  好山: "Good mountain",
  笔峰挺立: "The pen peak stands upright",
  曲涧深沉: "The curved stream is deep",
  笔峰挺立透空霄: "The pen peak stands upright and penetrates the sky",
  曲涧深沉通地户: "Qujian deep and deep into the ground",
  两崖花木争奇: "Two cliffs compete for the wonders of flowers and trees",
  几处松篁斗翠: "Several pines and bamboos are fighting green",
  左边龙: "The dragon on the left",
  熟熟驯驯: "Familiar taming",
  右边虎: "Tiger on the right",
  平平伏伏: "Ordinary",
  每见铁牛耕: "Iron ox plows every time",
  常有金钱种: "There are often money seeds",
  幽禽睍睆声: "The sound of the birds",
  丹凤朝阳立: "Danfeng stands up to the sun",
  石磷磷: "Phosphorus",
  波净净: "Bojing",
  古怪跷蹊真恶狞: "Strange and weird",
  世上名山无数多: "There are countless famous mountains in the world",
  花开花谢蘩还众: "Flowers bloom and fade and return to the vast",
  争如此景永长存: "Fight forever",
  八节四时浑不动: "Stay unmoved in the eight festivals and four seasons",
  诚为三界坎源山: "Sincerely, it is the Kanyuan Mountain in the Three Realms",
  滋养五行水脏洞: "Nourish the five elements of water and dirty holes",
  美猴王正默看景致: "The Monkey King is silently watching the scenery",
  只听得有人言语: "Only hear someone's words",
  径自下山寻觅: "Go down the mountain to search",
  原来那陡崖之前: "It turns out that before the steep cliff",
  乃是那水脏洞: "It's the dirty hole",
  洞门外有几个小妖跳舞:
    "There are a few little demons dancing outside the cave gate",
  见了悟空就走: "When you see Wukong, you leave",
  悟空道: "Wukong Tao",
  休走: "Don't leave",
  借你口中言: "I'll give you my words",
  传我心内事: "Tell me what's inside",
  我乃正南方花果山水帘洞洞主:
    "I am the owner of the Flower and Fruit Mountain Water Curtain Cave in the south",
  你家甚么混世鸟魔: "What's the Bird Demon in Your Family",
  屡次欺我儿孙: "I bully my children and grandchildren many times",
  我特寻来: "I'm looking for it",
  要与他见个上下: "I want to meet him",
  那小妖听说: "That little demon heard",
  疾忙跑入洞里: "Run into the hole quickly",
  报道: "Report",
  大王: "The King",
  祸事了: "A disaster",
  魔王道: "The Devil's Way",
  有甚祸事: "What a disaster",
  小妖道: "Little Demonic",
  洞外有猴头称为花果山水帘洞洞主:
    "There is a monkey head outside the cave called Huaguo Mountain Water Curtain Cave Master",
  他说你屡次欺他儿孙:
    "He said you bully his children and grandchildren many times",
  特来寻你: "Come find you very much",
  见个上下哩: "Meet a little over",
  魔王笑道: "The devil smiled",
  我常闻得那些猴精说他有个大王:
    "I often hear those monkey spirits saying that he has a great king",
  出家修行去: "Go to practice monks",
  想是今番来了: "I think it's coming this time",
  你们见他怎生打扮: "How do you dress up when you see him",
  有甚器械: "What equipment is there",
  小妖道: "Little Demonic",
  他也没甚么器械: "He has no equipment, either",
  光着个头: "Bald",
  穿一领红色衣: "Wear a red collar",
  勒一条黄绦: "A yellow ribbon",
  足下踏一对乌靴: "A pair of black boots under your feet",
  不僧不俗: "Not monks or vulgar",
  又不像道士神仙: "Not like a Taoist priest and immortal",
  赤手空拳: "unarmed",
  在门外叫哩: "Calling outside the door",
  魔王闻说: "The Devil King said",
  取我批挂兵器来: "Take my weapons",
  那小妖即时取出: "The little demon took it out immediately",
  那魔王穿了甲胄: "The devil wore armor",
  绰刀在手: "A knife in hand",
  与众妖出得门来: "Come out with all the demons",
  即高声叫道: "He shouted loudly",
  那个是水帘洞洞主: "That's the owner of the water curtain cave",
  悟空急睁睛观看: "Wukong watched with his eyes open",
  只见那魔王: "I saw the devil",
  头戴乌金盔: "Wearing a black gold helmet",
  映日光明: "The sun shines brightly",
  身挂皂罗袍: "Hanging soap robe",
  迎风飘荡: "Floating in the wind",
  下穿着黑铁甲: "Wearing black iron armor",
  紧勒皮条: "Tighten the strip",
  足踏着花褶靴: "Floral pleated boots",
  雄如上将: "The hero is like the above general",
  腰广十围: "Wide waist",
  身高三丈: "Three feet tall",
  手执一口刀: "Hold a knife in hand",
  锋刃多明亮: "How bright the blade",
  称为混世魔: "Called the Demon of the World",
  磊落凶模样: "Being open and fierce",
};

const tianwen_translation_map_de = {
  好猴王: "Guter Affenkönig",
  将身一纵: "Zieh deinen Körper",
  跳起去: "Aufspringen",
  一路筋斗: "Den ganzen Weg",
  直至北下观看: "Bis du nach unten gehst, um sie zu beobachten",
  见一座高山: "Sehen Sie einen Berg",
  真是十分险峻: "Es ist wirklich gefährlich",
  好山: "Guter Berg",
  笔峰挺立: "Der Stiftpeak steht aufrecht",
  曲涧深沉: "Der gebogene Strom ist tief",
  笔峰挺立透空霄: "Der Stiftpeak steht aufrecht und dringt in den Himmel ein",
  曲涧深沉通地户: "Qujian tief und tief in den Boden",
  两崖花木争奇: "Zwei Klippen konkurrieren um die Wunder von Blumen und Bäumen",
  几处松篁斗翠: "Mehrere Kiefern und Bambus kämpfen um grün",
  左边龙: "Der Drache links",
  熟熟驯驯: "Vertraute Zähmung",
  右边虎: "Tiger rechts",
  平平伏伏: "Normal",
  每见铁牛耕: "Jedes Mal Eisenoxpflüge",
  常有金钱种: "Es gibt oft Geldsamen",
  幽禽睍睆声: "Das Geräusch der Vögel",
  丹凤朝阳立: "Danfeng steht der Sonne vor",
  石磷磷: "Phosphor",
  波净净: "Bojing",
  古怪跷蹊真恶狞: "Seltsam und seltsam",
  世上名山无数多: "Es gibt unzählige berühmte Berge auf der Welt",
  花开花谢蘩还众: "Blumen blühen und verblassen und kehren zum Weiten zurück",
  争如此景永长存: "Für immer kämpfen",
  八节四时浑不动:
    "Bleiben Sie in den acht Festivals und vier Jahreszeiten ungerührt",
  诚为三界坎源山:
    "Mit freundlichen Grüßen ist es der Kanyuan -Berg in den drei Bereichen",
  滋养五行水脏洞:
    "Nähren Sie die fünf Elemente von Wasser und schmutzigen Löchern",
  美猴王正默看景致: "Der Affenkönig beobachtet die Landschaft stillschweigend",
  只听得有人言语: "Hören Sie nur die Worte von jemandem",
  径自下山寻觅: "Gehen Sie den Berg hinunter, um zu suchen",
  原来那陡崖之前: "Es stellt sich heraus, dass vor der steilen Klippe",
  乃是那水脏洞: "Es ist das schmutzige Loch",
  洞门外有几个小妖跳舞:
    "Es gibt ein paar kleine Dämonen, die außerhalb des Höhlentors tanzen",
  见了悟空就走: "Wenn Sie Wukong sehen, gehen Sie",
  悟空道: "Wukong Tao",
  休走: "Nicht gehen",
  借你口中言: "Ich gebe dir meine Worte",
  传我心内事: "Sag mir, was drin ist",
  我乃正南方花果山水帘洞洞主:
    "Ich bin der Besitzer der Blumen- und Obst -Bergwasservorhanghöhle im Süden",
  你家甚么混世鸟魔: "Was ist der Vogeldämon in Ihrer Familie?",
  屡次欺我儿孙: "Ich schikane meine Kinder und Enkelkinder oft",
  我特寻来: "Ich suche es",
  要与他见个上下: "Ich möchte ihn treffen",
  那小妖听说: "Dieser kleine Dämon hörte",
  疾忙跑入洞里: "Rennen Sie schnell in das Loch",
  报道: "Bericht",
  大王: "Der König",
  祸事了: "Eine Katastrophe",
  魔王道: "Der Weg des Teufels",
  有甚祸事: "Was für eine Katastrophe",
  小妖道: "Wenig dämonisch",
  洞外有猴头称为花果山水帘洞洞主:
    "Vor der Höhle namens Huaguo Mountain Water Curtain Cave Master befindet sich ein Affenkopf namens Huaguo",
  他说你屡次欺他儿孙:
    "Er sagte, Sie schikanieren seine Kinder und Enkelkinder oft",
  特来寻你: "Komm und finde dich sehr",
  见个上下哩: "Sich ein wenig treffen",
  魔王笑道: "Der Teufel lächelte",
  我常闻得那些猴精说他有个大王:
    "Ich höre oft diese Affengeister sagen, dass er einen großen König hat",
  出家修行去: "Mäen sich an Mönche",
  想是今番来了: "Ich denke, es kommt diesmal",
  你们见他怎生打扮: "Wie kleidest du dich, wenn du ihn siehst?",
  有甚器械: "Welche Ausrüstung ist da",
  小妖道: "Wenig dämonisch",
  他也没甚么器械: "Er hat auch keine Ausrüstung",
  光着个头: "Kahl",
  穿一领红色衣: "Tragen Sie einen roten Kragen",
  勒一条黄绦: "Ein gelbes Band",
  足下踏一对乌靴: "Ein Paar schwarze Stiefel unter Ihren Füßen",
  不僧不俗: "Mönche oder vulgär",
  又不像道士神仙: "Nicht wie ein taoistischer Priester und Unsterblicher",
  赤手空拳: "unbewaffnet",
  在门外叫哩: "Vor der Tür anrufen",
  魔王闻说: "Der Teufelskönig sagte",
  取我批挂兵器来: "Nimm meine Waffen",
  那小妖即时取出: "Der kleine Dämon nahm es sofort heraus",
  那魔王穿了甲胄: "Der Teufel trug Rüstung",
  绰刀在手: "Ein Messer in der Hand",
  与众妖出得门来: "Komm mit allen Dämonen heraus",
  即高声叫道: "Schrie er laut",
  那个是水帘洞洞主: "Das ist der Besitzer der Wasservorhanghöhle",
  悟空急睁睛观看: "Wukong sah mit offenen Augen zu",
  只见那魔王: "Ich habe den Teufel gesehen",
  头戴乌金盔: "Einen schwarzen Goldhelm tragen",
  映日光明: "Die Sonne scheint hell",
  身挂皂罗袍: "Hängende Seifewaden",
  迎风飘荡: "Im Wind schweben",
  下穿着黑铁甲: "Schwarze Eisenpanzer tragen",
  紧勒皮条: "Ziehen Sie den Streifen fest",
  足踏着花褶靴: "Blumenfaltenstiefel",
  雄如上将: "Der Held ist wie der oben genannte General",
  腰广十围: "Breite Taille",
  身高三丈: "Drei Fuß groß",
  手执一口刀: "Ein Messer in der Hand halten",
  锋刃多明亮: "Wie hell die Klinge",
  称为混世魔: "Genannt Dämon der Welt",
  磊落凶模样: "Offen und wild sein",
};

const tianwen_translation_map_fr = {
  好猴王: "Bon roi de singe",
  将身一纵: "Tirez votre corps",
  跳起去: "Sauter",
  一路筋斗: "Tout le temps",
  直至北下观看: "Jusqu'à ce que tu descenais pour regarder",
  见一座高山: "Voir une montagne",
  真是十分险峻: "C'est vraiment dangereux",
  好山: "Bonne montagne",
  笔峰挺立: "Le Pen Peak est debout",
  曲涧深沉: "Le ruisseau incurvé est profond",
  笔峰挺立透空霄: "Le pic de stylo se tient droit et pénètre dans le ciel",
  曲涧深沉通地户: "Qujian en profondeur dans le sol",
  两崖花木争奇:
    "Deux falaises rivalisent pour les merveilles des fleurs et des arbres",
  几处松篁斗翠: "Plusieurs pins et bambous combattent le vert",
  左边龙: "Le dragon à gauche",
  熟熟驯驯: "Taming familier",
  右边虎: "Tigre à droite",
  平平伏伏: "Ordinaire",
  每见铁牛耕: "Iron bœuf chargés à chaque fois",
  常有金钱种: "Il y a souvent des graines d'argent",
  幽禽睍睆声: "Le son des oiseaux",
  丹凤朝阳立: "Danfeng résiste au soleil",
  石磷磷: "Phosphore",
  波净净: "Bojing",
  古怪跷蹊真恶狞: "Étrange et bizarre",
  世上名山无数多: "Il y a d'innombrables montagnes célèbres dans le monde",
  花开花谢蘩还众: "Les fleurs fleurissent et se fondent et retournent au vaste",
  争如此景永长存: "Combattre pour toujours",
  八节四时浑不动: "Restez imprégné dans les huit festivals et quatre saisons",
  诚为三界坎源山:
    "Sincèrement, c'est la montagne de Kanyuan dans les trois royaumes",
  滋养五行水脏洞: "Nourrir les cinq éléments d'eau et de trous sales",
  美猴王正默看景致: "Le roi de singe regarde silencieusement le paysage",
  只听得有人言语: "N'entendez que les paroles de quelqu'un",
  径自下山寻觅: "Descendre la montagne pour fouiller",
  原来那陡崖之前: "Il s'avère qu'avant la falaise abrupte",
  乃是那水脏洞: "C'est le trou sale",
  洞门外有几个小妖跳舞:
    "Il y a quelques petits démons dansant à l'extérieur de la porte de la grotte",
  见了悟空就走: "Quand tu vois wukong, tu pars",
  悟空道: "Wukong Tao",
  休走: "Ne partez pas",
  借你口中言: "Je vais te donner mes mots",
  传我心内事: "Dites-moi ce qu'il y a à l'intérieur",
  我乃正南方花果山水帘洞洞主:
    "Je suis le propriétaire de la grotte de rideaux d'eau des fleurs et des fruits de la montagne au sud",
  你家甚么混世鸟魔: "Quel est le démon des oiseaux dans votre famille",
  屡次欺我儿孙: "J'intimide plusieurs fois mes enfants et mes petits-enfants",
  我特寻来: "Je le cherche",
  要与他见个上下: "Je veux le rencontrer",
  那小妖听说: "Ce petit démon a entendu",
  疾忙跑入洞里: "Courez rapidement dans le trou",
  报道: "Rapport",
  大王: "Le roi",
  祸事了: "Une catastrophe",
  魔王道: "La voie du diable",
  有甚祸事: "Quelle catastrophe",
  小妖道: "Peu démoniaque",
  洞外有猴头称为花果山水帘洞洞主:
    "Il y a une tête de singe devant la grotte appelée Huaguo Mountain Water Curtain Cave Master",
  他说你屡次欺他儿孙:
    "Il a dit que vous intimidez plusieurs fois ses enfants et petits-enfants",
  特来寻你: "Viens te trouver beaucoup",
  见个上下哩: "Se rencontrer un peu",
  魔王笑道: "Le diable sourit",
  我常闻得那些猴精说他有个大王:
    "J'entends souvent ces esprits de singe dire qu'il a un grand roi",
  出家修行去: "Aller à la pratique des moines",
  想是今番来了: "Je pense que ça arrive cette fois",
  你们见他怎生打扮: "Comment vous habillez-vous quand vous le voyez",
  有甚器械: "Quel équipement y a-t-il",
  小妖道: "Peu démoniaque",
  他也没甚么器械: "Il n'a pas d'équipement non plus",
  光着个头: "Chauve",
  穿一领红色衣: "Porter un col rouge",
  勒一条黄绦: "",
  足下踏一对乌靴: "Une paire de bottes noires sous vos pieds",
  不僧不俗: "Pas moines ou vulgaires",
  又不像道士神仙: "Pas comme un prêtre taoïste et un immortel",
  赤手空拳: "sans armes",
  在门外叫哩: "Appel à l'extérieur de la porte",
  魔王闻说: "Le diable roi a dit",
  取我批挂兵器来: "Prendre mes armes",
  那小妖即时取出: "Le petit démon l'a sorti immédiatement",
  那魔王穿了甲胄: "Le diable portait une armure",
  绰刀在手: "Un couteau à la main",
  与众妖出得门来: "Sortez avec tous les démons",
  即高声叫道: "Il a crié fort",
  那个是水帘洞洞主: "C'est le propriétaire de la grotte du rideau d'eau",
  悟空急睁睛观看: "Wukong regarda les yeux ouverts",
  只见那魔王: "J'ai vu le diable",
  头戴乌金盔: "Portant un casque en or noir",
  映日光明: "Le soleil brille brillamment",
  身挂皂罗袍: "Robe de savon suspendu",
  迎风飘荡: "Flottant dans le vent",
  下穿着黑铁甲: "Portant une armure de fer noire",
  紧勒皮条: "Serrer la bande",
  足踏着花褶靴: "Bottes plissées florales",
  雄如上将: "Le héros est comme le général ci-dessus",
  腰广十围: "Taille large",
  身高三丈: "Trois pieds de haut",
  手执一口刀: "Tenir un couteau à la main",
  锋刃多明亮: "Quelle est la brillance de la lame",
  称为混世魔: "Appelé le démon du monde",
  磊落凶模样: "Être ouvert et féroce",
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
