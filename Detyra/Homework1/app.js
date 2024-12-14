
const year = prompt("Enter a year to find its Chinese Zodiac:");
if (year) {
    const zodiacs = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
    const zodiac = zodiacs[(year - 4) % 12];
    alert(`The year ${year} is the year of the ${zodiac}.`);
} else {
    alert("Invalid input.");
}
