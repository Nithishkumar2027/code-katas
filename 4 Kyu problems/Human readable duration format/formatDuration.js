function formatDuration(num) {
    var seconds = num, minutes = 0, hours = 0, days = 0, years = 0;

    if (seconds === 0) return "now";
    else if (seconds === 1) return "1 second";
    else if (seconds < 60) return seconds + " seconds";

    if (seconds >= 60) {
        minutes = (num - num % 60) / 60;
        seconds = seconds - (minutes * 60);
    }

    if (minutes >= 60) {
        hours = (minutes - minutes % 60) / 60;
        minutes = minutes - (hours * 60);
    }

    if (hours >= 24) {
        days = (hours - hours % 24) / 24;
        hours = hours - (days * 24);
    }

    if (days > 365) {
        years = (days - days % 365) / 365;
        days = days - (years * 365);
    }

    var sentenceArr = [];
    var unitNames = ["years", "days", "hours", "minutes", "seconds"];
    var unitNums = [years, days, hours, minutes, seconds];

    for (var i in unitNums) {
        if (unitNums[i] !== 0) {
            if (unitNums[i] === 1) {
                sentenceArr.push(unitNums[i] + " " + unitNames[i].slice(0, -1) + ", ");
            } else {
                sentenceArr.push(unitNums[i] + " " + unitNames[i] + ", ");
            }

        }

    }

    var length = sentenceArr.length;

    if (length === 1) {
        return sentenceArr[0].slice(0, -2);
    }

    var lastUnit = sentenceArr[sentenceArr.length - 1];
    var secondToLastUnit = sentenceArr[sentenceArr.length - 2];
    var newLastUnit = " and " + lastUnit.slice(0, -2);
    var newSecondToLastUnit = secondToLastUnit.slice(0, -2);
    sentenceArr.splice(length - 2, 2, newSecondToLastUnit, newLastUnit);
    sentence = sentenceArr.join("");

    return sentence;
}


console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
console.log(formatDuration(129600), "1days 12 hour");
