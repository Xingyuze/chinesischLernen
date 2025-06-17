const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `此时说破根源
悟空心灵福至
切切记了口诀
对祖师拜谢深恩
即出后门观看
但见东方天色微舒白
西路金光大显明
依旧路
转到前门
轻轻的推开进去
坐在原寝之处
故将床铺摇响道
天光了
天光了
起耶
那大众还正睡哩
不知悟空已得了好事
当日起来打混
暗暗维持
子前午后
自己调息
却早过了三年
祖师复登宝座
与众说法
谈的是公案比语
论的是外像包皮
忽问
悟空何在
悟空近前跪下
弟子有
祖师道
你这一向修些什么道来
悟空道
弟子近来法性颇通
根源亦渐坚固矣
祖师道
你既通法性
会得根源
已注神体
却只是防备着
三灾利害
悟空听说
沉吟良久道
师父之言谬矣
我尝闻道高德隆
与天同寿
水火既济
百病不生
却怎么有个
三灾利害
祖师道
此乃非常之道
夺天地之造化
侵日月之玄机
丹成之后
鬼神难容
虽驻颜益寿
但到了五百年后
天降雷灾打你
须要见性明心
预先躲避
躲得过
寿与天齐
躲不过
就此绝命
再五百年后
天降火灾烧你
这火不是天火
亦不是凡火
唤做
阴火
自本身涌泉穴下烧起
直透泥垣宫
五脏成灰
四肢皆朽
把千年苦行
俱为虚幻
再五百年
又降风灾吹你
这风不是东南西北风
不是和熏金朔风
亦不是花柳松竹风
唤做
赑风
自囟门中吹入六腑
过丹田
穿九窍
骨肉消疏
其身自解
所以都要躲过`;

const pinyinMap = {
  此: "cǐ",
  时: "shí",
  说: "shuō",
  破: "pò",
  根: "gēn",
  源: "yuán",
  悟: "wù",
  空: "kōng",
  心: "xīn",
  灵: "líng",
  福: "fú",
  至: "zhì",
  切: "qiè",
  记: "jì",
  了: "le",
  口: "kǒu",
  诀: "jué",
  对: "duì",
  祖: "zǔ",
  师: "shī",
  拜: "bài",
  谢: "xiè",
  深: "shēn",
  恩: "ēn",
  即: "jí",
  出: "chū",
  后: "hòu",
  门: "mén",
  观: "guān",
  看: "kàn",
  但: "dàn",
  见: "jiàn",
  东: "dōng",
  方: "fāng",
  天: "tiān",
  色: "sè",
  微: "wēi",
  舒: "shū",
  白: "bái",
  西: "xī",
  路: "lù",
  金: "jīn",
  光: "guāng",
  大: "dà",
  显: "xiǎn",
  明: "míng",
  依: "yī",
  旧: "jiù",
  转: "zhuǎn",
  到: "dào",
  前: "qián",
  轻: "qīng",
  的: "de",
  推: "tuī",
  开: "kāi",
  进: "jìn",
  去: "qù",
  坐: "zuò",
  在: "zài",
  原: "yuán",
  寝: "qǐn",
  之: "zhī",
  处: "chù",
  故: "gù",
  将: "jiāng",
  床: "chuáng",
  铺: "pù",
  摇: "yáo",
  响: "xiǎng",
  道: "dào",
  起: "qǐ",
  耶: "yé",
  那: "nà",
  众: "zhòng",
  还: "hái",
  正: "zhèng",
  睡: "shuì",
  哩: "lī",
  不: "bù",
  知: "zhī",
  已: "yǐ",
  得: "dé",
  好: "hǎo",
  事: "shì",
  当: "dāng",
  日: "rì",
  来: "lái",
  打: "dǎ",
  混: "hùn",
  暗: "àn",
  维: "wéi",
  持: "chí",
  子: "zi",
  午: "wǔ",
  自: "zì",
  己: "jǐ",
  调: "tiáo",
  息: "xī",
  却: "què",
  早: "zǎo",
  过: "guò",
  三: "sān",
  年: "nián",
  复: "fù",
  登: "dēng",
  宝: "bǎo",
  座: "zuò",
  与: "yǔ",
  法: "fǎ",
  谈: "tán",
  是: "shì",
  公: "gōng",
  案: "àn",
  比: "bǐ",
  语: "yǔ",
  论: "lùn",
  外: "wài",
  像: "xiàng",
  包: "bāo",
  皮: "pí",
  忽: "hū",
  问: "wèn",
  何: "hé",
  近: "jìn",
  跪: "guì",
  下: "xià",
  弟: "dì",
  有: "yǒu",
  你: "nǐ",
  这: "zhè",
  一: "yí",
  向: "xiàng",
  修: "xiū",
  些: "xiē",
  什: "shén",
  么: "me",
  性: "xìng",
  颇: "pǒ",
  通: "tōng",
  亦: "yì",
  渐: "jiàn",
  坚: "jiān",
  固: "gù",
  矣: "yǐ",
  既: "jì",
  会: "huì",
  注: "zhù",
  神: "shén",
  体: "tǐ",
  只: "zhǐ",
  防: "fáng",
  备: "bèi",
  着: "zhe",
  灾: "zāi",
  利: "lì",
  害: "hài",
  听: "tīng",
  沉: "chén",
  吟: "yín",
  良: "liáng",
  久: "jiǔ",
  父: "fù",
  言: "yán",
  谬: "miù",
  我: "wǒ",
  尝: "cháng",
  闻: "wén",
  高: "gāo",
  德: "dé",
  隆: "lóng",
  同: "tóng",
  寿: "shòu",
  水: "shuǐ",
  火: "huǒ",
  济: "jì",
  百: "bǎi",
  病: "bìng",
  生: "shēng",
  怎: "zěn",
  个: "gè",
  乃: "nǎi",
  非: "fēi",
  常: "cháng",
  夺: "duó",
  地: "dì",
  造: "zào",
  化: "huà",
  侵: "qīn",
  月: "yuè",
  玄: "xuán",
  机: "jī",
  丹: "dān",
  成: "chéng",
  鬼: "guǐ",
  难: "nán",
  容: "róng",
  虽: "suī",
  驻: "zhù",
  颜: "yán",
  益: "yì",
  五: "wǔ",
  降: "jiàng",
  雷: "léi",
  须: "xū",
  要: "yào",
  预: "yù",
  先: "xiān",
  躲: "duǒ",
  避: "bì",
  齐: "qí",
  就: "jiù",
  绝: "jué",
  命: "mìng",
  再: "zài",
  烧: "shāo",
  凡: "fán",
  唤: "huàn",
  做: "zuò",
  阴: "yīn",
  本: "běn",
  身: "shēn",
  涌: "yǒng",
  泉: "quán",
  穴: "xué",
  直: "zhí",
  透: "tòu",
  泥: "ní",
  垣: "yuán",
  宫: "gōng",
  脏: "zàng",
  灰: "huī",
  四: "sì",
  肢: "zhī",
  皆: "jiē",
  朽: "xiǔ",
  把: "bǎ",
  千: "qiān",
  苦: "kǔ",
  行: "xíng",
  俱: "jù",
  为: "wèi",
  虚: "xū",
  幻: "huàn",
  又: "yòu",
  风: "fēng",
  吹: "chuī",
  南: "nán",
  北: "běi",
  和: "hé",
  熏: "xūn",
  朔: "shuò",
  花: "huā",
  柳: "liǔ",
  松: "sōng",
  竹: "zhú",
  赑: "bì",
  囟: "xìn",
  中: "zhōng",
  入: "rù",
  六: "liù",
  腑: "fǔ",
  田: "tián",
  穿: "chuān",
  九: "jiǔ",
  窍: "qiào",
  骨: "gǔ",
  肉: "ròu",
  消: "xiāo",
  疏: "shū",
  其: "qí",
  解: "jiě",
  所: "suǒ",
  以: "yǐ",
  都: "dōu",
};

