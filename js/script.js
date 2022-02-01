var pictures = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
var caption = ['Caption 1', 'Caption 2', 'Caption 3', 'Caption 4'];
var i = 0;
var all = pictures.length -1;

function change(x){
    i= i + x;
    if(i>all){
        i = 0;
    }
    if(i<0){
        i = all;
    }
    document.getElementById('image-1').src = 'images/' + pictures[i];
    document.getElementById('caption').innerHTML = caption[i];

}
function slider(){
    window.setInterval('change(1)',3000);
}