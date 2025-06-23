const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `美猴王正喜间
忽对众说道
汝等弓弩熟谙
兵器精通
奈我这口刀着实榔槺
不遂我意
奈何
四老猴上前启奏道
大王乃是仙圣
凡兵是不堪用
但不知大王水里可能去得
悟空道
我自闻道之后
有七十二般地煞变化之功
筋斗云有莫大的神通
善能隐身遁身
起法摄法
上天有路
入地有门
步日月无影
入金石无碍
水不能溺
火不能焚
那些儿去不得
四猴道
大王既有此神通
我们这铁板桥下
水通东海龙宫
大王若肯下去
寻着老龙王
问他要件甚么兵器
却不趁心
悟空闻言甚喜道
等我去来
好猴王
跳至桥头
使一个闭水法
捻着诀
扑的钻入波中
分开水路
径入东洋海底
正行间
忽见一个巡海的夜叉
挡住问道
那推水来的
是何神圣
说个明白
好通报迎接
悟空道
吾乃花果山天生圣人孙悟空
是你老龙王的紧邻
为何不识
那夜叉听说
急转水晶宫传报道
大王
外面有个花果山天生圣人孙悟空
口称是大王紧邻
将到宫也
东海龙王敖广即忙起身
与龙子龙孙虾兵蟹将出宫迎道
上仙请进
请进
直至宫里相见
上坐献茶毕
问道
上仙几时得道
授何仙术
悟空道
我自生身之后
出家修行
得一个无生无灭之体
近因教演儿孙
守护山洞
奈何没件兵器
久闻贤邻享乐瑶宫贝阙
必有多馀神器
特来告求一件
龙王见说
不好推辞
即着鳜都司取出一把大捍刀奉上
悟空道
老孙不会使刀
乞另赐一件
龙王又着鲅大尉
领鳝力士
抬出一捍九股叉来
悟空跳下来
接在手中
使了一路
放下道
轻轻轻
又不趁手
再乞另赐一件
龙王笑道
上仙
你不看看
这叉有三千六百斤重哩
悟空道
不趁手
不趁手
龙王心中恐惧
又着鯾提督鲤总兵抬出一柄画杆方天戟
那戟有七千二百斤重
悟空见了
跑近前接在手中
丢几个架子
撒两个解数
插在中间道
也还轻轻轻
老龙王一发怕道
上仙
我宫中只有这根戟重
再没甚么兵器了
悟空笑道
古人云
愁海龙王没宝哩
你再去寻寻看
若有可意的
一一奉价
龙王道
委的再无`;

const pinyinMap = {
  美: "měi",
  猴: "hóu",
  王: "wáng",
  正: "zhèng",
  喜: "xǐ",
  间: "jiān",
  忽: "hū",
  对: "duì",
  众: "zhòng",
  说: "shuō",
  道: "dào",
  汝: "rǔ",
  等: "děng",
  弓: "gōng",
  弩: "nǔ",
  熟: "shú",
  谙: "ān",
  兵: "bīng",
  器: "qì",
  精: "jīng",
  通: "tōng",
  奈: "nài",
  我: "wǒ",
  这: "zhè",
  口: "kǒu",
  刀: "dāo",
  着: "zhe",
  实: "shí",
  榔: "láng",
  槺: "kāng",
  不: "bù",
  遂: "suí",
  意: "yì",
  何: "hé",
  四: "sì",
  老: "lǎo",
  上: "shàng",
  前: "qián",
  启: "qǐ",
  奏: "zòu",
  大: "dà",
  乃: "nǎi",
  是: "shì",
  仙: "xiān",
  圣: "shèng",
  凡: "fán",
  堪: "kān",
  用: "yòng",
  但: "dàn",
  知: "zhī",
  水: "shuǐ",
  里: "lǐ",
  可: "kě",
  能: "néng",
  去: "qù",
  得: "dé",
  悟: "wù",
  空: "kōng",
  自: "zì",
  闻: "wén",
  之: "zhī",
  后: "hòu",
  有: "yǒu",
  七: "qī",
  十: "shí",
  二: "èr",
  般: "bān",
  地: "dì",
  煞: "shā",
  变: "biàn",
  化: "huà",
  功: "gōng",
  筋: "jīn",
  斗: "dǒu",
  云: "yún",
  莫: "mò",
  的: "de",
  神: "shén",
  善: "shàn",
  隐: "yǐn",
  身: "shēn",
  遁: "dùn",
  起: "qǐ",
  法: "fǎ",
  摄: "shè",
  天: "tiān",
  路: "lù",
  入: "rù",
  门: "mén",
  步: "bù",
  日: "rì",
  月: "yuè",
  无: "wú",
  影: "yǐng",
  金: "jīn",
  石: "shí",
  碍: "ài",
  溺: "nì",
  火: "huǒ",
  焚: "fén",
  那: "nà",
  些: "xiē",
  儿: "ér",
  既: "jì",
  此: "cǐ",
  们: "men",
  铁: "tiě",
  板: "bǎn",
  桥: "qiáo",
  下: "xià",
  东: "dōng",
  海: "hǎi",
  龙: "lóng",
  宫: "gōng",
  若: "ruò",
  肯: "kěn",
  寻: "xún",
  问: "wèn",
  他: "tā",
  要: "yào",
  件: "jiàn",
  甚: "shén",
  么: "me",
  却: "què",
  趁: "chèn",
  心: "xīn",
  言: "yán",
  来: "lái",
  好: "hǎo",
  跳: "tiào",
  至: "zhì",
  头: "tóu",
  使: "shǐ",
  一: "yí",
  个: "gè",
  闭: "bì",
  捻: "niǎn",
  诀: "jué",
  扑: "pū",
  钻: "zuān",
  波: "bō",
  中: "zhōng",
  分: "fēn",
  开: "kāi",
  径: "jìng",
  洋: "yáng",
  底: "dǐ",
  行: "xíng",
  见: "jiàn",
  巡: "xún",
  夜: "yè",
  叉: "chā",
  挡: "dǎng",
  住: "zhù",
  推: "tuī",
  明: "míng",
  白: "bái",
  报: "bào",
  迎: "yíng",
  接: "jiē",
  吾: "wú",
  花: "huā",
  果: "guǒ",
  山: "shān",
  生: "shēng",
  人: "rén",
  孙: "sūn",
  你: "nǐ",
  紧: "jǐn",
  邻: "lín",
  为: "wèi",
  识: "shí",
  听: "tīng",
  急: "jí",
  转: "zhuǎn",
  晶: "jīng",
  传: "chuán",
  外: "wài",
  面: "miàn",
  称: "chēng",
  将: "jiāng",
  到: "dào",
  也: "yě",
  敖: "áo",
  广: "guǎng",
  即: "jí",
  忙: "máng",
  与: "yǔ",
  子: "zi",
  虾: "xiā",
  蟹: "xiè",
  出: "chū",
  请: "qǐng",
  进: "jìn",
  直: "zhí",
  相: "xiāng",
  坐: "zuò",
  献: "xiàn",
  茶: "chá",
  毕: "bì",
  几: "jǐ",
  时: "shí",
  授: "shòu",
  术: "shù",
  家: "jiā",
  修: "xiū",
  灭: "miè",
  体: "tǐ",
  近: "jìn",
  因: "yīn",
  教: "jiào",
  演: "yǎn",
  守: "shǒu",
  护: "hù",
  洞: "dòng",
  没: "méi",
  久: "jiǔ",
  贤: "xián",
  享: "xiǎng",
  乐: "lè",
  瑶: "yáo",
  贝: "bèi",
  阙: "quē",
  必: "bì",
  多: "duō",
  馀: "yú",
  特: "tè",
  告: "gào",
  求: "qiú",
  辞: "cí",
  鳜: "guì",
  都: "dōu",
  司: "sī",
  取: "qǔ",
  把: "bǎ",
  捍: "hàn",
  奉: "fèng",
  会: "huì",
  乞: "qǐ",
  另: "lìng",
  赐: "cì",
  又: "yòu",
  鲅: "bà",
  尉: "wèi",
  领: "lǐng",
  鳝: "shàn",
  力: "lì",
  士: "shì",
  抬: "tái",
  九: "jiǔ",
  股: "gǔ",
  在: "zài",
  手: "shǒu",
  了: "le",
  放: "fàng",
  轻: "qīng",
  再: "zài",
  笑: "xiào",
  看: "kàn",
  三: "sān",
  千: "qiān",
  六: "liù",
  百: "bǎi",
  斤: "jīn",
  重: "zhòng",
  哩: "lī",
  恐: "kǒng",
  惧: "jù",
  鯾: "biān",
  提: "tí",
  督: "dū",
  鲤: "lǐ",
  总: "zǒng",
  柄: "bǐng",
  画: "huà",
  杆: "gān",
  方: "fāng",
  戟: "jǐ",
  跑: "pǎo",
  丢: "diū",
  架: "jià",
  撒: "sā",
  两: "liǎng",
  解: "xiè",
  数: "shù",
  插: "chā",
  还: "hái",
  发: "fā",
  怕: "pà",
  只: "zhǐ",
  根: "gēn",
  古: "gǔ",
  愁: "chóu",
  宝: "bǎo",
  价: "jià",
  委: "wěi",
};

