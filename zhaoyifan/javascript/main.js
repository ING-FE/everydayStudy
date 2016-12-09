const start = Date.now();
class Page {
    constructor(document) {
        this.canvas = document.getElementById('canvas');
    }

    init() {
        this.canvas.height = innerHeight - 4;
        this.canvas.width = innerWidth;
    }
}

class Square {
    constructor(x, y) {
        const LENGTH = 100;
        this.x = x;
        this.y = y;
        this.width = LENGTH;
        this.height = LENGTH;
        this.midX = this.x + this.width / 2;
    }

    draw(context) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    clear(context) {
        context.clearRect(this.x, this.y, this.width, this.height);
    }
    expand() {
        this.x += 10;
    }
    setWidthPercentage(percentage) {
        this.width = 100 * percentage;
        this.x = this.midX - this.width / 2;
    }
}

class Canvas {
    constructor(context) {
        this.context = context;
    }

    drawShape(shape) {
        shape.draw(this.context);
    }

    paint(shapes) {
        for(let i of shapes) {
            i.draw(this.context);
        }
    }
    setStyle(style) {
        this.context.fillStyle = style;
    }
    setFont(font) {
        this.context.font = font;
    }
    drawText(text) {
        this.context.textAlign = 'center';
        this.context.fillText(text, innerWidth / 2, innerHeight / 2); 
    }
}

function init() {

mycvs.setStyle('#30A080');
mycvs.setFont("Bold 72px myFont");
let square = new Square(0, 0);
let squares = [];
for(let i = 0; i < 30; i++) {
    for(let x = 0; x <= i; x++) {
        let y = i - x;
        setTimeout((function(x, y) {
            return function() {
                let square = new Square(x * 100, y * 100);
                square.setWidthPercentage(0.1);
                squares.push(square);
            }
        })(x, y), i * 50);
    }
}
setTimeout(function() {
    for(var s of squares) {
        for(let i = 0; i < 11; i++) {
            setTimeout((function(i, s) {
                return function(){
                    s.setWidthPercentage(0.1 * i);
                }
            })(i, s), i * 20);
        }
    }}, 1500);

mycvs.setStyle('black');
mycvs.drawText('hey');

setInterval(function() {
    mycvs.setStyle('#30A080');
    mycvs.paint(squares);
    if(Date.now() - start > 1550) {
        mycvs.setStyle('black');
        mycvs.drawText('Daily FE');
    }
}, 20);
}

let page = new Page(document);
page.init();
let mycvs = new Canvas(page.canvas.getContext('2d'));
init();
