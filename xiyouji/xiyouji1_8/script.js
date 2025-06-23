const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `见那菩提祖师端坐在台上
两边有三十个小仙侍立台
美猴王一见
倒身下拜
磕头不计其数
口中只道
师父
师父
我弟子志心朝礼
志心朝礼
祖师道
你是那方人氏
且说个乡贯姓名明白
再拜
猴王道
弟子东胜神洲傲来国花果山水帘洞人氏
祖师喝令
赶出去
他本是个撒诈捣虚之徒
那里修甚么道果
猴王慌忙磕头不住道
弟子是老实之言
决无虚诈
祖师道
你既老实
怎么说东胜神洲
那去处到我这里
隔两重大海
一座南赡部洲
如何就得到此
猴王叩头道
弟子飘洋过海
登界游方
有十数个年头
方才访到此处
祖师道
既是逐渐行来的也罢
你姓甚么
猴王又道
我无性
人若骂我
我也不恼
若打我
我也不嗔
只是陪个礼儿就罢了
一生无性
祖师道
不是这个性
你父母原来姓甚么
猴王道
我也无父母
祖师道
既无父母
想是树上生的
猴王道
我虽不是树生
却是石里长的
我只记得花果山上有一块仙石
其年石破
我便生也
祖师闻言
暗喜道
这等说
却是天地生成的
你起来走走我看
猴王纵身跳起
拐呀拐的走了两遍
祖师笑道
你身躯虽是鄙陋
却像个食松果的猢狲
我与你就身上取个姓氏
意思教你姓猢
猢字去了个兽傍
乃是古月
古者
老也
月者
陰也
老陰不能化育
教你姓狲倒好
狲字去了兽傍
乃是个子系
子者
儿男也
系者
婴细也
正合婴儿之本论
教你姓孙罢
猴王听说
满心欢喜
朝上叩头道
今日方知姓也
万望师父慈悲
既然有姓
再乞赐个名字
却好呼唤
祖师道
我门中有十二个字
分派起名到你乃第十辈之小徒矣
猴王道
那十二个字
祖师道
乃广智慧真如性海颖悟圆觉十二字
排到你
正当悟字
与你起个法名叫做孙悟空好么
猴王笑道
自今就叫做孙悟空也
正是
鸿蒙初辟原无姓
打破顽空须悟
毕竟不之向后修些甚么道果
且听下回分解`;

const pinyinMap = {
  见: "jiàn",
  那: "nà",
  菩: "pú",
  提: "tí",
  祖: "zǔ",
  师: "shī",
  端: "duān",
  坐: "zuò",
  在: "zài",
  台: "tái",
  上: "shàng",
  两: "liǎng",
  边: "biān",
  有: "yǒu",
  三: "sān",
  十: "shí",
  个: "gè",
  小: "xiǎo",
  仙: "xiān",
  侍: "shì",
  立: "lì",
  美: "měi",
  猴: "hóu",
  王: "wáng",
  一: "yī",
  倒: "dào",
  身: "shēn",
  下: "xià",
  拜: "bài",
  磕: "kē",
  头: "tóu",
  不: "bù",
  计: "jì",
  其: "qí",
  数: "shù",
  口: "kǒu",
  中: "zhōng",
  只: "zhǐ",
  道: "dào",
  父: "fù",
  我: "wǒ",
  弟: "dì",
  子: "zǐ",
  志: "zhì",
  心: "xīn",
  朝: "cháo",
  礼: "lǐ",
  你: "nǐ",
  是: "shì",
  方: "fāng",
  人: "rén",
  氏: "shì",
  且: "qiě",
  说: "shuō",
  乡: "xiāng",
  贯: "guàn",
  姓: "xìng",
  名: "míng",
  明: "míng",
  白: "bái",
  再: "zài",
  东: "dōng",
  胜: "shèng",
  神: "shén",
  洲: "zhōu",
  傲: "ào",
  来: "lái",
  国: "guó",
  花: "huā",
  果: "guǒ",
  山: "shān",
  水: "shuǐ",
  帘: "lián",
  洞: "dòng",
  喝: "hè",
  令: "lìng",
  赶: "gǎn",
  出: "chū",
  去: "qù",
  他: "tā",
  本: "běn",
  撒: "sā",
  诈: "zhà",
  捣: "dǎo",
  虚: "xū",
  之: "zhī",
  徒: "tú",
  里: "lǐ",
  修: "xiū",
  甚: "shén",
  么: "me",
  慌: "huāng",
  忙: "máng",
  住: "zhù",
  老: "lǎo",
  实: "shí",
  言: "yán",
  决: "jué",
  无: "wú",
  既: "jì",
  怎: "zěn",
  处: "chù",
  到: "dào",
  这: "zhè",
  隔: "gé",
  重: "zhòng",
  大: "dà",
  海: "hǎi",
  座: "zuò",
  南: "nán",
  赡: "shàn",
  部: "bù",
  如: "rú",
  何: "hé",
  就: "jiù",
  得: "dé",
  此: "cǐ",
  叩: "kòu",
  飘: "piāo",
  洋: "yáng",
  过: "guò",
  登: "dēng",
  界: "jiè",
  游: "yóu",
  年: "nián",
  才: "cái",
  访: "fǎng",
  逐: "zhú",
  渐: "jiàn",
  行: "xíng",
  的: "de",
  也: "yě",
  罢: "bà",
  又: "yòu",
  性: "xìng",
  若: "ruò",
  骂: "mà",
  恼: "nǎo",
  打: "dǎ",
  嗔: "chēn",
  陪: "péi",
  儿: "ér",
  了: "le",
  生: "shēng",
  母: "mǔ",
  原: "yuán",
  想: "xiǎng",
  树: "shù",
  虽: "suī",
  却: "què",
  石: "shí",
  长: "zhǎng",
  记: "jì",
  块: "kuài",
  破: "pò",
  便: "biàn",
  闻: "wén",
  暗: "àn",
  喜: "xǐ",
  等: "děng",
  天: "tiān",
  地: "dì",
  成: "chéng",
  起: "qǐ",
  走: "zǒu",
  看: "kàn",
  纵: "zòng",
  跳: "tiào",
  拐: "guǎi",
  呀: "ya",
  遍: "biàn",
  笑: "xiào",
  躯: "qū",
  鄙: "bǐ",
  陋: "lòu",
  像: "xiàng",
  食: "shí",
  松: "sōng",
  猢: "hú",
  狲: "sūn",
  与: "yǔ",
  取: "qǔ",
  意: "yì",
  思: "sī",
  教: "jiào",
  字: "zì",
  兽: "shòu",
  傍: "bàng",
  乃: "nǎi",
  古: "gǔ",
  月: "yuè",
  者: "zhě",
  陰: "yīn",
  能: "néng",
  化: "huà",
  育: "yù",
  好: "hǎo",
  系: "xì",
  男: "nán",
  婴: "yīng",
  细: "xì",
  正: "zhèng",
  合: "hé",
  论: "lùn",
  孙: "sūn",
  听: "tīng",
  满: "mǎn",
  欢: "huān",
  今: "jīn",
  日: "rì",
  知: "zhī",
  万: "wàn",
  望: "wàng",
  慈: "cí",
  悲: "bēi",
  然: "rán",
  乞: "qǐ",
  赐: "cì",
  呼: "hū",
  唤: "huàn",
  门: "mén",
  二: "èr",
  分: "fēn",
  派: "pài",
  第: "dì",
  辈: "bèi",
  矣: "yǐ",
  广: "guǎng",
  智: "zhì",
  慧: "huì",
  真: "zhēn",
  颖: "yǐng",
  悟: "wù",
  圆: "yuán",
  觉: "jué",
  排: "pái",
  当: "dāng",
  法: "fǎ",
  叫: "jiào",
  做: "zuò",
  空: "kōng",
  自: "zì",
  鸿: "hóng",
  蒙: "méng",
  初: "chū",
  辟: "pì",
  顽: "wán",
  须: "xū",
  毕: "bì",
  竟: "jìng",
  向: "xiàng",
  后: "hòu",
  些: "xiē",
  回: "huí",
  解: "jiě",
};

