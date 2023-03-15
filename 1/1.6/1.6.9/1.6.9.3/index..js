function debounce(f, ms) {
    let time;
    return function() {
        if ((Date.now() - time) < ms) {
            return;
        }
        time = Date.now();
        f.call(this, ...arguments);
    }
}
setTimeout( () => f(3), 100);
setTimeout( () => f(4), 1100);