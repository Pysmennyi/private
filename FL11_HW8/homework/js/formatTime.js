function formatTime(a) {
    if (a>0) {
        let days;
        let hours;
        const day = 1440;
        const hour = 24;
        let days_0 = a / day - Math.floor(a / day);
        let hours_0 = days_0 * hour - Math.floor(days_0 * hour);
        days = a / day - days_0;
        hours = (days_0 * hour) - hours_0;
        let minutes = Math.round(hours_0 * 60);
        console.log(days + " day(s) " + hours + " hour(s) " + minutes + " minute(s)");
    }else{
        console.log(0 + " day(s) " + 0 + " hour(s) " + 0 + " minute(s)");
    }
}


formatTime(120);
formatTime(59);
formatTime(3601);