const translations_en = {
  见: "See",
  那: "That",
  菩: "Bodhisattva",
  提: "carry",
  祖: "Ancestor",
  师: "division",
  端: "end",
  坐: "sit",
  在: "exist",
  台: "tower",
  上: "superior",
  两: "two",
  边: "side",
  有: "have",
  三: "three",
  十: "ten",
  个: "indivual",
  小: "Small",
  仙: "Fairy",
  侍: "Sit",
  立: "stand",
  美: "beautiful",
  猴: "monkey",
  王: "king",
  一: "one",
  倒: "fall",
  身: "body",
  下: "Down",
  拜: "bye",
  磕: "knock",
  头: "head",
  不: "No",
  计: "count",
  其: "That",
  数: "number",
  口: "mouth",
  中: "middle",
  只: "Only",
  道: "road",
  父: "father",
  我: "I",
  弟: "younger brother",
  子: "son",
  志: "Chronicle",
  心: "Heart",
  朝: "towards",
  礼: "present",
  你: "you",
  是: "yes",
  方: "square",
  人: "people",
  氏: "英语",
  且: "and",
  说: "explain",
  乡: "Township",
  贯: "Guan",
  姓: "surname",
  名: "name",
  明: "bright",
  白: "white",
  再: "Again",
  东: "East",
  胜: "Win",
  神: "god",
  洲: "Continent",
  傲: "proud",
  来: "Come",
  国: "country",
  花: "flower",
  果: "fruit",
  山: "Mountain",
  水: "water",
  帘: "curtain",
  洞: "Hole",
  喝: "drink",
  令: "make",
  赶: "Hurry up",
  出: "out",
  去: "go",
  他: "he",
  本: "Book",
  撒: "spread",
  诈: "Fraud",
  捣: "Tamper",
  虚: "Void",
  之: "Of",
  徒: "only",
  里: "inside",
  修: "build",
  甚: "very",
  么: "Is it",
  慌: "Panic",
  忙: "busy",
  住: "live",
  老: "old",
  实: "Reality",
  言: "Word",
  决: "Decision",
  无: "none",
  既: "now that",
  怎: "How",
  处: "Where",
  到: "arrive",
  这: "this",
  隔: "Separation",
  重: "Heavy",
  大: "big",
  海: "ocean",
  座: "seat",
  南: "South",
  赡: "support",
  部: "department",
  如: "like",
  何: "what",
  就: "At once",
  得: "have to",
  此: "this",
  叩: "knock",
  飘: "float",
  洋: "foreign",
  过: "Pass",
  登: "Login",
  界: "boundary",
  游: "tour",
  年: "Year",
  才: "talent",
  访: "visit",
  逐: "By",
  渐: "gradually",
  行: "OK",
  的: "of",
  也: "also",
  罢: "stop",
  又: "again",
  性: "sex",
  若: "like",
  骂: "scold",
  恼: "angry",
  打: "beat",
  嗔: "Anger",
  陪: "accompany",
  儿: "Son",
  了: "It's",
  生: "born",
  母: "mother",
  原: "Original",
  想: "think",
  树: "Tree",
  虽: "although",
  却: "but",
  石: "stone",
  长: "long",
  记: "remember",
  块: "piece",
  破: "break",
  便: "Hope",
  闻: "smell",
  暗: "dark",
  喜: "happiness",
  等: "wait",
  天: "sky",
  地: "land",
  成: "become",
  起: "rise",
  走: "Walk",
  看: "look",
  纵: "vertical",
  跳: "Jump",
  拐: "Snee",
  呀: "ah",
  遍: "all over",
  笑: "laugh",
  躯: "Body",
  鄙: "rustic",
  陋: "ugly",
  像: "picture",
  食: "Food",
  松: "loose",
  猢: "Money",
  狲: "可",
  与: "and",
  取: "Pick",
  意: "meaning",
  思: "think",
  教: "teach",
  字: "Character",
  兽: "beast",
  傍: "Beside",
  乃: "So",
  古: "antiquity",
  月: "moon",
  者: "Those",
  陰: "大",
  能: "able",
  化: "change",
  育: "Education",
  好: "good",
  系: "Tie",
  男: "male",
  婴: "infant",
  细: "thin",
  正: "just",
  合: "combine",
  论: "Argument",
  孙: "Sun",
  听: "listen",
  满: "Full",
  欢: "joyous",
  今: "now",
  日: "day",
  知: "Know",
  万: "Ten thousand",
  望: "see",
  慈: "Ci",
  悲: "sad",
  然: "Of course",
  乞: "beg",
  赐: "Give",
  呼: "call",
  唤: "Call",
  门: "Door",
  二: "two",
  分: "point",
  派: "group",
  第: "The",
  辈: "generation",
  矣: "It's OK",
  广: "wide",
  智: "wisdom",
  慧: "Wisdom",
  真: "real",
  颖: "Ying",
  悟: "Enlightenment",
  圆: "round",
  觉: "Sleep",
  排: "Row",
  当: "when",
  法: "Law",
  叫: "Call",
  做: "Do",
  空: "null",
  自: "since",
  鸿: "Hong",
  蒙: "Mongolian",
  初: "early",
  辟: "Detect",
  顽: "stubborn",
  须: "Must",
  毕: "complete",
  竟: "actually",
  向: "Towards",
  后: "back",
  些: "some",
  回: "Back",
  解: "untie",
};

