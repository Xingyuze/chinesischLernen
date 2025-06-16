const translationCard = document.getElementById("translationCard");
// 诗歌文本c
export const poemText = `猴王听说
只得相辞
出深林
找上路径
过一山坡
约有七八里远
果然望见一座洞府
挺身观看
真好去堂
又见那洞门紧闭
静悄悄杳无人迹
忽回头
见崖头立一石牌
约有三丈馀高
八尺馀阔
上有一行十个大字
乃是灵台方寸山
斜月三星洞
美猴王十分欢喜道
此间人果是朴实
果有此山此洞
看勾多时
不敢敲门
且去跳上松枝梢头
摘松子吃了顽耍
少顷间
只听得呀的一声
洞门开处
里面走出一个仙童
真个丰姿英伟
像貌清奇
比寻常俗子不同
那童子出得门来
高叫道
甚么人在此搔扰
猴王扑的跳下树来
上前躬身道
仙童
我是个访道学仙之弟子
更不敢在此搔扰
仙童笑道
你是个访道的么
猴王道
童子道
我家师父
正才下榻
登坛讲道
还未说出原由
就教我出来开门
说
外面有个修行的来了
可去接待接待
想必就是你了
猴王笑道
是我
是我
童子道
你跟我进来
这猴王整衣端肃
随童子径入洞天深处观看
一层层深阁琼楼
一进进珠宫贝阙
说不尽那静室幽居
直至瑶台之下
`;
export const pinyinMap = {
  猴: "hóu",
  王: "wáng",
  听: "tīng",
  说: "shuō",
  只: "zhǐ",
  得: "de",
  相: "xiāng",
  辞: "cí",
  出: "chū",
  深: "shēn",
  林: "lín",
  找: "zhǎo",
  上: "shàng",
  路: "lù",
  径: "jìng",
  过: "guò",
  一: "yī",
  山: "shān",
  坡: "pō",
  约: "yuē",
  有: "yǒu",
  七: "qī",
  八: "bā",
  里: "lǐ",
  远: "yuǎn",
  果: "guǒ",
  然: "rán",
  望: "wàng",
  见: "jiàn",
  座: "zuò",
  洞: "dòng",
  府: "fǔ",
  挺: "tǐng",
  身: "shēn",
  观: "guān",
  看: "kàn",
  真: "zhēn",
  好: "hǎo",
  去: "qù",
  堂: "táng",
  又: "yòu",
  那: "nà",
  门: "mén",
  紧: "jǐn",
  闭: "bì",
  静: "jìng",
  悄: "qiāo",
  杳: "yǎo",
  无: "wú",
  人: "rén",
  迹: "jì",
  忽: "hū",
  回: "huí",
  头: "tóu",
  崖: "yá",
  立: "lì",
  石: "shí",
  牌: "pái",
  三: "sān",
  丈: "zhàng",
  馀: "yú",
  高: "gāo",
  尺: "chǐ",
  阔: "kuò",
  行: "xíng",
  十: "shí",
  个: "gè",
  大: "dà",
  字: "zì",
  乃: "nǎi",
  是: "shì",
  灵: "líng",
  台: "tái",
  方: "fāng",
  寸: "cùn",
  斜: "xié",
  月: "yuè",
  星: "xīng",
  美: "měi",
  分: "fēn",
  欢: "huān",
  喜: "xǐ",
  道: "dào",
  此: "cǐ",
  间: "jiān",
  朴: "pǔ",
  实: "shí",
  勾: "gōu",
  多: "duō",
  时: "shí",
  不: "bù",
  敢: "gǎn",
  敲: "qiāo",
  且: "qiě",
  跳: "tiào",
  松: "sōng",
  枝: "zhī",
  梢: "shāo",
  摘: "zhāi",
  子: "zi",
  吃: "chī",
  了: "le",
  顽: "wán",
  耍: "shuǎ",
  少: "shǎo",
  顷: "qǐng",
  呀: "ya",
  的: "de",
  声: "shēng",
  开: "kāi",
  处: "chù",
  面: "miàn",
  走: "zǒu",
  仙: "xiān",
  童: "tóng",
  丰: "fēng",
  姿: "zī",
  英: "yīng",
  伟: "wěi",
  像: "xiàng",
  貌: "mào",
  清: "qīng",
  奇: "qí",
  比: "bǐ",
  寻: "xún",
  常: "cháng",
  俗: "sú",
  同: "tóng",
  来: "lái",
  叫: "jiào",
  甚: "shén",
  么: "me",
  在: "zài",
  搔: "sāo",
  扰: "rǎo",
  扑: "pū",
  下: "xià",
  树: "shù",
  前: "qián",
  躬: "gōng",
  我: "wǒ",
  访: "fǎng",
  学: "xué",
  之: "zhī",
  弟: "dì",
  更: "gèng",
  笑: "xiào",
  你: "nǐ",
  家: "jiā",
  师: "shī",
  父: "fù",
  正: "zhèng",
  才: "cái",
  榻: "tà",
  登: "dēng",
  坛: "tán",
  讲: "jiǎng",
  还: "hái",
  未: "wèi",
  原: "yuán",
  由: "yóu",
  就: "jiù",
  教: "jiào",
  外: "wài",
  修: "xiū",
  可: "kě",
  接: "jiē",
  待: "dài",
  想: "xiǎng",
  必: "bì",
  跟: "gēn",
  进: "jìn",
  这: "zhè",
  整: "zhěng",
  衣: "yī",
  端: "duān",
  肃: "sù",
  随: "suí",
  入: "rù",
  天: "tiān",
  层: "céng",
  阁: "gé",
  琼: "qióng",
  楼: "lóu",
  珠: "zhū",
  宫: "gōng",
  贝: "bèi",
  阙: "què",
  尽: "jǐn",
  室: "shì",
  幽: "yōu",
  居: "jū",
  直: "zhí",
  至: "zhì",
  瑶: "yáo",
};
export const translations_en = {
  猴: "monkey",
  王: "king",
  听: "listen",
  说: "explain",
  只: "Only",
  得: "have to",
  相: "Mutually",
  辞: "Quotation",
  出: "out",
  深: "deep",
  林: "Forest",
  找: "try to find",
  上: "superior",
  路: "road",
  径: "path",
  过: "Pass",
  一: "one",
  山: "Mountain",
  坡: "slope",
  约: "about",
  有: "have",
  七: "seven",
  八: "eight",
  里: "inside",
  远: "Far",
  果: "fruit",
  然: "Of course",
  望: "see",
  见: "See",
  座: "seat",
  洞: "Hole",
  府: "House",
  挺: "quite",
  身: "body",
  观: "View",
  看: "look",
  真: "real",
  好: "good",
  去: "go",
  堂: "Hall",
  又: "again",
  那: "That",
  门: "Door",
  紧: "tight",
  闭: "close",
  静: "quiet",
  悄: "quiet",
  杳: "dark and quiet",
  无: "none",
  人: "people",
  迹: "trace",
  忽: "suddenly",
  回: "Back",
  头: "head",
  崖: "Cliff",
  立: "stand",
  石: "stone",
  牌: "Card",
  三: "three",
  丈: "ten feet",
  馀: "Remaining",
  高: "high",
  尺: "ruler",
  阔: "wide",
  行: "OK",
  十: "ten",
  个: "indivual",
  大: "big",
  字: "Character",
  乃: "So",
  是: "yes",
  灵: "spirit",
  台: "tower",
  方: "square",
  寸: "inch",
  斜: "incline",
  月: "moon",
  星: "star",
  美: "beautiful",
  分: "point",
  欢: "joyous",
  喜: "happiness",
  道: "road",
  此: "this",
  间: "between",
  朴: "Park",
  实: "Reality",
  勾: "hook",
  多: "many",
  时: "hour",
  不: "No",
  敢: "dare",
  敲: "knock",
  且: "and",
  跳: "Jump",
  松: "loose",
  枝: "branch",
  梢: "Top",
  摘: "Pick",
  子: "son",
  吃: "eat",
  了: "It's",
  顽: "stubborn",
  耍: "Play",
  少: "few",
  顷: "沪",
  呀: "ah",
  的: "of",
  声: "Voice",
  开: "open",
  处: "Where",
  面: "noodle",
  走: "Walk",
  仙: "Fairy",
  童: "child",
  丰: "rich",
  姿: "posture",
  英: "Britain",
  伟: "Wei",
  像: "picture",
  貌: "appearance",
  清: "clear",
  奇: "strange",
  比: "Compare",
  寻: "Looking for",
  常: "often",
  俗: "Vulgar",
  同: "same",
  来: "Come",
  叫: "Call",
  甚: "very",
  么: "Is it",
  在: "exist",
  搔: "scratch",
  扰: "Disturbance",
  扑: "flutter",
  下: "Down",
  树: "Tree",
  前: "forward",
  躬: "bow",
  我: "I",
  访: "visit",
  学: "study",
  之: "Of",
  弟: "younger brother",
  更: "Even",
  笑: "laugh",
  你: "you",
  家: "Home",
  师: "division",
  父: "father",
  正: "just",
  才: "talent",
  榻: "couch",
  登: "Login",
  坛: "altar",
  讲: "speak",
  还: "return",
  未: "not yet",
  原: "Original",
  由: "Depend on",
  就: "At once",
  教: "teach",
  外: "outside",
  修: "build",
  可: "Can",
  接: "catch",
  待: "treat",
  想: "think",
  必: "must",
  跟: "and",
  进: "Enter",
  这: "this",
  整: "all",
  衣: "Clothes",
  端: "end",
  肃: "Su",
  随: "With",
  入: "enter",
  天: "sky",
  层: "layer",
  阁: "Pavilion",
  琼: "Joan",
  楼: "building",
  珠: "Beads",
  宫: "palace",
  贝: "cowry",
  阙: "Que",
  尽: "All",
  室: "room",
  幽: "quiet",
  居: "Residence",
  直: "straight",
  至: "to",
  瑶: "Yao",
};

