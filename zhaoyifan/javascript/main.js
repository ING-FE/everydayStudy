function $(id) {
    return document.getElementById(id);
}

var left = $('left');
var right = $('right');
var interval = null;
console.log(matchMedia('(orientation: landscape)').matches);

left.onmouseenter = function(e) {
    if(matchMedia('(orientation: landscape)').matches)
        Expand(left, right);
}
right.onmouseenter = function(e) {
    if(matchMedia('(orientation: landscape)').matches)
        Expand(right, left);
}

right

function Expand(left, right) {
    // console.log(left.style);
    var width = left.style.width ? 1*(left.style.width.substring(0, left.style.width.length-1)) : 50;
    if(interval !== null)
        return;
    interval = setInterval(function() {
        if(width < 70) {
            left.style.width = (width+2) + '%';
            width += 5;
            right.style.width = 103 - width + '%';
        }
        else {
            clearInterval(interval);
            interval = null;
        }
    }, 5);
}
