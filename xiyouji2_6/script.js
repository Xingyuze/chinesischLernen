const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `悟空闻说  
毛骨悚然  
叩头礼拜道  
万望老爷垂悯  
传与躲避三灾之法  
到底不敢忘恩  

祖师道  
此亦无难  
只是你比他人不同  
故传不得  

悟空道  
我也头圆顶天  
足方履地  
一般有九窍四肢  
五脏六腑  
何以比人不同  

祖师道  
你虽然像人  
却比人少腮  
原来那猴子孤拐面  
凹脸尖嘴  

悟空伸手一摸  
笑道  
师父没成算  
我虽少腮  
却比人多这个嗉袋  
亦可准折过也  

祖师说  
也罢  
你要学那一般  
有一般天罡数  
该三十六般变化  
有一般地煞数  
该七十二般变化  

悟空道  
弟子愿多里捞摸  
学一个地煞变化罢  

祖师道  
既如此  
上前来  
传与你口诀  
遂附耳低言  
不知说了些什么妙法  

这猴王也是他一窍通时百窍通  
当时习了口诀  
自修自炼  
将七十二般变化  
都学成了  

忽一日  
祖师与众门人在三星洞前戏玩晚景  
祖师道  
悟空  
事成了未曾  

悟空道  
多蒙师父海恩  
弟子功果完备  
已能霞举飞升也  

祖师道  
你试飞举我看  

悟空弄本事  
将身一耸  
打了个连扯跟头  
跳离地有五六丈  
踏云霞去勾有顿饭功夫  
返复不上三里远近  
落在面前  
叉手道  
师父  
这就是飞举腾云了  

祖师笑道  
这个算不得腾云  
只算得爬云而已  
自古道  
神仙朝游北海暮苍梧  
似你这半日  
去不上三里  
即爬云也还算不得哩  

悟空道  
怎么为  
朝游北海暮苍梧  

祖师道  
凡腾云之辈  
早辰起自北海  
游过东海  
西海  
南海  
复转苍梧  
苍梧者却是北海零陵之语话也  
将四海之外  
一日都游遍  
方算得腾云  

悟空道  
这个却难  
却难  

祖师道  
世上无难事  
只怕有心人  

悟空闻得此言  
叩头礼拜  
启道  
师父  
为人须为彻  
索性舍个大慈悲  
将此腾云之法  
一发传与我罢  
决不敢忘恩  

祖师道  
凡诸仙腾云  
皆跌足而起  
你却不是这般  
我才见你去  
连扯方才跳上  
我今只就你这个势  
传你个  
筋斗云  
罢  

悟空又礼拜恳求  
祖师却又传个口诀道  
这朵云  
捻着诀  
念动真言  
攒紧了拳  
对身一抖  
跳将起来  
一筋斗就有十万八千里路哩  

大众听说  
一个个嘻嘻笑道  
悟空造化  
若会这个法儿  
与人家当铺兵  
送文书  
递报单  
不管那里都寻了饭吃  

师徒们天昏各归洞府  
这一夜  
悟空即运神炼法  
会了筋斗云  
逐日家无拘无束  
自在逍遥此一长生之美`;

const pinyinMap = {
  悟: "wù",
  空: "kōng",
  闻: "wén",
  说: "shuō",
  毛: "máo",
  骨: "gǔ",
  悚: "sǒng",
  然: "rán",
  叩: "kòu",
  头: "tóu",
  礼: "lǐ",
  拜: "bài",
  道: "dào",
  万: "wàn",
  望: "wàng",
  老: "lǎo",
  爷: "yé",
  垂: "chuí",
  悯: "mǐn",
  传: "chuán",
  与: "yǔ",
  躲: "duǒ",
  避: "bì",
  三: "sān",
  灾: "zāi",
  之: "zhī",
  法: "fǎ",
  到: "dào",
  底: "dǐ",
  不: "bù",
  敢: "gǎn",
  忘: "wàng",
  恩: "ēn",
  祖: "zǔ",
  师: "shī",
  此: "cǐ",
  亦: "yì",
  无: "wú",
  难: "nán",
  只: "zhǐ",
  是: "shì",
  你: "nǐ",
  比: "bǐ",
  他: "tā",
  人: "rén",
  同: "tóng",
  故: "gù",
  得: "dé",
  我: "wǒ",
  也: "yě",
  圆: "yuán",
  顶: "dǐng",
  天: "tiān",
  足: "zú",
  方: "fāng",
  履: "lǚ",
  地: "dì",
  一: "yì",
  般: "bān",
  有: "yǒu",
  九: "jiǔ",
  窍: "qiào",
  四: "sì",
  肢: "zhī",
  五: "wǔ",
  脏: "zàng",
  六: "liù",
  腑: "fǔ",
  何: "hé",
  以: "yǐ",
  虽: "suī",
  像: "xiàng",
  却: "què",
  少: "shǎo",
  腮: "sāi",
  原: "yuán",
  来: "lái",
  那: "nà",
  猴: "hóu",
  子: "zi",
  孤: "gū",
  拐: "guǎi",
  面: "miàn",
  凹: "āo",
  脸: "liǎn",
  尖: "jiān",
  嘴: "zuǐ",
  伸: "shēn",
  手: "shǒu",
  摸: "mō",
  笑: "xiào",
  父: "fù",
  没: "méi",
  成: "chéng",
  算: "suàn",
  多: "duō",
  这: "zhè",
  个: "gè",
  嗉: "sù",
  袋: "dài",
  可: "kě",
  准: "zhǔn",
  折: "zhé",
  过: "guò",
  罢: "bà",
  要: "yào",
  学: "xué",
  罡: "gāng",
  数: "shù",
  该: "gāi",
  十: "shí",
  变: "biàn",
  化: "huà",
  煞: "shā",
  七: "qī",
  二: "èr",
  弟: "dì",
  愿: "yuàn",
  里: "lǐ",
  捞: "lāo",
  既: "jì",
  如: "rú",
  上: "shàng",
  前: "qián",
  口: "kǒu",
  诀: "jué",
  遂: "suì",
  附: "fù",
  耳: "ěr",
  低: "dī",
  言: "yán",
  知: "zhī",
  了: "liǎo",
  些: "xiē",
  什: "shén",
  么: "me",
  妙: "miào",
  王: "wáng",
  通: "tōng",
  时: "shí",
  百: "bǎi",
  当: "dāng",
  习: "xí",
  自: "zì",
  修: "xiū",
  炼: "liàn",
  将: "jiāng",
  都: "dōu",
  忽: "hū",
  日: "rì",
  众: "zhòng",
  门: "mén",
  在: "zài",
  星: "xīng",
  洞: "dòng",
  戏: "xì",
  玩: "wán",
  晚: "wǎn",
  景: "jǐng",
  事: "shì",
  未: "wèi",
  曾: "céng",
  蒙: "méng",
  海: "hǎi",
  功: "gōng",
  果: "guǒ",
  完: "wán",
  备: "bèi",
  已: "yǐ",
  能: "néng",
  霞: "xiá",
  举: "jǔ",
  飞: "fēi",
  升: "shēng",
  试: "shì",
  看: "kàn",
  弄: "nòng",
  本: "běn",
  身: "shēn",
  耸: "sǒng",
  打: "dǎ",
  连: "lián",
  扯: "chě",
  跟: "gēn",
  跳: "tiào",
  离: "lí",
  丈: "zhàng",
  踏: "tà",
  云: "yún",
  去: "qù",
  勾: "gōu",
  顿: "dùn",
  饭: "fàn",
  夫: "fū",
  返: "fǎn",
  复: "fù",
  远: "yuǎn",
  近: "jìn",
  落: "luò",
  叉: "chā",
  就: "jiù",
  腾: "téng",
  爬: "pá",
  而: "ér",
  古: "gǔ",
  神: "shén",
  仙: "xiān",
  朝: "cháo",
  游: "yóu",
  北: "běi",
  暮: "mù",
  苍: "cāng",
  梧: "wú",
  似: "shì",
  半: "bàn",
  即: "jí",
  还: "hái",
  哩: "lī",
  怎: "zěn",
  为: "wèi",
  凡: "fán",
  辈: "bèi",
  早: "zǎo",
  辰: "chén",
  起: "qǐ",
  东: "dōng",
  西: "xī",
  南: "nán",
  转: "zhuǎn",
  者: "zhě",
  零: "líng",
  陵: "líng",
  语: "yǔ",
  话: "huà",
  外: "wài",
  遍: "biàn",
  世: "shì",
  怕: "pà",
  心: "xīn",
  启: "qǐ",
  须: "xū",
  彻: "chè",
  索: "suǒ",
  性: "xìng",
  舍: "shě",
  大: "dà",
  慈: "cí",
  悲: "bēi",
  发: "fā",
  决: "jué",
  诸: "zhū",
  皆: "jiē",
  跌: "diē",
  才: "cái",
  见: "jiàn",
  今: "jīn",
  势: "shì",
  筋: "jīn",
  斗: "dǒu",
  又: "yòu",
  恳: "kěn",
  求: "qiú",
  朵: "duǒ",
  捻: "niǎn",
  着: "zhe",
  念: "niàn",
  动: "dòng",
  真: "zhēn",
  攒: "zǎn",
  紧: "jǐn",
  拳: "quán",
  对: "duì",
  抖: "dǒu",
  八: "bā",
  千: "qiān",
  路: "lù",
  听: "tīng",
  嘻: "xī",
  造: "zào",
  若: "ruò",
  会: "huì",
  儿: "er",
  家: "jiā",
  铺: "pù",
  兵: "bīng",
  送: "sòng",
  文: "wén",
  书: "shū",
  递: "dì",
  报: "bào",
  单: "dān",
  管: "guǎn",
  寻: "xún",
  吃: "chī",
  徒: "tú",
  们: "men",
  昏: "hūn",
  各: "gè",
  归: "guī",
  府: "fǔ",
  夜: "yè",
  运: "yùn",
  逐: "zhú",
  拘: "jū",
  束: "shù",
  逍: "xiāo",
  遥: "yáo",
  长: "cháng",
  生: "shēng",
  美: "měi",
};

