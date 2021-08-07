document.addEventListener('DOMContentLoaded', function() {

    //Remove greeting when animation is finished
    let greeting = document.querySelector('#greeting');
    greeting.addEventListener('animationend', () => {
        greeting.remove();

        //Create Name Description
        let name_tag = document.createElement('h1');
        name_tag.setAttribute('id','name');
        name_tag.innerHTML = "<span id='name_intro'>My name is </span>Dylan Satow<span id='name_ending' style='opacity: 0'>.com</span>"
        typewriter_parent = document.querySelector('#typewriter-parent');
        name_tag.querySelector('#name_ending').addEventListener('animationend', () => {
            console.log("hey")
            typewriter_parent.classList.add('site-header');
        })
        document.addEventListener('animationend', () => {
            let element = event.target;
            if (element.classList.contains('site-header')) {
                console.log("hi")
                typewriter_parent.style.display = 'none';
                document.querySelector('#content').style.display = "block";
                document.querySelector('#portrait').setAttribute('class', 'load-content');
                document.querySelector('#info-text').setAttribute('class', 'load-content');
            }
            
        })
        document.querySelector('.typewriter').append(name_tag);
    })
})