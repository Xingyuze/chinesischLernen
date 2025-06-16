const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `一日
春归夏至
大众都在松树下会讲多时
大众曰
悟空
你是那世修来的缘法
前日师父拊耳低言
传与你的躲三灾变化之法
可都会么
悟空笑道
不瞒诸兄长说
一则是师父传授
二来也是我昼夜殷勤
那几般儿都会了
大众道
趁此良时
你试演演
让我等看看
悟空闻说
抖搜精神
卖弄手段道
众师兄请出个题目
要我变化甚么
大众道
就变棵松树罢
悟空捻着诀
念动咒语
摇身一变
就变做一棵松树
真个是
郁郁含烟贯四时
凌云直上秀贞姿
全无一点妖猴像
尽是经霜耐雪枝
大众见了
鼓掌呀呀大笑
都道
好猴儿
好猴儿
不觉的嚷闹
惊动了祖师
祖师急拽杖出门来问道
是何人在此喧哗
大众闻呼
慌忙检束
整衣向前
悟空也现了本相
杂在丛中道
启上尊师
我等在此会讲
更无外姓喧哗
祖师怒喝道
你等大呼小叫
全不像个修行的体段
修行的人
口开神气散
舌动是非生
如何在此嚷笑
大众道
不敢瞒师父
适才孙悟空演变化耍子
教他变棵松树
果然是棵松树
弟子们俱称扬喝采
故高声惊冒尊师
望乞恕罪
祖师道
你等起去
叫
悟空
过来
我问你弄甚么精神
变甚么松树
这个工夫
可好在人前卖弄
假如你见别人有
不要求他
别人见你有
必然求你
你若畏祸
却要传他
若不传他
必然加害
你之性命又不可保
悟空叩道
只望师父恕罪
祖师道
我也不罪你
但只是你去吧
悟空闻此言
满眼堕泪道
师父教我往那里去
祖师道
你从那里来
便从那里去就是了
悟空顿然醒悟道
我自东胜神洲傲来国花果山水帘洞来的
祖师道
你快回去
全你性命
若在此间
断然不可
悟空领罪
上告尊师
我也离家有二十年矣
虽是回顾旧日儿孙
但念师父厚恩未报
不敢去
祖师道
那里甚么恩义
你只是不惹祸不牵带我就罢了
`;

const pinyinMap = {
  一: "yī",
  日: "rì",
  春: "chūn",
  归: "guī",
  夏: "xià",
  至: "zhì",
  大: "dà",
  众: "zhòng",
  都: "dōu",
  在: "zài",
  松: "sōng",
  树: "shù",
  下: "xià",
  会: "huì",
  讲: "jiǎng",
  多: "duō",
  时: "shí",
  曰: "yuē",
  悟: "wù",
  空: "kōng",
  你: "nǐ",
  是: "shì",
  那: "nà",
  世: "shì",
  修: "xiū",
  来: "lái",
  的: "de",
  缘: "yuán",
  法: "fǎ",
  前: "qián",
  师: "shī",
  父: "fù",
  拊: "fǔ",
  耳: "ěr",
  低: "dī",
  言: "yán",
  传: "chuán",
  与: "yǔ",
  躲: "duǒ",
  三: "sān",
  灾: "zāi",
  变: "biàn",
  化: "huà",
  之: "zhī",
  可: "kě",
  么: "me",
  笑: "xiào",
  道: "dào",
  不: "bù",
  瞒: "mán",
  诸: "zhū",
  兄: "xiōng",
  长: "zhǎng",
  说: "shuō",
  则: "zé",
  授: "shòu",
  二: "èr",
  也: "yě",
  我: "wǒ",
  昼: "zhòu",
  夜: "yè",
  殷: "yīn",
  勤: "qín",
  几: "jǐ",
  般: "bān",
  儿: "ér",
  了: "le",
  趁: "chèn",
  此: "cǐ",
  良: "liáng",
  试: "shì",
  演: "yǎn",
  让: "ràng",
  等: "děng",
  看: "kàn",
  闻: "wén",
  抖: "dǒu",
  搜: "sōu",
  精: "jīng",
  神: "shén",
  卖: "mài",
  弄: "nòng",
  手: "shǒu",
  段: "duàn",
  请: "qǐng",
  出: "chū",
  个: "gè",
  题: "tí",
  目: "mù",
  要: "yào",
  甚: "shèn",
  就: "jiù",
  棵: "kē",
  罢: "bà",
  捻: "niǎn",
  着: "zhe",
  诀: "jué",
  念: "niàn",
  动: "dòng",
  咒: "zhòu",
  语: "yǔ",
  摇: "yáo",
  身: "shēn",
  做: "zuò",
  真: "zhēn",
  郁: "yù",
  含: "hán",
  烟: "yān",
  贯: "guàn",
  四: "sì",
  凌: "líng",
  云: "yún",
  直: "zhí",
  上: "shàng",
  秀: "xiù",
  贞: "zhēn",
  姿: "zī",
  全: "quán",
  无: "wú",
  点: "diǎn",
  妖: "yāo",
  猴: "hóu",
  像: "xiàng",
  尽: "jǐn",
  经: "jīng",
  霜: "shuāng",
  耐: "nài",
  雪: "xuě",
  枝: "zhī",
  见: "jiàn",
  鼓: "gǔ",
  掌: "zhǎng",
  呀: "ya",
  好: "hǎo",
  觉: "jué",
  嚷: "rǎng",
  闹: "nào",
  惊: "jīng",
  祖: "zǔ",
  急: "jí",
  拽: "zhuāi",
  杖: "zhàng",
  门: "mén",
  问: "wèn",
  何: "hé",
  人: "rén",
  喧: "xuān",
  哗: "huá",
  呼: "hū",
  慌: "huāng",
  忙: "máng",
  检: "jiǎn",
  束: "shù",
  整: "zhěng",
  衣: "yī",
  向: "xiàng",
  现: "xiàn",
  本: "běn",
  相: "xiàng",
  杂: "zá",
  丛: "cóng",
  中: "zhōng",
  启: "qǐ",
  尊: "zūn",
  更: "gèng",
  外: "wài",
  姓: "xìng",
  怒: "nù",
  喝: "hè",
  小: "xiǎo",
  叫: "jiào",
  行: "xíng",
  体: "tǐ",
  口: "kǒu",
  开: "kāi",
  气: "qì",
  散: "sàn",
  舌: "shé",
  非: "fēi",
  生: "shēng",
  如: "rú",
  敢: "gǎn",
  适: "shì",
  才: "cái",
  孙: "sūn",
  耍: "shuǎ",
  子: "zi",
  教: "jiào",
  他: "tā",
  果: "guǒ",
  然: "rán",
  弟: "dì",
  们: "men",
  俱: "jù",
  称: "chēng",
  扬: "yáng",
  采: "cǎi",
  故: "gù",
  高: "gāo",
  声: "shēng",
  冒: "mào",
  望: "wàng",
  乞: "qǐ",
  恕: "shù",
  罪: "zuì",
  起: "qǐ",
  去: "qù",
  过: "guò",
  这: "zhè",
  工: "gōng",
  夫: "fū",
  假: "jiǎ",
  别: "bié",
  有: "yǒu",
  求: "qiú",
  必: "bì",
  若: "ruò",
  畏: "wèi",
  祸: "huò",
  却: "què",
  加: "jiā",
  害: "hài",
  性: "xìng",
  命: "mìng",
  又: "yòu",
  保: "bǎo",
  叩: "kòu",
  只: "zhǐ",
  但: "dàn",
  吧: "ba",
  满: "mǎn",
  眼: "yǎn",
  堕: "duò",
  泪: "lèi",
  往: "wǎng",
  里: "lǐ",
  从: "cóng",
  便: "biàn",
  顿: "dùn",
  醒: "xǐng",
  自: "zì",
  东: "dōng",
  胜: "shèng",
  洲: "zhōu",
  傲: "ào",
  国: "guó",
  花: "huā",
  山: "shān",
  水: "shuǐ",
  帘: "lián",
  洞: "dòng",
  快: "kuài",
  回: "huí",
  间: "jiàn",
  断: "duàn",
  领: "lǐng",
  告: "gào",
  离: "lí",
  家: "jiā",
  十: "shí",
  年: "nián",
  矣: "yǐ",
  虽: "suī",
  顾: "gù",
  旧: "jiù",
  厚: "hòu",
  恩: "ēn",
  未: "wèi",
  报: "bào",
  义: "yì",
  惹: "rě",
  牵: "qiān",
  带: "dài",
};

