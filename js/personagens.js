const miniImgs = document.querySelectorAll("div.mini_imgs img");
const centralImgs = document.querySelectorAll("div.card-img_container img");

miniImgs.forEach((img) => {
  img.addEventListener("click", changeImg);
});

//adiciona a mini imagem para o container principal
function changeImg({ target }) {
  const targetSrc = target.src; //guarda o endereço da img target

  centralImgs.forEach((img) => {
    if (img.id === target.id) {
      target.src = img.src;
      img.src = targetSrc;
    }
  });
}