const translations_de = {
  见: "Sehen",
  那: "Das",
  菩: "Bodhisattva",
  提: "tragen",
  祖: "Vorfahr",
  师: "Division",
  端: "Ende",
  坐: "sitzen",
  在: "existieren",
  台: "Turm",
  上: "Vorgesetzter",
  两: "zwei",
  边: "Seite",
  有: "haben",
  三: "drei",
  十: "zehn",
  个: "indival",
  小: "Klein",
  仙: "Fee",
  侍: "Sitzen",
  立: "Stand",
  美: "Schön",
  猴: "Affe",
  王: "König",
  一: "eins",
  倒: "fallen",
  身: "Körper",
  下: "Runter",
  拜: "Tschüss",
  磕: "klopfen",
  头: "Kopf",
  不: "NEIN",
  计: "zählen",
  其: "Das",
  数: "Nummer",
  口: "Mund",
  中: "Mitte",
  只: "Nur",
  道: "Straße",
  父: "Vater",
  我: "ICH",
  弟: "jüngerer Bruder",
  子: "Sohn",
  志: "Chronik",
  心: "Herz",
  朝: "in Richtung",
  礼: "gegenwärtig",
  你: "Du",
  是: "Ja",
  方: "Quadrat",
  人: "Menschen",
  氏: "英语",
  且: "Und",
  说: "erklären",
  乡: "Gemeinde",
  贯: "Guan",
  姓: "Nachname",
  名: "Name",
  明: "hell",
  白: "Weiß",
  再: "Wieder",
  东: "Ost",
  胜: "Gewinnen",
  神: "Gott",
  洲: "Kontinent",
  傲: "stolz",
  来: "Kommen",
  国: "Land",
  花: "Blume",
  果: "Obst",
  山: "Berg",
  水: "Wasser",
  帘: "Vorhang",
  洞: "Loch",
  喝: "trinken",
  令: "machen",
  赶: "Beeil dich",
  出: "aus",
  去: "gehen",
  他: "Er",
  本: "Buch",
  撒: "verbreiten",
  诈: "Betrug",
  捣: "Manipuliert",
  虚: "Leere",
  之: "Von",
  徒: "nur",
  里: "innen",
  修: "bauen",
  甚: "sehr",
  么: "Ist es",
  慌: "Panik",
  忙: "beschäftigt",
  住: "live",
  老: "alt",
  实: "Wirklichkeit",
  言: "Wort",
  决: "Entscheidung",
  无: "keiner",
  既: "Nun das",
  怎: "Wie",
  处: "Wo",
  到: "ankommen",
  这: "Das",
  隔: "Trennung",
  重: "Schwer",
  大: "groß",
  海: "Ozean",
  座: "Sitz",
  南: "Süden",
  赡: "Unterstützung",
  部: "Abteilung",
  如: "wie",
  何: "Was",
  就: "Auf einmal",
  得: "müssen",
  此: "Das",
  叩: "klopfen",
  飘: "schweben",
  洋: "ausländisch",
  过: "Passieren",
  登: "Login",
  界: "Grenze",
  游: "Tour",
  年: "Jahr",
  才: "Talent",
  访: "besuchen",
  逐: "Von",
  渐: "schrittweise",
  行: "OK",
  的: "von",
  也: "Auch",
  罢: "stoppen",
  又: "wieder",
  性: "Sex",
  若: "wie",
  骂: "schimpfen",
  恼: "wütend",
  打: "schlagen",
  嗔: "Wut",
  陪: "begleiten",
  儿: "Sohn",
  了: "Es ist",
  生: "geboren",
  母: "Mutter",
  原: "Original",
  想: "denken",
  树: "Baum",
  虽: "Obwohl",
  却: "Aber",
  石: "Stein",
  长: "lang",
  记: "erinnern",
  块: "Stück",
  破: "brechen",
  便: "Hoffnung",
  闻: "Geruch",
  暗: "dunkel",
  喜: "Glück",
  等: "Warten",
  天: "Himmel",
  地: "Land",
  成: "werden",
  起: "erheben",
  走: "Gehen",
  看: "sehen",
  纵: "Vertikale",
  跳: "Springen",
  拐: "Snee",
  呀: "Ah",
  遍: "Überall",
  笑: "lachen",
  躯: "Körper",
  鄙: "rustikal",
  陋: "hässlich",
  像: "Bild",
  食: "Essen",
  松: "lose",
  猢: "Geld",
  狲: "可",
  与: "Und",
  取: "Wählen",
  意: "Bedeutung",
  思: "denken",
  教: "unterrichten",
  字: "Charakter",
  兽: "Tier",
  傍: "Neben",
  乃: "Also",
  古: "Antike",
  月: "Mond",
  者: "Diese",
  陰: "大",
  能: "fähig",
  化: "ändern",
  育: "Ausbildung",
  好: "Gut",
  系: "Binden",
  男: "männlich",
  婴: "Säugling",
  细: "dünn",
  正: "Nur",
  合: "kombinieren",
  论: "Argument",
  孙: "Sonne",
  听: "Hören",
  满: "Voll",
  欢: "freudig",
  今: "Jetzt",
  日: "Tag",
  知: "Wissen",
  万: "Zehntausend",
  望: "sehen",
  慈: "CI",
  悲: "traurig",
  然: "Natürlich",
  乞: "bitten",
  赐: "Geben",
  呼: "Anruf",
  唤: "Anruf",
  门: "Tür",
  二: "zwei",
  分: "Punkt",
  派: "Gruppe",
  第: "Der",
  辈: "Generation",
  矣: "Es ist in Ordnung",
  广: "breit",
  智: "Weisheit",
  慧: "Weisheit",
  真: "real",
  颖: "Ying",
  悟: "Aufklärung",
  圆: "runden",
  觉: "Schlafen",
  排: "Reihe",
  当: "Wann",
  法: "Gesetz",
  叫: "Anruf",
  做: "Tun",
  空: "NULL",
  自: "seit",
  鸿: "Hong",
  蒙: "mongolisch",
  初: "früh",
  辟: "Erkennen",
  顽: "hartnäckig",
  须: "Muss",
  毕: "vollständig",
  竟: "Genau genommen",
  向: "In Richtung",
  后: "zurück",
  些: "manche",
  回: "Zurück",
  解: "lösen",
};

