/**
 * Created by Acer on 2016/12/8.
 */
var block  = document.getElementById("block");
var arrow = document.getElementById("arrow");
var blockMove = document.getElementById("blockMove");
    arrow.onmousemove  = function () {
       if (block.className!=blockMove){
           block.classList.add("blockMove");
       }
    };
    arrow.onmouseout = function () {

            block.classList.remove("blockMove");

    }


