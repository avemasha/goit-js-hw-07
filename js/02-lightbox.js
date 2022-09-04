import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryContainer.addEventListener("click", onGalleryClick);

let gallery = new SimpleLightbox(".gallery a");

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
    </a>`;
    })
    .join("");
}

 

function onGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  // let gallery = new SimpleLightbox(".gallery a");

  gallery.on("show.simplelightbox", function () {
    gallery.defaultOptions.captionDelay = 250;
  });
}
