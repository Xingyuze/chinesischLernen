const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `好猴王
念声咒语
驾阵狂风
云头落下
叫
孩儿们
睁眼
众猴脚屣实地
认得是家乡
个个欢喜
都奔洞门旧路
那在洞众猴
都一齐簇拥同入
分班齿序
礼拜猴王
安排酒果
接风贺喜
启问降魔救子之事
悟空备细言了一遍
众猴称扬不尽道
大王去到那方
不意学得这般手段
悟空又道
我当年别汝等
随波逐流
飘过东洋大海
径至南赡部洲
学成人像
着此衣
穿此履
摆摆摇摇
云游八九年馀
更不曾有道
又渡西洋大海
到西牛贺洲地界
访问多时
幸遇一老祖
传了我与天同寿的真功果
不死长生的大法门
众猴称贺
都道
万劫难逢也
悟空又笑道
小的们
又喜我这一门皆有姓氏
众猴道
大王何姓
悟空道
我今姓孙
法名悟空
众猴闻说
鼓掌忻然道
大王是老孙
我们都是二孙
三孙
细孙
小孙
一家孙
一国孙
一窝孙矣
都来奉承老孙
大盆小碗的
椰子酒
葡萄酒
仙花
仙果
真个是合家欢乐
咦
贯通一姓身归本
只待荣迁仙录箓名
毕竟不知怎生结果
居此界终始如何
且听下回分解`;

const pinyinMap = {
  好: "hǎo",
  猴: "hóu",
  王: "wáng",
  念: "niàn",
  声: "shēng",
  咒: "zhòu",
  语: "yǔ",
  驾: "jià",
  阵: "zhèn",
  狂: "kuáng",
  风: "fēng",
  云: "yún",
  头: "tóu",
  落: "là",
  下: "xià",
  叫: "jiào",
  孩: "hái",
  儿: "ér",
  们: "men",
  睁: "zhēng",
  眼: "yǎn",
  众: "zhòng",
  脚: "jiǎo",
  屣: "xǐ",
  实: "shí",
  地: "dì",
  认: "rèn",
  得: "de",
  是: "shì",
  家: "jiā",
  乡: "xiāng",
  个: "gè",
  欢: "huān",
  喜: "xǐ",
  都: "dōu",
  奔: "bēn",
  洞: "dòng",
  门: "mén",
  旧: "jiù",
  路: "lù",
  那: "nà",
  在: "zài",
  一: "yī",
  齐: "qí",
  簇: "cù",
  拥: "yōng",
  同: "tóng",
  入: "rù",
  分: "fēn",
  班: "bān",
  齿: "chǐ",
  序: "xù",
  礼: "lǐ",
  拜: "bài",
  安: "ān",
  排: "pái",
  酒: "jiǔ",
  果: "guǒ",
  接: "jiē",
  贺: "hè",
  启: "qǐ",
  问: "wèn",
  降: "jiàng",
  魔: "mó",
  救: "jiù",
  子: "zi",
  之: "zhī",
  事: "shì",
  悟: "wù",
  空: "kōng",
  备: "bèi",
  细: "xì",
  言: "yán",
  了: "le",
  遍: "biàn",
  称: "chēng",
  扬: "yáng",
  不: "bù",
  尽: "jìn",
  道: "dào",
  大: "dà",
  去: "qù",
  到: "dào",
  方: "fāng",
  意: "yì",
  学: "xué",
  这: "zhè",
  般: "bān",
  手: "shǒu",
  段: "duàn",
  又: "yòu",
  我: "wǒ",
  当: "dāng",
  年: "nián",
  别: "bié",
  汝: "rǔ",
  等: "děng",
  随: "suí",
  波: "bō",
  逐: "zhú",
  流: "liú",
  飘: "piāo",
  过: "guò",
  东: "dōng",
  洋: "yáng",
  海: "hǎi",
  径: "jìng",
  至: "zhì",
  南: "nán",
  赡: "shàn",
  部: "bù",
  洲: "zhōu",
  成: "chéng",
  人: "rén",
  像: "xiàng",
  着: "zhe",
  此: "cǐ",
  衣: "yī",
  穿: "chuān",
  履: "lǚ",
  摆: "bǎi",
  摇: "yáo",
  游: "yóu",
  八: "bā",
  九: "jiǔ",
  馀: "yú",
  更: "gèng",
  曾: "céng",
  有: "yǒu",
  渡: "dù",
  西: "xī",
  牛: "niú",
  界: "jiè",
  访: "fǎng",
  多: "duō",
  时: "shí",
  幸: "xìng",
  遇: "yù",
  老: "lǎo",
  祖: "zǔ",
  传: "chuán",
  与: "yǔ",
  天: "tiān",
  寿: "shòu",
  的: "de",
  真: "zhēn",
  功: "gōng",
  死: "sǐ",
  长: "cháng",
  生: "shēng",
  法: "fǎ",
  万: "wàn",
  劫: "jié",
  难: "nàn",
  逢: "féng",
  也: "yě",
  笑: "xiào",
  小: "xiǎo",
  皆: "jiē",
  姓: "xìng",
  氏: "shì",
  何: "hé",
  今: "jīn",
  孙: "sūn",
  名: "míng",
  闻: "wén",
  说: "shuō",
  鼓: "gǔ",
  掌: "zhǎng",
  忻: "xīn",
  然: "rán",
  二: "èr",
  三: "sān",
  国: "guó",
  窝: "wō",
  矣: "yǐ",
  来: "lái",
  奉: "fèng",
  承: "chéng",
  盆: "pén",
  碗: "wǎn",
  椰: "yē",
  葡: "pú",
  萄: "táo",
  仙: "xiān",
  花: "huā",
  合: "hé",
  乐: "lè",
  咦: "yí",
  贯: "guàn",
  通: "tōng",
  身: "shēn",
  归: "guī",
  本: "běn",
  只: "zhǐ",
  待: "dài",
  荣: "róng",
  迁: "qiān",
  录: "lù",
  箓: "lù",
  毕: "bì",
  竟: "jìng",
  知: "zhī",
  怎: "zěn",
  结: "jié",
  居: "jū",
  终: "zhōng",
  始: "shǐ",
  如: "rú",
  且: "qiě",
  听: "tīng",
  回: "huí",
  解: "jiě",
};