const translations_en = {
  此: "this",
  时: "hour",
  说: "explain",
  破: "break",
  根: "root",
  源: "source",
  悟: "Enlightenment",
  空: "null",
  心: "Heart",
  灵: "spirit",
  福: "blessing",
  至: "to",
  切: "cut",
  记: "remember",
  了: "It's",
  口: "mouth",
  诀: "Tips",
  对: "right",
  祖: "Ancestor",
  师: "division",
  拜: "bye",
  谢: "Thanks",
  深: "deep",
  恩: "kindness",
  即: "Right now",
  出: "out",
  后: "back",
  门: "Door",
  观: "View",
  看: "look",
  但: "but",
  见: "See",
  东: "East",
  方: "square",
  天: "sky",
  色: "color",
  微: "micro",
  舒: "Sweet",
  白: "white",
  西: "West",
  路: "road",
  金: "gold",
  光: "Light",
  大: "big",
  显: "Show",
  明: "bright",
  依: "according to",
  旧: "old",
  转: "change",
  到: "arrive",
  前: "forward",
  轻: "light",
  的: "of",
  推: "push",
  开: "open",
  进: "Enter",
  去: "go",
  坐: "sit",
  在: "exist",
  原: "Original",
  寝: "sleep",
  之: "Of",
  处: "Where",
  故: "Therefore",
  将: "Will",
  床: "bed",
  铺: "shop",
  摇: "shake",
  响: "ring",
  道: "road",
  起: "rise",
  耶: "yeah",
  那: "That",
  众: "All",
  还: "return",
  正: "just",
  睡: "sleep",
  哩: "Li",
  不: "No",
  知: "Know",
  已: "already",
  得: "have to",
  好: "good",
  事: "thing",
  当: "when",
  日: "day",
  来: "Come",
  打: "beat",
  混: "mix",
  暗: "dark",
  维: "dimension",
  持: "hold",
  子: "son",
  午: "noon",
  自: "since",
  己: "It's own",
  调: "Adjust",
  息: "interest",
  却: "but",
  早: "morning",
  过: "Pass",
  三: "three",
  年: "Year",
  复: "complex",
  登: "Login",
  宝: "precious",
  座: "seat",
  与: "and",
  法: "Law",
  谈: "talk",
  是: "yes",
  公: "male",
  案: "case",
  比: "Compare",
  语: "language",
  论: "Argument",
  外: "outside",
  像: "picture",
  包: "Bag",
  皮: "Skin",
  忽: "suddenly",
  问: "ask",
  何: "what",
  近: "close",
  跪: "kneel",
  下: "Down",
  弟: "younger brother",
  有: "have",
  你: "you",
  这: "this",
  一: "one",
  向: "Towards",
  修: "build",
  些: "some",
  什: "Varied",
  么: "Is it",
  性: "sex",
  颇: "quite",
  通: "Pass",
  亦: "as well as",
  渐: "gradually",
  坚: "Strong",
  固: "solid",
  矣: "It's OK",
  既: "now that",
  会: "meeting",
  注: "Note",
  神: "god",
  体: "body",
  只: "Only",
  防: "Defend",
  备: "Prepare",
  着: "Put",
  灾: "disaster",
  利: "profit",
  害: "Harmful",
  听: "listen",
  沉: "Sink",
  吟: "Sigh",
  良: "good",
  久: "Long",
  父: "father",
  言: "Word",
  谬: "absurd",
  我: "I",
  尝: "taste",
  闻: "smell",
  高: "high",
  德: "De",
  隆: "Long",
  同: "same",
  寿: "life",
  水: "water",
  火: "fire",
  济: "Ji",
  百: "Hundred",
  病: "sick",
  生: "born",
  怎: "How",
  个: "indivual",
  乃: "So",
  非: "No",
  常: "often",
  夺: "Take it",
  地: "land",
  造: "make",
  化: "change",
  侵: "Invasion",
  月: "moon",
  玄: "mysterious",
  机: "machine",
  丹: "Dan",
  成: "become",
  鬼: "ghost",
  难: "Disaster",
  容: "Contain",
  虽: "although",
  驻: "Stay",
  颜: "Scene",
  益: "beneficial",
  五: "five",
  降: "drop",
  雷: "thunder",
  须: "Must",
  要: "want",
  预: "Pre-",
  先: "First",
  躲: "hide",
  避: "avoid",
  齐: "together",
  就: "At once",
  绝: "Absolute",
  命: "life",
  再: "Again",
  烧: "burn",
  凡: "Any",
  唤: "Call",
  做: "Do",
  阴: "Negative",
  本: "Book",
  身: "body",
  涌: "Influence",
  泉: "spring",
  穴: "hole",
  直: "straight",
  透: "through",
  泥: "mud",
  垣: "wall",
  宫: "palace",
  脏: "dirty",
  灰: "Ash",
  四: "Four",
  肢: "limb",
  皆: "all",
  朽: "rotten",
  把: "Bundle",
  千: "thousand",
  苦: "Difficult",
  行: "OK",
  俱: "all",
  为: "for",
  虚: "Void",
  幻: "magical",
  又: "again",
  风: "wind",
  吹: "blow",
  南: "South",
  北: "north",
  和: "and",
  熏: "smoke",
  朔: "Shuo",
  花: "flower",
  柳: "willow",
  松: "loose",
  竹: "bamboo",
  赑: "Lotion",
  囟: "Font",
  中: "middle",
  入: "enter",
  六: "six",
  腑: "internal organs",
  田: "field",
  穿: "wear",
  九: "Nine",
  窍: "Tips",
  骨: "bone",
  肉: "Meat",
  消: "remove",
  疏: "sparse",
  其: "That",
  解: "untie",
  所: "Place",
  以: "by",
  都: "All",
};