const translations_en = {
  一: "one",
  日: "day",
  春: "spring",
  归: "Go home",
  夏: "summer",
  至: "to",
  大: "big",
  众: "All",
  都: "All",
  在: "exist",
  松: "loose",
  树: "Tree",
  下: "Down",
  会: "meeting",
  讲: "speak",
  多: "many",
  时: "hour",
  曰: "say",
  悟: "Enlightenment",
  空: "null",
  你: "you",
  是: "yes",
  那: "That",
  世: "World",
  修: "build",
  来: "Come",
  的: "of",
  缘: "edge",
  法: "Law",
  前: "forward",
  师: "division",
  父: "father",
  拊: "pat",
  耳: "Ear",
  低: "Low",
  言: "Word",
  传: "pass",
  与: "and",
  躲: "hide",
  三: "three",
  灾: "disaster",
  变: "Change",
  化: "change",
  之: "Of",
  可: "Can",
  么: "Is it",
  笑: "laugh",
  道: "road",
  不: "No",
  瞒: "conceal",
  诸: "various",
  兄: "Brother",
  长: "long",
  说: "explain",
  则: "but",
  授: "Grant",
  二: "two",
  也: "also",
  我: "I",
  昼: "day",
  夜: "night",
  殷: "Yin",
  勤: "Diligent",
  几: "Several",
  般: "Normal",
  儿: "Son",
  了: "It's",
  趁: "take advantage of",
  此: "this",
  良: "good",
  试: "try",
  演: "play",
  让: "let",
  等: "wait",
  看: "look",
  闻: "smell",
  抖: "shake",
  搜: "search",
  精: "Refined",
  神: "god",
  卖: "Sell",
  弄: "alley",
  手: "hand",
  段: "part",
  请: "please",
  出: "out",
  个: "indivual",
  题: "question",
  目: "Meaning",
  要: "want",
  甚: "very",
  就: "At once",
  棵: "南",
  罢: "stop",
  捻: "twist",
  着: "Put",
  诀: "Tips",
  念: "read",
  动: "move",
  咒: "curse",
  语: "language",
  摇: "shake",
  身: "body",
  做: "Do",
  真: "real",
  郁: "Depressed",
  含: "Include",
  烟: "cigarette",
  贯: "Guan",
  四: "Four",
  凌: "Ling",
  云: "cloud",
  直: "straight",
  上: "superior",
  秀: "show",
  贞: "Zhen",
  姿: "posture",
  全: "Complete",
  无: "none",
  点: "point",
  妖: "Demon",
  猴: "monkey",
  像: "picture",
  尽: "All",
  经: "through",
  霜: "frost",
  耐: "Persistence",
  雪: "Snow",
  枝: "branch",
  见: "See",
  鼓: "drum",
  掌: "Palm",
  呀: "ah",
  好: "good",
  觉: "Sleep",
  嚷: "Scream",
  闹: "Furious",
  惊: "shock",
  祖: "Ancestor",
  急: "urgent",
  拽: "Drag",
  杖: "Staff",
  门: "Door",
  问: "ask",
  何: "what",
  人: "people",
  喧: "noise",
  哗: "Wow",
  呼: "call",
  慌: "Panic",
  忙: "busy",
  检: "Inspection",
  束: "bundle",
  整: "all",
  衣: "Clothes",
  向: "Towards",
  现: "now",
  本: "Book",
  相: "Mutually",
  杂: "miscellaneous",
  丛: "Clue",
  中: "middle",
  启: "start",
  尊: "Honor",
  更: "Even",
  外: "outside",
  姓: "surname",
  怒: "anger",
  喝: "drink",
  小: "Small",
  叫: "Call",
  行: "OK",
  体: "body",
  口: "mouth",
  开: "open",
  气: "gas",
  散: "Scattered",
  舌: "tongue",
  非: "No",
  生: "born",
  如: "like",
  敢: "dare",
  适: "suitable",
  才: "talent",
  孙: "Sun",
  耍: "Play",
  子: "son",
  教: "teach",
  他: "he",
  果: "fruit",
  然: "Of course",
  弟: "younger brother",
  们: "We",
  俱: "all",
  称: "say",
  扬: "Yang",
  采: "Pick",
  故: "Therefore",
  高: "high",
  声: "Voice",
  冒: "Born",
  望: "see",
  乞: "beg",
  恕: "Forgive",
  罪: "crime",
  起: "rise",
  去: "go",
  过: "Pass",
  这: "this",
  工: "work",
  夫: "husband",
  假: "Fake",
  别: "Don't",
  有: "have",
  求: "beg",
  必: "must",
  若: "like",
  畏: "fear",
  祸: "disaster",
  却: "but",
  加: "add",
  害: "Harmful",
  性: "sex",
  命: "life",
  又: "again",
  保: "Save",
  叩: "knock",
  只: "Only",
  但: "but",
  吧: "Bar",
  满: "Full",
  眼: "Eye",
  堕: "fall",
  泪: "tear",
  往: "Past",
  里: "inside",
  从: "from",
  便: "Hope",
  顿: "Dun",
  醒: "Awake",
  自: "since",
  东: "East",
  胜: "Win",
  洲: "Continent",
  傲: "proud",
  国: "country",
  花: "flower",
  山: "Mountain",
  水: "water",
  帘: "curtain",
  洞: "Hole",
  快: "quick",
  回: "Back",
  间: "between",
  断: "Break",
  领: "collar",
  告: "tell",
  离: "Leave",
  家: "Home",
  十: "ten",
  年: "Year",
  矣: "It's OK",
  虽: "although",
  顾: "Gu",
  旧: "old",
  厚: "thick",
  恩: "kindness",
  未: "not yet",
  报: "Report",
  义: "righteous",
  惹: "provoke",
  牵: "Tighten",
  带: "bring",
};

