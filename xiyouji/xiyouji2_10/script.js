const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `猴王喝道
这泼魔这般眼大
看不见老孙
魔王见了
笑道
你身不满四尺
年不过三旬
手内又无兵器
怎么大胆猖狂
要寻我见甚么上下
悟空骂道
你这泼魔
原来没眼
你量我小
要大却也不难
你量我无兵器
我两只手勾着天边月哩
你不要怕
只吃老孙一拳
纵一纵
跳上去
劈脸就打
那魔王伸手架住道
你这般矬矮
我这般高长
你要使拳
我要使刀
使刀就杀了你
也吃人笑
待我放下刀
与你使路拳看
悟空道
说得是
好汉子
走来
那魔王丢开架子便打
这悟空钻进去相撞相迎
他两个拳捶脚踢
一冲一撞
原来长拳空大
短簇坚牢
那魔王被悟空掏短肋
撞了裆
几下筋节
把他打重了
他闪过
拿起那板大的钢刀
望悟空劈头就砍
悟空急撤身
他砍了一个空
悟空见他凶猛
即使身外身法
拔一把毫毛
丢在口中嚼碎
望空中喷去
叫一声
变
即变做三二百个小猴
周围攒簇
原来人得仙体
出神变化
无方不知
这猴王自从了道之后
身上有八万四千毛羽
根根能变
应物随心
那些小猴
眼乖会跳
刀来砍不着
枪去不能伤
你看他前踊后跃
钻上去
把魔王围绕
抱的抱
扯的扯
钻裆的钻裆
扳脚的扳脚
踢打挦毛
抠眼睛
捻鼻子
抬鼓弄
直打做一个攒盘
这悟空才去夺得他的刀来
分开小猴
照顶门一下
砍为两段
领众杀进洞中
将那大小妖精
尽皆剿灭
却把毫毛一抖
收上身来
又见那收不上身者
却是那魔王在水帘洞中擒去的小猴
悟空道
汝等何为到此
约有三五十个
都含泪道
我等因大王修仙去后
这两年被他争吵
把我们都摄将来
那不是我们洞中的家火
石盆
石碗都被这厮拿来也
悟空道
既是我们的家火
你们都搬出外去
随即洞里放起火来
把那水脏洞烧得枯干
尽归了一体
对众道
汝等跟我回去
众猴道
大王
我们来时
只听得耳边风声
虚飘飘到于此地
更不识路径
今怎得回乡
悟空道
这是他弄的个术法儿
有何难也
我如今一窍通
百窍通
我也会弄
你们都合了眼
休怕`;

const pinyinMap = {
  猴: "hóu",
  王: "wáng",
  喝: "hè",
  道: "dào",
  这: "zhè",
  泼: "pō",
  魔: "mó",
  般: "bān",
  眼: "yǎn",
  大: "dà",
  看: "kàn",
  不: "bú",
  见: "jiàn",
  老: "lǎo",
  孙: "sūn",
  了: "le",
  笑: "xiào",
  你: "nǐ",
  身: "shēn",
  满: "mǎn",
  四: "sì",
  尺: "chǐ",
  年: "nián",
  过: "guò",
  三: "sān",
  旬: "xún",
  手: "shǒu",
  内: "nèi",
  又: "yòu",
  无: "wú",
  兵: "bīng",
  器: "qì",
  怎: "zěn",
  么: "me",
  胆: "dǎn",
  猖: "chāng",
  狂: "kuáng",
  要: "yào",
  寻: "xún",
  我: "wǒ",
  甚: "shèn",
  上: "shàng",
  下: "xià",
  悟: "wù",
  空: "kōng",
  骂: "mà",
  原: "yuán",
  来: "lái",
  没: "méi",
  量: "liàng",
  小: "xiǎo",
  却: "què",
  也: "yě",
  难: "nán",
  两: "liǎng",
  只: "zhǐ",
  勾: "gōu",
  着: "zhe",
  天: "tiān",
  边: "biān",
  月: "yuè",
  哩: "lī",
  怕: "pà",
  吃: "chī",
  一: "yī",
  拳: "quán",
  纵: "zòng",
  跳: "tiào",
  去: "qù",
  劈: "pī",
  脸: "liǎn",
  就: "jiù",
  打: "dǎ",
  那: "nà",
  伸: "shēn",
  架: "jià",
  住: "zhù",
  矬: "cuó",
  矮: "ǎi",
  高: "gāo",
  长: "zhǎng",
  使: "shǐ",
  刀: "dāo",
  杀: "shā",
  人: "rén",
  待: "dài",
  放: "fàng",
  与: "yǔ",
  路: "lù",
  说: "shuō",
  得: "dé",
  是: "shì",
  好: "hǎo",
  汉: "hàn",
  子: "zi",
  走: "zǒu",
  丢: "diū",
  开: "kāi",
  便: "biàn",
  钻: "zuān",
  进: "jìn",
  相: "xiāng",
  撞: "zhuàng",
  迎: "yíng",
  他: "tā",
  个: "gè",
  捶: "chuí",
  脚: "jiǎo",
  踢: "tī",
  冲: "chōng",
  短: "duǎn",
  簇: "cù",
  坚: "jiān",
  牢: "láo",
  被: "bèi",
  掏: "tāo",
  肋: "lē",
  裆: "dāng",
  几: "jǐ",
  筋: "jīn",
  节: "jié",
  把: "bǎ",
  重: "zhòng",
  闪: "shǎn",
  拿: "ná",
  起: "qǐ",
  板: "bǎn",
  的: "de",
  钢: "gāng",
  望: "wàng",
  头: "tóu",
  砍: "kǎn",
  急: "jí",
  撤: "chè",
  凶: "xiōng",
  猛: "měng",
  即: "jí",
  外: "wài",
  法: "fǎ",
  拔: "bá",
  毫: "háo",
  毛: "máo",
  在: "zài",
  口: "kǒu",
  中: "zhōng",
  嚼: "jué",
  碎: "suì",
  喷: "pēn",
  叫: "jiào",
  声: "shēng",
  变: "biàn",
  做: "zuò",
  二: "èr",
  百: "bǎi",
  周: "zhōu",
  围: "wéi",
  攒: "zǎn",
  仙: "xiān",
  体: "tǐ",
  出: "chū",
  神: "shén",
  化: "huà",
  方: "fāng",
  知: "zhī",
  自: "zì",
  从: "cóng",
  之: "zhī",
  后: "hòu",
  有: "yǒu",
  八: "bā",
  万: "wàn",
  千: "qiān",
  羽: "yǔ",
  根: "gēn",
  能: "néng",
  应: "yīng",
  物: "wù",
  随: "suí",
  心: "xīn",
  些: "xiē",
  乖: "guāi",
  会: "huì",
  枪: "qiāng",
  伤: "shāng",
  前: "qián",
  踊: "yǒng",
  跃: "yuè",
  绕: "rào",
  抱: "bào",
  扯: "chě",
  扳: "bān",
  挦: "xián",
  抠: "kōu",
  睛: "jīng",
  捻: "niǎn",
  鼻: "bí",
  抬: "tái",
  鼓: "gǔ",
  弄: "nòng",
  直: "zhí",
  盘: "pán",
  才: "cái",
  夺: "duó",
  分: "fēn",
  照: "zhào",
  顶: "dǐng",
  门: "mén",
  为: "wèi",
  段: "duàn",
  领: "lǐng",
  众: "zhòng",
  洞: "dòng",
  将: "jiāng",
  妖: "yāo",
  精: "jīng",
  尽: "jǐn",
  皆: "jiē",
  剿: "jiǎo",
  灭: "miè",
  抖: "dǒu",
  收: "shōu",
  者: "zhě",
  水: "shuǐ",
  帘: "lián",
  擒: "qín",
  汝: "rǔ",
  等: "děng",
  何: "hé",
  到: "dào",
  此: "cǐ",
  约: "yuē",
  五: "wǔ",
  十: "shí",
  都: "dōu",
  含: "hán",
  泪: "lèi",
  因: "yīn",
  修: "xiū",
  争: "zhēng",
  吵: "chǎo",
  们: "men",
  摄: "shè",
  家: "jiā",
  火: "huǒ",
  石: "shí",
  盆: "pén",
  碗: "wǎn",
  厮: "sī",
  既: "jì",
  搬: "bān",
  里: "lǐ",
  脏: "zàng",
  烧: "shāo",
  枯: "kū",
  干: "gān",
  归: "guī",
  对: "duì",
  跟: "gēn",
  回: "huí",
  时: "shí",
  听: "tīng",
  耳: "ěr",
  风: "fēng",
  虚: "xū",
  飘: "piāo",
  于: "yú",
  地: "dì",
  更: "gèng",
  识: "shí",
  径: "jìng",
  今: "jīn",
  乡: "xiāng",
  术: "shù",
  儿: "ér",
  如: "rú",
  窍: "qiào",
  通: "tōng",
  合: "hé",
  休: "xiū",
};