const translations_en = {
  好: "good",
  猴: "monkey",
  王: "king",
  念: "read",
  声: "Voice",
  咒: "curse",
  语: "language",
  驾: "drive",
  阵: "Array",
  狂: "mad",
  风: "wind",
  云: "cloud",
  头: "head",
  落: "fall",
  下: "Down",
  叫: "Call",
  孩: "child",
  儿: "Son",
  们: "We",
  睁: "open eyes",
  眼: "Eye",
  众: "All",
  脚: "foot",
  屣: "slipper",
  实: "Reality",
  地: "land",
  认: "recognize",
  得: "have to",
  是: "yes",
  家: "Home",
  乡: "Township",
  个: "indivual",
  欢: "joyous",
  喜: "happiness",
  都: "All",
  奔: "Run",
  洞: "Hole",
  门: "Door",
  旧: "old",
  路: "road",
  那: "That",
  在: "exist",
  一: "one",
  齐: "together",
  簇: "cluster",
  拥: "Embrace",
  同: "same",
  入: "enter",
  分: "point",
  班: "class",
  齿: "tooth",
  序: "sequence",
  礼: "present",
  拜: "bye",
  安: "install",
  排: "Row",
  酒: "liquor",
  果: "fruit",
  接: "catch",
  贺: "Congratulations",
  启: "start",
  问: "ask",
  降: "drop",
  魔: "magic",
  救: "save",
  子: "son",
  之: "Of",
  事: "thing",
  悟: "Enlightenment",
  空: "null",
  备: "Prepare",
  细: "thin",
  言: "Word",
  了: "It's",
  遍: "all over",
  称: "say",
  扬: "Yang",
  不: "No",
  尽: "All",
  道: "road",
  大: "big",
  去: "go",
  到: "arrive",
  方: "square",
  意: "meaning",
  学: "study",
  这: "this",
  般: "Normal",
  手: "hand",
  段: "part",
  又: "again",
  我: "I",
  当: "when",
  年: "Year",
  别: "Don't",
  汝: "You",
  等: "wait",
  随: "With",
  波: "Wave",
  逐: "By",
  流: "flow",
  飘: "float",
  过: "Pass",
  东: "East",
  洋: "foreign",
  海: "ocean",
  径: "path",
  至: "to",
  南: "South",
  赡: "support",
  部: "department",
  洲: "Continent",
  成: "become",
  人: "people",
  像: "picture",
  着: "Put",
  此: "this",
  衣: "Clothes",
  穿: "wear",
  履: "shoe",
  摆: "put",
  摇: "shake",
  游: "tour",
  八: "eight",
  九: "Nine",
  馀: "Remaining",
  更: "Even",
  曾: "ever",
  有: "have",
  渡: "Ferry",
  西: "West",
  牛: "ox",
  界: "boundary",
  访: "visit",
  多: "many",
  时: "hour",
  幸: "fortunate",
  遇: "Meet",
  老: "old",
  祖: "Ancestor",
  传: "pass",
  与: "and",
  天: "sky",
  寿: "life",
  的: "of",
  真: "real",
  功: "achievement",
  死: "die",
  长: "long",
  生: "born",
  法: "Law",
  万: "Ten thousand",
  劫: "Calamity",
  难: "Disaster",
  逢: "Every",
  也: "also",
  笑: "laugh",
  小: "Small",
  皆: "all",
  姓: "surname",
  氏: "英语",
  何: "what",
  今: "now",
  孙: "Sun",
  名: "name",
  闻: "smell",
  说: "explain",
  鼓: "drum",
  掌: "Palm",
  忻: "Xin",
  然: "Of course",
  二: "two",
  三: "three",
  国: "country",
  窝: "nest",
  矣: "It's OK",
  来: "Come",
  奉: "Feng",
  承: "Inherited",
  盆: "pot",
  碗: "bowl",
  椰: "Coconut",
  葡: "Portugal",
  萄: "Grapes",
  仙: "Fairy",
  花: "flower",
  合: "combine",
  乐: "happy",
  咦: "Huh",
  贯: "Guan",
  通: "Pass",
  身: "body",
  归: "Go home",
  本: "Book",
  只: "Only",
  待: "treat",
  荣: "Honor",
  迁: "move",
  录: "record",
  箓: "Talisman",
  毕: "complete",
  竟: "actually",
  知: "Know",
  怎: "How",
  结: "Knot",
  居: "Residence",
  终: "end",
  始: "beginning",
  如: "like",
  且: "and",
  听: "listen",
  回: "Back",
  解: "untie",
};

