class Player extends Entity
{
    constructor(xPosition, yPosition, xSpeed, ySpeed, xScale, yScale, rotationSpeed = 1, InertiaAmmount = 0.1)
    {
        super("player90.png", xPosition, yPosition, xSpeed, ySpeed, xScale, yScale);
        this.rotationSpeed = rotationSpeed;

        //inertia is a value added to the rotation and position of the player
        //it increases as the player moves and rotates
        
        this.speed = 5;
        
        //inputs
        this.wIsPressed = false;
        this.aIsPressed = false;
        this.sIsPressed = false;
        this.dIsPressed = false;
        
        //NICE MOVEMENT
        this.rotationIntertia = 0;
        this.positionIntertia = 0;
        this.InertiaAmmount = InertiaAmmount;
        
        this.angle = 0;
        this.postition = createVector(xPosition, yPosition);
        this.icon = loadImage('assets/player.png');

        this.bullets = [];
        this.bulletSpeed = 20
    }
    
    
    playerDraw()
    {
        //this function includes drawing the ui around the player
        push();
        translate(this.x, this.y);
        rotate(this.angle += this.rotationIntertia);
        image(this.icon, this.xScale - 150, this.yScale - 150, this.sprite.width * this.xScale, this.sprite.height * this.yScale);

        // ui

        // inertia indicator
        noStroke();
        fill(20, 20, 200, 50);
        rect(-80, -60, 40, 40);
    
        stroke(0);
        line(-60, -60, -60, -20);
        line(-80, -40, -40, -40);
        fill(200);
        circle(-60 + this.rotationIntertia * 60, -40 - this.positionIntertia * 40, 5);
        translate(0, 0);
        pop();
    }

    playerMovement()
    {
        this.inputManager();
        
        let spriteSizeX = this.sprite.width*this.xScale;
        let spriteSizeY = this.sprite.width*this.yScale;

        this.x = constrain(this.x, spriteSizeX/2, width - spriteSizeX/2);
        this.y = constrain(this.y, spriteSizeY/2, height - spriteSizeY/2);

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

    /*handleInput()
    {
        let spriteSizeX = this.sprite.width*this.xScale;
        let spriteSizeY = this.sprite.width*this.yScale;

        this.x = constrain(this.x, spriteSizeX, width - spriteSizeX);
        this.y = constrain(this.y, 0, height - spriteSizeY);

        this.inputManager();
        if (this.wIsPressed)
        {
            this.setSpeedY(-this.speed);
            console.log("W is pressed");
        } 
        else if (this.sIsPressed)
        {
            this.setSpeedY(this.speed);
            console.log("S is pressed");
        } 
        else 
        {
            this.setSpeedY(0);
        }

        this.setSpeedX(0);
    }
    */
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

    shoot()
    {
        console.log(this.bullets.length)
        if(keyIsDown(32) && frameCount%10    == 0)
        {
            this.bullets.push(new Projectile("bigbullet.png", this.x, this.y, sin(this.angle) * this.bulletSpeed , -cos(this.angle) * this.bulletSpeed, 20, 20));
        }
        for(let i = this.bullets.length - 1; i > 0 ; i--)
        {
            this.bullets[i].drawSprite();
            this.bullets[i].move();

            if(this.bullets[i].edgeCollision())
            {
                this.bullets.splice(i, 1);
                console.log("delete");
            }
        }
    }
}