const translations_en = {
  猴: "monkey",
  王: "king",
  喝: "drink",
  道: "road",
  这: "this",
  泼: "splash",
  魔: "magic",
  般: "Normal",
  眼: "Eye",
  大: "big",
  看: "look",
  不: "No",
  见: "See",
  老: "old",
  孙: "Sun",
  了: "It's",
  笑: "laugh",
  你: "you",
  身: "body",
  满: "Full",
  四: "Four",
  尺: "ruler",
  年: "Year",
  过: "Pass",
  三: "three",
  旬: "ten days",
  手: "hand",
  内: "Inside",
  又: "again",
  无: "none",
  兵: "Soldier",
  器: "Device",
  怎: "How",
  么: "Is it",
  胆: "Bold",
  猖: "wild",
  狂: "mad",
  要: "want",
  寻: "Looking for",
  我: "I",
  甚: "very",
  上: "superior",
  下: "Down",
  悟: "Enlightenment",
  空: "null",
  骂: "scold",
  原: "Original",
  来: "Come",
  没: "without",
  量: "quantity",
  小: "Small",
  却: "but",
  也: "also",
  难: "Disaster",
  两: "two",
  只: "Only",
  勾: "hook",
  着: "Put",
  天: "sky",
  边: "side",
  月: "moon",
  哩: "Li",
  怕: "Afraid",
  吃: "eat",
  一: "one",
  拳: "fist",
  纵: "vertical",
  跳: "Jump",
  去: "go",
  劈: "hack",
  脸: "Face",
  就: "At once",
  打: "beat",
  那: "That",
  伸: "stretch",
  架: "shelf",
  住: "live",
  矬: "dwarfish",
  矮: "short",
  高: "high",
  长: "long",
  使: "make",
  刀: "knife",
  杀: "kill",
  人: "people",
  待: "treat",
  放: "put",
  与: "and",
  路: "road",
  说: "explain",
  得: "have to",
  是: "yes",
  好: "good",
  汉: "Chinese",
  子: "son",
  走: "Walk",
  丢: "leave",
  开: "open",
  便: "Hope",
  钻: "Diamond",
  进: "Enter",
  相: "Mutually",
  撞: "Collide",
  迎: "welcome",
  他: "he",
  个: "indivual",
  捶: "hammer",
  脚: "foot",
  踢: "Kick",
  冲: "rush",
  短: "short",
  簇: "cluster",
  坚: "Strong",
  牢: "prison",
  被: "quilt",
  掏: "dig",
  肋: "rib",
  裆: "crotch",
  几: "Several",
  筋: "Tendons",
  节: "Festival",
  把: "Bundle",
  重: "Heavy",
  闪: "flash",
  拿: "take",
  起: "rise",
  板: "plate",
  的: "of",
  钢: "steel",
  望: "see",
  头: "head",
  砍: "cut",
  急: "urgent",
  撤: "withdraw",
  凶: "fierce",
  猛: "fierce",
  即: "Right now",
  外: "outside",
  法: "Law",
  拔: "pull",
  毫: "海海",
  毛: "hair",
  在: "exist",
  口: "mouth",
  中: "middle",
  嚼: "chew",
  碎: "broken",
  喷: "spray",
  叫: "Call",
  声: "Voice",
  变: "Change",
  做: "Do",
  二: "two",
  百: "Hundred",
  周: "week",
  围: "Surrounding",
  攒: "Save",
  仙: "Fairy",
  体: "body",
  出: "out",
  神: "god",
  化: "change",
  方: "square",
  知: "Know",
  自: "since",
  从: "from",
  之: "Of",
  后: "back",
  有: "have",
  八: "eight",
  万: "Ten thousand",
  千: "thousand",
  羽: "feather",
  根: "root",
  能: "able",
  应: "answer",
  物: "Things",
  随: "With",
  心: "Heart",
  些: "some",
  乖: "good",
  会: "meeting",
  枪: "gun",
  伤: "hurt",
  前: "forward",
  踊: "leap",
  跃: "jump",
  绕: "Circle",
  抱: "hug",
  扯: "pull",
  扳: "pull",
  挦: "口",
  抠: "Snap",
  睛: "eye",
  捻: "twist",
  鼻: "nose",
  抬: "lift",
  鼓: "drum",
  弄: "alley",
  直: "straight",
  盘: "plate",
  才: "talent",
  夺: "Take it",
  分: "point",
  照: "According to",
  顶: "top",
  门: "Door",
  为: "for",
  段: "part",
  领: "collar",
  众: "All",
  洞: "Hole",
  将: "Will",
  妖: "Demon",
  精: "Refined",
  尽: "All",
  皆: "all",
  剿: "Suppress",
  灭: "Extinguish",
  抖: "shake",
  收: "receive",
  者: "Those",
  水: "water",
  帘: "curtain",
  擒: "capture",
  汝: "You",
  等: "wait",
  何: "what",
  到: "arrive",
  此: "this",
  约: "about",
  五: "five",
  十: "ten",
  都: "All",
  含: "Include",
  泪: "tear",
  因: "because",
  修: "build",
  争: "Contend",
  吵: "Quarrel",
  们: "We",
  摄: "Photo",
  家: "Home",
  火: "fire",
  石: "stone",
  盆: "pot",
  碗: "bowl",
  厮: "Friend",
  既: "now that",
  搬: "move",
  里: "inside",
  脏: "dirty",
  烧: "burn",
  枯: "Wither",
  干: "Dry",
  归: "Go home",
  对: "right",
  跟: "and",
  回: "Back",
  时: "hour",
  听: "listen",
  耳: "Ear",
  风: "wind",
  虚: "Void",
  飘: "float",
  于: "At",
  地: "land",
  更: "Even",
  识: "knowledge",
  径: "path",
  今: "now",
  乡: "Township",
  术: "Technique",
  儿: "Son",
  如: "like",
  窍: "Tips",
  通: "Pass",
  合: "combine",
  休: "stop",
};

