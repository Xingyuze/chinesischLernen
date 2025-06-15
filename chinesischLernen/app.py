from flask import Flask, request, redirect
import subprocess
import os

app = Flask(__name__)

@app.route('/')
def form():
    return open("form.html").read()

@app.route('/submit', methods=['POST'])
def submit():
    title = request.form['title']
    author = request.form['author']
    text = request.form['text']

    # Speichere Eingabetext
    with open("poem_input.txt", "w", encoding="utf-8") as f:
        f.write(text)

    # Führe automaticMap.py aus (muss existieren!)
    subprocess.run(["python3", "automaticMap.py"])

    # Lade poem_output.js
    with open("poem_output.js", "r", encoding="utf-8") as js_file:
        js_content = js_file.read()

    # HTML-Gerüst
    html_template = f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>{title}</h1>
    <select id="languageSelect">
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="fr">Français</option>
    </select>
    <div class="poem-container" id="poemContainer">
        <!-- 诗句将通过JavaScript动态生成 -->
    </div>
    
    <div class="status-bar" id="statusBar">就绪</div>
    <div id="translationCard"></div>

    <div class="instructions">
        <h3>使用说明：</h3>
        <p>1. 点击汉字 - 第一次显示拼音，第二次朗读发音，第三次显示英文翻译</p>
        <p>2. 每行诗句后的按钮可以朗读整句或显示整句翻译</p>
    </div>

    <script>{js_content}</script>
</body>
</html>'''

    filename = f"{title.replace(' ', '_')}.html"
    with open(filename, "w", encoding="utf-8") as out_file:
        out_file.write(html_template)

    return f"Datei <strong>{filename}</strong> erfolgreich erstellt!"

if __name__ == '__main__':
    app.run(debug=True)
