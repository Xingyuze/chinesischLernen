const translationCard = document.getElementById("translationCard");
// 诗歌文本
const poemText = `那猴在山中
却会行走跳跃
食草木
饮涧泉
采山花
觅树果
与狼虫为伴
虎豹为群
獐鹿为友
猕猿为亲
夜宿石崖之下
朝游峰洞之中
真是山中无甲子
寒尽不知年
一朝天气炎热
与群猴避暑
都在松陰之下顽耍
你看他一个个
一群猴子耍了一会
却去那山涧中洗澡
见那股涧水奔流
真个似滚瓜涌溅
古云禽有禽言
兽有兽语
众猴都道这股水不知是那里的水
我们今日赶闲无事
顺涧边往上溜头寻看源流
耍子去耶
喊一声
都拖男挈女
呼弟呼兄
一齐跑来
顺涧爬山
直至源流之处
乃是一股瀑布飞泉
众猴拍手称扬道好水
好水
原来此处远通山脚之下
直接大海之波
又道那一个有本事的
钻进去寻个源头出来
不伤身体者
我等即拜他为王
连呼了三声
忽见丛杂中跳出一名石猴
应声高叫我进去
我进去
好猴
你看他瞑目蹲身
将身一纵
径跳入瀑布泉中
忽睁睛抬头观看
那里边却无水无波
明明朗朗的一架桥梁
他住了身
定了神
仔细再看
原来是座铁板桥
桥下之水
冲贯于石窍之间
倒挂流出去
遮闭了桥门
却又欠身上桥头
再走再看
却似有人家住处一般
真个好所在
看罢多时
跳过桥中间
左右观看
只见正当中有一石碣
碣上有一行楷书大字
镌着花果山福地
水帘洞洞天
`;
// 翻译数据 (示例)


const translations_de = {
  那: "Das",
  猴: "Affe",
  在: "existieren",
  山: "Berg",
  中: "Mitte",
  却: "Aber",
  会: "treffen",
  行: "OK",
  走: "Gehen",
  跳: "Springen",
  跃: "springen",
  食: "Essen",
  草: "Gras",
  木: "Holz",
  饮: "trinken",
  涧: "Strom",
  泉: "Frühling",
  采: "Wählen",
  花: "Blume",
  觅: "suchen",
  树: "Baum",
  果: "Obst",
  与: "Und",
  狼: "Wolf",
  虫: "Insekt",
  为: "für",
  伴: "Begleiter",
  虎: "Tiger",
  豹: "Leopard",
  群: "Gruppe",
  獐: "Rogen",
  鹿: "Reh",
  友: "Freund",
  猕: "Makaken",
  猿: "Affe",
  亲: "relativ",
  夜: "Nacht",
  宿: "Bleiben",
  石: "Stein",
  崖: "Cliff",
  之: "Von",
  下: "Runter",
  朝: "in Richtung",
  游: "Tour",
  峰: "Gipfel",
  洞: "Loch",
  真: "real",
  是: "Ja",
  无: "keiner",
  甲: "Erste",
  子: "Sohn",
  寒: "kalt",
  尽: "Alle",
  不: "NEIN",
  知: "Wissen",
  年: "Jahr",
  一: "eins",
  天: "Himmel",
  气: "Gas",
  炎: "Entzündung",
  热: "heiß",
  避: "vermeiden",
  暑: "Hitze",
  都: "Alle",
  松: "lose",
  陰: "大",
  顽: "hartnäckig",
  耍: "Spielen",
  你: "Du",
  看: "sehen",
  他: "Er",
  个: "indival",
  了: "Es ist",
  去: "gehen",
  洗: "waschen",
  澡: "Bad",
  见: "Sehen",
  股: "Aktie",
  水: "Wasser",
  奔: "Laufen",
  流: "fließen",
  似: "wie",
  滚: "rollen",
  瓜: "Melone",
  涌: "Beeinflussen",
  溅: "Spritzen",
  古: "Antike",
  云: "Wolke",
  禽: "Vögel",
  有: "haben",
  言: "Wort",
  兽: "Tier",
  语: "Sprache",
  众: "Alle",
  道: "Straße",
  这: "Das",
  里: "innen",
  的: "von",
  我: "ICH",
  们: "Wir",
  今: "Jetzt",
  日: "Tag",
  赶: "Beeil dich",
  闲: "Leerlauf",
  事: "Ding",
  顺: "Sicher",
  边: "Seite",
  往: "Vergangenheit",
  上: "Vorgesetzter",
  溜: "Beleg",
  头: "Kopf",
  寻: "Auf der Suche nach",
  源: "Quelle",
  耶: "Ja",
  喊: "Anruf",
  声: "Stimme",
  拖: "ziehen",
  男: "männlich",
  挈: "herausziehen",
  女: "weiblich",
  呼: "Anruf",
  弟: "jüngerer Bruder",
  兄: "Bruder",
  齐: "zusammen",
  跑: "laufen",
  来: "Kommen",
  爬: "Aufstieg",
  直: "gerade",
  至: "Zu",
  处: "Wo",
  乃: "Also",
  瀑: "Wasserfall",
  布: "Tuch",
  飞: "fliegen",
  拍: "schießen",
  手: "Hand",
  称: "sagen",
  扬: "Yang",
  好: "Gut",
  原: "Original",
  此: "Das",
  远: "Weit",
  通: "Passieren",
  脚: "Fuß",
  接: "fangen",
  大: "groß",
  海: "Ozean",
  波: "Welle",
  又: "wieder",
  本: "Buch",
  钻: "Diamant",
  进: "Eingeben",
  出: "aus",
  伤: "verletzt",
  身: "Körper",
  体: "Körper",
  者: "Diese",
  等: "Warten",
  即: "Im Augenblick",
  拜: "Tschüss",
  王: "König",
  连: "sogar",
  三: "drei",
  忽: "plötzlich",
  丛: "Hinweis",
  杂: "Verschiedenes",
  名: "Name",
  应: "Antwort",
  高: "hoch",
  叫: "Anruf",
  瞑: "Schließen Sie die Augen",
  目: "Bedeutung",
  蹲: "hocken",
  将: "Wille",
  纵: "Vertikale",
  径: "Weg",
  入: "eingeben",
  睁: "Augen auf",
  睛: "Auge",
  抬: "Aufzug",
  观: "Sicht",
  明: "hell",
  朗: "Lang",
  架: "Regal",
  桥: "Brücke",
  梁: "Strahl",
  住: "live",
  定: "Sicherlich",
  神: "Gott",
  仔: "jung",
  细: "dünn",
  再: "Wieder",
  座: "Sitz",
  铁: "Eisen",
  板: "Platte",
  冲: "eilen",
  贯: "Guan",
  于: "Bei",
  窍: "Tipps",
  间: "zwischen",
  倒: "fallen",
  挂: "aufhängen",
  遮: "Abdeckung",
  闭: "schließen",
  门: "Tür",
  欠: "verdanken",
  人: "Menschen",
  家: "Heim",
  般: "Normal",
  所: "Ort",
  罢: "stoppen",
  多: "viele",
  时: "Stunde",
  过: "Passieren",
  左: "Links",
  右: "Rechts",
  只: "Nur",
  正: "Nur",
  当: "Wann",
  碣: "Steintafel",
  楷: "Kai",
  书: "Buch",
  字: "Charakter",
  镌: "gravieren",
  着: "Setzen",
  福: "Segen",
  地: "Land",
  帘: "Vorhang",
};


