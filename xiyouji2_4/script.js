const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `你看他从旧路径至后门外
只见那门儿半开半掩
悟空喜道
老师父果然注意与我传道
故此开着门也
即曳步近前
侧身进得门里
只走到祖师寝榻之下
见祖师蜷局身躯
朝里睡着了
悟空不敢惊动
即跪在榻前
那祖师不多时觉来
舒开两足
口中自吟道
难
难
难
道最玄
莫把金丹作等闲
不遇至人传妙诀
空言口困舌头干
悟空应声叫道
师父
弟子在此跪候多时
祖师闻得声音是悟空
即起披衣
盘坐喝道
这猢狲
你不在前边去睡
却来我这后边作甚
悟空道
师父昨日坛前对众相允
教弟子三更时候
从后门里传我道理
故此大胆径拜老爷榻下
祖师听说
十分欢喜
暗自寻思道
这厮果然是个天地生成的
不然
何就打破我盘中之暗谜也
悟空道
此间更无六耳
止只弟子一人
望师父大舍慈悲
传与我长生之道罢
永不忘恩
祖师道
你今有缘
我亦喜说
既识得盘中暗谜
你近前来
仔细听之
当传与你长生之妙道也
悟空叩头谢了
洗耳用心
跪于榻下
祖师云
显密圆通真妙诀
惜修生命无他说
都来总是精气神
谨固牢藏休漏泄
休漏泄
体中藏
汝受吾传道自昌
口诀记来多有益
屏除邪欲得清凉
得清凉
光皎洁
好向丹台赏明月
月藏玉兔日藏乌
自有龟蛇相盘结
相盘结
性命坚
却能火里种金莲
攒簇五行颠倒用
功完随作佛和仙`;

const pinyinMap = {
  你: "nǐ",
  看: "kàn",
  他: "tā",
  从: "cóng",
  旧: "jiù",
  路: "lù",
  径: "jìng",
  至: "zhì",
  后: "hòu",
  门: "mén",
  外: "wài",
  只: "zhī",
  见: "jiàn",
  那: "nà",
  儿: "ér",
  半: "bàn",
  开: "kāi",
  掩: "yǎn",
  悟: "wù",
  空: "kōng",
  喜: "xǐ",
  道: "dào",
  老: "lǎo",
  师: "shī",
  父: "fù",
  果: "guǒ",
  然: "rán",
  注: "zhù",
  意: "yì",
  与: "yǔ",
  我: "wǒ",
  传: "chuán",
  故: "gù",
  此: "cǐ",
  着: "zhe",
  也: "yě",
  即: "jí",
  曳: "yè",
  步: "bù",
  近: "jìn",
  前: "qián",
  侧: "cè",
  身: "shēn",
  进: "jìn",
  得: "dé",
  里: "lǐ",
  走: "zǒu",
  到: "dào",
  祖: "zǔ",
  寝: "qǐn",
  榻: "tà",
  之: "zhī",
  下: "xià",
  蜷: "quán",
  局: "jú",
  躯: "qū",
  朝: "cháo",
  睡: "shuì",
  了: "le",
  不: "bù",
  敢: "gǎn",
  惊: "jīng",
  动: "dòng",
  跪: "guì",
  在: "zài",
  多: "duō",
  时: "shí",
  觉: "jué",
  来: "lái",
  舒: "shū",
  两: "liǎng",
  足: "zú",
  口: "kǒu",
  中: "zhōng",
  自: "zì",
  吟: "yín",
  难: "nán",
  最: "zuì",
  玄: "xuán",
  莫: "mò",
  把: "bǎ",
  金: "jīn",
  丹: "dān",
  作: "zuò",
  等: "děng",
  闲: "xián",
  遇: "yù",
  人: "rén",
  妙: "miào",
  诀: "jué",
  言: "yán",
  困: "kùn",
  舌: "shé",
  头: "tou",
  干: "gàn",
  应: "yīng",
  声: "shēng",
  叫: "jiào",
  弟: "dì",
  子: "zǐ",
  候: "hòu",
  闻: "wén",
  音: "yīn",
  是: "shì",
  起: "qǐ",
  披: "pī",
  衣: "yī",
  盘: "pán",
  坐: "zuò",
  喝: "hē",
  这: "zhè",
  猢: "hú",
  狲: "sūn",
  边: "biān",
  去: "qù",
  却: "què",
  甚: "shèn",
  昨: "zuó",
  日: "rì",
  坛: "tán",
  对: "duì",
  众: "zhòng",
  相: "xiāng",
  允: "yǔn",
  教: "jiào",
  三: "sān",
  更: "gēng",
  理: "lǐ",
  大: "dà",
  胆: "dǎn",
  拜: "bài",
  爷: "yé",
  听: "tīng",
  说: "shuō",
  十: "shí",
  分: "fēn",
  欢: "huān",
  暗: "àn",
  寻: "xín",
  思: "sī",
  厮: "sī",
  个: "gè",
  天: "tiān",
  地: "dì",
  生: "shēng",
  成: "chéng",
  的: "de",
  何: "hé",
  就: "jiù",
  打: "dǎ",
  破: "pò",
  谜: "mí",
  间: "jiān",
  无: "wú",
  六: "liù",
  耳: "ěr",
  止: "zhǐ",
  一: "yī",
  望: "wàng",
  舍: "shě",
  慈: "cí",
  悲: "bēi",
  长: "zhǎng",
  罢: "bà",
  永: "yǒng",
  忘: "wàng",
  恩: "ēn",
  今: "jīn",
  有: "yǒu",
  缘: "yuán",
  亦: "yì",
  既: "jì",
  识: "shí",
  仔: "zǐ",
  细: "xì",
  当: "dāng",
  叩: "kòu",
  谢: "xiè",
  洗: "xǐ",
  用: "yòng",
  心: "xīn",
  于: "yú",
  云: "yún",
  显: "xiǎn",
  密: "mì",
  圆: "yuán",
  通: "tōng",
  真: "zhēn",
  惜: "xī",
  修: "xiū",
  命: "mìng",
  都: "dōu",
  总: "zǒng",
  精: "jīng",
  气: "qì",
  神: "shén",
  谨: "jǐn",
  固: "gù",
  牢: "láo",
  藏: "cáng",
  休: "xiū",
  漏: "lòu",
  泄: "xiè",
  体: "tǐ",
  汝: "rǔ",
  受: "shòu",
  吾: "wú",
  昌: "chāng",
  记: "jì",
  益: "yì",
  屏: "bǐng",
  除: "chú",
  邪: "xié",
  欲: "yù",
  清: "qīng",
  凉: "liáng",
  光: "guāng",
  皎: "jiǎo",
  洁: "jié",
  好: "hǎo",
  向: "xiàng",
  台: "tái",
  赏: "shǎng",
  明: "míng",
  月: "yuè",
  玉: "yù",
  兔: "tù",
  乌: "wū",
  龟: "guī",
  蛇: "shé",
  结: "jié",
  性: "xìng",
  坚: "jiān",
  能: "néng",
  火: "huǒ",
  种: "zhǒng",
  莲: "lián",
  攒: "zǎn",
  簇: "cù",
  五: "wǔ",
  行: "xíng",
  颠: "diān",
  倒: "dǎo",
  功: "gōng",
  完: "wán",
  随: "suí",
  佛: "fú",
  和: "hé",
  仙: "xiān",
};

