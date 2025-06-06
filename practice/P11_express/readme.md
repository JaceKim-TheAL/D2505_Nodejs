[![Practice Code](https://skillicons.dev/icons?heiht="10"&i=nodejs,vscode,npm&theme=dark)](../README.md)

<p style="text-align: right"> 
    <a href="../README.md">[INDEX]</a>
</p>

# 간단한 웹서버 구현

### Express
> Node.js 환경에서 웹 애플리케이션을 쉽게 개발할 수 있도록 도와주는 간결하고 유연한 웹 프레임워크 <br/>
- 공식사이트 : https://expressjs.com/ko/ 
- Express 특징
> - **빠른 개발 속도**: 직관적인 API를 제공하여 개발 시간을 단축할 수 있습니다.
> - **높은 확장성**: 다양한 미들웨어를 통해 기능을 확장할 수 있습니다.
> - **라우팅 기능**: HTTP 요청을 처리하는 강력한 라우팅 시스템을 제공합니다.
> - **템플릿 엔진 지원**: Pug, EJS 등 다양한 템플릿 엔진과 연동할 수 있습니다.
> - **비동기 처리 지원**: Node.js의 비동기 특성을 활용하여 높은 성능을 제공합니다.

`Express를 사용하면 간단한 API 서버부터 복잡한 웹 애플리케이션까지 빠르게 구축할 수 있습니다.`

- 패키지 설치
```powershell
npm install express --save
```

> `--save` 옵션은 vozlwlfmf `dependencies` 항목에 추가하는 역할 <br/>
> `npm5.0` 버전 이후 기본값으로 적용되므로 따로 명시하지 않아도 자동으로 추가

```powershell
PS C:\GitHub\D2505_Nodejs\practice> cd .\P11_express\
PS C:\GitHub\D2505_Nodejs\practice\P11_express> npm install express --save

added 66 packages in 1s

14 packages are looking for funding
  run `npm fund` for details
PS C:\GitHub\D2505_Nodejs\practice\P11_express>
PS C:\GitHub\D2505_Nodejs\practice\P11_express> npm fund
P11_express
`-- https://opencollective.com/express
  | `-- express@5.1.0
  +-- https://github.com/sponsors/sindresorhus
  |   `-- merge-descriptors@2.0.0
  +-- https://github.com/sponsors/ljharb
  |   `-- qs@6.14.0, side-channel@1.1.0, object-inspect@1.13.4, side-channel-list@1.0.0, side-channel-map@1.0.1, call-bound@1.0.4, function-bind@1.1.2, get-intrinsic@1.3.0, gopd@1.2.0, has-symbols@1.1.0, side-channel-weakmap@1.0.2
  `-- https://github.com/sponsors/feross
      `-- safe-buffer@5.2.1

PS C:\GitHub\D2505_Nodejs\practice\P11_express>
```
<br/>

### 실습코드
---
[server.js]
```javascript
const express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});
```

#### 실행결과

서버구동
```powershell
PS C:\P11_express\code> node .\code\server.js
Server is running on port 3000

```

http://localhost:3000/
```
Hello World
```
http://localhost:3000/about
```
About Page
```

---
[server.js]
```javascript
const express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {
  res.render('index.html', { title: 'Home Page' })
});

app.get('/about', function(req, res) {
  res.render('about.html', { title: 'About Page' })
});
```


[views/index.html]
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome to My Homepage</h1>
    <p>Express는 Node.js를 위한 웹 어플리케이션 프레임웍입니다.</p>  
</body>
</html>
```


[views/about.html]
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Page</title>
</head>
<body>
    <h1>About Page</h1>
    <p>서브페이지들 보여주자</p>
</body>
</html>
```

#### 실행결과

서버구동
```powershell
PS C:\P11_express\code> node .\code\server.js
Server is running on port 3000

```

http://localhost:3000/
<h1>Welcome to My Homepage</h1>
<p>Express는 Node.js를 위한 웹 어플리케이션 프레임웍입니다.</p>  
<br/>

http://localhost:3000/about
<h1>About Page</h1>
<p>서브페이지들 보여주자</p>