const translations_en = {
  美: "beautiful",
  猴: "monkey",
  王: "king",
  正: "just",
  喜: "happiness",
  间: "between",
  忽: "suddenly",
  对: "right",
  众: "All",
  说: "explain",
  道: "road",
  汝: "You",
  等: "wait",
  弓: "bow",
  弩: "crossbow",
  熟: "Crazy",
  谙: "Aware",
  兵: "Soldier",
  器: "Device",
  精: "Refined",
  通: "Pass",
  奈: "Nye",
  我: "I",
  这: "this",
  口: "mouth",
  刀: "knife",
  着: "Put",
  实: "Reality",
  榔: "palm",
  槺: "南",
  不: "No",
  遂: "So",
  意: "meaning",
  何: "what",
  四: "Four",
  老: "old",
  上: "superior",
  前: "forward",
  启: "start",
  奏: "Play",
  大: "big",
  乃: "So",
  是: "yes",
  仙: "Fairy",
  圣: "Saint",
  凡: "Any",
  堪: "Can",
  用: "use",
  但: "but",
  知: "Know",
  水: "water",
  里: "inside",
  可: "Can",
  能: "able",
  去: "go",
  得: "have to",
  悟: "Enlightenment",
  空: "null",
  自: "since",
  闻: "smell",
  之: "Of",
  后: "back",
  有: "have",
  七: "seven",
  十: "ten",
  二: "two",
  般: "Normal",
  地: "land",
  煞: "Evil",
  变: "Change",
  化: "change",
  功: "achievement",
  筋: "Tendons",
  斗: "fight",
  云: "cloud",
  莫: "Mo",
  的: "of",
  神: "god",
  善: "good",
  隐: "hidden",
  身: "body",
  遁: "escape",
  起: "rise",
  法: "Law",
  摄: "Photo",
  天: "sky",
  路: "road",
  入: "enter",
  门: "Door",
  步: "step",
  日: "day",
  月: "moon",
  无: "none",
  影: "film",
  金: "gold",
  石: "stone",
  碍: "hinder",
  溺: "Drowning",
  火: "fire",
  焚: "burn",
  那: "That",
  些: "some",
  儿: "Son",
  既: "now that",
  此: "this",
  们: "We",
  铁: "iron",
  板: "plate",
  桥: "bridge",
  下: "Down",
  东: "East",
  海: "ocean",
  龙: "dragon",
  宫: "palace",
  若: "like",
  肯: "Ken",
  寻: "Looking for",
  问: "ask",
  他: "he",
  要: "want",
  件: "Parts",
  甚: "very",
  么: "Is it",
  却: "but",
  趁: "take advantage of",
  心: "Heart",
  言: "Word",
  来: "Come",
  好: "good",
  跳: "Jump",
  至: "to",
  头: "head",
  使: "make",
  一: "one",
  个: "indivual",
  闭: "close",
  捻: "twist",
  诀: "Tips",
  扑: "flutter",
  钻: "Diamond",
  波: "Wave",
  中: "middle",
  分: "point",
  开: "open",
  径: "path",
  洋: "foreign",
  底: "end",
  行: "OK",
  见: "See",
  巡: "patrol",
  夜: "night",
  叉: "fork",
  挡: "block",
  住: "live",
  推: "push",
  明: "bright",
  白: "white",
  报: "Report",
  迎: "welcome",
  接: "catch",
  吾: "I",
  花: "flower",
  果: "fruit",
  山: "Mountain",
  生: "born",
  人: "people",
  孙: "Sun",
  你: "you",
  紧: "tight",
  邻: "adjacent",
  为: "for",
  识: "knowledge",
  听: "listen",
  急: "urgent",
  转: "change",
  晶: "crystal",
  传: "pass",
  外: "outside",
  面: "noodle",
  称: "say",
  将: "Will",
  到: "arrive",
  也: "also",
  敖: "Ao",
  广: "wide",
  即: "Right now",
  忙: "busy",
  与: "and",
  子: "son",
  虾: "shrimp",
  蟹: "crab",
  出: "out",
  请: "please",
  进: "Enter",
  直: "straight",
  相: "Mutually",
  坐: "sit",
  献: "offer",
  茶: "Tea",
  毕: "complete",
  几: "Several",
  时: "hour",
  授: "Grant",
  术: "Technique",
  家: "Home",
  修: "build",
  灭: "Extinguish",
  体: "body",
  近: "close",
  因: "because",
  教: "teach",
  演: "play",
  守: "Guard",
  护: "Protection",
  洞: "Hole",
  没: "without",
  久: "Long",
  贤: "Virtue",
  享: "Enjoy",
  乐: "happy",
  瑶: "Yao",
  贝: "cowry",
  阙: "Que",
  必: "must",
  多: "many",
  馀: "Remaining",
  特: "special",
  告: "tell",
  求: "beg",
  辞: "Quotation",
  鳜: "Mandarin",
  都: "All",
  司: "manage",
  取: "Pick",
  把: "Bundle",
  捍: "defend",
  奉: "Feng",
  会: "meeting",
  乞: "beg",
  另: "Other",
  赐: "Give",
  又: "again",
  鲅: "Maple",
  尉: "Wei",
  领: "collar",
  鳝: "Eel",
  力: "force",
  士: "scholar",
  抬: "lift",
  九: "Nine",
  股: "share",
  在: "exist",
  手: "hand",
  了: "It's",
  放: "put",
  轻: "light",
  再: "Again",
  笑: "laugh",
  看: "look",
  三: "three",
  千: "thousand",
  六: "six",
  百: "Hundred",
  斤: "catty",
  重: "Heavy",
  哩: "Li",
  恐: "fear",
  惧: "fear",
  鯾: "Lu",
  提: "carry",
  督: "Supervisor",
  鲤: "carp",
  总: "total",
  柄: "handle",
  画: "painting",
  杆: "Pole",
  方: "square",
  戟: "halberd",
  跑: "run",
  丢: "leave",
  架: "shelf",
  撒: "spread",
  两: "two",
  解: "untie",
  数: "number",
  插: "Insert",
  还: "return",
  发: "hair",
  怕: "Afraid",
  只: "Only",
  根: "root",
  古: "antiquity",
  愁: "worry",
  宝: "precious",
  价: "price",
  委: "Commission",
};

