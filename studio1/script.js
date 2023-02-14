(function(){
    'use strict';
    console.log('reading js');

    const myform = document.querySelector('#myform');


    const words = [];

    const backbutton = document.getElementById('backbutton');
    const exitbutton = document.getElementById('exit');
    const nextbutton = document.getElementById('nextbutton');
    const submitbutton = document.getElementById('submitbutton');
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const dramarec = document.getElementById('dramarec');

    backbutton.addEventListener('click', function(event){
        event.preventDefault();
        form1.className = 'showing'
        form2.className = 'hidden'

    })

    nextbutton.addEventListener('click', function(event){
        event.preventDefault();

        const formData = document.querySelectorAll("input[type=text]");
        let emptyfields = 0;

        for (const eachWord of formData){
            if (eachWord.value){
                words.push(eachWord.value);
            }
            else{emptyfields++;}
        }

        const fname = document.querySelector('#fname').value;
        const bfname = document.querySelector('#bfname').value;
        const item = document.querySelector('#item').value;
        const place = document.querySelector('#place').value;
        const verb = document.querySelector('#verb').value;
        const year = document.querySelector('#year').value;
        const genre = document.querySelector('#genre').value;
        const fnumber = document.querySelector('#fnumber').value;

        if (fname == ""){
            document.querySelector('#fname').focus();
            
        }

        else if (year== ""){
            document.querySelector('#year').focus();
        }

        else if (bfname == ""){
            document.querySelector('#bfname').focus();
        }

        
        else{
            form1.className = 'hidden'
            form2.className = 'showing'
        }

    })

    exitbutton.addEventListener('click', function(event){
        event.preventDefault();
        form1.className = 'showing'
        dramarec.className = 'hidden'

    })

    submitbutton.addEventListener('click', function(event){
        event.preventDefault();

        const formData = document.querySelectorAll("input[type=text]");
        let emptyfields = 0;

        for (const eachWord of formData){
            if (eachWord.value){
                words.push(eachWord.value);
            }
            else{emptyfields++;}
        }

        const fname = document.querySelector('#fname').value;
        const bfname = document.querySelector('#bfname').value;
        const item = document.querySelector('#item').value;
        const place = document.querySelector('#place').value;
        const verb = document.querySelector('#verb').value;
        const year = document.querySelector('#year').value;
        const genre = document.querySelector('#genre').value;
        const fnumber = document.querySelector('#fnumber').value;

        if (fname == ""){
            document.querySelector('#fname').focus();
            
        }

        else if (bfname == ""){
            document.querySelector('#bfname').focus();
        }

        else if (fnumber == ""){
            document.querySelector('#fnumber').focus();
        }

        else if (genre == ""){
            document.querySelector('#genre').focus();
        }

        else if (verb == ""){
            document.querySelector('#verb').focus();
        }

        else if (place == ""){
            document.querySelector('#place').focus();
        }

        else if (item == ""){
            document.querySelector('#item').focus();
        }

        else{
            const pronoun = document.querySelector('input[name="pronoun"]:checked').value;   

            const synopsis = document.querySelector('#synopsis')

            const yearText = `<span>${year}</span>`;
            const castText = `<span>${fname}, ${bfname}</span>`;
            const genreText = `<span>${genre}</span>`;
            const fnumberText = `<span>${fnumber}</span>`;
            const itemText = `<span>${item}</span>`;



            form2.className = 'hidden'
            dramarec.className = 'showing'


            const myText = `<p>${fname} wants to go ${verb} and asks ${pronoun} best friend, ${bfname}, to tag along. Little do they know, they are about to embark on a once-in-a-life-time journey to find magical ${item} at the mystical land of ${place}.</p>`;

            synopsis.innerHTML = myText;
            yearBlank.innerHTML = yearText;
            castBlank.innerHTML = castText;
            genreBlank.innerHTML = genreText;
            fnumberBlank.innerHTML = fnumberText;
            itemBlank.innerHTML = itemText;

            for (const eachField of formData){
                eachField.value = '';
            }

            
        }
        

    })

    



}());