const translations_de = {
  此: "Das",
  时: "Stunde",
  说: "erklären",
  破: "brechen",
  根: "Wurzel",
  源: "Quelle",
  悟: "Aufklärung",
  空: "NULL",
  心: "Herz",
  灵: "Geist",
  福: "Segen",
  至: "Zu",
  切: "schneiden",
  记: "erinnern",
  了: "Es ist",
  口: "Mund",
  诀: "Tipps",
  对: "Rechts",
  祖: "Vorfahr",
  师: "Division",
  拜: "Tschüss",
  谢: "Danke",
  深: "tief",
  恩: "Freundlichkeit",
  即: "Im Augenblick",
  出: "aus",
  后: "zurück",
  门: "Tür",
  观: "Sicht",
  看: "sehen",
  但: "Aber",
  见: "Sehen",
  东: "Ost",
  方: "Quadrat",
  天: "Himmel",
  色: "Farbe",
  微: "Mikro",
  舒: "Süß",
  白: "Weiß",
  西: "West",
  路: "Straße",
  金: "Gold",
  光: "Licht",
  大: "groß",
  显: "Zeigen",
  明: "hell",
  依: "entsprechend",
  旧: "alt",
  转: "ändern",
  到: "ankommen",
  前: "nach vorne",
  轻: "Licht",
  的: "von",
  推: "drücken",
  开: "offen",
  进: "Eingeben",
  去: "gehen",
  坐: "sitzen",
  在: "existieren",
  原: "Original",
  寝: "schlafen",
  之: "Von",
  处: "Wo",
  故: "daher",
  将: "Wille",
  床: "Bett",
  铺: "Geschäft",
  摇: "Shake",
  响: "Ring",
  道: "Straße",
  起: "erheben",
  耶: "Ja",
  那: "Das",
  众: "Alle",
  还: "zurückkehren",
  正: "Nur",
  睡: "schlafen",
  哩: "Li",
  不: "NEIN",
  知: "Wissen",
  已: "bereits",
  得: "müssen",
  好: "Gut",
  事: "Ding",
  当: "Wann",
  日: "Tag",
  来: "Kommen",
  打: "schlagen",
  混: "mischen",
  暗: "dunkel",
  维: "Dimension",
  持: "halten",
  子: "Sohn",
  午: "Mittag",
  自: "seit",
  己: "Es ist eigen",
  调: "Anpassen",
  息: "Interesse",
  却: "Aber",
  早: "Morgen",
  过: "Passieren",
  三: "drei",
  年: "Jahr",
  复: "Komplex",
  登: "Login",
  宝: "wertvoll",
  座: "Sitz",
  与: "Und",
  法: "Gesetz",
  谈: "sprechen",
  是: "Ja",
  公: "männlich",
  案: "Fall",
  比: "Vergleichen",
  语: "Sprache",
  论: "Argument",
  外: "draußen",
  像: "Bild",
  包: "Tasche",
  皮: "Haut",
  忽: "plötzlich",
  问: "fragen",
  何: "Was",
  近: "schließen",
  跪: "knien",
  下: "Runter",
  弟: "jüngerer Bruder",
  有: "haben",
  你: "Du",
  这: "Das",
  一: "eins",
  向: "In Richtung",
  修: "bauen",
  些: "manche",
  什: "Unterschiedlich",
  么: "Ist es",
  性: "Sex",
  颇: "ganz",
  通: "Passieren",
  亦: "sowie",
  渐: "schrittweise",
  坚: "Stark",
  固: "solide",
  矣: "Es ist in Ordnung",
  既: "Nun das",
  会: "treffen",
  注: "Notiz",
  神: "Gott",
  体: "Körper",
  只: "Nur",
  防: "Verteidigen",
  备: "Vorbereiten",
  着: "Setzen",
  灾: "Katastrophe",
  利: "profitieren",
  害: "Schädlich",
  听: "Hören",
  沉: "Waschbecken",
  吟: "Seufzen",
  良: "Gut",
  久: "Lang",
  父: "Vater",
  言: "Wort",
  谬: "absurd",
  我: "ICH",
  尝: "schmecken",
  闻: "Geruch",
  高: "hoch",
  德: "De",
  隆: "Lang",
  同: "Dasselbe",
  寿: "Leben",
  水: "Wasser",
  火: "Feuer",
  济: "Ji",
  百: "Hundert",
  病: "krank",
  生: "geboren",
  怎: "Wie",
  个: "indival",
  乃: "Also",
  非: "NEIN",
  常: "oft",
  夺: "Nimm es",
  地: "Land",
  造: "machen",
  化: "ändern",
  侵: "Invasion",
  月: "Mond",
  玄: "mysteriös",
  机: "Maschine",
  丹: "Dan",
  成: "werden",
  鬼: "Geist",
  难: "Katastrophe",
  容: "Erlauben",
  虽: "Obwohl",
  驻: "Bleiben",
  颜: "Szene",
  益: "vorteilhaft",
  五: "fünf",
  降: "fallen",
  雷: "Donner",
  须: "Muss",
  要: "wollen",
  预: "Vor-",
  先: "Erste",
  躲: "verstecken",
  避: "vermeiden",
  齐: "zusammen",
  就: "Auf einmal",
  绝: "Absolute",
  命: "Leben",
  再: "Wieder",
  烧: "brennen",
  凡: "Beliebig",
  唤: "Anruf",
  做: "Tun",
  阴: "Negativ",
  本: "Buch",
  身: "Körper",
  涌: "Beeinflussen",
  泉: "Frühling",
  穴: "Loch",
  直: "gerade",
  透: "durch",
  泥: "Dreck",
  垣: "Wand",
  宫: "Palast",
  脏: "schmutzig",
  灰: "Asche",
  四: "Vier",
  肢: "Glied",
  皆: "alle",
  朽: "faul",
  把: "Bündeln",
  千: "tausend",
  苦: "bitter",
  行: "OK",
  俱: "alle",
  为: "für",
  虚: "Leere",
  幻: "magisch",
  又: "wieder",
  风: "Wind",
  吹: "Schlag",
  南: "Süden",
  北: "Norden",
  和: "Und",
  熏: "Rauch",
  朔: "Shuo",
  花: "Blume",
  柳: "Weide",
  松: "lose",
  竹: "Bambus",
  赑: "Lotion",
  囟: "Schriftart",
  中: "Mitte",
  入: "eingeben",
  六: "sechs",
  腑: "interne Organe",
  田: "Feld",
  穿: "tragen",
  九: "Neun",
  窍: "Tipps",
  骨: "Knochen",
  肉: "Fleisch",
  消: "entfernen",
  疏: "spärlich",
  其: "Das",
  解: "lösen",
  所: "Ort",
  以: "von",
  都: "Alle",
};

