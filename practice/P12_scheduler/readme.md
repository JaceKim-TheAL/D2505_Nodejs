[![Practice Code](https://skillicons.dev/icons?heiht="10"&i=nodejs,vscode,npm&theme=dark)](../README.md)

<p style="text-align: right"> 
    <a href="../README.md">[INDEX]</a>
</p>

# 스케쥴러 구현
> - node-schedule 이라는 모듈을 설치하고, 스케줄러 기능을 빠르게 구현
> - 스케줄러는 특정일자/요일/시간/분/초에 지정된 프로그램을 동작시키게 해준다.
> - [[참조]](https://www.youtube.com/watch?v=zajq7NJflPY)

---

<!-->
<style>
  .indent {
    text-indent: 2em; /* 원하는 크기로 조정 가능 */
  }
</style>
-->

### 스케쥴러 패키지 설치
- [[node-schedule]](https://www.npmjs.com/package/node-schedule) 설치
- 작업을 특정 시간에 실행할 수 있도록 도와주는 스케줄링 라이브러리
- 이를 사용하면 cron 스타일 또는 날짜 기반으로 작업을 예약
- 주요기능
<ol class="indent"> ▸ 특정 시간에 함수 실행 (예: 매일 오전 9시에 실행) </ol>
<ol class="indent"> ▸ 반복 작업 예약 (예: 매주 월요일마다 실행) </ol>
<ol class="indent"> ▸ 이벤트 기반 작업 관리 (예: 실행, 취소, 오류 감지) </ol> 
- 설치방법
```powershell
npm install node-schedule
```
- 사용예시
```javascript
const schedule = require('node-schedule');

// 매일 오전 9시에 실행
const job = schedule.scheduleJob('0 9 * * *', function(){
    console.log('매일 오전 9시에 실행됩니다!');
});

// 작업 취소
job.cancel();
```

---



