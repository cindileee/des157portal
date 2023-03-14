(function (){

    "use strict";
    console.log("reading js");


    

//zoom in with overlays
    const overlay1 = document.querySelectorAll("#overlay1");
    const overlay2 = document.querySelectorAll("#overlay2");
    const overlay3 = document.querySelectorAll("#overlay3");

    
    document.querySelector("#dragon").addEventListener("mouseover", function(event){
        event.preventDefault();
        //opens overlay
        overlay1[0].className = "show";
        //zoom in
        document.querySelector("#image").className = "one";
    });

    document.querySelector("#cuffs").addEventListener("mouseover", function(event){
        event.preventDefault();
        overlay3[0].className = "show";
        document.querySelector("#image").className = "three";
    });

    document.querySelector("#bats").addEventListener("mouseover", function(event){
        event.preventDefault();
        overlay2[0].className = "show";
        document.querySelector("#image").className = "two";
    });

    
//zoom out
    document.querySelector("#dragon").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay1[0].className = "hide";
        document.querySelector("#image").className = "start";
    });

    document.querySelector("#cuffs").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay3[0].className = "hide";
        document.querySelector("#image").className = "start";
    });

    document.querySelector("#bats").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay2[0].className = "hide";
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

//auto scroll 3
    let sliderContent2;
    let sliderWidth2;
    let fullSlider2 = document.querySelector('#containerslider2');
    const clonedSlider2 = fullSlider2.innerHTML;

    function animateSlider2() {
        sliderContent2 = document.querySelector('.e');
        sliderWidth2 = sliderContent2.offsetWidth;
        const cloned2 = sliderContent2.cloneNode(true);
        cloned2.className = "f";
        document.querySelector('#slider2').appendChild(cloned2);
        document.querySelector('#slider2').style.left = `-${sliderWidth2}px`;
        repeatAnimation2();
    }

    animateSlider2();
    function repeatAnimation2() {
        fullSlider2.addEventListener("transitionend", function () {
            document.querySelector('#containerslider2').innerHTML = clonedSlider2;
            fullSlider2 = document.querySelector('#slider2');
            animateSlider2();
        });
    }



// //slideshow
//     const myImages = [
//         'fav1_.jpg',
//         'fav2.jpg',
//         'fav4_.jpg',
//         'fav5_.jpg',
//         'fav6_.jpg',
//         'fav7_.jpg',
//         'fav8_.jpg',
//         'fav9_.jpg'
//     ];

//     let currentImage = 0;

//     const slide = document.getElementById('myimage');

//     document.getElementById('next').addEventListener('click', nextPhoto);

//     function nextPhoto(){
//         currentImage++;
//         if (currentImage > myImages.length-1){
//             currentImage = 0;
//         }
//         slide.src = `images/${myImages[currentImage]}`;
//     }

//     document.getElementById('previous').addEventListener('click', previousPhoto);

//     function previousPhoto(){
//         currentImage--;
//         if (currentImage < 0){
//             currentImage = myImages.length -1;
//         }
//         slide.src = `images/${myImages[currentImage]}`;
//     }


})();