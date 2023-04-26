import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryWithItems = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryWithItems);

galleryContainer.addEventListener("click", onItemClick);

function onItemClick(evt) {
  evt.preventDefault();
}

let lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionPosition: "bottom",
  captionDelay: "250",
});
