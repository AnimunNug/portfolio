function openPopup(img, text) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-img").src = img;
  document.getElementById("popup-text").innerText = text;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}