const menuBtn = document.querySelector(".js-menu-btn");
const menuList = document.querySelector(".js-menu-list");


const myFunction = () => {
    console.log("hello");
    menuList.classList.toggle("hidden");

  }

  menuBtn.addEventListener("click", myFunction);