const translations_de = {
  美: "Schön",
  猴: "Affe",
  王: "König",
  正: "Nur",
  喜: "Glück",
  间: "zwischen",
  忽: "plötzlich",
  对: "Rechts",
  众: "Alle",
  说: "erklären",
  道: "Straße",
  汝: "Du",
  等: "Warten",
  弓: "Bogen",
  弩: "Armbrust",
  熟: "Verrückt",
  谙: "Bewusst",
  兵: "Soldat",
  器: "Gerät",
  精: "Raffiniert",
  通: "Passieren",
  奈: "Nye",
  我: "ICH",
  这: "Das",
  口: "Mund",
  刀: "Messer",
  着: "Setzen",
  实: "Wirklichkeit",
  榔: "Palme",
  槺: "南",
  不: "NEIN",
  遂: "Also",
  意: "Bedeutung",
  何: "Was",
  四: "Vier",
  老: "alt",
  上: "Vorgesetzter",
  前: "nach vorne",
  启: "Start",
  奏: "Spielen",
  大: "groß",
  乃: "Also",
  是: "Ja",
  仙: "Fee",
  圣: "Heilige",
  凡: "Beliebig",
  堪: "Kann",
  用: "verwenden",
  但: "Aber",
  知: "Wissen",
  水: "Wasser",
  里: "innen",
  可: "Kann",
  能: "fähig",
  去: "gehen",
  得: "müssen",
  悟: "Aufklärung",
  空: "NULL",
  自: "seit",
  闻: "Geruch",
  之: "Von",
  后: "zurück",
  有: "haben",
  七: "Sieben",
  十: "zehn",
  二: "zwei",
  般: "Normal",
  地: "Land",
  煞: "Teuflisch",
  变: "Ändern",
  化: "ändern",
  功: "Leistung",
  筋: "Sehnen",
  斗: "kämpfen",
  云: "Wolke",
  莫: "MO",
  的: "von",
  神: "Gott",
  善: "Gut",
  隐: "versteckt",
  身: "Körper",
  遁: "Flucht",
  起: "erheben",
  法: "Gesetz",
  摄: "Foto",
  天: "Himmel",
  路: "Straße",
  入: "eingeben",
  门: "Tür",
  步: "Schritt",
  日: "Tag",
  月: "Mond",
  无: "keiner",
  影: "Film",
  金: "Gold",
  石: "Stein",
  碍: "behindern",
  溺: "Ertrinken",
  火: "Feuer",
  焚: "brennen",
  那: "Das",
  些: "manche",
  儿: "Sohn",
  既: "Nun das",
  此: "Das",
  们: "Wir",
  铁: "Eisen",
  板: "Platte",
  桥: "Brücke",
  下: "Runter",
  东: "Ost",
  海: "Ozean",
  龙: "Drachen",
  宫: "Palast",
  若: "wie",
  肯: "Ken",
  寻: "Auf der Suche nach",
  问: "fragen",
  他: "Er",
  要: "wollen",
  件: "Teile",
  甚: "sehr",
  么: "Ist es",
  却: "Aber",
  趁: "in Anspruch nehmen",
  心: "Herz",
  言: "Wort",
  来: "Kommen",
  好: "Gut",
  跳: "Springen",
  至: "Zu",
  头: "Kopf",
  使: "machen",
  一: "eins",
  个: "indival",
  闭: "schließen",
  捻: "Twist",
  诀: "Tipps",
  扑: "flattern",
  钻: "Diamant",
  波: "Welle",
  中: "Mitte",
  分: "Punkt",
  开: "offen",
  径: "Weg",
  洋: "ausländisch",
  底: "Ende",
  行: "OK",
  见: "Sehen",
  巡: "patrouillieren",
  夜: "Nacht",
  叉: "Gabel",
  挡: "Block",
  住: "live",
  推: "drücken",
  明: "hell",
  白: "Weiß",
  报: "Bericht",
  迎: "Willkommen",
  接: "fangen",
  吾: "ICH",
  花: "Blume",
  果: "Obst",
  山: "Berg",
  生: "geboren",
  人: "Menschen",
  孙: "Sonne",
  你: "Du",
  紧: "eng",
  邻: "benachbart",
  为: "für",
  识: "Wissen",
  听: "Hören",
  急: "dringend",
  转: "ändern",
  晶: "Kristall",
  传: "passieren",
  外: "draußen",
  面: "Nudel",
  称: "sagen",
  将: "Wille",
  到: "ankommen",
  也: "Auch",
  敖: "Ao",
  广: "breit",
  即: "Im Augenblick",
  忙: "beschäftigt",
  与: "Und",
  子: "Sohn",
  虾: "Garnele",
  蟹: "Krabbe",
  出: "aus",
  请: "Bitte",
  进: "Eingeben",
  直: "gerade",
  相: "Gegenseitig",
  坐: "sitzen",
  献: "Angebot",
  茶: "Tee",
  毕: "vollständig",
  几: "Mehrere",
  时: "Stunde",
  授: "Gewähren",
  术: "Technik",
  家: "Heim",
  修: "bauen",
  灭: "Löschen",
  体: "Körper",
  近: "schließen",
  因: "Weil",
  教: "unterrichten",
  演: "spielen",
  守: "Bewachen",
  护: "Schutz",
  洞: "Loch",
  没: "ohne",
  久: "Lang",
  贤: "Tugend",
  享: "Genießen",
  乐: "Glücklich",
  瑶: "Yao",
  贝: "Cowry",
  阙: "Que",
  必: "muss",
  多: "viele",
  馀: "Übrig",
  特: "besonders",
  告: "erzählen",
  求: "bitten",
  辞: "Zitat",
  鳜: "Mandarin",
  都: "Alle",
  司: "verwalten",
  取: "Wählen",
  把: "Bündeln",
  捍: "verteidigen",
  奉: "Feng",
  会: "treffen",
  乞: "bitten",
  另: "Andere",
  赐: "Geben",
  又: "wieder",
  鲅: "Ahorn",
  尉: "Wei",
  领: "Kragen",
  鳝: "Aal",
  力: "Gewalt",
  士: "Gelehrte",
  抬: "Aufzug",
  九: "Neun",
  股: "Aktie",
  在: "existieren",
  手: "Hand",
  了: "Es ist",
  放: "setzen",
  轻: "Licht",
  再: "Wieder",
  笑: "lachen",
  看: "sehen",
  三: "drei",
  千: "tausend",
  六: "sechs",
  百: "Hundert",
  斤: "katt",
  重: "Schwer",
  哩: "Li",
  恐: "Furcht",
  惧: "Furcht",
  鯾: "Lu",
  提: "tragen",
  督: "Aufsicht",
  鲤: "Karpfen",
  总: "gesamt",
  柄: "handhaben",
  画: "Malerei",
  杆: "Pole",
  方: "Quadrat",
  戟: "Hellebarde",
  跑: "laufen",
  丢: "verlassen",
  架: "Regal",
  撒: "verbreiten",
  两: "zwei",
  解: "lösen",
  数: "Nummer",
  插: "Einfügen",
  还: "zurückkehren",
  发: "Haar",
  怕: "Besorgt",
  只: "Nur",
  根: "Wurzel",
  古: "Antike",
  愁: "Sorge",
  宝: "wertvoll",
  价: "Preis",
  委: "Kommission",
};

