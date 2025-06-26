const translationCard = document.getElementById("translationCard");
// 诗歌文本
const poemText = `石猴喜不自胜
急怞身往外便走
复瞑目蹲身
跳出水外
打了两个呵呵道
大造化
大造化
众猴把他围住
问道
里面怎么样
水有多深
石猴道
没水
没水
原来是一座铁板桥
桥那边是一座天造地设的家当
众猴道
怎见得是个家当
石猴笑道
这股水乃是桥下冲贯石桥
倒挂下来遮闭门户的
桥边有花有树
乃是一座石房
房内有石窝
石灶
石碗
石盆
石床
石凳
中间一块石碣上
镌着花果山福地
水帘洞洞天
真个是我们安身之处
里面且是宽阔
容得千百口老小
我们都进去住也
省得受老天之气
众猴听得
个个欢喜
都道
你还先走
带我们进去
进去
石猴却又瞑目蹲身
往里一跳
叫道
都随我进来
进来
那些猴有胆大的
都跳进去了
胆小的
一个个伸头缩颈
抓耳挠腮
大声叫喊
缠一会
也都进去了
跳过桥头
一个个抢盆夺碗
占灶争床
搬过来
移过去
正是猴性顽劣
再无一个宁时
只搬得力倦神疲方止
石猿端坐上面道
列位呵
人而无信
不知其可
你们才说有本事进得来
出得去
不伤身体者
就拜他为王
我如今进来又出去
出去又进来
寻了这一个洞天与列位安眠稳睡
各享成家之福
何不拜我为王
众猴听说
即拱伏无违
一个个序齿排班
朝上礼拜
都称千岁大王
自此
石猴高登王位
将石字儿隐了
遂称美猴王
历代人人皆属此
称王称圣任纵横
美猴王领一群猿猴
猕猴
马猴等
分派了君臣佐使
朝游花果山
暮宿水帘洞
合契同情
不入飞鸟之丛
不从走兽之类
独自为王
不胜欢乐`;
// 翻译数据 (示例)

const pinyinMap = {
  石: "shí",
  猴: "hóu",
  喜: "xǐ",
  不: "bù",
  自: "zì",
  胜: "shèng",
  急: "jí",
  怞: "chóu",
  身: "shēn",
  往: "wǎng",
  外: "wài",
  便: "biàn",
  走: "zǒu",
  复: "fù",
  瞑: "míng",
  目: "mù",
  蹲: "dūn",
  跳: "tiào",
  出: "chū",
  水: "shuǐ",
  打: "dǎ",
  了: "le",
  两: "liǎng",
  个: "gè",
  呵: "hē",
  道: "dào",
  大: "dà",
  造: "zào",
  化: "huà",
  众: "zhòng",
  把: "bǎ",
  他: "tā",
  围: "wéi",
  住: "zhù",
  问: "wèn",
  里: "lǐ",
  面: "miàn",
  怎: "zěn",
  么: "me",
  样: "yàng",
  有: "yǒu",
  多: "duō",
  深: "shēn",
  没: "méi",
  原: "yuán",
  来: "lái",
  是: "shì",
  一: "yī",
  座: "zuò",
  铁: "tiě",
  板: "bǎn",
  桥: "qiáo",
  那: "nà",
  边: "biān",
  天: "tiān",
  地: "dì",
  设: "shè",
  的: "de",
  家: "jiā",
  当: "dàng",
  见: "jiàn",
  得: "de",
  笑: "xiào",
  这: "zhè",
  股: "gǔ",
  乃: "nǎi",
  下: "xià",
  冲: "chōng",
  贯: "guàn",
  倒: "dào",
  挂: "guà",
  遮: "zhē",
  闭: "bì",
  门: "mén",
  户: "hù",
  花: "huā",
  树: "shù",
  房: "fáng",
  内: "nèi",
  窝: "wō",
  灶: "zào",
  碗: "wǎn",
  盆: "pén",
  床: "chuáng",
  凳: "dèng",
  中: "zhōng",
  间: "jiān",
  块: "kuài",
  碣: "jié",
  上: "shàng",
  镌: "juān",
  着: "zhe",
  果: "guǒ",
  山: "shān",
  福: "fú",
  帘: "lián",
  洞: "dòng",
  真: "zhēn",
  我: "wǒ",
  们: "men",
  安: "ān",
  之: "zhī",
  处: "chù",
  且: "qiě",
  宽: "kuān",
  阔: "kuò",
  容: "róng",
  千: "qiān",
  百: "bǎi",
  口: "kǒu",
  老: "lǎo",
  小: "xiǎo",
  都: "dōu",
  进: "jìn",
  去: "qù",
  也: "yě",
  省: "shěng",
  受: "shòu",
  气: "qì",
  听: "tīng",
  欢: "huān",
  你: "nǐ",
  还: "hái",
  先: "xiān",
  带: "dài",
  却: "què",
  又: "yòu",
  叫: "jiào",
  随: "suí",
  些: "xiē",
  胆: "dǎn",
  伸: "shēn",
  头: "tóu",
  缩: "suō",
  颈: "jǐng",
  抓: "zhuā",
  耳: "ěr",
  挠: "náo",
  腮: "sāi",
  声: "shēng",
  喊: "hǎn",
  缠: "chán",
  会: "huì",
  过: "guò",
  抢: "qiǎng",
  夺: "duó",
  占: "zhàn",
  争: "zhēng",
  搬: "bān",
  移: "yí",
  正: "zhèng",
  性: "xìng",
  顽: "wán",
  劣: "liè",
  再: "zài",
  无: "wú",
  宁: "nìng",
  时: "shí",
  只: "zhǐ",
  力: "lì",
  倦: "juàn",
  神: "shén",
  疲: "pí",
  方: "fāng",
  止: "zhǐ",
  猿: "yuán",
  端: "duān",
  坐: "zuò",
  列: "liè",
  位: "wèi",
  人: "rén",
  而: "ér",
  信: "xìn",
  知: "zhī",
  其: "qí",
  可: "kě",
  才: "cái",
  说: "shuō",
  本: "běn",
  事: "shì",
  伤: "shāng",
  体: "tǐ",
  者: "zhě",
  就: "jiù",
  拜: "bài",
  为: "wèi",
  王: "wáng",
  如: "rú",
  今: "jīn",
  寻: "xún",
  与: "yǔ",
  眠: "mián",
  稳: "wěn",
  睡: "shuì",
  各: "gè",
  享: "xiǎng",
  成: "chéng",
  何: "hé",
  即: "jí",
  拱: "gǒng",
  伏: "fú",
  违: "wéi",
  序: "xù",
  齿: "chǐ",
  排: "pái",
  班: "bān",
  朝: "cháo",
  礼: "lǐ",
  称: "chēng",
  岁: "suì",
  此: "cǐ",
  高: "gāo",
  登: "dēng",
  将: "jiāng",
  字: "zì",
  儿: "ér",
  隐: "yǐn",
  遂: "suì",
  美: "měi",
  历: "lì",
  代: "dài",
  皆: "jiē",
  属: "shǔ",
  圣: "shèng",
  任: "rèn",
  纵: "zòng",
  横: "héng",
  领: "lǐng",
  群: "qún",
  猕: "mí",
  马: "mǎ",
  等: "děng",
  分: "fēn",
  派: "pài",
  君: "jūn",
  臣: "chén",
  佐: "zuǒ",
  使: "shǐ",
  游: "yóu",
  暮: "mù",
  宿: "sù",
  合: "hé",
  契: "qì",
  同: "tóng",
  情: "qíng",
  入: "rù",
  飞: "fēi",
  鸟: "niǎo",
  丛: "cóng",
  从: "cóng",
  兽: "shòu",
  类: "lèi",
  独: "dú",
  乐: "lè",
};


