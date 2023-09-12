DESC:
使用[https://www.websequencediagrams.com/](Web流程图)来描述
“当用户把东西写进文本字段并点击Submit按钮，在（https://studies.cs.helsinki.fi/expamleapp/notes）页上创建一个新笔记的情况。”

title what-happened-after-submit-a-note
browser->server: HTTP POST https://studies.cs.helsinki.ki/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
