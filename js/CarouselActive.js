
const leftArrow = document.getElementById("CarouselButtonLeft");
const rightArrow = document.getElementById("CarouselButtonRight");

let slideIndex = 1;
const header = document.getElementById('hatz');
const slides = document.getElementsByClassName("CarouselSlide");

header.innerHTML = `${slideIndex}/${slides.length}`;

const plus = n => showSlides(slideIndex += n);

leftArrow.onclick = () => {
  plus(-1);
  header.innerHTML = `${slideIndex}/${slides.length}`;
}
rightArrow.onclick = () => {
  plus(1);
  header.innerHTML = `${slideIndex}/${slides.length}`;
}

showSlides(slideIndex);

function showSlides(currentSlide) {
    // const slides = document.getElementsByClassName("CarouselSlide");

    // console.log("in functie",currentSlide);
    
    if( currentSlide > slides.length )
        slideIndex = 1;
    
    if( currentSlide < 1 )
        slideIndex = slides.length;
    
    for( let i=0; i<slides.length; i++ )
        slides[i].style.display="none";
    
    slides[slideIndex-1].style.display="block";
}

const play = document.getElementById("PlayButton");
const stop = document.getElementById("StopButton");
var checkbox,s;

const sleep = ms => new Promise (resolve => setTimeout(resolve, ms));

play.onclick = () => {
  checkbox = document.getElementById("CheckBox");
  s = checkbox.value.trim();
  apear();
}

const apear = async() => {
  for( let i=0; i<slides.length; i++ ) {
    slides[i].style.display="block";
    plus(1);
    header.innerHTML = `${slideIndex}/${slides.length}`;
    stop.onclick = () => {
      i = slides.length;
    }
    if( s != '' ) {
      console.log( s );
      await sleep(parseInt(s));
    }
    else {
      await sleep( 1200 );
    }
  }
}

