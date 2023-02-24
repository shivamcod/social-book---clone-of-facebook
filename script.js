let settingsmenu = document.querySelector('.setting-menu');
let darkbtn = document.getElementById('dark-btn');

function settingsMenuToggle(){
    settingsmenu.classList.toggle("setting-menu-height");
}

darkbtn.onclick = function(){
    darkbtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');

    if(localStorage.getItem('theme') == "light"){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem('theme') == "light"){
    darkbtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}else if(localStorage.getItem('theme') == "dark"){
    darkbtn.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme')
}else{
    localStorage.setItem("theme", "light");
}

let flag = 0;

function controller(x) {
    flag = flag + x;
    slideshow(flag);
}
slideshow(flag);

function slideshow(num) {
    let sliders = document.getElementsByClassName('slider');

    if (num == sliders.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = sliders.length - 1;
        num = sliders.length - 1;
    }
    for (let y of sliders) {
        y.style.display = "none";
    }
    sliders[num].style.display = "block";
}