const translations_de = {
  一: "eins",
  日: "Tag",
  春: "Frühling",
  归: "Nach Hause gehen",
  夏: "Sommer",
  至: "Zu",
  大: "groß",
  众: "Alle",
  都: "Alle",
  在: "existieren",
  松: "lose",
  树: "Baum",
  下: "Runter",
  会: "treffen",
  讲: "sprechen",
  多: "viele",
  时: "Stunde",
  曰: "sagen",
  悟: "Aufklärung",
  空: "NULL",
  你: "Du",
  是: "Ja",
  那: "Das",
  世: "Welt",
  修: "bauen",
  来: "Kommen",
  的: "von",
  缘: "Rand",
  法: "Gesetz",
  前: "nach vorne",
  师: "Division",
  父: "Vater",
  拊: "klopfen",
  耳: "Ohr",
  低: "Niedrig",
  言: "Wort",
  传: "passieren",
  与: "Und",
  躲: "verstecken",
  三: "drei",
  灾: "Katastrophe",
  变: "Ändern",
  化: "ändern",
  之: "Von",
  可: "Kann",
  么: "Ist es",
  笑: "lachen",
  道: "Straße",
  不: "NEIN",
  瞒: "verbergen",
  诸: "verschieden",
  兄: "Bruder",
  长: "lang",
  说: "erklären",
  则: "Aber",
  授: "Gewähren",
  二: "zwei",
  也: "Auch",
  我: "ICH",
  昼: "Tag",
  夜: "Nacht",
  殷: "Yin",
  勤: "Fleißig",
  几: "Mehrere",
  般: "Normal",
  儿: "Sohn",
  了: "Es ist",
  趁: "in Anspruch nehmen",
  此: "Das",
  良: "Gut",
  试: "versuchen",
  演: "spielen",
  让: "lassen",
  等: "Warten",
  看: "sehen",
  闻: "Geruch",
  抖: "Shake",
  搜: "suchen",
  精: "Raffiniert",
  神: "Gott",
  卖: "Verkaufen",
  弄: "Gasse",
  手: "Hand",
  段: "Teil",
  请: "Bitte",
  出: "aus",
  个: "indival",
  题: "Frage",
  目: "Bedeutung",
  要: "wollen",
  甚: "sehr",
  就: "Auf einmal",
  棵: "南",
  罢: "stoppen",
  捻: "Twist",
  着: "Setzen",
  诀: "Tipps",
  念: "lesen",
  动: "bewegen",
  咒: "Fluch",
  语: "Sprache",
  摇: "Shake",
  身: "Körper",
  做: "Tun",
  真: "real",
  郁: "Gedrückt",
  含: "Enthalten",
  烟: "Zigarette",
  贯: "Guan",
  四: "Vier",
  凌: "Ling",
  云: "Wolke",
  直: "gerade",
  上: "Vorgesetzter",
  秀: "zeigen",
  贞: "Zhen",
  姿: "Haltung",
  全: "Vollständig",
  无: "keiner",
  点: "Punkt",
  妖: "Dämon",
  猴: "Affe",
  像: "Bild",
  尽: "Alle",
  经: "durch",
  霜: "Frost",
  耐: "Ausdauer",
  雪: "Schnee",
  枝: "Zweig",
  见: "Sehen",
  鼓: "Trommel",
  掌: "Palme",
  呀: "Ah",
  好: "Gut",
  觉: "Schlafen",
  嚷: "Schreien",
  闹: "Wütend",
  惊: "Schock",
  祖: "Vorfahr",
  急: "dringend",
  拽: "Ziehen",
  杖: "Personal",
  门: "Tür",
  问: "fragen",
  何: "Was",
  人: "Menschen",
  喧: "Lärm",
  哗: "Wow",
  呼: "Anruf",
  慌: "Panik",
  忙: "beschäftigt",
  检: "Inspektion",
  束: "bündeln",
  整: "alle",
  衣: "Kleidung",
  向: "In Richtung",
  现: "Jetzt",
  本: "Buch",
  相: "Gegenseitig",
  杂: "Verschiedenes",
  丛: "Hinweis",
  中: "Mitte",
  启: "Start",
  尊: "Ehre",
  更: "Sogar",
  外: "draußen",
  姓: "Nachname",
  怒: "Wut",
  喝: "trinken",
  小: "Klein",
  叫: "Anruf",
  行: "OK",
  体: "Körper",
  口: "Mund",
  开: "offen",
  气: "Gas",
  散: "Verstreut",
  舌: "Zunge",
  非: "NEIN",
  生: "geboren",
  如: "wie",
  敢: "wagen",
  适: "geeignet",
  才: "Talent",
  孙: "Sonne",
  耍: "Spielen",
  子: "Sohn",
  教: "unterrichten",
  他: "Er",
  果: "Obst",
  然: "Natürlich",
  弟: "jüngerer Bruder",
  们: "Wir",
  俱: "alle",
  称: "sagen",
  扬: "Yang",
  采: "Wählen",
  故: "daher",
  高: "hoch",
  声: "Stimme",
  冒: "Geboren",
  望: "sehen",
  乞: "bitten",
  恕: "Verzeihen",
  罪: "Verbrechen",
  起: "erheben",
  去: "gehen",
  过: "Passieren",
  这: "Das",
  工: "arbeiten",
  夫: "Ehemann",
  假: "Gefälscht",
  别: "Nicht",
  有: "haben",
  求: "bitten",
  必: "muss",
  若: "wie",
  畏: "Furcht",
  祸: "Katastrophe",
  却: "Aber",
  加: "hinzufügen",
  害: "Schädlich",
  性: "Sex",
  命: "Leben",
  又: "wieder",
  保: "Speichern",
  叩: "klopfen",
  只: "Nur",
  但: "Aber",
  吧: "Bar",
  满: "Voll",
  眼: "Auge",
  堕: "fallen",
  泪: "Träne",
  往: "Vergangenheit",
  里: "innen",
  从: "aus",
  便: "Hoffnung",
  顿: "Dun",
  醒: "Wach",
  自: "seit",
  东: "Ost",
  胜: "Gewinnen",
  洲: "Kontinent",
  傲: "stolz",
  国: "Land",
  花: "Blume",
  山: "Berg",
  水: "Wasser",
  帘: "Vorhang",
  洞: "Loch",
  快: "schnell",
  回: "Zurück",
  间: "zwischen",
  断: "Brechen",
  领: "Kragen",
  告: "erzählen",
  离: "Verlassen",
  家: "Heim",
  十: "zehn",
  年: "Jahr",
  矣: "Es ist in Ordnung",
  虽: "Obwohl",
  顾: "Gu",
  旧: "alt",
  厚: "dick",
  恩: "Freundlichkeit",
  未: "Noch nicht",
  报: "Bericht",
  义: "gerecht",
  惹: "provozieren",
  牵: "Anziehen",
  带: "bringen",
};

