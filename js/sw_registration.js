navigator.serviceWorker.register('./sw.js').then((reg) => {
    console.log('Service worker registered.');
}).catch(() => {
    console.log('Service worker registration failed.');
});