const translations_de = {
  好: "Gut",
  猴: "Affe",
  王: "König",
  念: "lesen",
  声: "Stimme",
  咒: "Fluch",
  语: "Sprache",
  驾: "fahren",
  阵: "Array",
  狂: "verrückt",
  风: "Wind",
  云: "Wolke",
  头: "Kopf",
  落: "fallen",
  下: "Runter",
  叫: "Anruf",
  孩: "Kind",
  儿: "Sohn",
  们: "Wir",
  睁: "Augen auf",
  眼: "Auge",
  众: "Alle",
  脚: "Fuß",
  屣: "Slipper",
  实: "Wirklichkeit",
  地: "Land",
  认: "erkennen",
  得: "müssen",
  是: "Ja",
  家: "Heim",
  乡: "Gemeinde",
  个: "indival",
  欢: "freudig",
  喜: "Glück",
  都: "Alle",
  奔: "Laufen",
  洞: "Loch",
  门: "Tür",
  旧: "alt",
  路: "Straße",
  那: "Das",
  在: "existieren",
  一: "eins",
  齐: "zusammen",
  簇: "Cluster",
  拥: "Umarmen",
  同: "Dasselbe",
  入: "eingeben",
  分: "Punkt",
  班: "Klasse",
  齿: "Zahn",
  序: "Sequenz",
  礼: "gegenwärtig",
  拜: "Tschüss",
  安: "installieren",
  排: "Reihe",
  酒: "Alkohol",
  果: "Obst",
  接: "fangen",
  贺: "Glückwunsch",
  启: "Start",
  问: "fragen",
  降: "fallen",
  魔: "Magie",
  救: "speichern",
  子: "Sohn",
  之: "Von",
  事: "Ding",
  悟: "Aufklärung",
  空: "NULL",
  备: "Vorbereiten",
  细: "dünn",
  言: "Wort",
  了: "Es ist",
  遍: "Überall",
  称: "sagen",
  扬: "Yang",
  不: "NEIN",
  尽: "Alle",
  道: "Straße",
  大: "groß",
  去: "gehen",
  到: "ankommen",
  方: "Quadrat",
  意: "Bedeutung",
  学: "Studie",
  这: "Das",
  般: "Normal",
  手: "Hand",
  段: "Teil",
  又: "wieder",
  我: "ICH",
  当: "Wann",
  年: "Jahr",
  别: "Nicht",
  汝: "Du",
  等: "Warten",
  随: "Mit",
  波: "Welle",
  逐: "Von",
  流: "fließen",
  飘: "schweben",
  过: "Passieren",
  东: "Ost",
  洋: "ausländisch",
  海: "Ozean",
  径: "Weg",
  至: "Zu",
  南: "Süden",
  赡: "Unterstützung",
  部: "Abteilung",
  洲: "Kontinent",
  成: "werden",
  人: "Menschen",
  像: "Bild",
  着: "Setzen",
  此: "Das",
  衣: "Kleidung",
  穿: "tragen",
  履: "Schuh",
  摆: "setzen",
  摇: "Shake",
  游: "Tour",
  八: "acht",
  九: "Neun",
  馀: "Übrig",
  更: "Sogar",
  曾: "immer",
  有: "haben",
  渡: "Fähre",
  西: "West",
  牛: "Ochse",
  界: "Grenze",
  访: "besuchen",
  多: "viele",
  时: "Stunde",
  幸: "glücklich",
  遇: "Treffen",
  老: "alt",
  祖: "Vorfahr",
  传: "passieren",
  与: "Und",
  天: "Himmel",
  寿: "Leben",
  的: "von",
  真: "real",
  功: "Leistung",
  死: "sterben",
  长: "lang",
  生: "geboren",
  法: "Gesetz",
  万: "Zehntausend",
  劫: "Unglück",
  难: "Katastrophe",
  逢: "Jeder",
  也: "Auch",
  笑: "lachen",
  小: "Klein",
  皆: "alle",
  姓: "Nachname",
  氏: "英语",
  何: "Was",
  今: "Jetzt",
  孙: "Sonne",
  名: "Name",
  闻: "Geruch",
  说: "erklären",
  鼓: "Trommel",
  掌: "Palme",
  忻: "Xin",
  然: "Natürlich",
  二: "zwei",
  三: "drei",
  国: "Land",
  窝: "Nest",
  矣: "Es ist in Ordnung",
  来: "Kommen",
  奉: "Feng",
  承: "Geerbt",
  盆: "Pot",
  碗: "Schüssel",
  椰: "Kokosnuss",
  葡: "Portugal",
  萄: "Trauben",
  仙: "Fee",
  花: "Blume",
  合: "kombinieren",
  乐: "Glücklich",
  咦: "Huh",
  贯: "Guan",
  通: "Passieren",
  身: "Körper",
  归: "Nach Hause gehen",
  本: "Buch",
  只: "Nur",
  待: "behandeln",
  荣: "Ehre",
  迁: "bewegen",
  录: "aufzeichnen",
  箓: "Talisman",
  毕: "vollständig",
  竟: "Genau genommen",
  知: "Wissen",
  怎: "Wie",
  结: "Knoten",
  居: "Residenz",
  终: "Ende",
  始: "Anfang",
  如: "wie",
  且: "Und",
  听: "Hören",
  回: "Zurück",
  解: "lösen",
};

