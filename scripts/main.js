document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('section, .timeline-entry, .contact-tile, .interest-card, .grid-card').forEach(function (el) {
        el.classList.add('fade-observe');
        observer.observe(el);
    });

    var form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = form.querySelector('.btn');
            btn.textContent = 'Gönderildi!';
            btn.style.background = '#3a7c6a';
            setTimeout(function () {
                btn.textContent = 'Gönder';
                btn.style.background = '';
                form.reset();
            }, 2000);
        });
    }
});