const translations_de = {
  石: "Stein",
  猴: "Affe",
  喜: "Glück",
  不: "NEIN",
  自: "seit",
  胜: "Gewinnen",
  急: "dringend",
  怞: "Entschuldigung",
  身: "Körper",
  往: "Vergangenheit",
  外: "draußen",
  便: "Hoffnung",
  走: "Gehen",
  复: "Komplex",
  瞑: "Schließen Sie die Augen",
  目: "Bedeutung",
  蹲: "hocken",
  跳: "Springen",
  出: "aus",
  水: "Wasser",
  打: "schlagen",
  了: "Es ist",
  两: "zwei",
  个: "indival",
  呵: "Oh",
  道: "Straße",
  大: "groß",
  造: "machen",
  化: "ändern",
  众: "Alle",
  把: "Bündeln",
  他: "Er",
  围: "Umgeben",
  住: "live",
  问: "fragen",
  里: "innen",
  面: "Nudel",
  怎: "Wie",
  么: "Ist es",
  样: "Probe",
  有: "haben",
  多: "viele",
  深: "tief",
  没: "ohne",
  原: "Original",
  来: "Kommen",
  是: "Ja",
  一: "eins",
  座: "Sitz",
  铁: "Eisen",
  板: "Platte",
  桥: "Brücke",
  那: "Das",
  边: "Seite",
  天: "Himmel",
  地: "Land",
  设: "aufstellen",
  的: "von",
  家: "Heim",
  当: "Wann",
  见: "Sehen",
  得: "müssen",
  笑: "lachen",
  这: "Das",
  股: "Aktie",
  乃: "Also",
  下: "Runter",
  冲: "eilen",
  贯: "Guan",
  倒: "fallen",
  挂: "aufhängen",
  遮: "Abdeckung",
  闭: "schließen",
  门: "Tür",
  户: "Haushalt",
  花: "Blume",
  树: "Baum",
  房: "Haus",
  内: "Innen",
  窝: "Nest",
  灶: "Küche",
  碗: "Schüssel",
  盆: "Pot",
  床: "Bett",
  凳: "Hocker",
  中: "Mitte",
  间: "zwischen",
  块: "Stück",
  碣: "Steintafel",
  上: "Vorgesetzter",
  镌: "gravieren",
  着: "Setzen",
  果: "Obst",
  山: "Berg",
  福: "Segen",
  帘: "Vorhang",
  洞: "Loch",
  真: "real",
  我: "ICH",
  们: "Wir",
  安: "installieren",
  之: "Von",
  处: "Wo",
  且: "Und",
  宽: "Breite",
  阔: "breit",
  容: "Erlauben",
  千: "tausend",
  百: "Hundert",
  口: "Mund",
  老: "alt",
  小: "Klein",
  都: "Alle",
  进: "Eingeben",
  去: "gehen",
  也: "Auch",
  省: "Provinz",
  受: "von",
  气: "Gas",
  听: "Hören",
  欢: "freudig",
  你: "Du",
  还: "zurückkehren",
  先: "Erste",
  带: "bringen",
  却: "Aber",
  又: "wieder",
  叫: "Anruf",
  随: "Mit",
  些: "manche",
  胆: "Deutlich",
  伸: "strecken",
  头: "Kopf",
  缩: "Schrumpfen",
  颈: "Nacken",
  抓: "Fassen",
  耳: "Ohr",
  挠: "kratzen",
  腮: "Wange",
  声: "Stimme",
  喊: "Anruf",
  缠: "Verwickeln",
  会: "treffen",
  过: "Passieren",
  抢: "Rauben",
  夺: "Nimm es",
  占: "besetzen",
  争: "Kämpfen",
  搬: "bewegen",
  移: "Schicht",
  正: "Nur",
  性: "Sex",
  顽: "hartnäckig",
  劣: "minderwertig",
  再: "Wieder",
  无: "keiner",
  宁: "eher",
  时: "Stunde",
  只: "Nur",
  力: "Gewalt",
  倦: "müde",
  神: "Gott",
  疲: "müde",
  方: "Quadrat",
  止: "Ende",
  猿: "Affe",
  端: "Ende",
  坐: "sitzen",
  列: "Liste",
  位: "Bisschen",
  人: "Menschen",
  而: "Und",
  信: "Brief",
  知: "Wissen",
  其: "Das",
  可: "Kann",
  才: "Talent",
  说: "erklären",
  本: "Buch",
  事: "Ding",
  伤: "verletzt",
  体: "Körper",
  者: "Diese",
  就: "Auf einmal",
  拜: "Tschüss",
  为: "für",
  王: "König",
  如: "wie",
  今: "Jetzt",
  寻: "Auf der Suche nach",
  与: "Und",
  眠: "schlafen",
  稳: "stabil",
  睡: "schlafen",
  各: "jede",
  享: "Genießen",
  成: "werden",
  何: "Was",
  即: "Im Augenblick",
  拱: "Bogen",
  伏: "Fu",
  违: "Verstoß",
  序: "Sequenz",
  齿: "Zahn",
  排: "Reihe",
  班: "Klasse",
  朝: "in Richtung",
  礼: "gegenwärtig",
  称: "sagen",
  岁: "Alter",
  此: "Das",
  高: "hoch",
  登: "Login",
  将: "Wille",
  字: "Charakter",
  儿: "Sohn",
  隐: "versteckt",
  遂: "Also",
  美: "Schön",
  历: "Kalender",
  代: "Generation",
  皆: "alle",
  属: "Generisches",
  圣: "Heilige",
  任: "ernennen",
  纵: "Vertikale",
  横: "horizontal",
  领: "Kragen",
  群: "Gruppe",
  猕: "Makaken",
  马: "Pferd",
  等: "Warten",
  分: "Punkt",
  派: "Gruppe",
  君: "Jun",
  臣: "Minister",
  佐: "博",
  使: "machen",
  游: "Tour",
  暮: "Dämmerung",
  宿: "Bleiben",
  合: "kombinieren",
  契: "Tat",
  同: "Dasselbe",
  情: "Zuneigung",
  入: "eingeben",
  飞: "fliegen",
  鸟: "Vogel",
  丛: "Hinweis",
  从: "aus",
  兽: "Tier",
  类: "Art",
  独: "allein",
  乐: "Glücklich",
};


