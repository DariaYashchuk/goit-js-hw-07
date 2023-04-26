import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </li>
    `;
    })
    .join("");
}

const galleryContainer = document.querySelector(".gallery");
const galleryWithItems = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryWithItems);

galleryContainer.addEventListener("click", onItemClick);

function onItemClick(evt) {
  evt.preventDefault();

  const isGalleryItem = evt.target.classList.contains("gallery__image");

  if (!isGalleryItem) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryContainer.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