const translations_fr = {
  见: "Voir",
  那: "Que",
  菩: "Bodhisattva",
  提: "porter",
  祖: "Ancêtre",
  师: "division",
  端: "fin",
  坐: "s'asseoir",
  在: "exister",
  台: "tour",
  上: "supérieur",
  两: "deux",
  边: "côté",
  有: "avoir",
  三: "trois",
  十: "dix",
  个: "autonome",
  小: "Petit",
  仙: "Fée",
  侍: "S'asseoir",
  立: "rester",
  美: "beau",
  猴: "singe",
  王: "roi",
  一: "un",
  倒: "automne",
  身: "corps",
  下: "Vers le bas",
  拜: "au revoir",
  磕: "frappe",
  头: "tête",
  不: "Non",
  计: "compter",
  其: "Que",
  数: "nombre",
  口: "bouche",
  中: "milieu",
  只: "Seulement",
  道: "route",
  父: "père",
  我: "je",
  弟: "jeune frère",
  子: "fils",
  志: "Chronique",
  心: "Cœur",
  朝: "vers",
  礼: "présent",
  你: "toi",
  是: "Oui",
  方: "carré",
  人: "personnes",
  氏: "英语",
  且: "et",
  说: "expliquer",
  乡: "Canton",
  贯: "Guan",
  姓: "nom de famille",
  名: "nom",
  明: "brillant",
  白: "blanc",
  再: "Encore",
  东: "Est",
  胜: "Gagner",
  神: "Dieu",
  洲: "Continent",
  傲: "fier",
  来: "Viens",
  国: "pays",
  花: "fleur",
  果: "fruit",
  山: "Montagne",
  水: "eau",
  帘: "rideau",
  洞: "Trou",
  喝: "boire",
  令: "faire",
  赶: "Dépêche-toi",
  出: "dehors",
  去: "aller",
  他: "il",
  本: "Livre",
  撒: "propagé",
  诈: "Fraude",
  捣: "Altérer",
  虚: "Vide",
  之: "De",
  徒: "seulement",
  里: "à l'intérieur",
  修: "construire",
  甚: "très",
  么: "Est-ce",
  慌: "Panique",
  忙: "occupé",
  住: "en direct",
  老: "vieux",
  实: "Réalité",
  言: "Mot",
  决: "Décision",
  无: "aucun",
  既: "maintenant que",
  怎: "Comment",
  处: "Où",
  到: "arriver",
  这: "ce",
  隔: "Séparation",
  重: "Lourd",
  大: "grand",
  海: "océan",
  座: "siège",
  南: "Sud",
  赡: "soutien",
  部: "département",
  如: "comme",
  何: "quoi",
  就: "Immédiatement",
  得: "devoir",
  此: "ce",
  叩: "frappe",
  飘: "flotter",
  洋: "étranger",
  过: "Passer",
  登: "Se connecter",
  界: "limite",
  游: "tournée",
  年: "Année",
  才: "talent",
  访: "visite",
  逐: "Par",
  渐: "progressivement",
  行: "D'ACCORD",
  的: "de",
  也: "aussi",
  罢: "arrêt",
  又: "encore",
  性: "sexe",
  若: "comme",
  骂: "gronder",
  恼: "en colère",
  打: "battre",
  嗔: "Colère",
  陪: "accompagner",
  儿: "Fils",
  了: "C'est",
  生: "né",
  母: "mère",
  原: "Original",
  想: "pense",
  树: "Arbre",
  虽: "bien que",
  却: "mais",
  石: "pierre",
  长: "long",
  记: "souviens-toi",
  块: "morceau",
  破: "casser",
  便: "Espoir",
  闻: "odeur",
  暗: "sombre",
  喜: "bonheur",
  等: "attendez",
  天: "ciel",
  地: "atterrir",
  成: "devenir",
  起: "augmenter",
  走: "Marcher",
  看: "regarder",
  纵: "verticale",
  跳: "Saut",
  拐: "Énigter",
  呀: "ah",
  遍: "partout",
  笑: "rire",
  躯: "Corps",
  鄙: "rustique",
  陋: "laid",
  像: "image",
  食: "Nourriture",
  松: "lâche",
  猢: "Argent",
  狲: "可",
  与: "et",
  取: "Prendre",
  意: "signification",
  思: "pense",
  教: "enseigner",
  字: "Personnage",
  兽: "bête",
  傍: "À côté de",
  乃: "Donc",
  古: "antiquité",
  月: "lune",
  者: "Ceux",
  陰: "大",
  能: "capable",
  化: "changement",
  育: "Éducation",
  好: "bien",
  系: "Cravate",
  男: "mâle",
  婴: "nourrisson",
  细: "mince",
  正: "juste",
  合: "combiner",
  论: "Argument",
  孙: "Soleil",
  听: "écouter",
  满: "Complet",
  欢: "joyeux",
  今: "maintenant",
  日: "jour",
  知: "Savoir",
  万: "Dix mille",
  望: "voir",
  慈: "CI",
  悲: "triste",
  然: "Bien sûr",
  乞: "mendier",
  赐: "Donner",
  呼: "appel",
  唤: "Appel",
  门: "Porte",
  二: "deux",
  分: "indiquer",
  派: "groupe",
  第: "Le",
  辈: "génération",
  矣: "C'est bon",
  广: "large",
  智: "sagesse",
  慧: "Sagesse",
  真: "réel",
  颖: "Ying",
  悟: "Éclaircissement",
  圆: "rond",
  觉: "Dormir",
  排: "Rangée",
  当: "quand",
  法: "Loi",
  叫: "Appel",
  做: "Faire",
  空: "nul",
  自: "depuis",
  鸿: "Hong",
  蒙: "mongol",
  初: "tôt",
  辟: "Détecter",
  顽: "têtu",
  须: "Doit",
  毕: "complet",
  竟: "en fait",
  向: "Vers",
  后: "dos",
  些: "quelques",
  回: "Dos",
  解: "délier",
};

