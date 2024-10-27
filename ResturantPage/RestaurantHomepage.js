const navbarbtn = document.querySelector(".navbarbtn");
const navLinks = document.getElementById("nav-links");
const navLinks2 = document.querySelectorAll("nav ul li a");

navbarbtn.addEventListener("click", function() {
    navLinks.classList.toggle("nav-bar-contents-hide")
    // navLinks.style.display = navLinks.style.display === "none" ? "flex" : "none";
});

navLinks2.forEach(link=>{
    link.addEventListener("click",function(){
        navLinks2.forEach(link => link.classList.remove("activetab"))
        this.classList.add("activetab")
    })
})
    