const translations_fr = {
  美: "beau",
  猴: "singe",
  王: "roi",
  正: "juste",
  喜: "bonheur",
  间: "entre",
  忽: "soudainement",
  对: "droite",
  众: "Tous",
  说: "expliquer",
  道: "route",
  汝: "Toi",
  等: "attendez",
  弓: "arc",
  弩: "arbalète",
  熟: "Fou",
  谙: "Conscient",
  兵: "Soldat",
  器: "Appareil",
  精: "Raffiné",
  通: "Passer",
  奈: "Nye",
  我: "je",
  这: "ce",
  口: "bouche",
  刀: "couteau",
  着: "Mettre",
  实: "Réalité",
  榔: "palmier",
  槺: "南",
  不: "Non",
  遂: "Donc",
  意: "signification",
  何: "quoi",
  四: "Quatre",
  老: "vieux",
  上: "supérieur",
  前: "avant",
  启: "commencer",
  奏: "Jouer",
  大: "grand",
  乃: "Donc",
  是: "Oui",
  仙: "Fée",
  圣: "Saint",
  凡: "N'importe lequel",
  堪: "Peut",
  用: "utiliser",
  但: "mais",
  知: "Savoir",
  水: "eau",
  里: "à l'intérieur",
  可: "Peut",
  能: "capable",
  去: "aller",
  得: "devoir",
  悟: "Éclaircissement",
  空: "nul",
  自: "depuis",
  闻: "odeur",
  之: "De",
  后: "dos",
  有: "avoir",
  七: "Sept",
  十: "dix",
  二: "deux",
  般: "Normale",
  地: "atterrir",
  煞: "Mal",
  变: "Changement",
  化: "changement",
  功: "réalisation",
  筋: "Tendons",
  斗: "lutte",
  云: "nuage",
  莫: "MO",
  的: "de",
  神: "Dieu",
  善: "bien",
  隐: "caché",
  身: "corps",
  遁: "s'échapper",
  起: "augmenter",
  法: "Loi",
  摄: "Photo",
  天: "ciel",
  路: "route",
  入: "entrer",
  门: "Porte",
  步: "étape",
  日: "jour",
  月: "lune",
  无: "aucun",
  影: "film",
  金: "or",
  石: "pierre",
  碍: "entraver",
  溺: "Noyade",
  火: "feu",
  焚: "brûler",
  那: "Que",
  些: "quelques",
  儿: "Fils",
  既: "maintenant que",
  此: "ce",
  们: "Nous",
  铁: "fer",
  板: "plaque",
  桥: "pont",
  下: "Vers le bas",
  东: "Est",
  海: "océan",
  龙: "dragon",
  宫: "palais",
  若: "comme",
  肯: "Ken",
  寻: "À la recherche de",
  问: "demander",
  他: "il",
  要: "vouloir",
  件: "Parties",
  甚: "très",
  么: "Est-ce",
  却: "mais",
  趁: "profiter de",
  心: "Cœur",
  言: "Mot",
  来: "Viens",
  好: "bien",
  跳: "Saut",
  至: "à",
  头: "tête",
  使: "faire",
  一: "un",
  个: "autonome",
  闭: "fermer",
  捻: "torsion",
  诀: "Conseils",
  扑: "battement",
  钻: "Diamant",
  波: "Vague",
  中: "milieu",
  分: "indiquer",
  开: "ouvrir",
  径: "chemin",
  洋: "étranger",
  底: "fin",
  行: "D'ACCORD",
  见: "Voir",
  巡: "patrouille",
  夜: "nuit",
  叉: "fourchette",
  挡: "bloc",
  住: "en direct",
  推: "pousser",
  明: "brillant",
  白: "blanc",
  报: "Rapport",
  迎: "accueillir",
  接: "attraper",
  吾: "je",
  花: "fleur",
  果: "fruit",
  山: "Montagne",
  生: "né",
  人: "personnes",
  孙: "Soleil",
  你: "toi",
  紧: "serré",
  邻: "adjacent",
  为: "pour",
  识: "connaissance",
  听: "écouter",
  急: "urgent",
  转: "changement",
  晶: "cristal",
  传: "passer",
  外: "dehors",
  面: "nouille",
  称: "dire",
  将: "Volonté",
  到: "arriver",
  也: "aussi",
  敖: "AO",
  广: "large",
  即: "Tout de suite",
  忙: "occupé",
  与: "et",
  子: "fils",
  虾: "crevette",
  蟹: "crabe",
  出: "dehors",
  请: "s'il te plaît",
  进: "Entrer",
  直: "droit",
  相: "Mutuellement",
  坐: "s'asseoir",
  献: "offre",
  茶: "Thé",
  毕: "complet",
  几: "Plusieurs",
  时: "heure",
  授: "Accorder",
  术: "Technique",
  家: "Maison",
  修: "construire",
  灭: "Éteindre",
  体: "corps",
  近: "fermer",
  因: "parce que",
  教: "enseigner",
  演: "jouer",
  守: "Garde",
  护: "Protection",
  洞: "Trou",
  没: "sans",
  久: "Long",
  贤: "Vertu",
  享: "Apprécier",
  乐: "heureux",
  瑶: "Yao",
  贝: "bouc",
  阙: "Que ce soit",
  必: "doit",
  多: "beaucoup",
  馀: "Restant",
  特: "spécial",
  告: "dire",
  求: "mendier",
  辞: "Citation",
  鳜: "mandarin",
  都: "Tous",
  司: "gérer",
  取: "Prendre",
  把: "Paquet",
  捍: "défendre",
  奉: "Feng",
  会: "réunion",
  乞: "mendier",
  另: "Autre",
  赐: "Donner",
  又: "encore",
  鲅: "Érable",
  尉: "Wei",
  领: "collier",
  鳝: "Anguille",
  力: "forcer",
  士: "savant",
  抬: "ascenseur",
  九: "Neuf",
  股: "partager",
  在: "exister",
  手: "main",
  了: "C'est",
  放: "mettre",
  轻: "lumière",
  再: "Encore",
  笑: "rire",
  看: "regarder",
  三: "trois",
  千: "mille",
  六: "six",
  百: "Cent",
  斤: "méchant",
  重: "Lourd",
  哩: "Li",
  恐: "peur",
  惧: "peur",
  鯾: "Lu",
  提: "porter",
  督: "Superviseur",
  鲤: "carpe",
  总: "total",
  柄: "poignée",
  画: "peinture",
  杆: "Pôle",
  方: "carré",
  戟: "hallebarde",
  跑: "courir",
  丢: "partir",
  架: "étagère",
  撒: "propagé",
  两: "deux",
  解: "délier",
  数: "nombre",
  插: "Insérer",
  还: "retour",
  发: "cheveux",
  怕: "Effrayé",
  只: "Seulement",
  根: "racine",
  古: "antiquité",
  愁: "inquiétude",
  宝: "précieux",
  价: "prix",
  委: "Commission",
};

