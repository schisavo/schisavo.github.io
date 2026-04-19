/* ·················· SideBar Controller ·················· */
/* Hamburger Menu */
const hamburgerBtn = document.getElementById("sidebarBtn");
const sidebar = document.getElementById("sidebar");
const links = document.querySelectorAll(".sidebar__link");

// Open/Close sidebar
hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  hamburgerBtn.classList.toggle("moved");
});

// close when we select a section
links.forEach(li => {
  li.addEventListener("click", () => {
    sidebar.classList.remove("show");
    hamburgerBtn.classList.remove("moved");
  });
});