const translations_de = {
  猴: "Affe",
  王: "König",
  喝: "trinken",
  道: "Straße",
  这: "Das",
  泼: "Spritzen",
  魔: "Magie",
  般: "Normal",
  眼: "Auge",
  大: "groß",
  看: "sehen",
  不: "NEIN",
  见: "Sehen",
  老: "alt",
  孙: "Sonne",
  了: "Es ist",
  笑: "lachen",
  你: "Du",
  身: "Körper",
  满: "Voll",
  四: "Vier",
  尺: "Herrscher",
  年: "Jahr",
  过: "Passieren",
  三: "drei",
  旬: "Zehn Tage",
  手: "Hand",
  内: "Innen",
  又: "wieder",
  无: "keiner",
  兵: "Soldat",
  器: "Gerät",
  怎: "Wie",
  么: "Ist es",
  胆: "Deutlich",
  猖: "wild",
  狂: "verrückt",
  要: "wollen",
  寻: "Auf der Suche nach",
  我: "ICH",
  甚: "sehr",
  上: "Vorgesetzter",
  下: "Runter",
  悟: "Aufklärung",
  空: "NULL",
  骂: "schimpfen",
  原: "Original",
  来: "Kommen",
  没: "ohne",
  量: "Menge",
  小: "Klein",
  却: "Aber",
  也: "Auch",
  难: "Katastrophe",
  两: "zwei",
  只: "Nur",
  勾: "Haken",
  着: "Setzen",
  天: "Himmel",
  边: "Seite",
  月: "Mond",
  哩: "Li",
  怕: "Besorgt",
  吃: "essen",
  一: "eins",
  拳: "Faust",
  纵: "Vertikale",
  跳: "Springen",
  去: "gehen",
  劈: "hacken",
  脸: "Gesicht",
  就: "Auf einmal",
  打: "schlagen",
  那: "Das",
  伸: "strecken",
  架: "Regal",
  住: "live",
  矬: "Zwergenfisch",
  矮: "kurz",
  高: "hoch",
  长: "lang",
  使: "machen",
  刀: "Messer",
  杀: "töten",
  人: "Menschen",
  待: "behandeln",
  放: "setzen",
  与: "Und",
  路: "Straße",
  说: "erklären",
  得: "müssen",
  是: "Ja",
  好: "Gut",
  汉: "chinesisch",
  子: "Sohn",
  走: "Gehen",
  丢: "verlassen",
  开: "offen",
  便: "Hoffnung",
  钻: "Diamant",
  进: "Eingeben",
  相: "Gegenseitig",
  撞: "Kollidieren",
  迎: "Willkommen",
  他: "Er",
  个: "indival",
  捶: "Hammer",
  脚: "Fuß",
  踢: "Kick",
  冲: "eilen",
  短: "kurz",
  簇: "Cluster",
  坚: "Stark",
  牢: "Gefängnis",
  被: "Decke",
  掏: "graben",
  肋: "Rippe",
  裆: "Zwickel",
  几: "Mehrere",
  筋: "Sehnen",
  节: "Festival",
  把: "Bündeln",
  重: "Schwer",
  闪: "Blitz",
  拿: "nehmen",
  起: "erheben",
  板: "Platte",
  的: "von",
  钢: "Stahl",
  望: "sehen",
  头: "Kopf",
  砍: "schneiden",
  急: "dringend",
  撤: "zurückziehen",
  凶: "erbittert",
  猛: "erbittert",
  即: "Im Augenblick",
  外: "draußen",
  法: "Gesetz",
  拔: "ziehen",
  毫: "海海",
  毛: "Haar",
  在: "existieren",
  口: "Mund",
  中: "Mitte",
  嚼: "kauen",
  碎: "gebrochen",
  喷: "Spray",
  叫: "Anruf",
  声: "Stimme",
  变: "Ändern",
  做: "Tun",
  二: "zwei",
  百: "Hundert",
  周: "Woche",
  围: "Umgeben",
  攒: "Speichern",
  仙: "Fee",
  体: "Körper",
  出: "aus",
  神: "Gott",
  化: "ändern",
  方: "Quadrat",
  知: "Wissen",
  自: "seit",
  从: "aus",
  之: "Von",
  后: "zurück",
  有: "haben",
  八: "acht",
  万: "Zehntausend",
  千: "tausend",
  羽: "Feder",
  根: "Wurzel",
  能: "fähig",
  应: "Antwort",
  物: "Dinge",
  随: "Mit",
  心: "Herz",
  些: "manche",
  乖: "Gut",
  会: "treffen",
  枪: "Pistole",
  伤: "verletzt",
  前: "nach vorne",
  踊: "Sprung",
  跃: "springen",
  绕: "Kreis",
  抱: "Umarmung",
  扯: "ziehen",
  扳: "ziehen",
  挦: "口",
  抠: "Schnappnahme",
  睛: "Auge",
  捻: "Twist",
  鼻: "Nase",
  抬: "Aufzug",
  鼓: "Trommel",
  弄: "Gasse",
  直: "gerade",
  盘: "Platte",
  才: "Talent",
  夺: "Nimm es",
  分: "Punkt",
  照: "Entsprechend",
  顶: "Spitze",
  门: "Tür",
  为: "für",
  段: "Teil",
  领: "Kragen",
  众: "Alle",
  洞: "Loch",
  将: "Wille",
  妖: "Dämon",
  精: "Raffiniert",
  尽: "Alle",
  皆: "alle",
  剿: "Unterdrücken",
  灭: "Löschen",
  抖: "Shake",
  收: "erhalten",
  者: "Diese",
  水: "Wasser",
  帘: "Vorhang",
  擒: "erfassen",
  汝: "Du",
  等: "Warten",
  何: "Was",
  到: "ankommen",
  此: "Das",
  约: "um",
  五: "fünf",
  十: "zehn",
  都: "Alle",
  含: "Enthalten",
  泪: "Träne",
  因: "Weil",
  修: "bauen",
  争: "Kämpfen",
  吵: "Streit",
  们: "Wir",
  摄: "Foto",
  家: "Heim",
  火: "Feuer",
  石: "Stein",
  盆: "Pot",
  碗: "Schüssel",
  厮: "Freund",
  既: "Nun das",
  搬: "bewegen",
  里: "innen",
  脏: "schmutzig",
  烧: "brennen",
  枯: "Verdorren",
  干: "Trocken",
  归: "Nach Hause gehen",
  对: "Rechts",
  跟: "Und",
  回: "Zurück",
  时: "Stunde",
  听: "Hören",
  耳: "Ohr",
  风: "Wind",
  虚: "Leere",
  飘: "schweben",
  于: "Bei",
  地: "Land",
  更: "Sogar",
  识: "Wissen",
  径: "Weg",
  今: "Jetzt",
  乡: "Gemeinde",
  术: "Technik",
  儿: "Sohn",
  如: "wie",
  窍: "Tipps",
  通: "Passieren",
  合: "kombinieren",
  休: "stoppen",
};