const translations_fr = {
  一: "un",
  日: "jour",
  春: "printemps",
  归: "Rentrer chez eux",
  夏: "été",
  至: "à",
  大: "grand",
  众: "Tous",
  都: "Tous",
  在: "exister",
  松: "lâche",
  树: "Arbre",
  下: "Vers le bas",
  会: "réunion",
  讲: "parler",
  多: "beaucoup",
  时: "heure",
  曰: "dire",
  悟: "Éclaircissement",
  空: "nul",
  你: "toi",
  是: "Oui",
  那: "Que",
  世: "Monde",
  修: "construire",
  来: "Viens",
  的: "de",
  缘: "bord",
  法: "Loi",
  前: "avant",
  师: "division",
  父: "père",
  拊: "tapoter",
  耳: "Oreille",
  低: "Faible",
  言: "Mot",
  传: "passer",
  与: "et",
  躲: "cacher",
  三: "trois",
  灾: "catastrophe",
  变: "Changement",
  化: "changement",
  之: "De",
  可: "Peut",
  么: "Est-ce",
  笑: "rire",
  道: "route",
  不: "Non",
  瞒: "cacher",
  诸: "divers",
  兄: "Frère",
  长: "long",
  说: "expliquer",
  则: "mais",
  授: "Accorder",
  二: "deux",
  也: "aussi",
  我: "je",
  昼: "jour",
  夜: "nuit",
  殷: "Yin",
  勤: "Diligent",
  几: "Plusieurs",
  般: "Normale",
  儿: "Fils",
  了: "C'est",
  趁: "profiter de",
  此: "ce",
  良: "bien",
  试: "essayer",
  演: "jouer",
  让: "laisser",
  等: "attendez",
  看: "regarder",
  闻: "odeur",
  抖: "secouer",
  搜: "recherche",
  精: "Raffiné",
  神: "Dieu",
  卖: "Vendre",
  弄: "ruelle",
  手: "main",
  段: "partie",
  请: "s'il te plaît",
  出: "dehors",
  个: "autonome",
  题: "question",
  目: "Signification",
  要: "vouloir",
  甚: "très",
  就: "Immédiatement",
  棵: "未分类",
  罢: "arrêt",
  捻: "torsion",
  着: "Mettre",
  诀: "Conseils",
  念: "lire",
  动: "se déplacer",
  咒: "malédiction",
  语: "langue",
  摇: "secouer",
  身: "corps",
  做: "Faire",
  真: "réel",
  郁: "Déprimé",
  含: "Inclure",
  烟: "cigarette",
  贯: "Guan",
  四: "Quatre",
  凌: "Lingue",
  云: "nuage",
  直: "droit",
  上: "supérieur",
  秀: "montrer",
  贞: "Zhen",
  姿: "posture",
  全: "Complet",
  无: "aucun",
  点: "indiquer",
  妖: "Démon",
  猴: "singe",
  像: "image",
  尽: "Tous",
  经: "à travers",
  霜: "gel",
  耐: "Persistance",
  雪: "Neige",
  枝: "bifurquer",
  见: "Voir",
  鼓: "tambour",
  掌: "Palmier",
  呀: "ah",
  好: "bien",
  觉: "Dormir",
  嚷: "Crier",
  闹: "Furieux",
  惊: "choc",
  祖: "Ancêtre",
  急: "urgent",
  拽: "Traîner",
  杖: "Personnel",
  门: "Porte",
  问: "demander",
  何: "quoi",
  人: "personnes",
  喧: "bruit",
  哗: "Ouah",
  呼: "appel",
  慌: "Panique",
  忙: "occupé",
  检: "Inspection",
  束: "paquet",
  整: "tous",
  衣: "Vêtements",
  向: "Vers",
  现: "maintenant",
  本: "Livre",
  相: "Mutuellement",
  杂: "divers",
  丛: "Indice",
  中: "milieu",
  启: "commencer",
  尊: "Honneur",
  更: "Même",
  外: "dehors",
  姓: "nom de famille",
  怒: "colère",
  喝: "boire",
  小: "Petit",
  叫: "Appel",
  行: "D'ACCORD",
  体: "corps",
  口: "bouche",
  开: "ouvrir",
  气: "gaz",
  散: "Dispersé",
  舌: "langue",
  非: "Non",
  生: "né",
  如: "comme",
  敢: "oser",
  适: "approprié",
  才: "talent",
  孙: "Soleil",
  耍: "Jouer",
  子: "fils",
  教: "enseigner",
  他: "il",
  果: "fruit",
  然: "Bien sûr",
  弟: "jeune frère",
  们: "Nous",
  俱: "tous",
  称: "dire",
  扬: "Yang",
  采: "Prendre",
  故: "Donc",
  高: "haut",
  声: "Voix",
  冒: "Né",
  望: "voir",
  乞: "mendier",
  恕: "Pardonner",
  罪: "crime",
  起: "augmenter",
  去: "aller",
  过: "Passer",
  这: "ce",
  工: "travail",
  夫: "mari",
  假: "Faux",
  别: "Ne le faites pas",
  有: "avoir",
  求: "mendier",
  必: "doit",
  若: "comme",
  畏: "peur",
  祸: "catastrophe",
  却: "mais",
  加: "ajouter",
  害: "Nocif",
  性: "sexe",
  命: "vie",
  又: "encore",
  保: "Sauvegarder",
  叩: "frappe",
  只: "Seulement",
  但: "mais",
  吧: "Bar",
  满: "Complet",
  眼: "Œil",
  堕: "automne",
  泪: "larme",
  往: "Passé",
  里: "à l'intérieur",
  从: "depuis",
  便: "Espoir",
  顿: "Dun",
  醒: "Éveillé",
  自: "depuis",
  东: "Est",
  胜: "Gagner",
  洲: "Continent",
  傲: "fier",
  国: "pays",
  花: "fleur",
  山: "Montagne",
  水: "eau",
  帘: "rideau",
  洞: "Trou",
  快: "rapide",
  回: "Dos",
  间: "entre",
  断: "Casser",
  领: "collier",
  告: "dire",
  离: "Partir",
  家: "Maison",
  十: "dix",
  年: "Année",
  矣: "C'est bon",
  虽: "bien que",
  顾: "GU",
  旧: "vieux",
  厚: "épais",
  恩: "gentillesse",
  未: "pas encore",
  报: "Rapport",
  义: "vertueux",
  惹: "provoquer",
  牵: "Serrer",
  带: "apporter",
};

