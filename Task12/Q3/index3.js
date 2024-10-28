const banner = document.querySelector('.banner');
const images = document.querySelectorAll('.imagecontainer3 img');

for(i=0;i<images.length;i++)
{
    images[i].addEventListener('click', function(e){
        console.log(e.target.getAttribute('src'))
        const imagesrc = e.target.getAttribute('src');
        banner.style.backgroundImage= `url(${imagesrc})`;

    })
}