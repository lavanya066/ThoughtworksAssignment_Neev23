import processing.core.PApplet;

public class TryProcessing extends PApplet {
    public static final int WIDTH = 640;
    public static final int HEIGHT = 480;
    public static final int A = WIDTH/5;
    public static final int B = HEIGHT/5;
    public static final int C = 20;
    public static final int D = 20;
    int [] x=new int[4];
//    int y=1;
    //ball 1 is 1/5th y axis speed is 1
    //ball2 is 2/5th yaxis speed 2
    // ball 3 3/5th y axis speed 3
    // ball 4 is 4/5th y axis speed 4


    @Override
    public void settings() {
        super.settings();
        size(WIDTH, HEIGHT);
    }

    @Override
    public void setup() {

        System.out.println("Called from setup");


    }

    @Override
    public void draw() {

        int s = millis();  // Values from 0 - 59
        for (int i=1;i<=4;i++){
            ellipse(x[i-1],B*i, C, D);
            x[i-1]+=i;

        }





    }

    private void paintwhite() {
        background(255);
    }

    public static void main(String[] args) {

        PApplet.main("TryProcessing",args);
    }
}
