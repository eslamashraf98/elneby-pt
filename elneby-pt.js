const navMenu = document.querySelector("#navMenu");

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});



// var nav = document.querySelector(".navbar");
// var x = window.matchMedia("(min-width: 767px;)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) 

// function myFunction(x){
//   if (x.matches) {
//     nav.style.display = "none";
// }};