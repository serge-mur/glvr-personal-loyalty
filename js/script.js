document.addEventListener('DOMContentLoaded', () => {

    const questions = document.querySelectorAll('.faq__question');
  
    questions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
        });
    });

});