const translations_fr = {
  好: "bien",
  猴: "singe",
  王: "roi",
  念: "lire",
  声: "Voix",
  咒: "malédiction",
  语: "langue",
  驾: "conduire",
  阵: "Tableau",
  狂: "fou",
  风: "vent",
  云: "nuage",
  头: "tête",
  落: "automne",
  下: "Vers le bas",
  叫: "Appel",
  孩: "enfant",
  儿: "Fils",
  们: "Nous",
  睁: "yeux ouverts",
  眼: "Œil",
  众: "Tous",
  脚: "pied",
  屣: "pantoufle",
  实: "Réalité",
  地: "atterrir",
  认: "reconnaître",
  得: "devoir",
  是: "Oui",
  家: "Maison",
  乡: "Canton",
  个: "autonome",
  欢: "joyeux",
  喜: "bonheur",
  都: "Tous",
  奔: "Courir",
  洞: "Trou",
  门: "Porte",
  旧: "vieux",
  路: "route",
  那: "Que",
  在: "exister",
  一: "un",
  齐: "ensemble",
  簇: "grappe",
  拥: "Embrasser",
  同: "même",
  入: "entrer",
  分: "indiquer",
  班: "classe",
  齿: "dent",
  序: "séquence",
  礼: "présent",
  拜: "au revoir",
  安: "installer",
  排: "Rangée",
  酒: "alcool",
  果: "fruit",
  接: "attraper",
  贺: "Félicitations",
  启: "commencer",
  问: "demander",
  降: "baisse",
  魔: "magie",
  救: "sauvegarder",
  子: "fils",
  之: "De",
  事: "chose",
  悟: "Éclaircissement",
  空: "nul",
  备: "Préparer",
  细: "mince",
  言: "Mot",
  了: "C'est",
  遍: "partout",
  称: "dire",
  扬: "Yang",
  不: "Non",
  尽: "Tous",
  道: "route",
  大: "grand",
  去: "aller",
  到: "arriver",
  方: "carré",
  意: "signification",
  学: "étude",
  这: "ce",
  般: "Normale",
  手: "main",
  段: "partie",
  又: "encore",
  我: "je",
  当: "quand",
  年: "Année",
  别: "Ne le faites pas",
  汝: "Toi",
  等: "attendez",
  随: "Avec",
  波: "Vague",
  逐: "Par",
  流: "couler",
  飘: "flotter",
  过: "Passer",
  东: "Est",
  洋: "étranger",
  海: "océan",
  径: "chemin",
  至: "à",
  南: "Sud",
  赡: "soutien",
  部: "département",
  洲: "Continent",
  成: "devenir",
  人: "personnes",
  像: "image",
  着: "Mettre",
  此: "ce",
  衣: "Vêtements",
  穿: "porter",
  履: "chaussure",
  摆: "mettre",
  摇: "secouer",
  游: "tournée",
  八: "huit",
  九: "Neuf",
  馀: "Restant",
  更: "Même",
  曾: "jamais",
  有: "avoir",
  渡: "Traversier",
  西: "Ouest",
  牛: "bœuf",
  界: "limite",
  访: "visite",
  多: "beaucoup",
  时: "heure",
  幸: "heureux",
  遇: "Rencontrer",
  老: "vieux",
  祖: "Ancêtre",
  传: "passer",
  与: "et",
  天: "ciel",
  寿: "vie",
  的: "de",
  真: "réel",
  功: "réalisation",
  死: "mourir",
  长: "long",
  生: "né",
  法: "Loi",
  万: "Dix mille",
  劫: "Calamité",
  难: "Catastrophe",
  逢: "Chaque",
  也: "aussi",
  笑: "rire",
  小: "Petit",
  皆: "tous",
  姓: "nom de famille",
  氏: "英语",
  何: "quoi",
  今: "maintenant",
  孙: "Soleil",
  名: "nom",
  闻: "odeur",
  说: "expliquer",
  鼓: "tambour",
  掌: "Palmier",
  忻: "Xin",
  然: "Bien sûr",
  二: "deux",
  三: "trois",
  国: "pays",
  窝: "nid",
  矣: "C'est bon",
  来: "Viens",
  奉: "Feng",
  承: "Hérité",
  盆: "pot",
  碗: "bol",
  椰: "Noix de coco",
  葡: "Portugal",
  萄: "Raisins",
  仙: "Fée",
  花: "fleur",
  合: "combiner",
  乐: "heureux",
  咦: "Hein",
  贯: "Guan",
  通: "Passer",
  身: "corps",
  归: "Rentrer chez eux",
  本: "Livre",
  只: "Seulement",
  待: "traiter",
  荣: "Honneur",
  迁: "se déplacer",
  录: "enregistrer",
  箓: "Talisman",
  毕: "complet",
  竟: "en fait",
  知: "Savoir",
  怎: "Comment",
  结: "Noeud",
  居: "Résidence",
  终: "fin",
  始: "début",
  如: "comme",
  且: "et",
  听: "écouter",
  回: "Dos",
  解: "délier",
};

