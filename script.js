function startCountdown() {
    var dateTimeInput = document.getElementById("date-time-input");
    var countdownContainer = document.getElementById("countdown");
    var countdownComplete = document.getElementById("countdown-complete");
    var countdownText = document.getElementById("countdown-text");
    var countdownTimer = document.getElementById("countdown-timer");

    var countDownDate = new Date(dateTimeInput.value).getTime();
    if (isNaN(countDownDate)) {
        alert("Please enter a valid date and time.");
        return;
    }

    countdownContainer.classList.remove("hidden");
    countdownText.textContent = "Countdown:";
    countdownComplete.classList.add("hidden");

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        if (distance <= 0) {
            clearInterval(x);
            countdownTimer.innerHTML = "00:00:00";
            countdownContainer.classList.add("hidden");
            countdownComplete.classList.remove("hidden");
        } else {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}
