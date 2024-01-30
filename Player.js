
class Player extends Entity
{
    constructor(imageFileName, xPosition, yPosition, xSpeed, ySpeed, xScale, yScale, rotationSpeed = 1, InertiaAmmount = 0.1)
    {
        super(imageFileName, xPosition, yPosition, xSpeed, ySpeed, xScale, yScale);
        this.icon = loadImage('assets/player.png') //change this to the actual player icon

        this.rotationSpeed = rotationSpeed;

        //inertia is a value added to the rotation and position of the player
        //it increases as the player moves and rotates
        this.rotationIntertia = 0;
        this.positionIntertia = 0;
        this.InertiaAmmount = InertiaAmmount;
        
        this.angle = 0;
        this.postition = createVector(xPosition, yPosition);
        
        
        this.speed = 10;



        //inputs
        this.wIsPressed = false;
        this.aIsPressed = false;
        this.sIsPressed = false;
        this.dIsPressed = false;
        
    }

    playerDraw()
    {
        //this function includes drawing the ui around the player

        push();
        translate(this.x, this.y);
        rotate(this.angle += this.rotationIntertia);
        image(this.icon, (this.xScale * 20) * -1, (this.yScale * 12) * -1, this.sprite.width * this.xScale, this.sprite.height * this.yScale);

        //ui

        //inertia indicator
        noStroke()
        fill(20, 20, 200, 50)
        rect(-80, -60, 40, 40)
    
        stroke(0)
        line(-60, -60, -60, -20)
        line(-80, -40, -40, -40)
        fill(200)
        circle(-60 + this.rotationIntertia * 60, -40 - this.positionIntertia * 40, 5)



        translate(0, 0)
        pop();
    }

    playerMove()
    {
        //move forward
        if(this.wIsPressed == true)
        {
            this.y = this.y - cos(this.angle) * this.speed;
            this.x = this.x + sin(this.angle) * this.speed;

            this.positionIntertia = this.positionIntertia + this.InertiaAmmount;
        }

        //move backwards
        if(this.sIsPressed == true)
        {
            this.y = this.y + cos(this.angle) * this.speed / 2;
            this.x = this.x - sin(this.angle) * this.speed / 2;

            this.positionIntertia = this.positionIntertia - this.InertiaAmmount;
        }

        //clockwise "D"
        if(this.dIsPressed == true)
        {
            this.rotationIntertia = this.rotationIntertia + this.InertiaAmmount;
            this.angle = this.angle + this.rotationSpeed;
        }

        //counter clockwise "A"
        if(this.aIsPressed == true)
        {
            this.rotationIntertia = this.rotationIntertia - this.InertiaAmmount;
            this.angle = this.angle - this.rotationSpeed;
        }


        //intertia

        //rotation
        if(this.rotationIntertia > 0)
        {
            this.rotationIntertia = this.rotationIntertia - this.InertiaAmmount / 2;
        }
        if(this.rotationIntertia < 0)
        {
            this.rotationIntertia = this.rotationIntertia + this.InertiaAmmount / 2;
        }

        //positional
        this.y = this.y - cos(this.angle) * this.positionIntertia * 2;
        this.x = this.x + sin(this.angle) * this.positionIntertia * 2;

        if(this.positionIntertia > 0)
        {
            this.positionIntertia = this.positionIntertia - this.InertiaAmmount / 2;
        }
        if(this.positionIntertia < 0)
        {
            this.positionIntertia = this.positionIntertia + this.InertiaAmmount / 2;
        }
    }

    inputManager()
    {
        //A
        if(keyIsDown(65))
         {
            //console.log("a");
            this.aIsPressed = true;
         }
         else
         {
            this.aIsPressed = false;
         }

         //S
         if(keyIsDown(83))
         {
            //console.log("s");
            this.sIsPressed = true;
         }
         else
         {
            this.sIsPressed = false;
         }
         
         //D
         if(keyIsDown(68))
         {
            //console.log("d");
            this.dIsPressed = true;
         }
         else
         {
            this.dIsPressed = false;
         }
         
         //W
         if(keyIsDown(87))
         {
            //console.log("w");
            this.wIsPressed = true;
         }
         else
         {
            this.wIsPressed = false;
         }
        
    }

}