const translations_fr = {
  此: "ce",
  时: "heure",
  说: "expliquer",
  破: "casser",
  根: "racine",
  源: "source",
  悟: "Éclaircissement",
  空: "nul",
  心: "Cœur",
  灵: "esprit",
  福: "bénédiction",
  至: "à",
  切: "couper",
  记: "souviens-toi",
  了: "C'est",
  口: "bouche",
  诀: "Conseils",
  对: "droite",
  祖: "Ancêtre",
  师: "division",
  拜: "au revoir",
  谢: "Merci",
  深: "profond",
  恩: "gentillesse",
  即: "Tout de suite",
  出: "dehors",
  后: "dos",
  门: "Porte",
  观: "Voir",
  看: "regarder",
  但: "mais",
  见: "Voir",
  东: "Est",
  方: "carré",
  天: "ciel",
  色: "couleur",
  微: "micro",
  舒: "Doux",
  白: "blanc",
  西: "Ouest",
  路: "route",
  金: "or",
  光: "Lumière",
  大: "grand",
  显: "Montrer",
  明: "brillant",
  依: "selon",
  旧: "vieux",
  转: "changement",
  到: "arriver",
  前: "avant",
  轻: "lumière",
  的: "de",
  推: "pousser",
  开: "ouvrir",
  进: "Entrer",
  去: "aller",
  坐: "s'asseoir",
  在: "exister",
  原: "Original",
  寝: "dormir",
  之: "De",
  处: "Où",
  故: "Donc",
  将: "Volonté",
  床: "lit",
  铺: "boutique",
  摇: "secouer",
  响: "anneau",
  道: "route",
  起: "augmenter",
  耶: "Ouais",
  那: "Que",
  众: "Tous",
  还: "retour",
  正: "juste",
  睡: "dormir",
  哩: "Li",
  不: "Non",
  知: "Savoir",
  已: "déjà",
  得: "devoir",
  好: "bien",
  事: "chose",
  当: "quand",
  日: "jour",
  来: "Viens",
  打: "battre",
  混: "mélanger",
  暗: "sombre",
  维: "dimension",
  持: "prise",
  子: "fils",
  午: "midi",
  自: "depuis",
  己: "C'est propre",
  调: "Ajuster",
  息: "intérêt",
  却: "mais",
  早: "matin",
  过: "Passer",
  三: "trois",
  年: "Année",
  复: "complexe",
  登: "Se connecter",
  宝: "précieux",
  座: "siège",
  与: "et",
  法: "Loi",
  谈: "parler",
  是: "Oui",
  公: "mâle",
  案: "cas",
  比: "Comparer",
  语: "langue",
  论: "Argument",
  外: "dehors",
  像: "image",
  包: "Sac",
  皮: "Peau",
  忽: "soudainement",
  问: "demander",
  何: "quoi",
  近: "fermer",
  跪: "s'agenouiller",
  下: "Vers le bas",
  弟: "jeune frère",
  有: "avoir",
  你: "toi",
  这: "ce",
  一: "un",
  向: "Vers",
  修: "construire",
  些: "quelques",
  什: "Varié",
  么: "Est-ce",
  性: "sexe",
  颇: "assez",
  通: "Passer",
  亦: "ainsi que",
  渐: "progressivement",
  坚: "Fort",
  固: "solide",
  矣: "C'est bon",
  既: "maintenant que",
  会: "réunion",
  注: "Note",
  神: "Dieu",
  体: "corps",
  只: "Seulement",
  防: "Défendre",
  备: "Préparer",
  着: "Mettre",
  灾: "catastrophe",
  利: "profit",
  害: "Nocif",
  听: "écouter",
  沉: "Couler",
  吟: "Soupir",
  良: "bien",
  久: "Long",
  父: "père",
  言: "Mot",
  谬: "absurde",
  我: "je",
  尝: "goût",
  闻: "odeur",
  高: "haut",
  德: "De",
  隆: "Long",
  同: "même",
  寿: "vie",
  水: "eau",
  火: "feu",
  济: "Ji",
  百: "Cent",
  病: "malade",
  生: "né",
  怎: "Comment",
  个: "autonome",
  乃: "Donc",
  非: "Non",
  常: "souvent",
  夺: "Prendre",
  地: "atterrir",
  造: "faire",
  化: "changement",
  侵: "Invasion",
  月: "lune",
  玄: "mystérieux",
  机: "machine",
  丹: "Dan",
  成: "devenir",
  鬼: "fantôme",
  难: "Catastrophe",
  容: "Permettre",
  虽: "bien que",
  驻: "Rester",
  颜: "Scène",
  益: "avantageux",
  五: "cinq",
  降: "baisse",
  雷: "tonnerre",
  须: "Doit",
  要: "vouloir",
  预: "Pré-",
  先: "D'abord",
  躲: "cacher",
  避: "éviter",
  齐: "ensemble",
  就: "Immédiatement",
  绝: "Absolu",
  命: "vie",
  再: "Encore",
  烧: "brûler",
  凡: "N'importe lequel",
  唤: "Appel",
  做: "Faire",
  阴: "Négatif",
  本: "Livre",
  身: "corps",
  涌: "Influence",
  泉: "printemps",
  穴: "trou",
  直: "droit",
  透: "à travers",
  泥: "boue",
  垣: "mur",
  宫: "palais",
  脏: "sale",
  灰: "Cendre",
  四: "Quatre",
  肢: "membre",
  皆: "tous",
  朽: "pourri",
  把: "Paquet",
  千: "mille",
  苦: "amer",
  行: "D'ACCORD",
  俱: "tous",
  为: "pour",
  虚: "Vide",
  幻: "magique",
  又: "encore",
  风: "vent",
  吹: "souffler",
  南: "Sud",
  北: "nord",
  和: "et",
  熏: "fumée",
  朔: "Shuo",
  花: "fleur",
  柳: "saule",
  松: "lâche",
  竹: "bambou",
  赑: "Lotion",
  囟: "Fonte",
  中: "milieu",
  入: "entrer",
  六: "six",
  腑: "organes internes",
  田: "champ",
  穿: "porter",
  九: "Neuf",
  窍: "Conseils",
  骨: "os",
  肉: "Viande",
  消: "retirer",
  疏: "clairsemé",
  其: "Que",
  解: "délier",
  所: "Lieu",
  以: "par",
  都: "Tous",
};