const translations_en = {
  悟: "Enlightenment",
  空: "null",
  闻: "smell",
  说: "explain",
  毛: "hair",
  骨: "bone",
  悚: "frightened",
  然: "Of course",
  叩: "knock",
  头: "head",
  礼: "present",
  拜: "bye",
  道: "road",
  万: "Ten thousand",
  望: "see",
  老: "old",
  爷: "Grandpa",
  垂: "Droop",
  悯: "Pity",
  传: "pass",
  与: "and",
  躲: "hide",
  避: "avoid",
  三: "three",
  灾: "disaster",
  之: "Of",
  法: "Law",
  到: "arrive",
  底: "end",
  不: "No",
  敢: "dare",
  忘: "forget",
  恩: "kindness",
  祖: "Ancestor",
  师: "division",
  此: "this",
  亦: "as well as",
  无: "none",
  难: "Disaster",
  只: "Only",
  是: "yes",
  你: "you",
  比: "Compare",
  他: "he",
  人: "people",
  同: "same",
  故: "Therefore",
  得: "have to",
  我: "I",
  也: "also",
  圆: "round",
  顶: "top",
  天: "sky",
  足: "foot",
  方: "square",
  履: "shoe",
  地: "land",
  一: "one",
  般: "Normal",
  有: "have",
  九: "Nine",
  窍: "Tips",
  四: "Four",
  肢: "limb",
  五: "five",
  脏: "dirty",
  六: "six",
  腑: "internal organs",
  何: "what",
  以: "by",
  虽: "although",
  像: "picture",
  却: "but",
  少: "few",
  腮: "cheek",
  原: "Original",
  来: "Come",
  那: "That",
  猴: "monkey",
  子: "son",
  孤: "solitary",
  拐: "Snee",
  面: "noodle",
  凹: "concave",
  脸: "Face",
  尖: "tip",
  嘴: "Mouth",
  伸: "stretch",
  手: "hand",
  摸: "touch",
  笑: "laugh",
  父: "father",
  没: "without",
  成: "become",
  算: "Calculate",
  多: "many",
  这: "this",
  个: "indivual",
  嗉: "crop",
  袋: "bag",
  可: "Can",
  准: "allow",
  折: "fold",
  过: "Pass",
  罢: "stop",
  要: "want",
  学: "study",
  罡: "Gang",
  数: "number",
  该: "Should",
  十: "ten",
  变: "Change",
  化: "change",
  煞: "Evil",
  七: "seven",
  二: "two",
  弟: "younger brother",
  愿: "willing",
  里: "inside",
  捞: "Fish",
  既: "now that",
  如: "like",
  上: "superior",
  前: "forward",
  口: "mouth",
  诀: "Tips",
  遂: "So",
  附: "Attached",
  耳: "Ear",
  低: "Low",
  言: "Word",
  知: "Know",
  了: "It's",
  些: "some",
  什: "Varied",
  么: "Is it",
  妙: "wonderful",
  王: "king",
  通: "Pass",
  时: "hour",
  百: "Hundred",
  当: "when",
  习: "habit",
  自: "since",
  修: "build",
  炼: "Refining",
  将: "Will",
  都: "All",
  忽: "suddenly",
  日: "day",
  众: "All",
  门: "Door",
  在: "exist",
  星: "star",
  洞: "Hole",
  戏: "play",
  玩: "Play",
  晚: "Night",
  景: "scene",
  事: "thing",
  未: "not yet",
  曾: "ever",
  蒙: "Mongolian",
  海: "ocean",
  功: "achievement",
  果: "fruit",
  完: "over",
  备: "Prepare",
  已: "already",
  能: "able",
  霞: "Xia",
  举: "Lift",
  飞: "fly",
  升: "Lift",
  试: "try",
  看: "look",
  弄: "alley",
  本: "Book",
  身: "body",
  耸: "towering",
  打: "beat",
  连: "even",
  扯: "pull",
  跟: "and",
  跳: "Jump",
  离: "Leave",
  丈: "ten feet",
  踏: "tread",
  云: "cloud",
  去: "go",
  勾: "hook",
  顿: "Dun",
  饭: "meal",
  夫: "husband",
  返: "return",
  复: "complex",
  远: "Far",
  近: "close",
  落: "fall",
  叉: "fork",
  就: "At once",
  腾: "Teng",
  爬: "climb",
  而: "and",
  古: "antiquity",
  神: "god",
  仙: "Fairy",
  朝: "towards",
  游: "tour",
  北: "north",
  暮: "twilight",
  苍: "Cang",
  梧: "虚",
  似: "like",
  半: "Half",
  即: "Right now",
  还: "return",
  哩: "Li",
  怎: "How",
  为: "for",
  凡: "Any",
  辈: "generation",
  早: "morning",
  辰: "Chen",
  起: "rise",
  东: "East",
  西: "West",
  南: "South",
  转: "change",
  者: "Those",
  零: "zero",
  陵: "Tomb",
  语: "language",
  话: "talk",
  外: "outside",
  遍: "all over",
  世: "World",
  怕: "Afraid",
  心: "Heart",
  启: "start",
  须: "Must",
  彻: "thorough",
  索: "Search",
  性: "sex",
  舍: "Abandon",
  大: "big",
  慈: "Ci",
  悲: "sad",
  发: "hair",
  决: "Decision",
  诸: "various",
  皆: "all",
  跌: "fall",
  才: "talent",
  见: "See",
  今: "now",
  势: "Stability",
  筋: "Tendons",
  斗: "fight",
  又: "again",
  恳: "Hope",
  求: "beg",
  朵: "Duo",
  捻: "twist",
  着: "Put",
  念: "read",
  动: "move",
  真: "real",
  攒: "Save",
  紧: "tight",
  拳: "fist",
  对: "right",
  抖: "shake",
  八: "eight",
  千: "thousand",
  路: "road",
  听: "listen",
  嘻: "laugh",
  造: "make",
  若: "like",
  会: "meeting",
  儿: "Son",
  家: "Home",
  铺: "shop",
  兵: "Soldier",
  送: "deliver",
  文: "arts",
  书: "Book",
  递: "Delivery",
  报: "Report",
  单: "one",
  管: "Tube",
  寻: "Looking for",
  吃: "eat",
  徒: "only",
  们: "We",
  昏: "faint",
  各: "each",
  归: "Go home",
  府: "House",
  夜: "night",
  运: "transport",
  逐: "By",
  拘: "arrest",
  束: "bundle",
  逍: "Happy",
  遥: "remote",
  长: "long",
  生: "born",
  美: "beautiful",
};

