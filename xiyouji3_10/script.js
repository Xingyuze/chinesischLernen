const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `金星领了旨
出南天门外
按下祥云
直至花果山水帘洞
对众小猴道
我乃天差天使
有圣旨在此
请你大王上届
快快报知
洞外小猴
一层层传至洞天深处
道
大王
外面有一老人
背着一角文书
言是上天差来的天使
有圣旨请你也
美猴王听得大喜
道
我这两日
正思量要上天走走
却就有天使来请
叫
快请进来
猴王急整衣冠
门外迎接
金星径入当中
面南立定道
我是西方太白金星
奉玉帝招安圣旨
下界请你上天
拜受仙录
悟空笑道
多感老星降临
教
小的们
安排筵宴款待
金星道
圣旨在身
不敢久留
就请大王同往
待荣迁之后
再从容叙也
悟空道
承光顾
空退
空退
即唤四健将
分付
谨慎教演儿孙
待我上天去看看路
却好带你们上去同居住也
四健将领诺
这猴王与金星纵起云头
升在空霄之上
正是那
高迁上品天仙位
名列云班宝录中
毕竟不知授个甚么官爵
且听下回分解`;

const pinyinMap = {
  金: "jīn",
  星: "xīng",
  领: "lǐng",
  了: "le",
  旨: "zhǐ",
  出: "chū",
  南: "nán",
  天: "tiān",
  门: "mén",
  外: "wài",
  按: "àn",
  下: "xià",
  祥: "xiáng",
  云: "yún",
  直: "zhí",
  至: "zhì",
  花: "huā",
  果: "guǒ",
  山: "shān",
  水: "shuǐ",
  帘: "lián",
  洞: "dòng",
  对: "duì",
  众: "zhòng",
  小: "xiǎo",
  猴: "hóu",
  道: "dào",
  我: "wǒ",
  乃: "nǎi",
  差: "chāi",
  使: "shǐ",
  有: "yǒu",
  圣: "shèng",
  在: "zài",
  此: "cǐ",
  请: "qǐng",
  你: "nǐ",
  大: "dài",
  王: "wáng",
  上: "shàng",
  届: "jiè",
  快: "kuài",
  报: "bào",
  知: "zhī",
  一: "yī",
  层: "céng",
  传: "chuán",
  深: "shēn",
  处: "chù",
  面: "miàn",
  老: "lǎo",
  人: "rén",
  背: "bèi",
  着: "zhe",
  角: "jiǎo",
  文: "wén",
  书: "shū",
  言: "yán",
  是: "shì",
  来: "lái",
  的: "de",
  也: "yě",
  美: "měi",
  听: "tīng",
  得: "dé",
  喜: "xǐ",
  这: "zhè",
  两: "liǎng",
  日: "rì",
  正: "zhèng",
  思: "sī",
  量: "liáng",
  要: "yào",
  走: "zǒu",
  却: "què",
  就: "jiù",
  叫: "jiào",
  进: "jìn",
  急: "jí",
  整: "zhěng",
  衣: "yì",
  冠: "guān",
  迎: "yíng",
  接: "jiē",
  径: "jìng",
  入: "rù",
  当: "dāng",
  中: "zhōng",
  立: "lì",
  定: "dìng",
  西: "xī",
  方: "fāng",
  太: "tài",
  白: "bái",
  奉: "fèng",
  玉: "yù",
  帝: "dì",
  招: "zhāo",
  安: "ān",
  界: "jiè",
  拜: "bài",
  受: "shòu",
  仙: "xiān",
  录: "lù",
  悟: "wù",
  空: "kōng",
  笑: "xiào",
  多: "duō",
  感: "gǎn",
  降: "jiàng",
  临: "lín",
  教: "jiào",
  们: "men",
  排: "pái",
  筵: "yán",
  宴: "yàn",
  款: "kuǎn",
  待: "dài",
  身: "shēn",
  不: "bù",
  敢: "gǎn",
  久: "jiǔ",
  留: "liú",
  同: "tóng",
  往: "wǎng",
  荣: "róng",
  迁: "qiān",
  之: "zhī",
  后: "hòu",
  再: "zài",
  从: "cóng",
  容: "róng",
  叙: "xù",
  承: "chéng",
  光: "guāng",
  顾: "gù",
  退: "tuì",
  即: "jí",
  唤: "huàn",
  四: "sì",
  健: "jiàn",
  将: "jiàng",
  分: "fēn",
  付: "fù",
  谨: "jǐn",
  慎: "shèn",
  演: "yǎn",
  儿: "ér",
  孙: "sūn",
  去: "qù",
  看: "kàn",
  路: "lù",
  好: "hǎo",
  带: "dài",
  居: "jū",
  住: "zhù",
  诺: "nuò",
  与: "yǔ",
  纵: "zòng",
  起: "qǐ",
  头: "tóu",
  升: "shēng",
  霄: "xiāo",
  那: "nà",
  高: "gāo",
  品: "pǐn",
  位: "wèi",
  名: "míng",
  列: "liè",
  班: "bān",
  宝: "bǎo",
  毕: "bì",
  竟: "jìng",
  授: "shòu",
  个: "gè",
  甚: "shén",
  么: "me",
  官: "guān",
  爵: "jué",
  且: "qiě",
  回: "huí",
  解: "jiě",
};