export const translations_de = {
  猴: "Affe",
  王: "König",
  听: "Hören",
  说: "erklären",
  只: "Nur",
  得: "müssen",
  相: "Gegenseitig",
  辞: "Zitat",
  出: "aus",
  深: "tief",
  林: "Wald",
  找: "versuche zu finden",
  上: "Vorgesetzter",
  路: "Straße",
  径: "Weg",
  过: "Passieren",
  一: "eins",
  山: "Berg",
  坡: "Neigung",
  约: "um",
  有: "haben",
  七: "Sieben",
  八: "acht",
  里: "innen",
  远: "Weit",
  果: "Obst",
  然: "Natürlich",
  望: "sehen",
  见: "Sehen",
  座: "Sitz",
  洞: "Loch",
  府: "Haus",
  挺: "ganz",
  身: "Körper",
  观: "Sicht",
  看: "sehen",
  真: "real",
  好: "Gut",
  去: "gehen",
  堂: "Saal",
  又: "wieder",
  那: "Das",
  门: "Tür",
  紧: "eng",
  闭: "schließen",
  静: "ruhig",
  悄: "ruhig",
  杳: "dunkel und ruhig",
  无: "keiner",
  人: "Menschen",
  迹: "verfolgen",
  忽: "plötzlich",
  回: "Zurück",
  头: "Kopf",
  崖: "Cliff",
  立: "Stand",
  石: "Stein",
  牌: "Karte",
  三: "drei",
  丈: "zehn Fuß",
  馀: "Übrig",
  高: "hoch",
  尺: "Herrscher",
  阔: "breit",
  行: "OK",
  十: "zehn",
  个: "indival",
  大: "groß",
  字: "Charakter",
  乃: "Also",
  是: "Ja",
  灵: "Geist",
  台: "Turm",
  方: "Quadrat",
  寸: "Zoll",
  斜: "Neigung",
  月: "Mond",
  星: "Stern",
  美: "Schön",
  分: "Punkt",
  欢: "freudig",
  喜: "Glück",
  道: "Straße",
  此: "Das",
  间: "zwischen",
  朴: "Park",
  实: "Wirklichkeit",
  勾: "Haken",
  多: "viele",
  时: "Stunde",
  不: "NEIN",
  敢: "wagen",
  敲: "klopfen",
  且: "Und",
  跳: "Springen",
  松: "lose",
  枝: "Zweig",
  梢: "Spitze",
  摘: "Wählen",
  子: "Sohn",
  吃: "essen",
  了: "Es ist",
  顽: "hartnäckig",
  耍: "Spielen",
  少: "wenige",
  顷: "沪",
  呀: "Ah",
  的: "von",
  声: "Stimme",
  开: "offen",
  处: "Wo",
  面: "Nudel",
  走: "Gehen",
  仙: "Fee",
  童: "Kind",
  丰: "reich",
  姿: "Haltung",
  英: "Großbritannien",
  伟: "Wei",
  像: "Bild",
  貌: "Aussehen",
  清: "klar",
  奇: "seltsam",
  比: "Vergleichen",
  寻: "Auf der Suche nach",
  常: "oft",
  俗: "Vulgär",
  同: "Dasselbe",
  来: "Kommen",
  叫: "Anruf",
  甚: "sehr",
  么: "Ist es",
  在: "existieren",
  搔: "kratzen",
  扰: "Störung",
  扑: "flattern",
  下: "Runter",
  树: "Baum",
  前: "nach vorne",
  躬: "Bogen",
  我: "ICH",
  访: "besuchen",
  学: "Studie",
  之: "Von",
  弟: "jüngerer Bruder",
  更: "Sogar",
  笑: "lachen",
  你: "Du",
  家: "Heim",
  师: "Division",
  父: "Vater",
  正: "Nur",
  才: "Talent",
  榻: "Couch",
  登: "Login",
  坛: "Altar",
  讲: "sprechen",
  还: "zurückkehren",
  未: "Noch nicht",
  原: "Original",
  由: "Abhängig von",
  就: "Auf einmal",
  教: "unterrichten",
  外: "draußen",
  修: "bauen",
  可: "Kann",
  接: "fangen",
  待: "behandeln",
  想: "denken",
  必: "muss",
  跟: "Und",
  进: "Eingeben",
  这: "Das",
  整: "alle",
  衣: "Kleidung",
  端: "Ende",
  肃: "Su",
  随: "Mit",
  入: "eingeben",
  天: "Himmel",
  层: "Schicht",
  阁: "Pavillon",
  琼: "Joan",
  楼: "Gebäude",
  珠: "Perlen",
  宫: "Palast",
  贝: "Cowry",
  阙: "Que",
  尽: "Alle",
  室: "Zimmer",
  幽: "ruhig",
  居: "Residenz",
  直: "gerade",
  至: "Zu",
  瑶: "Yao",
};