const translations_de = {
  悟: "Aufklärung",
  空: "NULL",
  闻: "Geruch",
  说: "erklären",
  毛: "Haar",
  骨: "Knochen",
  悚: "erschrocken",
  然: "Natürlich",
  叩: "klopfen",
  头: "Kopf",
  礼: "gegenwärtig",
  拜: "Tschüss",
  道: "Straße",
  万: "Zehntausend",
  望: "sehen",
  老: "alt",
  爷: "Opa",
  垂: "Sinken",
  悯: "Mitleid",
  传: "passieren",
  与: "Und",
  躲: "verstecken",
  避: "vermeiden",
  三: "drei",
  灾: "Katastrophe",
  之: "Von",
  法: "Gesetz",
  到: "ankommen",
  底: "Ende",
  不: "NEIN",
  敢: "wagen",
  忘: "vergessen",
  恩: "Freundlichkeit",
  祖: "Vorfahr",
  师: "Division",
  此: "Das",
  亦: "sowie",
  无: "keiner",
  难: "Katastrophe",
  只: "Nur",
  是: "Ja",
  你: "Du",
  比: "Vergleichen",
  他: "Er",
  人: "Menschen",
  同: "Dasselbe",
  故: "daher",
  得: "müssen",
  我: "ICH",
  也: "Auch",
  圆: "runden",
  顶: "Spitze",
  天: "Himmel",
  足: "Fuß",
  方: "Quadrat",
  履: "Schuh",
  地: "Land",
  一: "eins",
  般: "Normal",
  有: "haben",
  九: "Neun",
  窍: "Tipps",
  四: "Vier",
  肢: "Glied",
  五: "fünf",
  脏: "schmutzig",
  六: "sechs",
  腑: "interne Organe",
  何: "Was",
  以: "von",
  虽: "Obwohl",
  像: "Bild",
  却: "Aber",
  少: "wenige",
  腮: "Wange",
  原: "Original",
  来: "Kommen",
  那: "Das",
  猴: "Affe",
  子: "Sohn",
  孤: "einsam",
  拐: "Snee",
  面: "Nudel",
  凹: "konkav",
  脸: "Gesicht",
  尖: "Tipp",
  嘴: "Mund",
  伸: "strecken",
  手: "Hand",
  摸: "berühren",
  笑: "lachen",
  父: "Vater",
  没: "ohne",
  成: "werden",
  算: "Berechnen",
  多: "viele",
  这: "Das",
  个: "indival",
  嗉: "Ernte",
  袋: "Tasche",
  可: "Kann",
  准: "erlauben",
  折: "falten",
  过: "Passieren",
  罢: "stoppen",
  要: "wollen",
  学: "Studie",
  罡: "Gang",
  数: "Nummer",
  该: "Sollen",
  十: "zehn",
  变: "Ändern",
  化: "ändern",
  煞: "Teuflisch",
  七: "Sieben",
  二: "zwei",
  弟: "jüngerer Bruder",
  愿: "bereit",
  里: "innen",
  捞: "Fisch",
  既: "Nun das",
  如: "wie",
  上: "Vorgesetzter",
  前: "nach vorne",
  口: "Mund",
  诀: "Tipps",
  遂: "Also",
  附: "Beigefügt",
  耳: "Ohr",
  低: "Niedrig",
  言: "Wort",
  知: "Wissen",
  了: "Es ist",
  些: "manche",
  什: "Unterschiedlich",
  么: "Ist es",
  妙: "wunderbar",
  王: "König",
  通: "Passieren",
  时: "Stunde",
  百: "Hundert",
  当: "Wann",
  习: "Gewohnheit",
  自: "seit",
  修: "bauen",
  炼: "Verfeinerung",
  将: "Wille",
  都: "Alle",
  忽: "plötzlich",
  日: "Tag",
  众: "Alle",
  门: "Tür",
  在: "existieren",
  星: "Stern",
  洞: "Loch",
  戏: "spielen",
  玩: "Spielen",
  晚: "Nacht",
  景: "Szene",
  事: "Ding",
  未: "Noch nicht",
  曾: "immer",
  蒙: "mongolisch",
  海: "Ozean",
  功: "Leistung",
  果: "Obst",
  完: "über",
  备: "Vorbereiten",
  已: "bereits",
  能: "fähig",
  霞: "Xia",
  举: "Aufzug",
  飞: "fliegen",
  升: "Aufzug",
  试: "versuchen",
  看: "sehen",
  弄: "Gasse",
  本: "Buch",
  身: "Körper",
  耸: "hoch aufragend",
  打: "schlagen",
  连: "sogar",
  扯: "ziehen",
  跟: "Und",
  跳: "Springen",
  离: "Verlassen",
  丈: "zehn Fuß",
  踏: "treten",
  云: "Wolke",
  去: "gehen",
  勾: "Haken",
  顿: "Dun",
  饭: "Mahlzeit",
  夫: "Ehemann",
  返: "zurückkehren",
  复: "Komplex",
  远: "Weit",
  近: "schließen",
  落: "fallen",
  叉: "Gabel",
  就: "Auf einmal",
  腾: "Teng",
  爬: "Aufstieg",
  而: "Und",
  古: "Antike",
  神: "Gott",
  仙: "Fee",
  朝: "in Richtung",
  游: "Tour",
  北: "Norden",
  暮: "Dämmerung",
  苍: "CANG",
  梧: "虚",
  似: "wie",
  半: "Hälfte",
  即: "Im Augenblick",
  还: "zurückkehren",
  哩: "Li",
  怎: "Wie",
  为: "für",
  凡: "Beliebig",
  辈: "Generation",
  早: "Morgen",
  辰: "Chen",
  起: "erheben",
  东: "Ost",
  西: "West",
  南: "Süden",
  转: "ändern",
  者: "Diese",
  零: "null",
  陵: "Grab",
  语: "Sprache",
  话: "sprechen",
  外: "draußen",
  遍: "Überall",
  世: "Welt",
  怕: "Besorgt",
  心: "Herz",
  启: "Start",
  须: "Muss",
  彻: "gründlich",
  索: "Suchen",
  性: "Sex",
  舍: "Aufgeben",
  大: "groß",
  慈: "CI",
  悲: "traurig",
  发: "Haar",
  决: "Entscheidung",
  诸: "verschieden",
  皆: "alle",
  跌: "fallen",
  才: "Talent",
  见: "Sehen",
  今: "Jetzt",
  势: "Stabilität",
  筋: "Sehnen",
  斗: "kämpfen",
  又: "wieder",
  恳: "Hoffnung",
  求: "bitten",
  朵: "Duo",
  捻: "Twist",
  着: "Setzen",
  念: "lesen",
  动: "bewegen",
  真: "real",
  攒: "Speichern",
  紧: "eng",
  拳: "Faust",
  对: "Rechts",
  抖: "Shake",
  八: "acht",
  千: "tausend",
  路: "Straße",
  听: "Hören",
  嘻: "lachen",
  造: "machen",
  若: "wie",
  会: "treffen",
  儿: "Sohn",
  家: "Heim",
  铺: "Geschäft",
  兵: "Soldat",
  送: "liefern",
  文: "Künste",
  书: "Buch",
  递: "Lieferung",
  报: "Bericht",
  单: "eins",
  管: "Rohr",
  寻: "Auf der Suche nach",
  吃: "essen",
  徒: "nur",
  们: "Wir",
  昏: "schwach",
  各: "jede",
  归: "Nach Hause gehen",
  府: "Haus",
  夜: "Nacht",
  运: "Transport",
  逐: "Von",
  拘: "verhaften",
  束: "bündeln",
  逍: "Glücklich",
  遥: "Fernbedienung",
  长: "lang",
  生: "geboren",
  美: "Schön",
};