const tianwen_translation_map_en = {
  此时说破根源: "Now let's talk about the root cause",
  悟空心灵福至: "Wukong's heart blessing",
  切切记了口诀: "Remember the formula",
  对祖师拜谢深恩: "Thank you very much to the ancestor",
  即出后门观看: "Go out of the back door to watch",
  但见东方天色微舒白: "But I saw that the sky in the east was slightly white",
  西路金光大显明: "The West Road Golden Everbright",
  依旧路: "Still the road",
  转到前门: "Go to the front door",
  轻轻的推开进去: "Push it out gently",
  坐在原寝之处: "Sitting at the original sleep",
  故将床铺摇响道: "Therefore, the bed was shaken",
  天光了: "It's sunny",
  天光了: "It's sunny",
  起耶: "Get up",
  那大众还正睡哩: "The public is still sleeping",
  不知悟空已得了好事:
    "I don't know that Wukong has already accomplished a good thing",
  当日起来打混: "Get up that day",
  暗暗维持: "Secretly maintain",
  子前午后: "Before midnight",
  自己调息: "Adjust your own breathing",
  却早过了三年: "But it was three years ago",
  祖师复登宝座: "The ancestor ascended the throne again",
  与众说法: "Say what others say",
  谈的是公案比语: "What we are talking about is a case comparison",
  论的是外像包皮: "On the outer skin",
  忽问: "Ask suddenly",
  悟空何在: "Where is Wukong",
  悟空近前跪下: "Wukong kneeled down near",
  弟子有: "Disciples have",
  祖师道: "The Patriarch's Way",
  你这一向修些什么道来: "What kind of Tao do you have to practice",
  悟空道: "Wukong Tao",
  弟子近来法性颇通:
    "The disciple has been very familiar with the Dharma recently",
  根源亦渐坚固矣: "The roots are gradually becoming stronger",
  祖师道: "The Patriarch's Way",
  你既通法性: "You are all in accordance with the Dharma",
  会得根源: "Will get the root",
  已注神体: "Already focused on the divine body",
  却只是防备着: "But just be on guard",
  三灾利害: "Three disasters",
  悟空听说: "Wukong heard",
  沉吟良久道: "Thinking for a long time",
  师父之言谬矣: "Master's words are wrong",
  我尝闻道高德隆: "I've heard of Gao Delong",
  与天同寿: "Live with heaven",
  水火既济: "Water and fire are all the best",
  百病不生: "All diseases do not arise",
  却怎么有个: "But how could there be one",
  三灾利害: "Three disasters",
  祖师道: "The Patriarch's Way",
  此乃非常之道: "This is an extraordinary way",
  夺天地之造化: "Defeat the creation of heaven and earth",
  侵日月之玄机: "The mystery of invading the sun and the moon",
  丹成之后: "After the Dancheng",
  鬼神难容: "Ghosts and gods are hard tolerate",
  虽驻颜益寿: "Although it keeps the eyes open",
  但到了五百年后: "But five hundred years later",
  天降雷灾打你: "Thunder disasters hit you",
  须要见性明心: "Need to see the nature and understand the mind",
  预先躲避: "Dodge in advance",
  躲得过: "Can escape",
  寿与天齐: "Longevity and heaven",
  躲不过: "Can't hide",
  就此绝命: "Death is gone",
  再五百年后: "Five hundred years later",
  天降火灾烧你: "Fires from the sky burn you",
  这火不是天火: "This fire is not a heavenly fire",
  亦不是凡火: "Not ordinary fire",
  唤做: "Call it",
  阴火: "Yin Fire",
  自本身涌泉穴下烧起: "Burn from under the Yongquan acupoint",
  直透泥垣宫: "Directly through the Niyuan Palace",
  五脏成灰: "Five internal organs become ashes",
  四肢皆朽: "All limbs are rotten",
  把千年苦行: "Thousands of years of hard work",
  俱为虚幻: "All are illusions",
  再五百年: "Five hundred years",
  又降风灾吹你: "The storm blows you again",
  这风不是东南西北风: "This wind is not the southeast, northwest and northeast",
  不是和熏金朔风: "Not with the golden wind",
  亦不是花柳松竹风: "It's not the wind of flowers, willows, pine and bamboo",
  唤做: "Call it",
  赑风: "营营",
  自囟门中吹入六腑: "Blow into the six internal organs from the fontanelle",
  过丹田: "Passing Dantian",
  穿九窍: "Pushing the Nine Orifices",
  骨肉消疏: "Flesh and flesh dissipation",
  其身自解: "It's self-explanatory",
  所以都要躲过: "So you have to avoid it",
};

