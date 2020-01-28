function Polygon (sizes) {
  this.sizes = sizes
  this.perimeter = function() {
    return sizes.reduce((acc, item) => {
      return acc + item;
    }, 0)
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
