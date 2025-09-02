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

    // offcanvas
    const offcanvasLink = document.querySelectorAll('.offcanvas-link');
    offcanvasLink.forEach(link => {
        const target = link.dataset.target;
        const offcanvas = document.getElementById(target);
        const offcanvasClose = offcanvas.querySelector('.offcanvas__close');
        const offcanvasOverlay = offcanvas.querySelector('.offcanvas__overlay');
        const offcanvasWrapper = offcanvas.querySelector('.offcanvas__wrapper');      
        link.addEventListener('click', () => {
            offcanvas.classList.add('offcanvas_open');
            document.body.classList.add("remove-scrolling");
        });
        offcanvasClose.addEventListener('click', () => {
            offcanvas.classList.remove('offcanvas_open');
            document.body.classList.remove("remove-scrolling");
        });
        offcanvasOverlay.addEventListener('click', () => {
            offcanvas.classList.remove('offcanvas_open');
            document.body.classList.remove("remove-scrolling");
        });
    });

});