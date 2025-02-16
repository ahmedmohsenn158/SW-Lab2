/*IMPORTANT NOTES
1- you are using JS Name Casing (CamelCasing)
2- make this code as clean as possible 
3- apply all the concepts you learned during this lab (Naming, comments,  functions)
*/

class point {
  //this constructor is used to construct the pt class
  constructor(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }
}

class Rectangle {
  constructor(startingPoint, width, height) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid Width and Height"); // throws an error in cas of width or height < 0
    }
    this.startingPoint = startingPoint;
    this.width = width; // w is the width
    this.height = height; // h is the height
  }

  // ***************
  // METHODS
  // ***************

  calculateArea() {
    const calculatedArea = this.width * this.height;
    return calculatedArea;
  }

  calculatePerimeter() {
    const calculatedPerimeter = 2 * this.width + 2 * this.height;
    return calculatedPerimeter;
  }
  // getPerimeter() {
  //   return 2 * this.w + 2 * this.h;
  // }

  updateHeight(height) {
    if (height && height > 0) {
      this.height = height;
    }
  }

  updateSides({height,width,startingPoint}) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid Width and Height"); // throws an error in cas of width or height < 0
    }
    this.startingPoint = startingPoint;
    this.width = width;
    this.height = height;
  }

  getHeight() {
    return this.height;
  }

  //function that print the endpoints
  printEndPoints() {
    const topRight = this.startingPoint.xCoordinate + this.width;
    const bottomLeft = this.startingPoint.yCoordinate + this.height;
    console.log("End Point X-Axis (Top Right): " + topRight);
    console.log("End Point Y-Axis (Bottom Left): " + bottomLeft);
  }

  getWidth() {
    return this.width;
  }
}

function createRectangle(width, x, height, y) {
  const mainPoint = new point(x, y);
  const rectangle = new Rectangle(mainPoint, width, height);
  return rectangle;
}

function createSquare(xCoordinate, yCoordinate, height) {
  const mainPoint = new point(xCoordinate, yCoordinate);
  const square = new Rectangle(mainPoint, height, height);
  return square;
}

function constructSquare(xCoordinate, yCoordinate, height) {
  let square = buildObject(height, xCoordinate, height, yCoordinate);
  const squareArea = square.calculateArea();
  const squarePerimeter = square.calculatePerimeter();
  console.log("square Area ", squareArea);
  console.log("square Perimeter ", squarePerimeter);
  return square;
}

const rectangle = createRectangle(2, 3, 5, 4);
const square = createSquare(3,3,5);

console.log(square.calculatePerimeter());
square.printEndPoints();

rectangle.updateHeight(3);