const translations_en = {
  你: "you",
  看: "look",
  他: "he",
  从: "from",
  旧: "old",
  路: "road",
  径: "path",
  至: "to",
  后: "back",
  门: "Door",
  外: "outside",
  只: "Only",
  见: "See",
  那: "That",
  儿: "Son",
  半: "Half",
  开: "open",
  掩: "Cover",
  悟: "Enlightenment",
  空: "null",
  喜: "happiness",
  道: "road",
  老: "old",
  师: "division",
  父: "father",
  果: "fruit",
  然: "Of course",
  注: "Note",
  意: "meaning",
  与: "and",
  我: "I",
  传: "pass",
  故: "Therefore",
  此: "this",
  着: "Put",
  也: "also",
  即: "Right now",
  曳: "drag",
  步: "step",
  近: "close",
  前: "forward",
  侧: "side",
  身: "body",
  进: "Enter",
  得: "have to",
  里: "inside",
  走: "Walk",
  到: "arrive",
  祖: "Ancestor",
  寝: "sleep",
  榻: "couch",
  之: "Of",
  下: "Down",
  蜷: "Curl up",
  局: "Bureau",
  躯: "Body",
  朝: "towards",
  睡: "sleep",
  了: "It's",
  不: "No",
  敢: "dare",
  惊: "shock",
  动: "move",
  跪: "kneel",
  在: "exist",
  多: "many",
  时: "hour",
  觉: "Sleep",
  来: "Come",
  舒: "Sweet",
  两: "two",
  足: "foot",
  口: "mouth",
  中: "middle",
  自: "since",
  吟: "Sigh",
  难: "Disaster",
  最: "most",
  玄: "mysterious",
  莫: "Mo",
  把: "Bundle",
  金: "gold",
  丹: "Dan",
  作: "do",
  等: "wait",
  闲: "idle",
  遇: "Meet",
  人: "people",
  妙: "wonderful",
  诀: "Tips",
  言: "Word",
  困: "Sleepy",
  舌: "tongue",
  头: "head",
  干: "Dry",
  应: "answer",
  声: "Voice",
  叫: "Call",
  弟: "younger brother",
  子: "son",
  候: "Wait",
  闻: "smell",
  音: "sound",
  是: "yes",
  起: "rise",
  披: "路",
  衣: "Clothes",
  盘: "plate",
  坐: "sit",
  喝: "drink",
  这: "this",
  猢: "Money",
  狲: "可",
  边: "side",
  去: "go",
  却: "but",
  甚: "very",
  昨: "yesterday",
  日: "day",
  坛: "altar",
  对: "right",
  众: "All",
  相: "Mutually",
  允: "allow",
  教: "teach",
  三: "three",
  更: "Even",
  理: "reason",
  大: "big",
  胆: "Bold",
  拜: "bye",
  爷: "Grandpa",
  听: "listen",
  说: "explain",
  十: "ten",
  分: "point",
  欢: "joyous",
  暗: "dark",
  寻: "Looking for",
  思: "think",
  厮: "Friend",
  个: "indivual",
  天: "sky",
  地: "land",
  生: "born",
  成: "become",
  的: "of",
  何: "what",
  就: "At once",
  打: "beat",
  破: "break",
  谜: "puzzle",
  间: "between",
  无: "none",
  六: "six",
  耳: "Ear",
  止: "end",
  一: "one",
  望: "see",
  舍: "Abandon",
  慈: "Ci",
  悲: "sad",
  长: "long",
  罢: "stop",
  永: "forever",
  忘: "forget",
  恩: "kindness",
  今: "now",
  有: "have",
  缘: "edge",
  亦: "as well as",
  既: "now that",
  识: "knowledge",
  仔: "young",
  细: "thin",
  当: "when",
  叩: "knock",
  谢: "Thanks",
  洗: "wash",
  用: "use",
  心: "Heart",
  于: "At",
  云: "cloud",
  显: "Show",
  密: "dense",
  圆: "round",
  通: "Pass",
  真: "real",
  惜: "Cherish",
  修: "build",
  命: "life",
  都: "All",
  总: "total",
  精: "Refined",
  气: "gas",
  神: "god",
  谨: "Be cautious",
  固: "solid",
  牢: "prison",
  藏: "Tibetan",
  休: "stop",
  漏: "leak",
  泄: "vent",
  体: "body",
  汝: "You",
  受: "by",
  吾: "I",
  昌: "Chang",
  记: "remember",
  益: "beneficial",
  屏: "screen",
  除: "remove",
  邪: "evil",
  欲: "want",
  清: "clear",
  凉: "cold",
  光: "Light",
  皎: "bright",
  洁: "clean",
  好: "good",
  向: "Towards",
  台: "tower",
  赏: "reward",
  明: "bright",
  月: "moon",
  玉: "Jade",
  兔: "rabbit",
  乌: "Wu",
  龟: "turtle",
  蛇: "snake",
  结: "Knot",
  性: "sex",
  坚: "Strong",
  能: "able",
  火: "fire",
  种: "kind",
  莲: "lotus",
  攒: "Save",
  簇: "cluster",
  五: "five",
  行: "OK",
  颠: "Far",
  倒: "fall",
  功: "achievement",
  完: "over",
  随: "With",
  佛: "Buddha",
  和: "and",
  仙: "Fairy",
};

