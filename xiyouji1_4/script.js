const translationCard = document.getElementById("translationCard");
// 诗歌文本
const poemText = `
美猴王享乐天真
何期有三五百载
一日
与群猴喜宴之间
忽然忧恼
堕下泪来
众猴慌忙罗拜道
大王何为烦恼
猴王道
我虽在欢喜之时
却有一点儿远虑
故此烦恼
众猴又笑道
大王好不知足
我等日日欢会
在仙山福地
古洞神州
不伏麒麟辖
不伏凤凰管
又不伏人间王位所拘束
自由自在
乃无量之福
为何远虑而忧也
猴王道
今日虽不归人王法律
不惧禽兽威服
将来年老血衰
暗中有阎王老子管着
一旦身亡
可不枉生世界之中
不得久住天人之内
众猴闻此言
一个个掩面悲啼
俱以无常为虑
只见那班部中
忽跳出一个通背猿猴
厉声高叫道
大王若是这般远虑
真所谓道心开发也
如今五虫之内
惟有三等名色
不伏阎王老子所管
猴王道
你知那三等人
猿猴道
乃是佛与仙与神圣三者
躲过轮回
不生不灭
与天地山川齐寿
猴王道
此三者居于何所
猿猴道
他只在阎浮世界之中
古洞仙山之内
猴王闻之
满心欢喜
道
我明日就辞汝等下山
云游海角
远涉天涯
务必访此三者
学一个不老长生
常躲过阎君之难
噫
这句话
顿教跳出轮回网
致使齐天大圣成
众猴鼓掌称扬
都道
善哉
善哉
我等明日越岭登山
广寻些果品
大设筵宴送大王也
次日
众猴果去采仙桃
摘异果
刨山药
挖黄精
芝兰香蕙
瑶草奇花
般般件件
整整齐齐
摆开石凳石桌
排列仙酒仙肴
群猴尊美猴王上坐
各依齿肩排于下边
一个个轮流上前
奉酒
奉花
奉果
痛饮了一日
`;

const pinyinMap = {
  美: "měi",
  猴: "hóu",
  王: "wáng",
  享: "xiǎng",
  乐: "lè",
  天: "tiān",
  真: "zhēn",
  何: "hé",
  期: "qī",
  有: "yǒu",
  三: "sān",
  五: "wǔ",
  百: "bǎi",
  载: "zài",
  一: "yī",
  日: "rì",
  与: "yǔ",
  群: "qún",
  喜: "xǐ",
  宴: "yàn",
  之: "zhī",
  间: "jiān",
  忽: "hū",
  然: "rán",
  忧: "yōu",
  恼: "nǎo",
  堕: "duò",
  下: "xià",
  泪: "lèi",
  来: "lái",
  众: "zhòng",
  慌: "huāng",
  忙: "máng",
  罗: "luó",
  拜: "bài",
  道: "dào",
  大: "dà",
  为: "wèi",
  烦: "fán",
  我: "wǒ",
  虽: "suī",
  在: "zài",
  欢: "huān",
  时: "shí",
  却: "què",
  点: "diǎn",
  儿: "ér",
  远: "yuǎn",
  虑: "lǜ",
  故: "gù",
  此: "cǐ",
  又: "yòu",
  笑: "xiào",
  好: "hǎo",
  不: "bù",
  知: "zhī",
  足: "zú",
  等: "děng",
  会: "huì",
  仙: "xiān",
  山: "shān",
  福: "fú",
  地: "dì",
  古: "gǔ",
  洞: "dòng",
  神: "shén",
  州: "zhōu",
  伏: "fú",
  麒: "qí",
  麟: "lín",
  辖: "xiá",
  凤: "fèng",
  凰: "huáng",
  管: "guǎn",
  人: "rén",
  位: "wèi",
  所: "suǒ",
  拘: "jū",
  束: "shù",
  自: "zì",
  由: "yóu",
  乃: "nǎi",
  无: "wú",
  量: "liàng",
  而: "ér",
  也: "yě",
  今: "jīn",
  归: "guī",
  法: "fǎ",
  律: "lǜ",
  惧: "jù",
  禽: "qín",
  兽: "shòu",
  威: "wēi",
  服: "fú",
  将: "jiāng",
  年: "nián",
  老: "lǎo",
  血: "xuè",
  衰: "shuāi",
  暗: "àn",
  中: "zhōng",
  阎: "yán",
  子: "zi",
  着: "zhe",
  旦: "dàn",
  身: "shēn",
  亡: "wáng",
  可: "kě",
  枉: "wǎng",
  生: "shēng",
  世: "shì",
  界: "jiè",
  得: "dé",
  久: "jiǔ",
  住: "zhù",
  内: "nèi",
  闻: "wén",
  言: "yán",
  个: "gè",
  掩: "yǎn",
  面: "miàn",
  悲: "bēi",
  啼: "tí",
  俱: "jù",
  以: "yǐ",
  常: "cháng",
  只: "zhī",
  见: "jiàn",
  那: "nà",
  班: "bān",
  部: "bù",
  跳: "tiào",
  出: "chū",
  通: "tōng",
  背: "bèi",
  猿: "yuán",
  厉: "lì",
  声: "shēng",
  高: "gāo",
  叫: "jiào",
  若: "ruò",
  是: "shì",
  这: "zhè",
  般: "bān",
  谓: "wèi",
  心: "xīn",
  开: "kāi",
  发: "fā",
  如: "rú",
  虫: "chóng",
  惟: "wéi",
  名: "míng",
  色: "sè",
  你: "nǐ",
  佛: "fú",
  圣: "shèng",
  者: "zhě",
  躲: "duǒ",
  过: "guò",
  轮: "lún",
  回: "huí",
  灭: "miè",
  川: "chuān",
  齐: "qí",
  寿: "shòu",
  居: "jū",
  于: "yú",
  他: "tā",
  浮: "fú",
  满: "mǎn",
  明: "míng",
  就: "jiù",
  辞: "cí",
  汝: "rǔ",
  云: "yún",
  游: "yóu",
  海: "hǎi",
  角: "jiǎo",
  涉: "shè",
  涯: "yá",
  务: "wù",
  必: "bì",
  访: "fǎng",
  学: "xué",
  长: "zhǎng",
  君: "jūn",
  难: "nán",
  噫: "yī",
  句: "jù",
  话: "huà",
  顿: "dùn",
  教: "jiào",
  网: "wǎng",
  致: "zhì",
  使: "shǐ",
  成: "chéng",
  鼓: "gǔ",
  掌: "zhǎng",
  称: "chēng",
  扬: "yáng",
  都: "dōu",
  善: "shàn",
  哉: "zāi",
  越: "yuè",
  岭: "lǐng",
  登: "dēng",
  广: "guǎng",
  寻: "xún",
  些: "xiē",
  果: "guǒ",
  品: "pǐn",
  设: "shè",
  筵: "yán",
  送: "sòng",
  次: "cì",
  去: "qù",
  采: "cǎi",
  桃: "táo",
  摘: "zhāi",
  异: "yì",
  刨: "páo",
  药: "yào",
  挖: "wā",
  黄: "huáng",
  精: "jīng",
  芝: "zhī",
  兰: "lán",
  香: "xiāng",
  蕙: "huì",
  瑶: "yáo",
  草: "cǎo",
  奇: "qí",
  花: "huā",
  件: "jiàn",
  整: "zhěng",
  摆: "bǎi",
  石: "shí",
  凳: "dèng",
  桌: "zhuō",
  排: "pái",
  列: "liè",
  酒: "jiǔ",
  肴: "yáo",
  尊: "zūn",
  上: "shàng",
  坐: "zuò",
  各: "gè",
  依: "yī",
  齿: "chǐ",
  肩: "jiān",
  边: "biān",
  流: "liú",
  前: "qián",
  奉: "fèng",
  痛: "tòng",
  饮: "yǐn",
  了: "le",
};




