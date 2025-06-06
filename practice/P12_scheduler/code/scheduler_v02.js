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