const translations_fr = {
  那: "Que",
  猴: "singe",
  在: "exister",
  山: "Montagne",
  中: "milieu",
  却: "mais",
  会: "réunion",
  行: "D'ACCORD",
  走: "Marcher",
  跳: "Saut",
  跃: "saut",
  食: "Nourriture",
  草: "Herbe",
  木: "Bois",
  饮: "boire",
  涧: "Flux",
  泉: "printemps",
  采: "Prendre",
  花: "fleur",
  觅: "chercher",
  树: "Arbre",
  果: "fruit",
  与: "et",
  狼: "Loup",
  虫: "insecte",
  为: "pour",
  伴: "Compagnon",
  虎: "Tigre",
  豹: "Léopard",
  群: "groupe",
  獐: "chevreuil",
  鹿: "cerf",
  友: "ami",
  猕: "macaque",
  猿: "singe",
  亲: "relatif",
  夜: "nuit",
  宿: "Rester",
  石: "pierre",
  崖: "Falaise",
  之: "De",
  下: "Vers le bas",
  朝: "vers",
  游: "tournée",
  峰: "culminer",
  洞: "Trou",
  真: "réel",
  是: "Oui",
  无: "aucun",
  甲: "D'abord",
  子: "fils",
  寒: "froid",
  尽: "Tous",
  不: "Non",
  知: "Savoir",
  年: "Année",
  一: "un",
  天: "ciel",
  气: "gaz",
  炎: "inflammation",
  热: "chaud",
  避: "éviter",
  暑: "chaleur",
  都: "Tous",
  松: "lâche",
  陰: "大",
  顽: "têtu",
  耍: "Jouer",
  你: "toi",
  看: "regarder",
  他: "il",
  个: "autonome",
  了: "C'est",
  去: "aller",
  洗: "laver",
  澡: "bain",
  见: "Voir",
  股: "partager",
  水: "eau",
  奔: "Courir",
  流: "couler",
  似: "comme",
  滚: "rouler",
  瓜: "melon",
  涌: "Influence",
  溅: "éclabousser",
  古: "antiquité",
  云: "nuage",
  禽: "oiseaux",
  有: "avoir",
  言: "Mot",
  兽: "bête",
  语: "langue",
  众: "Tous",
  道: "route",
  这: "ce",
  里: "à l'intérieur",
  的: "de",
  我: "je",
  们: "Nous",
  今: "maintenant",
  日: "jour",
  赶: "Dépêche-toi",
  闲: "inactif",
  事: "chose",
  顺: "Bien sûr",
  边: "côté",
  往: "Passé",
  上: "supérieur",
  溜: "glisser",
  头: "tête",
  寻: "À la recherche de",
  源: "source",
  耶: "Ouais",
  喊: "appel",
  声: "Voix",
  拖: "traîner",
  男: "mâle",
  挈: "se retirer",
  女: "femelle",
  呼: "appel",
  弟: "jeune frère",
  兄: "Frère",
  齐: "ensemble",
  跑: "courir",
  来: "Viens",
  爬: "grimper",
  直: "droit",
  至: "à",
  处: "Où",
  乃: "Donc",
  瀑: "cascade",
  布: "tissu",
  飞: "voler",
  拍: "tirer",
  手: "main",
  称: "dire",
  扬: "Yang",
  好: "bien",
  原: "Original",
  此: "ce",
  远: "Loin",
  通: "Passer",
  脚: "pied",
  接: "attraper",
  大: "grand",
  海: "océan",
  波: "Vague",
  又: "encore",
  本: "Livre",
  钻: "Diamant",
  进: "Entrer",
  出: "dehors",
  伤: "blesser",
  身: "corps",
  体: "corps",
  者: "Ceux",
  等: "attendez",
  即: "Tout de suite",
  拜: "au revoir",
  王: "roi",
  连: "même",
  三: "trois",
  忽: "soudainement",
  丛: "Indice",
  杂: "divers",
  名: "nom",
  应: "répondre",
  高: "haut",
  叫: "Appel",
  瞑: "fermer les yeux",
  目: "Signification",
  蹲: "squatter",
  将: "Volonté",
  纵: "verticale",
  径: "chemin",
  入: "entrer",
  睁: "yeux ouverts",
  睛: "œil",
  抬: "ascenseur",
  观: "Voir",
  明: "brillant",
  朗: "Long",
  架: "étagère",
  桥: "pont",
  梁: "Faisceau",
  住: "en direct",
  定: "Certainement",
  神: "Dieu",
  仔: "jeune",
  细: "mince",
  再: "Encore",
  座: "siège",
  铁: "fer",
  板: "plaque",
  冲: "se précipiter",
  贯: "Guan",
  于: "À",
  窍: "Conseils",
  间: "entre",
  倒: "automne",
  挂: "accrocher",
  遮: "couverture",
  闭: "fermer",
  门: "Porte",
  欠: "devoir",
  人: "personnes",
  家: "Maison",
  般: "Normale",
  所: "Lieu",
  罢: "arrêt",
  多: "beaucoup",
  时: "heure",
  过: "Passer",
  左: "Gauche",
  右: "droite",
  只: "Seulement",
  正: "juste",
  当: "quand",
  碣: "comprimé de pierre",
  楷: "Kai",
  书: "Livre",
  字: "Personnage",
  镌: "graver",
  着: "Mettre",
  福: "bénédiction",
  地: "atterrir",
  帘: "rideau",
};


