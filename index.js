let mobileNavBtn = document.getElementById("mobile-nav-btn");
let mobileNav = document.getElementById("mobile-nav");
let mobileNavCloseBtn = document.getElementById("mobile-nav-close");
let mobileMenuItems = document.getElementsByClassName("nav-item");

let mobileNavToggle = () => {
  mobileNav.classList.toggle("hide");
};

mobileNavBtn.onclick = function () {
  mobileNavToggle();
};

mobileNavCloseBtn.onclick = function () {
  mobileNavToggle();
};

Array.from(mobileMenuItems).forEach((item) => {
    item.onclick = function () {
        mobileNavToggle();

    }
});