const translations_fr = {
  石: "pierre",
  猴: "singe",
  喜: "bonheur",
  不: "Non",
  自: "depuis",
  胜: "Gagner",
  急: "urgent",
  怞: "Désolé",
  身: "corps",
  往: "Passé",
  外: "dehors",
  便: "Espoir",
  走: "Marcher",
  复: "complexe",
  瞑: "fermer les yeux",
  目: "Signification",
  蹲: "squatter",
  跳: "Saut",
  出: "dehors",
  水: "eau",
  打: "battre",
  了: "C'est",
  两: "deux",
  个: "autonome",
  呵: "Oh",
  道: "route",
  大: "grand",
  造: "faire",
  化: "changement",
  众: "Tous",
  把: "Paquet",
  他: "il",
  围: "Environnant",
  住: "en direct",
  问: "demander",
  里: "à l'intérieur",
  面: "nouille",
  怎: "Comment",
  么: "Est-ce",
  样: "Échantillon",
  有: "avoir",
  多: "beaucoup",
  深: "profond",
  没: "sans",
  原: "Original",
  来: "Viens",
  是: "Oui",
  一: "un",
  座: "siège",
  铁: "fer",
  板: "plaque",
  桥: "pont",
  那: "Que",
  边: "côté",
  天: "ciel",
  地: "atterrir",
  设: "installation",
  的: "de",
  家: "Maison",
  当: "quand",
  见: "Voir",
  得: "devoir",
  笑: "rire",
  这: "ce",
  股: "partager",
  乃: "Donc",
  下: "Vers le bas",
  冲: "se précipiter",
  贯: "Guan",
  倒: "automne",
  挂: "accrocher",
  遮: "couverture",
  闭: "fermer",
  门: "Porte",
  户: "ménage",
  花: "fleur",
  树: "Arbre",
  房: "maison",
  内: "À l'intérieur",
  窝: "nid",
  灶: "cuisine",
  碗: "bol",
  盆: "pot",
  床: "lit",
  凳: "tabouret",
  中: "milieu",
  间: "entre",
  块: "morceau",
  碣: "comprimé de pierre",
  上: "supérieur",
  镌: "graver",
  着: "Mettre",
  果: "fruit",
  山: "Montagne",
  福: "bénédiction",
  帘: "rideau",
  洞: "Trou",
  真: "réel",
  我: "je",
  们: "Nous",
  安: "installer",
  之: "De",
  处: "Où",
  且: "et",
  宽: "Largeur",
  阔: "large",
  容: "Permettre",
  千: "mille",
  百: "Cent",
  口: "bouche",
  老: "vieux",
  小: "Petit",
  都: "Tous",
  进: "Entrer",
  去: "aller",
  也: "aussi",
  省: "Province",
  受: "par",
  气: "gaz",
  听: "écouter",
  欢: "joyeux",
  你: "toi",
  还: "retour",
  先: "D'abord",
  带: "apporter",
  却: "mais",
  又: "encore",
  叫: "Appel",
  随: "Avec",
  些: "quelques",
  胆: "Audacieux",
  伸: "extensible",
  头: "tête",
  缩: "Rétrécir",
  颈: "cou",
  抓: "Saisir",
  耳: "Oreille",
  挠: "gratter",
  腮: "joue",
  声: "Voix",
  喊: "appel",
  缠: "Emmêler",
  会: "réunion",
  过: "Passer",
  抢: "Voler",
  夺: "Prendre",
  占: "occuper",
  争: "Combattre",
  搬: "se déplacer",
  移: "changement",
  正: "juste",
  性: "sexe",
  顽: "têtu",
  劣: "inférieur",
  再: "Encore",
  无: "aucun",
  宁: "plutôt",
  时: "heure",
  只: "Seulement",
  力: "forcer",
  倦: "fatigué",
  神: "Dieu",
  疲: "fatigué",
  方: "carré",
  止: "fin",
  猿: "singe",
  端: "fin",
  坐: "s'asseoir",
  列: "Liste",
  位: "Peu",
  人: "personnes",
  而: "et",
  信: "lettre",
  知: "Savoir",
  其: "Que",
  可: "Peut",
  才: "talent",
  说: "expliquer",
  本: "Livre",
  事: "chose",
  伤: "blesser",
  体: "corps",
  者: "Ceux",
  就: "Immédiatement",
  拜: "au revoir",
  为: "pour",
  王: "roi",
  如: "comme",
  今: "maintenant",
  寻: "À la recherche de",
  与: "et",
  眠: "dormir",
  稳: "écurie",
  睡: "dormir",
  各: "chaque",
  享: "Apprécier",
  成: "devenir",
  何: "quoi",
  即: "Tout de suite",
  拱: "cambre",
  伏: "Fu",
  违: "Violation",
  序: "séquence",
  齿: "dent",
  排: "Rangée",
  班: "classe",
  朝: "vers",
  礼: "présent",
  称: "dire",
  岁: "âge",
  此: "ce",
  高: "haut",
  登: "Se connecter",
  将: "Volonté",
  字: "Personnage",
  儿: "Fils",
  隐: "caché",
  遂: "Donc",
  美: "beau",
  历: "calendrier",
  代: "génération",
  皆: "tous",
  属: "Générique",
  圣: "Saint",
  任: "nommer",
  纵: "verticale",
  横: "horizontal",
  领: "collier",
  群: "groupe",
  猕: "macaque",
  马: "cheval",
  等: "attendez",
  分: "indiquer",
  派: "groupe",
  君: "Juin",
  臣: "ministre",
  佐: "博",
  使: "faire",
  游: "tournée",
  暮: "crépuscule",
  宿: "Rester",
  合: "combiner",
  契: "Acte",
  同: "même",
  情: "Affection",
  入: "entrer",
  飞: "voler",
  鸟: "oiseau",
  丛: "Indice",
  从: "depuis",
  兽: "bête",
  类: "gentil",
  独: "seul",
  乐: "heureux",
};