const tianwen_translation_map_en = {
  一日: "One day",
  春归夏至: "Spring returns to summer solstice",
  大众都在松树下会讲多时:
    "The public will talk for a long time under the pine trees",
  大众曰: "The public said",
  悟空: "Wukong",
  你是那世修来的缘法: "You are the fate that you have cultivated in that world",
  前日师父拊耳低言: "The day before yesterday, the master said in a low voice",
  传与你的躲三灾变化之法:
    "Pass on your way to avoid three disasters and changes",
  可都会么: "But will it do it",
  悟空笑道: "Wukong said with a smile",
  不瞒诸兄长说: "Not to be hiding from my brothers",
  一则是师父传授: "One is the teaching of the master",
  二来也是我昼夜殷勤: "Secondly, I am diligent day and night",
  那几般儿都会了: "Those are some",
  大众道: "Popular",
  趁此良时: "Take advantage of this good time",
  你试演演: "You audition",
  让我等看看: "Let me wait and see",
  悟空闻说: "Wukong heard",
  抖搜精神: "Dousuo Spirit",
  卖弄手段道: "Show off your tricks",
  众师兄请出个题目: "Brothers ask for a question",
  要我变化甚么: "What do you want me to change?",
  大众道: "Popular",
  就变棵松树罢: "Just turn into a pine tree",
  悟空捻着诀: "Wukong clamps the trick",
  念动咒语: "Recite the mantra",
  摇身一变: "Transformed",
  就变做一棵松树: "It turns into a pine tree",
  真个是: "Really",
  郁郁含烟贯四时: "Depression and smoke are permeated for four times",
  凌云直上秀贞姿: "Lingyun straight up to Xiuzhenzi",
  全无一点妖猴像: "There is no image of a monkey",
  尽是经霜耐雪枝: "All are frost and snow-resistant branches",
  大众见了: "The public saw it",
  鼓掌呀呀大笑: "Applause and laugh",
  都道: "All",
  好猴儿: "Good monkey",
  好猴儿: "Good monkey",
  不觉的嚷闹: "Unconsciously clamoring",
  惊动了祖师: "Alarmed the ancestor",
  祖师急拽杖出门来问道:
    "The ancestor hurriedly pulled his stick out and asked.",
  是何人在此喧哗: "Who is making noise here",
  大众闻呼: "Public hearing",
  慌忙检束: "Hurry up for inspection",
  整衣向前: "Putting clothes forward",
  悟空也现了本相: "Wukong also showed his true form",
  杂在丛中道: "Mixed in the middle of the convoy",
  启上尊师: "Master Qi",
  我等在此会讲: "I'll talk here",
  更无外姓喧哗: "There is no noise from other people",
  祖师怒喝道: "The ancestor shouted angrily",
  你等大呼小叫: "You're waiting and shouting",
  全不像个修行的体段: "Not like a practice stage",
  修行的人: "A person who practices",
  口开神气散: "Open your mouth and disperse your spirit",
  舌动是非生: "The tongue moves right and wrong",
  如何在此嚷笑: "How to laugh here",
  大众道: "Popular",
  不敢瞒师父: "Don't dare to hide it from your master",
  适才孙悟空演变化耍子: "Just now, Sun Wukong acted as a changer",
  教他变棵松树: "Teach him to become a pine tree",
  果然是棵松树: "It's indeed a pine tree",
  弟子们俱称扬喝采: "The disciples all praised",
  故高声惊冒尊师: "Therefore, I shouted loudly and frightened the teacher",
  望乞恕罪: "I hope to forgive my sins",
  祖师道: "The Patriarch's Way",
  你等起去: "You can go",
  叫: "Call",
  悟空: "Wukong",
  过来: "come over",
  我问你弄甚么精神: "I'll ask you what kind of mentality",
  变甚么松树: "What pine tree",
  这个工夫: "This time",
  可好在人前卖弄: "But fortunately show off in front of others",
  假如你见别人有: "If you see someone else",
  不要求他: "Don't ask him",
  别人见你有: "Someone else sees you",
  必然求你: "I will definitely ask you",
  你若畏祸: "If you are afraid of misfortune",
  却要传他: "But he wants to pass on",
  若不传他: "If he doesn't pass on",
  必然加害: "It will inevitably harm",
  你之性命又不可保: "Your life is unsafe",
  悟空叩道: "Wukong knocks on",
  只望师父恕罪: "I hope Master forgives his sins",
  祖师道: "The Patriarch's Way",
  我也不罪你: "I don't blame you either",
  但只是你去吧: "But you go",
  悟空闻此言: "Wukong heard this",
  满眼堕泪道: "Tears all over my eyes",
  师父教我往那里去: "Master taught me where to go",
  祖师道: "The Patriarch's Way",
  你从那里来: "Where did you come from",
  便从那里去就是了: "Then go from there",
  悟空顿然醒悟道: "Wukong suddenly awakened",
  我自东胜神洲傲来国花果山水帘洞来的:
    "I came from the Flower and Fruit Mountain and Water Curtain Cave of Aolai Country, Dongsheng Shenzhou",
  祖师道: "The Patriarch's Way",
  你快回去: "You go back soon",
  全你性命: "All your life",
  若在此间: "If this is",
  断然不可: "Definitely not",
  悟空领罪: "Wukong takes the sin",
  上告尊师: "Let me tell you",
  我也离家有二十年矣: "I've been away from home for twenty years, too",
  虽是回顾旧日儿孙: "Although it is a review of old children and grandchildren",
  但念师父厚恩未报: "But I remember that Master has no reward for his kindness",
  不敢去: "Don't dare to go",
  祖师道: "The Patriarch's Way",
  那里甚么恩义: "What kind of kindness there",
  你只是不惹祸不牵带我就罢了:
    "You just don't cause trouble and don't take me with you",
};

