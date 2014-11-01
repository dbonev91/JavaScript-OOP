var Shapes = (function() {
    var Shape = (function () {
        function Shape(x, y, color) {
            this._x = x;
            this._y = y;
            this._color = color;
        }

        Shape.prototype = {
            serialize: function () {
                var serializedShape = {
                    x: this._x,
                    y: this._y,
                    color: this._color,
                    canvas: document.getElementById("shapesContainer").getContext("2d")
                };

                return serializedShape;
            }
        };

        return Shape;
    }());

    var Rectangle = (function () {
        function Rectangle(x, y, color, width, height) {
            Shape.call(this, x, y, color);
            this._width = width;
            this._height = height;
        }

        Rectangle.prototype = new Shape();

        Rectangle.prototype.serialize = function () {
            var serializedRect = Shape.prototype.serialize.call(this);
            serializedRect.width = this._width;
            serializedRect.height = this._height;
            return serializedRect;
        };

        Rectangle.prototype.draw = function () {
            this.serialize().canvas.beginPath();
            this.serialize().canvas.fillStyle = this.serialize().color;
            this.serialize().canvas.fillRect(this.serialize().x,
                this.serialize().y, this.serialize().width, this.serialize().height);
        };

        return Rectangle;
    }());

    var Triangle = (function () {
        function Triangle(x, y, color, x2, y2, x3, y3) {
            Shape.call(this, x, y, color);
            this._x2 = x2;
            this._y2 = y2;
            this._x3 = x3;
            this._y3 = y3;
        }

        Triangle.prototype = new Shape();

        Triangle.prototype.serialize = function () {
            var serializedTriangle = Shape.prototype.serialize.call(this);
            serializedTriangle.x2 = this._x2;
            serializedTriangle.y2 = this._y2;
            serializedTriangle.x3 = this._x3;
            serializedTriangle.y3 = this._y3;
            return serializedTriangle;
        };

        Triangle.prototype.draw = function () {
            this.serialize().canvas.beginPath();
            this.serialize().canvas.fillStyle = this.serialize().color;
            this.serialize().canvas.moveTo(this.serialize().x, this.serialize().y);
            this.serialize().canvas.lineTo(this.serialize().x2 + this.serialize().x, this.serialize().y2 + this.serialize().y);
            this.serialize().canvas.lineTo(this.serialize().x3 + this.serialize().x, this.serialize().y3 + this.serialize().y);
            this.serialize().canvas.fill();
        };

        return Triangle;
    }());

    var Segment = (function () {
        function Segment(x, y, color, x2, y2) {
            Shape.call(this, x, y, color);
            this._x2 = x2;
            this._y2 = y2;
        }

        Segment.prototype = new Shape();

        Segment.prototype.serialize = function () {
            var serializedSegment = Shape.prototype.serialize.call(this);
            serializedSegment.x2 = this._x2;
            serializedSegment.y2 = this._y2;
            return serializedSegment;
        };

        Segment.prototype.draw = function () {
            this.serialize().canvas.beginPath();
            this.serialize().canvas.moveTo(this.serialize().x, this.serialize().y);
            this.serialize().canvas.lineTo(this.serialize().x2 + this.serialize().x, this.serialize().y2 + this.serialize().y);
            this.serialize().canvas.strokeStyle = this.serialize().color;
            this.serialize().canvas.stroke();
        };

        return Segment;
    }());

    var Point = (function () {
        function Point(x, y, color) {
            Shape.call(this, x, y, color);
        }

        Point.prototype = new Shape();

        Point.prototype.serialize = function () {
            var serializedPoint = Shape.prototype.serialize.call(this);
            return serializedPoint;
        };

        Point.prototype.draw = function () {
            this.serialize().canvas.beginPath();
            this.serialize().canvas.fillStyle = this.serialize().color;
            this.serialize().canvas.fillRect(this.serialize().x, this.serialize().y, 3, 3);
        };

        return Point;
    }());

    return {
        Shape: Shape,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Segment: Segment,
        Point: Point
    };
}());
