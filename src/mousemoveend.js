const mousemoveend = (function () {
    let timeout;
    document.addEventListener('mousemove', e => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const event = new CustomEvent('mouseend', {
                detail: {
                    clientX: e.clientX,
                    clientY: e.clientY
                },
                bubbles: true,
                cancelable: true
            });
            e.target.dispatchEvent(event);
        }, 100);
    });
}());