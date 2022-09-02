package com.thoughtworks.rectangle;

public class Rectangle{
    private final double length;
    private final double breadth;
    public Rectangle(Double length,Double breadth) {
        this.length = length;
        this.breadth=breadth;
    }

    public double area() {
        
        return length*breadth;
    }

    

}