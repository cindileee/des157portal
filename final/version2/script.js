(function (){

    "use strict";
    console.log("reading js");


    //overlay
    const openBtns = document.querySelectorAll('.open');
    const closeBtns = document.querySelectorAll('.close');

    for (let i = 0; i <openBtns.length; i++){
        openBtns[i].addEventListener('click', function(event){
            event.preventDefault();
            const thisBtn = event.target.id;
            document.getElementById(`ol-${thisBtn}`).className = 'overlay show';
        })
    }

    for (let i = 0; i <closeBtns.length; i++){
        closeBtns[i].addEventListener('click', function(event){
            document.querySelector('.show').className = 'overlay hide';
        })
    }

    document.addEventListener('keydown', function(event){
        if (event.key === "Escape"){
            document.querySelector('.show').className = 'overlay hide';
        }
        

    });



    

//zoom in with overlays
    const overlay1 = document.querySelectorAll("#overlay1");
    const overlay2 = document.querySelectorAll("#overlay2");
    const overlay3 = document.querySelectorAll("#overlay3");


    
    
    document.querySelector("#center").addEventListener("mouseover", function(event){
        event.preventDefault();
        overlay1[0].className = "show";
        document.querySelector("#dragonimage").src = "images/dragonrobe2.png";
        // const center = 
        
        // document.querySelector("#dragonimage").className = "one";
        // overlay1[0].className = "show";
        
    });

    // document.querySelector("#cuffs").addEventListener("mouseover", function(event){
    //     event.preventDefault();
    //     overlay3[0].className = "show";
    //     document.querySelector("#image").className = "three";
    // });

    // document.querySelector("#bats").addEventListener("mouseover", function(event){
    //     event.preventDefault();
    //     overlay2[0].className = "show";
    //     document.querySelector("#image").className = "two";
    // });

    document.querySelector("#center").addEventListener("mouseout", function(event){
        event.preventDefault();
        // overlay1[0].className = "hide";
        overlay1[0].className = "hide";
        document.querySelector("#dragonimage").src = "images/dragonrobehighlight2.png";
        document.querySelector("#dragonimage").className = "start";
    });


    const hotSpots = document.querySelectorAll('#containerdragon div');
    const theImg = document.querySelector('#dragonimage');
    // will be used to determine which hotspot div you mouse over, if any.
    let thisSpot;
    // will be used to determine when the mouse has stopped moving.
    let movingMouse;

    // This is the function that zooms in on the photo
    function zoomPhoto(event) {
        //update thisSpot with the part of the image the user is mousing over
        thisSpot = event.target.id;
        console.log(`zooming into ${thisSpot}`);
        switch (thisSpot) {
            case 'topleft': theImg.className = 'topleft'; break;
            case 'topright': theImg.className = 'topright'; break;
            // case 'bottomleft': theImg.className = 'bottomleft'; break;
            // case 'bottomright': theImg.className = 'bottomright'; break;
            case 'center': theImg.className = 'center'; break;
            case 'bottomcenter': theImg.className = 'bottomcenter'; break;
            
        }
    }

    // Add event listeners to each of the hotspots
    hotSpots.forEach(function (eachSpot) {
        // when you mouse over a hotspot, zoom in on it.
        // eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseover', function(event){
            zoomPhoto(event);

            

            
            
        });
        // when you mouse out of a hotspot, update thisSpot to 
        // indicate you are not over a hotspot.
        eachSpot.addEventListener('mouseout', function () {
            thisSpot = 'out';
            console.log(thisSpot);
            
        });
    });

    /* This event listener fires while the mouse is moving.
    If the value of thisSpot is 'out' you are not over a hotspot. 
    If you stop moving the mouse for a second or longer while not
    over a hotspot, the image zooms out.
    
    This seems to keep the dizzying effects of constantly zooming in and
    out as you mouse in and out of the hotspots to a minimum, and stops the 
    unintended effect of having the image sometimes slide out of the container
    entirely.
    */
    document.addEventListener('mousemove', function(){
        clearTimeout(movingMouse);
        
        if(thisSpot == 'out'){
            movingMouse = setTimeout(function(){
                theImg.className = 'start';
                console.log('zooming out!');
                
            }, 500);
        }
    });
})();

    // document.querySelector("#cuffs").addEventListener("mouseout", function(event){
    //     event.preventDefault();
    //     overlay3[0].className = "hide";
    //     document.querySelector("#image").className = "start";
    // });

    // document.querySelector("#bats").addEventListener("mouseout", function(event){
    //     event.preventDefault();
    //     overlay2[0].className = "hide";
    //     document.querySelector("#image").className = "start";
    // });

    

    

    
//auto scroll 0
    // let sliderContent0;
    // let sliderWidth0;
    // let fullSlider0 = document.querySelector('#containerslider0');
    // const clonedSlider0 = fullSlider0.innerHTML;

    // function animateSlider0() {
    //     sliderContent0 = document.querySelector('.g');
    //     sliderWidth0 = sliderContent0.offsetWidth;
    //     const cloned0 = sliderContent0.cloneNode(true);
    //     cloned0.className = "h";
    //     document.querySelector('#slider0').appendChild(cloned0);
    //     document.querySelector('#slider0').style.left = `-${sliderWidth0}px`;
    //     repeatAnimation0();
    // }

    // animateSlider0();
    // function repeatAnimation0() {
    //     fullSlider0.addEventListener("transitionend", function () {
    //         document.querySelector('#containerslider0').innerHTML = clonedSlider0;
    //         fullSlider0 = document.querySelector('#slider0');
    //         animateSlider0();
    //     });
    // }

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
    // let sliderContent2;
    // let sliderWidth2;
    // let fullSlider2 = document.querySelector('#containerslider2');
    // const clonedSlider2 = fullSlider2.innerHTML;

    // function animateSlider2() {
    //     sliderContent2 = document.querySelector('.e');
    //     sliderWidth2 = sliderContent2.offsetWidth;
    //     const cloned2 = sliderContent2.cloneNode(true);
    //     cloned2.className = "f";
    //     document.querySelector('#slider2').appendChild(cloned2);
    //     document.querySelector('#slider2').style.left = `-${sliderWidth2}px`;
    //     repeatAnimation2();
    // }

    // animateSlider2();
    // function repeatAnimation2() {
    //     fullSlider2.addEventListener("transitionend", function () {
    //         document.querySelector('#containerslider2').innerHTML = clonedSlider2;
    //         fullSlider2 = document.querySelector('#slider2');
    //         animateSlider2();
    //     });
    // }

    


    const sliderContent2 = document.querySelector('.e');
    const sliderWidth2 = sliderContent2.offsetWidth;
    const cloned2 = sliderContent2.cloneNode(true);
    cloned2.className = "f";
    document.querySelector('#slider2').appendChild(cloned2);
    let root = document.querySelector(':root');
    const endLeftPos = `-${sliderWidth2}px`;    
    root.style.setProperty('--sliderwidth2', endLeftPos);
    console.log(getComputedStyle(root).getPropertyValue('--sliderwidth2'));
    document.querySelector('#slider2').classList.add("animate");

    document.querySelector('#slider2').addEventListener('mouseover', function(){
        document.querySelector('.animate').style.animationPlayState = 'paused';
    });

    document.querySelector('#slider2').addEventListener('mouseout', function(){
        document.querySelector('.animate').style.animationPlayState = 'running';
    });

    document.addEventListener('click', function(event){
        if(event.target.className == 'photo'){
            console.log(event.target.src);
        }
    } );


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


// })();