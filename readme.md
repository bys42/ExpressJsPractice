# Readme

## 專案啟動流程

1. 安裝專案所需模組

```
$ npm install
```

2. 重新下載或直接放置有效的Firebase KEY至專案根目錄並重新命名為json.key

Firebase KEY產生流程
- 進入Firebase官網並且選取專案 https://firebase.google.com/。
- 點選專案Project Overview右側的「齒輪圖樣」並選擇「專案設定」。
- 點選「服務帳戶」。
- 於服務帳戶頁面點選下方的「產生新的私密金鑰」即可產生新的有效金鑰。
- 取得私密金鑰後重新命名為「key.json」並放置於專案根目錄上。

**注意，一旦產生新的私密金鑰，舊有的私密金鑰將立即失效**

3. 啟動專案

```
$ nodemon
```

電腦若未安裝過nodemon請先輸入
```
$ npm i -g nodemon
```

## 產生一個Express專案

```
$ express --view=ejs 專案名稱
```

進入專案資料夾
```
$ cd 專案名稱
```

安裝所需套件
```
$ npm install
```