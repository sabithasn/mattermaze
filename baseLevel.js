class BaseLevel{
    constructor(){
        //border
        this.maze8=new Wall (300,600,600,PI/2,"red");
        this.maze17=new Wall (590,300,600,PI,"red");
        this.maze16=new Wall (10,300,600,PI,"red");
        this.maze18=new Wall (300,10,600,PI/2,"red");
        //start
        this.maze1=new Wall (50,100,100,PI/2,"red");
        this.maze2=new Wall (170,55,120,PI,"red");
        //end
        this.maze14=new Wall (170,575,70,PI,"red");
        this.maze11=new Wall (80,470,200,PI/2,"red");
        
        this.maze3=new Wall (390,100,270,PI/2,"red");
        this.maze4=new Wall (130,180,300,PI/2,"red");
        this.maze5=new Wall (350,310,400,PI,"red");
        this.maze6=new Wall (550,180,200,PI/2,"red");
        this.maze7=new Wall (310,270,450,PI/2,"red");
        this.maze9=new Wall (550,370,250,PI/2,"red");
        this.maze11=new Wall (80,470,200,PI/2,"red");
        this.maze10=new Wall (10,540,150,PI,"red");
        this.maze12=new Wall (120,360,250,PI/2,"red");
        this.maze13=new Wall (390,470,260,PI/2,"red");
        this.maze15=new Wall (460,575,60,PI,"red");
        this.maze19=new Wall (170,225,70,PI,"red");
        this.maze20=new Wall (170,225,70,PI,"red");
    }
    display(){
        //doesn't change
        this.maze1.display();
        this.maze2.display();
        this.maze8.display();
        this.maze16.display();
        this.maze17.display();
        this.maze18.display();
        this.maze14.display();
        this.maze11.display();
        
        //does change
        this.maze3.display();
        this.maze4.display();
        this.maze5.display();
        this.maze6.display();
        this.maze7.display();
        this.maze9.display();
        this.maze10.display();
        this.maze12.display();
        this.maze13.display();
        this.maze15.display();
        this.maze19.display();
        this.maze20.display();
    }
    destroy (){
        this.maze3.erase();
        this.maze4.erase();
        this.maze5.erase();
        this.maze6.erase();
        this.maze7.erase();
        this.maze9.erase();
        this.maze10.erase();
        this.maze12.erase();
        this.maze13.erase();
        this.maze15.erase();
        this.maze19.erase();
        this.maze20.erase();

    }
}