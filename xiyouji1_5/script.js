const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `次日
美猴王早起
教
小的们
替我折些枯松
编作筏子
取个竹竿作篙
收拾些果品之类
我将去也
果独自登筏
尽力撑开
飘飘荡荡
径向大海波中
趁天风
来渡南赡部洲地界
料应必遇知音者
说破源流万法通
也是他运至时来
自登木筏之后
连日东南风紧
将他送到西北岸前
乃是南赡部洲地界
持篙试水
偶得浅水
弃了筏子
跳上岸来
只见海边有人捕鱼
打雁
挖蛤
淘盐
他走近前
弄个把戏
妆个老虎
吓得那些人丢筐弃网
四散奔跑
将那跑不动的拿住一个
剥了他衣裳
也学人穿在身上
摇摇摆摆
穿州过府
在市尘中
学人礼
学人话
朝餐夜宿
一心里访问佛仙神圣之道
觅个长生不老之方
见世人都是为名为利之徒
更无一个为身命
猴王参访仙道
无缘得遇
在于南赡部洲
串长城
游小县
不觉八九年馀
忽行至西洋大海
他想着海外必有神仙
独自个依前作筏
又飘过西海
直至西牛贺洲地界
`;
const pinyinMap = {
  次: "cì",
  日: "rì",
  美: "měi",
  猴: "hóu",
  王: "wáng",
  早: "zǎo",
  起: "qǐ",
  教: "jiào",
  小: "xiǎo",
  的: "de",
  们: "men",
  替: "tì",
  我: "wǒ",
  折: "zhé",
  些: "xiē",
  枯: "kū",
  松: "sōng",
  编: "biān",
  作: "zuò",
  筏: "fá",
  子: "zi",
  取: "qǔ",
  个: "gè",
  竹: "zhú",
  竿: "gān",
  篙: "gāo",
  收: "shōu",
  拾: "shí",
  果: "guǒ",
  品: "pǐn",
  之: "zhī",
  类: "lèi",
  将: "jiāng",
  去: "qù",
  也: "yě",
  独: "dú",
  自: "zì",
  登: "dēng",
  尽: "jìn",
  力: "lì",
  撑: "chēng",
  开: "kāi",
  飘: "piāo",
  荡: "dàng",
  径: "jìng",
  向: "xiàng",
  大: "dà",
  海: "hǎi",
  波: "bō",
  中: "zhōng",
  趁: "chèn",
  天: "tiān",
  风: "fēng",
  来: "lái",
  渡: "dù",
  南: "nán",
  赡: "shàn",
  部: "bù",
  洲: "zhōu",
  地: "dì",
  界: "jiè",
  料: "liào",
  应: "yīng",
  必: "bì",
  遇: "yù",
  知: "zhī",
  音: "yīn",
  者: "zhě",
  说: "shuō",
  破: "pò",
  源: "yuán",
  流: "liú",
  万: "wàn",
  法: "fǎ",
  通: "tōng",
  是: "shì",
  他: "tā",
  运: "yùn",
  至: "zhì",
  时: "shí",
  木: "mù",
  后: "hòu",
  连: "lián",
  东: "dōng",
  紧: "jǐn",
  送: "sòng",
  到: "dào",
  西: "xī",
  北: "běi",
  岸: "àn",
  前: "qián",
  乃: "nǎi",
  持: "chí",
  试: "shì",
  水: "shuǐ",
  偶: "ǒu",
  得: "dé",
  浅: "qiǎn",
  弃: "qì",
  了: "le",
  跳: "tiào",
  上: "shàng",
  只: "zhī",
  见: "jiàn",
  边: "biān",
  有: "yǒu",
  人: "rén",
  捕: "bǔ",
  鱼: "yú",
  打: "dǎ",
  雁: "yàn",
  挖: "wā",
  蛤: "há",
  淘: "táo",
  盐: "yán",
  走: "zǒu",
  近: "jìn",
  弄: "nòng",
  把: "bǎ",
  戏: "xì",
  妆: "zhuāng",
  老: "lǎo",
  虎: "hǔ",
  吓: "xià",
  那: "nà",
  丢: "diū",
  筐: "kuāng",
  网: "wǎng",
  四: "sì",
  散: "sàn",
  奔: "bēn",
  跑: "pǎo",
  不: "bù",
  动: "dòng",
  拿: "ná",
  住: "zhù",
  一: "yī",
  剥: "bō",
  衣: "yī",
  裳: "shang",
  学: "xué",
  穿: "chuān",
  在: "zài",
  身: "shēn",
  摇: "yáo",
  摆: "bǎi",
  州: "zhōu",
  过: "guò",
  府: "fǔ",
  市: "shì",
  尘: "chén",
  礼: "lǐ",
  话: "huà",
  朝: "cháo",
  餐: "cān",
  夜: "yè",
  宿: "sù",
  心: "xīn",
  里: "lǐ",
  访: "fǎng",
  问: "wèn",
  佛: "fú",
  仙: "xiān",
  神: "shén",
  圣: "shèng",
  道: "dào",
  觅: "mì",
  长: "cháng",
  生: "shēng",
  方: "fāng",
  世: "shì",
  都: "dōu",
  为: "wèi",
  名: "míng",
  利: "lì",
  徒: "tú",
  更: "gèng",
  无: "wú",
  命: "mìng",
  参: "cān",
  缘: "yuán",
  于: "yú",
  串: "chuàn",
  城: "chéng",
  游: "yóu",
  县: "xiàn",
  觉: "jué",
  八: "bā",
  九: "jiǔ",
  年: "nián",
  馀: "yú",
  忽: "hū",
  行: "xíng",
  洋: "yáng",
  想: "xiǎng",
  着: "zhe",
  外: "wài",
  依: "yī",
  又: "yòu",
  直: "zhí",
  牛: "niú",
  贺: "hè",
};

  
const translations_de = {
  次: "Zweitklassifiziert",
  日: "Tag",
  美: "Schön",
  猴: "Affe",
  王: "König",
  早: "Morgen",
  起: "erheben",
  教: "unterrichten",
  小: "Klein",
  的: "von",
  们: "Wir",
  替: "für",
  我: "ICH",
  折: "falten",
  些: "manche",
  枯: "Verdorren",
  松: "lose",
  编: "Bearbeitet",
  作: "Tun",
  筏: "Floß",
  子: "Sohn",
  取: "Wählen",
  个: "indival",
  竹: "Bambus",
  竿: "Pole",
  篙: "Pole",
  收: "erhalten",
  拾: "abholen",
  果: "Obst",
  品: "Schmecken",
  之: "Von",
  类: "Art",
  将: "Wille",
  去: "gehen",
  也: "Auch",
  独: "allein",
  自: "seit",
  登: "Login",
  尽: "Alle",
  力: "Gewalt",
  撑: "Unterstützung",
  开: "offen",
  飘: "schweben",
  荡: "Swing",
  径: "Weg",
  向: "In Richtung",
  大: "groß",
  海: "Ozean",
  波: "Welle",
  中: "Mitte",
  趁: "in Anspruch nehmen",
  天: "Himmel",
  风: "Wind",
  来: "Kommen",
  渡: "Fähre",
  南: "Süden",
  赡: "Unterstützung",
  部: "Abteilung",
  洲: "Kontinent",
  地: "Land",
  界: "Grenze",
  料: "Material",
  应: "Antwort",
  必: "muss",
  遇: "Treffen",
  知: "Wissen",
  音: "Klang",
  者: "Diese",
  说: "erklären",
  破: "brechen",
  源: "Quelle",
  流: "fließen",
  万: "Zehntausend",
  法: "Gesetz",
  通: "Passieren",
  是: "Ja",
  他: "Er",
  运: "Transport",
  至: "Zu",
  时: "Stunde",
  木: "Holz",
  后: "zurück",
  连: "sogar",
  东: "Ost",
  紧: "eng",
  送: "liefern",
  到: "ankommen",
  西: "West",
  北: "Norden",
  岸: "Ufer",
  前: "nach vorne",
  乃: "Also",
  持: "halten",
  试: "versuchen",
  水: "Wasser",
  偶: "sogar",
  得: "müssen",
  浅: "seicht",
  弃: "verlassen",
  了: "Es ist",
  跳: "Springen",
  上: "Vorgesetzter",
  只: "Nur",
  见: "Sehen",
  边: "Seite",
  有: "haben",
  人: "Menschen",
  捕: "fangen",
  鱼: "Fisch",
  打: "schlagen",
  雁: "Gans",
  挖: "graben",
  蛤: "Muschel",
  淘: "Tao",
  盐: "Salz",
  走: "Gehen",
  近: "schließen",
  弄: "Gasse",
  把: "Bündeln",
  戏: "spielen",
  妆: "Bilden",
  老: "alt",
  虎: "Tiger",
  吓: "Schrecken",
  那: "Das",
  丢: "verlassen",
  筐: "Korb",
  网: "netto",
  四: "Vier",
  散: "Verstreut",
  奔: "Laufen",
  跑: "laufen",
  不: "NEIN",
  动: "bewegen",
  拿: "nehmen",
  住: "live",
  一: "eins",
  剥: "schälen",
  衣: "Kleidung",
  裳: "Röcke",
  学: "Studie",
  穿: "tragen",
  在: "existieren",
  身: "Körper",
  摇: "Shake",
  摆: "setzen",
  州: "Zustand",
  过: "Passieren",
  府: "Haus",
  市: "Stadt",
  尘: "Staub",
  礼: "gegenwärtig",
  话: "sprechen",
  朝: "in Richtung",
  餐: "Mahlzeit",
  夜: "Nacht",
  宿: "Bleiben",
  心: "Herz",
  里: "innen",
  访: "besuchen",
  问: "fragen",
  佛: "Buddha",
  仙: "Fee",
  神: "Gott",
  圣: "Heilige",
  道: "Straße",
  觅: "suchen",
  长: "lang",
  生: "geboren",
  方: "Quadrat",
  世: "Welt",
  都: "Alle",
  为: "für",
  名: "Name",
  利: "profitieren",
  徒: "nur",
  更: "Sogar",
  无: "keiner",
  命: "Leben",
  参: "Ginseng",
  缘: "Rand",
  于: "Bei",
  串: "Saite",
  城: "Stadt",
  游: "Tour",
  县: "County",
  觉: "Schlafen",
  八: "acht",
  九: "Neun",
  年: "Jahr",
  馀: "Übrig",
  忽: "plötzlich",
  行: "OK",
  洋: "ausländisch",
  想: "denken",
  着: "Setzen",
  外: "draußen",
  依: "entsprechend",
  又: "wieder",
  直: "gerade",
  牛: "Ochse",
  贺: "Glückwunsch",
};