const translations_de = {
  美: "Schön",
  猴: "Affe",
  王: "König",
  享: "Genießen",
  乐: "Glücklich",
  天: "Himmel",
  真: "real",
  何: "Was",
  期: "Erwarten",
  有: "haben",
  三: "drei",
  五: "fünf",
  百: "Hundert",
  载: "laden",
  一: "eins",
  日: "Tag",
  与: "Und",
  群: "Gruppe",
  喜: "Glück",
  宴: "Fest",
  之: "Von",
  间: "zwischen",
  忽: "plötzlich",
  然: "Natürlich",
  忧: "Sorge",
  恼: "wütend",
  堕: "fallen",
  下: "Runter",
  泪: "Träne",
  来: "Kommen",
  众: "Alle",
  慌: "Panik",
  忙: "beschäftigt",
  罗: "Luo",
  拜: "Tschüss",
  道: "Straße",
  大: "groß",
  为: "für",
  烦: "sich kümmern",
  我: "ICH",
  虽: "Obwohl",
  在: "existieren",
  欢: "freudig",
  时: "Stunde",
  却: "Aber",
  点: "Punkt",
  儿: "Sohn",
  远: "Weit",
  虑: "halten",
  故: "daher",
  此: "Das",
  又: "wieder",
  笑: "lachen",
  好: "Gut",
  不: "NEIN",
  知: "Wissen",
  足: "Fuß",
  等: "Warten",
  会: "treffen",
  仙: "Fee",
  山: "Berg",
  福: "Segen",
  地: "Land",
  古: "Antike",
  洞: "Loch",
  神: "Gott",
  州: "Zustand",
  伏: "Fu",
  麒: "Kiri",
  麟: "Lin",
  辖: "Gehorsam",
  凤: "Phönix",
  凰: "Phönix",
  管: "Rohr",
  人: "Menschen",
  位: "Bisschen",
  所: "Ort",
  拘: "verhaften",
  束: "bündeln",
  自: "seit",
  由: "Abhängig von",
  乃: "Also",
  无: "keiner",
  量: "Menge",
  而: "Und",
  也: "Auch",
  今: "Jetzt",
  归: "Nach Hause gehen",
  法: "Gesetz",
  律: "Gesetz",
  惧: "Furcht",
  禽: "Vögel",
  兽: "Tier",
  威: "Viagra",
  服: "Kleidung",
  将: "Wille",
  年: "Jahr",
  老: "alt",
  血: "Blut",
  衰: "Abfall",
  暗: "dunkel",
  中: "Mitte",
  阎: "Yan",
  子: "Sohn",
  着: "Setzen",
  旦: "Dämmerung",
  身: "Körper",
  亡: "Tod",
  可: "Kann",
  枉: "vergeblich",
  生: "geboren",
  世: "Welt",
  界: "Grenze",
  得: "müssen",
  久: "Lang",
  住: "live",
  内: "Innen",
  闻: "Geruch",
  言: "Wort",
  个: "indival",
  掩: "Abdeckung",
  面: "Nudel",
  悲: "traurig",
  啼: "weinen",
  俱: "alle",
  以: "von",
  常: "oft",
  只: "Nur",
  见: "Sehen",
  那: "Das",
  班: "Klasse",
  部: "Abteilung",
  跳: "Springen",
  出: "aus",
  通: "Passieren",
  背: "zurück",
  猿: "Affe",
  厉: "Ernst",
  声: "Stimme",
  高: "hoch",
  叫: "Anruf",
  若: "wie",
  是: "Ja",
  这: "Das",
  般: "Normal",
  谓: "Gegenwärtig",
  心: "Herz",
  开: "offen",
  发: "Haar",
  如: "wie",
  虫: "Insekt",
  惟: "Aber",
  名: "Name",
  色: "Farbe",
  你: "Du",
  佛: "Buddha",
  圣: "Heilige",
  者: "Diese",
  躲: "verstecken",
  过: "Passieren",
  轮: "Rad",
  回: "Zurück",
  灭: "Löschen",
  川: "Sichuan",
  齐: "zusammen",
  寿: "Leben",
  居: "Residenz",
  于: "Bei",
  他: "Er",
  浮: "schweben",
  满: "Voll",
  明: "hell",
  就: "Auf einmal",
  辞: "Zitat",
  汝: "Du",
  云: "Wolke",
  游: "Tour",
  海: "Ozean",
  角: "Horn",
  涉: "Beteiligt",
  涯: "Karriere",
  务: "Service",
  必: "muss",
  访: "besuchen",
  学: "Studie",
  长: "lang",
  君: "Jun",
  难: "Katastrophe",
  噫: "Ach",
  句: "Satz",
  话: "sprechen",
  顿: "Dun",
  教: "unterrichten",
  网: "netto",
  致: "Zu",
  使: "machen",
  成: "werden",
  鼓: "Trommel",
  掌: "Palme",
  称: "sagen",
  扬: "Yang",
  都: "Alle",
  善: "Gut",
  哉: "Ja",
  越: "kreuzen",
  岭: "Grat",
  登: "Login",
  广: "breit",
  寻: "Auf der Suche nach",
  些: "manche",
  果: "Obst",
  品: "Schmecken",
  设: "aufstellen",
  筵: "Fest",
  送: "liefern",
  次: "Zweitklassifiziert",
  去: "gehen",
  采: "Wählen",
  桃: "Pfirsich",
  摘: "Wählen",
  异: "anders",
  刨: "Flugzeug",
  药: "Medizin",
  挖: "graben",
  黄: "Gelb",
  精: "Raffiniert",
  芝: "Zhi",
  兰: "Orchidee",
  香: "duftend",
  蕙: "Hui",
  瑶: "Yao",
  草: "Gras",
  奇: "seltsam",
  花: "Blume",
  件: "Teile",
  整: "alle",
  摆: "setzen",
  石: "Stein",
  凳: "Hocker",
  桌: "Tisch",
  排: "Reihe",
  列: "Liste",
  酒: "Alkohol",
  肴: "Fleischschale",
  尊: "Ehre",
  上: "Vorgesetzter",
  坐: "sitzen",
  各: "jede",
  依: "entsprechend",
  齿: "Zahn",
  肩: "Schulter",
  边: "Seite",
  流: "fließen",
  前: "nach vorne",
  奉: "Feng",
  痛: "Schmerz",
  饮: "trinken",
  了: "Es ist",
};

