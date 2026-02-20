/* ========================================
   Polegon — Главный хаб проектов
   JavaScript логика
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // === Переключение экранов ===
    function showScreen(screenId) {
        // Скрываем все экраны
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Показываем нужный экран
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');

            // Прокрутка вверх
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // === Обработка кнопок меню ===
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            if (target) {
                showScreen(target);
            }
        });
    });

    // === Обработка кнопок назад ===
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            if (target) {
                showScreen(target);
            }
        });
    });

    // === Анимация появления карточек при прокрутке ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за карточками проектов
    document.querySelectorAll('.project-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`;
        observer.observe(el);
    });

    // === Обработка кликов по "Скоро..." карточкам ===
    document.querySelectorAll('.project-coming-soon').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            // Небольшая анимация "тряски" при клике
            card.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                card.style.animation = '';
            }, 500);
        });
    });

    // === Добавляем анимацию тряски в CSS ===
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
    `;
    document.head.appendChild(style);

});
