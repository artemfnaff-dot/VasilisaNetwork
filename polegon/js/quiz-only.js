/* ========================================
   Polegon — Тест: Какая ты мышка?
   Отдельная версия только с квизом
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // === Квиз: Какая ты мышка? ===
    const quizQuestions = [
        {
            question: "Твой скилл в бедварсе?",
            options: [
                { text: "Я тащу катку в соло, 1vs4 - это мой обычный день", type: "a" },
                { text: "Строю форты, собираю, собираю ресы", type: "b" },
                { text: "Какой бедварс? Я тут за мышками пришёл", type: "c" }
            ]
        },
        {
            question: "Твой CPS (кликов в секунду)?",
            options: [
                { text: "50+ CPS, я кликаю быстрее, чем думаю", type: "a" },
                { text: "10-15 CPS, стабильно и без перенапряга", type: "b" },
                { text: "CPS - это что, сантиметры в секунду?", type: "c" }
            ]
        },
        {
            question: "Что для тебя идеальная мышка?",
            options: [
                { text: "Лёгкая, как моё чувство собственного достоинства после поражения", type: "a" },
                { text: "Удобная, чтобы рука не уставала от 12-часовых каток", type: "b" },
                { text: "С подсветкой, чтобы соседи завидовали", type: "c" }
            ]
        },
        {
            question: "Твоя реакция на читера в лобби?",
            options: [
                { text: "Я сам(а) читер(ша)", type: "a" },
                { text: "Выхожу 1vs1 и доказываю, что скилл важнее", type: "b" },
                { text: "Ливаю как лах", type: "c" },
        
            ]
        },
        {
            question: "Как ты выбираешь мышь?",
            options: [
                { text: "Если есть надпись Bloody - сразу покупаю, не смотря на цену", type: "a" },
                { text: "По отзывам и цене, главное - надёжность", type: "b" },
                { text: "Если есть светящееся - то сразу беру", type: "c" }
            ]
        },
        {
            question: "Твоя любимая тактика в бедварсе?",
            options: [
                { text: "Рашу всё, что вижу и не вижу", type: "c" },
                { text: "Хз, как пойдёт", type: "b" },
                { text: "Прилетаю с читами и всех ем", type: "a" }
            ]
        },
        {
            question: "Что важнее в мышке?",
            options: [
                { text: "Производительность, каждый грамм на счету", type: "b" },
                { text: "Эргономика, рука не должна уставать", type: "a" },
                { text: "Светящкэ, конечно!", type: "c" }
            ]
        },
        {
            question: "Твой девиз в игре?",
            options: [
                { text: "Победа любой ценой", type: "c" },
                { text: "Главное - участие и хорошие тиммейты", type: "b" },
                { text: "Тапаю по мышечке своей тап-тап-тап", type: "a" }
            ]
        },
        {
            question: "У тебя есть выбор: Bloody A70 или дом на Майами. Что ты выберешь?",
            options: [
                { text: "Конечно, мою любимую Bloody A70!", type: "a" },
                { text: "Конечно, дом!", type: "b" },
                { text: "Если со светяшками - то мышку", type: "c" }
            ]
        },
        {
            question: "Если Василиса после победы внезапно проигрывает и говорит, что у неё лагает или она поддаётся - это коварный обман или правда?",
            options: [
                { text: "Да, у неё просто залагало, что тут думать-то", type: "a", special: "runaway" },
                { text: "Нет, она просто выпендривается слишком много. Василисы нынче поафигевали", type: "b" }
            ]
        }
    ];

    const quizResults = {
        a: {
            title: "Bloody A9000 HyperBeast Pro Max",
            emoji: "🐉",
            description: "Ты - киберспортивная мышь с душой дракона. Твой скилл вызывает страх у врагов и уважение у коврика.",
            features: [
                "Сенсор, который чувствует намерения врагов до их появления",
                "Клики регистрируются в 14 измерениях одновременно",
                "Встроенный детектор читеров (работает в 100% случаев, но только 31 февраля)",
                "RGB-подсветка, которая ослепляет врагов через монитор",
                "Вес: 37 грамм (вместе с твоей уверенностью)"
            ],
            history: "Создана в секретной лаборатории Bloody. По легенде была выкрадена поехавшим архитектором"
        },
        b: {
            title: "Bloody A67 ChillWave Eternal",
            emoji: "🌊",
            description: "Ты - мышь-дзен. Спокойная, надёжная, как скала в океане хаоса. Твоя сила - в стабильности и мудрости.",
            features: [
                "Батарейка, которая работает дольше, чем твои отношения",
                "Колёсико, вращающееся силой мысли и медитации",
                "Встроенный будильник, который будит только в хорошие дни",
                "Поддержка технологии «Анти-тильт» (защищает от расстройств)",
                "Совместима с Windows, macOS и конечно Nintendo Switch"
            ],
            history: "Эта мышь была найдена в древнем храме. Монахи медитировали на неё 1000 лет, прежде чем она обрела просветление. Теперь она передаёт свою мудрость через каждый клик, напоминая: главное не победа, а процесс (но победа тоже неплохо)."
        },
        c: {
            title: "Bloody A✨ RainbowDream Ultra",
            emoji: "🦄",
            description: "Ты - мышь-единорог. Яркая, непредсказуемая, существующая вне законов физики и здравого смысла.",
            features: [
                "RGB-подсветка всех 7 цветов радуги символизирующая о ЛГБТ просветлении в обществе",
                "Встроенный проектор для показа мемов прямо на стол",
                "Клики звучат как аплодисменты (включается автоматически при победе)",
                "Заряжается от зависти окружающих",
                "В комплекте идёт открывашка для пива (чисто на всякий случай)"
            ],
            history: "Создана случайно, когда инженер Bloody пытался сделать самую красивую мышь в мире, но перепутал чертежи с проектом новой гири в спорт клубе. Теперь эта мышь светится так ярко, что может заменить настольную лампу. А ещё она умеет орать на тиммейтов за тебя"
        },
        d: {
            title: "Bloody A700 Vasilisa Difinitive Edition",
            emoji: "👑",
            description: "Мышка при жизни ставшая легендой. Народная мышка советского союза, Украины, России и даже Чечено Ингушетии. Лауреат государственной премии СССР и Ленинского Комсомола. Признанная, известная, авторитетная. Но потом я подумав я все таки решил начать иначе. Сегодня у нас в гостях мышка которая творила эту эпоху и которая сама стала эпохой. Мышка котрую я очень сильно уважаю и люблю.",
            features: [
                "Сенсор, который читает мысли врагов за 3 дня до матча",
                "Клики, которые стирают грань между победой и поражением",
                "Встроенная технология «Лаги только у соперника» (активируется взглядом)",
                "RGB-подсветка, которая освещает путь к истине",
                "Вес: 0 грамм (потому что ты выше материи)",
                "Автоматически включает режим «Бог» при необходимости",
                "Совместима с альтернативными реальностями"
            ],
            history: "Эта мышь не была создана - она всегда существовала. Древние свитки гласят что вполне вероятно эта мышка и истребила динозавров начав новую эпоху."
        }
    };

    let currentQuestion = 0;
    let quizScores = { a: 0, b: 0, c: 0, d: 0 };
    let secretConditionMet = false;

    const quizQuestionsEl = document.getElementById('quiz-questions');
    const quizResultEl = document.getElementById('quiz-result');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const closeQuizBtn = document.getElementById('close-quiz-btn');

    function renderQuiz() {
        currentQuestion = 0;
        quizScores = { a: 0, b: 0, c: 0, d: 0 };
        secretConditionMet = false;
        quizQuestionsEl.style.display = 'block';
        quizResultEl.style.display = 'none';
        renderQuestion();
    }

    function renderQuestion() {
        quizQuestionsEl.innerHTML = '';

        // Прогресс бар
        const progressDots = document.createElement('div');
        progressDots.className = 'quiz-progress';
        for (let i = 0; i < quizQuestions.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'quiz-progress-dot';
            if (i < currentQuestion) dot.classList.add('completed');
            if (i === currentQuestion) dot.classList.add('active');
            progressDots.appendChild(dot);
        }
        quizQuestionsEl.appendChild(progressDots);

        // Вопрос
        const q = quizQuestions[currentQuestion];
        const questionEl = document.createElement('div');
        questionEl.className = 'quiz-question active';
        questionEl.innerHTML = `
            <h3>${q.question}</h3>
            <div class="quiz-options"></div>
        `;
        quizQuestionsEl.appendChild(questionEl);

        const optionsEl = questionEl.querySelector('.quiz-options');
        
        // Проверка: это вопрос с троллингом?
        const isRunawayQuestion = q.options.some(opt => opt.special === 'runaway');
        
        if (isRunawayQuestion) {
            // Сохраняем оригинальные тексты для сравнения
            const originalTextA = q.options[0].text;
            const originalTextB = q.options[1].text;
            
            // Создаём кнопки для вопроса с троллингом
            const optionButtons = [];
            q.options.forEach((opt, idx) => {
                const optionBtn = document.createElement('div');
                optionBtn.className = 'quiz-option';
                optionBtn.textContent = opt.text;
                optionBtn.style.position = 'relative';
                optionBtn.style.zIndex = '10';
                optionButtons.push(optionBtn);
            });
            
            // Общий обработчик для обеих кнопок
            optionButtons.forEach((btn, btnIndex) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Проверяем текст кнопки в момент клика
                    const btnText = btn.textContent.trim();
                    
                    // Если кликнули на текст "Да, у неё просто залагало..." — меняем местами (троллинг!)
                    if (btnText === originalTextA) {
                        const optionA = optionButtons[0];
                        const optionB = optionButtons[1];
                        
                        // Плавная анимация обмена позиций
                        const rectA = optionA.getBoundingClientRect();
                        const rectB = optionB.getBoundingClientRect();
                        const containerRect = optionsEl.getBoundingClientRect();
                        
                        const posA = rectA.top - containerRect.top;
                        const posB = rectB.top - containerRect.top;
                        
                        optionA.style.transition = 'transform 0.4s ease';
                        optionB.style.transition = 'transform 0.4s ease';
                        optionA.style.transform = `translateY(${posB - posA}px)`;
                        optionB.style.transform = `translateY(${posA - posB}px)`;
                        
                        setTimeout(() => {
                            const tempText = optionA.textContent;
                            optionA.textContent = optionB.textContent;
                            optionB.textContent = tempText;
                            
                            optionA.style.transition = '';
                            optionB.style.transition = '';
                            optionA.style.transform = '';
                            optionB.style.transform = '';
                        }, 400);
                    } else if (btnText === originalTextB) {
                        // Кликнули на "Нет, она просто выпендривается..." — засчитываем и идём дальше
                        quizScores['b']++;
                        currentQuestion++;
                        if (currentQuestion < quizQuestions.length) {
                            renderQuestion();
                        } else {
                            showResult();
                        }
                    }
                });
            });
            
            optionButtons.forEach(btn => optionsEl.appendChild(btn));
        } else {
            // Обычные вопросы без троллинга
            q.options.forEach((opt, idx) => {
                const optionBtn = document.createElement('div');
                optionBtn.className = 'quiz-option';
                optionBtn.textContent = opt.text;
                optionBtn.addEventListener('click', () => {
                    quizScores[opt.type]++;

                    // Проверка условия для секретной мышки (вопрос 9: Bloody A70 vs дом на Майами)
                    if (opt.type === 'a' && currentQuestion === 8) {
                        secretConditionMet = true;
                    }

                    currentQuestion++;
                    if (currentQuestion < quizQuestions.length) {
                        renderQuestion();
                    } else {
                        showResult();
                    }
                });
                optionsEl.appendChild(optionBtn);
            });
        }
    }

    function showResult() {
        // Определяем результат
        const maxScore = Math.max(quizScores.a, quizScores.b, quizScores.c);
        let resultType = 'c';

        // Секретная мышка Василиса — ТОЛЬКО если выполнено условие
        if (secretConditionMet && quizScores.a >= maxScore) {
            resultType = 'd';
        } else if (quizScores.b === maxScore && quizScores.b >= quizScores.a && quizScores.b >= quizScores.c) {
            resultType = 'b';
        } else if (quizScores.c === maxScore && quizScores.c >= quizScores.a && quizScores.c >= quizScores.b) {
            resultType = 'c';
        } else if (quizScores.a === maxScore && quizScores.a >= quizScores.b && quizScores.a >= quizScores.c) {
            resultType = secretConditionMet ? 'd' : 'a';
        }

        const result = quizResults[resultType];

        quizQuestionsEl.style.display = 'none';
        quizResultEl.style.display = 'block';

        document.getElementById('result-title').textContent = result.emoji + ' ' + result.title;
        document.getElementById('result-description').textContent = result.description;

        const featuresEl = document.getElementById('result-features');
        featuresEl.innerHTML = '';
        result.features.forEach(f => {
            const li = document.createElement('li');
            li.textContent = f;
            featuresEl.appendChild(li);
        });

        document.getElementById('result-history').textContent = result.history;

        // Плейсхолдер с эмодзи
        const placeholder = quizResultEl.querySelector('.result-mouse-placeholder');
        placeholder.innerHTML = result.emoji;
    }

    // Перезапуск квиза
    if (restartQuizBtn) {
        restartQuizBtn.addEventListener('click', () => {
            renderQuiz();
        });
    }

    // Запуск квиза
    renderQuiz();
});
