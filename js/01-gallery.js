// Задание 1 - галерея изображений

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');  
const galleryMakrup = createGalleryMarkup(galleryItems); 

galleryRef.insertAdjacentHTML('beforeend', galleryMakrup);
galleryRef.addEventListener('click', onGalleryItemClick);

// создание динамичесой разметки
function createGalleryMarkup(gelleryItem) {
    return gelleryItem.map(({ preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })
        .join(``);
}

// Обработка события Click
function onGalleryItemClick(evt) {
    const isImageEl = evt.target.classList.contains('gallery__image');
    const imageSrc = evt.target.dataset.source;
    
// запрещаю открытие на новой сранице
    evt.preventDefault();
    if (!isImageEl) {
        return;
    }
    
// добавил изображение в basicLightbox для отображения на экране
    const instance  = basicLightbox.create(`<img src="${imageSrc}">`)
    instance.show()

// закрытие модального окна по нажатию клавиши Escape
    document.addEventListener("keydown", evt => {
        if (evt.key != 'Escape') {
            return;
        };
    instance.close()
    });   
}

console.log(galleryItems);