const translations_en = {
  金: "gold",
  星: "star",
  领: "collar",
  了: "It's",
  旨: "purpose",
  出: "out",
  南: "South",
  天: "sky",
  门: "Door",
  外: "outside",
  按: "according to",
  下: "Down",
  祥: "Xiang",
  云: "cloud",
  直: "straight",
  至: "to",
  花: "flower",
  果: "fruit",
  山: "Mountain",
  水: "water",
  帘: "curtain",
  洞: "Hole",
  对: "right",
  众: "All",
  小: "Small",
  猴: "monkey",
  道: "road",
  我: "I",
  乃: "So",
  差: "Difference",
  使: "make",
  有: "have",
  圣: "Saint",
  在: "exist",
  此: "this",
  请: "please",
  你: "you",
  大: "big",
  王: "king",
  上: "superior",
  届: "Chapter",
  快: "quick",
  报: "Report",
  知: "Know",
  一: "one",
  层: "layer",
  传: "pass",
  深: "deep",
  处: "Where",
  面: "noodle",
  老: "old",
  人: "people",
  背: "back",
  着: "Put",
  角: "horn",
  文: "arts",
  书: "Book",
  言: "Word",
  是: "yes",
  来: "Come",
  的: "of",
  也: "also",
  美: "beautiful",
  听: "listen",
  得: "have to",
  喜: "happiness",
  这: "this",
  两: "two",
  日: "day",
  正: "just",
  思: "think",
  量: "quantity",
  要: "want",
  走: "Walk",
  却: "but",
  就: "At once",
  叫: "Call",
  进: "Enter",
  急: "urgent",
  整: "all",
  衣: "Clothes",
  冠: "crown",
  迎: "welcome",
  接: "catch",
  径: "path",
  入: "enter",
  当: "when",
  中: "middle",
  立: "stand",
  定: "Certainly",
  西: "West",
  方: "square",
  太: "too",
  白: "white",
  奉: "Feng",
  玉: "Jade",
  帝: "emperor",
  招: "trick",
  安: "install",
  界: "boundary",
  拜: "bye",
  受: "by",
  仙: "Fairy",
  录: "record",
  悟: "Enlightenment",
  空: "null",
  笑: "laugh",
  多: "many",
  感: "feel",
  降: "drop",
  临: "Pro",
  教: "teach",
  们: "We",
  排: "Row",
  筵: "feast",
  宴: "feast",
  款: "payment",
  待: "treat",
  身: "body",
  不: "No",
  敢: "dare",
  久: "Long",
  留: "Keep",
  同: "same",
  往: "Past",
  荣: "Honor",
  迁: "move",
  之: "Of",
  后: "back",
  再: "Again",
  从: "from",
  容: "Allow",
  叙: "Narration",
  承: "Inherited",
  光: "Light",
  顾: "Gu",
  退: "retreat",
  即: "Right now",
  唤: "Call",
  四: "Four",
  健: "Healthy",
  将: "Will",
  分: "point",
  付: "pay",
  谨: "Be cautious",
  慎: "Be careful",
  演: "play",
  儿: "Son",
  孙: "Sun",
  去: "go",
  看: "look",
  路: "road",
  好: "good",
  带: "bring",
  居: "Residence",
  住: "live",
  诺: "promise",
  与: "and",
  纵: "vertical",
  起: "rise",
  头: "head",
  升: "Lift",
  霄: "Sky",
  那: "That",
  高: "high",
  品: "Taste",
  位: "Bit",
  名: "name",
  列: "List",
  班: "class",
  宝: "precious",
  毕: "complete",
  竟: "actually",
  授: "Grant",
  个: "indivual",
  甚: "very",
  么: "Is it",
  官: "official",
  爵: "Jue",
  且: "and",
  回: "Back",
  解: "untie",
};

