const translationCard = document.getElementById("translationCard");
// 诗歌文本
const poemText = `好雨知时节，当春乃发生。
随风潜入夜，润物细无声。
野径云俱黑，江船火独明。
晓看红湿处，花重锦官城。`;

const lineImages = [
  "images/1.png", // z.B. Frühling und Regen
  "images/2.png", // Nacht, Wind, Regen
  "images/3.png", // Nacht, Wind, Regen
  "images/4.png", // Nacht, Wind, Regen
];

// 翻译数据 (示例)
const translations_de = {};
const translations_fr = {};
const translations_en = {
  好: "good",
  雨: "rain",
  知: "know",
  时: "time",
  节: "season",
  当: "just at",
  春: "spring",
  乃: "then",
  发: "sprout",
  生: "grow",

  随: "follow",
  风: "wind",
  潜: "quietly enter",
  入: "enter",
  夜: "night",
  润: "moisten",
  物: "things",
  细: "fine",
  无: "without",
  声: "sound",

  野: "wild",
  径: "path",
  云: "cloud",
  俱: "all",
  黑: "dark",
  江: "river",
  船: "boat",
  火: "fire",
  独: "alone",
  明: "bright",

  晓: "dawn",
  看: "look",
  红: "red",
  湿: "wet",
  处: "place",
  花: "flowers",
  重: "heavy",
  锦: "brocade",
  官: "official",
  城: "city",
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

  lines.forEach((line, index) => {
    const lineDiv = document.createElement("div");
    lineDiv.className = "poem-line";

    // 处理每个字符
    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char.trim() === "") {
        const spaceSpan = document.createElement("span");
        spaceSpan.textContent = " ";
        lineDiv.appendChild(spaceSpan);
        continue;
      }

      const charContainer = document.createElement("div");
      charContainer.className = "char-container";

      const charSpan = document.createElement("span");
      charSpan.className = "char";
      charSpan.textContent = char;

      const pinyinSpan = document.createElement("span");
      pinyinSpan.className = "pinyin";

      const transSpan = document.createElement("span");
      transSpan.className = "translation";

      charContainer.appendChild(pinyinSpan);
      charContainer.appendChild(charSpan);
      charContainer.appendChild(transSpan);

      charContainer.addEventListener("click", () =>
        handleCharClick(char, pinyinSpan, transSpan)
      );

      lineDiv.appendChild(charContainer);
    }

    // 行控制按钮
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

    // 💡 每行后添加一个 individuelles Bild
    if (lineImages[index]) {
      const lineImage = document.createElement("img");
      lineImage.src = lineImages[index];
      lineImage.alt = "Illustration";
      lineImage.className = "line-image";
      lineDiv.appendChild(lineImage);
    }

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
    好: "hǎo",
    雨: "yǔ",
    知: "zhī",
    时: "shí",
    节: "jié",
    当: "dāng",
    春: "chūn",
    乃: "nǎi",
    发: "fā",
    生: "shēng",
    随: "suí",
    风: "fēng",
    潜: "qián",
    入: "rù",
    夜: "yè",
    润: "rùn",
    物: "wù",
    细: "xì",
    无: "wú",
    声: "shēng",
    野: "yě",
    径: "jìng",
    云: "yún",
    俱: "jù",
    黑: "hēi",
    江: "jiāng",
    船: "chuán",
    火: "huǒ",
    独: "dú",
    明: "míng",
    晓: "xiǎo",
    看: "kàn",
    红: "hóng",
    湿: "shī",
    处: "chù",
    花: "huā",
    重: "zhòng",
    锦: "jǐn",
    官: "guān",
    城: "chéng",
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
<button class="close-btn" onclick="closeTranslationCard()">×</button>
<strong style="font-size: 18px;">汉字：</strong> ${char}<br>
<strong style="font-size: 18px;">翻译: </strong> ${translate}
`;

  translationCard.style.display = "block";

  const charId = `${char}-${transSpan.id}`;
  charStates[charId] = 0;
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
  "好雨知时节，当春乃发生。":
    "A good rain knows its proper time; it comes in spring when life begins.",
  "随风潜入夜，润物细无声。":
    "With the wind it slips into the night, moistening all things softly, without a sound.",
  "野径云俱黑，江船火独明。":
    "On country paths, clouds turn all to darkness; only a riverboat’s fire glows alone.",
  "晓看红湿处，花重锦官城。":
    "At dawn, we’ll see the red, damp blossoms—heavy with bloom—in brocade-covered Chengdu.",
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
