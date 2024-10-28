const image_container = document.querySelector('.image_container img')
const image_list = document.querySelectorAll('.image_list img')


for(i=0;i<image_list.length;i++)
{
    image_list[i].addEventListener('click',function(e){
        const imgsrc=e.target.getAttribute('src');
        image_container.setAttribute('src',`${imgsrc}`)
    })
}