export const translations_fr = {
  猴: "singe",
  王: "roi",
  听: "écouter",
  说: "expliquer",
  只: "Seulement",
  得: "devoir",
  相: "Mutuellement",
  辞: "Citation",
  出: "dehors",
  深: "profond",
  林: "Forêt",
  找: "chercher",
  上: "supérieur",
  路: "route",
  径: "chemin",
  过: "Passer",
  一: "un",
  山: "Montagne",
  坡: "pente",
  约: "à propos",
  有: "avoir",
  七: "Sept",
  八: "huit",
  里: "à l'intérieur",
  远: "Loin",
  果: "fruit",
  然: "Bien sûr",
  望: "voir",
  见: "Voir",
  座: "siège",
  洞: "Trou",
  府: "Maison",
  挺: "assez",
  身: "corps",
  观: "Voir",
  看: "regarder",
  真: "réel",
  好: "bien",
  去: "aller",
  堂: "Salle",
  又: "encore",
  那: "Que",
  门: "Porte",
  紧: "serré",
  闭: "fermer",
  静: "calme",
  悄: "calme",
  杳: "sombre et calme",
  无: "aucun",
  人: "personnes",
  迹: "tracer",
  忽: "soudainement",
  回: "Dos",
  头: "tête",
  崖: "Falaise",
  立: "rester",
  石: "pierre",
  牌: "Carte",
  三: "trois",
  丈: "dix pieds",
  馀: "Restant",
  高: "haut",
  尺: "règle",
  阔: "large",
  行: "D'ACCORD",
  十: "dix",
  个: "autonome",
  大: "grand",
  字: "Personnage",
  乃: "Donc",
  是: "Oui",
  灵: "esprit",
  台: "tour",
  方: "carré",
  寸: "pouce",
  斜: "inclinaison",
  月: "lune",
  星: "étoile",
  美: "beau",
  分: "indiquer",
  欢: "joyeux",
  喜: "bonheur",
  道: "route",
  此: "ce",
  间: "entre",
  朴: "Parc",
  实: "Réalité",
  勾: "crochet",
  多: "beaucoup",
  时: "heure",
  不: "Non",
  敢: "oser",
  敲: "frappe",
  且: "et",
  跳: "Saut",
  松: "lâche",
  枝: "bifurquer",
  梢: "Haut",
  摘: "Prendre",
  子: "fils",
  吃: "manger",
  了: "C'est",
  顽: "têtu",
  耍: "Jouer",
  少: "peu",
  顷: "沪",
  呀: "ah",
  的: "de",
  声: "Voix",
  开: "ouvrir",
  处: "Où",
  面: "nouille",
  走: "Marcher",
  仙: "Fée",
  童: "enfant",
  丰: "riche",
  姿: "posture",
  英: "Grande-Bretagne",
  伟: "Wei",
  像: "image",
  貌: "apparence",
  清: "clair",
  奇: "étrange",
  比: "Comparer",
  寻: "À la recherche de",
  常: "souvent",
  俗: "Vulgaire",
  同: "même",
  来: "Viens",
  叫: "Appel",
  甚: "très",
  么: "Est-ce",
  在: "exister",
  搔: "gratter",
  扰: "Perturbation",
  扑: "battement",
  下: "Vers le bas",
  树: "Arbre",
  前: "avant",
  躬: "arc",
  我: "je",
  访: "visite",
  学: "étude",
  之: "De",
  弟: "jeune frère",
  更: "Même",
  笑: "rire",
  你: "toi",
  家: "Maison",
  师: "division",
  父: "père",
  正: "juste",
  才: "talent",
  榻: "canapé",
  登: "Se connecter",
  坛: "autel",
  讲: "parler",
  还: "retour",
  未: "pas encore",
  原: "Original",
  由: "Dépendre de",
  就: "Immédiatement",
  教: "enseigner",
  外: "dehors",
  修: "construire",
  可: "Peut",
  接: "attraper",
  待: "traiter",
  想: "pense",
  必: "doit",
  跟: "et",
  进: "Entrer",
  这: "ce",
  整: "tous",
  衣: "Vêtements",
  端: "fin",
  肃: "Su",
  随: "Avec",
  入: "entrer",
  天: "ciel",
  层: "couche",
  阁: "Pavillon",
  琼: "Joan",
  楼: "bâtiment",
  珠: "Perles",
  宫: "palais",
  贝: "bouc",
  阙: "Que ce soit",
  尽: "Tous",
  室: "chambre",
  幽: "calme",
  居: "Résidence",
  直: "droit",
  至: "à",
  瑶: "Yao",
};