const translations_fr = {
  悟: "Éclaircissement",
  空: "nul",
  闻: "odeur",
  说: "expliquer",
  毛: "cheveux",
  骨: "os",
  悚: "effrayé",
  然: "Bien sûr",
  叩: "frappe",
  头: "tête",
  礼: "présent",
  拜: "au revoir",
  道: "route",
  万: "Dix mille",
  望: "voir",
  老: "vieux",
  爷: "Grand-père",
  垂: "Affaissement",
  悯: "Pitié",
  传: "passer",
  与: "et",
  躲: "cacher",
  避: "éviter",
  三: "trois",
  灾: "catastrophe",
  之: "De",
  法: "Loi",
  到: "arriver",
  底: "fin",
  不: "Non",
  敢: "oser",
  忘: "oublier",
  恩: "gentillesse",
  祖: "Ancêtre",
  师: "division",
  此: "ce",
  亦: "ainsi que",
  无: "aucun",
  难: "Catastrophe",
  只: "Seulement",
  是: "Oui",
  你: "toi",
  比: "Comparer",
  他: "il",
  人: "personnes",
  同: "même",
  故: "Donc",
  得: "devoir",
  我: "je",
  也: "aussi",
  圆: "rond",
  顶: "haut",
  天: "ciel",
  足: "pied",
  方: "carré",
  履: "chaussure",
  地: "atterrir",
  一: "un",
  般: "Normale",
  有: "avoir",
  九: "Neuf",
  窍: "Conseils",
  四: "Quatre",
  肢: "membre",
  五: "cinq",
  脏: "sale",
  六: "six",
  腑: "organes internes",
  何: "quoi",
  以: "par",
  虽: "bien que",
  像: "image",
  却: "mais",
  少: "peu",
  腮: "joue",
  原: "Original",
  来: "Viens",
  那: "Que",
  猴: "singe",
  子: "fils",
  孤: "solitaire",
  拐: "Énigter",
  面: "nouille",
  凹: "concave",
  脸: "Affronter",
  尖: "conseil",
  嘴: "Bouche",
  伸: "extensible",
  手: "main",
  摸: "touche",
  笑: "rire",
  父: "père",
  没: "sans",
  成: "devenir",
  算: "Calculer",
  多: "beaucoup",
  这: "ce",
  个: "autonome",
  嗉: "recadrer",
  袋: "sac",
  可: "Peut",
  准: "permettre",
  折: "pli",
  过: "Passer",
  罢: "arrêt",
  要: "vouloir",
  学: "étude",
  罡: "Gang",
  数: "nombre",
  该: "Devrait",
  十: "dix",
  变: "Changement",
  化: "changement",
  煞: "Mal",
  七: "Sept",
  二: "deux",
  弟: "jeune frère",
  愿: "disposé",
  里: "à l'intérieur",
  捞: "Poisson",
  既: "maintenant que",
  如: "comme",
  上: "supérieur",
  前: "avant",
  口: "bouche",
  诀: "Conseils",
  遂: "Donc",
  附: "Ci-joint",
  耳: "Oreille",
  低: "Faible",
  言: "Mot",
  知: "Savoir",
  了: "C'est",
  些: "quelques",
  什: "Varié",
  么: "Est-ce",
  妙: "merveilleux",
  王: "roi",
  通: "Passer",
  时: "heure",
  百: "Cent",
  当: "quand",
  习: "habitude",
  自: "depuis",
  修: "construire",
  炼: "Raffinage",
  将: "Volonté",
  都: "Tous",
  忽: "soudainement",
  日: "jour",
  众: "Tous",
  门: "Porte",
  在: "exister",
  星: "étoile",
  洞: "Trou",
  戏: "jouer",
  玩: "Jouer",
  晚: "Nuit",
  景: "scène",
  事: "chose",
  未: "pas encore",
  曾: "jamais",
  蒙: "mongol",
  海: "océan",
  功: "réalisation",
  果: "fruit",
  完: "sur",
  备: "Préparer",
  已: "déjà",
  能: "capable",
  霞: "Xia",
  举: "Ascenseur",
  飞: "voler",
  升: "Ascenseur",
  试: "essayer",
  看: "regarder",
  弄: "ruelle",
  本: "Livre",
  身: "corps",
  耸: "imposant",
  打: "battre",
  连: "même",
  扯: "tirer",
  跟: "et",
  跳: "Saut",
  离: "Partir",
  丈: "dix pieds",
  踏: "bande de roulement",
  云: "nuage",
  去: "aller",
  勾: "crochet",
  顿: "Dun",
  饭: "repas",
  夫: "mari",
  返: "retour",
  复: "complexe",
  远: "Loin",
  近: "fermer",
  落: "automne",
  叉: "fourchette",
  就: "Immédiatement",
  腾: "Tendre",
  爬: "grimper",
  而: "et",
  古: "antiquité",
  神: "Dieu",
  仙: "Fée",
  朝: "vers",
  游: "tournée",
  北: "nord",
  暮: "crépuscule",
  苍: "Châssis",
  梧: "虚",
  似: "comme",
  半: "Moitié",
  即: "Tout de suite",
  还: "retour",
  哩: "Li",
  怎: "Comment",
  为: "pour",
  凡: "N'importe lequel",
  辈: "génération",
  早: "matin",
  辰: "Chen",
  起: "augmenter",
  东: "Est",
  西: "Ouest",
  南: "Sud",
  转: "changement",
  者: "Ceux",
  零: "zéro",
  陵: "Tombeau",
  语: "langue",
  话: "parler",
  外: "dehors",
  遍: "partout",
  世: "Monde",
  怕: "Effrayé",
  心: "Cœur",
  启: "commencer",
  须: "Doit",
  彻: "complet",
  索: "Recherche",
  性: "sexe",
  舍: "Abandonner",
  大: "grand",
  慈: "CI",
  悲: "triste",
  发: "cheveux",
  决: "Décision",
  诸: "divers",
  皆: "tous",
  跌: "automne",
  才: "talent",
  见: "Voir",
  今: "maintenant",
  势: "Stabilité",
  筋: "Tendons",
  斗: "lutte",
  又: "encore",
  恳: "Espoir",
  求: "mendier",
  朵: "Duo",
  捻: "torsion",
  着: "Mettre",
  念: "lire",
  动: "se déplacer",
  真: "réel",
  攒: "Sauvegarder",
  紧: "serré",
  拳: "poing",
  对: "droite",
  抖: "secouer",
  八: "huit",
  千: "mille",
  路: "route",
  听: "écouter",
  嘻: "rire",
  造: "faire",
  若: "comme",
  会: "réunion",
  儿: "Fils",
  家: "Maison",
  铺: "boutique",
  兵: "Soldat",
  送: "livrer",
  文: "arts",
  书: "Livre",
  递: "Livraison",
  报: "Rapport",
  单: "un",
  管: "Tube",
  寻: "À la recherche de",
  吃: "manger",
  徒: "seulement",
  们: "Nous",
  昏: "s'évanouir",
  各: "chaque",
  归: "Rentrer chez eux",
  府: "Maison",
  夜: "nuit",
  运: "transport",
  逐: "Par",
  拘: "arrêter",
  束: "paquet",
  逍: "Heureux",
  遥: "télécommande",
  长: "long",
  生: "né",
  美: "beau",
};

