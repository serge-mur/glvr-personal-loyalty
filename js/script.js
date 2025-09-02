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

});