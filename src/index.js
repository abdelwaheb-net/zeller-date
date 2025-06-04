// index.js

function zeller(day, month, year) {
    if (month < 3) {
        month += 12;
        year -= 1;
    }

    const q = day;
    const m = month;
    const K = year % 100;
    const J = Math.floor(year / 100);

    const h = (q + Math.floor((13 * (m + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) + 5 * J) % 7;

    return h;
}

const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function getDayName(day, month, year) {
    const h = zeller(day, month, year);
    return daysOfWeek[h];
}

module.exports = {
    zeller,
    getDayName
};
