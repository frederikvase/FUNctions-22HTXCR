
class Player extends Entity
{
    constructor(imageFileName, xPosition, yPosition, xSpeed, ySpeed, xScale, yScale, rotationSpeed = 1)
    {
        super(imageFileName, xPosition, yPosition, xSpeed, ySpeed, xScale, yScale);
        

        this.rotationSpeed = rotationSpeed;
        this.angle = 0;
        this.postition = createVector(xPosition, yPosition);
        
        
        this.speed = 10;



        //inputs
        this.wInput = false;
        this.aInput = false;
        this.sInput = false;
        this.dInput = false;
        
    }


    movement()
    {
        //Move Using "a" and "d";
        if(this.aInput)
        {
            this.setSpeedY(this.speed);
        } 
        else if (this.dInput)
        {

            this.setSpeedY(-this.speed);
        } 
        else {
            this.setSpeedY(0)
        }

        //move using "w" and "s"
        if(this.wInput)
        {
            this.setSpeedX(this.speed);
        } 
        else if (this.sInput)
        {
            this.setSpeedX(-this.speed); 
        } 
        else 
        {
            this.setSpeedX(0)
        }   this.setSpeedY(0);
    
        
    }

    rotate()
    {
        if(this.aInput)
        {
             this.angle = this.angle - this.rotationSpeed;
        }
        
    }

    playerDraw()
    {
        push();
        translate(this.postition.x, this.postition.y);
        rotate(this.angle);
        image(this.sprite);
        pop();
    }

    inputManager()
    {
        //A
        if(keyIsDown(65))
         {
            console.log("a");
            this.aInput = true;
         }
         else
         {
            this.aInput = false;
         }

         //S
         if(keyIsDown(83))
         {
            console.log("s");
            this.sInput = true;
         }
         else
         {
            this.sInput = false;
         }
         
         //D
         if(keyIsDown(68))
         {
            console.log("d");
            this.dInput = true;
         }
         else
         {
            this.dInput = false;
         }
         
         //W
         if(keyIsDown(87))
         {
            console.log("w");
            this.wInput = true;
         }
         else
         {
            this.wInput = false;
         }
        
    }
}