const tianwen_translation_map_en = {
  猴王听说: "The Monkey King heard",
  只得相辞: "Have to say no",
  出深林: "Out of the deep forest",
  找上路径: "Find the path",
  过一山坡: "Cross a hill",
  约有七八里远: "About seven or eight miles away",
  果然望见一座洞府: "Sure enough, I saw a cave",
  挺身观看: "Stand up and watch",
  真好去堂: "Very good to go to the hall",
  又见那洞门紧闭: "I saw the door closed again",
  静悄悄杳无人迹: "Quietly no one trace",
  忽回头: "Turn around suddenly",
  见崖头立一石牌: "See a stone plaque on the cliff",
  约有三丈馀高: "About three feet high",
  八尺馀阔: "More than eight feet wide",
  上有一行十个大字: "There are ten big characters on it",
  乃是灵台方寸山: "It's Lingtai Fangcun Mountain",
  斜月三星洞: "Three Star Cave of the Slanted Moon",
  美猴王十分欢喜道: "The Monkey King said very happily",
  此间人果是朴实: "This is a simple and simple person",
  果有此山此洞: "There is indeed this mountain and this cave",
  看勾多时: "Watch the check for a long time",
  不敢敲门: "Don't dare knock on the door",
  且去跳上松枝梢头: "Let's jump onto the pine branches",
  摘松子吃了顽耍: "Pick pine nuts and eat them",
  少顷间: "In a few moments",
  只听得呀的一声: "Just a sound",
  洞门开处: "Where the hole door opens",
  里面走出一个仙童: "A fairy child walks out of it",
  真个丰姿英伟: "What a beautiful and handsome",
  像貌清奇: "Very beautiful",
  比寻常俗子不同: "Different from ordinary people",
  那童子出得门来: "That boy came out",
  高叫道: "Screaming",
  甚么人在此搔扰: "Who is troubled here",
  猴王扑的跳下树来: "The Monkey King jumped off the tree",
  上前躬身道: "Go forward and bowed",
  仙童: "Fairy Child",
  我是个访道学仙之弟子:
    "I am a disciple who visits Taoism and learns immortals",
  更不敢在此搔扰: "Don't dare to disturb you here",
  仙童笑道: "The fairy boy smiled",
  你是个访道的么: "Are you a visiting Taoist",
  猴王道: "The Monkey King's Way",
  童子道: "Boy's Word",
  我家师父: "My Master",
  正才下榻: "Just stayed",
  登坛讲道: "Preaching to the altar",
  还未说出原由: "Haven't said the reason yet",
  就教我出来开门: "Just teach me to come out and open the door",
  说: "explain",
  外面有个修行的来了: "There is a practice outside here",
  可去接待接待: "You can go to the reception",
  想必就是你了: "I guess it's you",
  猴王笑道: "The Monkey King smiled",
  是我: "It's me",
  是我: "It's me",
  童子道: "Boy's Word",
  你跟我进来: "Come in with me",
  这猴王整衣端肃: "The Monkey King is dressed in a stern manner",
  随童子径入洞天深处观看: "Follow the boy to see the depths of the cave",
  一层层深阁琼楼: "Deep pavilions and buildings",
  一进进珠宫贝阙: "As soon as you enter the Beacon Palace",
  说不尽那静室幽居: "Can't tell the quiet room",
  直至瑶台之下: "Until the bottom of the Yaotai",
};

