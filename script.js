const projectsData = [
{ title: "Castle", img: "images/project1.jpg" },
{ title: "Village", img: "images/project2.jpg" }
];

const modelsData = [
{ title: "Sword", img: "images/project1.jpg" },
{ title: "Tree", img: "images/project2.jpg" }
];

function render(containerId, data) {
const container = document.getElementById(containerId);

data.forEach(item => {
const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
  <img src="${item.img}">
  <span>${item.title}</span>
`;

card.onclick = () => openModal(item);

container.appendChild(card);
});
}

render("projects", projectsData);
render("models", modelsData);

/* MODAL */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");
const close = document.getElementById("close");

function openModal(item) {
modal.style.display = "flex";
modalImg.src = item.img;
caption.innerText = item.title;
}

close.onclick = () => modal.style.display = "none";

modal.onclick = (e) => {
if (e.target === modal) modal.style.display = "none";
};