const translations_de = {
  金: "Gold",
  星: "Stern",
  领: "Kragen",
  了: "Es ist",
  旨: "Zweck",
  出: "aus",
  南: "Süden",
  天: "Himmel",
  门: "Tür",
  外: "draußen",
  按: "entsprechend",
  下: "Runter",
  祥: "Xiang",
  云: "Wolke",
  直: "gerade",
  至: "Zu",
  花: "Blume",
  果: "Obst",
  山: "Berg",
  水: "Wasser",
  帘: "Vorhang",
  洞: "Loch",
  对: "Rechts",
  众: "Alle",
  小: "Klein",
  猴: "Affe",
  道: "Straße",
  我: "ICH",
  乃: "Also",
  差: "Unterschied",
  使: "machen",
  有: "haben",
  圣: "Heilige",
  在: "existieren",
  此: "Das",
  请: "Bitte",
  你: "Du",
  大: "groß",
  王: "König",
  上: "Vorgesetzter",
  届: "Kapitel",
  快: "schnell",
  报: "Bericht",
  知: "Wissen",
  一: "eins",
  层: "Schicht",
  传: "passieren",
  深: "tief",
  处: "Wo",
  面: "Nudel",
  老: "alt",
  人: "Menschen",
  背: "zurück",
  着: "Setzen",
  角: "Horn",
  文: "Künste",
  书: "Buch",
  言: "Wort",
  是: "Ja",
  来: "Kommen",
  的: "von",
  也: "Auch",
  美: "Schön",
  听: "Hören",
  得: "müssen",
  喜: "Glück",
  这: "Das",
  两: "zwei",
  日: "Tag",
  正: "Nur",
  思: "denken",
  量: "Menge",
  要: "wollen",
  走: "Gehen",
  却: "Aber",
  就: "Auf einmal",
  叫: "Anruf",
  进: "Eingeben",
  急: "dringend",
  整: "alle",
  衣: "Kleidung",
  冠: "Krone",
  迎: "Willkommen",
  接: "fangen",
  径: "Weg",
  入: "eingeben",
  当: "Wann",
  中: "Mitte",
  立: "Stand",
  定: "Sicherlich",
  西: "West",
  方: "Quadrat",
  太: "zu",
  白: "Weiß",
  奉: "Feng",
  玉: "Jade",
  帝: "Kaiser",
  招: "Trick",
  安: "installieren",
  界: "Grenze",
  拜: "Tschüss",
  受: "von",
  仙: "Fee",
  录: "aufzeichnen",
  悟: "Aufklärung",
  空: "NULL",
  笑: "lachen",
  多: "viele",
  感: "fühlen",
  降: "fallen",
  临: "Pro",
  教: "unterrichten",
  们: "Wir",
  排: "Reihe",
  筵: "Fest",
  宴: "Fest",
  款: "Zahlung",
  待: "behandeln",
  身: "Körper",
  不: "NEIN",
  敢: "wagen",
  久: "Lang",
  留: "Halten",
  同: "Dasselbe",
  往: "Vergangenheit",
  荣: "Ehre",
  迁: "bewegen",
  之: "Von",
  后: "zurück",
  再: "Wieder",
  从: "aus",
  容: "Erlauben",
  叙: "Erzählung",
  承: "Geerbt",
  光: "Licht",
  顾: "Gu",
  退: "Rückzug",
  即: "Im Augenblick",
  唤: "Anruf",
  四: "Vier",
  健: "Gesund",
  将: "Wille",
  分: "Punkt",
  付: "zahlen",
  谨: "Vorsichtig sein",
  慎: "Seien Sie vorsichtig",
  演: "spielen",
  儿: "Sohn",
  孙: "Sonne",
  去: "gehen",
  看: "sehen",
  路: "Straße",
  好: "Gut",
  带: "bringen",
  居: "Residenz",
  住: "live",
  诺: "versprechen",
  与: "Und",
  纵: "Vertikale",
  起: "erheben",
  头: "Kopf",
  升: "Aufzug",
  霄: "Himmel",
  那: "Das",
  高: "hoch",
  品: "Schmecken",
  位: "Bisschen",
  名: "Name",
  列: "Liste",
  班: "Klasse",
  宝: "wertvoll",
  毕: "vollständig",
  竟: "Genau genommen",
  授: "Gewähren",
  个: "indival",
  甚: "sehr",
  么: "Ist es",
  官: "offiziell",
  爵: "Jue",
  且: "Und",
  回: "Zurück",
  解: "lösen",
};