const translations_en = {
  石: "stone",
  猴: "monkey",
  喜: "happiness",
  不: "No",
  自: "since",
  胜: "Win",
  急: "urgent",
  怞: "Sorry",
  身: "body",
  往: "Past",
  外: "outside",
  便: "Hope",
  走: "Walk",
  复: "complex",
  瞑: "close the eyes",
  目: "Meaning",
  蹲: "squat",
  跳: "Jump",
  出: "out",
  水: "water",
  打: "beat",
  了: "It's",
  两: "two",
  个: "indivual",
  呵: "Oh",
  道: "road",
  大: "big",
  造: "make",
  化: "change",
  众: "All",
  把: "Bundle",
  他: "he",
  围: "Surrounding",
  住: "live",
  问: "ask",
  里: "inside",
  面: "noodle",
  怎: "How",
  么: "Is it",
  样: "Sample",
  有: "have",
  多: "many",
  深: "deep",
  没: "without",
  原: "Original",
  来: "Come",
  是: "yes",
  一: "one",
  座: "seat",
  铁: "iron",
  板: "plate",
  桥: "bridge",
  那: "That",
  边: "side",
  天: "sky",
  地: "land",
  设: "set up",
  的: "of",
  家: "Home",
  当: "when",
  见: "See",
  得: "have to",
  笑: "laugh",
  这: "this",
  股: "share",
  乃: "So",
  下: "Down",
  冲: "rush",
  贯: "Guan",
  倒: "fall",
  挂: "hang",
  遮: "cover",
  闭: "close",
  门: "Door",
  户: "household",
  花: "flower",
  树: "Tree",
  房: "house",
  内: "Inside",
  窝: "nest",
  灶: "kitchen",
  碗: "bowl",
  盆: "pot",
  床: "bed",
  凳: "stool",
  中: "middle",
  间: "between",
  块: "piece",
  碣: "stone tablet",
  上: "superior",
  镌: "engrave",
  着: "Put",
  果: "fruit",
  山: "Mountain",
  福: "blessing",
  帘: "curtain",
  洞: "Hole",
  真: "real",
  我: "I",
  们: "We",
  安: "install",
  之: "Of",
  处: "Where",
  且: "and",
  宽: "Width",
  阔: "wide",
  容: "Allow",
  千: "thousand",
  百: "Hundred",
  口: "mouth",
  老: "old",
  小: "Small",
  都: "All",
  进: "Enter",
  去: "go",
  也: "also",
  省: "Province",
  受: "by",
  气: "gas",
  听: "listen",
  欢: "joyous",
  你: "you",
  还: "return",
  先: "First",
  带: "bring",
  却: "but",
  又: "again",
  叫: "Call",
  随: "With",
  些: "some",
  胆: "Bold",
  伸: "stretch",
  头: "head",
  缩: "Shrink",
  颈: "neck",
  抓: "Grasp",
  耳: "Ear",
  挠: "scratch",
  腮: "cheek",
  声: "Voice",
  喊: "call",
  缠: "Entangle",
  会: "meeting",
  过: "Pass",
  抢: "Rob",
  夺: "Take it",
  占: "occupy",
  争: "Contend",
  搬: "move",
  移: "shift",
  正: "just",
  性: "sex",
  顽: "stubborn",
  劣: "inferior",
  再: "Again",
  无: "none",
  宁: "rather",
  时: "hour",
  只: "Only",
  力: "force",
  倦: "tired",
  神: "god",
  疲: "tired",
  方: "square",
  止: "end",
  猿: "ape",
  端: "end",
  坐: "sit",
  列: "List",
  位: "Bit",
  人: "people",
  而: "and",
  信: "letter",
  知: "Know",
  其: "That",
  可: "Can",
  才: "talent",
  说: "explain",
  本: "Book",
  事: "thing",
  伤: "hurt",
  体: "body",
  者: "Those",
  就: "At once",
  拜: "bye",
  为: "for",
  王: "king",
  如: "like",
  今: "now",
  寻: "Looking for",
  与: "and",
  眠: "sleep",
  稳: "stable",
  睡: "sleep",
  各: "each",
  享: "Enjoy",
  成: "become",
  何: "what",
  即: "Right now",
  拱: "arch",
  伏: "Fu",
  违: "Violation",
  序: "sequence",
  齿: "tooth",
  排: "Row",
  班: "class",
  朝: "towards",
  礼: "present",
  称: "say",
  岁: "age",
  此: "this",
  高: "high",
  登: "Login",
  将: "Will",
  字: "Character",
  儿: "Son",
  隐: "hidden",
  遂: "So",
  美: "beautiful",
  历: "calendar",
  代: "generation",
  皆: "all",
  属: "Generic",
  圣: "Saint",
  任: "appoint",
  纵: "vertical",
  横: "horizontal",
  领: "collar",
  群: "group",
  猕: "macaque",
  马: "horse",
  等: "wait",
  分: "point",
  派: "group",
  君: "Jun",
  臣: "minister",
  佐: "博",
  使: "make",
  游: "tour",
  暮: "twilight",
  宿: "Stay",
  合: "combine",
  契: "Deed",
  同: "same",
  情: "Affection",
  入: "enter",
  飞: "fly",
  鸟: "bird",
  丛: "Clue",
  从: "from",
  兽: "beast",
  类: "kind",
  独: "alone",
  乐: "happy",
};



