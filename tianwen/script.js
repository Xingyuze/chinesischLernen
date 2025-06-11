const translationCard = document.getElementById("translationCard");
// 诗歌文本
const poemText = `禹之力献功，降省下土四方。
焉得彼嵞山女，而通之于台桑？
闵妃匹合，厥身是继。
胡维嗜不同味，而快晁饱？
启代益作后，卒然离蠥。
何启惟忧，而能拘是达？
皆归射𥷤，而无害厥躬。
何后益作革，而禹播降？
启棘宾商，《九辩》《九歌》。
何勤子屠母，而死分竟地？
帝降夷羿，革孽夏民。
胡射夫河伯，而妻彼雒嫔？
冯珧利决，封狶是射。
何献蒸肉之膏，而后帝不若？
浞娶纯狐，眩妻爰谋。
何羿之射革，而交吞揆之？
阻穷西征，岩何越焉？
化为黄熊，巫何活焉？
咸播秬黍，莆雚是营。
何由并投，而鲧疾脩盈？
白蜺婴茀，胡为此堂？
安得夫良药，不能固臧？`;
const baseInfos = {
  禹: "Legendary Chinese emperor, known for controlling floods",
  之: "A possessive particle, equivalent to 'of'",
  力: "Power, strength",
  // ... hier weitere Infos ergänzen
};
// 翻译数据 (示例)
const translations_de = {};
const translations_fr = {};
const translations_en = {
  禹: "yu (a legendary hero)",
  之: "of / 's",
  力: "power / strength",
  献: "offer / contribute",
  功: "merit / achievement",
  降: "descend / reduce",
  省: "province / save",
  下: "down / lower",
  土: "earth / land",
  四: "four",
  方: "direction / region",

  焉: "how / where",
  得: "get / obtain",
  彼: "that / he / she",
  嵞: "mountain (name)",
  山: "mountain",
  女: "woman / girl",
  而: "and / but / yet",
  通: "pass / communicate",
  之: "of / 's",
  于: "at / in",
  台: "platform / stage",
  桑: "mulberry tree",

  闵: "Min (name)",
  妃: "concubine / consort",
  匹: "match / pair",
  合: "join / combine",
  厥: "his / her / its",
  身: "body / self",
  是: "this / correct",
  继: "continue / succeed",

  胡: "Hu (name) / barbarian",
  维: "maintain / hold",
  嗜: "like / be fond of",
  不同: "different / not same",
  味: "taste / flavor",
  快: "happy / fast",
  晁: "Chao (name)",
  饱: "full / satiated",

  启: "Qi (name) / open",
  代: "generation / replace",
  益: "increase / benefit",
  作: "do / make",
  后: "after / empress",
  卒: "die / suddenly",
  然: "so / thus",
  离: "leave / separate",
  蠥: "(archaic, meaning unclear, possibly a bed or place)",

  何: "why / what",
  惟: "only / just",
  忧: "worry / concern",
  能: "can / able",
  拘: "restrain / hold",
  是: "this / correct",
  达: "reach / understand",

  皆: "all / everyone",
  归: "return / belong",
  射: "shoot / archery",
  "𥷤": "(uncertain character, possibly a name or special term)",
  无: "no / none",
  害: "harm / hurt",
  厥: "his / her / its",
  躬: "body / self",

  后: "later / empress",
  益: "increase / benefit",
  作: "make / do",
  革: "leather / reform",
  禹: "Yu (name)",
  播: "spread / sow",
  降: "descend / reduce",

  棘: "thorn / difficulty",
  宾: "guest / visitor",
  商: "Shang (dynasty) / commerce",
  九: "nine",
  辩: "debate / argue",
  歌: "song",

  勤: "diligent / hardworking",
  子: "child / son",
  屠: "butcher / slaughter",
  母: "mother",
  死: "die / death",
  分: "divide / part",
  竟: "finally / end",
  地: "earth / land",

  帝: "emperor",
  降: "send down / descend",
  夷: "Yi (tribe) / barbarian",
  羿: "Yi (archer)",
  孽: "evil / sin",
  夏: "Xia (dynasty) / summer",
  民: "people",

  射: "shoot",
  夫: "man / husband",
  河: "river",
  伯: "earl / uncle",
  妻: "wife",
  彼: "that / he / she",
  雒: "Luo (place or name)",
  嫔: "concubine / imperial consort",

  冯: "Feng (name)",
  珧: "jade / precious stone",
  利: "benefit / profit",
  决: "decide / resolve",
  封: "seal / confer",
  狶: "(rare character, possibly a kind of animal)",
  是: "this / correct",
  射: "shoot",

  献: "offer",
  蒸: "steam",
  肉: "meat",
  之: "of",
  膏: "fat / ointment",
  而: "and / but",
  后: "after",
  帝: "emperor",
  不: "not",
  若: "like / as",

  浞: "(personal name)",
  娶: "marry",
  纯: "pure",
  狐: "fox",
  眩: "dazzle / confuse",
  妻: "wife",
  爰: "thereupon / here",
  谋: "scheme / plan",

  羿: "Yi (archer)",
  之: "of",
  射: "shoot",
  革: "leather / reform",
  而: "and / but",
  交: "intersect / associate",
  吞: "swallow",
  揆: "measure / estimate",
  之: "of",

  阻: "block / stop",
  穷: "end / poor",
  西: "west",
  征: "expedition / campaign",
  岩: "rock / cliff",
  何: "how / why",
  越: "cross / exceed",
  焉: "where / how",

  化: "transform",
  为: "to be / become",
  黄: "yellow",
  熊: "bear",
  巫: "witch / shaman",
  何: "how / why",
  活: "live / survive",
  焉: "where / how",

  咸: "all / together",
  播: "sow / broadcast",
  秬: "millet (a kind of grain)",
  黍: "millet",
  莆: "(possibly a plant name)",
  雚: "(rare character, possibly bird or nest)",
  是: "this / correct",
  营: "camp / prepare",

  何: "why / how",
  由: "from / reason",
  并: "together / combine",
  投: "throw / invest",
  而: "and / but",
  鲧: "Gun (name)",
  疾: "illness / urgent",
  脩: "repair / cultivate",
  盈: "full / abundant",

  白: "white",
  蜺: "(rare character, a kind of insect or fly)",
  婴: "baby / wrap",
  茀: "(rare character, possibly nest)",
  胡: "why / barbarian / Hu (name)",
  为: "for / because",
  此: "this",
  堂: "hall / room",

  安: "how / peace",
  得: "obtain / get",
  夫: "man / husband",
  良: "good",
  药: "medicine",
  不: "not",
  能: "can / able",
  固: "store / solid",
  臧: "good / store / treasure",
};