const translations_fr = {
  金: "or",
  星: "étoile",
  领: "collier",
  了: "C'est",
  旨: "but",
  出: "dehors",
  南: "Sud",
  天: "ciel",
  门: "Porte",
  外: "dehors",
  按: "selon",
  下: "Vers le bas",
  祥: "Xiang",
  云: "nuage",
  直: "droit",
  至: "à",
  花: "fleur",
  果: "fruit",
  山: "Montagne",
  水: "eau",
  帘: "rideau",
  洞: "Trou",
  对: "droite",
  众: "Tous",
  小: "Petit",
  猴: "singe",
  道: "route",
  我: "je",
  乃: "Donc",
  差: "Différence",
  使: "faire",
  有: "avoir",
  圣: "Saint",
  在: "exister",
  此: "ce",
  请: "s'il te plaît",
  你: "toi",
  大: "grand",
  王: "roi",
  上: "supérieur",
  届: "Chapitre",
  快: "rapide",
  报: "Rapport",
  知: "Savoir",
  一: "un",
  层: "couche",
  传: "passer",
  深: "profond",
  处: "Où",
  面: "nouille",
  老: "vieux",
  人: "personnes",
  背: "dos",
  着: "Mettre",
  角: "corne",
  文: "arts",
  书: "Livre",
  言: "Mot",
  是: "Oui",
  来: "Viens",
  的: "de",
  也: "aussi",
  美: "beau",
  听: "écouter",
  得: "devoir",
  喜: "bonheur",
  这: "ce",
  两: "deux",
  日: "jour",
  正: "juste",
  思: "pense",
  量: "quantité",
  要: "vouloir",
  走: "Marcher",
  却: "mais",
  就: "Immédiatement",
  叫: "Appel",
  进: "Entrer",
  急: "urgent",
  整: "tous",
  衣: "Vêtements",
  冠: "couronne",
  迎: "accueillir",
  接: "attraper",
  径: "chemin",
  入: "entrer",
  当: "quand",
  中: "milieu",
  立: "rester",
  定: "Certainement",
  西: "Ouest",
  方: "carré",
  太: "aussi",
  白: "blanc",
  奉: "Feng",
  玉: "Jade",
  帝: "empereur",
  招: "astuce",
  安: "installer",
  界: "limite",
  拜: "au revoir",
  受: "par",
  仙: "Fée",
  录: "enregistrer",
  悟: "Éclaircissement",
  空: "nul",
  笑: "rire",
  多: "beaucoup",
  感: "sentir",
  降: "baisse",
  临: "Pro",
  教: "enseigner",
  们: "Nous",
  排: "Rangée",
  筵: "festin",
  宴: "festin",
  款: "paiement",
  待: "traiter",
  身: "corps",
  不: "Non",
  敢: "oser",
  久: "Long",
  留: "Garder",
  同: "même",
  往: "Passé",
  荣: "Honneur",
  迁: "se déplacer",
  之: "De",
  后: "dos",
  再: "Encore",
  从: "depuis",
  容: "Permettre",
  叙: "Narration",
  承: "Hérité",
  光: "Lumière",
  顾: "GU",
  退: "retraite",
  即: "Tout de suite",
  唤: "Appel",
  四: "Quatre",
  健: "En bonne santé",
  将: "Volonté",
  分: "indiquer",
  付: "payer",
  谨: "Être prudent",
  慎: "Sois prudent",
  演: "Par intérim",
  儿: "Fils",
  孙: "Soleil",
  去: "aller",
  看: "regarder",
  路: "route",
  好: "bien",
  带: "apporter",
  居: "Résidence",
  住: "en direct",
  诺: "promesse",
  与: "et",
  纵: "verticale",
  起: "augmenter",
  头: "tête",
  升: "Ascenseur",
  霄: "Ciel",
  那: "Que",
  高: "haut",
  品: "Goût",
  位: "Peu",
  名: "nom",
  列: "Liste",
  班: "classe",
  宝: "précieux",
  毕: "complet",
  竟: "en fait",
  授: "Accorder",
  个: "autonome",
  甚: "très",
  么: "Est-ce",
  官: "officiel",
  爵: "Jue",
  且: "et",
  回: "Dos",
  解: "délier",
};