const tianwen_translation_map_de = {
  猴王听说: "Der Affenkönig hörte",
  只得相辞: "Muss nein sagen",
  出深林: "Aus dem tiefen Wald",
  找上路径: "Finden Sie den Weg",
  过一山坡: "Einen Hügel überqueren",
  约有七八里远: "Ungefähr sieben oder acht Meilen entfernt",
  果然望见一座洞府: "Sicher genug, ich habe eine Höhle gesehen",
  挺身观看: "Aufstehen und beobachten",
  真好去堂: "Sehr schön in die Halle zu gehen",
  又见那洞门紧闭: "Ich sah die Tür wieder geschlossen",
  静悄悄杳无人迹: "Leise niemand verfolgt",
  忽回头: "Plötzlich umdrehen",
  见崖头立一石牌: "Sehen Sie eine Steinplakette auf der Klippe",
  约有三丈馀高: "Ungefähr drei Fuß hoch",
  八尺馀阔: "Mehr als acht Fuß breit",
  上有一行十个大字: "Es gibt zehn große Charaktere darauf",
  乃是灵台方寸山: "Es ist Lingtai Fangcun Mountain",
  斜月三星洞: "Drei -Sterne -Höhle des schrägen Mondes",
  美猴王十分欢喜道: "Der Affenkönig sagte sehr glücklich",
  此间人果是朴实: "Dies ist eine einfache und einfache Person",
  果有此山此洞: "Da ist dieser Berg und diese Höhle",
  看勾多时: "Beobachten Sie den Scheck lange Zeit",
  不敢敲门: "Wage es nicht, an die Tür zu klopfen",
  且去跳上松枝梢头: "Lassen Sie uns auf die Kiefernzweige springen",
  摘松子吃了顽耍: "Peinkernkerne pflücken und sie essen",
  少顷间: "In wenigen Augenblicken",
  只听得呀的一声: "Nur ein Geräusch",
  洞门开处: "Wo sich die Lochtür öffnet",
  里面走出一个仙童: "Ein Märchenkind geht daraus heraus",
  真个丰姿英伟: "Was für ein schöner und schöner",
  像貌清奇: "Sehr schön",
  比寻常俗子不同: "Anders als gewöhnliche Menschen",
  那童子出得门来: "Dieser Junge kam heraus",
  高叫道: "Schreiend",
  甚么人在此搔扰: "Wer ist hier beunruhigt?",
  猴王扑的跳下树来: "Der Affenkönig sprang vom Baum",
  上前躬身道: "Vorwärts gehen und verneigen",
  仙童: "Märchenkind",
  我是个访道学仙之弟子:
    "Ich bin ein Schüler, der den Taoismus besucht und Unsterbliche lernt",
  更不敢在此搔扰: "Wagen Sie es nicht, Sie hier zu stören",
  仙童笑道: "Der Märchenjunge lächelte",
  你是个访道的么: "Sind Sie ein besuchender Taoisten?",
  猴王道: "Der Weg des Affenkönigs",
  童子道: "Jungen Wort",
  我家师父: "Mein Meister",
  正才下榻: "Ich blieb gerade",
  登坛讲道: "Predigt zum Altar",
  还未说出原由: "Ich habe den Grund noch nicht gesagt",
  就教我出来开门: "Lehre mich einfach, herauszukommen und die Tür zu öffnen",
  说: "erklären",
  外面有个修行的来了: "Hier gibt es eine Praxis draußen",
  可去接待接待: "Sie können zur Rezeption gehen",
  想必就是你了: "Ich denke du bist es, du bist es",
  猴王笑道: "Der Affenkönig lächelte",
  是我: "Da ich bin",
  是我: "Da ich bin",
  童子道: "Jungen Wort",
  你跟我进来: "Komm herein mit mir",
  这猴王整衣端肃: "Der Affenkönig ist streng gekleidet",
  随童子径入洞天深处观看:
    "Folgen Sie dem Jungen, um die Tiefen der Höhle zu sehen",
  一层层深阁琼楼: "Tiefe Pavillons und Gebäude",
  一进进珠宫贝阙: "Sobald Sie den Beacon -Palast betreten",
  说不尽那静室幽居: "Ich kann dem ruhigen Raum nicht erzählen",
  直至瑶台之下: "Bis zum Boden des Yaotai",
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
