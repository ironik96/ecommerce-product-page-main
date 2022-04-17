const sideOverlay = document.getElementById("overlay");
const itemQuantity = document.getElementById("qty-counter");
let qtyCounter = 0;
itemQuantity.innerHTML = qtyCounter;

function closeSidePanel() {
  sideOverlay.classList.add("hidden");
}
function openSidePanel() {
  sideOverlay.classList.remove("hidden");
}

function changePicture(movement) {
  const [min, max] = [1, 4];
  const currentPicture = document.getElementById("image").getAttribute("src");
  const imgNumber = /\d/gm;
  const currentPictureIndex = parseInt(currentPicture.match(imgNumber)[0]);
  let movedPicture = currentPicture;
  if (movement === "next" && currentPictureIndex !== max)
    movedPicture = `/images/image-product-${currentPictureIndex + 1}.jpg`;
  if (movement === "prev" && currentPictureIndex !== min)
    movedPicture = `/images/image-product-${currentPictureIndex - 1}.jpg`;

  document.getElementById("image").setAttribute("src", movedPicture);
}

function changePictureAndFocus(id) {
  const picture = `/images/image-product-${id}.jpg`;
  document.getElementById("image").setAttribute("src", picture);

  for (let i = 1; i <= 4; i++) {
    const overlayClassList = document.getElementById(`to-${i}`).classList;
    if (i === id) {
      overlayClassList.remove("hidden");
      overlayClassList.add("border-2");
      overlayClassList.add("border-Orange");
    } else {
      overlayClassList.add("hidden");
      overlayClassList.remove("border-2");
      overlayClassList.remove("border-Orange");
    }
  }
}

function incrementCounter() {
  qtyCounter += 1;
  itemQuantity.innerHTML = qtyCounter;
}
function decrementCounter() {
  if (qtyCounter > 0) qtyCounter--;
  itemQuantity.innerHTML = qtyCounter;
}