const tianwen_translation_map_de = {
  一日: "Einmal",
  春归夏至: "Der Frühling kehrt zur Sommersonnenwende zurück",
  大众都在松树下会讲多时:
    "Die Öffentlichkeit wird lange unter den Kiefern sprechen",
  大众曰: "Die Öffentlichkeit sagte",
  悟空: "Wukong",
  你是那世修来的缘法:
    "Sie sind das Schicksal, das Sie in dieser Welt kultiviert haben",
  前日师父拊耳低言: "Am Tag vor gestern sagte der Meister mit leiser Stimme",
  传与你的躲三灾变化之法:
    "Geben Sie den Weg weiter, um drei Katastrophen und Änderungen zu vermeiden",
  可都会么: "Aber wird es es tun",
  悟空笑道: "Sagte Wukong mit einem Lächeln",
  不瞒诸兄长说: "Sich nicht vor meinen Brüdern verstecken",
  一则是师父传授: "Einer ist die Lehre des Meisters",
  二来也是我昼夜殷勤: "Zweitens bin ich Tag und Nacht fleißig",
  那几般儿都会了: "Das sind einige",
  大众道: "Beliebt",
  趁此良时: "Nutzen Sie diese gute Zeit",
  你试演演: "Sie Vorsprechen",
  让我等看看: "Lassen Sie mich abwarten und sehen",
  悟空闻说: "Wukong hörte",
  抖搜精神: "Dousuo -Geist",
  卖弄手段道: "Zeigen Sie Ihre Tricks",
  众师兄请出个题目: "Brüder stellen eine Frage",
  要我变化甚么: "Was soll ich ändern?",
  大众道: "Beliebt",
  就变棵松树罢: "Verwandeln Sie sich einfach in einen Kiefernbaum",
  悟空捻着诀: "Wukong klemmt den Trick",
  念动咒语: "Das Mantra rezitieren",
  摇身一变: "Verwandelt",
  就变做一棵松树: "Es verwandelt sich in einen Kiefernbaum",
  真个是: "Wirklich",
  郁郁含烟贯四时: "Depression und Rauch sind viermal durchdrungen",
  凌云直上秀贞姿: "Lingyun direkt nach Xiuzhenzi",
  全无一点妖猴像: "Es gibt kein Bild eines Affen",
  尽是经霜耐雪枝: "Alle sind Frost- und schneebedeckende Zweige",
  大众见了: "Die Öffentlichkeit sah es",
  鼓掌呀呀大笑: "Applaus und lachen",
  都道: "Alle",
  好猴儿: "Guter Affe",
  好猴儿: "Guter Affe",
  不觉的嚷闹: "Unbewusst verlangt",
  惊动了祖师: "Alarmierte den Vorfahren",
  祖师急拽杖出门来问道:
    "Der Vorfahr zog eilig seinen Auftritt heraus und fragte.",
  是何人在此喧哗: "Wer macht hier Lärm",
  大众闻呼: "Öffentliche Anhörung",
  慌忙检束: "Beeilen Sie sich zur Inspektion",
  整衣向前: "Kleidung nach vorne setzen",
  悟空也现了本相: "Wukong zeigte auch seine wahre Form",
  杂在丛中道: "Gemischt mitten im Konvoi",
  启上尊师: "Meister Qi",
  我等在此会讲: "Ich werde hier reden",
  更无外姓喧哗: "Es gibt keinen Lärm von anderen Menschen",
  祖师怒喝道: "Der Vorfahr schrie wütend",
  你等大呼小叫: "Du wartest und schreist",
  全不像个修行的体段: "Nicht wie eine Übungsstufe",
  修行的人: "Eine Person, die praktiziert",
  口开神气散: "Öffne deinen Mund und zerstreue deinen Geist",
  舌动是非生: "Die Zunge bewegt sich richtig und falsch",
  如何在此嚷笑: "Wie man hier lacht",
  大众道: "Beliebt",
  不敢瞒师父: "Wagen Sie es nicht, es vor Ihrem Meister zu verbergen",
  适才孙悟空演变化耍子: "Im Moment handelte Sun Wukong als Veränderer",
  教他变棵松树: "Lehre ihn, ein Kiefernbaum zu werden",
  果然是棵松树: "Es ist in der Tat ein Kiefernbaum",
  弟子们俱称扬喝采: "Die Jünger lobten alle",
  故高声惊冒尊师: "Deshalb schrie ich laut und erschreckte den Lehrer",
  望乞恕罪: "Ich hoffe, meine Sünden zu vergeben",
  祖师道: "Der Weg des Patriarchen",
  你等起去: "Sie können gehen",
  叫: "Anruf",
  悟空: "Wukong",
  过来: "komm vorbei",
  我问你弄甚么精神: "Ich werde Sie fragen, welche Art von Mentalität",
  变甚么松树: "Was für eine Kiefer",
  这个工夫: "Diesmal",
  可好在人前卖弄: "Aber zum Glück vor anderen zeigen",
  假如你见别人有: "Wenn Sie jemand anderen sehen",
  不要求他: "Fragen Sie ihn nicht",
  别人见你有: "Jemand anderes sieht dich",
  必然求你: "Ich werde dich auf jeden Fall fragen",
  你若畏祸: "Wenn Sie Angst vor Unglück haben",
  却要传他: "Aber er will weitergeben",
  若不传他: "Wenn er nicht weitergeht",
  必然加害: "Es wird unweigerlich schaden",
  你之性命又不可保: "Dein Leben ist unsicher",
  悟空叩道: "Wukong klopft an",
  只望师父恕罪: "Ich hoffe, der Meister vergibt seine Sünden",
  祖师道: "Der Weg des Patriarchen",
  我也不罪你: "Ich beschuldige dich auch nicht",
  但只是你去吧: "Aber du gehst",
  悟空闻此言: "Wukong hörte das",
  满眼堕泪道: "Tränen in meinen Augen",
  师父教我往那里去: "Meister brachte mir bei, wohin ich gehen soll",
  祖师道: "Der Weg des Patriarchen",
  你从那里来: "Woher bist du gekommen",
  便从那里去就是了: "Dann geh von dort aus",
  悟空顿然醒悟道: "Wukong weckte plötzlich",
  我自东胜神洲傲来国花果山水帘洞来的:
    "Ich kam aus der Höhle von Blumen- und Obst -Berg- und Wasservorhanghöhle des Landes Aolai, Dongsheng Shenzhou",
  祖师道: "Der Weg des Patriarchen",
  你快回去: "Du gehst bald zurück",
  全你性命: "Dein ganzes Leben",
  若在此间: "Wenn das so ist",
  断然不可: "Auf keinen Fall",
  悟空领罪: "Wukong nimmt die Sünde",
  上告尊师: "Lass mich es dir sagen",
  我也离家有二十年矣: "Ich bin auch seit zwanzig Jahren nicht mehr zu Hause",
  虽是回顾旧日儿孙:
    "Obwohl es sich um eine Rezension von alten Kindern und Enkelkindern handelt",
  但念师父厚恩未报:
    "Aber ich erinnere mich, dass der Meister keine Belohnung für seine Freundlichkeit hat",
  不敢去: "Wagen Sie es nicht zu gehen, zu gehen",
  祖师道: "Der Weg des Patriarchen",
  那里甚么恩义: "Was für eine Freundlichkeit dort",
  你只是不惹祸不牵带我就罢了:
    "Sie verursachen einfach keine Ärger und nehmen mich nicht mit",
};