const translations_en = {
  那: "That",
  猴: "monkey",
  在: "exist",
  山: "Mountain",
  中: "middle",
  却: "but",
  会: "meeting",
  行: "OK",
  走: "Walk",
  跳: "Jump",
  跃: "jump",
  食: "Food",
  草: "Grass",
  木: "Wood",
  饮: "drink",
  涧: "Stream",
  泉: "spring",
  采: "Pick",
  花: "flower",
  觅: "seek",
  树: "Tree",
  果: "fruit",
  与: "and",
  狼: "Wolf",
  虫: "insect",
  为: "for",
  伴: "Companion",
  虎: "Tiger",
  豹: "Leopard",
  群: "group",
  獐: "roe",
  鹿: "deer",
  友: "friend",
  猕: "macaque",
  猿: "ape",
  亲: "relative",
  夜: "night",
  宿: "Stay",
  石: "stone",
  崖: "Cliff",
  之: "Of",
  下: "Down",
  朝: "towards",
  游: "tour",
  峰: "peak",
  洞: "Hole",
  真: "real",
  是: "yes",
  无: "none",
  甲: "First",
  子: "son",
  寒: "cold",
  尽: "All",
  不: "No",
  知: "Know",
  年: "Year",
  一: "one",
  天: "sky",
  气: "gas",
  炎: "inflammation",
  热: "hot",
  避: "avoid",
  暑: "heat",
  都: "All",
  松: "loose",
  陰: "大",
  顽: "stubborn",
  耍: "Play",
  你: "you",
  看: "look",
  他: "he",
  个: "indivual",
  了: "It's",
  去: "go",
  洗: "wash",
  澡: "bath",
  见: "See",
  股: "share",
  水: "water",
  奔: "Run",
  流: "flow",
  似: "like",
  滚: "roll",
  瓜: "melon",
  涌: "Influence",
  溅: "splash",
  古: "antiquity",
  云: "cloud",
  禽: "birds",
  有: "have",
  言: "Word",
  兽: "beast",
  语: "language",
  众: "All",
  道: "road",
  这: "this",
  里: "inside",
  的: "of",
  我: "I",
  们: "We",
  今: "now",
  日: "day",
  赶: "Hurry up",
  闲: "idle",
  事: "thing",
  顺: "Sure",
  边: "side",
  往: "Past",
  上: "superior",
  溜: "slip",
  头: "head",
  寻: "Looking for",
  源: "source",
  耶: "yeah",
  喊: "call",
  声: "Voice",
  拖: "drag",
  男: "male",
  挈: "pull out",
  女: "female",
  呼: "call",
  弟: "younger brother",
  兄: "Brother",
  齐: "together",
  跑: "run",
  来: "Come",
  爬: "climb",
  直: "straight",
  至: "to",
  处: "Where",
  乃: "So",
  瀑: "waterfall",
  布: "cloth",
  飞: "fly",
  拍: "shoot",
  手: "hand",
  称: "say",
  扬: "Yang",
  好: "good",
  原: "Original",
  此: "this",
  远: "Far",
  通: "Pass",
  脚: "foot",
  接: "catch",
  大: "big",
  海: "ocean",
  波: "Wave",
  又: "again",
  本: "Book",
  钻: "Diamond",
  进: "Enter",
  出: "out",
  伤: "hurt",
  身: "body",
  体: "body",
  者: "Those",
  等: "wait",
  即: "Right now",
  拜: "bye",
  王: "king",
  连: "even",
  三: "three",
  忽: "suddenly",
  丛: "Clue",
  杂: "miscellaneous",
  名: "name",
  应: "answer",
  高: "high",
  叫: "Call",
  瞑: "close the eyes",
  目: "Meaning",
  蹲: "squat",
  将: "Will",
  纵: "vertical",
  径: "path",
  入: "enter",
  睁: "open eyes",
  睛: "eye",
  抬: "lift",
  观: "View",
  明: "bright",
  朗: "Long",
  架: "shelf",
  桥: "bridge",
  梁: "Beam",
  住: "live",
  定: "Certainly",
  神: "god",
  仔: "young",
  细: "thin",
  再: "Again",
  座: "seat",
  铁: "iron",
  板: "plate",
  冲: "rush",
  贯: "Guan",
  于: "At",
  窍: "Tips",
  间: "between",
  倒: "fall",
  挂: "hang",
  遮: "cover",
  闭: "close",
  门: "Door",
  欠: "owe",
  人: "people",
  家: "Home",
  般: "Normal",
  所: "Place",
  罢: "stop",
  多: "many",
  时: "hour",
  过: "Pass",
  左: "Left",
  右: "right",
  只: "Only",
  正: "just",
  当: "when",
  碣: "stone tablet",
  楷: "Kai",
  书: "Book",
  字: "Character",
  镌: "engrave",
  着: "Put",
  福: "blessing",
  地: "land",
  帘: "curtain",
};