const translations_fr = {
  美: "beau",
  猴: "singe",
  王: "roi",
  享: "Apprécier",
  乐: "heureux",
  天: "ciel",
  真: "réel",
  何: "quoi",
  期: "Attendre",
  有: "avoir",
  三: "trois",
  五: "cinq",
  百: "Cent",
  载: "charger",
  一: "un",
  日: "jour",
  与: "et",
  群: "groupe",
  喜: "bonheur",
  宴: "festin",
  之: "De",
  间: "entre",
  忽: "soudainement",
  然: "Bien sûr",
  忧: "inquiétude",
  恼: "en colère",
  堕: "automne",
  下: "Vers le bas",
  泪: "larme",
  来: "Viens",
  众: "Tous",
  慌: "Panique",
  忙: "occupé",
  罗: "Luo",
  拜: "au revoir",
  道: "route",
  大: "grand",
  为: "pour",
  烦: "déranger",
  我: "je",
  虽: "bien que",
  在: "exister",
  欢: "joyeux",
  时: "heure",
  却: "mais",
  点: "indiquer",
  儿: "Fils",
  远: "Loin",
  虑: "considérer",
  故: "Donc",
  此: "ce",
  又: "encore",
  笑: "rire",
  好: "bien",
  不: "Non",
  知: "Savoir",
  足: "pied",
  等: "attendez",
  会: "réunion",
  仙: "Fée",
  山: "Montagne",
  福: "bénédiction",
  地: "atterrir",
  古: "antiquité",
  洞: "Trou",
  神: "Dieu",
  州: "État",
  伏: "Fu",
  麒: "Kiri",
  麟: "Lin",
  辖: "Obéissance",
  凤: "phénix",
  凰: "phénix",
  管: "Tube",
  人: "personnes",
  位: "Peu",
  所: "Lieu",
  拘: "arrêter",
  束: "paquet",
  自: "depuis",
  由: "Dépendre de",
  乃: "Donc",
  无: "aucun",
  量: "quantité",
  而: "et",
  也: "aussi",
  今: "maintenant",
  归: "Rentrer chez eux",
  法: "Loi",
  律: "loi",
  惧: "peur",
  禽: "oiseaux",
  兽: "bête",
  威: "Viagra",
  服: "Vêtements",
  将: "Volonté",
  年: "Année",
  老: "vieux",
  血: "Sang",
  衰: "déclin",
  暗: "sombre",
  中: "milieu",
  阎: "Anéantier",
  子: "fils",
  着: "Mettre",
  旦: "aube",
  身: "corps",
  亡: "La mort",
  可: "Peut",
  枉: "en vain",
  生: "né",
  世: "Monde",
  界: "limite",
  得: "devoir",
  久: "Long",
  住: "en direct",
  内: "À l'intérieur",
  闻: "odeur",
  言: "Mot",
  个: "autonome",
  掩: "Couverture",
  面: "nouille",
  悲: "triste",
  啼: "pleurer",
  俱: "tous",
  以: "par",
  常: "souvent",
  只: "Seulement",
  见: "Voir",
  那: "Que",
  班: "classe",
  部: "département",
  跳: "Saut",
  出: "dehors",
  通: "Passer",
  背: "dos",
  猿: "singe",
  厉: "Sérieux",
  声: "Voix",
  高: "haut",
  叫: "Appel",
  若: "comme",
  是: "Oui",
  这: "ce",
  般: "Normale",
  谓: "Présent",
  心: "Cœur",
  开: "ouvrir",
  发: "cheveux",
  如: "comme",
  虫: "insecte",
  惟: "mais",
  名: "nom",
  色: "couleur",
  你: "toi",
  佛: "Bouddha",
  圣: "Saint",
  者: "Ceux",
  躲: "cacher",
  过: "Passer",
  轮: "roue",
  回: "Dos",
  灭: "Éteindre",
  川: "Sichuan",
  齐: "ensemble",
  寿: "vie",
  居: "Résidence",
  于: "À",
  他: "il",
  浮: "flotter",
  满: "Complet",
  明: "brillant",
  就: "Immédiatement",
  辞: "Citation",
  汝: "Toi",
  云: "nuage",
  游: "tournée",
  海: "océan",
  角: "corne",
  涉: "Impliqué",
  涯: "Carrière",
  务: "Service",
  必: "doit",
  访: "visite",
  学: "étude",
  长: "long",
  君: "Juin",
  难: "Catastrophe",
  噫: "Hélas",
  句: "phrase",
  话: "parler",
  顿: "Dun",
  教: "enseigner",
  网: "filet",
  致: "À",
  使: "faire",
  成: "devenir",
  鼓: "tambour",
  掌: "Palmier",
  称: "dire",
  扬: "Yang",
  都: "Tous",
  善: "bien",
  哉: "Oui",
  越: "croix",
  岭: "crête",
  登: "Se connecter",
  广: "large",
  寻: "À la recherche de",
  些: "quelques",
  果: "fruit",
  品: "Goût",
  设: "installation",
  筵: "festin",
  送: "livrer",
  次: "De premier ordre",
  去: "aller",
  采: "Prendre",
  桃: "Pêche",
  摘: "Prendre",
  异: "différent",
  刨: "avion",
  药: "médecine",
  挖: "creuser",
  黄: "jaune",
  精: "Raffiné",
  芝: "Zhi",
  兰: "orchidée",
  香: "parfumé",
  蕙: "Hui",
  瑶: "Yao",
  草: "Herbe",
  奇: "étrange",
  花: "fleur",
  件: "Parties",
  整: "tous",
  摆: "mettre",
  石: "pierre",
  凳: "tabouret",
  桌: "tableau",
  排: "Rangée",
  列: "Liste",
  酒: "alcool",
  肴: "plat de viande",
  尊: "Honneur",
  上: "supérieur",
  坐: "s'asseoir",
  各: "chaque",
  依: "selon",
  齿: "dent",
  肩: "épaule",
  边: "côté",
  流: "couler",
  前: "avant",
  奉: "Feng",
  痛: "douleur",
  饮: "boire",
  了: "C'est",
};
const translations_en = {
  美: "beautiful",
  猴: "monkey",
  王: "king",
  享: "Enjoy",
  乐: "happy",
  天: "sky",
  真: "real",
  何: "what",
  期: "Expect",
  有: "have",
  三: "three",
  五: "five",
  百: "Hundred",
  载: "load",
  一: "one",
  日: "day",
  与: "and",
  群: "group",
  喜: "happiness",
  宴: "feast",
  之: "Of",
  间: "between",
  忽: "suddenly",
  然: "Of course",
  忧: "worry",
  恼: "angry",
  堕: "fall",
  下: "Down",
  泪: "tear",
  来: "Come",
  众: "All",
  慌: "Panic",
  忙: "busy",
  罗: "Luo",
  拜: "bye",
  道: "road",
  大: "big",
  为: "for",
  烦: "bother",
  我: "I",
  虽: "although",
  在: "exist",
  欢: "joyous",
  时: "hour",
  却: "but",
  点: "point",
  儿: "Son",
  远: "Far",
  虑: "consider",
  故: "Therefore",
  此: "this",
  又: "again",
  笑: "laugh",
  好: "good",
  不: "No",
  知: "Know",
  足: "foot",
  等: "wait",
  会: "meeting",
  仙: "Fairy",
  山: "Mountain",
  福: "blessing",
  地: "land",
  古: "antiquity",
  洞: "Hole",
  神: "god",
  州: "state",
  伏: "Fu",
  麒: "Kiri",
  麟: "Lin",
  辖: "Obedience",
  凤: "phoenix",
  凰: "phoenix",
  管: "Tube",
  人: "people",
  位: "Bit",
  所: "Place",
  拘: "arrest",
  束: "bundle",
  自: "since",
  由: "Depend on",
  乃: "So",
  无: "none",
  量: "quantity",
  而: "and",
  也: "also",
  今: "now",
  归: "Go home",
  法: "Law",
  律: "law",
  惧: "fear",
  禽: "birds",
  兽: "beast",
  威: "Viagra",
  服: "Clothes",
  将: "Will",
  年: "Year",
  老: "old",
  血: "Blood",
  衰: "decline",
  暗: "dark",
  中: "middle",
  阎: "Yan",
  子: "son",
  着: "Put",
  旦: "dawn",
  身: "body",
  亡: "Death",
  可: "Can",
  枉: "in vain",
  生: "born",
  世: "World",
  界: "boundary",
  得: "have to",
  久: "Long",
  住: "live",
  内: "Inside",
  闻: "smell",
  言: "Word",
  个: "indivual",
  掩: "Cover",
  面: "noodle",
  悲: "sad",
  啼: "cry",
  俱: "all",
  以: "by",
  常: "often",
  只: "Only",
  见: "See",
  那: "That",
  班: "class",
  部: "department",
  跳: "Jump",
  出: "out",
  通: "Pass",
  背: "back",
  猿: "ape",
  厉: "Serious",
  声: "Voice",
  高: "high",
  叫: "Call",
  若: "like",
  是: "yes",
  这: "this",
  般: "Normal",
  谓: "Present",
  心: "Heart",
  开: "open",
  发: "hair",
  如: "like",
  虫: "insect",
  惟: "but",
  名: "name",
  色: "color",
  你: "you",
  佛: "Buddha",
  圣: "Saint",
  者: "Those",
  躲: "hide",
  过: "Pass",
  轮: "wheel",
  回: "Back",
  灭: "Extinguish",
  川: "Sichuan",
  齐: "together",
  寿: "life",
  居: "Residence",
  于: "At",
  他: "he",
  浮: "float",
  满: "Full",
  明: "bright",
  就: "At once",
  辞: "Quotation",
  汝: "You",
  云: "cloud",
  游: "tour",
  海: "ocean",
  角: "horn",
  涉: "Involved",
  涯: "Career",
  务: "Service",
  必: "must",
  访: "visit",
  学: "study",
  长: "long",
  君: "Jun",
  难: "Disaster",
  噫: "Alas",
  句: "sentence",
  话: "talk",
  顿: "Dun",
  教: "teach",
  网: "net",
  致: "To",
  使: "make",
  成: "become",
  鼓: "drum",
  掌: "Palm",
  称: "say",
  扬: "Yang",
  都: "All",
  善: "good",
  哉: "Yes",
  越: "cross",
  岭: "ridge",
  登: "Login",
  广: "wide",
  寻: "Looking for",
  些: "some",
  果: "fruit",
  品: "Taste",
  设: "set up",
  筵: "feast",
  送: "deliver",
  次: "Second-rate",
  去: "go",
  采: "Pick",
  桃: "Peach",
  摘: "Pick",
  异: "different",
  刨: "plane",
  药: "medicine",
  挖: "dig",
  黄: "yellow",
  精: "Refined",
  芝: "Zhi",
  兰: "orchid",
  香: "fragrant",
  蕙: "Hui",
  瑶: "Yao",
  草: "Grass",
  奇: "strange",
  花: "flower",
  件: "Parts",
  整: "all",
  摆: "put",
  石: "stone",
  凳: "stool",
  桌: "table",
  排: "Row",
  列: "List",
  酒: "liquor",
  肴: "meat dish",
  尊: "Honor",
  上: "superior",
  坐: "sit",
  各: "each",
  依: "according to",
  齿: "tooth",
  肩: "shoulder",
  边: "side",
  流: "flow",
  前: "forward",
  奉: "Feng",
  痛: "pain",
  饮: "drink",
  了: "It's",
};

