interface Shape {
    void draw();
}

class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing a Circle");
    }
}

class Rectangle implements Shape {
    public void draw() {
        System.out.println("Drawing a Rectangle");
    }
}

class Triangle implements Shape {
    public void draw() {
        System.out.println("Drawing a Triangle");
    }
}

public class ShapeFactory {
    public static Shape getShape(String shapeType) {
        if (shapeType == null) return null;
        switch (shapeType.toLowerCase()) {
            case "circle":    return new Circle();
            case "rectangle": return new Rectangle();
            case "triangle":  return new Triangle();
            default: throw new IllegalArgumentException("Unknown shape: " + shapeType);
        }
    }

    public static void main(String[] args) {
        Shape circle    = ShapeFactory.getShape("circle");
        Shape rectangle = ShapeFactory.getShape("rectangle");
        Shape triangle  = ShapeFactory.getShape("triangle");

        circle.draw();
        rectangle.draw();
        triangle.draw();
    }
}
