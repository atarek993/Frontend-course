const banner = document.querySelector('.banner');
const nextbtn = document.querySelector('.banner i:nth-child(3)');
const previousbtn = document.querySelector('.banner i:nth-child(1)');
let imageindex = 0;
const heading = document.querySelector('.banner h1')

let products = [
    {
        urlimage: 'person.jpg',
        content: 'slider2',
    },
    {
        urlimage: 'logo.png',
        content: 'slider3',
    },
    {
        urlimage: 'Untitle2d.jpg',
        content: 'slider4',
    }
];

let nextslider = () => {
    imageindex ++
    if(imageindex> products.length -1)
    {
        imageindex=0
    }
    banner.style.backgroundImage = `url(../assets/images/${products[imageindex].urlimage})`;
    heading.textContent = `${products[imageindex].content}`
};

let previouslider = () => { 
    imageindex--
    if(imageindex<0)
    {
        imageindex = products.length -1
    }
    banner.style.backgroundImage = `url(../assets/images/${products[imageindex].urlimage})`;
    heading.textContent = `${products[imageindex].content}`


}

nextbtn.addEventListener('click', nextslider);
previousbtn.addEventListener('click',previouslider)