const translations_fr = {
  猴: "singe",
  王: "roi",
  喝: "boire",
  道: "route",
  这: "ce",
  泼: "éclabousser",
  魔: "magie",
  般: "Normale",
  眼: "Œil",
  大: "grand",
  看: "regarder",
  不: "Non",
  见: "Voir",
  老: "vieux",
  孙: "Soleil",
  了: "C'est",
  笑: "rire",
  你: "toi",
  身: "corps",
  满: "Complet",
  四: "Quatre",
  尺: "règle",
  年: "Année",
  过: "Passer",
  三: "trois",
  旬: "dix jours",
  手: "main",
  内: "À l'intérieur",
  又: "encore",
  无: "aucun",
  兵: "Soldat",
  器: "Appareil",
  怎: "Comment",
  么: "Est-ce",
  胆: "Audacieux",
  猖: "sauvage",
  狂: "fou",
  要: "vouloir",
  寻: "À la recherche de",
  我: "je",
  甚: "très",
  上: "supérieur",
  下: "Vers le bas",
  悟: "Éclaircissement",
  空: "nul",
  骂: "gronder",
  原: "Original",
  来: "Viens",
  没: "sans",
  量: "quantité",
  小: "Petit",
  却: "mais",
  也: "aussi",
  难: "Catastrophe",
  两: "deux",
  只: "Seulement",
  勾: "crochet",
  着: "Mettre",
  天: "ciel",
  边: "côté",
  月: "lune",
  哩: "Li",
  怕: "Effrayé",
  吃: "manger",
  一: "un",
  拳: "poing",
  纵: "verticale",
  跳: "Saut",
  去: "aller",
  劈: "pirater",
  脸: "Affronter",
  就: "Immédiatement",
  打: "battre",
  那: "Que",
  伸: "extensible",
  架: "étagère",
  住: "en direct",
  矬: "nabot",
  矮: "court",
  高: "haut",
  长: "long",
  使: "faire",
  刀: "couteau",
  杀: "tuer",
  人: "personnes",
  待: "traiter",
  放: "mettre",
  与: "et",
  路: "route",
  说: "expliquer",
  得: "devoir",
  是: "Oui",
  好: "bien",
  汉: "Chinois",
  子: "fils",
  走: "Marcher",
  丢: "partir",
  开: "ouvrir",
  便: "Espoir",
  钻: "Diamant",
  进: "Entrer",
  相: "Mutuellement",
  撞: "Entrer en collision",
  迎: "accueillir",
  他: "il",
  个: "autonome",
  捶: "marteau",
  脚: "pied",
  踢: "Coup",
  冲: "se précipiter",
  短: "court",
  簇: "grappe",
  坚: "Fort",
  牢: "prison",
  被: "édredon",
  掏: "creuser",
  肋: "côte",
  裆: "entrejambe",
  几: "Plusieurs",
  筋: "Tendons",
  节: "Festival",
  把: "Paquet",
  重: "Lourd",
  闪: "éclair",
  拿: "prendre",
  起: "augmenter",
  板: "plaque",
  的: "de",
  钢: "acier",
  望: "voir",
  头: "tête",
  砍: "couper",
  急: "urgent",
  撤: "retirer",
  凶: "féroce",
  猛: "féroce",
  即: "Tout de suite",
  外: "dehors",
  法: "Loi",
  拔: "tirer",
  毫: "海海",
  毛: "cheveux",
  在: "exister",
  口: "bouche",
  中: "milieu",
  嚼: "mâcher",
  碎: "cassé",
  喷: "pulvérisation",
  叫: "Appel",
  声: "Voix",
  变: "Changement",
  做: "Faire",
  二: "deux",
  百: "Cent",
  周: "semaine",
  围: "Environnant",
  攒: "Sauvegarder",
  仙: "Fée",
  体: "corps",
  出: "dehors",
  神: "Dieu",
  化: "changement",
  方: "carré",
  知: "Savoir",
  自: "depuis",
  从: "depuis",
  之: "De",
  后: "dos",
  有: "avoir",
  八: "huit",
  万: "Dix mille",
  千: "mille",
  羽: "plume",
  根: "racine",
  能: "capable",
  应: "répondre",
  物: "Des choses",
  随: "Avec",
  心: "Cœur",
  些: "quelques",
  乖: "bien",
  会: "réunion",
  枪: "pistolet",
  伤: "blesser",
  前: "avant",
  踊: "saut",
  跃: "saut",
  绕: "Cercle",
  抱: "câlin",
  扯: "tirer",
  扳: "tirer",
  挦: "口",
  抠: "Instantané",
  睛: "œil",
  捻: "torsion",
  鼻: "nez",
  抬: "ascenseur",
  鼓: "tambour",
  弄: "ruelle",
  直: "droit",
  盘: "plaque",
  才: "talent",
  夺: "Prendre",
  分: "indiquer",
  照: "Selon",
  顶: "haut",
  门: "Porte",
  为: "pour",
  段: "partie",
  领: "collier",
  众: "Tous",
  洞: "Trou",
  将: "Volonté",
  妖: "Démon",
  精: "Raffiné",
  尽: "Tous",
  皆: "tous",
  剿: "Réprimer",
  灭: "Éteindre",
  抖: "secouer",
  收: "recevoir",
  者: "Ceux",
  水: "eau",
  帘: "rideau",
  擒: "capturer",
  汝: "Toi",
  等: "attendez",
  何: "quoi",
  到: "arriver",
  此: "ce",
  约: "à propos",
  五: "cinq",
  十: "dix",
  都: "Tous",
  含: "Inclure",
  泪: "larme",
  因: "parce que",
  修: "construire",
  争: "Combattre",
  吵: "Querelle",
  们: "Nous",
  摄: "Photo",
  家: "Maison",
  火: "feu",
  石: "pierre",
  盆: "pot",
  碗: "bol",
  厮: "Ami",
  既: "maintenant que",
  搬: "se déplacer",
  里: "à l'intérieur",
  脏: "sale",
  烧: "brûler",
  枯: "Flétrir",
  干: "Sec",
  归: "Rentrer chez eux",
  对: "droite",
  跟: "et",
  回: "Dos",
  时: "heure",
  听: "écouter",
  耳: "Oreille",
  风: "vent",
  虚: "Vide",
  飘: "flotter",
  于: "À",
  地: "atterrir",
  更: "Même",
  识: "connaissance",
  径: "chemin",
  今: "maintenant",
  乡: "Canton",
  术: "Technique",
  儿: "Fils",
  如: "comme",
  窍: "Conseils",
  通: "Passer",
  合: "combiner",
  休: "arrêt",
};