const pinyinMap = {
  那: "nà",
  猴: "hóu",
  在: "zài",
  山: "shān",
  中: "zhōng",
  却: "què",
  会: "huì",
  行: "xíng",
  走: "zǒu",
  跳: "tiào",
  跃: "yuè",
  食: "shí",
  草: "cǎo",
  木: "mù",
  饮: "yǐn",
  涧: "jiàn",
  泉: "quán",
  采: "cǎi",
  花: "huā",
  觅: "mì",
  树: "shù",
  果: "guǒ",
  与: "yǔ",
  狼: "láng",
  虫: "chóng",
  为: "wèi",
  伴: "bàn",
  虎: "hǔ",
  豹: "bào",
  群: "qún",
  獐: "zhāng",
  鹿: "lù",
  友: "yǒu",
  猕: "mí",
  猿: "yuán",
  亲: "qīn",
  夜: "yè",
  宿: "sù",
  石: "shí",
  崖: "yá",
  之: "zhī",
  下: "xià",
  朝: "cháo",
  游: "yóu",
  峰: "fēng",
  洞: "dòng",
  真: "zhēn",
  是: "shì",
  无: "wú",
  甲: "jiǎ",
  子: "zi",
  寒: "hán",
  尽: "jǐn",
  不: "bù",
  知: "zhī",
  年: "nián",
  一: "yī",
  天: "tiān",
  气: "qì",
  炎: "yán",
  热: "rè",
  避: "bì",
  暑: "shǔ",
  都: "dōu",
  松: "sōng",
  陰: "yīn",
  顽: "wán",
  耍: "shuǎ",
  你: "nǐ",
  看: "kàn",
  他: "tā",
  个: "gè",
  了: "le",
  去: "qù",
  洗: "xǐ",
  澡: "zǎo",
  见: "jiàn",
  股: "gǔ",
  水: "shuǐ",
  奔: "bēn",
  流: "liú",
  似: "shì",
  滚: "gǔn",
  瓜: "guā",
  涌: "yǒng",
  溅: "jiàn",
  古: "gǔ",
  云: "yún",
  禽: "qín",
  有: "yǒu",
  言: "yán",
  兽: "shòu",
  语: "yǔ",
  众: "zhòng",
  道: "dào",
  这: "zhè",
  里: "lǐ",
  的: "de",
  我: "wǒ",
  们: "men",
  今: "jīn",
  日: "rì",
  赶: "gǎn",
  闲: "xián",
  事: "shì",
  顺: "shùn",
  边: "biān",
  往: "wǎng",
  上: "shàng",
  溜: "liū",
  头: "tóu",
  寻: "xún",
  源: "yuán",
  耶: "yé",
  喊: "hǎn",
  声: "shēng",
  拖: "tuō",
  男: "nán",
  挈: "qiè",
  女: "nǚ",
  呼: "hū",
  弟: "dì",
  兄: "xiōng",
  齐: "qí",
  跑: "pǎo",
  来: "lái",
  爬: "pá",
  直: "zhí",
  至: "zhì",
  处: "chù",
  乃: "nǎi",
  瀑: "pù",
  布: "bù",
  飞: "fēi",
  拍: "pāi",
  手: "shǒu",
  称: "chēng",
  扬: "yáng",
  好: "hǎo",
  原: "yuán",
  此: "cǐ",
  远: "yuǎn",
  通: "tōng",
  脚: "jiǎo",
  接: "jiē",
  大: "dà",
  海: "hǎi",
  波: "bō",
  又: "yòu",
  本: "běn",
  钻: "zuān",
  进: "jìn",
  出: "chū",
  伤: "shāng",
  身: "shēn",
  体: "tǐ",
  者: "zhě",
  等: "děng",
  即: "jí",
  拜: "bài",
  王: "wáng",
  连: "lián",
  三: "sān",
  忽: "hū",
  丛: "cóng",
  杂: "zá",
  名: "míng",
  应: "yīng",
  高: "gāo",
  叫: "jiào",
  瞑: "míng",
  目: "mù",
  蹲: "dūn",
  将: "jiāng",
  纵: "zòng",
  径: "jìng",
  入: "rù",
  睁: "zhēng",
  睛: "jīng",
  抬: "tái",
  观: "guān",
  明: "míng",
  朗: "lǎng",
  架: "jià",
  桥: "qiáo",
  梁: "liáng",
  住: "zhù",
  定: "dìng",
  神: "shén",
  仔: "zǐ",
  细: "xì",
  再: "zài",
  座: "zuò",
  铁: "tiě",
  板: "bǎn",
  冲: "chōng",
  贯: "guàn",
  于: "yú",
  窍: "qiào",
  间: "jiān",
  倒: "dào",
  挂: "guà",
  遮: "zhē",
  闭: "bì",
  门: "mén",
  欠: "qiàn",
  人: "rén",
  家: "jiā",
  般: "bān",
  所: "suǒ",
  罢: "bà",
  多: "duō",
  时: "shí",
  过: "guò",
  左: "zuǒ",
  右: "yòu",
  只: "zhǐ",
  正: "zhèng",
  当: "dāng",
  碣: "jié",
  楷: "kǎi",
  书: "shū",
  字: "zì",
  镌: "juān",
  着: "zhe",
  福: "fú",
  地: "dì",
  帘: "lián",
};

