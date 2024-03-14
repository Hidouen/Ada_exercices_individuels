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

console.log('Step 1 :');
const falseDate1 = "30/02/2024";
const falseDate2 = "29/02/2025";
const trueDate1 = "29/02/2028";
console.log(falseDate1 + " is a valid date : " + isValidDate(falseDate1));
console.log(falseDate2 + " is a valid date : " + isValidDate(falseDate2));
console.log(trueDate1 + " is a valid date : " + isValidDate(trueDate1));

// Step 2
function isPalindrome(dateString) {

    // check if the date is realistic with the right format
    if (!isValidDate(dateString)) {
        return false;
    }

    const dateWithoutSlash = dateString.replace(/\//g, '');

    // Check if the date string is equal to its reverse
    return dateWithoutSlash === dateWithoutSlash.split('').reverse().join('');
}

console.log('\nStep 2 :');
const falseDate3 = "29/02/2029";
const falsePalindrome = "28/02/2028";
const truePalindrome = "11/02/2011";
console.log(falseDate3 + " is a valid date and a palindrome : " + isPalindrome(falseDate3));
console.log(falsePalindrome + " is a valid date and a palindrome : " + isPalindrome(falsePalindrome));
console.log(truePalindrome + " is a valid date and a palindrome : " + isPalindrome(truePalindrome));

// Step 3
function getNextPalindromes(x) {
    const today = new Date();
    let foundPalindromes = [];
    let currentDate = new Date(today);

    while (foundPalindromes.length < x) {
        // Parse date to the right format dd/mm/yyyy
        const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
        // Check if the date is palindrome
        if (isPalindrome(formattedDate)) {
            foundPalindromes.push(formattedDate);
        }
        // check next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return foundPalindromes;
}

console.log('\nStep 3 :');
console.log('The 8 next dates from today that are palindromes :');
console.log(getNextPalindromes(8));