const translations_de = {
  你: "Du",
  看: "sehen",
  他: "Er",
  从: "aus",
  旧: "alt",
  路: "Straße",
  径: "Weg",
  至: "Zu",
  后: "zurück",
  门: "Tür",
  外: "draußen",
  只: "Nur",
  见: "Sehen",
  那: "Das",
  儿: "Sohn",
  半: "Hälfte",
  开: "offen",
  掩: "Abdeckung",
  悟: "Aufklärung",
  空: "NULL",
  喜: "Glück",
  道: "Straße",
  老: "alt",
  师: "Division",
  父: "Vater",
  果: "Obst",
  然: "Natürlich",
  注: "Notiz",
  意: "Bedeutung",
  与: "Und",
  我: "ICH",
  传: "passieren",
  故: "daher",
  此: "Das",
  着: "Setzen",
  也: "Auch",
  即: "Im Augenblick",
  曳: "ziehen",
  步: "Schritt",
  近: "schließen",
  前: "nach vorne",
  侧: "Seite",
  身: "Körper",
  进: "Eingeben",
  得: "müssen",
  里: "innen",
  走: "Gehen",
  到: "ankommen",
  祖: "Vorfahr",
  寝: "schlafen",
  榻: "Couch",
  之: "Von",
  下: "Runter",
  蜷: "Sich zusammenrollen",
  局: "Büro",
  躯: "Körper",
  朝: "in Richtung",
  睡: "schlafen",
  了: "Es ist",
  不: "NEIN",
  敢: "wagen",
  惊: "Schock",
  动: "bewegen",
  跪: "knien",
  在: "existieren",
  多: "viele",
  时: "Stunde",
  觉: "Schlafen",
  来: "Kommen",
  舒: "Süß",
  两: "zwei",
  足: "Fuß",
  口: "Mund",
  中: "Mitte",
  自: "seit",
  吟: "Seufzen",
  难: "Katastrophe",
  最: "am meisten",
  玄: "mysteriös",
  莫: "MO",
  把: "Bündeln",
  金: "Gold",
  丹: "Dan",
  作: "Tun",
  等: "Warten",
  闲: "Leerlauf",
  遇: "Treffen",
  人: "Menschen",
  妙: "wunderbar",
  诀: "Tipps",
  言: "Wort",
  困: "Schläfrig",
  舌: "Zunge",
  头: "Kopf",
  干: "Trocken",
  应: "Antwort",
  声: "Stimme",
  叫: "Anruf",
  弟: "jüngerer Bruder",
  子: "Sohn",
  候: "Warten",
  闻: "Geruch",
  音: "Klang",
  是: "Ja",
  起: "erheben",
  披: "路",
  衣: "Kleidung",
  盘: "Platte",
  坐: "sitzen",
  喝: "trinken",
  这: "Das",
  猢: "Geld",
  狲: "可",
  边: "Seite",
  去: "gehen",
  却: "Aber",
  甚: "sehr",
  昨: "gestern",
  日: "Tag",
  坛: "Altar",
  对: "Rechts",
  众: "Alle",
  相: "Gegenseitig",
  允: "erlauben",
  教: "unterrichten",
  三: "drei",
  更: "Sogar",
  理: "Grund",
  大: "groß",
  胆: "Deutlich",
  拜: "Tschüss",
  爷: "Opa",
  听: "Hören",
  说: "erklären",
  十: "zehn",
  分: "Punkt",
  欢: "freudig",
  暗: "dunkel",
  寻: "Auf der Suche nach",
  思: "denken",
  厮: "Freund",
  个: "indival",
  天: "Himmel",
  地: "Land",
  生: "geboren",
  成: "werden",
  的: "von",
  何: "Was",
  就: "Auf einmal",
  打: "schlagen",
  破: "brechen",
  谜: "Puzzle",
  间: "zwischen",
  无: "keiner",
  六: "sechs",
  耳: "Ohr",
  止: "Ende",
  一: "eins",
  望: "sehen",
  舍: "Aufgeben",
  慈: "CI",
  悲: "traurig",
  长: "lang",
  罢: "stoppen",
  永: "für immer",
  忘: "vergessen",
  恩: "Freundlichkeit",
  今: "Jetzt",
  有: "haben",
  缘: "Rand",
  亦: "sowie",
  既: "Nun das",
  识: "Wissen",
  仔: "jung",
  细: "dünn",
  当: "Wann",
  叩: "klopfen",
  谢: "Danke",
  洗: "waschen",
  用: "verwenden",
  心: "Herz",
  于: "Bei",
  云: "Wolke",
  显: "Zeigen",
  密: "dicht",
  圆: "runden",
  通: "Passieren",
  真: "real",
  惜: "Schätzen",
  修: "bauen",
  命: "Leben",
  都: "Alle",
  总: "gesamt",
  精: "Raffiniert",
  气: "Gas",
  神: "Gott",
  谨: "Vorsichtig sein",
  固: "solide",
  牢: "Gefängnis",
  藏: "Tibetaner",
  休: "stoppen",
  漏: "Leck",
  泄: "Entlüftung",
  体: "Körper",
  汝: "Du",
  受: "von",
  吾: "ICH",
  昌: "Chang",
  记: "erinnern",
  益: "vorteilhaft",
  屏: "Bildschirm",
  除: "entfernen",
  邪: "teuflisch",
  欲: "wollen",
  清: "klar",
  凉: "kalt",
  光: "Licht",
  皎: "hell",
  洁: "sauber",
  好: "Gut",
  向: "In Richtung",
  台: "Turm",
  赏: "belohnen",
  明: "hell",
  月: "Mond",
  玉: "Jade",
  兔: "Kaninchen",
  乌: "Wu",
  龟: "Schildkröte",
  蛇: "Schlange",
  结: "Knoten",
  性: "Sex",
  坚: "Stark",
  能: "fähig",
  火: "Feuer",
  种: "Art",
  莲: "Lotus",
  攒: "Speichern",
  簇: "Cluster",
  五: "fünf",
  行: "OK",
  颠: "Weit",
  倒: "fallen",
  功: "Leistung",
  完: "über",
  随: "Mit",
  佛: "Buddha",
  和: "Und",
  仙: "Fee",
};