const tianwen_translation_map_fr = {
  那猴在山中: "Le singe dans les montagnes",
  却会行走跳跃: "Mais il peut marcher et sauter",
  食草木: "Mangeur d'herbe",
  饮涧泉: "Boire le ressort du ruisseau",
  采山花: "Prendre des fleurs de montagne",
  觅树果: "Trouver des fruits",
  与狼虫为伴: "Compagnon avec des insectes de loup",
  虎豹为群: "Les tigres et les léopards sont en groupe",
  獐鹿为友: "Roe Deer est un ami",
  猕猿为亲: "Les singes sont des parents",
  夜宿石崖之下: "Restez la nuit sous la falaise",
  朝游峰洞之中: "Dans la grotte de Chaoyoufeng",
  真是山中无甲子: "Il n'y a vraiment pas de jiazi dans les montagnes",
  寒尽不知年: "Je ne sais pas l'année après le froid",
  一朝天气炎热: "Une fois le temps chaud",
  与群猴避暑: "Éloignez-vous de l'été avec des singes",
  都在松陰之下顽耍: "Ils jouent tous obstinément sous le pin et",
  你看他一个个: "Regarde-le un par un",
  一群猴子耍了一会: "Un groupe de singes a joué pendant un moment",
  却去那山涧中洗澡:
    "Mais je suis allé au ruisseau de montagne pour prendre un bain",
  见那股涧水奔流: "Voir le flux qui coule",
  真个似滚瓜涌溅: "C'est vraiment comme une touche de melons",
  古云禽有禽言: "Des mots anciens sur les oiseaux",
  兽有兽语: "Les bêtes ont des bêtes",
  众猴都道这股水不知是那里的水:
    "Tous les singes ont dit que cette eau ne savait pas où elle était.",
  我们今日赶闲无事: "Nous sommes gratuits aujourd'hui",
  顺涧边往上溜头寻看源流: "Montez le ruisseau et cherchez la source",
  耍子去耶: "Allez jouer avec votre enfant",
  喊一声: "Crier",
  都拖男挈女: "Tous les hommes et les femmes traînés",
  呼弟呼兄: "Hu frère Hu frère",
  一齐跑来: "Se réunir",
  顺涧爬山: "Grimpant la montagne dans le ruisseau",
  直至源流之处: "Jusqu'à la source",
  乃是一股瀑布飞泉: "C'est une cascade et une source",
  众猴拍手称扬道好水: "Les singes ont applaudi la bonne eau",
  好水: "Bonne eau",
  原来此处远通山脚之下: "Il s'avère que voici au pied de la montagne lointaine",
  直接大海之波: "Vagues directes de la mer",
  又道那一个有本事的: "Une autre personne qui est capable",
  钻进去寻个源头出来: "Entrez et trouvez une source",
  不伤身体者: "Ceux qui ne font pas de mal à leur corps",
  我等即拜他为王: "Je l'adorerai comme roi",
  连呼了三声: "Appelé trois fois de suite",
  忽见丛杂中跳出一名石猴: "Soudain, un singe de pierre a sauté de la foule",
  应声高叫我进去: "M'entendre dans",
  我进去: "Je vais entrer",
  好猴: "Bon singe",
  你看他瞑目蹲身: "Regarde-le accroupi dans ses yeux et ses yeux",
  将身一纵: "Tirez votre corps",
  径跳入瀑布泉中: "Sauter dans la cascade",
  忽睁睛抬头观看: "Soudain, j'ai ouvert les yeux et j'ai levé les yeux",
  那里边却无水无波: "Il n'y a pas d'eau ni de vagues là-bas",
  明明朗朗的一架桥梁: "Un pont clair",
  他住了身: "Il est resté",
  定了神: "Concentré",
  仔细再看: "Regarder attentivement",
  原来是座铁板桥: "Il s'est avéré être un pont de fer",
  桥下之水: "Eau sous le pont",
  冲贯于石窍之间: "Écraser entre les pôles de pierre",
  倒挂流出去: "Upside Down s'écoule",
  遮闭了桥门: "Clôture de la porte du pont",
  却又欠身上桥头: "Mais il doit la tête du pont",
  再走再看: "Allons voir à nouveau",
  却似有人家住处一般: "Mais il semble que quelqu'un vit dans une maison",
  真个好所在: "Quel bon endroit",
  看罢多时: "Après avoir regardé longtemps",
  跳过桥中间: "Sauter au milieu du pont",
  左右观看: "Regardez à gauche et à droite",
  只见正当中有一石碣: "J'ai vu une tablette en pierre au milieu",
  碣上有一行楷书大字:
    "Il y a une ligne de grands personnages de script réguliers sur la stèle",
  镌着花果山福地: "Gravé de la terre de bénédiction des fleurs et des fruits",
  水帘洞洞天: "Ciel de cave à rideaux d'eau",
};

