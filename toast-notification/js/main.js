const button = document.getElementById('btn');
const toasts = document.getElementById('toasts');

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four', 'Message Five'];

button.addEventListener('click', () => createNotification());

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = getRandomMassege();
    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function getRandomMassege() {
    return messages[Math.floor(Math.random() * messages.length)];
}