const tianwen_translation_map_en = {
  悟空闻说: "Wukong heard",
  毛骨悚然: "Creepy",
  叩头礼拜道: "Kowtow and worship",
  万望老爷垂悯: "Wan Wang Master, please give me mercy",
  传与躲避三灾之法: "The way to avoid the three disasters",
  到底不敢忘恩: "I dare not forget my kindness",
  祖师道: "The Patriarch's Way",
  此亦无难: "It's not difficult either",
  只是你比他人不同: "It's just that you're different than others",
  故传不得: "Therefore, it cannot be passed on",
  悟空道: "Wukong Tao",
  我也头圆顶天: "I'm also dome-headed",
  足方履地: "Foot floor",
  一般有九窍四肢: "Generally, there are nine orifices and four limbs",
  五脏六腑: "All internal organs",
  何以比人不同: "Why is it different from others",
  祖师道: "The Patriarch's Way",
  你虽然像人: "Even though you look like a human",
  却比人少腮: "But fewer cheeks than people",
  原来那猴子孤拐面: "It turns out that the monkey is alone",
  凹脸尖嘴: "Concave face and pointed mouth",
  悟空伸手一摸: "Wukong stretched out his hand and touched it",
  笑道: "Smile",
  师父没成算: "Master is not sure",
  我虽少腮: "Although I have few cheeks",
  却比人多这个嗉袋: "But there are more bags than people",
  亦可准折过也: "Can also be discounted",
  祖师说: "The ancestor said",
  也罢: "OK",
  你要学那一般: "You want to learn that",
  有一般天罡数: "There are general Tiangang numbers",
  该三十六般变化: "The thirty-six changes",
  有一般地煞数: "There are general numbers of evil",
  该七十二般变化: "The seventy-two general changes",
  悟空道: "Wukong Tao",
  弟子愿多里捞摸: "Disciple wishes to find a lot of things",
  学一个地煞变化罢: "Learn about the changes of the Earth Evil",
  祖师道: "The Patriarch's Way",
  既如此: "That's true",
  上前来: "Come forward",
  传与你口诀: "Pass on the formula to you",
  遂附耳低言: "So he said in a low voice",
  不知说了些什么妙法: "I don't know what wonderful methods I said",
  这猴王也是他一窍通时百窍通:
    "This Monkey King is also the only way to understand all the tricks.",
  当时习了口诀: "I learned the formula at that time",
  自修自炼: "Self-study",
  将七十二般变化: "Seventy-two general changes",
  都学成了: "All learned",
  忽一日: "Suddenly one day",
  祖师与众门人在三星洞前戏玩晚景:
    "The ancestor and his disciples play the evening scene in front of the Samsung Cave",
  祖师道: "The Patriarch's Way",
  悟空: "Wukong",
  事成了未曾: "Things have never been done",
  悟空道: "Wukong Tao",
  多蒙师父海恩: "Master Domon Hayne",
  弟子功果完备: "The disciple has achieved complete results",
  已能霞举飞升也: "It can already ascend to the sky",
  祖师道: "The Patriarch's Way",
  你试飞举我看: "You try flying and I'll see",
  悟空弄本事: "Wukong does his skills",
  将身一耸: "Thrust your body",
  打了个连扯跟头: "Had a tantrum",
  跳离地有五六丈: "Jumping away from the ground five or six feet",
  踏云霞去勾有顿饭功夫:
    "Stepping on the clouds and going to hook up with a meal",
  返复不上三里远近: "Can't return to three miles away",
  落在面前: "Fall in front of you",
  叉手道: "Forked hands",
  师父: "Master",
  这就是飞举腾云了: "This is flying up and flying clouds",
  祖师笑道: "The ancestor smiled",
  这个算不得腾云: "This is not considered a Tengyun",
  只算得爬云而已: "Just climbing the clouds",
  自古道: "Since ancient times",
  神仙朝游北海暮苍梧:
    "The gods travel to the north sea and the evening of Cangwu",
  似你这半日: "Like you for the past half a day",
  去不上三里: "Can't get to three miles",
  即爬云也还算不得哩: "Even climbing clouds is not worthy",
  悟空道: "Wukong Tao",
  怎么为: "How to do",
  朝游北海暮苍梧: "Traveling to the North Sea in the evening",
  祖师道: "The Patriarch's Way",
  凡腾云之辈: "Anyone who treks the clouds",
  早辰起自北海: "Early morning starts from the Beihai",
  游过东海: "Swimming through the East China Sea",
  西海: "West Sea",
  南海: "South China Sea",
  复转苍梧: "Return to Cangwu",
  苍梧者却是北海零陵之语话也: "Cangwu is the words of Lingling, Beihai",
  将四海之外: "Putting all over the world",
  一日都游遍: "Travel all day",
  方算得腾云: "Fang calculated Tengyun",
  悟空道: "Wukong Tao",
  这个却难: "This is difficult",
  却难: "But it's difficult",
  祖师道: "The Patriarch's Way",
  世上无难事: "Nothing difficult in the world",
  只怕有心人: "Just afraid of someone who is interested",
  悟空闻得此言: "Wukong heard this",
  叩头礼拜: "Kowtow worship",
  启道: "Declare the way",
  师父: "Master",
  为人须为彻: "Be a person must be thorough",
  索性舍个大慈悲: "Just give up great compassion",
  将此腾云之法: "This method of rushing into the clouds",
  一发传与我罢: "Let me pass it",
  决不敢忘恩: "Never forget your kindness",
  祖师道: "The Patriarch's Way",
  凡诸仙腾云: "All immortals soar into the clouds",
  皆跌足而起: "All of them are falling and rising",
  你却不是这般: "But you are not like this",
  我才见你去: "I've just seen you",
  连扯方才跳上: "Just jumped on",
  我今只就你这个势: "I'm just yours",
  传你个: "Pass it on you",
  筋斗云: "Somersault Cloud",
  罢: "stop",
  悟空又礼拜恳求: "Wukong begged again",
  祖师却又传个口诀道: "But the ancestor passed on a mantra",
  这朵云: "This cloud",
  捻着诀: "Twisting tips",
  念动真言: "Recite the truth",
  攒紧了拳: "Fist tight",
  对身一抖: "Shake to your body",
  跳将起来: "Jump up",
  一筋斗就有十万八千里路哩:
    "One of the most important things is to make a journey of 108,000 miles.",
  大众听说: "The public heard",
  一个个嘻嘻笑道: "One by one, laughed",
  悟空造化: "Wukong's creation",
  若会这个法儿: "If you know this method",
  与人家当铺兵: "With someone else's pawn shop",
  送文书: "Send documents",
  递报单: "Submit the order",
  不管那里都寻了饭吃: "No matter where I found a meal",
  师徒们天昏各归洞府:
    "The master and disciples all return to the cave house in the sky",
  这一夜: "This night",
  悟空即运神炼法: "Wukong is the magic refining method",
  会了筋斗云: "I know somersault cloud",
  逐日家无拘无束: "The home is unrestrained",
  自在逍遥此一长生之美: "Free and free, this beauty of immortality",
};

