let movies=[
    {
        name: "Thor: Love and Thunder",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, repellendus dignissimos tempore natus ex rerum omnis a, doloremque perferendis vero vel iste aut iure. Ad deserunt vel ipsam illum exercitationem molestiae nemo eligendi veritatis eum dolorem blanditiis ab, libero a!",
        image: "thor.jpg"
    },
    {
        name: "Gangubai Kathiawadi",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, repellendus dignissimos tempore natus ex rerum omnis a, doloremque perferendis vero vel iste aut iure. Ad deserunt vel ipsam illum exercitationem molestiae nemo eligendi veritatis eum dolorem blanditiis ab, libero a!",
        image: "gangubai.jpg"
    },
    {
        name: "Jugjug Jeeyo",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, repellendus dignissimos tempore natus ex rerum omnis a, doloremque perferendis vero vel iste aut iure. Ad deserunt vel ipsam illum exercitationem molestiae nemo eligendi veritatis eum dolorem blanditiis ab, libero a!",
        image: "jjj.webp"
    },
    {
        name: "India tour of England 2022",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, repellendus dignissimos tempore natus ex rerum omnis a, doloremque perferendis vero vel iste aut iure. Ad deserunt vel ipsam illum exercitationem molestiae nemo eligendi veritatis eum dolorem blanditiis ab, libero a!",
        image: "engind.jpg"
    },
    {
        name: "Batman",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, repellendus dignissimos tempore natus ex rerum omnis a, doloremque perferendis vero vel iste aut iure. Ad deserunt vel ipsam illum exercitationem molestiae nemo eligendi veritatis eum dolorem blanditiis ab, libero a!",
        image: "batman.jpg"
    },
];
const carousel=document.querySelector('.carousel');
let sliders=[];
let si=0;//to track the current slide
const createSlide= () => {
    if(si>=movies.length)
        si=0;

let slide=document.createElement('div');
var imgElmnt=document.createElement('img');
let content=document.createElement('div');
let h1=document.createElement('h1');
let p=document.createElement('p');

imgElmnt.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[si].name));
p.appendChild(document.createTextNode(movies[si].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(imgElmnt);
carousel.appendChild(slide);
imgElmnt.src= movies[si].image;
si++;

slide.className= 'slider';
content.className= 'slide-content';
h1.className= 'movie-title';
p.className='movie-des';

sliders.push(slide);
if(slide.length)
    sliders[0].style.marginLeft= `calc(-${100 * (sliders.length -2)}% -${30* (sliders.length -2)}px)`;
}
for(let i=0;i<3;i++)
    createSlide();
setInterval(()=>{createSlide();}, 3000);


//Video cards

const videoCards=[...document.querySelectorAll('.vidcard')];
videoCards.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video=item.children[1];
        video.play()
    })
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    })
})

//slider card
let cardContainer= [...document.querySelectorAll('.card-container')];
let prebtns= [...document.querySelectorAll('.pre-btn')];
let nxtbtns= [...document.querySelectorAll('.post-btn')];
cardContainer.forEach((item,i)=>{
    let contDim= item.getBoundingClientRect();
    let contWidth= contDim.width;
    nxtbtns[i].addEventListener('click',()=>{
        item.scrollLeft+= contWidth-200;
    })
    prebtns[i].addEventListener('click',()=>{
        item.scrollLeft-= contWidth+200;
    })
})