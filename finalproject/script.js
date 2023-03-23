(function (){

    "use strict";
    console.log("reading js");


//variables
    const overlay1 = document.querySelectorAll("#overlay1");
    const overlay2 = document.querySelectorAll("#overlay2");
    const overlay3 = document.querySelectorAll("#overlay3");
    const overlay4 = document.querySelectorAll("#overlay4");

//change to hotspot image
    document.querySelector("#hotspots").addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector("#dragonimage").src = "images/dragonrobe300.png";
    });

//change to original image
    document.querySelector("#original").addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector("#dragonimage").src = "images/dragonrobe301.png"; 
    });
    
//zoom in on hover and show overlay
    document.querySelector("#center").addEventListener("mouseover", function(event){
        event.preventDefault();
        overlay1[0].className = "show";
        document.querySelector("#dragonimage").src = "images/dragonrobe301.png";
        
    });

    document.querySelector("#topright").addEventListener("mouseover", function(event){
        event.preventDefault();
        overlay2[0].className = "show";
        document.querySelector("#dragonimage").src = "images/dragonrobe301.png";
        
    });

    document.querySelector("#topleft").addEventListener("mouseover", function(event){
        event.preventDefault();
        overlay4[0].className = "show";
        document.querySelector("#dragonimage").src = "images/dragonrobe301.png";
        
    });

    document.querySelector("#bottomcenter").addEventListener("mouseover", function(event){
        event.preventDefault();
        overlay3[0].className = "show";
        document.querySelector("#dragonimage").src = "images/dragonrobe301.png";
        
    });

//zoom out when mouse leaves hotspot 
    document.querySelector("#center").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay1[0].className = "hide";
        document.querySelector("#dragonimage").src = "images/dragonrobe300.png";
        document.querySelector("#dragonimage").className = "start";
    });

    document.querySelector("#topright").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay2[0].className = "hide";
        document.querySelector("#dragonimage").src = "images/dragonrobe300.png";
        document.querySelector("#dragonimage").className = "start";
    });

    document.querySelector("#topleft").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay4[0].className = "hide";
        document.querySelector("#dragonimage").src = "images/dragonrobe300.png";
        document.querySelector("#dragonimage").className = "start";
    });

    document.querySelector("#bottomcenter").addEventListener("mouseout", function(event){
        event.preventDefault();
        overlay3[0].className = "hide";
        document.querySelector("#dragonimage").src = "images/dragonrobe300.png";
        document.querySelector("#dragonimage").className = "start";
    });


//the zoom over hot spot code provided by the professor 
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

    

//auto scroll 1 (qing hua ci)
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



//auto scroll 2 (long pao)
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


//auto scroll 3 (other images)
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





    //sound
    const audio1 = new Audio('sound/qinghuacisound.mp3');
    const audio2 = new Audio('sound/longpao.mp3');

    const sound1 = document.getElementById('qinghuacisound');
    const sound2 = document.getElementById('longpaosound');


    sound1.addEventListener('click', function(event){
        event.preventDefault();
		audio1.play();
    })

    sound2.addEventListener('click', function(event){
        event.preventDefault();
		audio2.play();
        
		
    })