const tianwen_translation_map_de = {
  悟空闻说: "Wukong hörte",
  毛骨悚然: "Unheimlich",
  叩头礼拜道: "Kowtow und Anbetung",
  万望老爷垂悯: "Wan Wang Meister, bitte gib mir Gnade",
  传与躲避三灾之法: "Der Weg, um die drei Katastrophen zu vermeiden",
  到底不敢忘恩: "Ich wage es, meine Freundlichkeit nicht zu vergessen",
  祖师道: "Der Weg des Patriarchen",
  此亦无难: "Es ist auch nicht schwierig",
  只是你比他人不同: "Es ist nur so, dass Sie anders sind als andere",
  故传不得: "Daher kann es nicht weitergegeben werden",
  悟空道: "Wukong Tao",
  我也头圆顶天: "Ich bin auch kuppelköpfig",
  足方履地: "Fußboden",
  一般有九窍四肢: "Im Allgemeinen gibt es neun Öffnungen und vier Gliedmaßen",
  五脏六腑: "Alle internen Organe",
  何以比人不同: "Warum ist es anders als andere",
  祖师道: "Der Weg des Patriarchen",
  你虽然像人: "Obwohl du wie ein Mensch aussiehst",
  却比人少腮: "Aber weniger Wangen als Menschen",
  原来那猴子孤拐面: "Es stellt sich heraus, dass der Affe allein ist",
  凹脸尖嘴: "Konkaves Gesicht und spitze Mund",
  悟空伸手一摸: "Wukong streckte seine Hand aus und berührte sie",
  笑道: "Lächeln",
  师父没成算: "Meister ist sich nicht sicher",
  我虽少腮: "Obwohl ich ein paar Wangen habe",
  却比人多这个嗉袋: "Aber es gibt mehr Taschen als Menschen",
  亦可准折过也: "Kann auch reduziert werden",
  祖师说: "Sagte der Vorfahr",
  也罢: "OK",
  你要学那一般: "Sie möchten das lernen",
  有一般天罡数: "Es gibt allgemeine Tiangang -Zahlen",
  该三十六般变化: "Die sechsunddreißig Änderungen",
  有一般地煞数: "Es gibt eine allgemeine Anzahl von Bösen",
  该七十二般变化: "Die zweiundsiebzig allgemeinen Änderungen",
  悟空道: "Wukong Tao",
  弟子愿多里捞摸: "Jünger möchte viele Dinge finden",
  学一个地煞变化罢: "Erfahren Sie mehr über die Veränderungen der Erde Böse",
  祖师道: "Der Weg des Patriarchen",
  既如此: "Das stimmt",
  上前来: "Vorwärts kommen",
  传与你口诀: "Geben Sie die Formel an Sie weiter",
  遂附耳低言: "Sagte er mit leiser Stimme",
  不知说了些什么妙法:
    "Ich weiß nicht, welche wunderbaren Methoden ich gesagt habe",
  这猴王也是他一窍通时百窍通:
    "Dieser Affenkönig ist auch der einzige Weg, um alle Tricks zu verstehen.",
  当时习了口诀: "Ich habe die Formel zu dieser Zeit gelernt",
  自修自炼: "Selbststudie",
  将七十二般变化: "22 allgemeine Änderungen",
  都学成了: "Alles gelernt",
  忽一日: "Plötzlich eines Tages",
  祖师与众门人在三星洞前戏玩晚景:
    "Der Vorfahr und seine Jünger spielen die Abendszene vor der Samsung -Höhle",
  祖师道: "Der Weg des Patriarchen",
  悟空: "Wukong",
  事成了未曾: "Dinge wurden noch nie getan",
  悟空道: "Wukong Tao",
  多蒙师父海恩: "Meister Domon Hayne",
  弟子功果完备: "Der Schüler hat vollständige Ergebnisse erzielt",
  已能霞举飞升也: "Es kann bereits zum Himmel aufsteigen",
  祖师道: "Der Weg des Patriarchen",
  你试飞举我看: "Du versuchst zu fliegen und ich werde sehen",
  悟空弄本事: "Wukong macht seine Fähigkeiten",
  将身一耸: "Schieben Sie Ihren Körper",
  打了个连扯跟头: "Hatte einen Wutanfall",
  跳离地有五六丈: "Fünf oder sechs Fuß vom Boden wegspringen",
  踏云霞去勾有顿饭功夫:
    "In die Wolken treten und sich mit einer Mahlzeit treffen",
  返复不上三里远近: "Kann nicht in drei Meilen entfernt zurückkehren",
  落在面前: "Fallen vor dir",
  叉手道: "Gabelhände",
  师父: "Master",
  这就是飞举腾云了: "Dies fliegt auf und wolken Wolken",
  祖师笑道: "Der Vorfahr lächelte",
  这个算不得腾云: "Dies wird nicht als Tengyun angesehen",
  只算得爬云而已: "Nur die Wolken klettern",
  自古道: "Seit alte Zeiten",
  神仙朝游北海暮苍梧: "Die Götter reisen zur Nordsee und am Abend von Cangwu",
  似你这半日: "Wie Sie in den letzten halben Tag",
  去不上三里: "Kann nicht zu drei Meilen gelangen",
  即爬云也还算不得哩: "Sogar das Klettern von Wolken ist nicht würdig",
  悟空道: "Wukong Tao",
  怎么为: "Wie es geht",
  朝游北海暮苍梧: "Am Abend nach Nordsee reisen",
  祖师道: "Der Weg des Patriarchen",
  凡腾云之辈: "Jeder, der die Wolken fügt",
  早辰起自北海: "Der frühe Morgen beginnt vom Beihai",
  游过东海: "Schwimmen durch das Ostchinesische Meer",
  西海: "Westsee",
  南海: "Südchinesischer Meer",
  复转苍梧: "Kehren Sie nach Cangwu zurück",
  苍梧者却是北海零陵之语话也: "Cangwu sind die Worte des Linglings, Beihai",
  将四海之外: "Auf der ganzen Welt setzen",
  一日都游遍: "Den ganzen Tag reisen",
  方算得腾云: "Fang berechnete Tengyun",
  悟空道: "Wukong Tao",
  这个却难: "Das ist schwierig",
  却难: "Aber es ist schwierig",
  祖师道: "Der Weg des Patriarchen",
  世上无难事: "Nichts Schwieriges auf der Welt",
  只怕有心人: "Nur Angst vor jemandem, der interessiert ist",
  悟空闻得此言: "Wukong hörte das",
  叩头礼拜: "Kowtow -Anbetung",
  启道: "Erkläre den Weg",
  师父: "Master",
  为人须为彻: "Sei eine Person muss gründlich sein",
  索性舍个大慈悲: "Gib einfach tolles Mitgefühl auf",
  将此腾云之法: "Diese Methode, in die Wolken zu eilen",
  一发传与我罢: "Lass mich es passieren",
  决不敢忘恩: "Vergiss niemals deine Freundlichkeit",
  祖师道: "Der Weg des Patriarchen",
  凡诸仙腾云: "Alle Unsterblichen steigen in die Wolken auf",
  皆跌足而起: "Alle von ihnen fallen und steigen",
  你却不是这般: "Aber du bist nicht so",
  我才见你去: "Ich habe dich gerade gesehen",
  连扯方才跳上: "Ich bin gerade weitergesprungen",
  我今只就你这个势: "Ich bin nur deins",
  传你个: "Gib es an dir vorbei",
  筋斗云: "Somersault Cloud",
  罢: "stoppen",
  悟空又礼拜恳求: "Wukong bettelte erneut",
  祖师却又传个口诀道: "Aber der Vorfahr gab ein Mantra weiter",
  这朵云: "Diese Wolke",
  捻着诀: "Tipps verdrehen",
  念动真言: "Die Wahrheit rezitieren",
  攒紧了拳: "Faust fest",
  对身一抖: "Schütteln Sie zu Ihrem Körper",
  跳将起来: "Aufspringen",
  一筋斗就有十万八千里路哩:
    "Eines der wichtigsten Dinge ist es, eine Reise von 108.000 Meilen zu unternehmen.",
  大众听说: "Die Öffentlichkeit hörte",
  一个个嘻嘻笑道: "Eins nach dem anderen lachte",
  悟空造化: "Wukongs Schöpfung",
  若会这个法儿: "Wenn Sie diese Methode kennen",
  与人家当铺兵: "Mit dem Pfandhaus eines anderen",
  送文书: "Dokumente senden",
  递报单: "Senden Sie die Bestellung ein",
  不管那里都寻了饭吃: "Egal wo ich eine Mahlzeit gefunden habe",
  师徒们天昏各归洞府:
    "Der Meister und die Jünger kehren alle zum Höhlenhaus am Himmel zurück",
  这一夜: "Diese Nacht",
  悟空即运神炼法: "Wukong ist die Magic Refining -Methode",
  会了筋斗云: "Ich kenne Somersault Cloud",
  逐日家无拘无束: "Das Haus ist ungezügelt",
  自在逍遥此一长生之美: "Frei und frei, diese Schönheit der Unsterblichkeit",
};