const tianwen_translation_map_de = {
  此时说破根源: "Sprechen wir nun über die Grundursache",
  悟空心灵福至: "Wukongs Herzsegen",
  切切记了口诀: "Erinnere dich an die Formel",
  对祖师拜谢深恩: "Vielen Dank an den Vorfahren",
  即出后门观看: "Gehen Sie von der Hintertür, um sie zu beobachten",
  但见东方天色微舒白: "Aber ich sah, dass der Himmel im Osten leicht weiß war",
  西路金光大显明: "Die West Road Golden Everbright",
  依旧路: "Immer noch die Straße",
  转到前门: "An die Haustür gehen",
  轻轻的推开进去: "Schieben Sie es sanft raus",
  坐在原寝之处: "Im ursprünglichen Schlaf sitzen",
  故将床铺摇响道: "Daher wurde das Bett erschüttert",
  天光了: "Es ist sonnig",
  天光了: "Es ist sonnig",
  起耶: "Aufstehen",
  那大众还正睡哩: "Die Öffentlichkeit schläft noch",
  不知悟空已得了好事:
    "Ich weiß nicht, dass Wukong bereits eine gute Sache erreicht hat",
  当日起来打混: "Steh diesen Tag auf",
  暗暗维持: "Heimlich aufrechterhalten",
  子前午后: "Vor Mitternacht",
  自己调息: "Passen Sie Ihre eigene Atmung an",
  却早过了三年: "Aber es war vor drei Jahren",
  祖师复登宝座: "Der Vorfahr stieg den Thron erneut auf",
  与众说法: "Sagen Sie der Öffentlichkeit",
  谈的是公案比语: "Was wir sprechen, ist ein Fallvergleich",
  论的是外像包皮: "Auf der äußeren Haut",
  忽问: "Frag plötzlich",
  悟空何在: "Wo ist Wukong?",
  悟空近前跪下: "Wukong kniete in der Nähe nieder",
  弟子有: "Jünger haben",
  祖师道: "Der Weg des Patriarchen",
  你这一向修些什么道来: "Was für ein Tao müssen Sie üben?",
  悟空道: "Wukong Tao",
  弟子近来法性颇通:
    "Der Schüler war in letzter Zeit mit dem Dharma sehr vertraut",
  根源亦渐坚固矣: "Die Wurzeln werden allmählich stärker",
  祖师道: "Der Weg des Patriarchen",
  你既通法性: "Sie sind alle im Übereinstimmung mit dem Dharma",
  会得根源: "Wird die Wurzel bekommen",
  已注神体: "Bereits auf den göttlichen Körper konzentriert",
  却只是防备着: "Aber sei einfach auf der Hut",
  三灾利害: "Drei Katastrophen",
  悟空听说: "Wukong hörte",
  沉吟良久道: "Lange nachdenken",
  师父之言谬矣: "Die Worte des Meisters sind falsch",
  我尝闻道高德隆: "Ich habe von Gao Delong gehört",
  与天同寿: "Lebe mit dem Himmel",
  水火既济: "Wasser und Feuer sind die besten",
  百病不生: "Alle Krankheiten entstehen nicht",
  却怎么有个: "Aber wie könnte es einen geben?",
  三灾利害: "Drei Katastrophen",
  祖师道: "Der Weg des Patriarchen",
  此乃非常之道: "Dies ist ein außergewöhnlicher Weg",
  夺天地之造化: "Besiege die Schöpfung von Himmel und Erde",
  侵日月之玄机: "Das Geheimnis, die Sonne und den Mond einzudringen",
  丹成之后: "Nach der Dancheng",
  鬼神难容: "Geister und Götter sind hart toleriert",
  虽驻颜益寿: "Obwohl es die Augen offen hält",
  但到了五百年后: "Aber fünfhundert Jahre später",
  天降雷灾打你: "Donnerkatastrophen haben Sie getroffen",
  须要见性明心: "Müssen die Natur sehen und den Geist verstehen",
  预先躲避: "Im Voraus ausweichen",
  躲得过: "Kann fliehen",
  寿与天齐: "Langlebigkeit und Himmel",
  躲不过: "Kann nicht verstecken",
  就此绝命: "Der Tod ist weg",
  再五百年后: "Fünfhundert Jahre später",
  天降火灾烧你: "Feuer vom Himmel verbrennen dich",
  这火不是天火: "Dieses Feuer ist kein himmlisches Feuer",
  亦不是凡火: "Kein gewöhnliches Feuer",
  唤做: "Nennen Sie es",
  阴火: "Yin Fire",
  自本身涌泉穴下烧起: "Brennen Sie unter dem Yongquan -Akupunkt bei",
  直透泥垣宫: "Direkt durch den Niyuan -Palast",
  五脏成灰: "Fünf interne Organe werden zu Asche",
  四肢皆朽: "Alle Gliedmaßen sind faul",
  把千年苦行: "Tausende von Jahren harter Arbeit",
  俱为虚幻: "Alle sind Illusionen",
  再五百年: "Fünfhundert Jahre",
  又降风灾吹你: "Der Sturm bläst dich wieder auf",
  这风不是东南西北风:
    "Dieser Wind ist nicht der Südosten, Nordwesten und Nordosten",
  不是和熏金朔风: "Nicht mit dem goldenen Wind",
  亦不是花柳松竹风:
    "Es ist nicht der Wind von Blumen, Weiden, Kiefer und Bambus",
  唤做: "Nennen Sie es",
  赑风: "营营",
  自囟门中吹入六腑:
    "Blasen Sie in die sechs inneren Organe der Fontanelle in die",
  过丹田: "Dantian vorbeikommen",
  穿九窍: "Drücken der neun Öffnungen",
  骨肉消疏: "Fleisch- und Fleischdissipation",
  其身自解: "Es ist selbsterklärend",
  所以都要躲过: "Sie müssen es also vermeiden",
};

