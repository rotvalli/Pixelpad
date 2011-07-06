function DrawingArea(){
    this.width = 0;
    this.height = 0;
    this.pituus = function(){
        return (this.width * this.height);
    }
    this.bitmap = new Array();
    this.init = function(){
        if(this.width == 0 || this.height == 0){
            return;
        }

        for(p=0;p<this.pituus();p++){
            this.bitmap.push(new Pixel());
        }
    }
    this.draw = function(){
        drawingArea.canvas.width = this.width*scale;
        drawingArea.canvas.height = this.height*scale;

        previewArea.canvas.width = this.width;
        previewArea.canvas.height = this.height;

        for(r=0;r<this.height;r++){
            for(c=0;c<this.width;c++){
                var pixel = this.bitmap[(r*this.width)+c];
                drawingArea.fillStyle = palette[pixel.color];
                drawingArea.fillRect(c*scale, r*scale, scale-border, scale-border);

                previewArea.fillStyle = palette[pixel.color];
                previewArea.fillRect(c, r, 1, 1);
            }
        }
    }
    this.setColor = function(x, y, color){
        var index = Math.ceil( ((Math.ceil((y/scale))-1) * this.width) +  Math.ceil((x/scale)) )-1;
        this.bitmap[index].color = color;
    }
}
function Pixel(){
    this.x = 0;
    this.y = 0;
    this.color = 0;
}