const tianwen_translation_map_en = {
  好猴王: "Good Monkey King",
  念声咒语: "Reciting the spell",
  驾阵狂风: "Furious wind",
  云头落下: "The clouds fall",
  叫: "Call",
  孩儿们: "Children",
  睁眼: "Open your eyes",
  众猴脚屣实地: "Monkey feet in the real world",
  认得是家乡: "Recognize it as your hometown",
  个个欢喜: "Everyone is happy",
  都奔洞门旧路: "All are on the old road of Dongmen",
  那在洞众猴: "The monkeys in the cave",
  都一齐簇拥同入: "They all gathered together",
  分班齿序: "Sequence of the shift",
  礼拜猴王: "Worship the Monkey King",
  安排酒果: "Arrange wine and fruits",
  接风贺喜: "Greetings",
  启问降魔救子之事: "Qiwen's affairs to subdue demons and save children",
  悟空备细言了一遍: "Wukong Bei said it in detail",
  众猴称扬不尽道: "The monkeys are praised and cannot be praised",
  大王去到那方: "The king goes there",
  不意学得这般手段: "Unexpectedly learned this method",
  悟空又道: "Wukong said again",
  我当年别汝等: "I'll leave you waiting back then",
  随波逐流: "Go with the flow",
  飘过东洋大海: "Floating across the East Ocean",
  径至南赡部洲: "To the southern continent",
  学成人像: "Learn adult imaging",
  着此衣: "Wearing this dress",
  穿此履: "Wear this shoe",
  摆摆摇摇: "Swing and sway",
  云游八九年馀: "Traveling for more than eight or nine years",
  更不曾有道: "There has never been any truth",
  又渡西洋大海: "Crossing the Atlantic Sea",
  到西牛贺洲地界: "Go to Xiniu Hezhou",
  访问多时: "Visit for many times",
  幸遇一老祖: "Fortunately, I met an old ancestor",
  传了我与天同寿的真功果:
    "It conveyed the true achievements of my life with Tian.",
  不死长生的大法门: "The Great Way of Immortality",
  众猴称贺: "All monkeys say congratulations",
  都道: "All",
  万劫难逢也: "A disaster",
  悟空又笑道: "Wukong said with a smile again",
  小的们: "The young men",
  又喜我这一门皆有姓氏: "I also like my family has surnames",
  众猴道: "The monkeys",
  大王何姓: "King He",
  悟空道: "Wukong Tao",
  我今姓孙: "My surname is Sun",
  法名悟空: "Dharma name Wukong",
  众猴闻说: "The monkeys heard",
  鼓掌忻然道: "Applauding and saying happily",
  大王是老孙: "The king is the old grandson",
  我们都是二孙: "We are all second grandchildren",
  三孙: "Three grandsons",
  细孙: "Sei Sun",
  小孙: "Little grandson",
  一家孙: "A grandson",
  一国孙: "A grandson of a country",
  一窝孙矣: "A bunch of grandchildren",
  都来奉承老孙: "Everyone comes to flatter Lao Sun",
  大盆小碗的: "Large bowl with small bowl",
  椰子酒: "Coconut wine",
  葡萄酒: "wine",
  仙花: "Fairy flower",
  仙果: "Immortal Fruit",
  真个是合家欢乐: "It's really family happiness",
  咦: "Huh",
  贯通一姓身归本: "Comprehensive one surname to return to the original",
  只待荣迁仙录箓名:
    "Just waiting for honor to be transferred to the immortals and the name of the talisman",
  毕竟不知怎生结果: "After all, I don't know how the result will be",
  居此界终始如何: "How to live in this world",
  且听下回分解: "Let's hear the next breakdown",
};

