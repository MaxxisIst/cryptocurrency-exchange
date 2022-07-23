const advantageBtns = document.querySelectorAll('.advantage__btn');
const advantageItemsContent = document.querySelectorAll('.advantage__item-content');

advantageBtns.forEach((advantageBtn, i) => {
    advantageBtn.addEventListener('click', () => {
        advantageItemsContent.forEach((advantageItemContent, j) => {
            if (i === j) {
                advantageBtn.classList.add('advantage__btn_active');
                advantageItemContent.classList.add('advantage__item-content_active');
            } else {
                advantageBtns[j].classList.remove('advantage__btn_active');
                advantageItemsContent[j].classList.remove('advantage__item-content_active');
            }
        });
        // for (let j = 0; j <= advantageItemsContent.length; j++) {
        //     if (i === j) {
        //         advantageBtn.classList.add('advantage__btn_active');
        //         advantageItemsContent[j].classList.add('advantage__item-content_active');
        //     } else {
        //         advantageBtn[j].classList.remove('advantage__btn_active');
        //         advantageItemsContent[j].classList.remove('advantage__item-content_active');
        //     }
        // }
    });
});