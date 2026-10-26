interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  protected width: number;
  protected height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  protected width: number;
  protected height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return Math.pow(this.height, 2);
  }
}

function resizeShape(shape: Shape): void {
  console.log(`Area obtenida: ${shape.area()}`);
}

resizeShape(new Rectangle(1, 1));
resizeShape(new Square(1, 1));