const tianwen_translation_map_de = {
  好猴王: "Guter Affenkönig",
  念声咒语: "Den Zauber rezitieren",
  驾阵狂风: "Wütender Wind",
  云头落下: "Die Wolken fallen",
  叫: "Anruf",
  孩儿们: "Kinder",
  睁眼: "Öffne deine Augen",
  众猴脚屣实地: "Affenfüße in der realen Welt",
  认得是家乡: "Erkennen Sie es als Ihre Heimatstadt",
  个个欢喜: "Jeder ist glücklich",
  都奔洞门旧路: "Alle sind auf der alten Straße von Dongmen",
  那在洞众猴: "Die Affen in der Höhle",
  都一齐簇拥同入: "Sie alle versammelten sich zusammen",
  分班齿序: "Abfolge der Verschiebung",
  礼拜猴王: "Verehren Sie den Affenkönig",
  安排酒果: "Wein und Früchte arrangieren",
  接风贺喜: "Grüße",
  启问降魔救子之事:
    "Qiwens Angelegenheiten, um Dämonen zu unterwerfen und Kinder zu retten",
  悟空备细言了一遍: "Wukong Bei sagte es im Detail",
  众猴称扬不尽道: "Die Affen werden gelobt und können nicht gelobt werden",
  大王去到那方: "Der König geht dorthin",
  不意学得这般手段: "Unerwartet gelernt diese Methode",
  悟空又道: "Sagte Wukong erneut",
  我当年别汝等: "Ich werde dich damals warten lassen",
  随波逐流: "Mit dem Fluss gehen",
  飘过东洋大海: "Über den Osten von Ozean schweben",
  径至南赡部洲: "Auf den südlichen Kontinent",
  学成人像: "Lerne Erwachsenenbildgebung",
  着此衣: "Dieses Kleid tragen",
  穿此履: "Tragen Sie diesen Schuh",
  摆摆摇摇: "Schwingen und schwanken",
  云游八九年馀: "Reisen länger als acht oder neun Jahre",
  更不曾有道: "Es gab nie eine Wahrheit",
  又渡西洋大海: "Überqueren des Atlantischen Meeres",
  到西牛贺洲地界: "Geh nach Xiniu Hiszhou",
  访问多时: "Viele Male besuchen",
  幸遇一老祖: "Glücklicherweise traf ich einen alten Vorfahren",
  传了我与天同寿的真功果:
    "Es vermittelte die wahren Errungenschaften meines Lebens mit Tian.",
  不死长生的大法门: "Die große Art der Unsterblichkeit",
  众猴称贺: "Alle Affen sagen Glückwünsche",
  都道: "Alle",
  万劫难逢也: "Eine Katastrophe",
  悟空又笑道: "Sagte Wukong wieder mit einem Lächeln",
  小的们: "Die jungen Männer",
  又喜我这一门皆有姓氏: "Ich mag auch, dass meine Familie Nachnamen hat",
  众猴道: "Die Affen",
  大王何姓: "König er",
  悟空道: "Wukong Tao",
  我今姓孙: "Mein Nachname ist Sonne",
  法名悟空: "Dharma Name Wukong",
  众猴闻说: "Die Affen hörten",
  鼓掌忻然道: "Applaudieren und glücklich sagen",
  大王是老孙: "Der König ist der alte Enkel",
  我们都是二孙: "Wir sind alle zweite Enkelkinder",
  三孙: "Drei Enkel",
  细孙: "Sei Sonne",
  小孙: "Kleiner Enkel",
  一家孙: "Ein Enkel",
  一国孙: "Ein Enkel eines Landes",
  一窝孙矣: "Ein Haufen Enkelkinder",
  都来奉承老孙: "Jeder kommt, um die Sonne von Lao zu schmeicheln",
  大盆小碗的: "Große Schüssel mit kleinen Schüssel",
  椰子酒: "Kokoswein",
  葡萄酒: "Wein",
  仙花: "Feenblume",
  仙果: "Unsterbliche Frucht",
  真个是合家欢乐: "Es ist wirklich familiäres Glück",
  咦: "Huh",
  贯通一姓身归本: "Umfassender einen Nachnamen, um zum Original zurückzukehren",
  只待荣迁仙录箓名:
    "Ich warte nur darauf, dass die Ehre auf die Unsterblichen und den Namen des Talisman übertragen wird",
  毕竟不知怎生结果: "Immerhin weiß ich nicht, wie das Ergebnis sein wird",
  居此界终始如何: "Wie man in dieser Welt lebt",
  且听下回分解: "Lassen Sie uns den nächsten Zusammenbruch hören",
};

