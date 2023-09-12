DESC:
使用[https://www.websequencediagrams.com/](Web流程图)来描述
“用户使用单页版应用创建新笔记的情况”
title what-happened-after-create-a-spa-note
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
server-->browser: {"message": "note created"}


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