const tianwen_translation_map_en = {
  美猴王正喜间: "The Monkey King is just happy",
  忽对众说道: "Suddenly, he said to everyone",
  汝等弓弩熟谙: "You are familiar with crossbows",
  兵器精通: "Weapon proficiency",
  奈我这口刀着实榔槺: "But my knife is really good",
  不遂我意: "Not satisfied with my wish",
  奈何: "How",
  四老猴上前启奏道: "The four old monkeys stepped forward to start the speech",
  大王乃是仙圣: "The king is the immortal saint",
  凡兵是不堪用: "All soldiers are useless",
  但不知大王水里可能去得:
    "But I don't know if the king might be able to go to the water",
  悟空道: "Wukong Tao",
  我自闻道之后: "After I heard it",
  有七十二般地煞变化之功:
    "There are seventy-two kinds of changes in Earthly Evils",
  筋斗云有莫大的神通: "Somersault Cloud has great magical powers",
  善能隐身遁身: "Good at hiding",
  起法摄法: "Method of starting a method",
  上天有路: "There is a way to heaven",
  入地有门: "There is a door to enter the ground",
  步日月无影: "The sun and the moon are invisible",
  入金石无碍: "No obstacle to depositing gold and stone",
  水不能溺: "Can't drown in water",
  火不能焚: "Fire cannot be burned",
  那些儿去不得: "Those children can't go",
  四猴道: "Four monkeys",
  大王既有此神通: "The king has this magical power",
  我们这铁板桥下: "Under our iron bridge",
  水通东海龙宫: "Water connects to the Dragon Palace in the East Sea",
  大王若肯下去: "If the king is willing to go down",
  寻着老龙王: "Looking for the old dragon king",
  问他要件甚么兵器: "Ask him what weapons are required",
  却不趁心: "But don't take advantage of the situation",
  悟空闻言甚喜道: "Wukong said happily when he heard this",
  等我去来: "Wait for me to come",
  好猴王: "Good Monkey King",
  跳至桥头: "Jump to the bridge",
  使一个闭水法: "Make a water-closing method",
  捻着诀: "Twisting tips",
  扑的钻入波中: "The thrust into the wave",
  分开水路: "Split waterway",
  径入东洋海底: "Going to the bottom of the East Ocean",
  正行间: "The main line",
  忽见一个巡海的夜叉: "Suddenly I saw a nightclub patrolling the sea",
  挡住问道: "Blocked the question",
  那推水来的: "That pushes water",
  是何神圣: "What sage is it",
  说个明白: "Let it be clear",
  好通报迎接: "Good news welcome",
  悟空道: "Wukong Tao",
  吾乃花果山天生圣人孙悟空:
    "I am the natural saint of Huaguo Mountain, Sun Wukong",
  是你老龙王的紧邻: "It's your old dragon king's close neighbor",
  为何不识: "Why don't you know",
  那夜叉听说: "That Yasha heard",
  急转水晶宫传报道: "Crystal Palace rumored",
  大王: "The King",
  外面有个花果山天生圣人孙悟空:
    "There is a natural saint from Huaguo Mountain outside, Sun Wukong",
  口称是大王紧邻: "He said he was close to the king",
  将到宫也: "Will arrive at the palace",
  东海龙王敖广即忙起身:
    "The Dragon King of the East China Sea Ao Guang immediately stood up",
  与龙子龙孙虾兵蟹将出宫迎道:
    "With Long Zi, Long Sun, shrimp soldiers and crab generals, we will leave the palace to welcome the road",
  上仙请进: "Immortal, please come in",
  请进: "Please enter",
  直至宫里相见: "Until we meet in the palace",
  上坐献茶毕: "After sitting down to offer tea",
  问道: "Asked",
  上仙几时得道: "When will the immortal achieve enlightenment",
  授何仙术: "Teach the magic of immortals",
  悟空道: "Wukong Tao",
  我自生身之后: "After I was born",
  出家修行: "Become a monk and practice",
  得一个无生无灭之体: "Get a body without birth and death",
  近因教演儿孙: "Recently, teaching children and grandchildren",
  守护山洞: "Guarding the cave",
  奈何没件兵器: "But there are no weapons",
  久闻贤邻享乐瑶宫贝阙:
    "I heard that my neighbors enjoy the joy of the Yao Palace Beique",
  必有多馀神器: "There must be extra magical tools",
  特来告求一件: "I'll ask for one",
  龙王见说: "Dragon King's Message",
  不好推辞: "Not easy to refuse",
  即着鳜都司取出一把大捍刀奉上:
    "Immediately, I took out a large defender and served it with me.",
  悟空道: "Wukong Tao",
  老孙不会使刀: "Old Sun can't use a knife",
  乞另赐一件: "Beg for another one",
  龙王又着鲅大尉: "The Dragon King takes the Captain Baek again",
  领鳝力士: "Eel-grabbing",
  抬出一捍九股叉来: "Carry out a defender and nine forks",
  悟空跳下来: "Wukong jumps down",
  接在手中: "Hold it in hand",
  使了一路: "Make a journey",
  放下道: "Let go of the way",
  轻轻轻: "Gently",
  又不趁手: "Not taking advantage of it",
  再乞另赐一件: "Beg for another one",
  龙王笑道: "The Dragon King smiled",
  上仙: "The Immortal",
  你不看看: "You don't look",
  这叉有三千六百斤重哩: "This fork weighs 3,600 pounds",
  悟空道: "Wukong Tao",
  不趁手: "Not taking advantage of it",
  不趁手: "Not taking advantage of it",
  龙王心中恐惧: "The Dragon King's heart is fearful",
  又着鯾提督鲤总兵抬出一柄画杆方天戟:
    "Admiral Li also carried out a painted square halberd",
  那戟有七千二百斤重: "The halberd weighs 7,200 pounds",
  悟空见了: "Wukong saw it",
  跑近前接在手中: "Run closer and take it in your hand",
  丢几个架子: "Lost a few shelves",
  撒两个解数: "Two solutions",
  插在中间道: "Insert in the middle",
  也还轻轻轻: "Also light",
  老龙王一发怕道: "The old dragon king was afraid of it",
  上仙: "The Immortal",
  我宫中只有这根戟重: "The only one in my palace is heavy",
  再没甚么兵器了: "No more weapons",
  悟空笑道: "Wukong said with a smile",
  古人云: "Ancient people",
  愁海龙王没宝哩: "The Dragon King of Sorrow has no treasure",
  你再去寻寻看: "You go and look for it again",
  若有可意的: "If there is something to be desired",
  一一奉价: "Prices one by one",
  龙王道: "Dragon King's Way",
  委的再无: "No more",
};

