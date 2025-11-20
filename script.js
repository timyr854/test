// Ждем, пока весь HTML-документ будет загружен
document.addEventListener('DOMContentLoaded', function() {

    // Элементы модального окна
    const modal = document.getElementById('consultationModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Открыть модальное окно при клике на кнопку
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Закрыть модальное окно при клике на крестик
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Закрыть модальное окно при клике outside контента
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Обработка форм (здесь можно добавить отправку на сервер)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Останавливаем стандартную отправку формы
            // Здесь код для отправки данных на сервер (например, с помощью Fetch API)
            alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
            // Очистка формы
            form.reset();
            // Закрытие модального окна, если оно открыто
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Учитываем высоту фиксированной шапки
                    behavior: 'smooth'
                });
            }
        });
    });

});