const translations_fr = {
  次: "De premier ordre",
  日: "jour",
  美: "beau",
  猴: "singe",
  王: "roi",
  早: "matin",
  起: "augmenter",
  教: "enseigner",
  小: "Petit",
  的: "de",
  们: "Nous",
  替: "pour",
  我: "je",
  折: "pli",
  些: "quelques",
  枯: "Flétrir",
  松: "lâche",
  编: "Édité",
  作: "faire",
  筏: "radeau",
  子: "fils",
  取: "Prendre",
  个: "autonome",
  竹: "bambou",
  竿: "pôle",
  篙: "Pôle",
  收: "recevoir",
  拾: "ramasser",
  果: "fruit",
  品: "Goût",
  之: "De",
  类: "gentil",
  将: "Volonté",
  去: "aller",
  也: "aussi",
  独: "seul",
  自: "depuis",
  登: "Se connecter",
  尽: "Tous",
  力: "forcer",
  撑: "soutien",
  开: "ouvrir",
  飘: "flotter",
  荡: "balançoire",
  径: "chemin",
  向: "Vers",
  大: "grand",
  海: "océan",
  波: "Vague",
  中: "milieu",
  趁: "profiter de",
  天: "ciel",
  风: "vent",
  来: "Viens",
  渡: "Traversier",
  南: "Sud",
  赡: "soutien",
  部: "département",
  洲: "Continent",
  地: "atterrir",
  界: "limite",
  料: "matériel",
  应: "répondre",
  必: "doit",
  遇: "Rencontrer",
  知: "Savoir",
  音: "son",
  者: "Ceux",
  说: "expliquer",
  破: "casser",
  源: "source",
  流: "couler",
  万: "Dix mille",
  法: "Loi",
  通: "Passer",
  是: "Oui",
  他: "il",
  运: "transport",
  至: "à",
  时: "heure",
  木: "Bois",
  后: "dos",
  连: "même",
  东: "Est",
  紧: "serré",
  送: "livrer",
  到: "arriver",
  西: "Ouest",
  北: "nord",
  岸: "rive",
  前: "avant",
  乃: "Donc",
  持: "prise",
  试: "essayer",
  水: "eau",
  偶: "même",
  得: "devoir",
  浅: "peu profond",
  弃: "abandonné",
  了: "C'est",
  跳: "Saut",
  上: "supérieur",
  只: "Seulement",
  见: "Voir",
  边: "côté",
  有: "avoir",
  人: "personnes",
  捕: "attraper",
  鱼: "poisson",
  打: "battre",
  雁: "Oie",
  挖: "creuser",
  蛤: "Palourde",
  淘: "Tao",
  盐: "Sel",
  走: "Marcher",
  近: "fermer",
  弄: "ruelle",
  把: "Paquet",
  戏: "jouer",
  妆: "Se maquiller",
  老: "vieux",
  虎: "Tigre",
  吓: "effrayer",
  那: "Que",
  丢: "partir",
  筐: "panier",
  网: "filet",
  四: "Quatre",
  散: "Dispersé",
  奔: "Courir",
  跑: "courir",
  不: "Non",
  动: "se déplacer",
  拿: "prendre",
  住: "en direct",
  一: "un",
  剥: "peler",
  衣: "Vêtements",
  裳: "jupes",
  学: "étude",
  穿: "porter",
  在: "exister",
  身: "corps",
  摇: "secouer",
  摆: "mettre",
  州: "État",
  过: "Passer",
  府: "Maison",
  市: "ville",
  尘: "poussière",
  礼: "présent",
  话: "parler",
  朝: "vers",
  餐: "repas",
  夜: "nuit",
  宿: "Rester",
  心: "Cœur",
  里: "à l'intérieur",
  访: "visite",
  问: "demander",
  佛: "Bouddha",
  仙: "Fée",
  神: "Dieu",
  圣: "Saint",
  道: "route",
  觅: "chercher",
  长: "long",
  生: "né",
  方: "carré",
  世: "Monde",
  都: "Tous",
  为: "pour",
  名: "nom",
  利: "profit",
  徒: "seulement",
  更: "Même",
  无: "aucun",
  命: "vie",
  参: "Ginseng",
  缘: "bord",
  于: "À",
  串: "chaîne",
  城: "ville",
  游: "tournée",
  县: "comté",
  觉: "Dormir",
  八: "huit",
  九: "Neuf",
  年: "Année",
  馀: "Restant",
  忽: "soudainement",
  行: "D'ACCORD",
  洋: "étranger",
  想: "pense",
  着: "Mettre",
  外: "dehors",
  依: "selon",
  又: "encore",
  直: "droit",
  牛: "bœuf",
  贺: "Félicitations",
};