const tianwen_translation_map_en = {
  猴王喝道: "The Monkey King shouted",
  这泼魔这般眼大: "This demon is so big-eyed",
  看不见老孙: "Can't see the old grandson",
  魔王见了: "The devil saw it",
  笑道: "Smile",
  你身不满四尺: "You're less than four feet tall",
  年不过三旬: "Not thirty years old",
  手内又无兵器: "No weapons in hand",
  怎么大胆猖狂: "How to be bold and rampant",
  要寻我见甚么上下: "What do I want to see",
  悟空骂道: "Wukong scolded",
  你这泼魔: "You're a demon",
  原来没眼: "It turns out that there is no eyes",
  你量我小: "You measure me",
  要大却也不难: "It's not difficult to be big",
  你量我无兵器: "You measure me, I have no weapons",
  我两只手勾着天边月哩: "My hands are hooked to the moon in the sky",
  你不要怕: "Don't be afraid",
  只吃老孙一拳: "Take only Lao Sun's punch",
  纵一纵: "Vertical one vertical",
  跳上去: "Jump up",
  劈脸就打: "Just hit the face",
  那魔王伸手架住道: "The devil reached out to hold it",
  你这般矬矮: "You're so short",
  我这般高长: "I'm so tall",
  你要使拳: "You want to punch",
  我要使刀: "I want to use the knife",
  使刀就杀了你: "Kill you with a knife",
  也吃人笑: "Also, they are laughing",
  待我放下刀: "Wait for me to put down my knife",
  与你使路拳看: "Watch the road with you",
  悟空道: "Wukong Tao",
  说得是: "Just said",
  好汉子: "Good man",
  走来: "Come on",
  那魔王丢开架子便打: "The devil threw away the air and beat him",
  这悟空钻进去相撞相迎: "This Wukong crawled in and met him.",
  他两个拳捶脚踢: "He kicked two fists",
  一冲一撞: "One rush and one bump",
  原来长拳空大: "It turns out that Changquan is empty",
  短簇坚牢: "Short clusters firm",
  那魔王被悟空掏短肋: "The devil was cut short by Wukong",
  撞了裆: "Hit the crotch",
  几下筋节: "A few gluten joints",
  把他打重了: "He beat him hard",
  他闪过: "He flashed by",
  拿起那板大的钢刀: "Pick up the big steel knife",
  望悟空劈头就砍: "Wang Wukong cut off his head",
  悟空急撤身: "Wukong retreated quickly",
  他砍了一个空: "He cut a blank",
  悟空见他凶猛: "Wukong saw that he was fierce",
  即使身外身法: "Even outside the body",
  拔一把毫毛: "Pull out a handful of hairs",
  丢在口中嚼碎: "Throw it in your mouth and chew it",
  望空中喷去: "Look out of the air",
  叫一声: "Call",
  变: "Change",
  即变做三二百个小猴: "It turns into three or two hundred little monkeys",
  周围攒簇: "Clusters around",
  原来人得仙体: "It turns out that humans have immortal bodies",
  出神变化: "Abnormal change",
  无方不知: "No way to know",
  这猴王自从了道之后: "This Monkey King has since passed away",
  身上有八万四千毛羽: "Eighty-four thousand feathers on the body",
  根根能变: "Can change every root",
  应物随心: "Respond to things as you wish",
  那些小猴: "Those little monkeys",
  眼乖会跳: "Be good at eyes can jump",
  刀来砍不着: "The knife cannot cut",
  枪去不能伤: "You can't hurt if you go to a gun",
  你看他前踊后跃: "Look at him jumping forward and backward",
  钻上去: "Drill it up",
  把魔王围绕: "Keep the devil around",
  抱的抱: "Hug hug",
  扯的扯: "Twist",
  钻裆的钻裆: "Drilling crotch",
  扳脚的扳脚: "The foot of the foot",
  踢打挦毛: "Kick and beat hair",
  抠眼睛: "Picking eyes",
  捻鼻子: "Twist the nose",
  抬鼓弄: "Carry the drum",
  直打做一个攒盘: "Just fight to make a scramble",
  这悟空才去夺得他的刀来: "This Wukong just took his sword",
  分开小猴: "Separate the little monkey",
  照顶门一下: "Look at the top door",
  砍为两段: "Cut into two sections",
  领众杀进洞中: "Lead the crowd into the cave",
  将那大小妖精: "Put that big and small fairy",
  尽皆剿灭: "Suppress all",
  却把毫毛一抖: "But shook the hair",
  收上身来: "Put it in",
  又见那收不上身者: "I saw the person who couldn't take it anymore",
  却是那魔王在水帘洞中擒去的小猴:
    "But it was the little monkey captured by the devil in the water curtain cave",
  悟空道: "Wukong Tao",
  汝等何为到此: "What do you do here",
  约有三五十个: "There are about thirty or fifty",
  都含泪道: "All said with tears",
  我等因大王修仙去后: "After the king goes to cultivate immortality, I will go",
  这两年被他争吵: "He quarreled in the past two years",
  把我们都摄将来: "Take us all in the future",
  那不是我们洞中的家火: "That's not the fire in our cave",
  石盆: "Stone basin",
  石碗都被这厮拿来也: "This guy brought the stone bowls",
  悟空道: "Wukong Tao",
  既是我们的家火: "It's our home fire",
  你们都搬出外去: "You all moved out",
  随即洞里放起火来: "Then a fire broke out in the hole",
  把那水脏洞烧得枯干: "Burn the dirty hole of the water to dry",
  尽归了一体: "All return to one",
  对众道: "To all the ways",
  汝等跟我回去: "You go back with me",
  众猴道: "The monkeys",
  大王: "The King",
  我们来时: "When we come",
  只听得耳边风声: "Only hear the sound of wind in my ears",
  虚飘飘到于此地: "Xupiaopiao is here",
  更不识路径: "Not even aware of the path",
  今怎得回乡: "How to go back to your hometown now",
  悟空道: "Wukong Tao",
  这是他弄的个术法儿: "This is his trick",
  有何难也: "What's the difficulty",
  我如今一窍通: "I'm now aware of it",
  百窍通: "All the Essentials",
  我也会弄: "I'll do it too",
  你们都合了眼: "You all closed your eyes",
  休怕: "Don't be afraid",
};

