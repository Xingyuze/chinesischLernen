const translationCard = document.getElementById("translationCard");
// 诗歌文本c
const poemText = `平林漠漠烟如织
寒山一带伤心碧
暝色入高楼
有人楼上愁
玉梯空伫立
宿鸟归飞急
何处是归程
长亭连短亭`;

const pinyinMap = {
  平: "píng",
  林: "lín",
  漠: "mò",
  烟: "yān",
  如: "rú",
  织: "zhī",
  寒: "hán",
  山: "shān",
  一: "yī",
  带: "dài",
  伤: "shāng",
  心: "xīn",
  碧: "bì",
  暝: "míng",
  色: "sè",
  入: "rù",
  高: "gāo",
  楼: "lóu",
  有: "yǒu",
  人: "rén",
  上: "shàng",
  愁: "chóu",
  玉: "yù",
  梯: "tī",
  空: "kōng",
  伫: "zhù",
  立: "lì",
  宿: "sù",
  鸟: "niǎo",
  归: "guī",
  飞: "fēi",
  急: "jí",
  何: "hé",
  处: "chǔ",
  是: "shì",
  程: "chéng",
  长: "cháng",
  亭: "tíng",
  连: "lián",
  短: "duǎn",
};

const translations_en = {
  平: "flat",
  林: "Forest",
  漠: "desert",
  烟: "cigarette",
  如: "like",
  织: "Weaving",
  寒: "cold",
  山: "Mountain",
  一: "one",
  带: "bring",
  伤: "hurt",
  心: "Heart",
  碧: "Bi",
  暝: "dark",
  色: "color",
  入: "enter",
  高: "high",
  楼: "building",
  有: "have",
  人: "people",
  上: "superior",
  愁: "worry",
  玉: "Jade",
  梯: "ladder",
  空: "null",
  伫: "Stop",
  立: "stand",
  宿: "Stay",
  鸟: "bird",
  归: "Go home",
  飞: "fly",
  急: "urgent",
  何: "what",
  处: "Where",
  是: "yes",
  程: "Procedure",
  长: "long",
  亭: "pavilion",
  连: "even",
  短: "short",
};

const translations_de = {
  平: "Wohnung",
  林: "Wald",
  漠: "Wüste",
  烟: "Zigarette",
  如: "wie",
  织: "Weberei",
  寒: "kalt",
  山: "Berg",
  一: "eins",
  带: "bringen",
  伤: "verletzt",
  心: "Herz",
  碧: "Bi",
  暝: "dunkel",
  色: "Farbe",
  入: "eingeben",
  高: "hoch",
  楼: "Gebäude",
  有: "haben",
  人: "Menschen",
  上: "Vorgesetzter",
  愁: "Sorge",
  玉: "Jade",
  梯: "Leiter",
  空: "NULL",
  伫: "Stoppen",
  立: "Stand",
  宿: "Bleiben",
  鸟: "Vogel",
  归: "Nach Hause gehen",
  飞: "fliegen",
  急: "dringend",
  何: "Was",
  处: "Wo",
  是: "Ja",
  程: "Verfahren",
  长: "lang",
  亭: "Pavillon",
  连: "sogar",
  短: "kurz",
};

const translations_fr = {
  平: "plat",
  林: "Forêt",
  漠: "désert",
  烟: "cigarette",
  如: "comme",
  织: "Tissage",
  寒: "froid",
  山: "Montagne",
  一: "un",
  带: "apporter",
  伤: "blesser",
  心: "Cœur",
  碧: "Bi",
  暝: "sombre",
  色: "couleur",
  入: "entrer",
  高: "haut",
  楼: "bâtiment",
  有: "avoir",
  人: "personnes",
  上: "supérieur",
  愁: "inquiétude",
  玉: "Jade",
  梯: "échelle",
  空: "nul",
  伫: "Arrêt",
  立: "rester",
  宿: "Rester",
  鸟: "oiseau",
  归: "Rentrer chez eux",
  飞: "voler",
  急: "urgent",
  何: "quoi",
  处: "Où",
  是: "Oui",
  程: "Procédure",
  长: "long",
  亭: "pavillon",
  连: "même",
  短: "court",
};

const tianwen_translation_map_en = {
  平林漠漠烟如织: "The smoke is weaving in the flat forest",
  寒山一带伤心碧: "Sad green in Hanshan",
  暝色入高楼: "A tall building",
  有人楼上愁: "Someone is worried about the building",
  玉梯空伫立: "Standing in the empty jade ladder",
  宿鸟归飞急: "The birds fly back and forth quickly",
  何处是归程: "Where is the return journey",
  长亭连短亭: "Long Pavilion and Short Pavilion",
};

const tianwen_translation_map_de = {
  平林漠漠烟如织: "Der Rauch webt im flachen Wald",
  寒山一带伤心碧: "Trauriges Grün in Hanshan",
  暝色入高楼: "Ein großes Gebäude",
  有人楼上愁: "Jemand macht sich Sorgen um das Gebäude",
  玉梯空伫立: "In der leeren Jade -Leiter stehen",
  宿鸟归飞急: "Die Vögel fliegen schnell hin und her",
  何处是归程: "Wo ist die Rückreise",
  长亭连短亭: "Langer Pavillon und kurzer Pavillon",
};

const tianwen_translation_map_fr = {
  平林漠漠烟如织: "La fumée tisse dans la forêt plate",
  寒山一带伤心碧: "Triste vert à Hanshan",
  暝色入高楼: "Un grand bâtiment",
  有人楼上愁: "Quelqu'un s'inquiète pour le bâtiment",
  玉梯空伫立: "Debout dans l'échelle de jade vide",
  宿鸟归飞急: "Les oiseaux volent rapidement d'avant en arrière",
  何处是归程: "Où est le voyage de retour",
  长亭连短亭: "Pavillon long et pavillon court",
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