const tianwen_translation_map_en = {
  金星领了旨: "Venus received the order",
  出南天门外: "Outside the South Gate",
  按下祥云: "Press Xiangyun",
  直至花果山水帘洞: "Until Huaguoshanshuiyan Cave",
  对众小猴道: "To all the monkeys",
  我乃天差天使: "I am an angel who sent me heaven",
  有圣旨在此: "There is an imperial decree here",
  请你大王上届: "Please give me the last time",
  快快报知: "Report it quickly",
  洞外小猴: "Little monkey outside the cave",
  一层层传至洞天深处: "It spreads to the depths of the cave",
  道: "road",
  大王: "The King",
  外面有一老人: "There is an old man outside",
  背着一角文书: "Carrying a corner of the document",
  言是上天差来的天使: "Words are angels sent by God",
  有圣旨请你也: "Is there an imperial edict to ask you",
  美猴王听得大喜: "The Monkey King was very happy to hear it",
  道: "road",
  我这两日: "I've been in the past two days",
  正思量要上天走走: "Just thinking about going to heaven",
  却就有天使来请: "But there are angels to invite",
  叫: "Call",
  快请进来: "Please come in soon",
  猴王急整衣冠: "Monkey King urgently dresses",
  门外迎接: "Welcome outside the door",
  金星径入当中: "Venus enters the path",
  面南立定道: "Setting the road to the south",
  我是西方太白金星: "I'm a Western Platinum Star",
  奉玉帝招安圣旨: "The Jade Emperor's Imperial Order",
  下界请你上天: "Please go to heaven in the lower realm",
  拜受仙录: "Worship the Immortal Record",
  悟空笑道: "Wukong said with a smile",
  多感老星降临: "Many senses of the arrival of old stars",
  教: "teach",
  小的们: "The young men",
  安排筵宴款待: "Arrange banquets and treats",
  金星道: "Venus Road",
  圣旨在身: "The Imperial Purpose",
  不敢久留: "Don't dare to stay for a long time",
  就请大王同往: "Please go with the king",
  待荣迁之后: "Wait for the relocation",
  再从容叙也: "No matter how calm the story is",
  悟空道: "Wukong Tao",
  承光顾: "Adopt the patron",
  空退: "Retreat",
  空退: "Retreat",
  即唤四健将: "Call the four heroes",
  分付: "Payment",
  谨慎教演儿孙: "Teach children and grandchildren carefully",
  待我上天去看看路: "Let me go to heaven to see the road",
  却好带你们上去同居住也: "But I can take you up to live together",
  四健将领诺: "Four heroes",
  这猴王与金星纵起云头: "The Monkey King and Venus rose to the clouds",
  升在空霄之上: "Ascend above the sky",
  正是那: "It's exactly that",
  高迁上品天仙位: "High-level fairy position",
  名列云班宝录中: "Listed in Yunban Bao Record",
  毕竟不知授个甚么官爵:
    "After all, I don't know what official title you are awarded",
  且听下回分解: "Let's hear the next breakdown",
};

