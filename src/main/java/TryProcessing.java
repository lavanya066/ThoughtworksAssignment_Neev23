import processing.core.PApplet;
class Shaping extends PApplet{
    private int width;
    private int height;
    int [] x=new int[4];
    private int yaxis;
    private int speed=0;
    int s=0;
    public void setSpeed(int speed) {
        this.speed = speed;
    }



    public Shaping(int speed,int width, int height, int yaxis,int i) {
        this.width = width;
        this.height = height;

        this.yaxis =( 450*i)/5;
        this.speed=i;

    }
    public void drawEllipse(){


            ellipse(640,480, 90, 90);
        //x[speed]+=speed;


    }

    public int getWidth() {
        return width;
    }


    public int getHeight() {
        return height;
    }

    public int getYaxis() {
        return yaxis;
    }

    public  int getSpeed() {

        return speed;
    }

}

public class TryProcessing extends PApplet {
    public static final int WIDTH = 640;
    public static final int HEIGHT = 480;
    public  int A = WIDTH/5;
    public  int B = HEIGHT/5;
    public  int C = 20;
    public int D = 20;
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
        Shaping sc[]=new Shaping[4];
        for (int i=1;i<=4;i++){

            ellIPSE(sc, i);


        }





    }

    private void ellIPSE(Shaping[] sc, int i) {
        sc[i -1]=new Shaping(0,C,D,B, i);


        ellipse(x[i -1], sc[i -1].getYaxis(), sc[i -1].getWidth(), sc[i -1].getHeight());

        x[i -1]+= i;
    }



    private void paintwhite() {
        background(255);
    }

    public static void main(String[] args) {

        PApplet.main("TryProcessing",args);
    }
}
