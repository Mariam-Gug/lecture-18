let data = [
    {
        id: 1,
        imageUrl: 'https://wallpaperaccess.com/full/147237.png',
        title: 'slide 1',
        url: 'https://store.playstation.com/en-us/product/UP4497-CUSA05725_00-00000000000GOTY5'
    },
    {
        id: 2,
        imageUrl: 'https://images8.alphacoders.com/753/thumb-1920-753199.jpg',
        title: 'slide 2',
        url: 'https://store.playstation.com/en-us/product/UP4497-CUSA05725_00-00000000000GOTY5'
    },
    {
        id: 3,
        imageUrl: 'https://cdn.player.one/sites/player.one/files/2019/12/20/witcher-4.jpg',
        title: 'slide 3',
        url: 'https://store.playstation.com/en-us/product/UP4497-CUSA05725_00-00000000000GOTY5'
    }
]

let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');

let sliderIndex = 0;

// creating a tag
function createATag(item) {
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.setAttribute('target', '_black');
    aTag.classList.add('slide');

    return aTag;
}

// creating img tag
function createImgTag(item) {
    let imgDiv = document.createElement('div');
    imgDiv.classList.add('image-box');
    imgDiv.style.backgroundImage = 'url('+item.imageUrl+')';

    return imgDiv;
}

// creating title tag
function createH2Tag(item) {
    let tagTitle = document.createElement('h2');
    tagTitle.classList.add('slider-title');
    tagTitle.append(item.title);

    return tagTitle;
}

function createDots() {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach( (element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);
        dot.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlider();
        }
        dots.appendChild(dot);
    })

    return dots;
}

function setSlider() {
    sliderContent.innerHTML = ' ';
    let slideItem = createATag(data[sliderIndex]);
    let imgDiv = createImgTag(data[sliderIndex]);
    let tagTitle = createH2Tag(data[sliderIndex]);
    let dots = createDots(data[sliderIndex]);

    slideItem.appendChild(tagTitle);
    slideItem.appendChild(imgDiv);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    currentDotActive();
    console.log(slideItem);
}

function currentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}

function leftArrowClick() {
    if (sliderIndex <=0 ) {
        sliderIndex = data.length - 1;
        setSlider();
        return;
    }
    sliderIndex --;
    setSlider();
}

function rightArrowClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlider();
        return;
    }
    sliderIndex ++;
    setSlider();
}

leftArrow.addEventListener('click', leftArrowClick);
rightArrow.addEventListener('click', rightArrowClick);

setInterval( () => {
    rightArrowClick();
}, 3000);

setSlider();