const tianwen_translation_map_en = {
  见那菩提祖师端坐在台上:
    "Seeing that Bodhi Patriarch sits upright on the stage",
  两边有三十个小仙侍立台: "There are thirty little fairy stands on both sides",
  美猴王一见: "The Monkey King saw it",
  倒身下拜: "Lean down to worship",
  磕头不计其数: "Kowtows in countless ways",
  口中只道: "Just say",
  师父: "Master",
  师父: "Master",
  我弟子志心朝礼: "My disciples are determined to pay homage",
  志心朝礼: "Aspiration and courtesy",
  祖师道: "The Patriarch's Way",
  你是那方人氏: "Which family are you",
  且说个乡贯姓名明白: "Let's talk about the name of the village",
  再拜: "Bye again",
  猴王道: "The Monkey King's Way",
  弟子东胜神洲傲来国花果山水帘洞人氏:
    "Disciple Dongsheng Shenzhou Aolai Kingdom Huaguo Mountain Shuilian Cave",
  祖师喝令: "The ancestor shouted",
  赶出去: "Drive out",
  他本是个撒诈捣虚之徒: "He was a lie",
  那里修甚么道果: "What kind of fruits are there to cultivate?",
  猴王慌忙磕头不住道: "The Monkey King hurriedly kowtowed and said",
  弟子是老实之言: "Disciples are honest",
  决无虚诈: "Nothing false",
  祖师道: "The Patriarch's Way",
  你既老实: "You're honest",
  怎么说东胜神洲: "How to say Dongsheng Shenzhou",
  那去处到我这里: "That's my place",
  隔两重大海: "Two big seas",
  一座南赡部洲: "A southern continent",
  如何就得到此: "How to get this",
  猴王叩头道: "The Monkey King kowtowed",
  弟子飘洋过海: "Disciples cross the ocean",
  登界游方: "Travelling around the world",
  有十数个年头: "It's been more than ten years",
  方才访到此处: "Visited here just now",
  祖师道: "The Patriarch's Way",
  既是逐渐行来的也罢: "It's not just that it's coming gradually",
  你姓甚么: "What's your last name",
  猴王又道: "The Monkey King said again",
  我无性: "I'm sexually",
  人若骂我: "If someone scolds me",
  我也不恼: "I'm not annoyed either",
  若打我: "If you hit me",
  我也不嗔: "I'm not angry either",
  只是陪个礼儿就罢了: "Just a gift",
  一生无性: "Life without sex",
  祖师道: "The Patriarch's Way",
  不是这个性: "Not this sex",
  你父母原来姓甚么: "What's your parents' surname",
  猴王道: "The Monkey King's Way",
  我也无父母: "I have no parents, either",
  祖师道: "The Patriarch's Way",
  既无父母: "Neither parents",
  想是树上生的: "I think it was born on a tree",
  猴王道: "The Monkey King's Way",
  我虽不是树生: "Although I'm not a tree",
  却是石里长的: "But it's grown in the stone",
  我只记得花果山上有一块仙石:
    "I only remember there is a fairy stone on Huaguo Mountain.",
  其年石破: "The stones were broken in the year",
  我便生也: "I'll give birth",
  祖师闻言: "The ancestor heard",
  暗喜道: "Secretly happy",
  这等说: "That's what",
  却是天地生成的: "But it is created by heaven and earth",
  你起来走走我看: "Get up and let me see",
  猴王纵身跳起: "The Monkey King jumps up",
  拐呀拐的走了两遍: "I've walked twice",
  祖师笑道: "The ancestor smiled",
  你身躯虽是鄙陋: "Although your body is ugly",
  却像个食松果的猢狲: "But it's like a pine cone-eating money",
  我与你就身上取个姓氏: "I will take a surname on you",
  意思教你姓猢: "I mean to teach you the surname Money",
  猢字去了个兽傍: 'The word "生" went to a beast',
  乃是古月: "It's the ancient moon",
  古者: "Ancient",
  老也: "Old",
  月者: "Moon",
  陰也: "Yes",
  老陰不能化育: "Old people cannot be cultivated",
  教你姓狲倒好: "It would be better to teach you the last name",
  狲字去了兽傍: 'The word "吉" left the beast',
  乃是个子系: "It's a family",
  子者: "Son",
  儿男也: "Men, too",
  系者: "Detective",
  婴细也: "Baby too",
  正合婴儿之本论: "The theory of the baby",
  教你姓孙罢: "Let's teach you the surname Sun",
  猴王听说: "The Monkey King heard",
  满心欢喜: "Full of joy",
  朝上叩头道: "Kowtow upwards",
  今日方知姓也: "Today I know my surname",
  万望师父慈悲: "Hope Master mercy",
  既然有姓: "Since you have a surname",
  再乞赐个名字: "Please give me another name",
  却好呼唤: "But it's easy to call",
  祖师道: "The Patriarch's Way",
  我门中有十二个字: "There are twelve words in my door",
  分派起名到你乃第十辈之小徒矣: "You are the tenth generation of disciple",
  猴王道: "The Monkey King's Way",
  那十二个字: "Those twelve words",
  祖师道: "The Patriarch's Way",
  乃广智慧真如性海颖悟圆觉十二字:
    "It is the twelve words of wisdom, true nature, sea Ying's enlightenment, perfect enlightenment",
  排到你: "Ranked you",
  正当悟字: "Right to understand",
  与你起个法名叫做孙悟空好么:
    "Is it okay to give you a Dharma name called Sun Wukong?",
  猴王笑道: "The Monkey King smiled",
  自今就叫做孙悟空也: "From now on, he is also called Sun Wukong",
  正是: "It's exactly",
  鸿蒙初辟原无姓: "Hongmeng Chu Piyuan's surname",
  打破顽空须悟: "Break the stubborn emptiness and be enlightened",
  毕竟不之向后修些甚么道果:
    "After all, what kind of Taoist fruit should you cultivate backwards?",
  且听下回分解: "Let's hear the next breakdown",
};

