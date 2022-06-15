let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let night = document.querySelector('.night');

window.onscroll = function(){
    
    let value = scrollY;

    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px'; 
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value * 1.1 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';

    night.style.fontSize = value + 'px';

    if(scrollY >= 70){
        night.style.fontSize = 70 + 'px';
        night.style.position = 'fixed';

        if(scrollY >=425){
            night.style.display = 'none';
        }else{
            night.style.display = 'block';
        }

        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#86b2d1, #10001f)';

        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
        }
    }
}