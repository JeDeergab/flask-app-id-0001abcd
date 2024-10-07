
from flask import Flask, jsonify, render_template

app = Flask(
    __name__,
    static_folder='/home/johnenerio/static',
    template_folder='/home/johnenerio/templates'
)

@app.route('/')
def home():
    noscript_content = "JavaScript is disabled or not supported by your browser."
    return render_template('index.html', noscript_content=noscript_content)

@app.route('/top_nav')
def top_navigation_menu():
    topnav_html = '<div class="top_nav"></div>'
    return jsonify({'html': topnav_html})
    
@app.route('/body')
def body():
    body_html = '<div class="main_body"></div>'
    return jsonify({'html': body_html})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
