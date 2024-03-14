// Step 1
function isValidDate(dateString) {
    // Check if is a string and has the correct length of dd/mm/yyyy format
    if (typeof dateString !== 'string' || dateString.length !== 10) {
        return false;
    }

    // Extract date parts
    const parts = dateString.split('/');
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const year = parseInt(parts[2]);

    // Check if the date parts are valid numbers
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }

    // Check if the day is valid (between 1 and 31)
    if (day < 1 || day > 31) {
        return false;
    }

    // Check if the month is valid (between 1 and 12)
    if (month < 1 || month > 12) {
        return false;
    }

    // Check if the year is valid
    if (year < 1000 || year > 9999) {
        return false;
    }

    // Check the validity of the day according to the month
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day > daysInMonth) {
        return false;
    }

    // If all checks pass, the date is valid
    return true;
}

console.log("30/02/2024 is a valid date : " + isValidDate("30/02/2024"));
console.log("29/02/2025 is a valid date : " + isValidDate("29/02/2025"));
console.log("29/02/2028 is a valid date : " + isValidDate("29/02/2028"));