const tianwen_translation_map_de = {
  美猴王正喜间: "Der Affenkönig ist einfach glücklich",
  忽对众说道: "Plötzlich sagte er zu allen",
  汝等弓弩熟谙: "Sie sind mit Armbrüsten vertraut",
  兵器精通: "Waffenkenntnisse",
  奈我这口刀着实榔槺: "Aber mein Messer ist wirklich gut",
  不遂我意: "Nicht zufrieden mit meinem Wunsch",
  奈何: "Wie",
  四老猴上前启奏道: "Die vier alten Affen traten vor, um die Rede zu beginnen",
  大王乃是仙圣: "Der König ist der unsterbliche Heilige",
  凡兵是不堪用: "Alle Soldaten sind nutzlos",
  但不知大王水里可能去得:
    "Aber ich weiß nicht, ob der König in der Lage sein könnte, ins Wasser zu gehen",
  悟空道: "Wukong Tao",
  我自闻道之后: "Nachdem ich es gehört habe",
  有七十二般地煞变化之功:
    "Es gibt zweiundsiebzig Arten von Veränderungen irdischer Übel",
  筋斗云有莫大的神通: "Somersault Cloud hat große magische Kräfte",
  善能隐身遁身: "Gut zu verstecken",
  起法摄法: "Methode zum Starten einer Methode",
  上天有路: "Es gibt einen Weg in den Himmel",
  入地有门: "Es gibt eine Tür, um den Boden zu betreten",
  步日月无影: "Die Sonne und der Mond sind unsichtbar",
  入金石无碍: "Kein Hindernis für die Ablagerung von Gold und Stein",
  水不能溺: "Kann nicht in Wasser ertrinken",
  火不能焚: "Feuer kann nicht verbrannt werden",
  那些儿去不得: "Diese Kinder können nicht gehen",
  四猴道: "Vier Affen",
  大王既有此神通: "Der König hat diese magische Kraft",
  我们这铁板桥下: "Unter unserer Eisenbrücke",
  水通东海龙宫: "Wasser verbindet sich mit dem Drachenpalast in der Ostsee",
  大王若肯下去: "Wenn der König bereit ist, unterzugehen",
  寻着老龙王: "Auf der Suche nach dem alten Drachenkönig",
  问他要件甚么兵器: "Fragen Sie ihn, welche Waffen erforderlich sind",
  却不趁心: "Aber nutzen Sie die Situation nicht",
  悟空闻言甚喜道: "Sagte Wukong glücklich, als er das hörte",
  等我去来: "Warten Sie, bis ich kommt",
  好猴王: "Guter Affenkönig",
  跳至桥头: "Springen zur Brücke",
  使一个闭水法: "Machen Sie eine Wasserverkleidungsmethode",
  捻着诀: "Tipps verdrehen",
  扑的钻入波中: "Der Schub in die Welle",
  分开水路: "Split Waterway",
  径入东洋海底: "Auf den Boden des Ostzeans gehen",
  正行间: "Die Hauptlinie",
  忽见一个巡海的夜叉:
    "Plötzlich sah ich einen Nachtclub, der das Meer patrouillierte",
  挡住问道: "Blockierte die Frage",
  那推水来的: "Das drückt Wasser",
  是何神圣: "Welcher Salbei ist es?",
  说个明白: "Lass es klar sein",
  好通报迎接: "Gute Nachrichten Willkommen",
  悟空道: "Wukong Tao",
  吾乃花果山天生圣人孙悟空:
    "Ich bin der natürliche Heilige des Huaguo -Berges, Sun Wukong",
  是你老龙王的紧邻: "Es ist der enge Nachbar Ihres alten Drachenkönigs",
  为何不识: "Warum weißt du es nicht?",
  那夜叉听说: "Das hörte Yasha",
  急转水晶宫传报道: "Crystal Palace Gerüchte",
  大王: "Der König",
  外面有个花果山天生圣人孙悟空:
    "Es gibt einen natürlichen Heiligen vom Huaguo -Berg draußen, Sun Wukong",
  口称是大王紧邻: "Er sagte, er sei dem König nahe gewesen",
  将到宫也: "Wird im Palast ankommen",
  东海龙王敖广即忙起身:
    "Der Drachenkönig des Ostchinesischen Meeres Ao Guang stand sofort auf",
  与龙子龙孙虾兵蟹将出宫迎道:
    "Mit langen Zi, langen Sonne, Garnelensoldaten und Krabbengenerälen werden wir den Palast verlassen, um die Straße zu begrüßen",
  上仙请进: "Unsterblich, bitte kommen Sie rein",
  请进: "Bitte geben Sie ein",
  直至宫里相见: "Bis wir uns im Palast treffen",
  上坐献茶毕: "Nach dem Setzen, um Tee anzubieten",
  问道: "Gefragt",
  上仙几时得道: "Wann wird der Unsterbliche Erleuchtung erreichen?",
  授何仙术: "Lehren Sie die Magie der Unsterblichen",
  悟空道: "Wukong Tao",
  我自生身之后: "Nachdem ich geboren wurde",
  出家修行: "Werden Sie Mönch und Übung",
  得一个无生无灭之体: "Holen Sie sich einen Körper ohne Geburt und Tod",
  近因教演儿孙: "Vor kurzem unterrichten Kinder und Enkelkinder",
  守护山洞: "Die Höhle bewachen",
  奈何没件兵器: "Aber es gibt keine Waffen",
  久闻贤邻享乐瑶宫贝阙:
    "Ich hörte, dass meine Nachbarn die Freude des Yao -Palastes Beus genießen",
  必有多馀神器: "Es müssen extra magische Werkzeuge geben",
  特来告求一件: "Ich werde nach einem fragen",
  龙王见说: "Botschaft des Drachenkönigs",
  不好推辞: "Nicht leicht zu verweigern",
  即着鳜都司取出一把大捍刀奉上:
    "Sofort nahm ich einen großen Verteidiger heraus und servierte ihn mit mir.",
  悟空道: "Wukong Tao",
  老孙不会使刀: "Die alte Sonne kann kein Messer benutzen",
  乞另赐一件: "Betteln Sie um einen anderen",
  龙王又着鲅大尉: "Der Drachenkönig nimmt den Kapitän Baek erneut",
  领鳝力士: "Aal-Grabbing",
  抬出一捍九股叉来: "Führen Sie einen Verteidiger und neun Gabeln durch",
  悟空跳下来: "Wukong springt runter",
  接在手中: "Halten Sie es in der Hand",
  使了一路: "Eine Reise machen",
  放下道: "Den Weg loslassen",
  轻轻轻: "Sanft",
  又不趁手: "Nicht ausnutzen",
  再乞另赐一件: "Betteln Sie um einen anderen",
  龙王笑道: "Der Drachenkönig lächelte",
  上仙: "Der Unsterbliche",
  你不看看: "Du schaust nicht aus",
  这叉有三千六百斤重哩: "Diese Gabel wiegt 3.600 Pfund",
  悟空道: "Wukong Tao",
  不趁手: "Nicht ausnutzen",
  不趁手: "Nicht ausnutzen",
  龙王心中恐惧: "Das Herz des Drachenkönigs ist ängstlich",
  又着鯾提督鲤总兵抬出一柄画杆方天戟:
    "Admiral Li führte auch einen bemalten Quadrathellebard durch",
  那戟有七千二百斤重: "Der Halberd wiegt 7.200 Pfund",
  悟空见了: "Wukong sah es",
  跑近前接在手中: "Laufen Sie näher und nehmen Sie es in Ihre Hand",
  丢几个架子: "Verloren ein paar Regale",
  撒两个解数: "Zwei Lösungen",
  插在中间道: "In die Mitte einfügen",
  也还轻轻轻: "Auch Licht",
  老龙王一发怕道: "Der alte Drachenkönig hatte Angst davor",
  上仙: "Der Unsterbliche",
  我宫中只有这根戟重: "Der einzige in meinem Palast ist schwer",
  再没甚么兵器了: "Keine Waffen mehr",
  悟空笑道: "Sagte Wukong mit einem Lächeln",
  古人云: "Antike Menschen",
  愁海龙王没宝哩: "Der Drachenkönig der Trauer hat keinen Schatz",
  你再去寻寻看: "Du gehst und suchst wieder danach",
  若有可意的: "Wenn etwas zu wünschen übrig ist",
  一一奉价: "Preise nacheinander Preise",
  龙王道: "Weg des Drachenkönigs",
  委的再无: "Nicht mehr",
};

