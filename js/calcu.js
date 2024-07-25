document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let startDateTime = new Date(document.getElementById('startDateTime').value);
    let hoursToSubtract = parseInt(document.getElementById('hoursToSubtract').value);

    let result = subtractBusinessHours(startDateTime, hoursToSubtract);

    document.getElementById('finalDateTime').textContent = result.toLocaleString();
});

function subtractBusinessHours(date, hours) {
    let hoursSubtracted = 0;

    while (hoursSubtracted < hours) {
        date.setHours(date.getHours() - 1);

        let currentHour = date.getHours();

        if (currentHour >= 6 && currentHour < 18) {
            hoursSubtracted++;
        }
    }

    return date;
}