const tianwen_translation_map_fr = {
  悟空闻说: "Wukong entendu",
  毛骨悚然: "Effrayant",
  叩头礼拜道: "Kowtow et adoration",
  万望老爷垂悯: "Wan Wang Master, s'il vous plaît donnez-moi pitié",
  传与躲避三灾之法: "Le moyen d'éviter les trois catastrophes",
  到底不敢忘恩: "Je n'ose pas oublier ma gentillesse",
  祖师道: "La voie du patriarche",
  此亦无难: "Ce n'est pas difficile non plus",
  只是你比他人不同: "C'est juste que tu es différent des autres",
  故传不得: "Par conséquent, il ne peut pas être transmis",
  悟空道: "Wukong Tao",
  我也头圆顶天: "Je suis aussi à la tête du dôme",
  足方履地: "Étage des pieds",
  一般有九窍四肢: "Généralement, il y a neuf orifices et quatre membres",
  五脏六腑: "Tous les organes internes",
  何以比人不同: "Pourquoi est-ce différent des autres",
  祖师道: "La voie du patriarche",
  你虽然像人: "Même si tu ressembles à un humain",
  却比人少腮: "Mais moins de joues que les gens",
  原来那猴子孤拐面: "Il s'avère que le singe est seul",
  凹脸尖嘴: "Visage concave et bouche pointu",
  悟空伸手一摸: "Wukong tendit la main et la toucha",
  笑道: "Sourire",
  师父没成算: "Maître n'est pas sûr",
  我虽少腮: "Bien que j'ai peu de joues",
  却比人多这个嗉袋: "Mais il y a plus de sacs que les gens",
  亦可准折过也: "Peut également être réduit",
  祖师说: "L'ancêtre a dit",
  也罢: "D'ACCORD",
  你要学那一般: "Tu veux apprendre ça",
  有一般天罡数: "Il y a des numéros généraux de Tiangang",
  该三十六般变化: "Les trente-six changements",
  有一般地煞数: "Il y a un nombre général de mal",
  该七十二般变化: "Les soixante-douze changements généraux",
  悟空道: "Wukong Tao",
  弟子愿多里捞摸: "Le disciple souhaite trouver beaucoup de choses",
  学一个地煞变化罢: "Découvrez les changements du mal de la Terre",
  祖师道: "La voie du patriarche",
  既如此: "C'est vrai",
  上前来: "Se manifester",
  传与你口诀: "Transmettre la formule",
  遂附耳低言: "Alors il a dit d'une voix basse",
  不知说了些什么妙法: "Je ne sais pas quelles méthodes merveilleuses j'ai dit",
  这猴王也是他一窍通时百窍通:
    "Ce roi de singe est également le seul moyen de comprendre toutes les astuces.",
  当时习了口诀: "J'ai appris la formule à ce moment-là",
  自修自炼: "Stimulation",
  将七十二般变化: "Soixante-douze changements généraux",
  都学成了: "Tous appris",
  忽一日: "Soudain un jour",
  祖师与众门人在三星洞前戏玩晚景:
    "L'ancêtre et ses disciples jouent la scène du soir devant la grotte de Samsung",
  祖师道: "La voie du patriarche",
  悟空: "Wukong",
  事成了未曾: "Les choses n'ont jamais été faites",
  悟空道: "Wukong Tao",
  多蒙师父海恩: "Maître Domon Hayne",
  弟子功果完备: "Le disciple a obtenu des résultats complets",
  已能霞举飞升也: "Il peut déjà monter dans le ciel",
  祖师道: "La voie du patriarche",
  你试飞举我看: "Tu essaies de voler et je verrai",
  悟空弄本事: "Wukong fait ses compétences",
  将身一耸: "Poussez votre corps",
  打了个连扯跟头: "Avait une crise de colère",
  跳离地有五六丈: "Sauter du sol à cinq ou six pieds",
  踏云霞去勾有顿饭功夫:
    "Marcher sur les nuages ​​et aller se connecter avec un repas",
  返复不上三里远近: "Je ne peux pas revenir à trois kilomètres",
  落在面前: "Tomber devant toi",
  叉手道: "Mains fourchues",
  师父: "Maître",
  这就是飞举腾云了: "Ceci vole et vole des nuages",
  祖师笑道: "L'ancêtre sourit",
  这个算不得腾云: "Ce n'est pas considéré comme un Tengyun",
  只算得爬云而已: "Juste grimper les nuages",
  自古道: "Depuis les temps anciens",
  神仙朝游北海暮苍梧:
    "Les dieux se rendent en mer du Nord et la soirée de CANGWU",
  似你这半日: "Comme toi pendant la dernière demi-journée",
  去不上三里: "Je ne peux pas atteindre trois miles",
  即爬云也还算不得哩: "Même l'escalade des nuages ​​n'est pas digne",
  悟空道: "Wukong Tao",
  怎么为: "Comment faire",
  朝游北海暮苍梧: "Voyager en mer du Nord le soir",
  祖师道: "La voie du patriarche",
  凡腾云之辈: "Quiconque tremble les nuages",
  早辰起自北海: "Tôt le matin commence par le beihai",
  游过东海: "Nager à travers la mer de Chine orientale",
  西海: "Mer ouest",
  南海: "Mer de Chine méridionale",
  复转苍梧: "Retour à CANGWU",
  苍梧者却是北海零陵之语话也: "CANGWU est les mots de Lingling, Beihai",
  将四海之外: "Mettre partout dans le monde",
  一日都游遍: "Voyager toute la journée",
  方算得腾云: "Fang calculé Tengyun",
  悟空道: "Wukong Tao",
  这个却难: "C'est difficile",
  却难: "Mais c'est difficile",
  祖师道: "La voie du patriarche",
  世上无难事: "Rien de difficile dans le monde",
  只怕有心人: "Juste peur de quelqu'un qui est intéressé",
  悟空闻得此言: "Wukong a entendu cela",
  叩头礼拜: "Adoration de Kowtow",
  启道: "Déclarer le chemin",
  师父: "Maître",
  为人须为彻: "Être une personne doit être minutieuse",
  索性舍个大慈悲: "Abandonnez juste une grande compassion",
  将此腾云之法: "Cette méthode de se précipitant dans les nuages",
  一发传与我罢: "Laisse-moi passer",
  决不敢忘恩: "N'oubliez jamais votre gentillesse",
  祖师道: "La voie du patriarche",
  凡诸仙腾云: "Tous les immortels planent dans les nuages",
  皆跌足而起: "Tous tombent et se lèvent",
  你却不是这般: "Mais tu n'es pas comme ça",
  我才见你去: "Je viens de te voir",
  连扯方才跳上: "Je viens de sauter sur",
  我今只就你这个势: "Je suis juste à toi",
  传你个: "Passez-le sur vous",
  筋斗云: "Nuage de somersault",
  罢: "arrêt",
  悟空又礼拜恳求: "Wukong a à nouveau supplié",
  祖师却又传个口诀道: "Mais l'ancêtre a passé un mantra",
  这朵云: "Ce nuage",
  捻着诀: "Conseils de torsion",
  念动真言: "Réciter la vérité",
  攒紧了拳: "Poing",
  对身一抖: "Secouer votre corps",
  跳将起来: "Sauter",
  一筋斗就有十万八千里路哩:
    "L'une des choses les plus importantes est de faire un voyage de 108 000 miles.",
  大众听说: "Le public a entendu",
  一个个嘻嘻笑道: "Un par un, rit",
  悟空造化: "La création de Wukong",
  若会这个法儿: "Si vous connaissez cette méthode",
  与人家当铺兵: "Avec le prête-prhicine de quelqu'un d'autre",
  送文书: "Envoyer des documents",
  递报单: "Soumettre la commande",
  不管那里都寻了饭吃: "Peu importe où j'ai trouvé un repas",
  师徒们天昏各归洞府:
    "Le maître et les disciples retournent tous dans la maison des grottes dans le ciel",
  这一夜: "Cette nuit",
  悟空即运神炼法: "Wukong est la méthode de raffinage magique",
  会了筋斗云: "Je sais que Somersault Cloud",
  逐日家无拘无束: "La maison n'est pas retenue",
  自在逍遥此一长生之美: "Gratuit et libre, cette beauté de l'immortalité",
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