const tianwen_translation_map_de = {
  见那菩提祖师端坐在台上:
    "Zu sehen, dass der Bodhi -Patriarch auf der Bühne aufrecht steht",
  两边有三十个小仙侍立台: "Auf beiden Seiten gibt es dreißig kleine Feenstände",
  美猴王一见: "Der Affenkönig sah es",
  倒身下拜: "Lehnen Sie sich nach unten, um anzubeten",
  磕头不计其数: "Kowtows auf unzählige Weise",
  口中只道: "Sag einfach",
  师父: "Master",
  师父: "Master",
  我弟子志心朝礼: "Meine Jünger sind entschlossen, eine Hommage abzugeben",
  志心朝礼: "Aspiration und Höflichkeit",
  祖师道: "Der Weg des Patriarchen",
  你是那方人氏: "Welche Familie bist du?",
  且说个乡贯姓名明白: "Sprechen wir über den Namen des Dorfes",
  再拜: "Tschüss wieder",
  猴王道: "Der Weg des Affenkönigs",
  弟子东胜神洲傲来国花果山水帘洞人氏:
    "Schüler Dongsheng Shenzhou Aolai Königreich Huaguo Berg Shuilian Höhle",
  祖师喝令: "Rief der Vorfahr",
  赶出去: "Vertreiben",
  他本是个撒诈捣虚之徒: "Er war eine Lüge",
  那里修甚么道果: "Welche Art von Früchten gibt es zu kultivieren?",
  猴王慌忙磕头不住道: "Der Affenkönig kowptowed und sagte eilig und sagte",
  弟子是老实之言: "Jünger sind ehrlich",
  决无虚诈: "Nichts Falsches",
  祖师道: "Der Weg des Patriarchen",
  你既老实: "Du bist ehrlich",
  怎么说东胜神洲: "Wie man Dongsheng Shenzhou sagt",
  那去处到我这里: "Das ist mein Platz",
  隔两重大海: "Zwei große Meere",
  一座南赡部洲: "Ein südlicher Kontinent",
  如何就得到此: "Wie man das bekommt",
  猴王叩头道: "Der Affenkönig kowtowte",
  弟子飘洋过海: "Jünger überqueren den Ozean",
  登界游方: "Um die Welt reisen",
  有十数个年头: "Es ist mehr als zehn Jahre her",
  方才访到此处: "Gerade jetzt hier besucht",
  祖师道: "Der Weg des Patriarchen",
  既是逐渐行来的也罢: "Es ist nicht nur so, dass es allmählich kommt",
  你姓甚么: "Was ist dein Nachname?",
  猴王又道: "Sagte der Affenkönig erneut",
  我无性: "Ich bin sexuell",
  人若骂我: "Wenn mich jemand schimpft",
  我也不恼: "Ich bin auch nicht verärgert",
  若打我: "Wenn du mich geschlagen hast",
  我也不嗔: "Ich bin auch nicht böse",
  只是陪个礼儿就罢了: "Nur ein Geschenk",
  一生无性: "Ein Leben ohne Sex",
  祖师道: "Der Weg des Patriarchen",
  不是这个性: "Nicht dieser Geschlecht",
  你父母原来姓甚么: "Was ist der Nachname deiner Eltern?",
  猴王道: "Der Weg des Affenkönigs",
  我也无父母: "Ich habe auch keine Eltern",
  祖师道: "Der Weg des Patriarchen",
  既无父母: "Weder Eltern",
  想是树上生的: "Ich denke, es wurde auf einem Baum geboren",
  猴王道: "Der Weg des Affenkönigs",
  我虽不是树生: "Obwohl ich kein Baum bin",
  却是石里长的: "Aber es ist im Stein gewachsen",
  我只记得花果山上有一块仙石:
    "Ich erinnere mich nur, dass es auf dem Berg Huaguo einen Märchenstein gibt.",
  其年石破: "Die Steine ​​wurden im Jahr gebrochen",
  我便生也: "Ich werde geboren",
  祖师闻言: "Der Vorfahr hörte",
  暗喜道: "Heimlich glücklich",
  这等说: "Das ist was",
  却是天地生成的: "Aber es wird durch Himmel und Erde geschaffen",
  你起来走走我看: "Steh auf und lass mich sehen",
  猴王纵身跳起: "Der Affenkönig springt auf",
  拐呀拐的走了两遍: "Ich bin zweimal gelaufen",
  祖师笑道: "Der Vorfahr lächelte",
  你身躯虽是鄙陋: "Obwohl dein Körper hässlich ist",
  却像个食松果的猢狲: "Aber es ist wie ein Kiefernkegelfressgeld",
  我与你就身上取个姓氏: "Ich werde einen Nachnamen auf dich nehmen",
  意思教你姓猢: "Ich möchte Ihnen das Nachname -Geld beibringen",
  猢字去了个兽傍: 'Das Wort "生" ging zu einem Tier',
  乃是古月: "Es ist der alte Mond",
  古者: "Uralt",
  老也: "Alt",
  月者: "Mond",
  陰也: "Ja",
  老陰不能化育: "Alte Menschen können nicht kultiviert werden",
  教你姓狲倒好: "Es wäre besser, Ihnen den Nachnamen beizubringen",
  狲字去了兽傍: 'Das Wort "吉" verließ das Tier',
  乃是个子系: "Es ist eine Familie",
  子者: "Sohn",
  儿男也: "Männer auch",
  系者: "Detektiv",
  婴细也: "Baby auch",
  正合婴儿之本论: "Die Theorie des Babys",
  教你姓孙罢: "Lassen Sie uns Ihnen die Nachname -Sonne beibringen",
  猴王听说: "Der Affenkönig hörte",
  满心欢喜: "Voller Freude",
  朝上叩头道: "Kowtow nach oben",
  今日方知姓也: "Heute kenne ich meinen Nachnamen",
  万望师父慈悲: "Hoffnung Meister Barmherzigkeit",
  既然有姓: "Da haben Sie einen Nachnamen",
  再乞赐个名字: "Bitte geben Sie mir einen anderen Namen",
  却好呼唤: "Aber es ist leicht anzurufen",
  祖师道: "Der Weg des Patriarchen",
  我门中有十二个字: "Es gibt zwölf Wörter in meiner Tür",
  分派起名到你乃第十辈之小徒矣: "Sie sind die zehnte Generation des Schülers",
  猴王道: "Der Weg des Affenkönigs",
  那十二个字: "Diese zwölf Wörter",
  祖师道: "Der Weg des Patriarchen",
  乃广智慧真如性海颖悟圆觉十二字:
    "Es sind die zwölf Wörter der Weisheit, der wahren Natur, der Erleuchtung von Sea Yings, perfekte Erleuchtung",
  排到你: "Sie haben Sie eingestuft",
  正当悟字: "Recht zu verstehen",
  与你起个法名叫做孙悟空好么:
    "Ist es in Ordnung, Ihnen einen Dharma -Namen namens Sun Wukong zu geben?",
  猴王笑道: "Der Affenkönig lächelte",
  自今就叫做孙悟空也: "Von nun an heißt er auch Sun Wukong",
  正是: "Genau",
  鸿蒙初辟原无姓: "Hongmeng Chu Piyuans Nachname",
  打破顽空须悟: "Brechen Sie die hartnäckige Leere und seien Sie erleuchtet",
  毕竟不之向后修些甚么道果:
    "Welche Art von taoistischen Früchten sollten Sie schließlich rückwärts kultivieren?",
  且听下回分解: "Lassen Sie uns den nächsten Zusammenbruch hören",
};