const tianwen_translation_map_fr = {
  美猴王正喜间: "Le roi de singe est juste heureux",
  忽对众说道: "Soudain, il a dit à tout le monde",
  汝等弓弩熟谙: "Vous connaissez les arbalètes",
  兵器精通: "Maîtrise de l'arme",
  奈我这口刀着实榔槺: "Mais mon couteau est vraiment bon",
  不遂我意: "Pas satisfait de mon souhait",
  奈何: "Comment",
  四老猴上前启奏道:
    "Les quatre vieux singes se sont avancés pour commencer le discours",
  大王乃是仙圣: "Le roi est le saint immortel",
  凡兵是不堪用: "Tous les soldats sont inutiles",
  但不知大王水里可能去得:
    "Mais je ne sais pas si le roi pourrait aller à l'eau",
  悟空道: "Wukong Tao",
  我自闻道之后: "Après l'avoir entendu",
  有七十二般地煞变化之功:
    "Il y a soixante-douze types de changements dans les maux terrestres",
  筋斗云有莫大的神通: "Somersault Cloud a de grands pouvoirs magiques",
  善能隐身遁身: "Bon à se cacher",
  起法摄法: "Méthode de démarrage d'une méthode",
  上天有路: "Il y a un moyen vers le paradis",
  入地有门: "Il y a une porte pour entrer dans le sol",
  步日月无影: "Le soleil et la lune sont invisibles",
  入金石无碍: "Aucun obstacle au dépôt d'or et de pierre",
  水不能溺: "Ne peut pas se noyer dans l'eau",
  火不能焚: "Le feu ne peut pas être brûlé",
  那些儿去不得: "Ces enfants ne peuvent pas y aller",
  四猴道: "Quatre singes",
  大王既有此神通: "Le roi a ce pouvoir magique",
  我们这铁板桥下: "Sous notre pont de fer",
  水通东海龙宫: "L'eau se connecte au palais du dragon en mer de l'Est",
  大王若肯下去: "Si le roi est prêt à descendre",
  寻着老龙王: "À la recherche du vieux roi dragon",
  问他要件甚么兵器: "Demandez-lui quelles armes sont nécessaires",
  却不趁心: "Mais ne profitez pas de la situation",
  悟空闻言甚喜道: "Wukong a dit joyeusement quand il a entendu ça",
  等我去来: "Attendez que je vienne",
  好猴王: "Bon roi de singe",
  跳至桥头: "Sauter sur le pont",
  使一个闭水法: "Faire une méthode de fermeture d'eau",
  捻着诀: "Conseils de torsion",
  扑的钻入波中: "La poussée dans la vague",
  分开水路: "Voie navigable partagée",
  径入东洋海底: "Aller au fond de l'océan est",
  正行间: "La ligne principale",
  忽见一个巡海的夜叉: "Soudain, j'ai vu une boîte de nuit patrouillant la mer",
  挡住问道: "A bloqué la question",
  那推水来的: "Qui pousse l'eau",
  是何神圣: "Quel sage est-il",
  说个明白: "Que ce soit clair",
  好通报迎接: "Bonne nouvelle bienvenue",
  悟空道: "Wukong Tao",
  吾乃花果山天生圣人孙悟空:
    "Je suis le saint naturel de Huaguo Mountain, Sun Wukong",
  是你老龙王的紧邻: "C'est le voisin proche de votre vieux Dragon King",
  为何不识: "Pourquoi tu ne sais pas",
  那夜叉听说: "Que Yasha a entendu",
  急转水晶宫传报道: "Crystal Palace Snumor",
  大王: "Le roi",
  外面有个花果山天生圣人孙悟空:
    "Il y a un saint naturel de la montagne Huaguo à l'extérieur, Sun Wukong",
  口称是大王紧邻: "Il a dit qu'il était le voisin du roi",
  将到宫也: "Arrivera au palais",
  东海龙王敖广即忙起身:
    "Le roi dragon de la mer de Chine orientale ao Guang s'est immédiatement levé",
  与龙子龙孙虾兵蟹将出宫迎道:
    "Avec le long zi, le long soleil, les soldats de crevettes et les généraux de crabe, nous quitterons le palais pour accueillir la route",
  上仙请进: "Immortel, s'il vous plaît entrez",
  请进: "Veuillez entrer",
  直至宫里相见: "Jusqu'à ce que nous nous rencontrions dans le palais",
  上坐献茶毕: "Après s'être assis pour offrir du thé",
  问道: "Demandé",
  上仙几时得道: "Quand l'immortel atteindra-t-il l'illumination",
  授何仙术: "Enseigner la magie des immortels",
  悟空道: "Wukong Tao",
  我自生身之后: "Après ma naissance",
  出家修行: "Devenir moine et pratiquer",
  得一个无生无灭之体: "Obtenez un corps sans naissance ni mort",
  近因教演儿孙: "Récemment, enseigner aux enfants et petits-enfants",
  守护山洞: "Gardant la grotte",
  奈何没件兵器: "Mais il n'y a pas d'armes",
  久闻贤邻享乐瑶宫贝阙:
    "J'ai entendu dire que mes voisins apprécient la joie du palais Yao Beique",
  必有多馀神器: "Il doit y avoir des outils magiques supplémentaires",
  特来告求一件: "Je vais en demander un",
  龙王见说: "Message de Dragon King",
  不好推辞: "Pas facile à refuser",
  即着鳜都司取出一把大捍刀奉上:
    "Immédiatement, j'ai sorti un grand défenseur et je l'ai servi avec moi.",
  悟空道: "Wukong Tao",
  老孙不会使刀: "Le vieux soleil ne peut pas utiliser un couteau",
  乞另赐一件: "Boule pour un autre",
  龙王又着鲅大尉: "Le roi du dragon reprend le capitaine Baek",
  领鳝力士: "Enrichir les anguilles",
  抬出一捍九股叉来: "Effectuer un défenseur et neuf fourchettes",
  悟空跳下来: "Wukong saute",
  接在手中: "Tentez-le en main",
  使了一路: "Faire un voyage",
  放下道: "Abandonner le chemin",
  轻轻轻: "Doucement",
  又不趁手: "Ne pas en profiter",
  再乞另赐一件: "Boule pour un autre",
  龙王笑道: "Le roi du dragon sourit",
  上仙: "L'immortel",
  你不看看: "Tu ne regarde pas",
  这叉有三千六百斤重哩: "Cette fourche pèse 3 600 livres",
  悟空道: "Wukong Tao",
  不趁手: "Ne pas en profiter",
  不趁手: "Ne pas en profiter",
  龙王心中恐惧: "Le cœur du roi de dragon a peur",
  又着鯾提督鲤总兵抬出一柄画杆方天戟:
    "L'amiral Li a également réalisé un hallebarde carrée peinte",
  那戟有七千二百斤重: "L'hallebarde pèse 7 200 livres",
  悟空见了: "Wukong l'a vu",
  跑近前接在手中: "Courez plus près et prenez-le dans votre main",
  丢几个架子: "Perdu quelques étagères",
  撒两个解数: "Deux solutions",
  插在中间道: "Insérer au milieu",
  也还轻轻轻: "Aussi léger",
  老龙王一发怕道: "Le vieux roi de dragon en avait peur",
  上仙: "L'immortel",
  我宫中只有这根戟重: "Le seul dans mon palais est lourd",
  再没甚么兵器了: "Plus d'armes",
  悟空笑道: "Wukong a dit avec un sourire",
  古人云: "Personnes anciennes",
  愁海龙王没宝哩: "Le roi dragon de la douleur n'a pas de trésor",
  你再去寻寻看: "Tu vas le chercher à nouveau",
  若有可意的: "S'il y a quelque chose à désirer",
  一一奉价: "Prix ​​un par un",
  龙王道: "Dragon King's Way",
  委的再无: "Pas plus",
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