const tianwen_translation_map_de = {
  金星领了旨: "Venus erhielt die Bestellung",
  出南天门外: "Außerhalb des Südtors",
  按下祥云: "Drücken Sie Xiangyun",
  直至花果山水帘洞: "Bis Huaguoshanshuiyan Höhle",
  对众小猴道: "An alle Affen",
  我乃天差天使: "Ich bin ein Engel, der mir den Himmel geschickt hat",
  有圣旨在此: "Hier gibt es ein kaiserliches Dekret",
  请你大王上届: "Bitte geben Sie mir das letzte Mal",
  快快报知: "Melden Sie es schnell",
  洞外小猴: "Kleiner Affe außerhalb der Höhle",
  一层层传至洞天深处: "Es breitet sich bis in die Tiefen der Höhle aus",
  道: "Straße",
  大王: "Der König",
  外面有一老人: "Es gibt einen alten Mann draußen",
  背着一角文书: "Eine Ecke des Dokuments tragen",
  言是上天差来的天使: "Worte sind Engel, die von Gott gesendet werden",
  有圣旨请你也: "Gibt es ein kaiserliches Edikt, um Sie zu fragen?",
  美猴王听得大喜: "Der Affenkönig freute sich sehr, es zu hören",
  道: "Straße",
  我这两日: "Ich war in den letzten zwei Tagen",
  正思量要上天走走: "Ich denke nur daran, in den Himmel zu gehen",
  却就有天使来请: "Aber es gibt Engel, die man einlädt",
  叫: "Anruf",
  快请进来: "Bitte kommen Sie bald rein",
  猴王急整衣冠: "Affenkönig kleidet sich dringend",
  门外迎接: "Willkommen vor der Tür",
  金星径入当中: "Venus betritt den Weg",
  面南立定道: "Die Straße nach Süden setzen",
  我是西方太白金星: "Ich bin ein westlicher Platinstern",
  奉玉帝招安圣旨: "Die kaiserliche Ordnung des Jade -Kaisers",
  下界请你上天: "Bitte gehen Sie im unteren Bereich in den Himmel",
  拜受仙录: "Verehren die unsterbliche Aufzeichnung",
  悟空笑道: "Sagte Wukong mit einem Lächeln",
  多感老星降临: "Viele Sinne der Ankunft alter Sterne",
  教: "unterrichten",
  小的们: "Die jungen Männer",
  安排筵宴款待: "Bankette und Leckereien arrangieren",
  金星道: "Venus Road",
  圣旨在身: "Der imperiale Zweck",
  不敢久留: "Wagen Sie es nicht, lange zu bleiben",
  就请大王同往: "Bitte gehen Sie mit dem König",
  待荣迁之后: "Warten Sie auf den Umzug",
  再从容叙也: "Egal wie ruhig die Geschichte ist",
  悟空道: "Wukong Tao",
  承光顾: "Adoptieren Sie den Patron",
  空退: "Rückzug",
  空退: "Rückzug",
  即唤四健将: "Rufen Sie die vier Helden an",
  分付: "Zahlung",
  谨慎教演儿孙: "Unterrichten Sie Kinder und Enkelkinder sorgfältig",
  待我上天去看看路:
    "Lassen Sie mich in den Himmel gehen, um die Straße zu sehen",
  却好带你们上去同居住也: "Aber ich kann dich dazu bringen, zusammen zu leben",
  四健将领诺: "Vier Helden",
  这猴王与金星纵起云头: "Der Affenkönig und die Venus stiegen in die Wolken",
  升在空霄之上: "Steigen Sie über den Himmel auf",
  正是那: "Genau das",
  高迁上品天仙位: "Hochrangige Feenposition",
  名列云班宝录中: "In Yunban Bao Record aufgeführt",
  毕竟不知授个甚么官爵:
    "Immerhin weiß ich nicht, welchen offiziellen Titel Sie vergeben haben",
  且听下回分解: "Lassen Sie uns den nächsten Zusammenbruch hören",
};