const tianwen_translation_map_fr = {
  石猴喜不自胜: "Le singe de pierre est ravi",
  急怞身往外便走: "Sortir rapidement",
  复瞑目蹲身: "Repose en paix et squat",
  跳出水外: "Sauter de l'eau",
  打了两个呵呵道: "Hehehe, hehe",
  大造化: "Grande fortune",
  大造化: "Grande fortune",
  众猴把他围住: "Les singes l'entouraient",
  问道: "Demandé",
  里面怎么样: "Comment est-ce à l'intérieur",
  水有多深: "Quelle est la profondeur de l'eau",
  石猴道: "Singe en pierre",
  没水: "Pas d'eau",
  没水: "Pas d'eau",
  原来是一座铁板桥: "Il s'est avéré être un pont de fer",
  桥那边是一座天造地设的家当:
    "De l'autre côté du pont se trouve une maison faite de paradis et de terre",
  众猴道: "Les singes",
  怎见得是个家当: "Comment peut-il être une famille",
  石猴笑道: "Le singe de pierre sourit",
  这股水乃是桥下冲贯石桥:
    "Ce flux d'eau est le pont qui pénètre sur le pont de pierre",
  倒挂下来遮闭门户的: "Accrochez-vous pour couvrir la porte",
  桥边有花有树: "Il y a des fleurs et des arbres près du pont",
  乃是一座石房: "C'est une maison en pierre",
  房内有石窝: "Il y a un nid de pierre dans la pièce",
  石灶: "Poêle en pierre",
  石碗: "Bol en pierre",
  石盆: "Bassin de pierre",
  石床: "Lit de pierre",
  石凳: "Banc de pierre",
  中间一块石碣上: "Sur une tablette en pierre au milieu",
  镌着花果山福地: "Gravé de la terre de bénédiction des fleurs et des fruits",
  水帘洞洞天: "Ciel de cave à rideaux d'eau",
  真个是我们安身之处: "C'est vraiment là où nous restons",
  里面且是宽阔: "C'est large à l'intérieur",
  容得千百口老小: "Évitez des milliers de jeunes",
  我们都进去住也: "Nous sommes tous entrés et sommes restés",
  省得受老天之气: "Sauver la peine de Dieu",
  众猴听得: "Les singes peuvent l'entendre",
  个个欢喜: "Tout le monde est heureux",
  都道: "Tous",
  你还先走: "Tu partiras en premier",
  带我们进去: "Nous prendre",
  进去: "Entrer",
  石猴却又瞑目蹲身: "Le singe de pierre s'accroupissa dans ses yeux fermés",
  往里一跳: "Sauter",
  叫道: "Appel",
  都随我进来: "Viens avec moi",
  进来: "Entrez",
  那些猴有胆大的: "Ces singes sont audacieux",
  都跳进去了: "Tout a sauté",
  胆小的: "Le timide",
  一个个伸头缩颈: "Un par un, étirez votre tête et votre cou",
  抓耳挠腮: "Prenez vos oreilles et vos joues",
  大声叫喊: "Crier fort",
  缠一会: "Ranger pendant un moment",
  也都进去了: "Tout est entré aussi",
  跳过桥头: "Sauter par-dessus le pont",
  一个个抢盆夺碗: "Arracher le bassin et le bol un par un",
  占灶争床: "Se battre pour le lit avec poêle",
  搬过来: "Bouger ici",
  移过去: "Se déplacer",
  正是猴性顽劣: "C'est l'entêtement du singe",
  再无一个宁时: "Plus de temps paisible",
  只搬得力倦神疲方止:
    "Seulement lorsque vous vous déplacez dur et fatigué, vous vous arrêterez",
  石猿端坐上面道: "Le singe en pierre se trouve debout et dit",
  列位呵: "Tout le monde",
  人而无信: "Personnes sans confiance",
  不知其可: "Je ne sais pas ce qui est possible",
  你们才说有本事进得来: "Vous avez dit que vous pouviez venir avec la capacité",
  出得去: "Peut sortir",
  不伤身体者: "Ceux qui ne font pas de mal à leur corps",
  就拜他为王: "Adorez-le comme roi",
  我如今进来又出去: "Je vais maintenant",
  出去又进来: "Sortir et revenir",
  寻了这一个洞天与列位安眠稳睡:
    "Après avoir trouvé cette grotte, je dormirai paisiblement avec tout le monde",
  各享成家之福: "Tout le monde aime la bénédiction de se marier",
  何不拜我为王: "Pourquoi ne pas m'adorer comme roi",
  众猴听说: "Tous les singes entendus",
  即拱伏无违: "C'est-à-dire aucune violation",
  一个个序齿排班: "Séquence et séquence",
  朝上礼拜: "Culte la semaine dernière",
  都称千岁大王: "Ils sont tous appelés le roi des mille ans",
  自此: "Depuis lors",
  石猴高登王位: "Le singe de pierre monte sur le trône",
  将石字儿隐了: 'Le mot "pierre" est caché',
  遂称美猴王: "Par conséquent connu comme le roi de singe",
  历代人人皆属此: "Tout le monde dans l'histoire appartient à cela",
  称王称圣任纵横: "Devenir le roi et le saint",
  美猴王领一群猿猴: "Monkey King dirige un groupe de singes",
  猕猴: "Macaque",
  马猴等: "Monkey de cheval, etc.",
  分派了君臣佐使: "Affecté monarque, ministre et envoyé adjoint",
  朝游花果山: "Tour Huaguo Mountain",
  暮宿水帘洞: "La grotte du rideau d'eau",
  合契同情: "Compatibilité et sympathie",
  不入飞鸟之丛: "Ne pas entrer dans le buisson d'oiseaux",
  不从走兽之类: "Ne suivez pas la bête ou quelque chose comme ça",
  独自为王: "Soyez seul",
  不胜欢乐: "Joie inégalée",
};

