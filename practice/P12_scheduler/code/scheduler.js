const schedule = require('node-schedule');

// 매일 오전 9시에 실행
// const job = schedule.scheduleJob('0 9 * * *', function(){
//     console.log('매일 오전 9시에 실행됩니다!');
// });

const job = schedule.scheduleJob('1 * * * *', function(){
    // console.log('매일 오전 9시에 실행됩니다!');
    console.log('매 분 1초에 실행됩니다! 현재 시간: ' + new Date());        
});

// 작업 취소
job.cancel();