const tianwen_translation_map_fr = {
  一日: "Un jour",
  春归夏至: "Le printemps revient à l'été",
  大众都在松树下会讲多时: "Le public parlera longtemps sous les pins",
  大众曰: "Le public a dit",
  悟空: "Wukong",
  你是那世修来的缘法: "Vous êtes le sort que vous avez cultivé dans ce monde",
  前日师父拊耳低言: "La veille, le maître a dit à voix basse",
  传与你的躲三灾变化之法:
    "Passer votre chemin pour éviter trois catastrophes et changements",
  可都会么: "Mais va-t-il le fera",
  悟空笑道: "Wukong a dit avec un sourire",
  不瞒诸兄长说: "Ne pas se cacher de mes frères",
  一则是师父传授: "L'un est l'enseignement du maître",
  二来也是我昼夜殷勤: "Deuxièmement, je suis diligent jour et nuit",
  那几般儿都会了: "Ce sont certains",
  大众道: "Populaire",
  趁此良时: "Profitez de ce bon moment",
  你试演演: "Vous auditionnez",
  让我等看看: "Laisse-moi attendre et voir",
  悟空闻说: "Wukong entendu",
  抖搜精神: "Dousuo Esprit",
  卖弄手段道: "Montrez vos astuces",
  众师兄请出个题目: "Les frères posent une question",
  要我变化甚么: "Que voulez-vous que je change?",
  大众道: "Populaire",
  就变棵松树罢: "Se transformer en pin",
  悟空捻着诀: "Wukong affiche l'astuce",
  念动咒语: "Réciter le mantra",
  摇身一变: "Transformé",
  就变做一棵松树: "Ça se transforme en pin",
  真个是: "Vraiment",
  郁郁含烟贯四时: "La dépression et la fumée sont imprégnées quatre fois",
  凌云直上秀贞姿: "Lingyun directement jusqu'à xiuzhenzi",
  全无一点妖猴像: "Il n'y a pas d'image d'un singe",
  尽是经霜耐雪枝: "Tous sont des branches de gel et de neige",
  大众见了: "Le public l'a vu",
  鼓掌呀呀大笑: "Applaudissements et rires",
  都道: "Tous",
  好猴儿: "Bon singe",
  好猴儿: "Bon singe",
  不觉的嚷闹: "Récolter inconsciemment",
  惊动了祖师: "Alarmé l'ancêtre",
  祖师急拽杖出门来问道: "L'ancêtre retira précipitamment son bâton et demanda.",
  是何人在此喧哗: "Qui fait du bruit ici",
  大众闻呼: "Audience publique",
  慌忙检束: "Dépêchez-vous pour l'inspection",
  整衣向前: "Placer les vêtements en avant",
  悟空也现了本相: "Wukong a également montré sa vraie forme",
  杂在丛中道: "Mélangé au milieu du convoi",
  启上尊师: "Maître Qi",
  我等在此会讲: "Je vais parler ici",
  更无外姓喧哗: "Il n'y a pas de bruit de la part des autres",
  祖师怒喝道: "L'ancêtre a crié avec colère",
  你等大呼小叫: "Tu attends et tu criez",
  全不像个修行的体段: "Pas comme une étape de pratique",
  修行的人: "Une personne qui s'entraîne",
  口开神气散: "Ouvrez la bouche et dispersez votre esprit",
  舌动是非生: "La langue se déplace bien et mal",
  如何在此嚷笑: "Comment rire ici",
  大众道: "Populaire",
  不敢瞒师父: "N'ose pas le cacher à votre maître",
  适才孙悟空演变化耍子: "Tout à l'heure, Sun Wukong a agi comme un changeur",
  教他变棵松树: "Apprenez-lui à devenir un pin",
  果然是棵松树: "C'est en effet un pin",
  弟子们俱称扬喝采: "Les disciples tous loués",
  故高声惊冒尊师: "Par conséquent, j'ai crié fort et j'ai peur du professeur",
  望乞恕罪: "J'espère pardonner mes péchés",
  祖师道: "La voie du patriarche",
  你等起去: "Tu peux y aller",
  叫: "Appel",
  悟空: "Wukong",
  过来: "venir",
  我问你弄甚么精神: "Je vais vous demander quel genre de mentalité",
  变甚么松树: "Quel pin arbre",
  这个工夫: "Cette fois",
  可好在人前卖弄: "Mais heureusement, se montrer devant les autres",
  假如你见别人有: "Si tu vois quelqu'un d'autre",
  不要求他: "Ne lui demandez pas",
  别人见你有: "Quelqu'un d'autre te voit",
  必然求你: "Je vais certainement vous demander",
  你若畏祸: "Si tu as peur du malheur",
  却要传他: "Mais il veut passer",
  若不传他: "S'il ne passe pas",
  必然加害: "Ça va inévitablement nuire",
  你之性命又不可保: "Votre vie est dangereuse",
  悟空叩道: "Wukong frappe",
  只望师父恕罪: "J'espère que Maître pardonne ses péchés",
  祖师道: "La voie du patriarche",
  我也不罪你: "Je ne te blâme pas non plus",
  但只是你去吧: "Mais tu vas",
  悟空闻此言: "Wukong a entendu cela",
  满眼堕泪道: "Des larmes sur mes yeux",
  师父教我往那里去: "Maître m'a appris où aller",
  祖师道: "La voie du patriarche",
  你从那里来: "D'où viens-tu",
  便从那里去就是了: "Alors allez de là",
  悟空顿然醒悟道: "Wukong s'est soudainement réveillé",
  我自东胜神洲傲来国花果山水帘洞来的:
    "Je suis venu de la grotte de Flower and Fruit Mountain and Water Curtain de Country Aolai, Dongsheng Shenzhou",
  祖师道: "La voie du patriarche",
  你快回去: "Tu reviens bientôt",
  全你性命: "Toute ta vie",
  若在此间: "Si c'est",
  断然不可: "Certainement pas",
  悟空领罪: "Wukong prend le péché",
  上告尊师: "Laisse-moi te dire",
  我也离家有二十年矣: "Je suis aussi loin de chez moi depuis vingt ans",
  虽是回顾旧日儿孙:
    "Bien qu'il s'agisse d'une revue des vieux enfants et petits-enfants",
  但念师父厚恩未报:
    "Mais je me souviens que le maître n'a pas de récompense pour sa gentillesse",
  不敢去: "N'ose pas y aller",
  祖师道: "La voie du patriarche",
  那里甚么恩义: "Quel genre de gentillesse là-bas",
  你只是不惹祸不牵带我就罢了:
    "Tu ne causais pas de problème et ne m'emmène pas avec toi",
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