const translations_en = {
  次: "Second-rate",
  日: "day",
  美: "beautiful",
  猴: "monkey",
  王: "king",
  早: "morning",
  起: "rise",
  教: "teach",
  小: "Small",
  的: "of",
  们: "We",
  替: "for",
  我: "I",
  折: "fold",
  些: "some",
  枯: "Wither",
  松: "loose",
  编: "Edited",
  作: "do",
  筏: "raft",
  子: "son",
  取: "Pick",
  个: "indivual",
  竹: "bamboo",
  竿: "pole",
  篙: "Pole",
  收: "receive",
  拾: "pickup",
  果: "fruit",
  品: "Taste",
  之: "Of",
  类: "kind",
  将: "Will",
  去: "go",
  也: "also",
  独: "alone",
  自: "since",
  登: "Login",
  尽: "All",
  力: "force",
  撑: "support",
  开: "open",
  飘: "float",
  荡: "swing",
  径: "path",
  向: "Towards",
  大: "big",
  海: "ocean",
  波: "Wave",
  中: "middle",
  趁: "take advantage of",
  天: "sky",
  风: "wind",
  来: "Come",
  渡: "Ferry",
  南: "South",
  赡: "support",
  部: "department",
  洲: "Continent",
  地: "land",
  界: "boundary",
  料: "material",
  应: "answer",
  必: "must",
  遇: "Meet",
  知: "Know",
  音: "sound",
  者: "Those",
  说: "explain",
  破: "break",
  源: "source",
  流: "flow",
  万: "Ten thousand",
  法: "Law",
  通: "Pass",
  是: "yes",
  他: "he",
  运: "transport",
  至: "to",
  时: "hour",
  木: "Wood",
  后: "back",
  连: "even",
  东: "East",
  紧: "tight",
  送: "deliver",
  到: "arrive",
  西: "West",
  北: "north",
  岸: "shore",
  前: "forward",
  乃: "So",
  持: "hold",
  试: "try",
  水: "water",
  偶: "even",
  得: "have to",
  浅: "shallow",
  弃: "abandoned",
  了: "It's",
  跳: "Jump",
  上: "superior",
  只: "Only",
  见: "See",
  边: "side",
  有: "have",
  人: "people",
  捕: "catch",
  鱼: "fish",
  打: "beat",
  雁: "Goose",
  挖: "dig",
  蛤: "Clam",
  淘: "Tao",
  盐: "Salt",
  走: "Walk",
  近: "close",
  弄: "alley",
  把: "Bundle",
  戏: "play",
  妆: "Makeup",
  老: "old",
  虎: "Tiger",
  吓: "scare",
  那: "That",
  丢: "leave",
  筐: "basket",
  网: "net",
  四: "Four",
  散: "Scattered",
  奔: "Run",
  跑: "run",
  不: "No",
  动: "move",
  拿: "take",
  住: "live",
  一: "one",
  剥: "peel",
  衣: "Clothes",
  裳: "skirts",
  学: "study",
  穿: "wear",
  在: "exist",
  身: "body",
  摇: "shake",
  摆: "put",
  州: "state",
  过: "Pass",
  府: "House",
  市: "city",
  尘: "dust",
  礼: "present",
  话: "talk",
  朝: "towards",
  餐: "meal",
  夜: "night",
  宿: "Stay",
  心: "Heart",
  里: "inside",
  访: "visit",
  问: "ask",
  佛: "Buddha",
  仙: "Fairy",
  神: "god",
  圣: "Saint",
  道: "road",
  觅: "seek",
  长: "long",
  生: "born",
  方: "square",
  世: "World",
  都: "All",
  为: "for",
  名: "name",
  利: "profit",
  徒: "only",
  更: "Even",
  无: "none",
  命: "life",
  参: "Ginseng",
  缘: "edge",
  于: "At",
  串: "string",
  城: "city",
  游: "tour",
  县: "county",
  觉: "Sleep",
  八: "eight",
  九: "Nine",
  年: "Year",
  馀: "Remaining",
  忽: "suddenly",
  行: "OK",
  洋: "foreign",
  想: "think",
  着: "Put",
  外: "outside",
  依: "according to",
  又: "again",
  直: "straight",
  牛: "ox",
  贺: "Congratulations",
};
const tianwen_translation_map_fr = {
  次日: "Le lendemain",
  美猴王早起: "Monkey King se lève tôt",
  教: "enseigner",
  小的们: "Les jeunes hommes",
  替我折些枯松: "Brisez un peu de pin pour moi",
  编作筏子: "Faire un radeau",
  取个竹竿作篙: "Prenez un poteau en bambou comme un poteau",
  收拾些果品之类: "Nettoyez des fruits et ainsi de suite",
  我将去也: "J'irai aussi",
  果独自登筏: "Si vous grimpez seul le radeau",
  尽力撑开: "Essayez de le soutenir",
  飘飘荡荡: "Flottant et errant",
  径向大海波中: "Dans la vague d'océan radiale",
  趁天风: "Profiter du vent",
  来渡南赡部洲地界: "Venir pour franchir les limites du sud du continent",
  料应必遇知音者: "Tu devrais rencontrer une âme sœur",
  说破源流万法通: "Parlez-nous de l'origine et du flux de toutes choses",
  也是他运至时来: "C'était aussi son arrivée",
  自登木筏之后: "Depuis l'embarquement du radeau",
  连日东南风紧: "Le vent du sud-est est serré pendant des jours",
  将他送到西北岸前: "Envoyez-le sur la rive nord-ouest",
  乃是南赡部洲地界: "C'est le territoire de Jambudvipa",
  持篙试水: "Tenez l'aviron et essayez l'eau",
  偶得浅水: "Obtenez de temps en temps de l'eau peu profonde",
  弃了筏子: "Abandonné le radeau",
  跳上岸来: "Sauter à terre",
  只见海边有人捕鱼: "J'ai vu quelqu'un pêcher dans la mer",
  打雁: "Oie",
  挖蛤: "Crâces de fouille",
  淘盐: "Nettoyage de sel",
  他走近前: "Il s'est approché",
  弄个把戏: "Faire un tour",
  妆个老虎: "Maquillage un tigre",
  吓得那些人丢筐弃网:
    "Ces gens avaient tellement peur qu'ils aient jeté le panier et abandonné le filet",
  四散奔跑: "Courir dans toutes les directions",
  将那跑不动的拿住一个: "Tenez celui qui ne peut pas courir",
  剥了他衣裳: "Dépouillé ses vêtements",
  也学人穿在身上: "Apprenez à le porter sur votre corps",
  摇摇摆摆: "Balançoire",
  穿州过府: "Passer la préfecture",
  在市尘中: "Dans la poussière de la ville",
  学人礼: "Bourse",
  学人话: "Érudits",
  朝餐夜宿: "Manger et passer la nuit",
  一心里访问佛仙神圣之道:
    "Visitez la manière sacrée du Bouddha et de l'immortalité avec un seul esprit",
  觅个长生不老之方: "Trouvez un moyen de vivre pour toujours",
  见世人都是为名为利之徒:
    "Les gens qui voient le monde sont pour la gloire et le profit",
  更无一个为身命: "Sans parler de celui pour la vie",
  猴王参访仙道: "Le roi de singe visite le chemin immortel",
  无缘得遇: "N'ayez aucune chance de se rencontrer",
  在于南赡部洲: "À Jamba, au sud",
  串长城: "Voyager au grand mur",
  游小县: "Visiter les petits comtés",
  不觉八九年馀: "Après ne pas l'avoir réalisé, plus de quatre-vingt-neuf ans",
  忽行至西洋大海: "Soudain, nous avons atteint la mer de l'ouest",
  他想着海外必有神仙:
    "Il pensait qu'il devait y avoir des immortels à l'étranger",
  独自个依前作筏: "Faire un radeau seul",
  又飘过西海: "Flottant à nouveau sur la mer Ouest",
  直至西牛贺洲地界: "Jusqu'à Xiniu Hezhou",
};
const tianwen_translation_map_de = {
  次日: "Am nächsten Tag",
  美猴王早起: "Affenkönig steht früh auf",
  教: "unterrichten",
  小的们: "Die jungen Männer",
  替我折些枯松: "Brechen Sie mir etwas Kiefer",
  编作筏子: "Ein Floß machen",
  取个竹竿作篙: "Nehmen Sie eine Bambusstange als Stange",
  收拾些果品之类: "Einige Früchte aufräumen und so weiter",
  我将去也: "Ich werde auch gehen",
  果独自登筏: "Wenn Sie das Floß alleine klettern",
  尽力撑开: "Versuche es zu unterstützen",
  飘飘荡荡: "Schwebend und durchstreifen",
  径向大海波中: "In der radialen Ozeanwelle",
  趁天风: "Den Wind ausnutzen",
  来渡南赡部洲地界:
    "Komm, um die Grenzen des südlichen Kontinents zu überschreiten",
  料应必遇知音者: "Du solltest einen Seelenverwandten treffen",
  说破源流万法通: "Erzählen Sie uns von der Herkunft und dem Fluss aller Dinge",
  也是他运至时来: "Es war auch seine Ankunft",
  自登木筏之后: "Seit dem Einsteigen in das Floß",
  连日东南风紧: "Der Südostwind ist tagelang eng",
  将他送到西北岸前: "Schicken Sie ihn an die Nordwestküste",
  乃是南赡部洲地界: "Es ist das Territorium von Jambudvipa",
  持篙试水: "Halten Sie das Ruder und probieren Sie das Wasser",
  偶得浅水: "Gelegentlich flaches Wasser bekommen",
  弃了筏子: "Das Floß aufgegeben",
  跳上岸来: "An Land springen",
  只见海边有人捕鱼: "Ich sah jemanden am Meer fischten",
  打雁: "Gans",
  挖蛤: "Muscheln graben",
  淘盐: "Salzreinigung",
  他走近前: "Er näherte sich",
  弄个把戏: "Einen Trick machen",
  妆个老虎: "Make -up einen Tiger",
  吓得那些人丢筐弃网:
    "Diese Leute hatten so Angst, dass sie den Korb weggeworfen und das Netz verlassen hatten",
  四散奔跑: "In alle Richtungen laufen",
  将那跑不动的拿住一个: "Halten Sie den, der nicht laufen kann",
  剥了他衣裳: "Stellte seine Kleidung aus",
  也学人穿在身上: "Lerne es auf deinem Körper zu tragen",
  摇摇摆摆: "Swing",
  穿州过府: "Die Präfektur übergeben",
  在市尘中: "Im Staub der Stadt",
  学人礼: "Stipendium",
  学人话: "Gelehrte",
  朝餐夜宿: "Essen und Übernachtung über Nacht",
  一心里访问佛仙神圣之道:
    "Besuchen Sie die heilige Art von Buddha und Unsterblichkeit mit einem Geist",
  觅个长生不老之方: "Finden Sie einen Weg, um für immer zu leben",
  见世人都是为名为利之徒:
    "Menschen, die die Welt sehen, sind für Ruhm und Gewinn",
  更无一个为身命: "Ganz zu schweigen von einem fürs Leben",
  猴王参访仙道: "Der Affenkönig besucht den unsterblichen Weg",
  无缘得遇: "Keine Chance haben zu treffen",
  在于南赡部洲: "In Jamba, Süd",
  串长城: "Reisen zur großen Wand",
  游小县: "Besuchen Sie kleine Landkreise",
  不觉八九年馀: "Nachdem ich es nicht merkte, mehr als neunundachtzig Jahre",
  忽行至西洋大海: "Plötzlich erreichten wir das Meer des Westens",
  他想着海外必有神仙: "Er dachte",
  独自个依前作筏: "Machen Sie ein Floß allein",
  又飘过西海: "Wieder über die Westmeer schweben",
  直至西牛贺洲地界: "Bis Xiniu Hiszhou",
};
const tianwen_translation_map_en = {
  次日: "The next day",
  美猴王早起: "Monkey King gets up early",
  教: "teach",
  小的们: "The young men",
  替我折些枯松: "Break some pine for me",
  编作筏子: "Make a raft",
  取个竹竿作篙: "Take a bamboo pole as a pole",
  收拾些果品之类: "Clean up some fruits and so on",
  我将去也: "I'll go too",
  果独自登筏: "If you climb the raft alone",
  尽力撑开: "Try to support it",
  飘飘荡荡: "Floating and roaming",
  径向大海波中: "In the radial ocean wave",
  趁天风: "Taking advantage of the wind",
  来渡南赡部洲地界: "Come to cross the boundaries of Southern Continent",
  料应必遇知音者: "You should meet a soulmate",
  说破源流万法通: "Tell us about the origin and flow of all things",
  也是他运至时来: "It was also his arrival",
  自登木筏之后: "Since boarding the raft",
  连日东南风紧: "The southeast wind is tight for days",
  将他送到西北岸前: "Send him to the northwest shore",
  乃是南赡部洲地界: "It is the territory of Jambudvipa",
  持篙试水: "Hold the oar and try the water",
  偶得浅水: "Occasionally get shallow water",
  弃了筏子: "Abandoned the raft",
  跳上岸来: "Jump ashore",
  只见海边有人捕鱼: "I saw someone fishing by the sea",
  打雁: "Goose",
  挖蛤: "Dig clams",
  淘盐: "Salt cleaning",
  他走近前: "He approached",
  弄个把戏: "Make a trick",
  妆个老虎: "Makeup a tiger",
  吓得那些人丢筐弃网:
    "Those people were so scared that they threw away the basket and abandoned the net",
  四散奔跑: "Running in all directions",
  将那跑不动的拿住一个: "Hold the one that can't run",
  剥了他衣裳: "Stripped his clothes",
  也学人穿在身上: "Learn to wear it on your body",
  摇摇摆摆: "Swing",
  穿州过府: "Passing the prefecture",
  在市尘中: "In the dust of the city",
  学人礼: "Scholarship",
  学人话: "Scholars",
  朝餐夜宿: "Dining and staying overnight",
  一心里访问佛仙神圣之道:
    "Visit the sacred way of Buddha and immortality with one mind",
  觅个长生不老之方: "Find a way to live forever",
  见世人都是为名为利之徒: "People who see the world are for fame and profit",
  更无一个为身命: "Not to mention one for life",
  猴王参访仙道: "The Monkey King visits the Immortal Path",
  无缘得遇: "Have no chance to meet",
  在于南赡部洲: "In Jamba, South",
  串长城: "Traveling to the Great Wall",
  游小县: "Visit small counties",
  不觉八九年馀: "After not realizing it, more than eighty-nine years",
  忽行至西洋大海: "Suddenly, we reached the sea of ​​the West",
  他想着海外必有神仙: "He thought there must be immortals overseas",
  独自个依前作筏: "Make a raft alone",
  又飘过西海: "Floating across the West Sea again",
  直至西牛贺洲地界: "Until Xiniu Hezhou",
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
