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
    

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.addtocartbutton button');

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const foodCard = button.closest('.food-card');
            const foodData = {
                image: foodCard.querySelector('img').src,
                name: foodCard.querySelector('.Sandwich-name h4').innerText,
                price: foodCard.querySelector('.sandwich-price h4').innerText,
            };

            // Save food data to localStorage
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push(foodData);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            alert('Item added to cart!');
        });
    });
});