const tianwen_translation_map_fr = {
  金星领了旨: "Vénus a reçu la commande",
  出南天门外: "À l'extérieur de la porte sud",
  按下祥云: "Pressez Xiangyun",
  直至花果山水帘洞: "Jusqu'à la grotte de Huaguoshanshuiyan",
  对众小猴道: "À tous les singes",
  我乃天差天使: "Je suis un ange qui m'a envoyé le paradis",
  有圣旨在此: "Il y a un décret impérial ici",
  请你大王上届: "S'il vous plaît donnez-moi la dernière fois",
  快快报知: "Signalez-le rapidement",
  洞外小猴: "Petit singe à l'extérieur de la grotte",
  一层层传至洞天深处: "Il se propage aux profondeurs de la grotte",
  道: "route",
  大王: "Le roi",
  外面有一老人: "Il y a un vieil homme à l'extérieur",
  背着一角文书: "Portant un coin du document",
  言是上天差来的天使: "Les mots sont des anges envoyés par Dieu",
  有圣旨请你也: "Y a-t-il un édit impérial à vous demander",
  美猴王听得大喜: "Le roi de singe était très heureux de l'entendre",
  道: "route",
  我这两日: "J'ai été depuis deux jours",
  正思量要上天走走: "Je pense juste à aller au paradis",
  却就有天使来请: "Mais il y a des anges à inviter",
  叫: "Appel",
  快请进来: "S'il vous plaît, venez bientôt",
  猴王急整衣冠: "Habillage de singe roi de toute urgence",
  门外迎接: "Bienvenue à l'extérieur de la porte",
  金星径入当中: "Vénus entre sur le chemin",
  面南立定道: "Mettre la route au sud",
  我是西方太白金星: "Je suis une étoile de platine occidentale",
  奉玉帝招安圣旨: "L'ordre impérial de l'empereur Jade",
  下界请你上天: "Veuillez aller au paradis dans le royaume inférieur",
  拜受仙录: "Adorer le record immortel",
  悟空笑道: "Wukong a dit avec un sourire",
  多感老星降临: "Beaucoup de sens des vieilles étoiles à venir",
  教: "enseigner",
  小的们: "Les jeunes hommes",
  安排筵宴款待: "Organiser des banquets et des friandises",
  金星道: "Vénus Route",
  圣旨在身: "Le but impérial",
  不敢久留: "N'ose pas rester longtemps",
  就请大王同往: "Veuillez aller avec le roi",
  待荣迁之后: "Attendez la relocalisation",
  再从容叙也: "Peu importe à quel point l'histoire est calme",
  悟空道: "Wukong Tao",
  承光顾: "Adopter le patron",
  空退: "Retraite",
  空退: "Retraite",
  即唤四健将: "Appelez les quatre héros",
  分付: "Paiement",
  谨慎教演儿孙: "Enseigner soigneusement aux enfants et aux petits-enfants",
  待我上天去看看路: "Laisse-moi aller au paradis pour voir la route",
  却好带你们上去同居住也: "Mais je peux te prendre pour vivre ensemble",
  四健将领诺: "Quatre héros",
  这猴王与金星纵起云头: "Le roi de singe et Vénus se sont levés aux nuages",
  升在空霄之上: "Monter au-dessus du ciel",
  正是那: "C'est exactement ça",
  高迁上品天仙位: "Position de fée de haut niveau",
  名列云班宝录中: "Inscrit dans le dossier de Yunban Bao",
  毕竟不知授个甚么官爵:
    "Après tout, je ne sais pas quel titre officiel vous êtes attribué",
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