const tianwen_translation_map_fr = {
  此时说破根源: "Maintenant, parlons de la cause profonde",
  悟空心灵福至: "La bénédiction du cœur de Wukong",
  切切记了口诀: "Rappelez-vous la formule",
  对祖师拜谢深恩: "Merci beaucoup à l'ancêtre",
  即出后门观看: "Sortir de la porte arrière pour regarder",
  但见东方天色微舒白: "Mais j'ai vu que le ciel à l'est était légèrement blanc",
  西路金光大显明: "La route West Golden Everbright",
  依旧路: "Toujours la route",
  转到前门: "Aller à la porte d'entrée",
  轻轻的推开进去: "Poussez doucement",
  坐在原寝之处: "Assis au sommeil d'origine",
  故将床铺摇响道: "Par conséquent, le lit a été ébranlé",
  天光了: "Il fait beau",
  天光了: "Il fait beau",
  起耶: "Se lever",
  那大众还正睡哩: "Le public dort toujours",
  不知悟空已得了好事:
    "Je ne sais pas que Wukong a déjà accompli une bonne chose",
  当日起来打混: "Se lever ce jour-là",
  暗暗维持: "Maintenir secrètement",
  子前午后: "Avant minuit",
  自己调息: "Ajustez votre propre respiration",
  却早过了三年: "Mais c'était il y a trois ans",
  祖师复登宝座: "L'ancêtre remonte à nouveau le trône",
  与众说法: "Dire au public",
  谈的是公案比语: "Ce dont nous parlons, c'est une comparaison de cas",
  论的是外像包皮: "Sur la peau extérieure",
  忽问: "Demander soudain",
  悟空何在: "Où est wukong",
  悟空近前跪下: "Wukong s'est agenouillé près",
  弟子有: "Les disciples ont",
  祖师道: "La voie du patriarche",
  你这一向修些什么道来: "Quel genre de tao avez-vous à pratiquer",
  悟空道: "Wukong Tao",
  弟子近来法性颇通: "Le disciple connaissait très bien le dharma récemment",
  根源亦渐坚固矣: "Les racines deviennent progressivement plus fortes",
  祖师道: "La voie du patriarche",
  你既通法性: "Vous êtes tous conformes au dharma",
  会得根源: "Obtiendra la racine",
  已注神体: "Déjà concentré sur le corps divin",
  却只是防备着: "Mais soyez juste sur garde",
  三灾利害: "Trois catastrophes",
  悟空听说: "Wukong entendu",
  沉吟良久道: "Penser longtemps",
  师父之言谬矣: "Les paroles du maître sont erronées",
  我尝闻道高德隆: "J'ai entendu parler de Gao Delong",
  与天同寿: "Vivre avec le paradis",
  水火既济: "L'eau et le feu sont tous les meilleurs",
  百病不生: "Toutes les maladies ne surviennent pas",
  却怎么有个: "Mais comment pourrait-il y en avoir un",
  三灾利害: "Trois catastrophes",
  祖师道: "La voie du patriarche",
  此乃非常之道: "C'est une manière extraordinaire",
  夺天地之造化: "Vaincre la création du ciel et de la terre",
  侵日月之玄机: "Le mystère d'envahir le soleil et la lune",
  丹成之后: "Après le dancheng",
  鬼神难容: "Les fantômes et les dieux sont durs tolérer",
  虽驻颜益寿: "Bien qu'il garde les yeux ouverts",
  但到了五百年后: "Mais cinq cents ans plus tard",
  天降雷灾打你: "Les catastrophes du tonnerre vous frappent",
  须要见性明心: "Besoin de voir la nature et de comprendre l'esprit",
  预先躲避: "Esquiver à l'avance",
  躲得过: "Peut s'échapper",
  寿与天齐: "Longévité et paradis",
  躲不过: "Je ne peux pas se cacher",
  就此绝命: "La mort est partie",
  再五百年后: "Cinq cents ans plus tard",
  天降火灾烧你: "Les incendies du ciel vous brûlent",
  这火不是天火: "Ce feu n'est pas un feu céleste",
  亦不是凡火: "Pas du feu ordinaire",
  唤做: "Appeler",
  阴火: "Feu de yin",
  自本身涌泉穴下烧起: "Brûler sous le point d'acupoint de Yongquan",
  直透泥垣宫: "Directement à travers le palais de Niyuan",
  五脏成灰: "Cinq organes internes deviennent des cendres",
  四肢皆朽: "Tous les membres sont pourris",
  把千年苦行: "Des milliers d'années de travail acharné",
  俱为虚幻: "Tous sont des illusions",
  再五百年: "Cinq cents ans",
  又降风灾吹你: "La tempête vous souffle à nouveau",
  这风不是东南西北风:
    "Ce vent n'est pas le sud-est, le nord-ouest et le nord-est",
  不是和熏金朔风: "Pas avec le vent doré",
  亦不是花柳松竹风:
    "Ce n'est pas le vent des fleurs, des saules, du pin et du bambou",
  唤做: "Appeler",
  赑风: "营营",
  自囟门中吹入六腑: "Soufflez dans les six organes internes de la Fontanelle",
  过丹田: "Passant Dantian",
  穿九窍: "Pousser les neuf orifices",
  骨肉消疏: "Dissipation de chair et de chair",
  其身自解: "C'est explicite",
  所以都要躲过: "Vous devez donc l'éviter",
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
