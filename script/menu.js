const btnMobile = document.querySelector("#btn-mobile");

function toggleMenu() {
   const menu = document.querySelector("#menu");
   const h1 = document.querySelector("header h1");
   const img = btnMobile.querySelector("img");

   menu.classList.toggle("active");
   h1.classList.toggle("mobile");
   btnMobile.classList.toggle("mobile");

   if (btnMobile.classList.contains("mobile")) {
      img.src = "../assets/x-symbol-svgrepo-com.svg";
   } else {
      img.src = "../assets/menu-icon.svg";
   }
};

btnMobile.addEventListener("click", toggleMenu);