const translations_fr = {
  你: "toi",
  看: "regarder",
  他: "il",
  从: "depuis",
  旧: "vieux",
  路: "route",
  径: "chemin",
  至: "à",
  后: "dos",
  门: "Porte",
  外: "dehors",
  只: "Seulement",
  见: "Voir",
  那: "Que",
  儿: "Fils",
  半: "Moitié",
  开: "ouvrir",
  掩: "Couverture",
  悟: "Éclaircissement",
  空: "nul",
  喜: "bonheur",
  道: "route",
  老: "vieux",
  师: "division",
  父: "père",
  果: "fruit",
  然: "Bien sûr",
  注: "Note",
  意: "signification",
  与: "et",
  我: "je",
  传: "passer",
  故: "Donc",
  此: "ce",
  着: "Mettre",
  也: "aussi",
  即: "Tout de suite",
  曳: "traîner",
  步: "étape",
  近: "fermer",
  前: "avant",
  侧: "côté",
  身: "corps",
  进: "Entrer",
  得: "devoir",
  里: "à l'intérieur",
  走: "Marcher",
  到: "arriver",
  祖: "Ancêtre",
  寝: "dormir",
  榻: "canapé",
  之: "De",
  下: "Vers le bas",
  蜷: "Boucler",
  局: "Bureau",
  躯: "Corps",
  朝: "vers",
  睡: "dormir",
  了: "C'est",
  不: "Non",
  敢: "oser",
  惊: "choc",
  动: "se déplacer",
  跪: "s'agenouiller",
  在: "exister",
  多: "beaucoup",
  时: "heure",
  觉: "Dormir",
  来: "Viens",
  舒: "Doux",
  两: "deux",
  足: "pied",
  口: "bouche",
  中: "milieu",
  自: "depuis",
  吟: "Soupir",
  难: "Catastrophe",
  最: "la plupart",
  玄: "mystérieux",
  莫: "MO",
  把: "Paquet",
  金: "or",
  丹: "Dan",
  作: "faire",
  等: "attendez",
  闲: "inactif",
  遇: "Rencontrer",
  人: "personnes",
  妙: "merveilleux",
  诀: "Conseils",
  言: "Mot",
  困: "Somnolent",
  舌: "langue",
  头: "tête",
  干: "Sec",
  应: "répondre",
  声: "Voix",
  叫: "Appel",
  弟: "jeune frère",
  子: "fils",
  候: "Attendez",
  闻: "odeur",
  音: "son",
  是: "Oui",
  起: "augmenter",
  披: "路",
  衣: "Vêtements",
  盘: "plaque",
  坐: "s'asseoir",
  喝: "boire",
  这: "ce",
  猢: "Argent",
  狲: "可",
  边: "côté",
  去: "aller",
  却: "mais",
  甚: "très",
  昨: "hier",
  日: "jour",
  坛: "autel",
  对: "droite",
  众: "Tous",
  相: "Mutuellement",
  允: "permettre",
  教: "enseigner",
  三: "trois",
  更: "Même",
  理: "raison",
  大: "grand",
  胆: "Audacieux",
  拜: "au revoir",
  爷: "Grand-père",
  听: "écouter",
  说: "expliquer",
  十: "dix",
  分: "indiquer",
  欢: "joyeux",
  暗: "sombre",
  寻: "À la recherche de",
  思: "pense",
  厮: "Ami",
  个: "autonome",
  天: "ciel",
  地: "atterrir",
  生: "né",
  成: "devenir",
  的: "de",
  何: "quoi",
  就: "Immédiatement",
  打: "battre",
  破: "casser",
  谜: "puzzle",
  间: "entre",
  无: "aucun",
  六: "six",
  耳: "Oreille",
  止: "fin",
  一: "un",
  望: "voir",
  舍: "Abandonner",
  慈: "CI",
  悲: "triste",
  长: "long",
  罢: "arrêt",
  永: "pour toujours",
  忘: "oublier",
  恩: "gentillesse",
  今: "maintenant",
  有: "avoir",
  缘: "bord",
  亦: "ainsi que",
  既: "maintenant que",
  识: "connaissance",
  仔: "jeune",
  细: "mince",
  当: "quand",
  叩: "frappe",
  谢: "Merci",
  洗: "laver",
  用: "utiliser",
  心: "Cœur",
  于: "À",
  云: "nuage",
  显: "Montrer",
  密: "dense",
  圆: "rond",
  通: "Passer",
  真: "réel",
  惜: "Chérir",
  修: "construire",
  命: "vie",
  都: "Tous",
  总: "total",
  精: "Raffiné",
  气: "gaz",
  神: "Dieu",
  谨: "Être prudent",
  固: "solide",
  牢: "prison",
  藏: "Tibétain",
  休: "arrêt",
  漏: "fuir",
  泄: "secouer",
  体: "corps",
  汝: "Toi",
  受: "par",
  吾: "je",
  昌: "Changler",
  记: "souviens-toi",
  益: "avantageux",
  屏: "écran",
  除: "retirer",
  邪: "mal",
  欲: "vouloir",
  清: "clair",
  凉: "froid",
  光: "Lumière",
  皎: "brillant",
  洁: "faire le ménage",
  好: "bien",
  向: "Vers",
  台: "tour",
  赏: "récompense",
  明: "brillant",
  月: "lune",
  玉: "Jade",
  兔: "lapin",
  乌: "Wu",
  龟: "tortue",
  蛇: "serpent",
  结: "Noeud",
  性: "sexe",
  坚: "Fort",
  能: "capable",
  火: "feu",
  种: "gentil",
  莲: "lotus",
  攒: "Sauvegarder",
  簇: "grappe",
  五: "cinq",
  行: "D'ACCORD",
  颠: "Loin",
  倒: "automne",
  功: "réalisation",
  完: "sur",
  随: "Avec",
  佛: "Bouddha",
  和: "et",
  仙: "Fée",
};

