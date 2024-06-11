document.getElementById('surpriseButton').addEventListener('click', function() {
    var duration =250   ;
    var end = Date.now() + duration;

    (function frame() {
        var timeLeft = end - Date.now();

        confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });

        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    }());

    // Mostrar a foto após um pequeno atraso para sincronizar com os confetes
    setTimeout(function() {
        document.getElementById('photoContainer').classList.remove('hidden');
        document.getElementById('photoContainer').scrollIntoView({ behavior: 'smooth' });
    }, 1000);
});
