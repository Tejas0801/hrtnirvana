document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count-text');

    counters.forEach(counter => {
        const updateCount = () => {
            const speed = parseInt(counter.getAttribute('data-speed'), 10);
            const target = +counter.getAttribute('data-stop');
            const count = +counter.innerText;
            const increment = target / (speed / 10);

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});