const tianwen_translation_map_fr = {
  美猴王享乐天真: "Le roi de singe est agréable et innocent",
  何期有三五百载: "Combien de temps faut-il pour durer trois ou cinq cents ans",
  一日: "Un jour",
  与群猴喜宴之间: "Entre le banquet de mariage des singes",
  忽然忧恼: "Soudain inquiet",
  堕下泪来: "Les larmes tombent",
  众猴慌忙罗拜道: "Les singes s'inclinaient à la hâte",
  大王何为烦恼: "Quel problème est le roi",
  猴王道: "Le chemin du roi du singe",
  我虽在欢喜之时: "Même si je suis heureux",
  却有一点儿远虑: "Mais il y a un peu de grande portée",
  故此烦恼: "Par conséquent, ce problème",
  众猴又笑道: "Les singes ont dit avec un sourire",
  大王好不知足: "Le roi est tellement insatisfait",
  我等日日欢会: "J'attendrai la journée pour m'amuser",
  在仙山福地: "Dans la terre bénie de la montagne fée",
  古洞神州: "Ancienne grotte Shenzhou",
  不伏麒麟辖: "Ne conquérir pas le Qilin",
  不伏凤凰管: "Pas de tube phoenix",
  又不伏人间王位所拘束: "Et non retenue par le trône sur terre",
  自由自在: "gratuit",
  乃无量之福: "C'est une bénédiction infinie",
  为何远虑而忧也: "Pourquoi s'inquiéter des préoccupations à long terme",
  猴王道: "Le chemin du roi du singe",
  今日虽不归人王法律:
    "Bien qu'aujourd'hui n'appartient pas au roi des lois humaines",
  不惧禽兽威服: "Pas peur du pouvoir bestial",
  将来年老血衰: "À l'avenir, la vieillesse et la perte de sang",
  暗中有阎王老子管着: "Je suis en charge du roi de l'enfer en secret",
  一旦身亡: "Une fois mort",
  可不枉生世界之中: "Ce n'est pas vain pour naître dans le monde",
  不得久住天人之内: "Ne vivez pas dans les êtres célestes pendant longtemps",
  众猴闻此言: "Les singes ont entendu cela",
  一个个掩面悲啼: "Couvrant son visage et pleurant tristement",
  俱以无常为虑: "Tous sont préoccupés par l'impermanence",
  只见那班部中: "J'ai vu ce département",
  忽跳出一个通背猿猴: "Soudain, un singe avec un dos a sauté",
  厉声高叫道: "Crier fort",
  大王若是这般远虑: "Si le roi est si loin",
  真所谓道心开发也: "Le soi-disant développement du cœur de Tao est également",
  如今五虫之内: "Maintenant dans les cinq insectes",
  惟有三等名色: "Seulement nom de troisième classe",
  不伏阎王老子所管: "Ne laissez pas l'enfer être en charge",
  猴王道: "Le chemin du roi du singe",
  你知那三等人: "Tu connais les personnes de troisième classe",
  猿猴道: "Singes",
  乃是佛与仙与神圣三者: "Ce sont les trois Bouddha, immortels et sacrés",
  躲过轮回: "Évitez la réincarnation",
  不生不灭: "Pas de naissance et pas de mort",
  与天地山川齐寿: "Vivre avec le ciel, la terre, les montagnes et les rivières",
  猴王道: "Le chemin du roi du singe",
  此三者居于何所: "Où vivent ces trois?",
  猿猴道: "Singes",
  他只在阎浮世界之中: "Il n'est que dans le monde de Jambudvipa",
  古洞仙山之内: "À l'intérieur de l'ancienne Cave Fairy Mountain",
  猴王闻之: "Le roi de singe l'a entendu",
  满心欢喜: "Plein de joie",
  道: "route",
  我明日就辞汝等下山: "Je vais vous quitter demain et descendre la montagne",
  云游海角: "Voyager autour de la mer",
  远涉天涯: "Aller loin",
  务必访此三者: "Assurez-vous de visiter ces trois",
  学一个不老长生: "Apprenez à vivre pour toujours",
  常躲过阎君之难: "Échappez toujours aux difficultés de Yan Jun",
  噫: "Hélas",
  这句话: "Cette phrase",
  顿教跳出轮回网: "Arrêtez d'enseigner les sauts du réseau de réincarnation",
  致使齐天大圣成: "Le roi de singe est devenu",
  众猴鼓掌称扬: "Les singes ont applaudi",
  都道: "Tous",
  善哉: "Bien",
  善哉: "Bien",
  我等明日越岭登山:
    "J'attendrai pour traverser la crête et grimper la montagne demain",
  广寻些果品: "Trouver des fruits",
  大设筵宴送大王也: "Un grand banquet pour envoyer le roi",
  次日: "Le lendemain",
  众猴果去采仙桃: "Tous les fruits de singe vont choisir des pêches de fées",
  摘异果: "Choisissez différents fruits",
  刨山药: "Médicaments labourer",
  挖黄精: "Déterrer l'élixir",
  芝兰香蕙: "Zhilan, glacial parfumé",
  瑶草奇花: "Fleurs Yaocao",
  般般件件: "Louangez parties",
  整整齐齐: "Soigneusement arrangé",
  摆开石凳石桌: "Installer des bancs en pierre et des tables en pierre",
  排列仙酒仙肴: "Organiser le vin de fée et la cuisine de fée",
  群猴尊美猴王上坐: "Monkey King est assis au sommet",
  各依齿肩排于下边: "Chaque épaule est disposée ci-dessous",
  一个个轮流上前: "Pour avancer",
  奉酒: "Vin",
  奉花: "Festing Flowers",
  奉果: "Fruit",
  痛饮了一日: "Boire pour une journée",
};

