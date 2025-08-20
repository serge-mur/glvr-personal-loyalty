document.addEventListener('DOMContentLoaded', () => {

    const pointsItemCollapse = document.querySelectorAll('.points-item_collapse');
    pointsItemCollapse.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('points-item_active');
            this.nextElementSibling.classList.toggle('points__sublist_show');
        });
    });

    const questions = document.querySelectorAll('.faq__question');
    questions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('faq__question_active');
            this.nextElementSibling.classList.toggle('faq__answer_show');
        });
    });

    // https://air-datepicker.com/ru
    const input = document.querySelector('.history__date-picker');
    const localeObj = {
        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        today: 'Сегодня',
        clear: 'Очистить',
        dateFormat: 'dd.MM.yyyy',
        timeFormat: 'HH:mm',
        firstDay: 1
    };
    let button = {
        content: 'Применить',
        className: 'custom-button-classname',
        onClick: (dp) => {
            dp.hide();
        }
    }
    const datepicker = new AirDatepicker(input, {
        locale: localeObj,
        range: true,
        multipleDatesSeparator: ' - ',
        buttons: [button, 'clear']
    });

});