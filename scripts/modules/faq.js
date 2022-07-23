const hide = (items, answers) => {
    if (!items.classList.contains('faq__item_show')) return;

    answers.style.height = `${answers.offsetHeight}px`;
    answers.offsetHeight;
    answers.style.display = 'block';
    answers.style.height = 0;
    answers.style.overflow = 'hidden';
    answers.style.transition = 'height 0.36s ease-in-out';
    items.classList.remove('faq__item_show');

    setTimeout(() => {
        answers.style.display = '';
        answers.style.height = '';
        answers.style.overflow = '';
        answers.style.transition = '';
    }, 360);
};
const show = (items, answers) => {
    if (items.classList.contains('faq__item_show')) return;

    answers.style.display = 'block';
    const height = answers.offsetHeight;
    answers.style.height = 0;
    answers.style.overflow = 'hidden';
    answers.style.transition = 'height 0.36s ease-in-out';
    answers.offsetHeight;
    answers.style.height = `${height}px`;
    
    setTimeout(() => {
        items.classList.add('faq__item_show');
        answers.style.display = '';
        answers.style.height = '';
        answers.style.overflow = '';
        answers.style.transition = '';
    }, 360);
};

export const accordion = () => {
    const list = document.querySelector('.faq__list');

    list.addEventListener('click', e => {
        const button = e.target.closest('.faq__question');
        // console.log('button: ', button);
        if (button) {
            const item = button.closest('.faq__item');
            const answer = item.querySelector('.faq__answer');
            item.classList.contains('faq__item_show') ? hide(item, answer) : show(item, answer);
        };
    });
};