const tianwen_translation_map_en = {
  你看他从旧路径至后门外: "Look at him from the old path to the back door",
  只见那门儿半开半掩: "I saw that the door was half open and half closed",
  悟空喜道: "Wukong's joy",
  老师父果然注意与我传道:
    "My teacher is indeed paying attention to preaching to me",
  故此开着门也: "Therefore, the door is open",
  即曳步近前: "Go closer",
  侧身进得门里: "Go sideways into the door",
  只走到祖师寝榻之下: "Just walk under the ancestor's bed",
  见祖师蜷局身躯: "Seeing the ancestor curled up",
  朝里睡着了: "Sleeping inward",
  悟空不敢惊动: "Wukong dared not be alarmed",
  即跪在榻前: "Kneel in front of the couch",
  那祖师不多时觉来: "The ancestors came to see each other for a while.",
  舒开两足: "Relax both feet",
  口中自吟道: "Singing in his mouth",
  难: "Disaster",
  难: "Disaster",
  难: "Disaster",
  道最玄: "The most mysterious Tao",
  莫把金丹作等闲: "Don't use the golden elixir as a leisurely",
  不遇至人传妙诀: "The wonderful secret of passing on no one's success",
  空言口困舌头干: "Dry tongue with empty words",
  悟空应声叫道: "Wukong shouted",
  师父: "Master",
  弟子在此跪候多时: "My disciple knelt here for a long time",
  祖师闻得声音是悟空: "The ancestor heard the sound of Wukong",
  即起披衣: "Get up and put on your clothes",
  盘坐喝道: "Sitting cross-legged and shouting",
  这猢狲: "This money",
  你不在前边去睡: "You're not going to sleep in front of you",
  却来我这后边作甚: "But I'm here to do something later",
  悟空道: "Wukong Tao",
  师父昨日坛前对众相允:
    "Master agreed to everyone in front of the altar yesterday",
  教弟子三更时候: "Teach disciples at the third update",
  从后门里传我道理: "Passing me from the backdoor",
  故此大胆径拜老爷榻下: "Therefore, I boldly worship the master under the bed",
  祖师听说: "The ancestor heard",
  十分欢喜: "Very happy",
  暗自寻思道: "Thinking secretly",
  这厮果然是个天地生成的: "This guy is indeed born from heaven and earth",
  不然: "otherwise",
  何就打破我盘中之暗谜也: "Why break the mystery in my plate",
  悟空道: "Wukong Tao",
  此间更无六耳: "There are no six ears here",
  止只弟子一人: "Only one disciple",
  望师父大舍慈悲: "I hope Master will give up his compassion",
  传与我长生之道罢: "Let me pass on the way to immortality",
  永不忘恩: "Never forget your kindness",
  祖师道: "The Patriarch's Way",
  你今有缘: "You're destined to be",
  我亦喜说: "I also like to say",
  既识得盘中暗谜: "Know the secret mystery in the market",
  你近前来: "You're coming closer",
  仔细听之: "Listen carefully",
  当传与你长生之妙道也:
    "It is to spread the wonderful way of immortality to you",
  悟空叩头谢了: "Wukong kowtowed and thanked",
  洗耳用心: "Ear washing with care",
  跪于榻下: "Kneel under the couch",
  祖师云: "The ancestor cloud",
  显密圆通真妙诀: "The true secret of exoteric and esoteric enlightenment",
  惜修生命无他说: "Nothing else to say about cherishing life",
  都来总是精气神: "Always come with energy and spirit",
  谨固牢藏休漏泄: "Be careful to hide and avoid leaking",
  休漏泄: "Don't leak",
  体中藏: "Hidden in the body",
  汝受吾传道自昌: "You will be prosperous after receiving my preaching",
  口诀记来多有益: "How beneficial is the mantra",
  屏除邪欲得清凉: "I want to cool down",
  得清凉: "Have cool",
  光皎洁: "Light and clean",
  好向丹台赏明月: "Good to enjoy the bright moon from Dantai",
  月藏玉兔日藏乌: "The moon hides jade rabbit and sun hides black",
  自有龟蛇相盘结: "There is a turtle and snake image knot",
  相盘结: "Photo disc knot",
  性命坚: "Strong life",
  却能火里种金莲: "But can plant golden lotus in fire",
  攒簇五行颠倒用: "Use the five elements to reverse",
  功完随作佛和仙:
    "After completing the work, you will become a Buddha and an immortal",
};