const tianwen_translation_map_de = {
  猴王喝道: "Der Affenkönig rief",
  这泼魔这般眼大: "Dieser Dämon ist so große Augen",
  看不见老孙: "Ich kann den alten Enkel nicht sehen",
  魔王见了: "Der Teufel sah es",
  笑道: "Lächeln",
  你身不满四尺: "Du bist weniger als vier Fuß groß",
  年不过三旬: "Nicht dreißig Jahre alt",
  手内又无兵器: "Keine Waffen in der Hand",
  怎么大胆猖狂: "Wie man mutig und weit verbreitet ist",
  要寻我见甚么上下: "Was möchte ich sehen",
  悟空骂道: "Wukong schimpfte",
  你这泼魔: "Du bist ein Dämon",
  原来没眼: "Es stellt sich heraus, dass es keine Augen gibt",
  你量我小: "Du misst mich",
  要大却也不难: "Es ist nicht schwierig, groß zu sein",
  你量我无兵器: "Sie messen mich, ich habe keine Waffen",
  我两只手勾着天边月哩: "Meine Hände sind am Mond am Himmel begeistert",
  你不要怕: "Hab keine Angst",
  只吃老孙一拳: "Nehmen Sie nur Lao Suns Schlag",
  纵一纵: "Vertikal eine vertikale",
  跳上去: "Aufspringen",
  劈脸就打: "Schlagen Sie einfach das Gesicht",
  那魔王伸手架住道: "Der Teufel streckte die Hand aus, um es zu halten",
  你这般矬矮: "Du bist so kurz",
  我这般高长: "Ich bin so groß",
  你要使拳: "Du willst schlagen",
  我要使刀: "Ich möchte das Messer benutzen",
  使刀就杀了你: "Töte dich mit einem Messer",
  也吃人笑: "Außerdem lachen sie",
  待我放下刀: "Warten Sie, bis ich mein Messer niederlegt",
  与你使路拳看: "Beobachten Sie die Straße mit Ihnen",
  悟空道: "Wukong Tao",
  说得是: "Gerade gesagt",
  好汉子: "Guter Mann",
  走来: "Aufleuchten",
  那魔王丢开架子便打: "Der Teufel warf die Luft weg und schlug ihn",
  这悟空钻进去相撞相迎: "Dieser Wukong kroch hinein und traf ihn.",
  他两个拳捶脚踢: "Er trat zwei Fäuste",
  一冲一撞: "Ein Ansturm und eine Beule",
  原来长拳空大: "Es stellt sich heraus, dass Changquan leer ist",
  短簇坚牢: "Kurze Cluster fest",
  那魔王被悟空掏短肋: "Der Teufel wurde von Wukong abgebrochen",
  撞了裆: "Schlagen Sie den Schritt",
  几下筋节: "Ein paar Glutengelenke",
  把他打重了: "Er schlug ihn hart",
  他闪过: "Er blitzte vorbei",
  拿起那板大的钢刀: "Nehmen Sie das große Stahlmesser auf",
  望悟空劈头就砍: "Wang Wukong schnitt sich den Kopf ab",
  悟空急撤身: "Wukong zog sich schnell zurück",
  他砍了一个空: "Er schnitt einen leeren",
  悟空见他凶猛: "Wukong sah, dass er wild war",
  即使身外身法: "Auch außerhalb des Körpers",
  拔一把毫毛: "Ziehen Sie eine Handvoll Haare heraus",
  丢在口中嚼碎: "Wirf es in deinen Mund und kaue es",
  望空中喷去: "Schau aus der Luft",
  叫一声: "Anruf",
  变: "Ändern",
  即变做三二百个小猴:
    "Es verwandelt sich in drei oder zweihundert kleine Affen",
  周围攒簇: "Cluster herum",
  原来人得仙体:
    "Es stellt sich heraus, dass Menschen unsterbliche Körper haben",
  出神变化: "Abnormale Veränderung",
  无方不知: "Keine Möglichkeit zu wissen",
  这猴王自从了道之后: "Dieser Affenkönig ist seitdem verstorben",
  身上有八万四千毛羽: "80 tausend Federn am Körper",
  根根能变: "Kann jede Wurzel ändern",
  应物随心: "Antworten Sie auf Dinge, wie Sie möchten",
  那些小猴: "Diese kleinen Affen",
  眼乖会跳: "Sei gut in den Augen können springen",
  刀来砍不着: "Das Messer kann nicht schneiden",
  枪去不能伤: "Sie können nicht verletzen, wenn Sie in eine Waffe gehen",
  你看他前踊后跃: "Schau ihn an, als er vorwärts und rückwärts springt",
  钻上去: "Bohren Sie es auf",
  把魔王围绕: "Halten Sie den Teufel bei",
  抱的抱: "Umarmung",
  扯的扯: "Twist",
  钻裆的钻裆: "Bohrer",
  扳脚的扳脚: "Der Fuß des Fußes",
  踢打挦毛: "Haare treten und schlagen",
  抠眼睛: "Augen pflücken",
  捻鼻子: "Verdrehen Sie die Nase",
  抬鼓弄: "Tragen Sie die Trommel",
  直打做一个攒盘: "Kämpfe einfach darum, ein Scramble zu machen",
  这悟空才去夺得他的刀来: "Dieser Wukong hat gerade sein Schwert genommen",
  分开小猴: "Trennen Sie den kleinen Affen",
  照顶门一下: "Schau dir die obere Tür an",
  砍为两段: "In zwei Abschnitte geschnitten",
  领众杀进洞中: "Führe die Menge in die Höhle",
  将那大小妖精: "Setzen Sie diese große und kleine Fee ein",
  尽皆剿灭: "Alle unterdrücken",
  却把毫毛一抖: "Aber schüttelte die Haare",
  收上身来: "Setzen Sie es ein",
  又见那收不上身者: "Ich sah die Person, die es nicht mehr ertragen konnte",
  却是那魔王在水帘洞中擒去的小猴:
    "Aber es war der kleine Affe, der vom Teufel in der Wasservorhanghöhle gefangen genommen wurde",
  悟空道: "Wukong Tao",
  汝等何为到此: "Was machst du hier?",
  约有三五十个: "Es gibt ungefähr dreißig oder fünfzig",
  都含泪道: "Alles gesagt mit Tränen",
  我等因大王修仙去后:
    "Nachdem der König die Unsterblichkeit kultiviert hat, werde ich gehen",
  这两年被他争吵: "Er hat sich in den letzten zwei Jahren streiten",
  把我们都摄将来: "Nehmen Sie uns alle in der Zukunft",
  那不是我们洞中的家火: "Das ist nicht das Feuer in unserer Höhle",
  石盆: "Steinbecken",
  石碗都被这厮拿来也: "Dieser Typ brachte die Steinschalen mit",
  悟空道: "Wukong Tao",
  既是我们的家火: "Es ist unser Heimatfeuer",
  你们都搬出外去: "Sie alle sind ausgezogen",
  随即洞里放起火来: "Dann brach ein Feuer in das Loch aus",
  把那水脏洞烧得枯干: "Brennen Sie das schmutzige Wasserloch zum Trocknen",
  尽归了一体: "Alle kehren zu einem zurück",
  对众道: "Auf alle Wege",
  汝等跟我回去: "Du gehst mit mir zurück",
  众猴道: "Die Affen",
  大王: "Der König",
  我们来时: "Wenn wir kommen",
  只听得耳边风声: "Hören Sie nur den Wind von Wind in meinen Ohren",
  虚飘飘到于此地: "Xupiaopiao ist hier",
  更不识路径: "Nicht einmal den Weg bewusst",
  今怎得回乡: "Wie Sie jetzt in Ihre Heimatstadt zurückkehren",
  悟空道: "Wukong Tao",
  这是他弄的个术法儿: "Dies ist sein Trick",
  有何难也: "Was ist die Schwierigkeit?",
  我如今一窍通: "Ich bin mir jetzt bewusst",
  百窍通: "Alle Nötigsten",
  我也会弄: "Ich werde es auch tun",
  你们都合了眼: "Sie alle haben Ihre Augen geschlossen",
  休怕: "Hab keine Angst",
};