const tianwen_translation_map_de = {
  石猴喜不自胜: "Der Steinaffen ist überglücklich",
  急怞身往外便走: "Gehe schnell aus",
  复瞑目蹲身: "Ruhe in Frieden und Hocke",
  跳出水外: "Aus dem Wasser springen",
  打了两个呵呵道: "Hehehe, hehe",
  大造化: "Tolles Vermögen",
  大造化: "Tolles Vermögen",
  众猴把他围住: "Affen umgab ihn",
  问道: "Gefragt",
  里面怎么样: "Wie ist es drinnen",
  水有多深: "Wie tief ist das Wasser",
  石猴道: "Steinaffen",
  没水: "Kein Wasser",
  没水: "Kein Wasser",
  原来是一座铁板桥:
    "Es stellte sich heraus, dass es sich um eine Eisenbrücke handelte",
  桥那边是一座天造地设的家当:
    "Auf der anderen Seite der Brücke befindet sich ein Zuhause aus Himmel und Erde",
  众猴道: "Die Affen",
  怎见得是个家当: "Wie kann es eine Familie sein",
  石猴笑道: "Der Steinaffen lächelte",
  这股水乃是桥下冲贯石桥:
    "Dieser Wasserstrom ist die Brücke, die in die Steinbrücke eindringt",
  倒挂下来遮闭门户的: "Hängen Sie den Vorteil, um die Tür zu bedecken",
  桥边有花有树: "Es gibt Blumen und Bäume an der Brücke",
  乃是一座石房: "Es ist ein Steinhaus",
  房内有石窝: "Es gibt ein Steinnest im Raum",
  石灶: "Steinofen",
  石碗: "Steinschale",
  石盆: "Steinbecken",
  石床: "Steinbett",
  石凳: "Steinbank",
  中间一块石碣上: "Auf einer Steintafel in der Mitte",
  镌着花果山福地: "Mit dem Segen Land der Blumen und Früchte eingraviert",
  水帘洞洞天: "Wasservorhanghöhle Himmel",
  真个是我们安身之处: "Es ist wirklich dort, wo wir bleiben",
  里面且是宽阔: "Es ist breit im Inneren",
  容得千百口老小: "Vermeiden Sie Tausende junger Menschen",
  我们都进去住也: "Wir gingen alle hinein und blieben",
  省得受老天之气: "Rette die Mühe Gottes",
  众猴听得: "Die Affen können es hören",
  个个欢喜: "Jeder ist glücklich",
  都道: "Alle",
  你还先走: "Sie werden zuerst gehen",
  带我们进去: "Nehmen Sie uns hinein",
  进去: "Gehen Sie hinein",
  石猴却又瞑目蹲身: "Der Steinaffen hockte in ihren Augen schlossen",
  往里一跳: "Einspringen",
  叫道: "Berufung",
  都随我进来: "Komm mit mir",
  进来: "Komm herein",
  那些猴有胆大的: "Diese Affen sind mutig",
  都跳进去了: "Alle sprangen herein",
  胆小的: "Der schüchterne",
  一个个伸头缩颈: "Dehnen Sie sich nacheinander Ihren Kopf und Ihren Hals",
  抓耳挠腮: "Schnapp dir deine Ohren und Wangen",
  大声叫喊: "Schreien laut",
  缠一会: "Für eine Weile stecken",
  也都进去了: "Alle gingen auch rein",
  跳过桥头: "Über die Brücke springen",
  一个个抢盆夺碗: "Schnappe das Becken und die Schüssel nacheinander",
  占灶争床: "Kämpfe mit Herd ums Bett",
  搬过来: "Bewegen Sie sich hierher",
  移过去: "Bewegen",
  正是猴性顽劣: "Es ist die Sturheit des Affen",
  再无一个宁时: "Keine friedliche Zeit mehr",
  只搬得力倦神疲方止:
    "Nur wenn Sie sich hart und müde bewegen, werden Sie aufhören",
  石猿端坐上面道: "Der Steinaffen sitzt aufrecht und sagt",
  列位呵: "Alle",
  人而无信: "Menschen ohne Vertrauen",
  不知其可: "Ich weiß nicht, was möglich ist",
  你们才说有本事进得来: "Sie sagten, Sie können mit der Fähigkeit hereinkommen",
  出得去: "Kann ausgehen",
  不伤身体者: "Diejenigen, die ihren Körpern nicht schaden",
  就拜他为王: "Bete ihn einfach als König an",
  我如今进来又出去: "Ich komme jetzt rein und raus",
  出去又进来: "Geh raus und kommen Sie wieder herein",
  寻了这一个洞天与列位安眠稳睡:
    "Nachdem ich diese Höhle gefunden habe, werde ich friedlich mit allen schlafen",
  各享成家之福: "Jeder genießt den Segen, zu heiraten",
  何不拜我为王: "Warum verehre mich nicht als König",
  众猴听说: "Alle Affen hörten",
  即拱伏无违: "Das heißt, kein Verstoß",
  一个个序齿排班: "Sequenz und Sequenz",
  朝上礼拜: "Verehrung letzte Woche",
  都称千岁大王: "Sie werden alle als tausend Jahre König bezeichnet",
  自此: "Seitdem",
  石猴高登王位: "Steinaffen steigt den Thron an",
  将石字儿隐了: 'Das Wort "Stein" ist versteckt',
  遂称美猴王: "Daher als Affenkönig bekannt",
  历代人人皆属此: "Jeder in der Geschichte gehört dazu",
  称王称圣任纵横: "Werden der König und der Heilige",
  美猴王领一群猿猴: "Affenkönig führt eine Gruppe von Affen an",
  猕猴: "Makaken",
  马猴等: "Pferdeaffe usw.",
  分派了君臣佐使:
    "Zugewiesener Monarch, Minister und stellvertretender Gesandter",
  朝游花果山: "Tour Huaguo Mountain",
  暮宿水帘洞: "Die Wasservorhanghöhle",
  合契同情: "Kompatibilität und Sympathie",
  不入飞鸟之丛: "Nicht in den Busch der Vögel eintreten",
  不从走兽之类: "Folge dem Tier nicht oder so",
  独自为王: "Sei König allein",
  不胜欢乐: "Beispiellose Freude",
};

