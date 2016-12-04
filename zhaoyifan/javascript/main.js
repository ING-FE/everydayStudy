function $(id) {
    return document.getElementById(id);
}

var left = {};
var right = {};
left.div = $('left');
right.div = $('right');
left.title = $('leftTitle');
right.title = $('rightTitle');
left.content = $('leftContent');
right.content = $('rightContent');
console.log(right.text);

var interval = null;
const PERCENTAGE = 70;
var step = 5;
console.log(matchMedia('(orientation: landscape)').matches);

if(matchMedia('(orientation: landscape)').matches) {

    left.div.onmouseenter = function(e) {
        Expand(left, right, PERCENTAGE);
    }

    right.div.onmouseenter = function(e) {
        Expand(right, left, PERCENTAGE);
    }

    left.div.onclick = function(e) {
        Expand(left, right, 100);
        console.log(((100 - PERCENTAGE) / step) * 1000);
        setTimeout(function() {showContent(left.content)}, 100);
        setTimeout(function() {
            left.title.style.display = 'none';
            right.title.style.display = 'none';
        }, 100);
    }
}else{
    left.div.onclick = function(e) {
        setTimeout(function() {showContent(left.content)}, 100);
        setTimeout(function() {
            left.title.style.display = 'none';
            right.title.style.display = 'none';
            right.div.style.display = 'none';
            left.div.style.height = '100%';
        }, 100);
    }
}


function Expand(source, destination, targetWidth) {
    var width = source.div.style.width ? 1*(source.div.style.width.substring(0, source.div.style.width.length-1)) : 50;
    // console.log(width.width);
    if(interval !== null)
        return;
    interval = setInterval(function() {
        if(width < targetWidth) {
            source.div.style.width = (width+5) + '%';
            console.log(source.div.style.width)
            width += step;
            destination.div.style.width = 100 - width + '%';
        }
        else {
            clearInterval(interval);
            interval = null;
        }
    }, 5);
}


function showContent(target) {
    target.style.display = 'block';
}
function hideContent(target) {

}