const tianwen_translation_map_fr = {
  猴王喝道: "Le roi de singe a crié",
  这泼魔这般眼大: "Ce démon est si grand",
  看不见老孙: "Je ne peux pas voir le vieux petit-fils",
  魔王见了: "Le diable l'a vu",
  笑道: "Sourire",
  你身不满四尺: "Tu es moins de quatre pieds de haut",
  年不过三旬: "Pas de trente ans",
  手内又无兵器: "Aucune arme à la main",
  怎么大胆猖狂: "Comment être audacieux et rampant",
  要寻我见甚么上下: "Qu'est-ce que je veux voir",
  悟空骂道: "Wukong a grondé",
  你这泼魔: "Tu es un démon",
  原来没眼: "Il s'avère qu'il n'y a pas d'yeux",
  你量我小: "Tu me mesure",
  要大却也不难: "Ce n'est pas difficile d'être grand",
  你量我无兵器: "Tu me mesures, je n'ai pas d'armes",
  我两只手勾着天边月哩: "Mes mains sont accrochées à la lune dans le ciel",
  你不要怕: "N'ayez pas peur",
  只吃老孙一拳: "Prenez seulement le punch de Lao Sun",
  纵一纵: "Vertical vertical",
  跳上去: "Sauter",
  劈脸就打: "Juste frapper le visage",
  那魔王伸手架住道: "Le diable a tendu la main pour le tenir",
  你这般矬矮: "Tu es si court",
  我这般高长: "Je suis si grand",
  你要使拳: "Tu veux frapper",
  我要使刀: "Je veux utiliser le couteau",
  使刀就杀了你: "Te tuer avec un couteau",
  也吃人笑: "De plus, ils rient",
  待我放下刀: "Attendez que je pose mon couteau",
  与你使路拳看: "Regardez la route avec vous",
  悟空道: "Wukong Tao",
  说得是: "Je viens de dire",
  好汉子: "Homme bien",
  走来: "Allez",
  那魔王丢开架子便打: "",
  这悟空钻进去相撞相迎: "Ce Wukong a rampé et l'a rencontré.",
  他两个拳捶脚踢: "Il a donné un coup de pied à deux poings",
  一冲一撞: "Une ruée et une bosse",
  原来长拳空大: "Il s'avère que Changquan est vide",
  短簇坚牢: "Short Clusters Firm",
  那魔王被悟空掏短肋: "Le diable a été interrompu par Wukong",
  撞了裆: "Frapper l'entrejambe",
  几下筋节: "Quelques articulations de gluten",
  把他打重了: "Il l'a battu fort",
  他闪过: "Il est passé par",
  拿起那板大的钢刀: "Ramasser le grand couteau en acier",
  望悟空劈头就砍: "Wang Wukong lui coupe la tête",
  悟空急撤身: "Wukong s'est retiré rapidement",
  他砍了一个空: "Il a coupé un blanc",
  悟空见他凶猛: "Wukong a vu qu'il était féroce",
  即使身外身法: "Même en dehors du corps",
  拔一把毫毛: "Tirez une poignée de poils",
  丢在口中嚼碎: "Jetez-le dans votre bouche et mâchez-le",
  望空中喷去: "Regardez à l'extérieur de l'air",
  叫一声: "Appel",
  变: "Changement",
  即变做三二百个小猴: "Il se transforme en trois ou deux cents petits singes",
  周围攒簇: "Grappes autour",
  原来人得仙体: "Il s'avère que les humains ont des corps immortels",
  出神变化: "Changement anormal",
  无方不知: "Aucun moyen de savoir",
  这猴王自从了道之后: "Ce roi de singe est décédé depuis",
  身上有八万四千毛羽: "Quatre-vingt-quatre mille plumes sur le corps",
  根根能变: "Peut changer chaque racine",
  应物随心: "Répondre aux choses comme vous le souhaitez",
  那些小猴: "Ces petits singes",
  眼乖会跳: "Être bon aux yeux peut sauter",
  刀来砍不着: "Le couteau ne peut pas couper",
  枪去不能伤: "Tu ne peux pas faire de mal si tu vas dans une arme",
  你看他前踊后跃: "Regarde-le sauter en avant et en arrière",
  钻上去: "Percez",
  把魔王围绕: "Gardez le diable",
  抱的抱: "Étreinte",
  扯的扯: "Torsion",
  钻裆的钻裆: "Forage entrejambe",
  扳脚的扳脚: "Le pied du pied",
  踢打挦毛: "Coups de pied et battement",
  抠眼睛: "Prendre les yeux",
  捻鼻子: "Tordre le nez",
  抬鼓弄: "Porter le tambour",
  直打做一个攒盘: "Se battre pour faire une course",
  这悟空才去夺得他的刀来: "Ce wukong vient de prendre son épée",
  分开小猴: "Séparez le petit singe",
  照顶门一下: "Regardez la porte supérieure",
  砍为两段: "Coupe en deux sections",
  领众杀进洞中: "Conduire la foule dans la grotte",
  将那大小妖精: "Mettez cette grande et petite fée",
  尽皆剿灭: "Supprimer tout",
  却把毫毛一抖: "Mais a secoué les cheveux",
  收上身来: "Mettre en place",
  又见那收不上身者: "J'ai vu la personne qui ne pouvait plus le prendre",
  却是那魔王在水帘洞中擒去的小猴:
    "Mais c'était le petit singe capturé par le diable dans la grotte du rideau d'eau",
  悟空道: "Wukong Tao",
  汝等何为到此: "Que faites-vous ici",
  约有三五十个: "Il y en a environ trente ou cinquante",
  都含泪道: "Tout dit avec des larmes",
  我等因大王修仙去后: "Une fois que le roi va cultiver l'immortalité, j'irai",
  这两年被他争吵: "Il s'est disputé au cours des deux dernières années",
  把我们都摄将来: "Nous prendre tous dans le futur",
  那不是我们洞中的家火: "Ce n'est pas le feu de notre grotte",
  石盆: "Bassin de pierre",
  石碗都被这厮拿来也: "Ce gars a apporté les bols en pierre",
  悟空道: "Wukong Tao",
  既是我们的家火: "C'est notre incendie de maison",
  你们都搬出外去: "Vous avez tous déménagé",
  随即洞里放起火来: "Puis un feu a éclaté dans le trou",
  把那水脏洞烧得枯干: "Brûler le trou sale de l'eau pour sécher",
  尽归了一体: "Tous retournent à un",
  对众道: "À toutes les manières",
  汝等跟我回去: "Tu reviens avec moi",
  众猴道: "Les singes",
  大王: "Le roi",
  我们来时: "Quand nous venons",
  只听得耳边风声: "N'entends que le bruit du vent dans mes oreilles",
  虚飘飘到于此地: "Xupiaopiao est là",
  更不识路径: "Pas même conscient du chemin",
  今怎得回乡: "Comment retourner dans votre ville natale maintenant",
  悟空道: "Wukong Tao",
  这是他弄的个术法儿: "C'est son truc",
  有何难也: "Quelle est la difficulté",
  我如今一窍通: "J'en suis maintenant conscient",
  百窍通: "Tous les éléments essentiels",
  我也会弄: "Je vais le faire aussi",
  你们都合了眼: "Vous avez tous fermé les yeux",
  休怕: "N'ayez pas peur",
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