const tianwen_translation_map_en = {
  石猴喜不自胜: "The stone monkey is overjoyed",
  急怞身往外便走: "Go out quickly",
  复瞑目蹲身: "Squat in one's eyes",
  跳出水外: "Jump out of the water",
  打了两个呵呵道: "Hehehe, hehe",
  大造化: "Great fortune",
  大造化: "Great fortune",
  众猴把他围住: "Monkeys surrounded him",
  问道: "Asked",
  里面怎么样: "How is it inside",
  水有多深: "How deep is the water",
  石猴道: "Stone Monkey",
  没水: "No water",
  没水: "No water",
  原来是一座铁板桥: "It turned out to be an iron bridge",
  桥那边是一座天造地设的家当:
    "On the other side of the bridge is a home made of heaven and earth",
  众猴道: "The monkeys",
  怎见得是个家当: "How can it be a family",
  石猴笑道: "The stone monkey smiled",
  这股水乃是桥下冲贯石桥:
    "This stream of water is the bridge that penetrates the stone bridge",
  倒挂下来遮闭门户的: "Hang upside down to cover the door",
  桥边有花有树: "There are flowers and trees by the bridge",
  乃是一座石房: "It's a stone house",
  房内有石窝: "There is a stone nest in the room",
  石灶: "Stone stove",
  石碗: "Stone Bowl",
  石盆: "Stone basin",
  石床: "Stone bed",
  石凳: "Stone bench",
  中间一块石碣上: "On a stone tablet in the middle",
  镌着花果山福地: "Engraved with the blessing land of flowers and fruits",
  水帘洞洞天: "Water curtain cave sky",
  真个是我们安身之处: "It's really where we stay",
  里面且是宽阔: "It's wide inside",
  容得千百口老小: "Avoid thousands of young people",
  我们都进去住也: "We all went in and stayed",
  省得受老天之气: "Save the trouble of God",
  众猴听得: "The monkeys can hear it",
  个个欢喜: "Everyone is happy",
  都道: "All",
  你还先走: "You'll leave first",
  带我们进去: "Take us in",
  进去: "Go in",
  石猴却又瞑目蹲身: "The stone monkey squatted in her eyes closed",
  往里一跳: "Jump in",
  叫道: "Calling",
  都随我进来: "Come with me",
  进来: "Come in",
  那些猴有胆大的: "Those monkeys are bold",
  都跳进去了: "All jumped in",
  胆小的: "The timid",
  一个个伸头缩颈: "One by one, stretch your head and neck",
  抓耳挠腮: "Grab your ears and cheeks",
  大声叫喊: "Scream loudly",
  缠一会: "Tuck for a while",
  也都进去了: "All went in, too",
  跳过桥头: "Jump over the bridge",
  一个个抢盆夺碗: "Snatch the basin and the bowl one by one",
  占灶争床: "Fight for bed with stove",
  搬过来: "Move here",
  移过去: "Move over",
  正是猴性顽劣: "It's the monkey's stubbornness",
  再无一个宁时: "No more peaceful time",
  只搬得力倦神疲方止: "Only when you move hard and tired, you will stop",
  石猿端坐上面道: "The stone ape sits upright and says",
  列位呵: "Everyone",
  人而无信: "People without trust",
  不知其可: "Don't know what's possible",
  你们才说有本事进得来: "You said you can come in with the ability",
  出得去: "Can go out",
  不伤身体者: "Those who do not harm their bodies",
  就拜他为王: "Just worship him as king",
  我如今进来又出去: "I'm coming in and out now",
  出去又进来: "Go out and come in again",
  寻了这一个洞天与列位安眠稳睡:
    "After finding this cave, I will sleep peacefully with everyone",
  各享成家之福: "Everyone enjoys the blessing of getting married",
  何不拜我为王: "Why not worship me as king",
  众猴听说: "All monkeys heard",
  即拱伏无违: "That is, no violation",
  一个个序齿排班: "Sequence and sequence",
  朝上礼拜: "Worship last week",
  都称千岁大王: "They are all called the Thousand Years King",
  自此: "Since then",
  石猴高登王位: "Stone Monkey Ascends the Throne",
  将石字儿隐了: 'The word "Stone" is hidden',
  遂称美猴王: "Hence known as the Monkey King",
  历代人人皆属此: "Everyone in history belongs to this",
  称王称圣任纵横: "Become the king and the saint",
  美猴王领一群猿猴: "Monkey King leads a group of monkeys",
  猕猴: "Macaque",
  马猴等: "Horse monkey etc.",
  分派了君臣佐使: "Assigned monarch, minister and assistant envoy",
  朝游花果山: "Tour Huaguo Mountain",
  暮宿水帘洞: "The water curtain cave",
  合契同情: "Compatibility and sympathy",
  不入飞鸟之丛: "Not entering the bush of birds",
  不从走兽之类: "Don't follow the beast or something",
  独自为王: "Be king alone",
  不胜欢乐: "Unparalleled joy",
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
