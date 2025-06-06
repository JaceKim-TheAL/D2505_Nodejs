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
