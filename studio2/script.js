(function (){

    "use strict";
    console.log("reading js");


    

//zoom in with overlays
    const overlay = document.querySelectorAll("#overlay");

    
    document.querySelector("#dragon").addEventListener("mouseover", function(event){
        event.preventDefault();
        //opens overlay
        overlay[0].className = "show";
        //zoom in
        document.querySelector("#image").className = "one";
    });

    document.querySelector("#cuffs").addEventListener("mouseover", function(event){
        event.preventDefault();
        overlay[2].className = "show";
        document.querySelector("#image").className = "three";
    });

    document.querySelector("#bats").addEventListener("mouseover", function(event){
        event.preventDefault();
        overlay[1].className = "show";
        document.querySelector("#image").className = "two";
    });

    
//zoom out
    document.querySelector("#dragon").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay[0].className = "hide";
        document.querySelector("#image").className = "start";
    });

    document.querySelector("#cuffs").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay[2].className = "hide";
        document.querySelector("#image").className = "start";
    });

    document.querySelector("#bats").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay[1].className = "hide";
        document.querySelector("#image").className = "start";
    });

    


//auto scroll 1
    let sliderContent;
    let sliderWidth;
    let fullSlider = document.querySelector('#containerslider');
    const clonedSlider = fullSlider.innerHTML;

    function animateSlider() {
        sliderContent = document.querySelector('.a');
        sliderWidth = sliderContent.offsetWidth;
        const cloned = sliderContent.cloneNode(true);
        cloned.className = "b";
        document.querySelector('#slider').appendChild(cloned);
        document.querySelector('#slider').style.left = `-${sliderWidth}px`;
        repeatAnimation();
    }

    animateSlider();
    function repeatAnimation() {
        fullSlider.addEventListener("transitionend", function () {
            document.querySelector('#containerslider').innerHTML = clonedSlider;
            fullSlider = document.querySelector('#slider');
            animateSlider();
        });
    }



//auto scroll 2
    let sliderContent1;
    let sliderWidth1;
    let fullSlider1 = document.querySelector('#containerslider1');
    const clonedSlider1 = fullSlider1.innerHTML;

    function animateSlider1() {
        sliderContent1 = document.querySelector('.c');
        sliderWidth1 = sliderContent1.offsetWidth;
        const cloned1 = sliderContent1.cloneNode(true);
        cloned1.className = "d";
        document.querySelector('#slider1').appendChild(cloned1);
        document.querySelector('#slider1').style.left = `-${sliderWidth1}px`;
        repeatAnimation1();
    }

    animateSlider1();
    function repeatAnimation1() {
        fullSlider1.addEventListener("transitionend", function () {
            document.querySelector('#containerslider1').innerHTML = clonedSlider1;
            fullSlider1 = document.querySelector('#slider1');
            animateSlider1();
        });
    }




//slideshow
    const myImages = [
       'fav1.png',
       'fav5.png',
       'fav6.png',
       'fav7.png',
       'fav8.png',
       'fav9.png',
    ];

    let currentImage = 0;

    const slide = document.getElementById('myimage');

    document.getElementById('next').addEventListener('click', nextPhoto);

    function nextPhoto(){
        currentImage++;
        if (currentImage > myImages.length-1){
            currentImage = 0;
        }
        slide.src = `images/${myImages[currentImage]}`;
    }

    document.getElementById('previous').addEventListener('click', previousPhoto);

    function previousPhoto(){
        currentImage--;
        if (currentImage < 0){
            currentImage = myImages.length -1;
        }
        slide.src = `images/${myImages[currentImage]}`;
    }


})();