const tianwen_translation_map_de = {
  你看他从旧路径至后门外: "Schau ihn vom alten Weg zur Hintertür an",
  只见那门儿半开半掩:
    "Ich sah, dass die Tür halb offen und halb geschlossen war",
  悟空喜道: "Wukongs Freude",
  老师父果然注意与我传道:
    "Mein Lehrer achtet in der Tat darauf, mir zu predigen",
  故此开着门也: "Daher ist die Tür offen",
  即曳步近前: "Gehen Sie näher",
  侧身进得门里: "Geh seitwärts in die Tür",
  只走到祖师寝榻之下: "Gehen Sie einfach unter dem Bett des Vorfahren",
  见祖师蜷局身躯: "Der Vorfahren zusammenbrach sehen",
  朝里睡着了: "Nach innen schlafen",
  悟空不敢惊动: "Wukong wagte es nicht alarmiert zu werden",
  即跪在榻前: "Knien vor der Couch",
  那祖师不多时觉来: "Die Vorfahren kamen eine Weile, um sich zu sehen.",
  舒开两足: "Entspannen Sie beide Füße",
  口中自吟道: "In seinem Mund singen",
  难: "Katastrophe",
  难: "Katastrophe",
  难: "Katastrophe",
  道最玄: "Das mysteriöseste Tao",
  莫把金丹作等闲: "Verwenden Sie das goldene Elixier nicht als gemächlich",
  不遇至人传妙诀: "Das wunderbare Geheimnis, niemanden Erfolg weiterzugeben",
  空言口困舌头干: "Trockene Zunge mit leeren Worten",
  悟空应声叫道: "Schrie Wukong",
  师父: "Master",
  弟子在此跪候多时: "Mein Schüler kniete sich hier für eine lange Zeit",
  祖师闻得声音是悟空: "Der Vorfahr hörte das Geräusch von Wukong",
  即起披衣: "Steh auf und ziehe deine Kleidung an",
  盘坐喝道: "Sitzen mit gekreuzten Beinen und Schreien",
  这猢狲: "Dieses Geld",
  你不在前边去睡: "Du gehst nicht vor dir schlafen",
  却来我这后边作甚: "Aber ich bin hier, um später etwas zu tun",
  悟空道: "Wukong Tao",
  师父昨日坛前对众相允: "Der Meister stimmte gestern allen vor dem Altar zu",
  教弟子三更时候: "Unterrichten Sie Jünger beim dritten Update",
  从后门里传我道理: "Ich gehe mir von der Hintertür aus",
  故此大胆径拜老爷榻下: "Deshalb verehre ich den Meister mutig unter dem Bett",
  祖师听说: "Der Vorfahr hörte",
  十分欢喜: "Sehr glücklich",
  暗自寻思道: "Heimlich denken",
  这厮果然是个天地生成的:
    "Dieser Typ ist in der Tat aus Himmel und Erde geboren",
  不然: "ansonsten",
  何就打破我盘中之暗谜也: "Warum das Geheimnis in meinem Teller brechen?",
  悟空道: "Wukong Tao",
  此间更无六耳: "Hier gibt es keine sechs Ohren",
  止只弟子一人: "Nur ein Schüler",
  望师父大舍慈悲: "Ich hoffe, der Meister wird sein Mitgefühl aufgeben",
  传与我长生之道罢: "Lassen Sie mich den Weg zur Unsterblichkeit weitergeben",
  永不忘恩: "Vergiss niemals deine Freundlichkeit",
  祖师道: "Der Weg des Patriarchen",
  你今有缘: "Du bist dazu bestimmt zu sein",
  我亦喜说: "Ich sage auch gerne",
  既识得盘中暗谜: "Kennen Sie das geheime Geheimnis auf dem Markt",
  你近前来: "Du kommst näher",
  仔细听之: "Hören Sie genau zu",
  当传与你长生之妙道也: "Es ist die wunderbare Art, für Sie zu leben",
  悟空叩头谢了: "Wukong kowtowed und dankte dankte",
  洗耳用心: "Ohrwäsche mit Sorgfalt",
  跪于榻下: "Knie unter der Couch",
  祖师云: "Die Vorfahrwolke",
  显密圆通真妙诀:
    "Das wahre Geheimnis der exoterischen und esoterischen Erleuchtung",
  惜修生命无他说: "Nichts anderes zu sagen über das Schätzen das Leben",
  都来总是精气神: "Komm immer mit Energie und Geist",
  谨固牢藏休漏泄: "Achten Sie darauf, sich zu verbergen und zu verlassen",
  休漏泄: "Leck nicht",
  体中藏: "Im Körper versteckt",
  汝受吾传道自昌:
    "Sie werden wohlhabend sein, nachdem Sie meine Predigt erhalten haben",
  口诀记来多有益: "Wie vorteilhaft ist das Mantra",
  屏除邪欲得清凉: "Ich möchte mich abkühlen",
  得清凉: "Kühl haben",
  光皎洁: "Leicht und sauber",
  好向丹台赏明月: "Gut, den hellen Mond von Dantai zu genießen",
  月藏玉兔日藏乌: "Der Mond verbirgt Jade Rabbit und Sonne versteckt schwarz",
  自有龟蛇相盘结: "Es gibt eine Schildkröte- und Schlangenbildknoten",
  相盘结: "Foto -Disc -Knoten",
  性命坚: "Starkes Leben",
  却能火里种金莲: "Kann aber goldenes Lotus im Feuer pflanzen",
  攒簇五行颠倒用: "Verwenden Sie die fünf Elemente, um sich umzukehren",
  功完随作佛和仙:
    "Nach Abschluss der Arbeit werden Sie ein Buddha und ein Unsterblicher",
};

