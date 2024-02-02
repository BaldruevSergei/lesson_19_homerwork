document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        { id: 1, text: "Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития." },
        { id: 2, text: "Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Таким образом реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий." },
        { id: 3, text: "Не следует, однако забывать, что сложившаяся структура организации позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации форм развития." },
        { id: 4, text: "Задача организации, в особенности же укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Товарищи! сложившаяся структура организации в значительной степени обуславливает создание дальнейших направлений развития." }
    ];

    let currentIndex = 0;

    const textContainer = document.querySelector('.text_container');
    const currentTextDiv = document.createElement('div');
    currentTextDiv.className = 'current_text';
    textContainer.appendChild(currentTextDiv);

    const btnsContainer = document.createElement('div');
    btnsContainer.className = 'btns';
    textContainer.appendChild(btnsContainer);

    // Создание и добавление стрелок динамически
    const arrowsContainer = document.createElement('div');
    arrowsContainer.className = 'arrows';
    arrowsContainer.style.position = 'fixed';
    arrowsContainer.style.bottom = '20px';
    arrowsContainer.style.right = '20px';

    const leftArrow = document.createElement('button');
    leftArrow.id = 'left-arrow';
    leftArrow.textContent = '←';

    const rightArrow = document.createElement('button');
    rightArrow.id = 'right-arrow';
    rightArrow.textContent = '→';

    arrowsContainer.appendChild(leftArrow);
    arrowsContainer.appendChild(rightArrow);
    document.body.appendChild(arrowsContainer);

    // Функция для обновления отображаемого текста
    function updateText(index) {
        currentTextDiv.textContent = texts[index].text;
    }

    // Генерация кнопок на основе массива texts
    texts.forEach((item, index) => {
        const button = document.createElement('button');
        button.textContent = `${index + 1} текст`;
        button.addEventListener('click', () => {
            currentIndex = index;
            updateText(currentIndex);
        });
        btnsContainer.appendChild(button);
    });

    // Обработчики событий для стрелок
    leftArrow.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : texts.length - 1;
        updateText(currentIndex);
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = currentIndex < texts.length - 1 ? currentIndex + 1 : 0;
        updateText(currentIndex);
    });

    // Инициализация с первым текстом
    updateText(currentIndex);
});
