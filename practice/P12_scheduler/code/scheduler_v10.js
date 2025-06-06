const schedule = require('node-schedule');

const set = (s) => {
    var rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = [1, 2, 3, 4, 5]; // Monday to Friday
    rule.hour = 23; // 11 PM
    rule.minute = 59; // 59 minutes
    rule.second = 59; // 59 seconds
    rule.tz =  "Asia/Korea"; // Set timezone to Korea

    var job = schedule.scheduleJob(rule, function() {
        console.log('Job executed at: ' + new Date());
        // Add your task logic here
    });

    scheduleObject = job; // Store the job in a global variable if needed
    console.log('Scheduler set for 11:59:59 PM, Monday to Friday in Korea timezone.');  
}

const cancel = () => {
    if (scheduleObject != null && scheduleObject != undefined) {
        scheduleObject.cancel();
        console.log('Scheduler cancelled.');
    } else {
        console.log('No scheduler to cancel.');
    }
}

set();
// Export the set function to be used in other modules  
