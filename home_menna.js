function navigat(index){
    var slider = document.getElementById('slider');
    slider.style.transform = `translateX(${index * -100}vw)`;
}