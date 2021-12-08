exports.getDate = function() {
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    let day = today.toLocaleDateString("en-us", options);
    return day;
}

exports.getWeekday = function() {
    const d = new Date();
    let options = {
        weekday: 'long'
    }
    let weekday = d.toLocaleString("en-us", options)
    return weekday;
}