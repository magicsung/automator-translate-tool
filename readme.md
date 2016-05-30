#一鍵翻譯小工具

使用Node js + Automator + Google translate API實作

##DEMO

[Youtube](https://www.youtube.com/watch?v=5Ae7354Jd4M&feature=youtu.be)

##安裝方式

環境 nodejs v4.4.0

1.安裝套件

    npm install

2.開啟專案目錄下 app.js，填入Google translate api key

    const apiKey = 'your_apiKey';

第6行的'en'為翻譯

    googleTranslate.translate(input, 'en', function(err, translation) {

3.執行 automator > 新增 > 服務

3.1.上方選項：

* 服務接收所選的："文字"
* 位置："任何"
* v輸出會取代所選文字

3.2.將 "執行AppleScript" 拖拉至右側，貼上以下內容


    on run {input, parameters}	set input to "'" & input & "'"	tell application "Terminal"		activate		set translatedText to do shell script "/usr/local/bin/node /Users/admin/Projects/local-translate/app.js " & input	end tell	return translatedText	end run

> 這裡需要注意
>
>* /usr/local/bin/node 為node安裝目錄
>* /Users/admin/Projects/local-translate/app.js 專案所在位置

4.儲存
>檔名會是服務名稱

5.到輸入文字得地方，選取文字 > 按右鍵 > 服務 > 選取剛新增的服務


-
>只是為了某個小需求應急用，存在滿多缺陷，請多包涵！