const tianwen_translation_map_de = {
  那猴在山中: "Der Affe in den Bergen",
  却会行走跳跃: "Aber er kann laufen und springen",
  食草木: "Grasfresser",
  饮涧泉: "Trinken Sie den Bachfeder",
  采山花: "Bergblumen pflücken",
  觅树果: "Früchte finden",
  与狼虫为伴: "Begleiter mit Wolfsekten",
  虎豹为群: "Tiger und Leoparden sind in Gruppen",
  獐鹿为友: "Roe Deer ist ein Freund",
  猕猿为亲: "Affen sind Verwandte",
  夜宿石崖之下: "Nacht unter der Klippe bleiben",
  朝游峰洞之中: "In der Chaoyoufg -Höhle",
  真是山中无甲子: "Es gibt wirklich keinen Jiazi in den Bergen",
  寒尽不知年: "Ich weiß das Jahr nach der Kälte nicht",
  一朝天气炎热: "Sobald das Wetter heiß ist",
  与群猴避暑: "Halten Sie sich mit Affen vom Sommer fern",
  都在松陰之下顽耍: "Sie spielen alle hartnäckig unter der Kiefer und",
  你看他一个个: "Schau ihn nacheinander an",
  一群猴子耍了一会: "Eine Gruppe von Affen spielte eine Weile",
  却去那山涧中洗澡: "Aber ich ging zum Bergbach, um ein Bad zu nehmen",
  见那股涧水奔流: "Siehe den Strom fließend",
  真个似滚瓜涌溅: "Es ist wie ein Spritzer Melonen",
  古云禽有禽言: "Alte Worte über Vögel",
  兽有兽语: "Bestien haben Tiere",
  众猴都道这股水不知是那里的水:
    "Alle Affen sagten, dass dieses Wasser nicht bekannt war, wo es war.",
  我们今日赶闲无事: "Wir sind heute frei",
  顺涧边往上溜头寻看源流:
    "Gehen Sie den Strom hinauf und suchen Sie nach der Quelle",
  耍子去耶: "Geh und spiel mit deinem Kind",
  喊一声: "Schreien",
  都拖男挈女: "Alle schleppten Männer und Frauen",
  呼弟呼兄: "Hu Bruder Hu Bruder",
  一齐跑来: "Zusammenkommen",
  顺涧爬山: "Klettern Sie den Berg im Bach",
  直至源流之处: "Bis zur Quelle",
  乃是一股瀑布飞泉: "Es ist ein Wasserfall und ein Frühling",
  众猴拍手称扬道好水: "Die Affen applaudierten das gute Wasser",
  好水: "Gutes Wasser",
  原来此处远通山脚之下:
    "Es stellt sich heraus, dass sich hier am Fuße des fernen Berges befindet",
  直接大海之波: "Direkte Wellen des Meeres",
  又道那一个有本事的: "Eine andere Person, die fähig ist",
  钻进去寻个源头出来: "Gehen Sie hinein und finden Sie eine Quelle",
  不伤身体者: "Diejenigen, die ihren Körpern nicht schaden",
  我等即拜他为王: "Ich werde ihn als König anbeten",
  连呼了三声: "Dreimal hintereinander gerufen",
  忽见丛杂中跳出一名石猴: "Plötzlich sprang ein Steinaffen aus der Menge",
  应声高叫我进去: "Hör mich in",
  我进去: "Ich werde hineingehen",
  好猴: "Guter Affe",
  你看他瞑目蹲身: "Schau ihn an, wie er in seinen Augen und Augen hockte",
  将身一纵: "Zieh deinen Körper",
  径跳入瀑布泉中: "In den Wasserfall springen",
  忽睁睛抬头观看: "Plötzlich öffnete ich meine Augen und sah auf",
  那里边却无水无波: "Dort gibt es kein Wasser oder Wellen",
  明明朗朗的一架桥梁: "Eine klare Brücke",
  他住了身: "Er blieb",
  定了神: "Konzentriert",
  仔细再看: "Schauen Sie sich genau an",
  原来是座铁板桥:
    "Es stellte sich heraus, dass es sich um eine Eisenbrücke handelte",
  桥下之水: "Wasser unter der Brücke",
  冲贯于石窍之间: "Zwischen Steinmasten zerquetschen",
  倒挂流出去: "Overside Down fließt heraus",
  遮闭了桥门: "Die Brückentür schließen",
  却又欠身上桥头: "Aber er schuldet den Brückenkopf",
  再走再看: "Lass uns noch einmal sehen",
  却似有人家住处一般: "Aber es scheint, als würde jemand in einem Haus leben",
  真个好所在: "Was für ein guter Ort",
  看罢多时: "Nach langer Zeit gesehen",
  跳过桥中间: "Über die Mitte der Brücke springen",
  左右观看: "Beobachten Sie links und rechts",
  只见正当中有一石碣: "Ich sah eine Steintafel in der Mitte",
  碣上有一行楷书大字:
    "Es gibt eine Reihe großer regulärer Skriptcharaktere auf der Stele",
  镌着花果山福地: "Mit dem Segen Land der Blumen und Früchte eingraviert",
  水帘洞洞天: "Wasservorhanghöhle Himmel",
};

