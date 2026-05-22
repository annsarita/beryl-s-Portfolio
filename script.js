document.addEventListener('DOMContentLoaded', () => {

    const greetingElement = document.createElement('p');
    greetingElement.className = 'live-greeting';

    const currentHour = new Date().getHours();
    let greetingText = "Welcome";

    if (currentHour < 12) {
        greetingText = "✨ Good Morning";
    } else if (currentHour < 18) {
        greetingText = "☀️ Good Afternoon";
    } else {
        greetingText = "🌙 Good Evening";
    }

    greetingElement.textContent = ${ greetingText }, visit my space;

    const oldBadge = document.querySelector('.badge-tag');
    if (oldBadge) {
        oldBadge.textContent = greetingText;
    }

    console.log(Portfolio script initialized.Local hour detected: ${ currentHour }:00);
});