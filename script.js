// Birthday Countdown
function updateCountdown() {
  const birthday = new Date("February 27, 2026 00:00:00");
  const now = new Date();
  const diff = birthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);

  const countdown = document.getElementById("countdown");
  if (countdown) {
    countdown.innerHTML =
      days + " days " + hours + " hours " + minutes + " minutes left 💕";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Navigation between pages
function goTo(page) {
  window.location.href = page;
}