const tianwen_translation_map_fr = {
  见那菩提祖师端坐在台上:
    "Voir que le patriarche de Bodhi est debout sur la scène",
  两边有三十个小仙侍立台: "Il y a trente petits stands de fées des deux côtés",
  美猴王一见: "Le roi de singe l'a vu",
  倒身下拜: "Se pencher pour adorer",
  磕头不计其数: "Kowtows de d'innombrables manières",
  口中只道: "Juste dire",
  师父: "Maître",
  师父: "Maître",
  我弟子志心朝礼: "Mes disciples sont déterminés à rendre hommage",
  志心朝礼: "Aspiration et courtoisie",
  祖师道: "La voie du patriarche",
  你是那方人氏: "Quelle famille êtes-vous",
  且说个乡贯姓名明白: "Parlons du nom du village",
  再拜: "Au revoir",
  猴王道: "Le chemin du roi du singe",
  弟子东胜神洲傲来国花果山水帘洞人氏:
    "Disciple Dongsheng Shenzhou Aolai Kingdom Huaguo Mountain Shuilian Cave",
  祖师喝令: "L'ancêtre a crié",
  赶出去: "Chasser",
  他本是个撒诈捣虚之徒: "Il était un mensonge",
  那里修甚么道果: "Quel genre de fruits y a-t-il à cultiver?",
  猴王慌忙磕头不住道: "Le roi de singe se précipita à la hâte et a dit",
  弟子是老实之言: "Les disciples sont honnêtes",
  决无虚诈: "Rien de faux",
  祖师道: "La voie du patriarche",
  你既老实: "Tu es honnête",
  怎么说东胜神洲: "Comment dire Dongsheng Shenzhou",
  那去处到我这里: "C'est ma place",
  隔两重大海: "Deux grandes mers",
  一座南赡部洲: "Un continent sud",
  如何就得到此: "Comment obtenir ça",
  猴王叩头道: "Le roi de singe se fait kowtowed",
  弟子飘洋过海: "Les disciples traversent l'océan",
  登界游方: "Voyager à travers le monde",
  有十数个年头: "Ça fait plus de dix ans",
  方才访到此处: "Visité ici tout à l'heure",
  祖师道: "La voie du patriarche",
  既是逐渐行来的也罢: "Ce n'est pas seulement que ça arrive progressivement",
  你姓甚么: "Quel est votre nom de famille",
  猴王又道: "Le roi de singe a dit à nouveau",
  我无性: "Je suis sexuellement",
  人若骂我: "Si quelqu'un me gronde",
  我也不恼: "Je ne suis pas ennuyé non plus",
  若打我: "Si tu m'as frappé",
  我也不嗔: "Je ne suis pas en colère non plus",
  只是陪个礼儿就罢了: "Juste un cadeau",
  一生无性: "La vie sans sexe",
  祖师道: "La voie du patriarche",
  不是这个性: "Pas ce sexe",
  你父母原来姓甚么: "Quel est le nom de famille de tes parents",
  猴王道: "Le chemin du roi du singe",
  我也无父母: "Je n'ai pas de parents non plus",
  祖师道: "La voie du patriarche",
  既无父母: "Ni les parents",
  想是树上生的: "Je pense que c'est né sur un arbre",
  猴王道: "Le chemin du roi du singe",
  我虽不是树生: "Bien que je ne sois pas un arbre",
  却是石里长的: "Mais c'est grandi dans la pierre",
  我只记得花果山上有一块仙石:
    "Je me souviens seulement qu'il y a une pierre de fée sur la montagne Huaguo.",
  其年石破: "Les pierres ont été brisées dans l'année",
  我便生也: "Je vais donner naissance",
  祖师闻言: "L'ancêtre a entendu",
  暗喜道: "Secrètement heureux",
  这等说: "C'est quoi",
  却是天地生成的: "Mais il est créé par le ciel et la terre",
  你起来走走我看: "Se lever et laisser-moi voir",
  猴王纵身跳起: "Le roi de singe saute",
  拐呀拐的走了两遍: "J'ai marché deux fois",
  祖师笑道: "L'ancêtre sourit",
  你身躯虽是鄙陋: "Bien que votre corps soit moche",
  却像个食松果的猢狲: "Mais c'est comme un argent de pignons",
  我与你就身上取个姓氏: "Je vais prendre un nom de famille",
  意思教你姓猢: "Je veux t'enseigner l'argent du nom de famille",
  猢字去了个兽傍: 'Le mot "生" est allé à une bête',
  乃是古月: "C'est la lune ancienne",
  古者: "Ancien",
  老也: "Vieux",
  月者: "Lune",
  陰也: "Oui",
  老陰不能化育: "Les personnes âgées ne peuvent pas être cultivées",
  教你姓狲倒好: "Il serait préférable de vous apprendre le nom de famille",
  狲字去了兽傍: 'Le mot "吉" a quitté la bête',
  乃是个子系: "C'est une famille",
  子者: "Fils",
  儿男也: "Hommes aussi",
  系者: "Détective",
  婴细也: "Bébé aussi",
  正合婴儿之本论: "La théorie du bébé",
  教你姓孙罢: "T'apprendons le nom de famille",
  猴王听说: "Le roi de singe a entendu",
  满心欢喜: "Plein de joie",
  朝上叩头道: "Kowtow vers le haut",
  今日方知姓也: "Aujourd'hui je connais mon nom de famille",
  万望师父慈悲: "Hope Master Mercy",
  既然有姓: "Depuis que vous avez un nom de famille",
  再乞赐个名字: "S'il vous plaît donnez-moi un autre nom",
  却好呼唤: "Mais c'est facile d'appeler",
  祖师道: "La voie du patriarche",
  我门中有十二个字: "Il y a douze mots dans ma porte",
  分派起名到你乃第十辈之小徒矣: "Vous êtes la dixième génération de disciple",
  猴王道: "Le chemin du roi du singe",
  那十二个字: "Ces douze mots",
  祖师道: "La voie du patriarche",
  乃广智慧真如性海颖悟圆觉十二字:
    "Ce sont les douze mots de sagesse, la vraie nature, l'illumination de Sea Ying, l'illumination parfaite",
  排到你: "Vous a classé",
  正当悟字: "Droit de comprendre",
  与你起个法名叫做孙悟空好么:
    "Est-il acceptable de vous donner un nom de Dharma appelé Sun Wukong?",
  猴王笑道: "Le roi du singe sourit",
  自今就叫做孙悟空也: "À partir de maintenant, il est aussi appelé Sun Wukong",
  正是: "C'est exactement",
  鸿蒙初辟原无姓: "Le nom de famille de Hongmeng Chu Piyuan",
  打破顽空须悟: "Briser le vide obstiné et être éclairé",
  毕竟不之向后修些甚么道果:
    "Après tout, quel genre de fruits taoïstes devriez-vous cultiver à l'envers?",
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
