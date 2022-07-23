const hide = (items, answers) => {
    // if (!items.classList.contains('faq__item_show') || items.classList.contains('collapsing')) return;
    if (!items.classList.contains('faq__item_show') || items.collapsing) return;

    answers.style.height = `${answers.offsetHeight}px`;
    answers.offsetHeight;
    answers.style.display = 'block';
    answers.style.height = 0;
    answers.style.overflow = 'hidden';
    answers.style.transition = 'height 0.36s ease-in-out';
    items.classList.remove('faq__item_show');
    // items.classList.add('collapsing');
    items.collapsing = true;

    setTimeout(() => {
        answers.style.display = '';
        answers.style.height = '';
        answers.style.overflow = '';
        answers.style.transition = '';
        // items.classList.remove('collapsing');
        items.collapsing = false;
    }, 360);
};
const show = (items, answers) => {
    // if (items.classList.contains('faq__item_show') || items.classList.contains('collapsing')) return;
    if (items.classList.contains('faq__item_show') || items.collapsing) return;

    answers.style.display = 'block';
    const height = answers.offsetHeight;
    answers.style.height = 0;
    answers.style.overflow = 'hidden';
    answers.style.transition = 'height 0.36s ease-in-out';
    answers.offsetHeight;
    answers.style.height = `${height}px`;
    // items.classList.add('collapsing');
    items.collapsing = true;
    
    setTimeout(() => {
        items.classList.add('faq__item_show');
        answers.style.display = '';
        answers.style.height = '';
        answers.style.overflow = '';
        answers.style.transition = '';
        // items.classList.remove('collapsing');
        items.collapsing = false;
    }, 360);
};

export const accordion = () => {
    const list = document.querySelector('.faq__list');
    const faqItems = document.querySelectorAll('.faq__item');

    list.addEventListener('click', e => {
        const button = e.target.closest('.faq__question');
        // console.log('button: ', button);
        if (button) {
            const item = button.closest('.faq__item');
            faqItems.forEach((faqItem, i) => {
                const answer = faqItem.querySelector('.faq__answer');
                if (item === faqItem) {
                    faqItem.classList.contains('faq__item_show') ? hide(faqItem, answer) : show(faqItem, answer);
                } else {
                    hide(faqItem, answer);
                }
            });
        }
    });
};