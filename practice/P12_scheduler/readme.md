[![Practice Code](https://skillicons.dev/icons?heiht="10"&i=nodejs,vscode,npm&theme=dark)](../README.md)

<p style="text-align: right"> 
    <a href="../README.md">[INDEX]</a>
</p>

# 스케쥴러 구현
> - [node-schedule](https://www.npmjs.com/package/node-schedule) 이라는 모듈을 설치하고, 스케줄러 기능을 빠르게 구현
> - [스케줄러](https://www.youtube.com/watch?v=zajq7NJflPY)는 특정일자/요일/시간/분/초에 지정된 프로그램을 동작시키게 해준다.
<br/>

<!--
<style>
  .indent {
    text-indent: 2em; /* 원하는 크기로 조정 가능 */
  }
</style>
-->

---

### 1. 스케쥴러 패키지 설치
> node-schedule : 작업을 특정 시간에 실행할 수 있도록 도와주는 스케줄링 라이브러리 <br/>
> 이를 사용하면 cron 스타일 또는 날짜 기반으로 작업을 예약
- 공식문서 : [[node-schedule]](https://www.npmjs.com/package/node-schedule)
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
- Cron-style Scheduling
```text
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

```

---
### 실습코드1
```javascript
const schedule = require('node-schedule');

let scheduleObject = null; // Global variable to store the scheduled job

const set = () => {
    var rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = [1, 2, 3, 4, 5]; // Monday to Friday
    rule.hour      = 23;              // 11 PM
    rule.minute    = 59;              // 59 minutes
    rule.second    = 59;              // 59 seconds
    rule.tz        =  "Asia/Seoul";   // Set timezone to Korea (Seoul)

    var job = schedule.scheduleJob(rule, function() {
        console.log('Job scheduler has executed at: ' + new Date());
    });

    scheduleObject = job; // Store the job in a global variable if needed
    console.log('Scheduler set for 11:59:59 PM, Monday to Friday in Seoul timezone.');
}

const cancel = () => {
    if (scheduleObject != null && scheduleObject != undefined) {
        scheduleObject.cancel();
        console.log('Scheduler cancelled.');
    }
}

const setScheduler = () => {
    cancel();
    set();
}

setScheduler();

```


---
### 실습코드2
```javascript
const schedule = require('node-schedule');

let scheduleObject = null; // Global variable to store the scheduled job

const set = (s) => {
    var rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = s.dayOfWeek;
    rule.hour   = s.hour;
    rule.minute = s.minute;
    rule.tz     =  s.timezone;

    var job = schedule.scheduleJob(rule, function() {
        console.log('Job scheduler has executed at: ' + new Date());
        // Add your task logic here
    });

    scheduleObject = job; // Store the job in a global variable if needed
    console.log('Scheduler set for 11:59:59 PM, Monday to Friday in Seoul timezone.');  
}

const cancel = () => {
    if (scheduleObject != null && scheduleObject != undefined) {
        scheduleObject.cancel();
        console.log('Scheduler cancelled.');
    } 
}

const setScheduler = (s) => {
    cancel();  
    set(s);
}

const schedulerData = {
    dayOfWeek: [1, 2, 3, 4, 5], // Monday to Friday
    hour: 23, // 11 PM  
    minute: 59, // 59 minutes
    second: 59, // 59 seconds
    timezone: "Asia/Seoul" // Set timezone to Korea (Seoul)
};

setScheduler(schedulerData);

```

