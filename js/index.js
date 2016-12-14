/**
 * Created by Acer on 2016/12/8.
 */
var block  = document.getElementById("block");
var arrow = document.getElementById("arrow");
var blockMove = document.getElementById("blockMove");
var timer = null;
    arrow.onmousemove  = function () {

        startMove();
    };
    arrow.onmouseout = function () {

            block.classList.remove("blockMove");
        clearInterval(timer);

    };
    function startMove() {
      timer=  setInterval(function () {
          if (block.className!= blockMove){
              block.classList.add("blockMove");
          }

        },3000)
    }


