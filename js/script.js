let dogYear = 3.5;

function calDogAge(year) {
    year = parseFloat(year.trim());

    // Check if input is valid
    if (isNaN(year) || year <= 0) {
        return "Please enter a valid number!";
    };

    if (year - 2 > 0) {
        return 15 + 9 + ((year - 2) * 5);
    } else if (year > 1 && year <= 2) {
        return 15 + ((year - 1) * 9);
    } else {
        return year * 15
    }

}
