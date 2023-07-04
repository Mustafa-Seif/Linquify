const asideToggle = document.getElementById("asideToggle");
const mainNav = document.getElementById("main_nav");
const asideToggleLogo = document.getElementById("asideToggleLogo");

const handleSideBar = () => {
  
asideToggleLogo.children[0].style.width='100%'
  mainNav.classList.toggle("hideSide");
  document.querySelectorAll(".text-nav").forEach((el) => {
    el.classList.toggle("hideTextNav");
  });
  document.querySelectorAll(".nav_item").forEach((el) => {
    el.classList.toggle("justify-content-center");
  });
  document.querySelectorAll(".nav_item").forEach((el) => {
    el.classList.toggle("text-center");
  });
  // asideToggle.classList.toggle("hideIconHide");
};

asideToggle.addEventListener("click", handleSideBar);
asideToggleLogo.addEventListener("click", handleSideBar);