const tianwen_translation_map_en = {
  那猴在山中: "The monkey in the mountains",
  却会行走跳跃: "But he can walk and jump",
  食草木: "Grass-eating",
  饮涧泉: "Drinking the Stream Spring",
  采山花: "Picking mountain flowers",
  觅树果: "Finding fruits",
  与狼虫为伴: "Companion with wolf insects",
  虎豹为群: "Tigers and leopards are in groups",
  獐鹿为友: "Roe deer is a friend",
  猕猿为亲: "Apes are relatives",
  夜宿石崖之下: "Stay at night under the cliff",
  朝游峰洞之中: "In the Chaoyoufeng Cave",
  真是山中无甲子: "There is really no Jiazi in the mountains",
  寒尽不知年: "I don't know the year after the cold",
  一朝天气炎热: "Once the weather is hot",
  与群猴避暑: "Stay away from the summer with monkeys",
  都在松陰之下顽耍: "They are all playing stubbornly under the pine and",
  你看他一个个: "Look at him one by one",
  一群猴子耍了一会: "A group of monkeys played for a while",
  却去那山涧中洗澡: "But I went to the mountain stream to take a bath",
  见那股涧水奔流: "See the stream flowing",
  真个似滚瓜涌溅: "It's really like a splash of melons",
  古云禽有禽言: "Ancient words about birds",
  兽有兽语: "Beasts have beasts",
  众猴都道这股水不知是那里的水:
    "All the monkeys said that this water was not known where it was.",
  我们今日赶闲无事: "We're free today",
  顺涧边往上溜头寻看源流: "Walk up the stream and look for the source",
  耍子去耶: "Go and play with your child",
  喊一声: "Scream",
  都拖男挈女: "All dragged men and women",
  呼弟呼兄: "Hu brother Hu brother",
  一齐跑来: "Come together",
  顺涧爬山: "Climbing the mountain in the stream",
  直至源流之处: "Until the source",
  乃是一股瀑布飞泉: "It's a waterfall and a spring",
  众猴拍手称扬道好水: "The monkeys applauded the good water",
  好水: "Good water",
  原来此处远通山脚之下:
    "It turns out that here is at the foot of the far mountain",
  直接大海之波: "Direct waves of the sea",
  又道那一个有本事的: "Another person who is capable",
  钻进去寻个源头出来: "Go in and find a source",
  不伤身体者: "Those who do not harm their bodies",
  我等即拜他为王: "I will worship him as king",
  连呼了三声: "Called three times in a row",
  忽见丛杂中跳出一名石猴: "Suddenly, a stone monkey jumped out of the crowd",
  应声高叫我进去: "Hearing me in",
  我进去: "I'll go in",
  好猴: "Good monkey",
  你看他瞑目蹲身: "Look at him squatted in his eyes and eyes",
  将身一纵: "Pull your body",
  径跳入瀑布泉中: "Jump into the waterfall",
  忽睁睛抬头观看: "Suddenly, I opened my eyes and looked up",
  那里边却无水无波: "There is no water or waves there",
  明明朗朗的一架桥梁: "A clear bridge",
  他住了身: "He stayed",
  定了神: "Concentrated",
  仔细再看: "Look carefully",
  原来是座铁板桥: "It turned out to be an iron bridge",
  桥下之水: "Water under the bridge",
  冲贯于石窍之间: "Crashing between stone poles",
  倒挂流出去: "Upside down flows out",
  遮闭了桥门: "Closing the bridge door",
  却又欠身上桥头: "But he owes the bridge head",
  再走再看: "Let's go and see again",
  却似有人家住处一般: "But it seems like someone lives in a house",
  真个好所在: "What a good place",
  看罢多时: "After watching for a long time",
  跳过桥中间: "Jump over the middle of the bridge",
  左右观看: "Watch left and right",
  只见正当中有一石碣: "I saw a stone tablet in the middle",
  碣上有一行楷书大字:
    "There is a line of large regular script characters on the stele",
  镌着花果山福地: "Engraved with the blessing land of flowers and fruits",
  水帘洞洞天: "Water curtain cave sky",
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
