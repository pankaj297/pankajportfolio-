


const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header-section");

const toggleNavbar = () => {
  // alert("Hello javaScript");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());



function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}