const tianwen_translation_map_fr = {
  你看他从旧路径至后门外:
    "Regardez-le depuis l'ancien chemin jusqu'à la porte arrière",
  只见那门儿半开半掩:
    "J'ai vu que la porte était à moitié ouverte et à moitié fermée",
  悟空喜道: "La joie de Wukong",
  老师父果然注意与我传道: "Mon professeur fait en effet attention à me prêcher",
  故此开着门也: "Par conséquent, la porte est ouverte",
  即曳步近前: "Se rapprocher",
  侧身进得门里: "Aller sur le côté dans la porte",
  只走到祖师寝榻之下: "Marchez juste sous le lit de l'ancêtre",
  见祖师蜷局身躯: "Voir l'ancêtre recroquevillé",
  朝里睡着了: "Dormir vers l'intérieur",
  悟空不敢惊动: "Wukong n'a pas osé être alarmé",
  即跪在榻前: "S'agenouiller devant le canapé",
  那祖师不多时觉来: "Les ancêtres sont venus se voir pendant un certain temps.",
  舒开两足: "Détendez les deux pieds",
  口中自吟道: "Chanter dans sa bouche",
  难: "Catastrophe",
  难: "Catastrophe",
  难: "Catastrophe",
  道最玄: "Le Tao le plus mystérieux",
  莫把金丹作等闲: "N'utilisez pas l'élixir doré comme un tranquillement",
  不遇至人传妙诀: "Le merveilleux secret de la réussite du succès de personne",
  空言口困舌头干: "Langue sèche avec des mots vides",
  悟空应声叫道: "Wukong a crié",
  师父: "Maître",
  弟子在此跪候多时: "Mon disciple s'est agenouillé ici pendant longtemps",
  祖师闻得声音是悟空: "L'ancêtre a entendu le son de Wukong",
  即起披衣: "Se lever et mettre vos vêtements",
  盘坐喝道: "Assis des jambes croisées et cris",
  这猢狲: "Cet argent",
  你不在前边去睡: "Tu ne te couche pas devant toi",
  却来我这后边作甚: "Mais je suis ici pour faire quelque chose plus tard",
  悟空道: "Wukong Tao",
  师父昨日坛前对众相允: "Maître a accepté tout le monde devant l'autel hier",
  教弟子三更时候: "Enseigner les disciples à la troisième mise à jour",
  从后门里传我道理: "Me passer de la porte dérobée",
  故此大胆径拜老爷榻下:
    "Par conséquent, j'adore hardiment le maître sous le lit",
  祖师听说: "L'ancêtre a entendu",
  十分欢喜: "Très heureux",
  暗自寻思道: "Penser secrètement",
  这厮果然是个天地生成的: "Ce mec est en effet né du ciel et de la terre",
  不然: "sinon",
  何就打破我盘中之暗谜也: "Pourquoi briser le mystère dans mon assiette",
  悟空道: "Wukong Tao",
  此间更无六耳: "Il n'y a pas de six oreilles ici",
  止只弟子一人: "Un seul disciple",
  望师父大舍慈悲: "J'espère que Maître abandonnera sa compassion",
  传与我长生之道罢: "Laissez-moi passer sur le chemin de l'immortalité",
  永不忘恩: "N'oubliez jamais votre gentillesse",
  祖师道: "La voie du patriarche",
  你今有缘: "Tu es destiné à être",
  我亦喜说: "J'aime aussi dire",
  既识得盘中暗谜: "Connaître le mystère secret sur le marché",
  你近前来: "Tu te rapproche",
  仔细听之: "Écouter attentivement",
  当传与你长生之妙道也: "C'est la merveilleuse façon de vivre pour toi",
  悟空叩头谢了: "Wukong kowtowed et remercié",
  洗耳用心: "Lavage de l'oreille avec soin",
  跪于榻下: "S'agenouiller sous le canapé",
  祖师云: "Le nuage d'ancêtre",
  显密圆通真妙诀: "Le vrai secret de l'illumination exotérique et ésotérique",
  惜修生命无他说: "Rien d'autre à dire sur la vie chérir",
  都来总是精气神: "Viens toujours avec l'énergie et l'esprit",
  谨固牢藏休漏泄: "Veillez à vous cacher et à éviter de fuir",
  休漏泄: "Ne fuit pas",
  体中藏: "Caché dans le corps",
  汝受吾传道自昌: "Vous serez prospère après avoir reçu ma prédication",
  口诀记来多有益: "Dans quelle mesure le mantra est-il bénéfique",
  屏除邪欲得清凉: "Je veux refroidir",
  得清凉: "Se moquer de",
  光皎洁: "Léger et propre",
  好向丹台赏明月: "Bon pour profiter de la lune brillante du dantai",
  月藏玉兔日藏乌: "La lune cache le lapin jade et le soleil se cache noir",
  自有龟蛇相盘结: "Il y a un nœud d'image de tortue et de serpent",
  相盘结: "Nœud de disque photo",
  性命坚: "Vie forte",
  却能火里种金莲: "Mais peut planter du lotus doré dans le feu",
  攒簇五行颠倒用: "Utilisez les cinq éléments pour inverser",
  功完随作佛和仙:
    "Après avoir terminé le travail, vous deviendrez un Bouddha et un immortel",
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
