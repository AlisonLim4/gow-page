const showImage = (e) => {
  console.log(e.target);
};

const galeria = document.querySelectorAll("div.mundo_img_container img");

galeria.forEach((img) => {
  img.addEventListener("click", showImage);
});