// 初始化语音合成
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
    case 1: // 显示拼音
      showPinyin(char, pinyinSpan);
      updateStatus(`显示拼音: ${char}`);
      break;
    case 2: // 朗读字符
      readChar(char);
      updateStatus(`朗读字符: ${char}`);
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
  const pinyinMap = {
    禹: "yǔ",
    之: "zhī",
    力: "lì",
    献: "xiàn",
    功: "gōng",
    降: "jiàng",
    省: "shěng",
    下: "xià",
    土: "tǔ",
    四: "sì",
    方: "fāng",
    焉: "yān",
    得: "dé",
    彼: "bǐ",
    嵞: "tú",
    山: "shān",
    女: "nǚ",
    而: "ér",
    通: "tōng",
    于: "yú",
    台: "tái",
    桑: "sāng",
    闵: "mǐn",
    妃: "fēi",
    匹: "pǐ",
    合: "hé",
    厥: "jué",
    身: "shēn",
    是: "shì",
    继: "jì",
    胡: "hú",
    维: "wéi",
    嗜: "shì",
    不: "bù",
    同: "tóng",
    味: "wèi",
    快: "kuài",
    晁: "cháo",
    饱: "bǎo",
    启: "qǐ",
    代: "dài",
    益: "yì",
    作: "zuò",
    后: "hòu",
    卒: "zú",
    然: "rán",
    离: "lí",
    蠥: "niè",
    惟: "wéi",
    忧: "yōu",
    能: "néng",
    拘: "jū",
    达: "dá",
    皆: "jiē",
    归: "guī",
    射: "shè",
    "𥷤": "yuàn",
    无: "wú",
    害: "hài",
    躬: "gōng",
    棘: "jí",
    宾: "bīn",
    商: "shāng",
    九: "jiǔ",
    辩: "biàn",
    歌: "gē",
    勤: "qín",
    子: "zǐ",
    屠: "tú",
    母: "mǔ",
    死: "sǐ",
    分: "fēn",
    竟: "jìng",
    地: "dì",
    帝: "dì",
    夷: "yí",
    羿: "yì",
    孽: "niè",
    夏: "xià",
    民: "mín",
    夫: "fū",
    河: "hé",
    伯: "bó",
    妻: "qī",
    雒: "luò",
    嫔: "pín",
    冯: "féng",
    珧: "yáo",
    利: "lì",
    决: "jué",
    封: "fēng",
    狶: "xī",
    蒸: "zhēng",
    肉: "ròu",
    膏: "gāo",
    若: "ruò",
    浞: "zhuó",
    娶: "qǔ",
    纯: "chún",
    狐: "hú",
    眩: "xuàn",
    爰: "yuán",
    谋: "móu",
    交: "jiāo",
    吞: "tūn",
    揆: "kuí",
    阻: "zǔ",
    穷: "qióng",
    西: "xī",
    征: "zhēng",
    岩: "yán",
    越: "yuè",
    焉: "yān",
    化: "huà",
    为: "wéi",
    黄: "huáng",
    熊: "xióng",
    巫: "wū",
    活: "huó",
    咸: "xián",
    播: "bō",
    秬: "jù",
    黍: "shǔ",
    莆: "pú",
    雚: "guàn",
    营: "yíng",
    由: "yóu",
    并: "bìng",
    投: "tóu",
    鲧: "gǔn",
    疾: "jí",
    脩: "xiū",
    盈: "yíng",
    白: "bái",
    蜺: "ní",
    婴: "yīng",
    茀: "fú",
    堂: "táng",
    安: "ān",
    得: "dé",
    良: "liáng",
    药: "yào",
    不能: "bùnéng",
    固: "gù",
    臧: "zāng",
  };

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
function showTranslation(char) {
  const translation_en = translations_en[char] || "No translation available";
  const translation_de = translations_de[char] || "No translation available";
  const translation_fr = translations_fr[char] || "No translation available";
  const baseInfo = baseInfos[char] || "No additional info";

  translationCard.innerHTML = `
<button class="close-btn" onclick="closeTranslationCard()">x</button>
<strong style="font-size: 20px;">${char}</strong><br>
<em>Translation:</em> ${translation_en}<br>
<em>Translation:</em> ${translation_de}<br>
<em>Translation:</em> ${translation_de}<br>
<em>Info:</em> ${baseInfo}<br>
`;

  translationCard.style.display = "block";
}

