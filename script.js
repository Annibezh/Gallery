let imageSrc = [
    "https://images.unsplash.com/photo-1513432761694-4b124eafe01b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80",
    "https://images.unsplash.com/photo-1532965119518-c0450e1bb4da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1194&q=80",
    "https://images.unsplash.com/photo-1531301677344-b7f85559b2f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1787&q=80",
    "https://images.unsplash.com/photo-1524311564100-a4c09ad2ba00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1029&q=80",
    "https://images.unsplash.com/photo-1531302599528-26484f20566b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1187&q=80"
]

for(let i = 0; i < imageSrc.length - 1; i++){
    $(".slider").append('<div class="slide"><div class="content"><h1>Some text here</h1>' + 
                        '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde provident magnam possimus dignissimos ab a!</p></div></div>');
    $(".slide:nth-child(" + (i+1) + ")").css('background', 'url(' + imageSrc[i] + ') no-repeat center top/cover');
}
$(".slide:nth-child(" + imageSrc.length + ")").css('background', 'url(' + imageSrc[imageSrc.length - 1] + ') no-repeat center top/cover');

const slides = document.querySelectorAll('.slide');
let auto = false;
const intervalTime = 5000;
let slideInterval;

function autoNextSlide() {
    if(auto){
        slideInterval = setInterval(nextSlide, intervalTime);
    }
}

function nextSlide() {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }
    else{
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

function prevSlide() {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }
    else{
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

$("#next").on("click", nextSlide);

$("#prev").on("click", prevSlide);

$("#play").on("click", function(){
    window.clearInterval(slideInterval);
    auto = true;
    autoNextSlide();
});

$("#pause").on("click", function(){
    auto = false;
    window.clearInterval(slideInterval);
});

let fullscreen = true;
$("#resize").on("click", function(){
    if(fullscreen){
        $(".slider").css('width', '100vw');
        $(".slider").css('height', '100vh');
        $(".slider").css('margin-top', '0');
        $(".bottom-buttons-container").css('bottom', '5%');
        $("#next").css('right', '5%');
        $("#prev").css('left', '5%');
        $("#resize").css('bottom', '5%');
        $("#resize").css('right', '5%');
        $("#resize").html('<i class="fas fa-compress"></i>');
        fullscreen = false;
        return;
    }
    if(!fullscreen){
        $(".slider").css('width', '80vw');
        $(".slider").css('height', '60vh');
        $(".slider").css('margin-top', '20vh');
        $(".bottom-buttons-container").css('bottom', '21%');
        $("#next").css('right', '11%');
        $("#prev").css('left', '11%');
        $("#resize").css('bottom', '21%');
        $("#resize").css('right', '11%');
        $("#resize").html('<i class="fas fa-expand"></i>');
        fullscreen = true;
        return;
    }
    
});
