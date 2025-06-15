from pypinyin import pinyin, Style
from deep_translator import GoogleTranslator
import re
import os
import time

def clean_text(text):
    return re.sub(r"[^\w\u4e00-\u9fff]", "", text)

def split_poem_by_punctuation(text):
    return re.split(r"[，。！？、；：,.!?;:\-\—\"'“”‘’（）()【】\[\]{}《》\n\r]", text)

def safe_translate(translator, text, cache, delay=0.5):
    if text in cache:
        return cache[text]
    try:
        time.sleep(delay)  # Schutz gegen Blockierung
        result = translator.translate(text)
        cache[text] = result
        return result
    except Exception as e:
        print(f"⚠️ Fehler bei Übersetzung von '{text}': {e}")
        cache[text] = ""
        return ""

def text_to_js_maps(chinese_texts):
    translator_en = GoogleTranslator(source='zh-CN', target='en')
    translator_de = GoogleTranslator(source='zh-CN', target='de')
    translator_fr = GoogleTranslator(source='zh-CN', target='fr')

    cache_char_en = {}
    cache_char_de = {}
    cache_char_fr = {}
    cache_line_en = {}
    cache_line_de = {}
    cache_line_fr = {}

    all_chars = []
    poem_lines = []
    raw_lines = []

    for text in chinese_texts:
        lines = split_poem_by_punctuation(text)
        for line in lines:
            stripped = line.strip()
            if stripped:
                poem_lines.append(clean_text(stripped))
                raw_lines.append(stripped)
                all_chars.extend(list(clean_text(stripped)))

    seen = set()
    unique_chars = []
    for ch in all_chars:
        if ch not in seen:
            seen.add(ch)
            unique_chars.append(ch)

    pinyin_result = pinyin("".join(unique_chars), style=Style.TONE)
    pinyin_values = [syll[0] for syll in pinyin_result]

    translations_en = [safe_translate(translator_en, c, cache_char_en) for c in unique_chars]
    translations_de = [safe_translate(translator_de, c, cache_char_de) for c in unique_chars]
    translations_fr = [safe_translate(translator_fr, c, cache_char_fr) for c in unique_chars]

    lines_en = [safe_translate(translator_en, line, cache_line_en) for line in raw_lines]
    lines_de = [safe_translate(translator_de, line, cache_line_de) for line in raw_lines]
    lines_fr = [safe_translate(translator_fr, line, cache_line_fr) for line in raw_lines]

    poem_text = "const poemText = `\n" + "\n".join(poem_lines) + "\n`;\n\n"

    def make_map(name, keys, values):
        entries = [f'  "{k}": "{v}"' for k, v in zip(keys, values)]
        return f"const {name} = {{\n" + ",\n".join(entries) + "\n};\n\n"

    js_output = poem_text
    js_output += make_map("pinyinMap", unique_chars, pinyin_values)
    js_output += make_map("translations_en", unique_chars, translations_en)
    js_output += make_map("translations_de", unique_chars, translations_de)
    js_output += make_map("translations_fr", unique_chars, translations_fr)
    js_output += make_map("tianwen_translation_map_en", raw_lines, lines_en)
    js_output += make_map("tianwen_translation_map_de", raw_lines, lines_de)
    js_output += make_map("tianwen_translation_map_fr", raw_lines, lines_fr)

    return js_output

if __name__ == "__main__":
    input_path = "poem_input.txt"
    output_path = "poem_output.js"

    if not os.path.exists(input_path):
        print(f"❌ Eingabedatei '{input_path}' nicht gefunden.")
    else:
        with open(input_path, "r", encoding="utf-8") as f:
            input_content = f.read().strip()

        if not input_content:
            print("❌ Eingabedatei ist leer.")
        else:
            try:
                texts = [input_content]
                js_result = text_to_js_maps(texts)
                with open(output_path, "w", encoding="utf-8") as f_out:
                    f_out.write(js_result)
                print(f"✅ Datei '{output_path}' erfolgreich aktualisiert.")
            except Exception as e:
                print("❌ Fehler bei Verarbeitung:", e)
