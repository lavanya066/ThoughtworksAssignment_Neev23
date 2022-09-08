package com.thoughtworks.rectangle;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.closeTo;

import org.junit.jupiter.api.Test;
public class RectangleTest {
    @Test
    void shouldReturnAreaWhenLengthBreadthIsGiven() {
        Rectangle factorial = new Rectangle(3.2476,8.954);
        double val = factorial.area();
        
        assertThat(val,closeTo(29.079,0.001));


    }
    @Test
    void shouldReturnPerimeterWhenLengthBreadthIsGiven() {
        Rectangle factorial = new Rectangle(3.2476,8.954);
        double val = factorial.perimeter();
        
        assertThat(val,closeTo(24.4,0.01));


    }

    

    
}