const tianwen_translation_map_fr = {
  好猴王: "Bon roi de singe",
  念声咒语: "Réciter le sort",
  驾阵狂风: "Vent furieux",
  云头落下: "Les nuages ​​tombent",
  叫: "Appel",
  孩儿们: "Enfants",
  睁眼: "Ouvrez les yeux",
  众猴脚屣实地: "Pieds de singe dans le monde réel",
  认得是家乡: "Reconnaissez-le comme votre ville natale",
  个个欢喜: "Tout le monde est heureux",
  都奔洞门旧路: "Tous sont sur l'ancienne route des dongmen",
  那在洞众猴: "Les singes dans la grotte",
  都一齐簇拥同入: "Ils se sont tous rassemblés",
  分班齿序: "Séquence du décalage",
  礼拜猴王: "Adorer le roi du singe",
  安排酒果: "Organiser du vin et des fruits",
  接风贺喜: "Salutations",
  启问降魔救子之事:
    "Les affaires de Qiwen pour maîtriser les démons et sauver les enfants",
  悟空备细言了一遍: "Wukong Bei l'a dit en détail",
  众猴称扬不尽道: "Les singes sont loués et ne peuvent pas être félicités",
  大王去到那方: "Le roi y va",
  不意学得这般手段: "Appris de façon inattendue cette méthode",
  悟空又道: "Wukong a dit à nouveau",
  我当年别汝等: "Je te laisserai attendre alors",
  随波逐流: "Aller avec le flux",
  飘过东洋大海: "Flottant sur l'océan est",
  径至南赡部洲: "Au continent sud",
  学成人像: "Apprendre l'imagerie pour adultes",
  着此衣: "Porter cette robe",
  穿此履: "Portez cette chaussure",
  摆摆摇摇: "Balancer et balancer",
  云游八九年馀: "Voyager pendant plus de huit ou neuf ans",
  更不曾有道: "Il n'y a jamais eu de vérité",
  又渡西洋大海: "Traverser la mer de l'Atlantique",
  到西牛贺洲地界: "Aller à xiniu hezhou",
  访问多时: "Visitez à plusieurs reprises",
  幸遇一老祖: "Heureusement, j'ai rencontré un vieil ancêtre",
  传了我与天同寿的真功果:
    "Il a transmis les véritables réalisations de ma vie avec Tian.",
  不死长生的大法门: "La grande façon d'immortalité",
  众猴称贺: "Tous les singes disent des félicitations",
  都道: "Tous",
  万劫难逢也: "Une catastrophe",
  悟空又笑道: "Wukong a encore dit avec un sourire",
  小的们: "Les jeunes hommes",
  又喜我这一门皆有姓氏: "J'aime aussi ma famille a des noms de famille",
  众猴道: "Les singes",
  大王何姓: "Roi il",
  悟空道: "Wukong Tao",
  我今姓孙: "Mon nom de famille est le soleil",
  法名悟空: "Dharma Nom Wukong",
  众猴闻说: "Les singes ont entendu",
  鼓掌忻然道: "Applaudir et dire joyeusement",
  大王是老孙: "Le roi est le vieux petit-fils",
  我们都是二孙: "Nous sommes tous des seconds petits-enfants",
  三孙: "Trois petits-fils",
  细孙: "SEI SUN",
  小孙: "Petit petit-fils",
  一家孙: "Un petit-fils",
  一国孙: "Un petit-fils d'un pays",
  一窝孙矣: "Un tas de petits-enfants",
  都来奉承老孙: "Tout le monde vient au soleil lao flatteur",
  大盆小碗的: "Grand bol avec un petit bol",
  椰子酒: "Vin de coco",
  葡萄酒: "vin",
  仙花: "Fleur de fée",
  仙果: "Fruit immortel",
  真个是合家欢乐: "C'est vraiment le bonheur de la famille",
  咦: "Hein",
  贯通一姓身归本: "Nom de famille complet pour revenir à l'original",
  只待荣迁仙录箓名:
    "Attendant juste que l'honneur soit transféré aux Immortels et au nom du talisman",
  毕竟不知怎生结果: "Après tout, je ne sais pas comment le résultat sera",
  居此界终始如何: "Comment vivre dans ce monde",
  且听下回分解: "Écoutons la prochaine ventilation",
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
