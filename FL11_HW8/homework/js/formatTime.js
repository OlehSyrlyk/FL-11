function formatTime(m) {
    let mins = m % 60;
    let hours =Math.floor((m % 1440) / 60);
    let days = Math.floor(m / 1440);
    return `${days} day(s) ${hours} hour(s) ${mins} minute(s)`;
}
console.log(formatTime(59));
console.log(formatTime(120));
console.log(formatTime(3601));