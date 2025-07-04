const translationCard = document.getElementById("translationCard");
// 诗歌文本
const poemText =
  "好雨知时节，当春乃发生。\n随风潜入夜，润物细无声。\n野径云俱黑，江船火独明。\n晓看红湿处，花重锦官城。";

const pinyinMap = new Map([
  ["好", "hao3"],
  ["雨", "yu3"],
  ["知", "zhi1"],
  ["时", "shi2"],
  ["节", "jie2"],
  ["当", "dang1"],
  ["春", "chun1"],
  ["乃", "nai3"],
  ["发", "fa1"],
  ["生", "sheng1"],
  ["随", "sui2"],
  ["风", "feng1"],
  ["潜", "qian2"],
  ["入", "ru4"],
  ["夜", "ye4"],
  ["润", "run4"],
  ["物", "wu4"],
  ["细", "xi4"],
  ["无", "wu2"],
  ["声", "sheng1"],
  ["野", "ye3"],
  ["径", "jing4"],
  ["云", "yun2"],
  ["俱", "ju4"],
  ["黑", "hei1"],
  ["江", "jiang1"],
  ["船", "chuan2"],
  ["火", "huo3"],
  ["独", "du2"],
  ["明", "ming2"],
  ["晓", "xiao3"],
  ["看", "kan4"],
  ["红", "hong2"],
  ["湿", "shi1"],
  ["处", "chu4"],
  ["花", "hua1"],
  ["重", "zhong4"],
  ["锦", "jin3"],
  ["官", "guan1"],
  ["城", "cheng2"],
]);

const translationMapEN = new Map([
  ["好", "Okay!&#10;Momo: Okay!&#10;Bella: Okay!"],
  ["雨", "雨"],
  ["知", "known"],
  ["时", "Jam"],
  ["节", "Section"],
  ["当", "when"],
  ["春", "春"],
  ["乃", "is"],
  ["发", "Development"],
  ["生", "生"],
  ["随", "follow"],
  ["风", "wind"],
  ["潜", "Dive"],
  ["入", "Radical 11"],
  ["夜", "Malam"],
  ["润", "Run"],
  ["物", "物"],
  ["细", "Thin"],
  ["无", "NA"],
  ["声", "Sound"],
  ["野", "Rustic"],
  ["径", "path; "],
  ["云", "Cloud"],
  ["俱", "Instruments"],
  ["黑", "Black"],
  ["江", "Jiang"],
  ["船", "Ship"],
  ["火", "火"],
  ["独", "FoolsDay_Unicorn/Name"],
  ["明", "明"],
  ["晓", "Akatsuki"],
  ["看", "Looking at"],
  ["红", "Merah"],
  ["湿", "Wet"],
  ["处", "Number of places"],
  ["花", "花"],
  ["重", "Weight"],
  ["锦", "Brocade"],
  ["官", "Mandarin"],
  ["城", "city"],
]);

const translationMapDE = new Map([
  ["好", "Ok"],
  ["雨", "Regen"],
  ["知", "Wissen"],
  ["时", "Zeit"],
  ["节", "knauf"],
  ["当", "Wann:"],
  ["春", "Feder"],
  ["乃", "ist"],
  ["发", "Haare"],
  ["生", "Schul"],
  ["随", "Folgen"],
  ["风", "Wind"],
  ["潜", "Tauchen"],
  ["入", "Einweisungen"],
  ["夜", "nacht"],
  ["润", "Ausführen"],
  ["物", "Entität (Begriffsklärung)"],
  ["细", "Dünn"],
  ["无", "Keine"],
  ["声", "Stimme"],
  ["野", "Wild"],
  ["径", "Durchmesser"],
  ["云", "wolke"],
  ["俱", "Instrumente"],
  ["黑", "Schwarz"],
  ["江", "Fluss"],
  ["船", "schiff"],
  ["火", "Feuer"],
  ["独", "Solo"],
  ["明", "Ming-Dynastie"],
  ["晓", "Morgendämmerung"],
  ["看", "schauen"],
  ["红", "red"],
  ["湿", "Nass"],
  ["处", "Ort"],
  ["花", "Blüte"],
  ["重", "Schweres Papier"],
  ["锦", "Brokat"],
  ["官", "Offizier"],
  ["城", "stadt"],
]);

const lineTranslationMapEN = new Map([
  [
    "好雨知时节，当春乃发生。",
    "Good rain knows the season, when spring is happening.",
  ],
  [
    "随风潜入夜，润物细无声。",
    "Diving into the night with the wind, the moisturizer was silent.",
  ],
  [
    "野径云俱黑，江船火独明。",
    "The wild trail was dark, and the river boat was on fire.",
  ],
  [
    "晓看红湿处，花重锦官城。",
    "Looking at the red and wet places, the flowers are heavy on Guancheng.",
  ],
]);

const lineTranslationMapDE = new Map([
  [
    "好雨知时节，当春乃发生。",
    "Good rain knows the season, when spring is happening.",
  ],
  [
    "随风潜入夜，润物细无声。",
    "Diving into the night with the wind, the moisturizer was silent.",
  ],
  [
    "野径云俱黑，江船火独明。",
    "The wild trail was dark, and the river boat was on fire.",
  ],
  [
    "晓看红湿处，花重锦官城。",
    "Looking at the red and wet places, the flowers are heavy on Guancheng.",
  ],
]);

const lineTranslationMapFR = new Map([
  [
    "好雨知时节，当春乃发生。",
    "Good rain knows the season, when spring is happening.",
  ],
  [
    "随风潜入夜，润物细无声。",
    "Diving into the night with the wind, the moisturizer was silent.",
  ],
  [
    "野径云俱黑，江船火独明。",
    "The wild trail was dark, and the river boat was on fire.",
  ],
  [
    "晓看红湿处，花重锦官城。",
    "Looking at the red and wet places, the flowers are heavy on Guancheng.",
  ],
]);

export {
  poemText,
  pinyinMap,
  translationMapEN,
  translationMapDE,
  lineTranslationMapEN,
  lineTranslationMapDE,
  lineTranslationMapFR,
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