function closeTranslationCard() {
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

const tianwen_translation_map_fr = {};
const tianwen_translation_map_de = {};
const tianwen_translation_map_en = {
  "禹之力献功，降省下土四方。":
    "Yu's power contributed to the reduction of the provinces and the lower regions.",
  "焉得彼嵞山女，而通之于台桑？":
    "How can I get the girl from Mount Ling and communicate with her at Taishang?",
  "闵妃匹合，厥身是继。":
    "Min Fei is compatible, and her body is the successor.",
  "胡维嗜不同味，而快晁饱？":
    "Hu Wei likes different flavors, but is he happy when Chao is full?",
  "启代益作后，卒然离蠥。":
    "After Qi Daiyi made a contribution, he suddenly left the bed.",
  "何启惟忧，而能拘是达？":
    "He Qi was worried, but he could restrain his understanding?",
  "皆归射𥷤，而无害厥躬。":
    "All will be shot, and no harm will come to their bodies.",
  "何后益作革，而禹播降？":
    "Why did He Houyi make leather, and Yu spread down?",
  "启棘宾商，《九辩》《九歌》。":
    "Qijibin Shang, 'Nine Arguments' and 'Nine Songs'.",
  "何勤子屠母，而死分竟地？":
    "He Qin killed his mother and died in the middle of the land?",
  "帝降夷羿，革孽夏民。":
    "The emperor sent Yi Yi to reform the evil people of Xia.",
  "胡射夫河伯，而妻彼雒嫔？":
    "Did Hu Sheifu marry the River God and his wife the Luo Princess?",
  "冯珧利决，封狶是射。":
    "Feng Yao Li made a decision, and Feng Shui was shot.",
  "何献蒸肉之膏，而后帝不若？":
    "Why did He Xian steam the meat with ointment, and then the emperor was not as good?",
  "浞娶纯狐，眩妻爰谋。": "Marry a pure fox and seduce your wife.",
  "何羿之射革，而交吞揆之？":
    "Why did Yi shoot the leather and swallow the pebble?",
  "阻穷西征，岩何越焉？": "How can the rock cross the west?",
  "化为黄熊，巫何活焉？":
    "If it turns into a yellow bear, how can the witch live?",
  "咸播秬黍，莆雚是营。":
    "Barley and millet are broadcast, and the puer is prepared.",
  "何由并投，而鲧疾脩盈？": "Why did he invest and Gengyu become so rich?",
  "白蜺婴茀，胡为此堂？":
    "The white fly is in the nest. Why is this hall here?",
  "安得夫良药，不能固臧？": "Can good medicine not be stored?",
};
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
<button class="close-btn" onclick="closeTranslationCard()">×</button>
<strong style="font-size: 18px;">原文：</strong><br>
<div style="margin-bottom: 10px;">${line}</div>
<strong style="font-size: 18px;">翻译：</strong><br>
<div>${translatedLine}</div>
`;

  translationCard.style.display = "block";

  updateStatus(`显示翻译: ${line.substring(0, 15)}...`);
}

// 更新状态栏
function updateStatus(message) {
  document.getElementById("statusBar").textContent = message;
}