const tianwen_translation_map_de = {
  美猴王享乐天真: "Der Affenkönig ist angenehm und unschuldig",
  何期有三五百载:
    "Wie lange dauert es, bis drei oder fünfhundert Jahre dauern?",
  一日: "Einmal",
  与群猴喜宴之间: "Zwischen dem Hochzeitsbankett der Affen",
  忽然忧恼: "Plötzlich besorgt",
  堕下泪来: "Tränen fallen",
  众猴慌忙罗拜道: "Die Affen verneigten sich hastig",
  大王何为烦恼: "Was für ein Problem ist der König",
  猴王道: "Der Weg des Affenkönigs",
  我虽在欢喜之时: "Obwohl ich glücklich bin",
  却有一点儿远虑: "Aber es gibt ein wenig weitreichend",
  故此烦恼: "Daher diese Probleme",
  众猴又笑道: "Sagten die Affen mit einem Lächeln",
  大王好不知足: "Der König ist so unzufrieden",
  我等日日欢会: "Ich werde darauf warten, dass der Tag Spaß hat",
  在仙山福地: "Im Märchenberggesegnete Land",
  古洞神州: "Alte Höhle Shenzhou",
  不伏麒麟辖: "Erobern Sie das Qilin nicht",
  不伏凤凰管: "Kein Phoenix -Röhrchen",
  又不伏人间王位所拘束: "Und nicht durch den Thron auf der Erde zurückgehalten",
  自由自在: "frei",
  乃无量之福: "Es ist ein unendlicher Segen",
  为何远虑而忧也: "Warum sich um langfristige Sorge sorgen?",
  猴王道: "Der Weg des Affenkönigs",
  今日虽不归人王法律:
    "Obwohl heute nicht dem König der menschlichen Gesetze gehört",
  不惧禽兽威服: "Keine Angst vor Tierkraft",
  将来年老血衰: "In Zukunft Alter und Blutverlust",
  暗中有阎王老子管着:
    "Ich bin verantwortlich für den König der Hölle im Geheimnis",
  一旦身亡: "Einmal tot",
  可不枉生世界之中: "Es ist nicht umsonst, in der Welt geboren zu werden",
  不得久住天人之内: "Lebe lange nicht lange in den himmlischen Wesen",
  众猴闻此言: "Die Affen hörten das",
  一个个掩面悲啼: "Sein Gesicht bedecken und traurig weinen",
  俱以无常为虑: "Alle sind besorgt über die Unbeständigkeit",
  只见那班部中: "Ich habe diese Abteilung gesehen",
  忽跳出一个通背猿猴: "Plötzlich sprang ein Affe mit einem Rücken heraus",
  厉声高叫道: "Laut schreien",
  大王若是这般远虑: "Wenn der König so weitreichend ist",
  真所谓道心开发也: "Die sogenannte Entwicklung des Herzens von Tao ist auch",
  如今五虫之内: "Jetzt innerhalb der fünf Insekten",
  惟有三等名色: "Nur Name der dritten Klasse",
  不伏阎王老子所管: "Lass die Hölle nicht verantwortlich sein",
  猴王道: "Der Weg des Affenkönigs",
  你知那三等人: "Sie kennen die Leute der dritten Klasse",
  猿猴道: "Affen",
  乃是佛与仙与神圣三者: "Es sind der drei Buddha, Unsterbliche und heilig",
  躲过轮回: "Vermeiden Sie Reinkarnation",
  不生不灭: "Keine Geburt und kein Tod",
  与天地山川齐寿: "Lebe mit Himmel, Erde, Bergen und Flüssen",
  猴王道: "Der Weg des Affenkönigs",
  此三者居于何所: "Wo leben diese drei?",
  猿猴道: "Affen",
  他只在阎浮世界之中: "Er ist nur in der Welt von Jambudvipa",
  古洞仙山之内: "Innerhalb des alten Höhlenfedebergs",
  猴王闻之: "Der Affenkönig hörte es",
  满心欢喜: "Voller Freude",
  道: "Straße",
  我明日就辞汝等下山:
    "Ich werde dich morgen verlassen und den Berg hinuntergehen",
  云游海角: "Durch das Meer reisen",
  远涉天涯: "Weit weg gehen",
  务必访此三者: "Achten Sie darauf, diese drei zu besuchen",
  学一个不老长生: "Lerne für immer zu leben",
  常躲过阎君之难: "Entkommen immer den Schwierigkeiten von Yan Jun",
  噫: "Ach",
  这句话: "Dieser Satz",
  顿教跳出轮回网:
    "Hören Sie auf, aus dem Reinkarnationsnetzwerk zu unterrichten",
  致使齐天大圣成: "Der Affenkönig wurde",
  众猴鼓掌称扬: "Die Affen applaudierten",
  都道: "Alle",
  善哉: "Gut",
  善哉: "Gut",
  我等明日越岭登山:
    "Ich werde warten, um den Kamm zu überqueren und morgen den Berg zu besteigen",
  广寻些果品: "Finden Sie einige Früchte",
  大设筵宴送大王也: "Ein großes Bankett, um den König zu schicken",
  次日: "Am nächsten Tag",
  众猴果去采仙桃: "Alle Affenfrüchte gehen, um Fairy Peaches auszuwählen",
  摘异果: "Wählen Sie verschiedene Früchte aus",
  刨山药: "Pflügen Sie Medizin",
  挖黄精: "Graben Sie das Elixier aus",
  芝兰香蕙: "Zhilan, duftend eisig",
  瑶草奇花: "Yaocao Blumen",
  般般件件: "Teile loben",
  整整齐齐: "Ordentlich angeordnet",
  摆开石凳石桌: "Stellen Sie Steinbänke und Steintische auf",
  排列仙酒仙肴: "Arrangieren Sie den Feenwein und das Feenfutter",
  群猴尊美猴王上坐: "Affenking sitzt an der Spitze",
  各依齿肩排于下边: "Jede Schulter ist unten angeordnet",
  一个个轮流上前: "Sich abwechseln, um vorwärts zu gehen",
  奉酒: "Wein",
  奉花: "Blumen feiern",
  奉果: "Obst",
  痛饮了一日: "Einen Tag trinken",
};
const tianwen_translation_map_en = {
  美猴王享乐天真: "The Monkey King is enjoyable and innocent",
  何期有三五百载:
    "How long does it take to last for three or five hundred years",
  一日: "One day",
  与群猴喜宴之间: "Between the wedding banquet of monkeys",
  忽然忧恼: "Suddenly worried",
  堕下泪来: "Tears fall",
  众猴慌忙罗拜道: "The monkeys hurriedly bowed",
  大王何为烦恼: "What trouble is the king",
  猴王道: "The Monkey King's Way",
  我虽在欢喜之时: "Even though I'm happy",
  却有一点儿远虑: "But there is a little far-reaching",
  故此烦恼: "Therefore, this trouble",
  众猴又笑道: "The monkeys said with a smile",
  大王好不知足: "The king is so unsatisfied",
  我等日日欢会: "I'll wait for the day to have fun",
  在仙山福地: "In the fairy mountain blessed land",
  古洞神州: "Ancient Cave Shenzhou",
  不伏麒麟辖: "Don't conquer the Qilin",
  不伏凤凰管: "No phoenix tube",
  又不伏人间王位所拘束: "And not restrained by the throne on earth",
  自由自在: "free",
  乃无量之福: "It is an infinite blessing",
  为何远虑而忧也: "Why worry about long-term concern",
  猴王道: "The Monkey King's Way",
  今日虽不归人王法律:
    "Although today does not belong to the king of human laws",
  不惧禽兽威服: "Not afraid of beastly power",
  将来年老血衰: "In the future, old age and blood loss",
  暗中有阎王老子管着: "I'm in charge of the King of Hell in secret",
  一旦身亡: "Once dead",
  可不枉生世界之中: "It's not in vain to be born in the world",
  不得久住天人之内: "Don't live in the heavenly beings for a long time",
  众猴闻此言: "The monkeys heard this",
  一个个掩面悲啼: "Covering his face and crying sadly",
  俱以无常为虑: "All are concerned about impermanence",
  只见那班部中: "I saw that department",
  忽跳出一个通背猿猴: "Suddenly a monkey with a back jumped out",
  厉声高叫道: "Screaming loudly",
  大王若是这般远虑: "If the king is so far-reaching",
  真所谓道心开发也: "The so-called development of the heart of Tao is also",
  如今五虫之内: "Now within the five insects",
  惟有三等名色: "Only third-class name",
  不伏阎王老子所管: "Don't let the hell be in charge",
  猴王道: "The Monkey King's Way",
  你知那三等人: "You know the third class people",
  猿猴道: "Apes",
  乃是佛与仙与神圣三者: "It is the three Buddha, immortal and sacred",
  躲过轮回: "Avoid reincarnation",
  不生不灭: "No birth and no death",
  与天地山川齐寿: "Live with the heaven, earth, mountains and rivers",
  猴王道: "The Monkey King's Way",
  此三者居于何所: "Where do these three live?",
  猿猴道: "Apes",
  他只在阎浮世界之中: "He is only in the world of Jambudvipa",
  古洞仙山之内: "Inside the Ancient Cave Fairy Mountain",
  猴王闻之: "The Monkey King heard it",
  满心欢喜: "Full of joy",
  道: "road",
  我明日就辞汝等下山: "I'll leave you tomorrow and go down the mountain",
  云游海角: "Traveling around the sea",
  远涉天涯: "Going far away",
  务必访此三者: "Be sure to visit these three",
  学一个不老长生: "Learn to live forever",
  常躲过阎君之难: "Always escape the difficulties of Yan Jun",
  噫: "Alas",
  这句话: "This sentence",
  顿教跳出轮回网: "Stop teaching jumps out of the reincarnation network",
  致使齐天大圣成: "The Monkey King became",
  众猴鼓掌称扬: "The monkeys applauded",
  都道: "All",
  善哉: "Good",
  善哉: "Good",
  我等明日越岭登山:
    "I will wait to cross the ridge and climb the mountain tomorrow",
  广寻些果品: "Find some fruits",
  大设筵宴送大王也: "A big banquet to send the king",
  次日: "The next day",
  众猴果去采仙桃: "All monkey fruits go to pick fairy peaches",
  摘异果: "Pick different fruits",
  刨山药: "Plowing medicine",
  挖黄精: "Dig up the elixir",
  芝兰香蕙: "Zhilan, fragrant icy",
  瑶草奇花: "Yaocao flowers",
  般般件件: "Praise parts",
  整整齐齐: "Neatly arranged",
  摆开石凳石桌: "Set up stone benches and stone tables",
  排列仙酒仙肴: "Arrange the fairy wine and fairy food",
  群猴尊美猴王上坐: "Monkey King sits on the top",
  各依齿肩排于下边: "Each shoulder is arranged below",
  一个个轮流上前: "Take turns to move forward",
  奉酒: "Wine",
  奉花: "Feasting flowers",
  奉果: "Fruit",
  痛饮了一日: "Drink for a day",
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
