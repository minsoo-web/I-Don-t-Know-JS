var images=['https://ifh.cc/g/Nf9b7.jpg','https://ifh.cc/g/egNVs.jpg','https://ifh.cc/g/Y4G44.jpg'];
var num = 0;

function next() {
    var slider=document.getElementById('slider');
    num++;
    if(num >=images.length){
        num = 0 ; //초기화
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num<0){
        num = images.length-1; //맨 마지막으로 갈 수 있게 
    }
    slider.src = images[num];
}